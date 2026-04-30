# Tinkoff Business MCP Server

MCP server that exposes Tinkoff Business API as MCP tools.

## What You Need

- Docker
- Tinkoff Business API token (from Tinkoff Business profile settings)

## How To Get `TINKOFF_BUSINESS_API_TOKEN`

1. Sign in to T-Business (Tinkoff Business internet bank).
2. Open T-Business OpenAPI / API access settings in your business account.
3. Create a new API token for your company account.
4. Copy the token value and store it securely.
5. Pass it to this MCP server via env var:
   - Docker: `-e TINKOFF_BUSINESS_API_TOKEN=your_token_here`
   - Claude Desktop MCP config: `"TINKOFF_BUSINESS_API_TOKEN=your_token_here"`

Notes:
- Treat this token like a password.
- Rotate/revoke the token immediately if it is exposed.

## Docker Usage (Build Locally)

1. Build image:
```bash
docker build -t tinkoff-business-mcp:latest .
```

2. Run the MCP server (for Claude/Desktop clients):

```bash
docker run --rm -i \
  -e TINKOFF_BUSINESS_API_TOKEN="your_token" \
  tinkoff-business-mcp:latest
```

## Claude Desktop Config (Local Image)

Use explicit `-e KEY=value` arguments:

```json
{
  "mcpServers": {
    "tinkoff-business": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        "TINKOFF_BUSINESS_API_TOKEN=your_token_here",
        "tinkoff-business-mcp:latest"
      ]
    }
  }
}
```

## Claude Desktop Config (Prebuilt GHCR Image)

```json
{
  "mcpServers": {
    "tinkoff-business": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        "TINKOFF_BUSINESS_API_TOKEN=your_token_here",
        "ghcr.io/amplifylab/tinkoff-business-mcp:latest"
      ]
    }
  }
}
```

## Tools

- One MCP tool per endpoint in `src/tinkoff-endpoints.ts`
- For duplicate endpoint families, only the highest API version is exposed
- Path placeholders are explicit required fields per tool input schema (for example `ucid`, `qr_id`, `order_id`)
- Common optional fields:
  - `query` for query parameters
  - `body` for JSON request payload
  - `headers` for optional extra headers

### Available Commands

- `tinkoff_business_get_api_v1_agreements_agreementid_file`
- `tinkoff_business_get_api_v1_card_ucid_limits`
- `tinkoff_business_get_api_v1_card_virtual_issue_application_cardissueapplicationid`
- `tinkoff_business_get_api_v1_card_virtual_reissue_result`
- `tinkoff_business_get_api_v1_card_virtual_ucid_requisites`
- `tinkoff_business_get_api_v1_delivery_documents_id`
- `tinkoff_business_get_api_v3_company_card`
- `tinkoff_business_get_openapi_api_v1_account_operations`
- `tinkoff_business_get_openapi_api_v1_b2b_qr_qrid_info`
- `tinkoff_business_get_openapi_api_v1_bank_statement`
- `tinkoff_business_get_openapi_api_v1_card`
- `tinkoff_business_get_openapi_api_v1_card_ucid`
- `tinkoff_business_get_openapi_api_v1_files`
- `tinkoff_business_get_openapi_api_v1_individual_foreignagent_status`
- `tinkoff_business_get_openapi_api_v1_openapi_invoice_invoiceid_info`
- `tinkoff_business_get_openapi_api_v1_payment_document`
- `tinkoff_business_get_openapi_api_v1_special_accounts_arrest_etp`
- `tinkoff_business_get_openapi_api_v1_statement`
- `tinkoff_business_get_openapi_api_v1_tacq_operations_terminal_terminalkey`
- `tinkoff_business_get_openapi_api_v1_tacq_terminals`
- `tinkoff_business_get_openapi_api_v4_bank_accounts`
- `tinkoff_business_post_api_v1_card_ucid_block`
- `tinkoff_business_post_api_v1_card_ucid_cash_limit`
- `tinkoff_business_post_api_v1_card_ucid_spend_limit`
- `tinkoff_business_post_api_v1_card_virtual_issue_application`
- `tinkoff_business_post_api_v1_card_virtual_reissue`
- `tinkoff_business_post_api_v1_delivery_documents`
- `tinkoff_business_post_api_v1_dsw_secure_file_loader_payments_upload`
- `tinkoff_business_post_api_v1_dsw_secure_file_loader_upload`
- `tinkoff_business_post_api_v1_overnight_info`
- `tinkoff_business_post_api_v1_overnight_replenish`
- `tinkoff_business_post_api_v1_payments_orders_payments_by_requisites_cancel`
- `tinkoff_business_post_api_v1_payments_orders_payments_by_requisites_statuses`
- `tinkoff_business_post_api_v1_payments_orders_payments_by_requisites_submit`
- `tinkoff_business_post_api_v2_openapi_amendment`
- `tinkoff_business_post_openapi_api_v1_b2b_qr_onetime`
- `tinkoff_business_post_openapi_api_v1_b2b_qr_reusable`
- `tinkoff_business_post_openapi_api_v1_encashment_receipts_request`
- `tinkoff_business_post_openapi_api_v1_files`
- `tinkoff_business_post_openapi_api_v1_invoice_send`
- `tinkoff_business_post_openapi_api_v1_payment_create`
- `tinkoff_business_put_api_v1_bank_guarantees_orders_orderid`

## API Reference

- Tinkoff Business API docs: https://www.tbank.ru/business/openapi/
