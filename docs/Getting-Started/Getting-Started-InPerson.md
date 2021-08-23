---
tags: [carat, commerce-hub, enterprise, getting-started, in-person, payments, card-not-present, card-present, emv, debit, software, terminal, point-of-sale, pos]
---

# In-Person Payments

<!-- theme: danger -->
> We are enhancing Commerce Hub to include card present transactions support and the documents related to the features will be released soon.


<!-- overview similar to online; integration methods are semi-integrated with a 3rd party terminal that will encrypt the payment source, fully-integration where commerce hub will encrypt the payment source (coming soon).

semi-integrated: where the software obtains the payment information from a 3rd party device (reader i.e. ingenico, etc.), software submits an RESTful API request with the [encrypted block] to Commerce Hub.

fully-integrated: where a EMV terminal (i.e. Verifone) sends the payment data to Commerce Hub to encrypt and process, the response is updated in software.

need to state commerce hub supports the following encrypted payment methods EMV, track data, and manual entry

-->

---

## RESTful APIs

Allows the merchants to build their own UI and manage customer transactions within their own software, or terminal using Commerce Hub's RESTful APIs.

**Begin integration with Commerce Hub's [RESTful APIs](?path=docs/Resources/API-Documents/Use-Our-APIs.md).**

---

---

## See Also


- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](path?=docs/Resources/API-Documents/Payments/Charges.md)
- [Online Payments Integration](?path=docs/Getting-Started/Getting-Started-Online.md)

---
