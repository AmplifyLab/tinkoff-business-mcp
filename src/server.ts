import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createRegisterTool } from "./tools/register-tool.js";
import { tinkoffBusinessGetOpenapiApiV1AccountOperationsTool } from "./tools/get-openapi-api-v1-account-operations.js";
import { tinkoffBusinessGetOpenapiApiV1B2bQrQridInfoTool } from "./tools/get-openapi-api-v1-b2b-qr-qrid-info.js";
import { tinkoffBusinessPostOpenapiApiV1B2bQrOnetimeTool } from "./tools/post-openapi-api-v1-b2b-qr-onetime.js";
import { tinkoffBusinessPostOpenapiApiV1B2bQrReusableTool } from "./tools/post-openapi-api-v1-b2b-qr-reusable.js";
import { tinkoffBusinessGetOpenapiApiV4BankAccountsTool } from "./tools/get-openapi-api-v4-bank-accounts.js";
import { tinkoffBusinessGetOpenapiApiV1BankStatementTool } from "./tools/get-openapi-api-v1-bank-statement.js";
import { tinkoffBusinessGetOpenapiApiV1CardTool } from "./tools/get-openapi-api-v1-card.js";
import { tinkoffBusinessGetOpenapiApiV1CardUcidTool } from "./tools/get-openapi-api-v1-card-ucid.js";
import { tinkoffBusinessPostOpenapiApiV1EncashmentReceiptsRequestTool } from "./tools/post-openapi-api-v1-encashment-receipts-request.js";
import { tinkoffBusinessGetOpenapiApiV1FilesTool } from "./tools/get-openapi-api-v1-files.js";
import { tinkoffBusinessPostOpenapiApiV1FilesTool } from "./tools/post-openapi-api-v1-files.js";
import { tinkoffBusinessGetOpenapiApiV1IndividualForeignagentStatusTool } from "./tools/get-openapi-api-v1-individual-foreignagent-status.js";
import { tinkoffBusinessPostOpenapiApiV1InvoiceSendTool } from "./tools/post-openapi-api-v1-invoice-send.js";
import { tinkoffBusinessGetOpenapiApiV1OpenapiInvoiceInvoiceidInfoTool } from "./tools/get-openapi-api-v1-openapi-invoice-invoiceid-info.js";
import { tinkoffBusinessGetOpenapiApiV1PaymentDocumentTool } from "./tools/get-openapi-api-v1-payment-document.js";
import { tinkoffBusinessPostOpenapiApiV1PaymentCreateTool } from "./tools/post-openapi-api-v1-payment-create.js";
import { tinkoffBusinessGetOpenapiApiV1SpecialAccountsArrestEtpTool } from "./tools/get-openapi-api-v1-special-accounts-arrest-etp.js";
import { tinkoffBusinessGetOpenapiApiV1StatementTool } from "./tools/get-openapi-api-v1-statement.js";
import { tinkoffBusinessGetOpenapiApiV1TacqOperationsTerminalTerminalkeyTool } from "./tools/get-openapi-api-v1-tacq-operations-terminal-terminalkey.js";
import { tinkoffBusinessGetOpenapiApiV1TacqTerminalsTool } from "./tools/get-openapi-api-v1-tacq-terminals.js";
import { tinkoffBusinessGetApiV1AgreementsAgreementidFileTool } from "./tools/get-api-v1-agreements-agreementid-file.js";
import { tinkoffBusinessPutApiV1BankGuaranteesOrdersOrderidTool } from "./tools/put-api-v1-bank-guarantees-orders-orderid.js";
import { tinkoffBusinessPostApiV1CardUcidBlockTool } from "./tools/post-api-v1-card-ucid-block.js";
import { tinkoffBusinessPostApiV1CardUcidCashLimitTool } from "./tools/post-api-v1-card-ucid-cash-limit.js";
import { tinkoffBusinessGetApiV1CardUcidLimitsTool } from "./tools/get-api-v1-card-ucid-limits.js";
import { tinkoffBusinessPostApiV1CardUcidSpendLimitTool } from "./tools/post-api-v1-card-ucid-spend-limit.js";
import { tinkoffBusinessGetApiV1CardVirtualUcidRequisitesTool } from "./tools/get-api-v1-card-virtual-ucid-requisites.js";
import { tinkoffBusinessPostApiV1CardVirtualIssueApplicationTool } from "./tools/post-api-v1-card-virtual-issue-application.js";
import { tinkoffBusinessGetApiV1CardVirtualIssueApplicationCardissueapplicationidTool } from "./tools/get-api-v1-card-virtual-issue-application-cardissueapplicationid.js";
import { tinkoffBusinessPostApiV1CardVirtualReissueTool } from "./tools/post-api-v1-card-virtual-reissue.js";
import { tinkoffBusinessGetApiV1CardVirtualReissueResultTool } from "./tools/get-api-v1-card-virtual-reissue-result.js";
import { tinkoffBusinessPostApiV1DeliveryDocumentsTool } from "./tools/post-api-v1-delivery-documents.js";
import { tinkoffBusinessGetApiV1DeliveryDocumentsIdTool } from "./tools/get-api-v1-delivery-documents-id.js";
import { tinkoffBusinessPostApiV1DswSecureFileLoaderPaymentsUploadTool } from "./tools/post-api-v1-dsw-secure-file-loader-payments-upload.js";
import { tinkoffBusinessPostApiV1DswSecureFileLoaderUploadTool } from "./tools/post-api-v1-dsw-secure-file-loader-upload.js";
import { tinkoffBusinessPostApiV1OvernightInfoTool } from "./tools/post-api-v1-overnight-info.js";
import { tinkoffBusinessPostApiV1OvernightReplenishTool } from "./tools/post-api-v1-overnight-replenish.js";
import { tinkoffBusinessPostApiV1PaymentsOrdersPaymentsByRequisitesCancelTool } from "./tools/post-api-v1-payments-orders-payments-by-requisites-cancel.js";
import { tinkoffBusinessPostApiV1PaymentsOrdersPaymentsByRequisitesStatusesTool } from "./tools/post-api-v1-payments-orders-payments-by-requisites-statuses.js";
import { tinkoffBusinessPostApiV1PaymentsOrdersPaymentsByRequisitesSubmitTool } from "./tools/post-api-v1-payments-orders-payments-by-requisites-submit.js";
import { tinkoffBusinessPostApiV2OpenapiAmendmentTool } from "./tools/post-api-v2-openapi-amendment.js";
import { tinkoffBusinessGetApiV3CompanyCardTool } from "./tools/get-api-v3-company-card.js";

