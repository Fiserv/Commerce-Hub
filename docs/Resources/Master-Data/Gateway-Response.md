# Gateway Response

## Overview

The Gateway Response contains the response parameters from the Commerce Hub for any successful or unsuccessful transaction.

#### Component: gatewayResponse

| Variable | Type | Length | Description/Values |
| ----- | ----- | ----- | ----- |
| `transactionOrigin` | *string* | | Transaction [origin](?path=docs/Resources/Master-Data/Transaction-Interaction.md#transaction-origins). |
| `transactionProcessingDetails` | *array* | | Array containing the [transaction processing details](#transaction-processing-details). |
| `transactionState` | *string* | | Final [state](#transaction-state) of the transaction. |
| `transactionType` | *string* | | Type of transaction submitted. |

---

### Transaction State

#### Object: transactionState

| Value | Description |
|-------|-------------|
| *AUTHORIZED* | Transaction has been [authorized](?path=docs/Resources/API-Documents/Payments/Charges.md). |
| *CAPTURED* | Authorization has been [captured](?path=docs/Resources/API-Documents/Payments/Capture.md). |
| *CHECKED* | Applicable to [account verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) and [information lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md). |
| *DECLINED* | Transaction has been [declined](?path=docs/Resources/Guides/Response-Codes/Gateway.md). |
| *VOIDED* | Transaction has been [voided](?path=docs/Resources/API-Documents/Payments/Cancel.md). |

<!-- COMPLETED_GET, INITIALIZED, PENDING, READY, TEMPLATE, SETTLED, WAITING -->

---

## Transaction Processing Details

#### Subcomponent: transactionProcessingDetails

| Variable | Type | Length | Description/Values |
| ----- | ----- | ----- | ----- |
| `apiTraceId` | *string* | 64 | Request identifier in API, can be used to request logs from the support team. |
| `clientRequestId` | *string* | 64 | Echoes back the value in the request header for tracking. |
| `orderId` | *string* | 64 | Order identifier returned in the parameter orderId from a Charge trasaction. |
| `transactionDate` | *string* | 64 | Date the transaction occured. |
| `transactionId` | *string* | 64 | Unique identifier for each transaction on the Gateway. This value will be populated for the secondary transaction from the path. |
| `transactionTime` | *string* | 64 | Timestamp in ISO 8601 fromat YYYY-MM-DDThh:mm:ssZ.

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [HTTP Response Codes](?path=docs/Resources/Guides/Response-Codes/HTTP.md)
- [Host Response Codes](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md)
- [Gateway Response Codes](?path=docs/Resources/Guides/Response-Codes/Gateway.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)

---