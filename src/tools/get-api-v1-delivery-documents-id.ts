import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { TINKOFF_BUSINESS_SECURED_OPENAPI_BASE_URL } from "../tinkoff-business-api-base.js";
import { tinkoffBusinessRequest } from "../tinkoff-business-request.js";

export const tinkoffBusinessGetApiV1DeliveryDocumentsIdTool = {
  name: "tinkoff_business_get_api_v1_delivery_documents_id",
  description: "Retrieves delivery documents by id for the authenticated Tinkoff Business account. Docs: https://developer.tbank.ru/docs/api/get-api-v-1-delivery-documents-id",
  inputSchema: {
    id: z.string().min(1),
    query: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
    body: z.unknown().optional(),
    headers: z.record(z.string(), z.string()).optional()
  },
  cb: async ({
    id,
    query,
    body,
    headers
  }: {
    id: string;
    query?: Record<string, string | number | boolean>;
    body?: unknown;
    headers?: Record<string, string>;
  }) => {
    const resolvedUrl = `${TINKOFF_BUSINESS_SECURED_OPENAPI_BASE_URL}/v1/delivery/documents/{id}`.replace("{id}", encodeURIComponent(id));

    const data = await tinkoffBusinessRequest("GET", resolvedUrl, {
      query,
      body,
      headers
    });

    return mcpResponse(data);
  }
};
