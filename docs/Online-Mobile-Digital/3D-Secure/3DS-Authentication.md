---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, Authentication]
---

# 3-D Secure Authentication

Description....

---

## Request Variables

<!--
type: tab
titles: source, amount, billingAddress, shippingAddress, address, transactionDetails, deviceFingerprint, merchantDetails, additionalData3DS, customer 
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | *string* | 15 | Payment [source types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) supported are *PaymentSession*, *PaymentCard*, or *PaymentToken* |

<!--
type: tab
-->

The below table identifies the parameters in the `amount` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `total` | *number* | 12	| Total amount of the transaction. Subcomponent values must add up to total amount. |
| `currency` | *string* |	3	| The requested currency in ISO 3 Currency Format. | 

<!--
type: tab
-->

The below table identifies the parameters in the `billingAddress` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | :------------: | ------------------ |
| `firstName` | *string* | 256 | Billing first name | 
| `lastName` | *string* | 256 | Billing last name | 
| `address` | *object* | N/A | Address subcomponent objects | 
| `phone` | *object* | N/A | Phone subcomponets objects | 

<!--
type: tab
-->

The below table identifies the parameters in the `shippinggAddress` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
|  `firstName` | *string* | 256 | Shipping first name | 
| `lasttName` | *string* | 256 | Shipping last name | 
| `address` | *object* | N/A | Address subcomponent objects |
| `shippingMethod` | *string* | 60 | Shipping or delivery method | 
| `shippingTimeFrame` | *string* | 40 | Indicates shipping timeframe | 
| `shipToEmail` | *string* | 256 | Email on a digital delivery transaction | 

<!--
type: tab
-->

The below table identifies the parameters in the `Address` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `street` | *string* | 256 | Street address | 
| `houseNumberOrName` | *string* | 256 | Secondary address information, e.g. house number or name |
| `city` | *string* | 256 | City or locality |
| `StateOrProvince` | *string* | 256 | State or province |
| `postalCode` | *string* | 10 | ZIP code or postal code | 
| `country` | *string* | 256 | 	ISO-3166-1 alpha-2, alpha-3, numeric or full country name | 

<!--
type: tab
-->

The below table identifies the parameters in the `transactionDetails` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `deviceFingerprint` | *array* | N/A | Array of Device Fingerprint subcomponet objects |

<!--
type: tab
-->

The `deviceFingerprint` is obtained from the [Device capture}(?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Device-Capture.md) request. 

The below table identifies the parameters in the `dataStatic` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `colorDepth` | *number* | N/A | Bit depth of the color palette for displaying images, in bits per pixel |
| `screenWidth` | *number* | N/A | Width of the device screen in pixels |
| `screenHeight` | *number* | N/A | Height of the device in pixels. | 
| `timezoneOffset` | *number* | N/A | Difference between UTC time and the cardholder broswer local time, in minutes. | 
| `javaEnabled` | *boolean* | N/A | Indicates if the device has Java enabled. | 
| `javaScriptEnabled` | *boolean* | N/A | Indicates if the device has JavaScript enabled. |
| `locale` | *string* | 8 | Language/Region code of user in IETF BCP47 format. example: 'en-US' |
| `accepts` | *string* | 256 | Default device HTTP accepts header. example: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' |
| `userAgent` | *string* | 2048 | User agent data from the user device, truncated to 2048 bytes. example: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0' |

The below table identifies the parameters in the `dataDynamic` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `ipAddress` | *string* | 89 | Device IP address | 

<!--
type: tab
-->

The below table identifies the parameters in the `merchantDetails` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `merchantId` | *string* | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `terminalId` | *string* | N/A | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!--
type: tab
-->

The below table identifies the parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
|`serviceProviderReferenceId` | *string* | 60 | Unique reference identifier assigned by the 3DS Server during an initialization. Obtained during Step 1 (3DS Device Data Collection) above. |
| `channel` | *String* | 32 | Determine the channel that the transaction came through. | 

<!--
type: tab
-->

The below table identifies the parameters in the `customer` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `email` | *string* | 256 | customer email address | 
| `phone` | *array* | N/A | Array of phone subcomponet objects | 

