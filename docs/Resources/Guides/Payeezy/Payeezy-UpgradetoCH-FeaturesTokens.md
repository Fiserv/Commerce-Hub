---

tags: [carat, commerce-hub, enterprise, tokens-request, payment-token, tokenization,card-not-present, payeezy]

---

# Tokenization

<!-- theme: danger -->
>  The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.


<!--type: tab
titles: API, Configuration, Virtual Terminal, Reporting
-->

**Happy Path Token Usage**

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

In Payeezy, tokenization of a card, without payment, would be completed via the zero dollar pre-authorization functionality.  In Commerce Hub, merchants can use the /payment-vas/v1/tokens endpoint to tokenize a card without payment. See [Tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) for additional information.

---

**Non-happy Path Token Usage**

The merchant can prevent the token from being created and override the automated behavior by including the `createToken` element in the request with a value of false.

If the transacting MID is not configured for the Tokenization Payment Type and a request contains the `createToken` element with a value of true, Commerce Hub will respond with a 249 error code:

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

<!--
type: tab
-->

In Payeezy Real-time Payment Manager (RPM), a merchant would enable tokenization for each MID by entering a TA Token number in the Details tab for that MID.  In ClientLine Enterpricse (CLX), the merchant enables tokenization as a Payment Type.  The merchant has the ability to enable this payment type for one, many or all MIDs.

<!--
type: tab
-->

In ClientLine Enterprise (CLX), transactions can not be initiated using a token through the Virtual Terminal, but a secondary tokenized transaction (Completion/Capture, Void and Refund) can be completed from the search screen.

<!--
type: tab
-->

Token generation can be seen as a 'Generate Token' transaction type in the Search report in ClientLine Enterprise (CLX).

Token number can be viewed in the transaction detail of the Search report in CLX.

<!-- type: tab-end -->

---

## See Also

- [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md)
- [Tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Commerce Hub Overview](?path=docs/Getting-Started/Getting-Started-General.md)
- [Commerce Hub Administration / ClientLine Enterprise Training](https://fiserv.cloudguides.com/en-us/guides/ClientLine%20Enterprise%20from%20Fiserv)



---
