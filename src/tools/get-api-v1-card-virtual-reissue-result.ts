import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { TINKOFF_BUSINESS_SECURED_OPENAPI_BASE_URL } from "../tinkoff-business-api-base.js";
import { tinkoffBusinessRequest } from "../tinkoff-business-request.js";

export const tinkoffBusinessGetApiV1CardVirtualReissueResultTool = {
  name: "tinkoff_business_get_api_v1_card_virtual_reissue_result",
  description: "Retrieves card virtual reissue result for the authenticated Tinkoff Business account. Docs: https://developer.tbank.ru/docs/api/get-api-v-1-card-virtual-reissue-result",
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
    const resolvedUrl = `${TINKOFF_BUSINESS_SECURED_OPENAPI_BASE_URL}/v1/card/virtual/reissue/result`;

    const data = await tinkoffBusinessRequest("GET", resolvedUrl, {
      query,
      body,
      headers
    });

    return mcpResponse(data);
  }
};
