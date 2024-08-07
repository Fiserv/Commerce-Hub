---
tags: [Payment Facilitator, Partners]
---

# Payment Facilitator Single MID

A single MID [payment facilitator *(PayFac)*](?path=docs/Resources/Guides/Partners/PFAC/Payment-Faciliator.md) model uses a single `merchantId` assigned by Commerce Hub to aggregate all transactions on behalf of their sub-merchants. The PayFac uses the `dynamicDescriptor` object to pass the sub-merchant's details. This model allows the PayFac to [settle to their accounts](?path=docs/Resources/Guides/Partners/PFAC/Split-Settlement.md) and funding is handled by the PayFac.

---

## Request Variables

<!-- theme: info -->
> The following variables are also required when submitting a [capture](?path=docs/Resources/API-Documents/Payments/Capture.md) request.

<!--
type: tab
titles: merchantDetails, dynamicDescriptor
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Max Length | Description |
| --------- | ---------- | -------- | ----- |
| `merchantId` | *string* | 1024 | A unique ID used to identify the PayFac. The PayFac must use the value assigned by the acquirer, gateway or a [custom identifier](?path=docs/Resources/Guides/BYOID.md) |
|`terminalId` | *string* | 1024 | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `dynamicDescriptor` object.

- **Discover, Visa, and Mastercard Single Merchant ID Payment Facilitators:** the format for `merchantName` is the first 3 characters of the Payment Facilitator name followed by an asterisk and the sub-merchant name, e.g. “XYZ*A SMALL CO”.
- **Amex Single Merchant ID Payment Facilitators:** the `merchantName` must only contain the sub-merchant name, e.g. “A SMALL CO”.

| Variable | Type | Max Length | Description |
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
titles: Request, Response
-->

Example of a PayFac Single MID payload charge request.

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
    "merchantName": "Merchant Name",
    "customerServiceNumber": "8001231234",
    "serviceEntitlement": "123456789123",
    "customerServiceEmail": "merchant@domain.com",
    "subMerchantId": "PFACM_3",
    "address": {
      "houseNumberOrName": "123",
      "street": "Parkway",
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
-->

Example of a PayFac Multi-MID charges (201: Created) response.

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
  "dynamicDescriptors": {
    "mcc": "5204",
    "merchantName": "Merchant Name",
    "customerServiceNumber": "1231231234",
    "serviceEntitlement": "123456789012",
    "customerServiceEmail": "customerservice@domain.com",
    "subMerchantId": "PFACM_3",
    "address": {
      "houseNumberOrName": "123",
      "street": "Parkway",
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
- [Payment Facilitator](?path=docs/Resources/Guides/Partners/PFAC/Payment-Faciliator.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Split-Settlement](?path=docs/Resources/Guides/Partners/PFAC/Split-Settlement.md)

---
