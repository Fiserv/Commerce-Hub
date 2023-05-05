---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, Payment Source]
---

# 3-D Secure Request

Commerce Hub allows a merchant to pass the 3-D Secure (3DS) authentication results that were obtained through a Commerce Hub or a thrid-party 3-D Secure provider when sending the authorization transaction. *PaymentCard* or *PaymentToken* is used by the merchant as the payment source when sending the transaction to Commerce Hub, along with the 3DS response data.

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry (PCI) Compliance capabilities to process and store card data.

---

### Request Variables

To authorize a 3-D Secure authenticated payment the following fields are available based on if the authentication was 3DS v1.x or 3DS v2.x.

<!--
type: tab
titles: source, card, transactionInteraction, additionalData3DS
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | *string* | 15 | Use value *PaymentCard* or *PaymentToken* for 3-D Secure transactions. |
| `card` | *object* | N/A | [Card](?path=docs/Resources/Master-Data/Card.md) subcomponent objects. |
| `tokenData` | *string* | 2048 | Token created from the payment source if using *PaymentToken*. |
| `tokenSource` | *string* | | Source for the Token Provider (TSP) if using *PaymentToken*. Valid Value: TRANSARMOR |

<!--
type: tab
-->

The below table identifies the parameters in the `card` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `cardData` | *object* | 15 |  Credit Card Number or Encrypted Data if using *PaymentCard* |
| `expirationMonth` | *string* | 2 | Card expiration month. |
| `expirationYear` | *string* | 4 | Card expiration year. |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionInteraction` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `eciIndicator` | *string* | 4 | [Electronic Commerce Indicator (ECI)](?path=docs/Resources/Master-Data/Transaction-Interaction.md#electroniccommerceindicators). |

<!--
type: tab
-->

The below table identifies the required parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `dsTransactionId` | *string* | 60 | Unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction | 
| `authenticationStatus` | *string* | 2 | The result of authentication attempt returned by the 3D Secure authentication process (PaRes). |
| `authenticationAttemptResult` | *string* | 1024 | Result of authentication attempt from Payer Authentication Response (PaRes). 3DS 1.x |
| `messageCategory` | *string* | 2 | Indicates the message category of 3-D Secure authentication version 2.X. *01 = Payment Authentication 02 = Non-Payment Authentication 80 = Mastercard Data Only* |
| `mpiData` | *object* | N/A | [Merchant plug-in (MPI)](#mpi-data) data from 3-D Secure (3DS) authentication. |
| `versionData` | *object* | N/A | Additional [version data](#version-data) passed during 3-D Secure (3DS) flows. |

The below table identifies the `mpiData` parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `cavv` | *string* | 256 | The Cardholder Authentication Verification Value (CAVV) is a cryptographic value derived by the issuer during payment authentication that can provide evidence of the results of payment authentication during an online purchase. |
| `xid` | *string* | 512 | 3-D Secure value returned by service provider e.g. Cardinal Commerce. |
| `eci` | *string* | 256 | Payment system-specific value provided by the Access Control Server (ACS) or Directory Server (DS) to indicate the results of the attempt to authenticate the cardholder. |
| `tavv` | *string* | 512 | Cryptographic value that is generated during the Visa transaction authentication process for a payment token transaction. |

The below table identifies the `versionData` parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `recommendedVersion` | *string* | 6 | Recommended 3DS version as specified by the card issuer. |


<!-- type: tab-end -->

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4012000033330026",
      "expirationMonth": "12",
      "expirationYear": "2025"
    }
  },
  "additionalDataCommon": {
    "dsTransactionId": "3543-b90d-d6dc1765c98",
    "authenticationStatus": "A",
    "authenticationAttemptResult": "uyt45t89cnwu3rhc98a4hterjklth4o8ctsrjzth4",
    "messageCategory": "1",
    "mpiData": {
      "cavv": "AAABCZIhcQAAAABZlyFxAAAAAAA",
      "xid": "&x_MD5_Hash=abfaf1d1df004e3c27d5d2e05929b529&x_state=BC&x_reference_3=&x_auth_code=ET141870&x_fp_timestamp=1231877695",
      "tavv": "AAABCZIhcQAAAABZlyFxAAAAAAA"
    },
    "versionData": {
      "recommendedVersion": "2.2.0"
    }
  },
  "amount": {
    "total": 6,
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": false
  },
  "transactionInteraction": {
    "eciIndicator": "SECURE_ECOM"
  },
  "merchantDetails": {
    "merchantId": "100009000000202",
    "terminalId": "00000001"
  }
}

```

<!--
type: tab
-->

```json
{
   "gatewayResponse":{
      "transactionType":"CHARGE",
      "transactionState":"AUTHORIZED",
      "transactionOrigin":"ECOM",
      "transactionProcessingDetails":{
         "orderId":"CHG016bf4014790ae4542af01d2bfb82c2371",
         "transactionTimestamp":"2022-07-01T17:42:28.651979Z",
         "apiTraceId":"1bc2f7471fa746708667e4bff79f016e",
         "clientRequestId":"ed50be7a2b3638e2f5e8270075c326cb",
         "transactionId":"1bc2f7471fa746708667e4bff79f016e"
      }
   },
   "source":{
      "sourceType":"Payment3DS",
      "card":{
         "expirationMonth":"12",
         "expirationYear":"2025",
         "bin":"401200",
         "last4":"0026",
         "scheme":"VISA"
      }
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total":6.00,
         "currency":"USD"
      },
      "processorResponseDetails":{
         "approvalStatus":"APPROVED",
         "approvalCode":"OK973C",
         "referenceNumber":"e4bff79f016e",
         "processor":"FISERV",
         "host":"NASHVILLE",
         "networkRouted":"VISA",
         "networkInternationalId":"0001",
         "responseCode":"000",
         "responseMessage":"Approved",
         "hostResponseCode":"00",
         "hostResponseMessage":"APPROVAL"
      }
   },
   "transactionDetails":{
      "captureFlag":false
   },
   "transactionInteraction":{
      "eciIndicator":"SECURE_ECOM"
   },
   "networkDetails":{
      "network":{
         "network":"Visa"
      },
      "networkResponseCode":"00",
      "cardLevelResultCode":"C",
      "validationCode":"G205",
      "transactionIdentifier":"012182063695002"
   },
}

```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)
- [Additional Data 3DS](?path=docs/Resources/Master-Data/Additional-Data-3DS.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
