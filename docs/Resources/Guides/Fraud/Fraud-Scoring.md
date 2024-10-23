---
tags: [API Reference, Risk Assessment, Fraud Mitigation, Fraud Scoring] 
---
 
# Initiate Fraud Scoring with the Risk Assessment API

Commerce Hub offers a standalone Fraud Scoring service through our Risk Assessment API. This service helps merchants assess the fraud risk associated with each transaction by providing a fraud score. With this information, merchants can make informed decisions on whether to proceed with the payment. The API is a crucial tool for enhancing security and reducing fraudulent activities in online transactions.

- **Pre-evaluation:** This call is made to the Risk Assessment API to obtain a fraud score before the transaction is processed. It helps in deciding whether to proceed with the next step of the transaction.

<!-- theme: info -->
> To get additional details about risk assessment results use the reporting tools provided by the scoring provider, see your account representative for more information.

---

## Submit a Fraud Scoring request

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful Fraud Scoring request to Ravelin using the [Risk Assessment API](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md), the minimum requirements are based on the [scoring provider](#request-variables). See the full request schemas in our [API Explorer](../api/?type=post&path=/payments-vas/v1/risk-assessment).

<!-- theme: success -->
> **POST** `/payments-vas/v1/risk-assessment`

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "3566007770017510",
      "expirationMonth": "12",
      "expirationYear": "2022"
    }
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  },
  "customer": {
    "firstName": "John",
    "lastName": "Doe",
    "merchantCustomerId": "234567"
  },
  "additionalDataCommon": {
    "riskAssessmentEventType": "AUTHORIZATION"
  }
}
```

<!--
type: tab
-->

Example of a Fraud scoring Risk Assessment API *(200: Success)* response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "ASSESSMENT",
    "transactionState": "ASSESSED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2024-10-03T16:22:48.491485435Z",
      "apiTraceId": "086af8dece1945238e0568c3c5f37bb5",
      "clientRequestId": "1504218",
      "transactionId": "086af8dece1945238e0568c3c5f37bb5",
      "apiKey": "g6YnWN3VTbf1XTEikeGQ1fq2tW71poUevprw1I8XAyWI98y6"
    }
  },
  "processorResponseDetails": {
    "processor": "FISERV",
    "host": "FRAUD_MITIGATION",
    "localTimestamp": "2024-10-03T16:22:49.348650788Z"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2025",
      "bin": "401200",
      "last4": "0026",
      "scheme": "VISA"
    }
  },
  "riskAssessmentResult": {
    "approvalStatus": "APPROVED",
    "ruleDescription": "Accept External Decision",
    "assessmentDetails": [
      {
        "provider": "RAVELIN",
        "providerTransactionId": "764a086f-ad30-4313-b90d-d6dc1929c0d6",
        "approvalStatus": "APPROVED",
        "score": 70
      }
    ]
  }
}
```

<!-- type: tab-end -->

---

## Parameters

### Request variables

The following variables are required when submitting a Fraud Scoring request based on the scoring provider.

<!--
type: tab
titles: Ravelin, Kount
-->

The below table identifies the required parameters for a successful Ravelin scoring request.

