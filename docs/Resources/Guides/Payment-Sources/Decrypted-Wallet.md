---
tags: [Decrypted Wallet, Apple Pay, Google Pay, Payment Sources, Online, Digital, Mobile, Card Not Present]
---

# Using DecryptedWallet as a payment source

*DecryptedWallet* is utilized by merchants to securely transmit transaction data to Commerce Hub. By decrypting the digital wallet, a merchant has the ability to view the card data before submitting the transaction, giving them full control over the customer’s payment journey.

 When merchants receive encrypted payment data from [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md) and [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md), they use their own certificates to decrypt this data before sending it to Commerce Hub. It is recommended that a merchant uses their own certificate to encrypt the data before sending it to Commerce Hub.

<!-- theme: danger -->
> We are enhancing Commerce Hub to support [MUPK encrypted *DecryptedWallet*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md). Documentation related to this feature will be released soon.

**Digital wallet account types:**

- **Funding Primary Account Number *(FPAN)*:** The physical account number on the front of a credit or debit card.
- **Device Primary Account Number *(DPAN)*:** A device-specific token from the wallet provider that is associated with the FPAN.

<!--
type: tab
titles: source
-->

The below table identifies the parameters in the `source` object.

| Variable | Type| Max Length | Required | Description |
|---------|----------|-------|---------|---------|
| `sourceType` | *string* | 15 | &#10004; | Value *DecryptedWallet* is used for Decrypted Wallet requests. |
| `cavv` | *string* | 40 | &#10004; | Cardholder Authentication Verification Value provided by the Wallet Provider |
| `xid` | *string* | 40 | | The unique identifier for the transaction provided by the Wallet Provider |
| `walletType` | *string* | 256 | &#10004; | Identifies the wallet as APPLE_PAY or GOOGLE_PAY |
| `card` | *object* | N/A | &#10004; | Contains the payment [card details](?path=docs/Resources/Master-Data/Card.md) |

<!-- type: tab-end -->

---

## Submit an DecryptedWallet request

<!--
type: tab
titles: Request, Response
-->

The example below contains the parameters for a successful [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) using a *DecryptedWallet*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "DecryptedWallet",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035"
    },
    "cavv": "01ade6ae340005c681c3a1890418b53000020000",
    "xid": "13456789",
    "walletType": "APPLE_PAY"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

<!--
type: tab
-->

Example of a Charges API *(201: Created)* response.

<!-- theme: info -->
> See [response handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "source": {
    "sourceType": "DecryptedWallet",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "02",
      "expirationYear": "2035"
    },
    "cavv": "01ade6ae340005c681c3a1890418b53000020000",
    "xid": "13456789",
    "wallet": "APPLE_PAY"
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
    "merchantName": "Merchant Name",
    "merchantAddress": "123 Peach Ave",
    "merchantCity": "Atlanta",
    "merchantStateOrProvince": "GA",
    "merchantPostalCode": "12345",
    "merchantCountry": "US",
    "merchantURL": "https://www.somedomain.com",
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "responseCode": "000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z"
      }
    }
  }
}
```
<!-- type: tab-end -->

---

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
