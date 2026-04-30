import { z } from "zod";
import { mcpResponse } from "../mcp-response.js";
import { TINKOFF_BUSINESS_SECURED_OPENAPI_BASE_URL } from "../tinkoff-business-api-base.js";
import { tinkoffBusinessRequest } from "../tinkoff-business-request.js";

export const tinkoffBusinessGetApiV1CardVirtualIssueApplicationCardissueapplicationidTool = {
  name: "tinkoff_business_get_api_v1_card_virtual_issue_application_cardissueapplicationid",
  description: "Retrieves card virtual issue application by card issue application id for the authenticated Tinkoff Business account. Docs: https://developer.tbank.ru/docs/api/get-api-v-1-card-virtual-issue-application-cardissueapplicationid",
  inputSchema: {
    card_issue_application_id: z.string().min(1),
    query: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
    body: z.unknown().optional(),
    headers: z.record(z.string(), z.string()).optional()
  },
  cb: async ({
    card_issue_application_id,
    query,
    body,
    headers
  }: {
    card_issue_application_id: string;
    query?: Record<string, string | number | boolean>;
    body?: unknown;
    headers?: Record<string, string>;
  }) => {
    const resolvedUrl = `${TINKOFF_BUSINESS_SECURED_OPENAPI_BASE_URL}/v1/card/virtual/issue/application/{cardIssueApplicationId}`.replace("{cardIssueApplicationId}", encodeURIComponent(card_issue_application_id));

    const data = await tinkoffBusinessRequest("GET", resolvedUrl, {
      query,
      body,
      headers
    });

    return mcpResponse(data);
  }
};
