# Create a Payment Token

Tokenization is a process of replacing sensitive data with non-sensitive equivalent, referred to as a token, that has no extrinsic or exploitable meaning or value. In the payments industry, it is used to safeguard a card's PAN by replacing it with a unique string of numbers. A Payment Token request creates a single-use or multi-use token that represents card details.

Merchant can either submit a request to tokenize a payment card as part of a payment, or can tokenize the card separately. Tokenising a payment card as part of a payment is covered as part of the /payments guide documentation in the Payments section.

- **Single Use Token** :
- **Multi Use Token** : 

---

## Minimum Requirements

|Variable | Data Type| Maximum Length | Description/Values |
|---------|----------|----------------|---------|
| | | | |
<!-- theme: success -->
>##### Endpoints
>**POST** `/payments-vas/v1/tokens`
>- Use this endpoint to submit a Payment Token request.