<!-- type: tab-end -->

---

## Response Variables

The below table identifies the parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
|`serviceProviderReferenceId` | *string* | 60 | Unique reference identifier assigned by the 3DS Server during an initialization. Obtained during Step 1 (3DS Device Data Collection) above. |
| `channel` | *String* | 32 | Determine the channel that the transaction came through. | 

---

## Endpoint

<!-- theme: success -->
> **POST** `/payments-vas/v1/3ds/authenticate`

---

## Payload Example

<!--
type: tab
titles: Request, Frictionless Response, Challenge Response 
-->

```json

{
  "amount": {
    "total": 256,
    "currency": "USD"
  },
"source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000023"
    }
  },
  "billingAddress": {
    "firstName": "Raghavendiran",
    "lastName": "Kannan",
    "address": {
      "street": "100 Ashford Gables Dr",
      "houseNumberOrName": "4201",
      "city": "Atlanta",
      "stateOrProvince": "Georgia",
      "postalCode": "30338",
      "country": "USA"
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "createToken": false,
    "merchantOrderId": "12345",
    "deviceFingerprint": [
      {
        "dataStatic": {
          "colorDepth": 32,
          "screenHeight": 980,
          "screenWidth": 1080,
          "timezoneOffset": 200,
          "javaEnabled": true,
          "locale": "English",
          "accepts": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "userAgent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:30.0) Gecko/20100101 Firefox/30.0"
        }
      },
      {
        "dataDynamic": {
          "ipAddress": "67.17.19.20"
        }
      }
    ]
  },
  "merchantDetails": {
    "terminalId": "10000001",
    "merchantId": "100004000100116"
  },
  "additionalData3DS": {
    "serviceProviderReferenceId": "{{lDfRefrenceId}}",
    "channel": "BROWSER"
  },
  "customer": {
    "email": "cardinal.test@fiserv.com",
    "phone": [
      {
        "type": "MOBILE",
        "phoneNumber": "5551112222"
      }
    ]
  }
}

```

### Example of Frictionless Response

```json

{
  "gatewayResponse": {
    "transactionType": "AUTHENTICATION",
    "transactionState": "AUTHENTICATED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "362866ac81864d7c9d1ff8b5aa6e98db"
    }
  },
  "source": {
    "sourceType": "PaymentSession",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  },
  "processorResponseDetails": {
    "approvalStatus": "APPROVED",
    "host": "CARDINAL",
    "responseCode": "000",
    "responseMessage": "APPROVAL",
    "hostResponseCode": "00",
    "hostResponseMessage": "APPROVAL",
    "localTimestamp": "2021-06-20T23:42:48Z"
  },
  "additionalData3DS": {
    "serviceProviderTransactionId": "764a086f-ad30-4313-b90d-d6dc1929c0d6",
    "acsTransactionId": "8561c0ef-931a-474f-bfee-55eb98a331b1",
    "dsTransactionId": "8561c0ef-931a-474f-bfee-55eb98a33132",
    "acsReferenceNumber": "8561c0ef-931a-474f-bfee-55eb98a3jds7",
    "authenticationStatus": "A",
    "statusReason": "Approved",
    "serviceProvider": "CARDINAL",   
    "serverTransactionId": "8561c0ef-931a-474f-bfee-55ebds7s6s",
    "challengeIndicator": false,
    "mpiData": {
      "cavv": "AAABCZIhcQAAAABZlyFxAAAAAAA",
      "xid": "&x_MD5_Hash=abfaf1d1df004e3c27d5d2e05929b529&x_state=BC&x_reference_3=&x_auth_code=ET141870&x_fp_timestamp=1231877695",
      "eci": "05",
      "tavv": "AAABCZIhcQAAAABZlyFxAAAAAAA"
    },
    "versionData": {
      "recommendedVersion": "2.2.0"
    }
  }
}

```

### Example of Challenge Response 

