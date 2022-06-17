---
tags: [Commerce Hub, Card Not Present, Card Present, HMAC, Header, Authentication]
---

# Generate HMAC Authentication

To ensure data integrity, prevent replay attacks, and eliminate stale requests, Authentication is required as part of the [Header](?path=docs/Resources/API-Documents/Use-Our-APIs.md).

#### Details

- **Signature Algorithm:** SHA256 HMAC
- **Signature Encoding:** Base64
- **Signed With:** Developer App Secret Key; provided to merchant when boarded

The message data for the signature is the following items concatenated: `Api-Key`, `Client-Request-Id`, `Timestamp`, `Request-Body`.

<!-- theme: info -->
>The `Client-Request-Id` is a client generated number that is unique for each request. It is used as nonce and validated against all Client-Request-Ids received by Commerce Hub within a predetermined timeframe *(five minutes is the default)* to prevent replay attacks. Commerce Hub uses the timestamp of the request to validate against stale requests. Any request older than the specified duration is rejected.

---

## Code Example

<!--
type: tab
titles: Javascript
-->

##### Generate the authentication required for use with our payments API.

<!-- theme: example -->
> Authorization: OWRiMWNlZjRmMTEyY2M5NmMzNDFkMjhjZDU0NWIyZmYzM2Q2YWMyNDE5Nzg5YmVkYzEyZTJjNmUwNDA5OWMyMQ==

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

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Idempotency](?path=docs/Resources/Guides/Idempotency.md)
- [Use Commerce Hub APIs](?path=docs/Resources/API-Documents/Use-Our-APIs.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)

---
