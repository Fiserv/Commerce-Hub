# Merchant Managed Secure Data Capture

<!-- theme: danger -->
> We are enhancing Commerce Hub to include API Only integration support and the documents related to the features will be released soon.

Commerce Hub allows E-commerce merchants to manage the design and form of their website (unlike [Hosted Payment Page](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Hosted-Payment-Page/Hosted-Payment-Page.md) and [iFrame](docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md) solutions). The merchant handles encrypting the data from the form and makes a direct API call with the payment information directly to Commerce Hub to receive a payment nonce `sessionId` (one-time use token). The merchant website can then pass the `sessionId` in a charges/tokens request as the payment source.

### Benefits

Allows a merchant an easy and secure way to manage and encrypt the payment data on their website. Commerce Hub makes it simple to submit the payment credentials without collecting, processing, or being able to view those payment credentials in their untokenized form, lowering the PCI compliance requirements.

#### Request Types

- **credentials:** responsible for creating a payment session.
- **card-capture:** responsible for capturing encrypted card details.
- **charges:** responsible for decrypting captured card details and then charging based on a payment session.
- **tokens:** responsible for decrypting captured card details and then generating a token based on a payment session.

---

## Additional Security Settings

The following recommendations are to limit potential for fraudulent activity on your Commerce Hub JS integration.

**Recommendations**

- Enable Re-Captcha
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) for the business type or payment flow

---

# Secure Data Capture API Only

Description........

## Step 1: Security Credentials 

A [credentials](?path=docs/Resources/API-Documents/Payments_VAS/Credentials.md) request is required to obtain the client `asymmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, and `publicKey`. These will be used to create the [`encryption block`](#step-2-encryption) required in the offline payment request and `sessionId` required in the [charges or tokens request](#step-4-submit-request).

---

## Step 2: Encryption

The card data is encypted using Base64 RSA Multi-Use Public Key...... once encrypted you will the encryptionblock and encyptionblockfields used in the card capture request.

---

## Step 3: Submit Card Capture Request

the encrypted data is submitted to Commerce Hub to store the card data.....

#### Minimum Requirements

<!--
type: tab
titles: source, encryptionData, JSON Example
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | --------| ---------- |
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentCard* for card transactions |
| `encryptionData` | *object* | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ---------| --------- |
| `encryptionType` | *string* | 256 |  &#10004; | [Encryption type](?path=docs/Resources/Master-Data/Encryption-Data.md#encryption-type) to be passed. Example (ON_GAURD) |
| `encryptionTarget` | *string* | 256 |  &#10004; |Target should be MANUAL |
| `encryptionBlock` | *string* | 2000 |  &#10004; | This field contains the track data or card number provided in encrypted form. |
| `encryptionBlockFields` | *string* | 256 |  &#10004; | Encryption block field descriptors to facilitate decryption when using public keys. Each field should be recorded in the form of the object.field_name:byte_count, for example: card.expirationMonth:2. |
| `deviceType` | *string* | 256 | &#10004; | Device type need to be sent for TDES and AES encrypted track data |
| `keyId` | *string* | 64 | &#10004; | Encryption Key ID |
| `encryptedKey` | *string* | 2000 | &#10004; | Merchant or device defined encryption key required for decryption of encrypted <code>cardData</code>. Normally used in card not present integrations e.g. Mobile device. |


<!--
type: tab
-->

JSON string format for PaymentCard:

```json
{
   "source":{
      "sourceType": "PaymentCard",
      "encryptionData":{
         "encryptionType": "RSA",
         "encryptionTarget": "MANUAL",
         "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
         "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
         "deviceType": "INGENICO",
         "keyId": "88000000023",
         "encryptedKey": "NdCmVw5"
      }
   }
}
```

<!-- type: tab-end -->

---

#### Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/card-capture`

---

#### Card Capture Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a card capture payload request using PaymentCard for Secure Data Capture.

```json
{
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
  "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
   }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/card-capture)

<!--
type: tab
-->

##### Example of a card capture (204: Success) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json

since we only send a HTTP 204 back, verify the merchant will not recieve any gatewayresponse elements, if no JSON is returned then update 148 example to state Commerce Hub will return an HTTP 204: Success on a successful card capture response.

```

<!-- type: tab-end -->

---

## Step 4: Submit Request 

copy the request from JS or iFrame for charges/tokens and response.

---

## See Also
- [Secure Data Capture]
- API Explorer
- Encryption
- Security Credentials
