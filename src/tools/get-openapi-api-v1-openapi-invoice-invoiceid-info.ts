import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { TINKOFF_BUSINESS_OPENAPI_BASE_URL } from "../tinkoff-business-api-base.js";
import { tinkoffBusinessRequest } from "../tinkoff-business-request.js";

export const tinkoffBusinessGetOpenapiApiV1OpenapiInvoiceInvoiceidInfoTool = {
  name: "tinkoff_business_get_openapi_api_v1_openapi_invoice_invoiceid_info",
  description: "Retrieves invoice by invoice id information for the authenticated Tinkoff Business account. Docs: https://developer.tbank.ru/docs/api/get-api-v-1-invoice-invoice-id-info",
  inputSchema: {
    invoice_id: z.string().min(1),
    query: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
    body: z.unknown().optional(),
    headers: z.record(z.string(), z.string()).optional()
  },
  cb: async ({
    invoice_id,
    query,
    body,
    headers
  }: {
    invoice_id: string;
    query?: Record<string, string | number | boolean>;
    body?: unknown;
    headers?: Record<string, string>;
  }) => {
    const resolvedUrl = `${TINKOFF_BUSINESS_OPENAPI_BASE_URL}/v1/openapi/invoice/{invoiceId}/info`.replace("{invoiceId}", encodeURIComponent(invoice_id));

    const data = await tinkoffBusinessRequest("GET", resolvedUrl, {
      query,
      body,
      headers
    });

    return mcpResponse(data);
  }
};
