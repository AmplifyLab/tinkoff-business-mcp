import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { TINKOFF_BUSINESS_SECURED_OPENAPI_BASE_URL } from "../tinkoff-business-api-base.js";
import { tinkoffBusinessRequest } from "../tinkoff-business-request.js";

export const tinkoffBusinessPostApiV1DswSecureFileLoaderPaymentsUploadTool = {
  name: "tinkoff_business_post_api_v1_dsw_secure_file_loader_payments_upload",
  description: "Creates or submits dsw secure file loader payments upload for the authenticated Tinkoff Business account. Docs: https://developer.tbank.ru/docs/api/post-api-v-1-dsw-secure-file-loader-payments-upload",
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

    const resolvedUrl = `${TINKOFF_BUSINESS_SECURED_OPENAPI_BASE_URL}/v1/dsw/secure-file-loader/payments-upload`;

    const data = await tinkoffBusinessRequest("POST", resolvedUrl, {
      query,
      body,
      headers
    });

    return mcpResponse(data);
  }
};