const server = new McpServer({
  name: "tinkoff-business-mcp-server",
  version: "0.1.0"
});

const registerTool = createRegisterTool(server);

const tools = [
  tinkoffBusinessGetOpenapiApiV1AccountOperationsTool,
  tinkoffBusinessGetOpenapiApiV1B2bQrQridInfoTool,
  tinkoffBusinessPostOpenapiApiV1B2bQrOnetimeTool,
  tinkoffBusinessPostOpenapiApiV1B2bQrReusableTool,
  tinkoffBusinessGetOpenapiApiV4BankAccountsTool,
  tinkoffBusinessGetOpenapiApiV1BankStatementTool,
  tinkoffBusinessGetOpenapiApiV1CardTool,
  tinkoffBusinessGetOpenapiApiV1CardUcidTool,
  tinkoffBusinessPostOpenapiApiV1EncashmentReceiptsRequestTool,
  tinkoffBusinessGetOpenapiApiV1FilesTool,
  tinkoffBusinessPostOpenapiApiV1FilesTool,
  tinkoffBusinessGetOpenapiApiV1IndividualForeignagentStatusTool,
  tinkoffBusinessPostOpenapiApiV1InvoiceSendTool,
  tinkoffBusinessGetOpenapiApiV1OpenapiInvoiceInvoiceidInfoTool,
  tinkoffBusinessGetOpenapiApiV1PaymentDocumentTool,
  tinkoffBusinessPostOpenapiApiV1PaymentCreateTool,
  tinkoffBusinessGetOpenapiApiV1SpecialAccountsArrestEtpTool,
  tinkoffBusinessGetOpenapiApiV1StatementTool,
  tinkoffBusinessGetOpenapiApiV1TacqOperationsTerminalTerminalkeyTool,
  tinkoffBusinessGetOpenapiApiV1TacqTerminalsTool,
  tinkoffBusinessGetApiV1AgreementsAgreementidFileTool,
  tinkoffBusinessPutApiV1BankGuaranteesOrdersOrderidTool,
  tinkoffBusinessPostApiV1CardUcidBlockTool,
  tinkoffBusinessPostApiV1CardUcidCashLimitTool,
  tinkoffBusinessGetApiV1CardUcidLimitsTool,
  tinkoffBusinessPostApiV1CardUcidSpendLimitTool,
  tinkoffBusinessGetApiV1CardVirtualUcidRequisitesTool,
  tinkoffBusinessPostApiV1CardVirtualIssueApplicationTool,
  tinkoffBusinessGetApiV1CardVirtualIssueApplicationCardissueapplicationidTool,
  tinkoffBusinessPostApiV1CardVirtualReissueTool,
  tinkoffBusinessGetApiV1CardVirtualReissueResultTool,
  tinkoffBusinessPostApiV1DeliveryDocumentsTool,
  tinkoffBusinessGetApiV1DeliveryDocumentsIdTool,
  tinkoffBusinessPostApiV1DswSecureFileLoaderPaymentsUploadTool,
  tinkoffBusinessPostApiV1DswSecureFileLoaderUploadTool,
  tinkoffBusinessPostApiV1OvernightInfoTool,
  tinkoffBusinessPostApiV1OvernightReplenishTool,
  tinkoffBusinessPostApiV1PaymentsOrdersPaymentsByRequisitesCancelTool,
  tinkoffBusinessPostApiV1PaymentsOrdersPaymentsByRequisitesStatusesTool,
  tinkoffBusinessPostApiV1PaymentsOrdersPaymentsByRequisitesSubmitTool,
  tinkoffBusinessPostApiV2OpenapiAmendmentTool,
  tinkoffBusinessGetApiV3CompanyCardTool
];

for (const tool of tools) {
  registerTool(tool.name, tool.description, tool.inputSchema, tool.cb);
}

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

await main();
