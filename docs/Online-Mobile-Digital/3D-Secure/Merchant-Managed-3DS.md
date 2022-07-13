---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, Payment Source]
---

# Merchant Managed 3-D Secure Integration

---

Commerce Hub allows a merchant to pass the 3-D Secure Authentication results that were obtained externally with a thrid-party 3-D Secure (3DS) provider when sending the authorization transaction to Commerce Hub. _Payment3DS_ is used by the merchant as the payment source when sending the transaction to the Commerce Hub.

<!-- theme: info -->
> This feature is intended for CommerceHub Merchants who directly connect to an external 3-D Secure service provider to perform authentication outside of Commerce Hub.

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry (PCI) Compliance capabilities to process and store card data.

---

### Request Variables

To authorize a 3-D Secure authenticated payment the following fields are available based on if the authentication was 3DS v1.x or 3DS v2.x.

<!--
type: tab
titles: source, card, transactionInteraction
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | *string* | 15 | Use value *Payment3ds* for merchant managed 3-D Secure transactions. |
| `xid` | *string* | 256 | 3-D Secure/Verified by Visa value returned by the 3DS provider. |
| `merchantIdentifier` | *string* | 16 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer |
| `version` | *string* | 64 | Specific Protocol version supported by 3DS. |
| `cavv` | *string* | 256 | The Cardholder Authentication Verification Value (CAVV) is a cryptographic value derived by the issuer during payment authentication that can provide evidence of the results of payment authentication during an online purchase. |
| `verificationResponse` | *string* | 256 | Verification response message. |
| `authenticationAttemptResult` | *string* | 256 | Result of authentication attempt from Payer Authentication Response (PaRes). |
| `authenticationResponse` | *string* |  | The result of authentication attempt returned by the 3D Secure authentication process (PaRes). |
| `channel` | *string* | 32 | Channel the 3DS transaction was initiated. _**Valid Values:** MOBILE_APP, MOBILE_WEB, BROWSER_PC, KIOSK, CONSOLE, 3DS_REQUESTOR_INITIATED_ |
| `directoryServerTransactionId` | *string* |  | Indicates the message category of 3d secure authentication version 2.X. _01 = Payment Authentication, 02 = Non-Payment Authentication, 80 = Mastercard Data Only_ |
| `messageCategory` | *string* |  | The response transaction UUID from the DS (directory server) |
| `tavv` | *string* |  | Cryptographic value that is generated during the Visa transaction authentication process for a payment token transaction. |
| `challengeStatus` | *string* |  | The transaction status as returned by the 3D Secure authentication process. (CRes) |
| `card` | *object* | N/A | [Card](?path=docs/Resources/Master-Data/Card.md) subcomponent objects. |

<!--
type: tab
-->

The below table identifies the parameters in the `card` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `cardData` | *object* | 15 |  Credit Card Number or Encrypted Data |
| `expirationMonth` | *string* | 2 | Card expiration month. |
| `expirationYear` | *string* | 4 | Card expiration year. |

<!--
type: tab
-->

The below table identifies the parameters in the `transactionInteraction` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `eciIndicator` | *string* | 4 | [Electronic Commerce Indicator (ECI)](?path=docs/Resources/Master-Data/Transaction-Interaction.md#electroniccommerceindicators). |

<!-- type: tab-end -->

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

```json
{
   "source":{
      "sourceType":"Payment3DS",
      "card":{
         "cardData":"4012000033330026",
         "expirationMonth":"12",
         "expirationYear":"2025"
      },
      "cavv":"020360C31C002540AFAB9DFFA1F69D3000020000",
      "xid":"MfhxI43NrkuWQYLCoRWitYRDMYo",
      "authenticationAttemptResult":"Y",
      "transactionStatus":"A",
      "messageCategory":"1",
      "verificationResponse":"I",
      "directoryServerTransactionId":"f38e6948-5388-41a6-bca4-b49723c19437",
      "authenticationResponse":"Y",
      "version":"2.1.0"
   },
   "amount":{
      "total":6,
      "currency":"USD"
   },
   "transactionDetails":{
      "captureFlag":false
   },
   "transactionInteraction":{
      "eciIndicator":"SECURE_ECOMMERCE"
   },
"merchantDetails":{
      "merchantId":"100009000000202",
      "terminalId":"00000001"
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
         "hostResponseMessage":"APPROVAL",
         "responseIndicators":{
            "alternateRouteDebitIndicator":false,
            "signatureLineIndicator":false,
            "signatureDebitRouteIndicator":false
         },
         "bankAssociationDetails":{
            "associationResponseCode":"V000",
            "avsSecurityCodeResponse":{
               "streetMatch":"NONE",
               "postalCodeMatch":"NONE",
               "securityCodeMatch":"NOT_CHECKED",
               "association":{
                  "securityCodeResponse":"X"
               }
            }
         }
      }
   },
   "transactionDetails":{
      "captureFlag":false
   },
   "transactionInteraction":{
      "eciIndicator":"SECURE_ECOMMERCE"
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
   "paymentTokens":[
      {
         "tokenData":"0724125326420026",
         "tokenSource":"TRANSARMOR",
         "tokenResponseCode":"000",
         "tokenResponseDescription":"SUCCESS"
      }
   ]
}

```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
