---
tags: [Postman, Request Header, Request Body, Header, Testing, Environments]
---

# How to use Postman for testing

Commerce Hub provides a number of resources for testing your integration including [Postman Collections](?path=docs/Resources/Resources.md). Postman is a widely-used API platform that allows you to run API requests against our environments. To assist with integration, we provide several Postman Collections with payload examples needed to test the server-side component of your integration.

---

## Commerce Hub environments

Commerce Hub has different [environments](?path=?path=docs/Resources/API-Documents/Use-Our-APIs.md), that allow the consumption of our RESTful APIs for client development, customer acceptance testing, and production.

<!-- theme: warning -->
> Commerce Hub highly recommends testing against our certification *(end-to-end)* environment before using our production environment.

---

## Import Postman Collection

After you have [downloaded the Postman app](https://www.postman.com/downloads/), you will need to [import the collection](https://learning.postman.com/docs/getting-started/importing-and-exporting/importing-and-exporting-overview/).

<!-- theme: info -->
> The app is available in a browser-based version or standalone desktop version.

---

## Pre-request script

Commerce Hub uses an [HMAC authentication](?path=docs/Resources/API-Documents/Authentication-Header.md) which requires a pre-request script to be run to generate the authentication signature. See [writing pre-request scripts](https://learning.postman.com/docs/writing-scripts/pre-request-scripts/) for more details.

<!--
type: tab
titles: Example
-->

You can use the following pre-request script example to test your integration.

```javascript
var key = 'API_KEY';
var secret = 'API_SECRET';

var ClientRequestId = Math.floor((Math.random() * 10000000) + 1);

var time = new Date().getTime();

var requestBody = request.data;
var rawSignature = key + ClientRequestId + time + requestBody;

var computedHash = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secret.toString());
computedHash.update(rawSignature);
computedHash = computedHash.finalize();
var computedHmac = CryptoJS.enc.Base64.stringify(computedHash);

postman.setEnvironmentVariable('key', key);
postman.setEnvironmentVariable('time', time);
postman.setEnvironmentVariable('signature', computedHmac);
postman.setEnvironmentVariable('ClientRequestId', ClientRequestId)

function b64encode(input) {
  var swaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"],

    tb, ib = "",
    output = "",
    i, L;

  for (i = 0, L = input.length; i < L; i++) {
    tb = input.charCodeAt(i).toString(2);
    while (tb.length < 8) {
      tb = "0" + tb;
    }
    ib = ib + tb;
    while (ib.length >= 6) {
      output = output + swaps[parseInt(ib.substring(0, 6), 2)];
      ib = ib.substring(6);
    }
  }
  if (ib.length == 4) {
    tb = ib + "00";
    output += swaps[parseInt(tb, 2)] + "=";
  }
  if (ib.length == 2) {
    tb = ib + "0000";
    output += swaps[parseInt(tb, 2)] + "==";
  }
  return output;
}
```

<!-- type: tab-end -->

---

## Authentication headers

Commerce Hub requires specific [headers](?path=docs/Resources/API-Documents/Authentication-Header.md) to be submitted in the request. When using the above [pre-request script](#pre-request-script) you will need to set the following as the header values.

| Key | Value |
| --- | ----- |
| `Api-Key` | *{{key}}* |
| `Timestamp` | *{{time}}* |
| `Client-Request-Id` | *{{ClientRequestId}}* |
| `Authorization` | *{{signature}}* |
| `Auth-Token-Type` | *HMAC* |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Idempotency](?path=docs/Resources/Guides/Idempotency.md)
- [Postman Collections](?path=docs/Resources/Resources.md)
- [Simulation Scripts](?path=docs/Resources/Guides/Testing/Test-Scripts/Simulator-Scripts.md)
- [Use Commerce Hub APIs](?path=docs/Resources/API-Documents/Use-Our-APIs.md)

---
