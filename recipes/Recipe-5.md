# Recipe #1

The PIN Pad or device used to capture the payment source is connected to the terminal or software. The PIN Pad encrypts the customer's payment source and sends the encryption data to the terminal or software. The terminal or software initiates the RESTful API transaction with the encrypted payment source from the 3rd party device.

Commerce Hub supports the following encrypted payment source types: [EMV chip and PIN](?path=docs/In-Person/Encrypted-Payments/EMV.md), [track data (magstripe)](?path=docs/In-Person/Encrypted-Payments/Track.md), NFC/contactless, and [manual entry (EMV fallback)](?path=docs/In-Person/Encrypted-Payments/Manual.md).

---
- [Step 1: Create Keys](#step-1-create-keys)
- [Step 2: Get Payment Details](#step-2-get-payment-details)
- [Step 3: Process Payment](#step-3-process-payment)


---

## Step 1: Create Keys
The benefits of a encyrpted PIN Pad solution are:
- Reduced coding effort for the developer because the encryption handling is already implemented by the third party vendor
- All forms of electronic payment are accepted
- Faster payment improving the customer experience
- Business security by enabling acceptance of chip and signature, and chip and PIN

## Step 2: Get payment details
The benefits of a encyrpted PIN Pad solution are:
- All forms of electronic payment are accepted
- Faster payment improving the customer experience
- Business security by enabling acceptance of chip and signature, and chip and PIN
```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "paymentSource": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
    }
}
```

## Step 3: Process Payment
The benefits of a encyrpted PIN Pad solution are:
- Reduced coding effort for the developer because the encryption handling is already implemented by the third party vendor
- All forms of electronic payment are accepted
- Business security by enabling acceptance of chip and signature, and chip and PIN
<!-- theme: info -->
> Commerce Hub highly recommends testing against our sandbox and end to end environments before using our production environment.


---
## See also
- [API Explorer](./api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [EMV Chip and PIN](?path=docs/In-Person/Encrypted-Payments/EMV.md)
- [Track Data](?path=docs/In-Person/Encrypted-Payments/Track.md)
- [NFC/Contactless](?path=docs/In-Person/Encrypted-Payments/Contactless.md)
- [Manual Entry](?path=docs/In-Person/Encrypted-Payments/Manual.md)


---
