---
tags: [3-D-Secure, Online, Web, Mobile, Initilization, Device Fingerprint]
---

# 3-D Secure Device Capture 

Description

---

## Secure Initilazation

Description 

---

### Request Variables 

<!--
type: tab
titles: source, merchantDetails 
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Description|
|---------|----------|----------------|---------|
| `sourceType` | *string* | 15 | Payment [source types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) supported are *PaymentSession*, *PaymentCard*, or *PaymentToken*  |

<!--
type: tab
-->

The below table identifies the parameters in the `merchantDetails` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `merchantId` | *string* | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `terminalId` | *string* | 12 | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway |

<!--
type: tab
-->

The below table identifies the parameters in the `transactionDetails` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `authentication3ds` | *boolean* | N/A | Determines if authentication should be performed on the payment type with 3DS provider |

<!-- type: tab-end -->

---

### Response Variables 

The below table identifies the parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
|`serviceProviderReferenceId` | *string* | 60 | Unique reference identifier assigned by the 3DS Server during an initialization. Obtained during Step 1 (3DS Device Data Collection) above. |
| `channel` | *String* | 32 | Determine the channel that the transaction came through. | 
| `methodData` | *string* | N/A | Additional device data collection details passed during 3-D Secure (3DS) flows |

---

### Endpoint

<!-- theme: success -->
> **POST** `/payments-vas/v1/3ds/device-data-initialize`

--- 

```json

{
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
  "merchantDetails": {
    "terminalId": "10000001",
    "merchantId": "100004000100116"
  },
  "transactionDetails": {
    "authentication3DS": true
  }
}

```

<!--
type: tab
-->

#### Example of a response.

```json

{
    "gatewayResponse": {
        "transactionProcessingDetails": {
            "apiTraceId": "03871b37f328409ea5971b6e3c1acd3f",
            "clientRequestId": "dc94b4d570edfedb51ca32beba8e3355"
        }
    },
    "source": {
        "sourceType": "PaymentCard",
        "card": {
            "bin": "400555",
            "last4": "0019",
            "scheme": "VISA",
            "expirationMonth": "10",
            "expirationYear": "2030"
        }
    },
    "transactionDetails": {
        "authentication3DS": true
    },
    "additionalData3DS": {
        "serviceProvider": "CARDINAL",
        "channel": "BROSWER",
        "methodData": {
            "url": "https://www.example.com/api/collect",
            "encodedToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        }
    }
}

```

## Device Fingerprint Capture

Description 

---

### Commerce Hub SDK 

### The following code snippets outline how to use the CommerceHub SDK to initialize 3DS device data capture

#### SDK Import 

The CommerceHub SDK can be imported into a merchants website by adding the following script tag to the parent page.

```php
<script id="commercehub" src="https://prod.api.fiservapps.com/ch/sdk/v1/commercehub-client-sdk.js"></script>
```

---

### Cardinal Cruise API 

Cardinal mandate that integrating parties must collect the eleven 3DS 2.0 (EMV 3DS) browser fields to make a 3DS 2.0 request. Cardinal device data collection process using the additionalData3DS.methodData fields returned in the device data initialization response. Merchants can choose to use either Cardinal response handling methods as outlined in Device Data Collection Responses.

#### Here is a link to Cardinal: https://cardinaldocs.atlassian.net/wiki/spaces/CC/pages/1106870359/Option+1+-+JWT+-+Card+BIN+to+full+Card+Number+passed+in+JWT
---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/3ds/device-data-initialize)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)
- [Additional Data 3DS](?path=docs/Resources/Master-Data/Additional-Data-3DS.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---

