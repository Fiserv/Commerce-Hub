---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, Authentication]
---

# Authentication Request

Submit a request after a successful response which identifies the card and device data was captured in Commerce Hub. The request will use the payment sourceType of PaymentSession/PaymentCard/PaymentToken and the sessionId from the credentials request. 

<!-- theme: warning -->
> If a successful response is not received, best practice is to still submit the transaction. If an error occurs, the iFrame will need to be re-displayed so the customer can re-submit their payment information.

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
| -------- | :--: | :------------: | ------------------ |
| `firstName` | *string* | 256 | Billing first name | 
| `lastName` | *string* | 256 | Billing last name | 
| `address` | *object* | N/A | Address subcomponent objects | 
| `phone` | *object* | N/A | Phone subcomponets objects | 


