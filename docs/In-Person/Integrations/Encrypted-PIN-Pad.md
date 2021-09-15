---
tags: [carat, commerce-hub, enterprise, emv, in-person, card-present, encrypted-payment, pin-pad, manual-entry, track-data]
---

# Encrypted PIN Pad Integration

The PIN Pad or device used to capture the payment source is connected to the terminal or software. The PIN Pad encrypts the customer's payment source and sends the encryption data to the terminal or software. The terminal or software initiates the RESTful API transaction with the encrypted payment source from the 3rd party device. 

Commerce Hub supports the following encrypted payment source types: [EMV chip and PIN](?path=docs/In-Person/Encrypted-Payments/EMV.md), [track data (magstripe)](?path=docs/In-Person/Encrypted-Payments/Track.md), NFC/contactless, and [manual entry (EMV fallback)](?path=docs/In-Person/Encrypted-Payments/Manual.md).

The benefits of encyrpted PIN Pad solution are:
- Reduced coding effort for the developer because the encryption handling is already implemented by the third party vendor
- All forms of electronic payment are accepted
- Faster payment improving the customer experience
- Business security by enabling acceptance of chip and signature, and chip and PIN

**Begin integration with Commerce Hub's [RESTful APIs](?path=docs/Resources/API-Documents/Use-Our-APIs.md).**

---

## See Also

- [API Explorer](./api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [EMV Chip and PIN](?path=docs/In-Person/Encrypted-Payments/EMV.md)
- [Track Data](?path=docs/In-Person/Encrypted-Payments/Track.md)
- [NFC/Contactless](?path=docs/In-Person/Encrypted-Payments/Contactless.md)
- [Manual Entry](?path=docs/In-Person/Encrypted-Payments/Manual.md)

---