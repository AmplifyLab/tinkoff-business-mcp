import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { TINKOFF_BUSINESS_SECURED_OPENAPI_BASE_URL } from "../tinkoff-business-api-base.js";
import { tinkoffBusinessRequest } from "../tinkoff-business-request.js";

export const tinkoffBusinessPostApiV2OpenapiAmendmentTool = {
  name: "tinkoff_business_post_api_v2_openapi_amendment",
  description: "Creates or submits amendment for the authenticated Tinkoff Business account. Docs: https://developer.tbank.ru/docs/api/post-api-v-2-send-amendment-reference",
  inputSchema: {
    query: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
    body: z.unknown().optional(),
    headers: z.record(z.string(), z.string()).optional()
  },
  cb: async ({
    query,
    body,
    headers
  }: {
    query?: Record<string, string | number | boolean>;
    body?: unknown;
    headers?: Record<string, string>;
  }) => {
    // MUTATION_DISABLED_GUARD: remove this block to re-enable endpoint execution.
    return mcpResponse({
      ok: false,
      error: "HTTP 405 Method Not Allowed",
      message: "This mutating MCP tool is temporarily disabled."
    });

    const resolvedUrl = `${TINKOFF_BUSINESS_SECURED_OPENAPI_BASE_URL}/v2/openapi/amendment`;

    const data = await tinkoffBusinessRequest("POST", resolvedUrl, {
      query,
      body,
      headers
    });

    return mcpResponse(data);
  }
};
