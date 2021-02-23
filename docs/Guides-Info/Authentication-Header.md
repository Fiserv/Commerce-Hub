---
tags: [carat, commerce-hub, card-not-present, card-present, hash, header, authentication]
---

# Generate Authentication Header

## Overview

To ensure data integrity, prevent replay attacks, and eliminate stale requests, Authentication is required as part of the [Header](Use-Our-APIs.md).

#### Details

- **Signature Algorithm** : SHA256 HMAC
- **Signature Encoding** : Base64
- **Signed With** : Developer App Secret Key; provided to merchant when boarded

The message data for the signature is the following items concatenated: `Api-Key`, `Client-Request-Id`, `Timestamp`, `Signature`.

<!-- theme: info -->
>The `Client-Request-Id` is a randomly generated number that is unique for each request. It is used as nonce and validated against all Client-Request-Ids received by Commerce Hub within a predetermined timeframe *(five minutes is the default)* to prevent replay attacks. Commerce Hub uses the timestamp of the request to validate against stale requests. Any request older than the specified duration is rejected.

---

## Code Examples

<!--
type: tab
title: Javascript
-->

##### Example of a Javascript Request.

<!-- theme: info -->
>Authentication : OWRiMWNlZjRmMTEyY2M5NmMzNDFkMjhjZDU0NWIyZmYzM2Q2YWMyNDE5Nzg5YmVkYzEyZTJjNmUwNDA5OWMyMQ==

```javascript
var key = 'api'Key;
var secret = 'secret';

var ClientRequestId = Math.floor((Math.random() * 10000000) + 1);

//var ClientRequestId = 1000000012;

var time = new Date().getTime();
var method = request.method;

var requestBody = request.data;
var rawSignature = key + ClientRequestId + time + requestBody;

var computedHash = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secret.toString());
computedHash.update(rawSignature);
computedHash = computedHash.finalize();
var computedHmac = b64encode(computedHash.toString());

postman.setEnvironmentVariable('key', key);
postman.setEnvironmentVariable('time', time);
postman.setEnvironmentVariable('signature', computedHmac);
postman.setEnvironmentVariable('ClientRequestId', ClientRequestId)

function b64encode (input) {
	var swaps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"],
	tb, ib = "",
	output = "",
	i, L;
	for (i=0, L = input.length; i < L; i++) {
		tb = input.charCodeAt(i).toString(2);
		while (tb.length < 8) {
			tb = "0"+tb;
			}
		ib = ib + tb;
		while (ib.length >= 6) {
			output = output + swaps[parseInt(ib.substring(0,6),2)];
			ib = ib.substring(6);
			}
	}
	if (ib.length == 4) {
		tb = ib + "00";
		output += swaps[parseInt(tb,2)] + "=";
	}
	if (ib.length == 2) {
		tb = ib + "0000";
		output += swaps[parseInt(tb,2)] + "==";
	}
	return output;
}
```
 
<!--
type: tab
title: PHP
-->

##### Example of a PHP Request.

```php
$msg = $REQUEST_UUID . $CLIENT_REQUEST_ID . $TIMESTAMP . $JSON_SERIALIZED_PAYLOAD;
$hmac = hash_hmac('sha256', $msg, $API_SECRET);
$messageSignature = base64_encode($hmac);
```
 
<!--
type: tab
title: Java
-->

##### Example of a Java Request.

```java
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.HmacAlgorithms;
import org.apache.commons.codec.digest.HmacUtils;

public class Example {
    public static void main(String[] args) {
        final HmacUtils hmacHelper = new HmacUtils(HmacAlgorithms.HMAC_SHA_256, API_SECRET);
        final Hex hexHelper = new Hex();

        final String msg = REQUEST_UUID + CLIENT_REQUEST_ID + TIMESTAMP + JSON_SERIALIZED_PAYLOAD;
        final byte[] raw = hmacHelper.hmac(msg);
        final byte[] hex = hexHelper.encode(raw);
        final String messageSignature = Base64.encodeBase64String(hex);
    }
}
```

<!-- type: tab-end -->