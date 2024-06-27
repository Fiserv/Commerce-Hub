---
tags: [Private Label, Payment Sources]
---

# Citi Private Label  

Citibank offers multiple banking services which includes providing of private label and co branded credit cards for retailers.

<!-- theme: warning -->
> Currently, only direct send settlement model is supported. Merchants must submit the settlement batch file directly to the processor. Commerce Hub will not have access to transaction completion, therefore [refunds](?path=docs/Resources/API-Documents/Payments/Refund.md) will need to be submitted as an [open refund](?pathdocs/Resources/API-Documents/Payments/Refund-Open.md). For more information, please contact your account representative.
---

## Parameters

<!--theme:info-->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service, `paymentTokens` will be returned in the response. To override this behavior, `createToken`: *false* is required in `transactionDetails`. Contact your account representative for more information about enabling tokenization.

<!--
type: tab
titles: privateLabel, transactionInteraction
-->

The `privateLabel` object is part of the `additionalDataCommon` object.

The below table identifies the conditional parameters in the `privateLabel` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `creditPlan` | *string* | 64 | Payment program assigned by the private label processor. |
| `minimumSpendExemptIndicator` | *string* | 32  | Indicates if the customer is exempt from the minimum spend amount. ***Valid Values:** EXEMPT, NOT_EXEMPT* |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionInteraction` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `origin` | *string* | 4 | The source of the transaction |
| `posEntryMode` | *string* | 22 | An identifier used to indicate how the account number was entered on the transaction. |
| `posConditionCode` | *string* | 26  | An identifier used to indicate the transaction [condition](?path=docs/Resources/Master-Data/Transaction-Interaction.md#pos-condition-code) at the Point-of-Sale *(POS)*. |
| `motoType` | *string* | N/A | Defines the type of MOTO transaction when `origin` is MOTO |

<!-- type: tab-end -->

---

## Payload Example

The example below contains the minimum [parameters](#parameters) for a successful MOTO [charges request](?path=docs/Resources/API-Documents/Payments/Charges.md) using a Citi PLCC. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Response
-->

Example of a charge payload request using a Citi PLCC.

<!-- info -->
> PLCC transactions routed to Citi require the additional fields `posEntyMode`, `posConditionCode`, and when the `origin` is *MOTO* `motoType` in [transaction interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md).

```json
{
  "amount": {
    "total": 1.56,
    "currency": "USD"
  },
   "source":{
      "sourceType": "PaymentCard",
      "encryptionData":{
         "encryptionType": "ON_GUARD",
         "encryptionTarget": "MANUAL",
         "encryptionBlock": "M5482652331427157=3402583",
         "deviceType": "INGENICO",
         "keyId": "88000000023"
      }
  },
  "orderData": {
    "itemDetails": [
      {
        "insuranceClaimNumber": "63732",
        "department": "0",
        "subDepartment": "0",
        "departmentClass": "0",
        "departmentSubClass": "0"
      }
    ]
  },
  "customer": {
    "merchantCustomerId": "12345"
  },
  "transactionDetails": {
    "captureFlag": false,
    "merchantOrderId": "MS46LEG1027E5PX6",
    "merchantTransactionId": "VQZBLFK10EWJN04Z"
  },
  "transactionInteraction": {
    "origin": "MOTO",
    "motoType": "MAIL",
    "posEntryMode": "MANUAL",
    "posConditionCode": "CARD_NOT_PRESENT_MOTO",
    "terminalTimestamp": "2023-10-06T04:42:40Z"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  },
    "privateLabel": {
      "minimumSpendExemptIndicator": "EXEMPT",
      "creditPlan": "00100"
    }
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

Example of a charge (201: Created) response

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "MOTO",
    "transactionProcessingDetails": {
      "orderId": "CHG01d988590da53ea43a159a3a1d3557c068",
      "transactionTimestamp": "2023-10-06T20:45:34.928541403Z",
      "apiTraceId": "7fdd290469c247799228a7741434d545",
      "clientRequestId": "6158724",
      "transactionId": "7fdd290469c247799228a7741434d545"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2049",
      "bin": "603532",
      "last4": "3757",
      "scheme": "THD"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 1.56,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "006322",
      "processor": "CITI",
      "host": "PRIVATE_LABEL",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "0000",
      "hostResponseMessage": "Approval",
      "additionalInfo": [
        {
          "name": "customerServicePhoneNumber",
          "value": "8005684571"
        }
      ],
      "purchaseOrderRequiredIndicator": "NOT_REQUIRED",
      "taxExemptIndicator": "NOT_EXEMPT",
      "arqcResponseCode": "UNAVAILABLE"
    }
  },
  "transactionDetails": {
    "captureFlag": false,
    "transactionCaptureType": "terminal_direct",
    "merchantTransactionId": "VQZBLFK10EWJN04Z",
    "merchantOrderId": "MS46LEG1027E5PX6"
  },
  "transactionInteraction": {
    "origin": "MOTO",
    "motoType": "MAIL",
    "posEntryMode": "MANUAL",
    "posConditionCode": "CARD_NOT_PRESENT_MOTO",
    "terminalTimestamp": "2023-10-06T04:42:40Z"
  },
  "additionalDataCommon": {
    "privateLabel": {
      "creditPlan": "00100",
      "minimumSpendExemptIndicator": "EXEMPT"
    }
  },
  "paymentTokens": [
    {
      "tokenData": "0848594901193757",
      "tokenSource": "TRANSARMOR",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
    },
    {
      "tokenData": "7258080032423757",
      "tokenSource": "CITI",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
    }
  ]
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Customer Details](?path=docs/Resources/Master-Data/Customer-Details.md)
- [Directed Routing](?path=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md)
- [Order Data](?path=docs/Resources/Master-Data/Order-Data.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)

---
