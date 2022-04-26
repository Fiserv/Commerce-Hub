---

tags: [carat, commerce-hub, enterprise, online, card-not-present, payeezy]

---

# Tokenization

<!-- theme: danger -->
>  The following documentation is for **Payeezy** migration clients only. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.


<!--type: tab
titles: API, Configuration, Virtual Terminal, Reporting
-->

If the Tokenization Payment Type is enabled for the transacting MID in ClientLine Enterprise (CLX), Commerce Hub will tokenize the card and return the paymentTokens object in the response:

```json

"paymentTokens": [
  {
   "tokenData":"0123456789987654",
   "tokenSource": "TRANSARMOR",
   "tokenResponseCode": "000",
   "tokenResponseDescription": "SUCCESS",
   }
 ]
```
The merchant can override this behavior by including the createToken element in the request with a value of false.

If the transacting MID is not configured for the Tokenization Payment Type and a request contians the creatToken element with a value of true, Commerce Hub will respond with a 249 error code:

```json

"paymentTokens": [
  {
   "tokenData":"0123456789987654",
   "tokenSource": "TRANSARMOR",
   "tokenResponseCode": "249",
   "tokenResponseDescription": "Not boarded for Tokenization",
   }
 ]
```

In Payeezy, tokenization of a card, without payment, would be completed via the zero dollar pre-authorization functionality.  In Commerce Hub, merchnats can use the /payment-vas/v1/tokens endpoint to tokenize a card without payment. See [Tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) for additional information.

<!--
type: tab
-->

In Payeezy, a merchant would enable tokenization for each MID by entering a TA Token number in the Details tab for that MID.  In Commerce HUb the merchant enbales tokenization as a Payment Type in ClientLine Enterprise (CLX).

The merchant has the ability to enable this payment type for one, many or all MIDs.

<!--
type: tab
-->

Not applicable to tokens.

<!--
type: tab
-->

Limited reporting available in ClientLine Enterprise (CLX).

<!-- type: tab-end -->

---

## See Also

- [Tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Commerce Hub Overview](?path=docs/Getting-Started/Getting-Started-General.md)
- [Commerce Hub Administration / ClientLine Enterprise Training](https://fiserv.cloudguides.com/en-us/guides/ClientLine%20Enterprise%20from%20Fiserv)



---
