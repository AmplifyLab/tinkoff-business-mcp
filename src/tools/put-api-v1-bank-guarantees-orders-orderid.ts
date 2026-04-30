import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { TINKOFF_BUSINESS_SECURED_OPENAPI_BASE_URL } from "../tinkoff-business-api-base.js";
import { tinkoffBusinessRequest } from "../tinkoff-business-request.js";

export const tinkoffBusinessPutApiV1BankGuaranteesOrdersOrderidTool = {
  name: "tinkoff_business_put_api_v1_bank_guarantees_orders_orderid",
  description: "Updates bank guarantees orders by order id for the authenticated Tinkoff Business account. Docs: https://developer.tbank.ru/docs/api/put-api-v-1-bank-guarantees-orders-order-id",
  inputSchema: {
    order_id: z.string().min(1),
    query: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
    body: z.unknown().optional(),
    headers: z.record(z.string(), z.string()).optional()
  },
  cb: async ({
    order_id,
    query,
    body,
    headers
  }: {
    order_id: string;
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

    const resolvedUrl = `${TINKOFF_BUSINESS_SECURED_OPENAPI_BASE_URL}/v1/bank-guarantees/orders/{orderId}`.replace("{orderId}", encodeURIComponent(order_id));

    const data = await tinkoffBusinessRequest("PUT", resolvedUrl, {
      query,
      body,
      headers
    });

    return mcpResponse(data);
  }
};
