---
tags: [carat, commerce-hub, card-not-present, card-present, hash, message-signature]
---

# How to Generate the Authentication Header

## Overview

To ensure data integrity, prevent replay attacks, and eliminate stale requests, Authentication is required as part of the [Header](Use-Our-APIs.md).

## Details

- **Signature Algorithm** : SHA256 HMAC
- **Signature Encoding** : Base64
- **Signed With** : Developer App Secret Key; provided to merchant when boarded

The message data for the signature is the following items concatenated: `Api-Key`, `Client-Request-Id`, `Timestamp`, `Payload`.

<!-- theme: info -->
>The `Client-Request-Id` is a randomly generated number that is unique for each request. It is used as nonce and validated against all Client-Request-Ids received by Commerce Hub within a predetermined timeframe *(five minutes is the default)* to prevent replay attacks. Commerce Hub uses the timestamp of the request to validate against stale requests. Any request older than the specified duration is rejected.

## Code Examples

<!--
type: tab
title: Javascript
-->

##### Example of a Javascript Request.

```javascript
let msg = API_KEY + CLIENT_REQUEST_ID + TIMESTAMP + JSON.stringify(PAYLOAD);

const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, API_SECRET);
hmac.update(msg);
const messageSignature = base64.encode(hmac.finalize().toString());
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