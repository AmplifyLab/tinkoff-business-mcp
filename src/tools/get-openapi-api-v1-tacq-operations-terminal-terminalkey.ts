import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { TINKOFF_BUSINESS_OPENAPI_BASE_URL } from "../tinkoff-business-api-base.js";
import { tinkoffBusinessRequest } from "../tinkoff-business-request.js";

export const tinkoffBusinessGetOpenapiApiV1TacqOperationsTerminalTerminalkeyTool = {
  name: "tinkoff_business_get_openapi_api_v1_tacq_operations_terminal_terminalkey",
  description: "Retrieves tacq operations terminal by terminal key for the authenticated Tinkoff Business account. Docs: https://developer.tbank.ru/docs/api/get-api-v-1-tacq-operations-terminal-terminalkey",
  inputSchema: {
    terminal_key: z.string().min(1),
    query: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
    body: z.unknown().optional(),
    headers: z.record(z.string(), z.string()).optional()
  },
  cb: async ({
    terminal_key,
    query,
    body,
    headers
  }: {
    terminal_key: string;
    query?: Record<string, string | number | boolean>;
    body?: unknown;
    headers?: Record<string, string>;
  }) => {
    const resolvedUrl = `${TINKOFF_BUSINESS_OPENAPI_BASE_URL}/v1/tacq/operations/terminal/{terminalKey}`.replace("{terminalKey}", encodeURIComponent(terminal_key));

    const data = await tinkoffBusinessRequest("GET", resolvedUrl, {
      query,
      body,
      headers
    });

    return mcpResponse(data);
  }
};