| Variable | Description |
| ----- | ----- |
| `source::sourceType` | [Payment source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md), not required for customer registration `riskAssessmentEventType` |
| `merchantDetails::merchantId` | A unique ID used to identify the merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `merchantDetails::terminalId` | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `additionalDataCommon:riskAssessmentEventType` | Identifies the [risk assessment event type](#risk-assessment-event-type) for fraud systems |

<!--
type: tab
-->

The below table identifies the required parameters for a successful Kount scoring request.

| Variable | Description |
| ----- | ----- |
| `source::sourceType` | [Payment source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md), not required for customer registration `riskAssessmentEventType` |
| `merchantDetails::merchantId` | A unique ID used to identify the merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `merchantDetails::terminalId` | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `additionalDataCommon:riskAssessmentEventType` | Identifies the [risk assessment event type](#risk-assessment-event-type) for fraud systems |

<!-- type: tab-end -->

---

### Recommended request variables

The following data elements should be included when available with a fraud scoring request to enhance the accuracy of the risk assessment results.

- [Amount](?path=docs/Resources/Master-Data/Amount-Components.md)
- [Billing address](?path=docs/Resources/Master-Data/Address.md#billing-address)
- [Customer details](?path=docs/Resources/Master-Data/Customer-Details.md)
- [Device fingerprint](?path=docs/Resources/Master-Data/Device-Fingerprint.md)
- [Order data](?path=docs/Resources/Master-Data/Order-Data.md)
- [Shipping address](?path=docs/Resources/Master-Data/Address.md#shipping-address)

---

### Response variables

The following response variables are relevant to a Fraud Scoring request.

<!--
type: tab
titles: riskAssessmentResult, assessmentDetails
-->

The below table identifies the response parameters in the `riskAssessmentResult` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `approvalStatus` | *string* | | This field provides the transaction score status from the third-party providers based on the merchant configuration |
| `ruleDescription` | *string* | | Contains a brief description of the rule executed by the scoring provider to determine the transaction fraud score for a merchant |
| `assessmentDetails` | *array* | N/A | An array that contains each scoring provider's name, transaction ID, fraud score and the transaction status |

**Risk assessment results:**

| `approvalStatus` | `ruleDescription` | Recommended actions |
| ----- | ----- | ----- |
| *APPROVED* | Accept External Decision | The merchant can proceed with next processing step |
| *DECLINED* | Decline External Decision | The merchant should try scoring request with more customer details, if another decline, ask for another form of payment |
| *REVIEW* | Review External Decision | The merchant should access reporting tool to review scoring decisions |

<!--
type: tab
-->

The below table identifies the response parameters in the `assessmentDetails` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `provider` | *string* | 100 | This field that specifies the name of the scoring provider. |
| `providerTransactionId` | string | 128 | Unique transaction identifier assigned by the service provider to identify a single transaction. |
| `approvalStatus` | *string* | 128 | A field that indicates the approval status of a transaction as determined by the fraud scoring provider |
| `score` | *number* | 3 | Contains the fraud score assigned by the scoring provider, ranging from 0 to 99. A lower fraud score indicates a safer transaction. For example, a score closer to 0 suggests a safer transaction. |

<!-- type: tab-end -->

---

## Risk assessment event type

| Event type | Description | Requirements |
| ----- | ----- | ----- |
| *CUSTOMER_REGISTRATION* | This event type is used when a merchant is trying to register a new customer on their platform | Ensure that all required customer data fields are included in the payload based on your scoring provider. |
| *ACCOUNT_REGISTRATION* | This event type is used to when a merchant wants to register a new account by [creating a token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) on their platform. | Ensure that all required account data fields are included in the payload based on your scoring provider. |
| *AUTHORIZATION* | This event type is used when a [transaction is authorized](/path=docs/Resources/API-Documents/Payments/Charges.md) by the payment gateway. | Merchant must send authorization details, merchant details, including  amount, and timestamp. |
| *SALE* | This event type is used when a [sale transaction](?path=docs/Resources/API-Documents/Payments/Charges.md) is processed. | Merchant needs to provide sale details such as amount, merchant details, and sale timestamp. |
| *CAPTURE* | This event type is used when [funds are captured](?path=docs/Resources/API-Documents/Payments/Capture.md) for an authorized transaction. | Merchant needs to provide capture details such as [reference transaction identifier](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md), amount, merchant details, and capture timestamp |
| *BALANCE_INQUIRY* | This event type is used when a [balance inquiry](?path=docs/Resources/API-Documents/Payments_VAS/Balance-Inquiry.md) is made by the customer. | Merchant must send inquiry details including merchant details and inquiry timestamp. |

---

## See also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/risk-assessment)
- [Fraud Mitigation](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Source Types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
