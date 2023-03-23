---
tags: [Paymentcard, Payment Sources]
---


# PaymentCard

Financial Institutions such as banks issue the **Payment Card** to the customers. Customers use the card to pay online (card-not-present) or in-person (card-present). The `sourceType` *PaymentCard* is used to submit a [card](?path=docs/Resources/Master-Data/Card-Type.md) transaction to our application.

<!-- theme: danger -->
> Commerce Hub requires all payment cards to be encrypted using [multi-use public key](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md) or [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md). Plain card data is only supported in our sandbox environment for [testing purposes](?path=docs/Resources/Guides/Testing/Test-Scripts/Test-Scripts.md).

<!-- theme: info -->
> PINless Debit transaction process via the credit network unless the merchant account is setup for debit processing. Please contact your account representitive for more information on [debit solutions](?path=docs/Resources/Guides/Debit/Debit.md).

---

### Request Variables

<!-- theme: info -->
> The below requirements are used for unencrypted manual entry card-not-present requests on a website or application. See [encrypted manual entry](?path=docs/In-Person/Encrypted-Payments/Manual.md) for card-present requests from a device or terminal.

<!--
type: tab
titles: source, card, JSON Example
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------ | --- |
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentCard* for card transactions |
| `card` | *object* | N/A |  &#10004; | Contains the payment card details |
| `encryptionData` | *object* | N/A | | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md) |
| `pinBlock` | *object* | N/A | | Contains the [encrypted PIN details](?path=docs/Resources/Master-Data/Pin-Block.md). Used in credit, [debit](?path=docs/Resources/Guides/Debit/PIN_Debit/PIN_Debit.md), gift card or EBT/WIC where a PIN is required. |

<!--
type: tab
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ----------- |---|
| `cardData` | *string* | 15 |  &#10004; | Credit Card Number or Encrypted Data |
| `expirationMonth` | *string* | 2 |  &#10004; | 2-digit card expiration month |
| `expirationYear` | *string* | 4 |  &#10004; | 4-digit card expiration year |

<!-- theme: info -->
> Refer to the [card](?path=docs/Resources/Master-Data/Card.md) object for additional fields.

<!--
type: tab
-->

JSON string format for PaymentCard:

```json
{
	"source": {
		"sourceType": "PaymentCard",
		"card": {
			"cardData": "4005550000000019",
			"expirationMonth": "02",
			"expirationYear": "2035"
		}
	}
}
```

<!-- type: tab-end -->

---

### Charges Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a charge payload request using PaymentCard.

```json
{
   "amount": {
      "total": "12.04",
      "currency": "USD"
   },
   "source": {
      "sourceType": "PaymentCard",
      "card": {
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035"
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

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
   "gatewayResponse": {
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2021-04-16T16:06:05Z",        
         "orderId": "RKOrdID-525133851837",
         "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
         "clientRequestId": "4345791",
         "transactionId": "84356531338"
      }
   },
   "source": {
      "sourceType": "PaymentCard",
      "card": {
         "expirationMonth": "02",
         "expirationYear": "2035",
         "bin": "400555",
         "last4": "0019",
         "scheme": "VISA"
      }
   },
   "paymentReceipt": {
      "approvedAmount": {
         "total": "12.04",
         "currency":"USD"
      },
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
         "localTimestamp": "2021-04-16T16:06:05Z",
         "bankAssociationDetails": {
            "transactionTimestamp": "2021-04-16T16:06:05Z"
         }
      }
   },
   "transactionDetails": {
      "captureFlag": true,
      "merchantInvoiceNumber": "123456789012"
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](./api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Device Encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md)
- [Multi-Use Public Key](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md)
- [Private Label](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md)

---
