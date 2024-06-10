---
tags: [3-D-Secure, Online, Web, Mobile, Initialization, Device Fingerprint]
---

# 3-D Secure Device Capture

3-D Secure *(3DS)* providers mandate that integrating parties collect the 3DS 2.0 *(EMV 3DS)* browser fields. The [device fingerprint capture](#device-fingerprint-capture) must be completed by using the Commerce Hub SDK or directly with the 3DS provider.

---

## Device Data Initialization

Initialize the 3DS session with Commerce Hub using the device data initialization request. The response will return `encodedToken` and `dataCollectionUrl` in the the `methodData` object of `additionalData3DS`, which are required to collect the [device fingerprint](#device-fingerprint-capture) information.

---

### Request Variables

<!--
type: tab
titles: source, merchantDetails, transactionDetails
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

<!--
type: tab
titles: additionalData3DS, methodData 
-->

The below table identifies the parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `serviceProviderReferenceId` | *string* | 60 | Unique reference identifier assigned by the 3DS Server during an initialization |
| `channel` | *string* | 32 | Determine the channel that the transaction came through |
| `methodData` | *object* | N/A | Additional device data collection details passed during 3-D Secure (3DS) flows |

<!--
type: tab
-->

The below table identifies the parameters in the `methodData` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `encodedToken` | *string* | 4000 | Base64 encoded transactional JWT token for external data collection with service provider |
| `dataCollectionUrl` | *string* | 256 | The URL that will be used by the 3DS Method to collect card holder browser information |

<!-- type: tab-end -->

---

### Endpoint

<!-- theme: success -->
> **POST** `/payments-vas/v1/3ds/device-data-initialize`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a device data initialization payload request.

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

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/3ds/device-data-initialize)

<!--
type: tab
-->

Example of a device data initialization (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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
            "encodedToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9......"
        }
    }
}
```

<!-- type: tab-end -->

---

## Device Fingerprint Capture

After a successful [device data initialization](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Authentication.md), merchants must use one of the following options to capture the cardholder's [device data fingerprint](?path=docs/Resources/Master-Data/Device-Fingerprint.md).

<!--- 
- **Commerce Hub SDK:** Hidden JavaScript iFrame collection
- --->
- **Cardinal Cruise API:** Hidden iFrame using Java Web Token *(JWT)*

<!-- theme; warning -->
> Merchants are responsible for collecting the card holder device fingerprint directly when using Commerce Hub APIs. This fingerprint must be submitted in the [authentication request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Authentication.md).

The following table outlines the required fields to be collected in the `deviceFingerprint` object.

The below table identifies the parameters in the `dataStatic` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `colorDepth` | *number* | N/A | Value representing the depth of the color palette for displaying images, in bits per pixel. Obtained from the cardholder's browser using the `screen.colorDepth` JavaScript property. |
| `screenWidth` | *number* | N/A | Total width of the cardholder’s screen in pixels. Value is returned from the `screen.width` JavaScript property |
| `screenHeight` | *number* | N/A | Total height of the cardholder’s screen in pixels. Value is returned from the `screen.height` JavaScript property |
| `timezoneOffset` | *number* | N/A | Time zone offset in minutes between UTC and the local time of the cardholder's browser. **Note:** the offset is positive if the local time zone is behind UTC and negative if it is ahead |
| `javaEnabled` | *boolean* | N/A |  Represents the ability of the cardholder's browser to execute Java. Value is returned from the `navigator.javaEnabled` JavaScript property |
| `javaScriptEnabled` | *boolean* | N/A | Represents the ability of the cardholder's browser execute JavaScript |
| `locale` | *string* | 8 | Value representing the browser's language as defined in IETF BCP47. Returned from `navigator.language` JavaScript property |
| `accepts` | *string* | 256 | Exact content of the HTTP accept headers as sent to the 3DS requestor from the cardholder’s browser |
| `userAgent` | *string* | 2048 | Exact content of the HTTP User-Agent header. **Note:** if the total length of the User-Agent sent by the browser exceeds 2048 characters, truncate the excess portion |

The below table identifies the parameters in the `dataDynamic` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `ipAddress` | *string* | 89 | IP address the browser is connecting from |

The following table outlines the required fields to be collected in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `channel` | *String* | 32 | Indicates the type of channel interface being used to initiate the transaction |

---

<!---
### Commerce Hub SDK

The following code snippets outline how to use the Commerce Hub SDK to initialize 3DS device data capture.

#### SDK Import

The Commerce Hub SDK can be imported into the merchant's website by adding the following script tag to the parent page.

```php
<script id="commercehub" src="https://prod.api.fiservapps.com/ch/sdk/v1/commercehub-client-sdk.js"></script>
```

#### Hidden iFrame Data Collection

Description......

```javascript
new commercehub.FiservManaged3DS(config).captureDeviceData("fiserv-3ds-hidden-container-div")   
    .then((result) => { })   
    .error(error) => { });
```

#### Response Handling

The following code snippet provides a sample response

Description...... --->

<!--
type: tab
titles: Variables, Example 
-->

<!---
The below table identifies the parameters in the `providerCollectionStatus` object in the the `methodData` object of `additionalData3DS`.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `attempted` | *boolean* | N/A |  |
| `attemptedTimestamp` | *string* |  |  |
| `status` | *string* |  |  |
| `completedTimestamp` | *string* | |  |
--->

<!--
type: tab
-->

<!---
The following code snippet provides a sample response.

```json
{
  "transactionDetails": {
    "authentication3DS": true
  },
  "additionalData3DS": {
    "serviceProvider": "CARDINAL",
    "serviceProviderReferenceId": "bfc44ca7-0373-423e-8f55-e57e6523a149",
    "methodData": {
      "providerCollectionStatus": {
        "attempted": true,
        "attemptedTimestamp": "1665144961",
        "status": "SUCCESS",
        "completedTimestamp": "1665145361"
      }
    }
  },
  "ok": true
}

```

---
--->

### Cardinal Cruise API

The Cardinal Cruise API device data collection process uses the `methodData` fields of the `additionalData3DS` object returned in the [device data initialization](#device-data-initialization) response. Merchants can choose to use either Cardinal response handling method as outlined in the [Cardinal Cruise Device Data Collection documentation](https://cardinaldocs.atlassian.net/wiki/spaces/CC/pages/1106870359/Option+1+-+JWT+-+Card+BIN+to+full+Card+Number+passed+in+JWT).

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/3ds/device-data-initialize)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)
- [Additional Data 3DS](?path=docs/Resources/Master-Data/Additional-Data-3DS.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
