const TINKOFF_BUSINESS_API_TOKEN = process.env.TINKOFF_BUSINESS_API_TOKEN?.trim();

if (!TINKOFF_BUSINESS_API_TOKEN) {
  throw new Error("Missing TINKOFF_BUSINESS_API_TOKEN environment variable.");
}

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type RequestOptions = {
  query?: Record<string, unknown>;
  body?: unknown;
  headers?: Record<string, string>;
};

function buildUrl(path: string, query?: Record<string, unknown>): string {
  const url = new URL(path);

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value === undefined || value === null) continue;
      url.searchParams.set(key, String(value));
    }
  }

  return url.toString();
}

function getCandidatePaths(path: string): string[] {
  const source = new URL(path);
  const normalizedPath = source.pathname;

  if (normalizedPath.endsWith("/")) {
    const trimmed = normalizedPath.replace(/\/+$/, "");
    return [
      `${source.origin}${normalizedPath}${source.search}${source.hash}`,
      `${source.origin}${trimmed}${source.search}${source.hash}`
    ];
  }

  return [
    `${source.origin}${normalizedPath}${source.search}${source.hash}`,
    `${source.origin}${normalizedPath}/${source.search}${source.hash}`
  ];
}

function buildBody(options?: RequestOptions): string | undefined {
  if (!options || !("body" in options) || options.body === undefined) {
    return undefined;
  }
  return JSON.stringify(options.body);
}

function buildHeaders(
  body: string | undefined,
  extraHeaders?: Record<string, string>
): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/json",
    Authorization: `Bearer ${TINKOFF_BUSINESS_API_TOKEN}`
  };

  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  if (extraHeaders) {
    for (const [key, value] of Object.entries(extraHeaders)) {
      if (value) {
        headers[key] = value;
      }
    }
  }

  return headers;
}

async function parseSuccessPayload(response: Response): Promise<unknown> {
  if (response.status === 204 || response.status === 205 || response.status === 304) {
    return null;
  }

  const raw = await response.text();
  if (!raw) {
    return null;
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return JSON.parse(raw);
  }

  return raw;
}

async function getFailureDetails(
  method: HttpMethod,
  url: string,
  response: Response
): Promise<string> {
  const responseBody = await response.text();
  const details = {
    method,
    url,
    status: response.status,
    statusText: response.statusText,
    responseHeaders: Object.fromEntries(response.headers.entries()),
    responseBody
  };
  return JSON.stringify(details, null, 2);
}

export async function tinkoffBusinessRequest(
  method: HttpMethod,
  path: string,
  options?: RequestOptions
): Promise<unknown> {
  const candidatePaths = getCandidatePaths(path);
  const failures: string[] = [];

  for (let index = 0; index < candidatePaths.length; index++) {
    const currentPath = candidatePaths[index];
    const url = buildUrl(currentPath, options?.query);
    const body = buildBody(options);
    const response = await fetch(url, {
      method,
      headers: buildHeaders(body, options?.headers),
      body
    });

    if (response.ok) {
      return parseSuccessPayload(response);
    }

    failures.push(await getFailureDetails(method, url, response));

    // Retry once with path variant when API is strict about trailing slash.
    if (response.status === 404 && index < candidatePaths.length - 1) {
      continue;
    }

    break;
  }

  throw new Error(`Tinkoff Business API request failed.\n${failures.join("\n---\n")}`);
}