```json

{
  "gatewayResponse": {
    "transactionType": "AUTHENTICATION",
    "transactionState": "WAITING",
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
    "sourceType": "PaymentSession",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  },
  "processorResponseDetails": {
    "host": "CARDINAL",
    "responseCode": "364",
    "responseMessage": "3-D Secure: Challenged",
    "hostResponseCode": "01",
    "hostResponseMessage": "challenged",
    "localTimestamp": "2021-06-20T23:42:48Z"
  },
  "additionalData3DS": {
    "serviceProviderTransactionId": "764a086f-ad30-4313-b90d-d6dc1929c0d6",
    "acsTransactionId": "8561c0ef-931a-474f-bfee-55eb98a331b1",
    "dsTransactionId": "8561c0ef-931a-474f-bfee-55eb98a33132",
    "acsReferenceNumber": "8561c0ef-931a-474f-bfee-55eb98a3jds7",
    "authenticationStatus": "C",
    "statusReason": "Challenged",
    "serviceProvider": "CARDINAL",   
    "serverTransactionId": "8561c0ef-931a-474f-bfee-55ebds7s6s",
    "challengeToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3OWM3OWFlNy01ZTE1LTRmOTUtODUwOC0wYjExYmI5YmI5MGYiLCJpYXQiOjE2NzI4Mjg2NjQsImlzcyI6IjYyMmQwNzhkMzU5NTk5NjdiNTc5OTI3MSIsIk9yZ1VuaXRJZCI6IjYyM2E2MjE4ODNmNWY2NzY1M2RkYTNiYSIsIlJldHVyblVybCI6Imh0dHBzOi8vdGVzdC5pcGctb25saW5lLmNvbS93ZWJzaG9wL3NpbXVsYXRvci9zZWN1cmUzZC9yZXR1cm4iLCJSZWZlcmVuY2VJZCI6IjM1Y2VhYTk0LTc5NzAtNDk0NS04NGYyLTEzZTU2YWJlOTIzOSIsIlBheWxvYWQiOnsiQUNTVXJsIjoiaHR0cHM6Ly8xbWVyY2hhbnRhY3NzdGFnLmNhcmRpbmFsY29tbWVyY2UuY29tL01lcmNoYW50QUNTV2ViL2NyZXEuanNwIiwiUGF5bG9hZCI6ImV5SnRaWE56WVdkbFZIbHdaU0k2SWtOU1pYRWlMQ0p0WlhOellXZGxWbVZ5YzJsdmJpSTZJakl1TWk0d0lpd2lkR2h5WldWRVUxTmxjblpsY2xSeVlXNXpTVVFpT2lJd1ptWmhOakZsWWkxaFpEZGxMVFJqWVdVdFlUSmxOaTAyTldFelptVmxOVEl5WVRraUxDSmhZM05VY21GdWMwbEVJam9pTjJSbFpHVTVZVEF0TWpZNE1TMDBNelpoTFRobFlqUXRPVGM0Wm1aaE9UVXpaRGs1SWl3aVkyaGhiR3hsYm1kbFYybHVaRzkzVTJsNlpTSTZJakF5SW4wIiwiVHJhbnNhY3Rpb25JZCI6InRXcU1teW5mQXhZWUlYeVdvaVIxIn0sIk9iamVjdGlmeVBheWxvYWQiOnRydWV9.CEgWtaIffsMDryBIUjZkEj__YF-GHuBZbxX2B_17p0U",
    "challengeIndicator": true,
    "acsUrl": "https://merchantacsstag.cardinalcommerce.com/MerchantACSWeb/pareq.js",
    "stepUpUrl": "https://centinelapistag.cardinalcommerce.com/V2/Cruise/StepUp",
    "versionData": {
      "recommendedVersion": "2.2.0"
    },
    "mpiData": {
      "xid": "&x_MD5_Hash=abfaf1d1df004e3c27d5d2e05929b529&x_state=BC&x_reference_3=&x_auth_code=ET141870&x_fp_timestamp=1231877695",
      "eci": "07"
    }
  }
}

```


[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/3ds/authenticate)

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/3ds/authenticate)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)
- [Additional Data 3DS](?path=docs/Resources/Master-Data/Additional-Data-3DS.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---

