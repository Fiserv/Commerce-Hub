---
tags: [Payment Faciliator, Partners]
---

# Payment Faciliator Single MID

A single MID payment facilitator (PFAC) model uses a single `merchantId` assigned by Commerce Hub to aggregate all transactions on behalf of their sub-merchants. The PFAC uses the `dynamicDescriptor` object to pass the sub-merchant's details. This model allows the PFAC to [settle to their accounts](?path=docs/Resources/Guides/Partners/PFAC/Split-Settlement.md) and funding is handled by the PFAC.

---

## Request Variables

<!-- theme: info -->
> The following variables are also required when submitting a [capture](?path=docs/Resources/API-Documents/Payments/Capture.md) request.

<!--
type: tab
titles: merchantDetails, dynamicDescriptor
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Description |
| --------- | ---------- | -------- | ----- |
| `merchantId` | *string* | 40 | A unique ID used to identify the payment facilitator. The payment facilitator must use the value assigned by the acquirer or the gateway when submitting a transaction |
| `terminalId` | *string* | N/A | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway |

<!--
type: tab
-->

The below table identifies the required parameters in the `dynamicDescriptor` object.

- **Discover, Visa, and Mastercard Single Merchant ID Payment Facilitators:** the format for `merchantName` is the first 3 characters of the [Payment Facilitator](?path=docs/Resources/Guides/Partners/PFAC/Payment-Faciliator.md) name followed by an asterisk and the sub-merchant name, e.g. “XYZ*A SMALL CO”.
- **Amex Single Merchant ID Payment Facilitators:** the `merchantName` must only contain the sub-merchant name, e.g. “A SMALL CO”.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `mcc` | *string* | 4 | [Merchant Category Code](?path=docs/Resources/Master-Data/Merchant-Category-Code.md) |
| `merchantName` | *string* | 1024 | Merchant name or Doing Business As (DBA) |
| `customerServiceNumber` | *string* | 15| Customer service phone number information that is passed to the issuer *(it may appear on the cardholder’s statement)* |
| `serviceEntitlement` | *string* | 16 | Merchant Service Entitlement number *(also known as a processor MID)* |
| `address` | *object* | N/A  | Merchant [address](?path=docs/Resources/Master-Data/Address.md#address) details |
| `subMerchantId` | *string* | 1024 | Sub-merchant ID defined by the payment facilitator |

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
title: Request
-->

Example of a PFAC Single payload charge request

```json
{
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
  "amount": {
    "total": 80,
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "merchantDetails": {
    "merchantId": "1000000PFACS1",
    "terminalId": "10000001"
  },
  "dynamicDescriptors": {
    "mcc": "5204",
    "merchantName": "Nike",
    "customerServiceNumber": "4448889999",
    "serviceEntitlement": "4040404040",
    "customerServiceEmail": "Nike.com",
    "subMerchantId": "PFACM_3",
    "address": {
      "street": "2900 Parkway",
      "city": "Alpharetta",
      "stateOrProvince": "GA",
      "postalCode": "30004",
      "country": "US"
    }
  }
}
```
<!--
type: tab
title: Response
-->

Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "CAPTURED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG01c918844925736c2a2ed97ffeef4a2366",
      "transactionTimestamp": "2023-10-26T17:55:51.305873759Z",
      "apiTraceId": "5e9267f7ae144e3ebdf0ba3baa55da67",
      "clientRequestId": "3f89b287bebfc82cc3f347200d4e6096",
      "transactionId": "5e9267f7ae144e3ebdf0ba3baa55da67"
    }
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
  "paymentReceipt": {
    "approvedAmount": {
      "total": 80,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK265C",
      "referenceNumber": "ba3baa55da67",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "networkRouted": "VISA",
      "networkInternationalId": "0001",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL"
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "transactionCaptureType": "host",
    "partialApproval": true,
    "processingCode": "000000",
    "transactionCutTimeStamp": "2023-10-27T12:00:00Z",
    "createToken": true,
    "retrievalReferenceNumber": "ba3baa55da67"
  },
  "merchantDetails": {
    "terminalId": "10000001",
    "merchantId": "1000000PFACS1"
  },
  "dynamicDescriptors": {
    "mcc": "5204",
    "merchantName": "Nike",
    "customerServiceNumber": "1231231234",
    "serviceEntitlement": "123456789012",
    "customerServiceEmail": "mystore.com",
    "subMerchantId": "PFACM_3",
    "address": {
      "street": "123 Parkway",
      "city": "Alpharetta",
      "stateOrProvince": "GA",
      "postalCode": "30004",
      "country": "US"
    }
  },
  "networkDetails": {
    "network": {
      "network": "Visa"
    },
    "networkResponseCode": "00",
    "cardLevelResultCode": "C",
    "validationCode": "IV  ",
    "transactionIdentifier": "013299518886342"
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Dynamic Descriptor](?path=docs/Resources/Guides/Dynamic-Descriptor.md)
- [Payment Faciliator](?path=docs/Resources/Guides/Partners/PFAC/Payment-Faciliator.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Split-Settlement](?path=docs/Resources/Guides/Partners/PFAC/Split-Settlement.md)

---
