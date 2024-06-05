---
tags: [Authorization, Approval Rate, Decline Rate]
---

# Authorization Optimization

Authorization Optimization from Commerce Hub helps businesses maximize their approval rates by preventing and recovering declines for E-commerce transactions. By combining adaptive rules based logic, using network account updater and leveraging partnerships with issuing banks ensuring higher approval rates. This is achieved by locating updated card numbers and/or expiration dates and retying the transaction with this new data.

<!-- theme: info -->
> Authorization Optimization needs to be configured in Merchant Configuration and Boarding. Authorization Optimization can be configured to receive updated card data and reason, or the reason only, please contact your account representative for more information.

### Supported Features

<!-- theme: info -->
> Authorization Optimization is valid for Visa and Mastercard card not present transactions.

- Real time card account updater
- Dynamic retry
<!---
- Batch card account updater (Not in scope)
- Deferred retry (Not in scope)
- Enhanced data (Not in scope)
-->

<!-- theme: warning -->
> Card account updater and dynamic retry are not supported by all platforms and processors, please contact your account representative for more information.

### Supported Transaction Types

The following transactions may receive updated card details in the response; [Charges](?path=docs/Resources/API-Documents/Payments/Charges.md) *(pre-authorization and sale)* and online [Refunds](?path=docs/Resources/API-Documents/Payments/Refund.md).

<!---
All secondary transactions including; [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md), offline Refund and [Cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md) *(voids)* requests may need to send updated card details in the subsequent requests.
-->

---

## Request Variables

<!--
type: tab
titles: transactionDetails, JSON Example
-->

The below table identifies the parameters in the `transactionDetails` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `authOptimazation` | *string* | 32 | An identifier used to override what data is received in the response for merchants boarded for Authorization Optimization. If not sent Commerce Hub will use the settings in Merchant Configuration and Boarding. |

### Authorization Optimization Type

| Values | Description |
|-------------|---------------|
| *CARD_DATA_AND_REASON* | Receive updated card data and card update reasons |
| *REASON_ONLY* | Receive card updates reason only |
| *OVERRIDE* | Disable the service for this request |

<!--
type: tab
-->

JSON string format:

``` json
{
  "transactionDetails": {
    "authOptimazation": "CARD_DATA_AND_REASON"
  }
}
```

<!-- type: tab-end -->

---

## Response Variables

<!--
type: tab
titles: processorResponseDetails, JSON Example, authOptimizationDetails, JSON Example
-->

The below table identifies the parameters in the `processorResponseDetails` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| originalResponseCode | *string* | 16 | Original response code before Authorization Optimization |
| originalResponseMessage | *string* | N/A | Original response message before Authorization Optimization |

<!--
type: tab
-->

JSON string format:

```json

{
  "processorResponseDetails": {
    "originalResponseCode": "006",
    "originalResponseMessage": "DECLINED"
  }
}
```

<!--
type: tab
-->

The below table identifies the parameters in the `authOptimizationDetails` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `accountStatus` | *string* | N/A | Indicates the current status of the account.|

### Account Status Reason

| Variable | Description |
|---------|----------|
| *ACCOUNT_CHANGE* | Original account number has changed|
| *ACCOUNT_CLOSED* | Original account number is closed |
| *EXPIRATION_CHANGE* | Original card expiration has changed |
| *CONTACT_CARDHOLDER* | Bank is requesting contact with card holder |

<!--
type: tab
-->

JSON string format:

```json

{
  "authOptimizationDetails": {
    "accountStatus": "ACCOUNT_CHANGE"
  }
}
```

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
titles: Request, Response 
-->

Example of a charge payload request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "authOptimazation": "CARD_DATA_AND_REASON"
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  },
  "merchantDetails": {
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

Example of an authorization optimization (201: Created) response

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
    "merchantName": "Merchant Name",
    "merchantAddress": "123 Peach Ave",
    "merchantCity": "Atlanta",
    "merchantStateOrProvince": "GA",
    "merchantPostalCode": "12345",
    "merchantCountry": "US",
    "merchantURL": "https://www.somedomain.com",
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "originalResponseCode": "006",
      "originalResponseMessage": "DECLINED",
      "responseCode": "000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z"
      }
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "authOptimazation": "CARD_DATA_AND_REASON"
  },
  "authOptimizationDetails": {
    "accountStatus": "ACCOUNT_CHANGE"
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---
