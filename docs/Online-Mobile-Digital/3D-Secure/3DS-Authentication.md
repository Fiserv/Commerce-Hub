---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, Authentication]
---

# 3-D Secure Authentication Request

Submit a request after a successful response which identifies the card and device data was captured in Commerce Hub. The request will use the payment sourceType of PaymentSession/PaymentCard/PaymentToken and the sessionId from the credentials request. 

---

### Request Variables

<!--
type: tab
titles: source
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | *string* | 15 | Use value *PaymentSession*, *PaymentCard*, or *PaymentToken* |
| `sessionID` | *string* | 64 | The session ID obtained during Step 1 (Secure Card Capture) above, if using *PaymentSession* |
| `card` | *object* | N/A | [Card](?path=docs/Resources/Master-Data/Card.md) subcomponent objects. |
| `tokenData` | *string* | 2048 | Token created from the payment source if using *PaymentToken*. |
| `tokenSource` | *string* | | Source for the Token Provider (TSP) if using *PaymentToken*. Valid Value: TRANSARMOR |

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
| `deviceFingerprint` | *array* | N/A | Array of DeviceFingerPrint subcomponet objects |

<!--
type: tab
-->

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

<!--
type: tab
-->

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

<!--
type: tab
-->

<!-- type: tab-end -->

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

```json

{
  "amount": {
    "total": 256,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "{{cardNumberDevFrictionless}}",
      "expirationMonth": "{{expiryMonthDevFrictionless}}",
      "expirationYear": "{{expiryYearDevFrictionless}}",
      "securityCode": "{{cvvDevFrictionless}}"
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

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)
- [Additional Data 3DS](?path=docs/Resources/Master-Data/Additional-Data-3DS.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---

