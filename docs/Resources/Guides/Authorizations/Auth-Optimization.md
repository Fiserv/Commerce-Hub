---
tags: [Authorization, Approval Rate, Decline Rate, Payment Optimization]
---

# Increase approval rates with Authorization Optimization

[Authorization Optimization](https://www.carat.fiserv.com/en-us/solutions/optimization/) from Commerce Hub helps businesses maximize their approval rates by preventing and recovering declines for [online, digital and mobile](?path=docs/Getting-Started/Getting-Started-Online.md) transactions. By combining adaptive rules based logic, using network account updater and leveraging partnerships with issuing banks, Authorization Optimization ensures higher approval rates. This is achieved by locating updated card numbers and expiration dates and retying the transaction with the new data.

<!-- theme: info -->
> Authorization Optimization needs to be configured in Merchant Configuration and Boarding. Authorization Optimization can be configured to receive updated card and token data and reason, or the reason only. Please contact your account representative for more information.

**Supported features:**

<!-- theme: info -->
> Authorization Optimization is valid for Visa, Mastercard and Discover transactions on Nashville.

- Real-time account updater *(RTAU)*
- Dynamic retry

<!---
- Batch card account updater (Not in scope)
- Deferred retry (Not in scope)
- Enhanced data (Not in scope)
-->

<!-- theme: warning -->
> RTAU and dynamic retry are not supported by all platforms and processors, please contact your account representative for more information.

<!---
All secondary transactions including; [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md), offline Refund and [Cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md) *(voids)* requests may need to send updated card details in the subsequent requests.
-->

---

## Supported transactions

The following transactions may receive updated card data, token data and reason, or the reason only in the response: [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) *(pre-authorization and sale)* and online [Refunds API request](?path=docs/Resources/API-Documents/Payments/Refund.md) using a *PaymentCard* or *PaymentToken*.

<!--
type: tab
titles: Request, Response 
-->

The example below contains the minimum [parameters](#parameters) for a successful Authorization Optimization Charges API request using *PaymentCard*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 12.04,
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
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

<!-- theme: warning -->
> If the merchant account is configured to receive updated card data, it will be returned encrypted in the response along with the `authOptimizationDetails`. A [client certificate](?path=docs/Resources/API-Documents/Device-Management/Client-Certificate-Upload.md) must be uploaded to Commerce Hub before the card data can be returned.

Example of an Authorization Optimization (201: Created) response.

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
    "encryptionData": {
      "encryptionType": "JWE",
      "encryptionBlock": "\"Wn+VwpLDgp41IwstEHQS8u4EQJ\n=s3ZmiL1SSZC8QyBpj/....\"",
      "encryptionBlockFields": "card.cardData:16"
    },
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2034"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "FISERV",
      "host": "NASHVILLE",
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
    "authOptimizationDetails": {
      "accountStatus": "ACCOUNT_CHANGE",
      "originalHostResponseCode": "51",
      "originalHostResponseMessage": "DECLINED",
      "panEncryptionStatus": "Success"
    }
  }
}
```

<!-- type: tab-end -->

---

## Parameters

### Request variables

<!-- theme: warning -->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service and to receive updated token data, `paymentTokens` will be returned in the response with the updated *PaymentToken*. To override this behavior, `createToken`*:false* is required in `transactionDetails`.

<!--
type: tab
titles: authOptimizationDetails
-->

The below table identifies the parameters in the `authOptimizationDetails` object in `transactionDetails`.

| Variable | Type | Maximum Length | Description |
| ----- | :-----: | :-----: | ----- |
| `overrideFlag` | *boolean* | N/A | Indicator used to override the Authorization Optimization merchant configuration per transaction. |

<!-- type: tab-end -->

---

### Response variables

<!--
type: tab
titles: authOptimizationDetails
-->

The below table identifies the parameters in the `authOptimizationDetails` object in `transactionDetails`.

| Variable | Type | Maximum Length | Description |
| ----- | :-----: | :-----: | ----- |
| `accountStatus` | *string* | 256 | Indicates the current status of the account |
| `accountUpdaterErrorCode` | *string* | 256 | Error code provided the account updater system |
| `accountUpdaterErrorDescription` | *string* | 256 | Error description provided by the account updater system |
| `originalHostResponseCode` | *string* | 256 | Original `hostReponseCode` for re-authorized *(Optimized)* transaction |
| `originalHostResponseMessage` | *string* | 256 | Original `hostResponseMessage` for re-authorized *(Optimized)* transaction |
| `panEncryptionStatus` | *string* | N/A | Provides the status message of the encrypted PAN in the response |

**Account status reason:**

| Variable | Description |
| ----- | ----- |
| *ACCOUNT_CHANGE* | Original account number has changed |
| *ACCOUNT_CLOSED* | Original account number is closed |
| *EXPIRATION_CHANGE* | Original card expiration has changed |
| *CONTACT_CARDHOLDER* | Bank is requesting contact with card holder |

**Pan encryption status:**

| Message | Description |
| ----- | ----- |
| *Success* | The PAN was successfully encrypted |
| *Encryption unavailable* |  |
| *Encryption key ID not found* |  |
| *Encryption error* |  |
| *Unsupported source* |  |

<!-- type: tab-end -->

---

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)
- [Client Certificate Upload](?path=docs/Resources/API-Documents/Device-Management/Client-Certificate-Upload.md)

---
