---
tags: [Gift Card, Payment Card, Payment Source, Loyalty, Activation]
---

# Gift Card Activation

An activation request allows a merchant to create and activate a [digital _(virtual)_ gift card](#digital-gift-card) or activate a [new physical gift card](#physical-gift-card) by sending the necessary information to Commerce Hub.

<!-- theme: info -->
> A gift card needs to be activated before performing other gift related transactions.

---

## Request Variables

Description

<!--
type: tab
titles: amount, transactionDetails, transactionInteraction, merchantDetails, additionalDataCommon 
-->

The below table identifies the parameters in the `amount` object.

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `operationType` | *string* | 50 | Add descriptionXXXXXXXXXXXXXXXXXXXXXXXXXXXXX | 

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionInteraction` object.

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `terminalTimestamp` | *string* | N/A | Terminal timestamp in ISO 8601 format YYYY-MM-DDThh:mm:ssZ'

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
|`merchantId` | *string* | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | N/A | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!--
type: tab
-->

The below table identifies the parameters in the `additionalDataCommon` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `additionalData` | *object* | N/A |  Idenitfies adtionatal data in the request. |

The below table identifies the conditional parameters in the `additionalData` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `securityCodeType` | *string* | 32 |  Type of security code requested when activating a digital gift card |
| `fundingProvider` | *string* | 32 |  Identifies who provided the funds, CUSTOMER, MERCHANT or UNSPECIFIED |
| `transactionPostDate` | *string* | 16 | Used to override a transaction post date in reporting |

<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/gift-cards`

---

## Digital Gift Card

Description

### Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a digital gift card activation payload request

```json
{
  "amount": {
    "total": 13.05,
    "currency": "USD"
  },
  "transactionDetails": {
    "operationType": "ACTIVATION"
  },
  "transactionInteraction": {
    "terminalTimestamp": "2016-04-16T16:06:05Z"
  },
  "merchantDetails": {
    "terminalId": "123567",
    "merchantId": "123456789012345",
    "promotionCode": "12A34B7"
  },
  "additionalDataCommon": {
    "additionalData": {
      "securityCodeType": "EAN",
      "fundingProvider": "CUSTOMER",
      "transactionPostDate": "2016-04-16"
    }
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&payments-vas/v1/accounts/gift-cards)

<!--
type: tab
-->

Example of payload response

Description:

```json
{
  "gatewayResponse": {
    "transactionType": "GIFT_CARDS",
    "transactionState": "ACTIVATED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG01367cb34bb35b472c953dec4e7d368727",
      "transactionTimestamp": "2022-08-22T19:22:52.518232Z",
      "apiTraceId": "b34bb35b472c953dec4e7d36872",
      "clientRequestId": "367cb34bb35b472c953dec",
      "transactionId": "b34bb35b472c953dec4e7d36872"
    }
  },
  "target": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "9998955500000000190",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123",
      "category": "GIFT",
      "subCategory": "GIFT_SOLUTIONS",
      "bin": "999895",
      "last4": "0190"
    }
  },
  "paymentReceipt": {
    "processorResponseDetails": {
      "localTimestamp": "2016-04-16T16:06:05Z",
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5548",
      "processor": "FISERV",
      "host": "GIFT_SOLUTIONS",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "00",
      "hostResponseMessage": "Completed OK"
    },
    "balance": [
      {
        "beginingBalance": "16.00",
        "endingBalance": "16.00",
        "currency": "USD"
      }
    ]
  }
}
```

<!-- type: tab-end -->

---

## Physical Gift Card

Description

### Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a physical gift card activation payload request 

```json
{
  "amount": {
    "total": 1,
    "currency": "USD"
  },
  "target": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "6161563015224583",
      "expirationMonth": "01",
      "expirationYear": "3025",
      "category": "GIFT",
      "subCategory": "VALUELINK"
    }
  },
  "transactionDetails": {
    "merchantOrderId": "84536645711234",
    "merchantTransactionId": "1343678112344",
    "operationType": "ACTIVATION"
  },
  "transactionInteraction": {
    "posConditionCode": "CARD_PRESENT",
    "terminalTimestamp": "2016-06-20T16:06:05Z",
    "authorizationCharacteristicsIndicator": "CARD_NOT_PRESENT"
  },
  "merchantDetails": {
    "merchantId": "10000900POD2204",
    "terminalId": "10000001",
    "promotionCode": "149464"
  },
  "additionalDataCommon": {
    "additionalData": {
      "transactionPostDate": "2023-06-23"
    }
  }
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&payments-vas/v1/accounts/gift-cards)

<!--
type: tab
-->

Example of payload response 

Description:

```json
{
  "gatewayResponse": {
    "transactionType": "GIFT_CARDS",
    "transactionState": "ACTIVATED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG77cf89a9188d58e1963d4683da72a838c2",
      "transactionTimestamp": "2023-06-22T06:18:12Z",
      "apiTraceId": "694cea9592517e9de7e79cc9282d94df",
      "clientRequestId": "5461275",
      "transactionId": "aacd957912fda81dbe5f88ada1b62cbc"
    }
  },
  "paymentReceipt": {
    "balances": [
      {
        "beginningBalance": 0,
        "endingBalance": 1,
        "currency": "USD",
        "balanceType": "GIFT_VALUELINK"
      }
    ],
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "593612",
      "processor": "FISERV",
      "host": "VALUELINK",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "00",
      "hostResponseMessage": "Completed OK",
      "localTimestamp": "2023-06-22T08:57:48Z"
    }
  },
  "target": {
    "hasBeenDecrypted": false,
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "6161563015224583",
      "expirationMonth": "01",
      "expirationYear": "3025",
      "category": "GIFT",
      "subCategory": "VALUELINK"
    }
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/refunds)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Gift Card Services](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md)
