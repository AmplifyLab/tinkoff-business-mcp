import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { TINKOFF_BUSINESS_OPENAPI_BASE_URL } from "../tinkoff-business-api-base.js";
import { tinkoffBusinessRequest } from "../tinkoff-business-request.js";

export const tinkoffBusinessGetOpenapiApiV1TacqTerminalsTool = {
  name: "tinkoff_business_get_openapi_api_v1_tacq_terminals",
  description: "Retrieves tacq terminals for the authenticated Tinkoff Business account. Docs: https://developer.tbank.ru/docs/api/get-api-v-1-tacq-terminals",
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
    const resolvedUrl = `${TINKOFF_BUSINESS_OPENAPI_BASE_URL}/v1/tacq/terminals`;

    const data = await tinkoffBusinessRequest("GET", resolvedUrl, {
      query,
      body,
      headers
    });

    return mcpResponse(data);
  }
};
