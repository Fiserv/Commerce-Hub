---
tags: [carat, commerce-hub, enterprise, device, master-data, device-fingerprint, device-information, data-capture, data-static, data-dynamic]
---

# Device Fingerprint Data

The device fingerprint is information collected about the software and hardware of a remote computing device for the purpose of identification. A browser fingerprint is information collected specifically by interaction with the web browser of the device.

<!--
type: tab
title: deviceFingerprintData
-->

The below table identifies the parameters in the `deviceFingerprintData` object.

| Variable | Type| Maximum Length | Description|
|---------|----------|----------------|---------|
|`provider` | *string* | N/A | Device provider e.g. InAuth. |
|`dataCapture`| *object* | N/A | [Data capture](#data-capture) details. | 
|`dataStatic`| *object* | N/A | [Data static](#data-static) details.|
|`dataDynamic`| *object* | N/A | [Data dynamic](#data-dynamic) details. |

<!--
type: tab
title: JSON Example
-->

JSON string format for `deviceFingerprint`:

```json
{
   "deviceFingerprint": [
      {
         "provider": "InAuth",
         "dataCapture": {
            "rawData": "aaaaaXREUVZGRlFY...aMV",
            "dataEventId": "BB8E4E92...Fz1E063113",
            "captureTime": "2016-04-16T16:06:05Z"
         },
         "dataStatic": {
            "operatingSystem": "ANDROID",
            "operatingSystemVersion": "5.1.1 Lollipop",
            "model": "XYX-1",
            "type": "Moto G",
            "deviceId": "00:1B:44:11:3A:B7",
            "javaScriptEnabled": true,
            "javaEnabled": true,
            "userAgent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
            "locale": "en-US"
         },
         "dataDynamic": {
            "latitude": "13.0827 N",
            "longitude": "80.2707 E",
            "ipAddress": "172.27.37.221",
            "captureTime": "2016-04-16T16:06:05Z",
            "address": {
               "city": "Atlanta",
               "country": "US"
            }
         }
      }
   ]
}

```

<!--type: tab-end -->

## Data Capture

Contains the finger print data and time it is captured.

<!--
type: tab
title: dataCapture
-->

The below table identifies the parameters in the `dataCapture` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `rawData` | *string* | 256 | Raw data from the data capture |
| `dataEventId` | *string* | 256 | Unique ID for the data capture |
| `captureTime` | *string* | 20 | Timestamp in ISO 8601 fromat YYYY-MM-DDThh:mm:ssZ |

<!--
type: tab
title: JSON Example
-->

JSON string format for `dataCapture`:

```json
{
   "dataCapture":{
      "rawData": "aaaaaXREUVZGRlFY...aMV",
      "dataEventId": "BB8E4E92...Fz1E063113",
      "captureTime": "2016-04-16T16:06:05Z"
   }
}
```

<!--type: tab-end -->

## Data Static

Contains the static data such as operating system details and device type/model.

<!--
type: tab
title: dataStatic
-->

The below table identifies the parameters in the `dataStatic` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `operatingSystem` | *string* | 256 | Device operating system (OS) |
| `operatingSystemVersion` | *string* |  56| Device operating system (OS) version |
| `model` | *string* | 256 | Device Model |
| `type` | *string* | 256 | Device type/name |
| `deviceId` | *string* | 48 | MAC of the device originating the transaction |
| `javaScriptEnabled` | *boolean* | N/A | Identifies if JavaScript is enabled on the device |
| `javaEnabled` | *boolean* | N/A | Identifies if Java is enabled on the device |
| `userAgent` | *string* | 2048 | User agent data from the user device truncated to 2048 bytes |
| `locale` | *string* | 8 | Language/Region code of user in IETF BCP47 format |

<!--
type: tab
title: JSON Example
-->

JSON string format for `dataStatic`:

```json
{
   "dataStatic":{
      "operatingSystem": "ANDROID",
      "operatingSystemVersion": "5.1.1 Lollipop",
      "model": "XYX-1",
      "type": "Moto G",
      "deviceId": "00:1B:44:11:3A:B7",
      "javaScriptEnabled": true,
      "javaEnabled": true,
      "userAgent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
      "locale": "en-US"
   }
}
```

<!--type: tab-end -->

## Data Dynamic

Contains the dayamic data like device location and IP address. 

<!--
type: tab
title: dataDynamic
-->

The below table identifies the parameters in the `dataDynamic` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `latitude` | *string* | 256 | Cardholder current latitude GPS position |
| `longitude` | *string* | 256 | Cardholder current longitude GPS position |
| `ipAddress` | *string* | 39 | Customer IP Address |
| `captureTime` | *string* | 20 | Timestamp in ISO 8601 fromat YYYY-MM-DDThh:mm:ssZ |
| `address` | *object* | N/A | City and country [address](?path=docs/Resources/Master-Data/Address.md#address) the IP/Device is resident in when transaction was originated |


<!--
type: tab
title: JSON Example
-->

JSON string format for `dataDynamic`:

```json
{
   "dataDynamic": {
      "latitude": "13.0827 N",
      "longitude": "80.2707 E",
      "ipAddress": "172.27.37.221",
      "captureTime": "2016-04-16T16:06:05Z",
      "address": {
         "city": "Atlanta",
         "country": "US"
      }
   }
}

```
<!--type: tab-end -->

---

## See Also

- [API Explorer](./api/?type=post&path=/payments/v1/charges)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---
