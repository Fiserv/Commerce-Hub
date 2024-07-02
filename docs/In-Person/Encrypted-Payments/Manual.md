---
tags: [Payment Card, Manual Entry, In-Person, Card Present, Encrypted Payments, Payment Source, Device, Terminal]
---

# Encrypted Manual Key Entry

Encrypted manual key entry can be used as [EMV Fallback](?path=docs/Resources/FAQs-Glossary/Glossary.md#emv-fallback) and involves manually entering the payment source details into a payment device. This can be used when the payment device fails to obtain the card details from the [card's chip](?path=docs/In-Person/Encrypted-Payments/EMV.md) or [magnetic stripe](?path=docs/In-Person/Encrypted-Payments/Track.md).

A device encrypts the customer's payment source and sends the encryption data to Commerce Hub. A merchant can also choose to decrypt the `cardData` and re-encrypt the data it using a [multi-use public key _(MUPK)_](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md) before sending it to Commerce Hub. The `sourceType` _PaymentCard_ is used to submit a transaction to our application.

<!-- theme: info -->
> The below requirements are used for manual entry [in-person](?path=docs/Getting-Started/Getting-Started-InPerson.md) requests from an encrypted device. See [encrypted payment card](?path=docs/In-Person/Encrypted-Payments/Manual.md) for [online, digital and mobile requests](?path=docs/Getting-Started/Getting-Started-Online.md).

<!-- theme: danger -->
> Commerce Hub requires all payment cards to be encrypted, it is not recommended to send unencrypted `cardData` for the payment transaction.

---

## Manual Entry Request

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful manually keyed [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) request using _PaymentCard_. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

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
      "deviceType": "INGENICO",
      "keyId": "88000000022"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "EMV_FALLBACK",
    "posConditionCode": "CARD_PRESENT",
    "terminalTimestamp": "2021-06-20T23:42:48Z"
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

Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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
    "merchantInvoiceNumber": "123456789012"
  }
}
```

<!-- type: tab-end -->

---

### Parameters

#### Request Variables

<!-- theme: info -->
> Refer to the [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md) for additional fields that may be required based on business needs and industry vertical.

<!--
type: tab
titles: source, encryptionData
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | --------| ---------- |
| `sourceType` | _string_ | 15 |  &#10004; | Use Value _PaymentCard_ for card transactions |
| `encryptionData` | _object_ | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ---------| --------- |
| `encryptionType` | _string_ | 256 |  &#10004; | [Encryption type](?path=docs/Resources/Master-Data/Encryption-Data.md#encryption-type) to be passed. Example (RSA) |
| `encryptionTarget` | _string_ | 256 |  &#10004; |Target should be MANUAL |
| `encryptionBlock` | _string_ | 2000 |  &#10004; | This field contains the track data or card number provided in encrypted form. |
| `deviceType` | _string_ | 256 |  &#10004; | [Device type](?path=docs/Resources/Master-Data/Encryption-Data.md#device-type) need to be sent for TDES and AES encrypted track data. Example (INGENICO) |
| `keyId` | _string_ | 64 | &#10004; | Encryption Key ID |

<!-- type: tab-end -->

---

## Encryption Format

### OnGuard

Ingenico uses FPE _(Format Preserving Encryption)_ based of TDES/DUKPT encryption. The encrypted data looks exactly like the clear data, except the digits are scrambled. The terminal will create an encrypted string of concatenated mock Track 2 data composed of the PAN, expiration date and security code.

<!-- theme: example -->
> M5482652331427157=3402583
>
> In the example, M indicates manual data, 5482652331427157 is the PAN, 3402 is the expiration date (YYMM), and 583 is the security code.

### RSA

The RSA data block contains the terminal ID or merchant ID _(right justified, lead zero padding to 8)_; followed by data from Encryption Target including the PAN, and optionally the expiration date, security code, AVS billing postal code, or the AVS billing address, Track 1 and Track 2. Each optional data element after the PAN is seperated by a field delimiter "|".

<!-- theme: example -->
> 123456784502000011112222|1503|967|33073|5028 Heron Pl
>
> =s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ7TY/0VGHEYpkbG3ORO+dGL6TzOSWuC1pCaJE3cZJ8sWONXp5pDuni1OP9v+eRyDSD25Bjzdfa3KJfmXLFXWa++wJ5CY+NdQKrjHWWKP+iAzIUEd5PmnrzVxMgXOz1wJ5YR245a2350oBbz74EZfaojPtX/DCgfEL6cCEyepttx94hIWDDiOLPuplp1KJhh7nJvUGIAhDhZwyKST68xsFswN53z/aduD128TXD4vkduK9QYgavE0y82lxwQILUGScwYnRYmb+Zu2el3ayNE8zdXCe4eWiN1vXxsKUI49WQA==

### TDES_DUKPT

In TDES the string to be encrypted consists of concatenated dummy Track 1 and Track 2 data with Start and end sentinels. The dummy tracks are constructed from the manually-entered PAN, expiration date and security code. All data elements are required when using TDES encryption in manual entry mode.

<!-- theme: example -->
> %M5444009999222205^MANUALLY/ENTERED^12120000001234000000?; 5444009999222205=12120000001234000?
>
> In the example, 5444009999222205 is the PAN, 1212 is the expiration date _(YYMM)_, and 1234 is the security code. There will always be 6 zeros between the expiration date and the security code. There will always be 6 zeroes after the security code in Track 1, and 3 zeroes after the security code in Track 2.

### VeriFone

The data will be an encrypted value coming from VeriFone terminal, the same length as the keyed data with the expiration date added to the front of the PAN.

<!-- theme: example -->
> 57125076802752061355
>
> In the example, the encrypted expiration date is 5712

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md)
- [Device Encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md)
- [Encryption Data](?path=docs/Resources/Master-Data/Encryption-Data.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)

---
