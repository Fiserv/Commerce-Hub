---
tags: [carat, commerce-hub, enterprise, emv, in-person, card-present, encrypted-payment]
---

# PaymentEMV

EMV chip and PIN is a secure payment method for payment terminals and automated teller machines.

<!-- theme: danger -->
> We are enhancing Commerce Hub to include EMV support and the documents related to this feature will be released soon.

EMV aims to promote global interoperability and easy compatibility of chip-based payment cards with acceptance devices. Various security features protect the chip card. These features render the EMV card a more secure alternative to traditional magnetic stripe cards, from which cardholder information can be easily compromised. EMV cards support both contact and contactless payments.

<!-- 
explain EMV, outline the requirements to submit a PaymentEMV source, reference PaymentCard for example, need JSON, request, response.
-->

### Request Variables

<!--
type: tab
title: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentCard* for card transactions |
| `card` | *object* | N/A |  &#10004; | Contains the payment card details |
| `emvData` | *object* | N/A |  &#10004; | Contains a series of "Tag/Length/Value" combination for chip card processing |
| `encryptionData` | *object* | N/A | &#10004; | Contains the encrypted payment details |
| `pinBlock` | *object* | N/A | | Contains the encrypted PIN details |


<!--
type: tab
title: card
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `cardData` | *string* | 15 |  &#10004; | Credit Card Number or Encrypted Data |
| `expirationMonth` | *string* | 2 |  &#10004; | 2-digit card expiration month Example (05) |
| `expirationYear` | *string* | 4 |  &#10004; |4-digit card expiration year Example (2025) |


<!--
type: tab
title: emvData
-->


<!--
type: tab
title: encryptionData
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `encryptionType` | *string* | 256 |  &#10004; | Encryption type to be passed. Example (ON_GAURD) |
| `encryptionTarget` | *string* | 256 |  &#10004; |Target could be Track1, Track2, Both or Manual |
| `encryptionBlock` | *string* | 2000 |  &#10004; | |
| `deviceType` | *string* | 256 |  &#10004; | Device type need to be sent for TDES and AES encrypted track data. Example (INGENICO) |
| `securitykeyUpdateIndicator` | *boolean* | | &#10004; | Provided in response. POS is expected to download updated key, key cert |
| `keyId` | *string* | | | Needs to be passed if track data is encrypted |
| `encryptedKey` | *string* | | &#10004; | Identifier required for decryption |


<!--
type: tab
title: JSON Example
-->

JSON string format for PaymentCard:

```json
{
  "source": {
    "sourceType": "PaymentEmv",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035"
      },
      "emvData":{


      } 
    "encryptionData":{
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "",
      "deviceType": "INGENICO",
      "securitykeyUpdateIndicator": false,
      "keyId": "",
      "encryptedKey": "NdCmVw5..."
      }
   }
}
```

<!-- type: tab-end -->

---

### Charges Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request using PaymentCard.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentEMV",
    "emvData": "0249F3704833A12329F1002AB34",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ7TY/0VGHEYpkbG3ORO+dGL6TzOSWuC1pCaJE3cZJ8sWONXp5pDuni1OP9v+eRyDSD25Bjzdfa3KJfmXLFXWa++wJ5CY+NdQKrjHWWKP+iAzIUEd5PmnrzVxMgXOz1wJ5YR245a2350oBbz74EZfaojPtX/DCgfEL6cCEyepttx94hIWDDiOLPuplp1KJhh7nJvUGIAhDhZwyKST68xsFswN53z/aduD128TXD4vkduK9QYgavE0y82lxwQILUGScwYnRYmb+Zu2el3ayNE8zdXCe4eWiN1vXxsKUI49WQA==",
      "deviceType": "INGENICO",
      "keyId": "88000000022"
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "merchantInvoiceNumber": "123456789012"
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "ICR_RELIABLE",
    "posConditionCode": "CARD_PRESENT"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
title: Response
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [HTTP Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "POS",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "source": {
    "sourceType": "PaymentEMV",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "02",
      "expirationYear": "2035"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": "12.04",
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
      "processor": "fiserv",
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
    "merchantInvoiceNumber": "123456789012"
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)

---