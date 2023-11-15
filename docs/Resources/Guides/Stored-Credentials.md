---
tags: [Stored Credentials, Tokenization, Card Not Present]
---

# Stored Credentials

Stored Credentials also known as Credentials on File or Card on File, allows customer to authorize the storage of their payment source details for future transactionstas a Cardholder Initiated Transaction (CIT).

The merchant can initiate a subsequent transactions on behalf of customers (e.g. for subscription payments), using the [Payment Token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) created from the customer's details as a Merchant Initiated Transaction (MIT).

---

## Request Variables

The following variables are used in the initial `PaymentToken` request and subsequent transactions.

<!-- theme: warning -->
> The `bankNetDate` for Mastercard or `networkOriginalAmount` for Discover should be passed for the respective [card network](?path=docs/Resources/Master-Data/Network-Details.md#card-network) in the `transactionInteraction` [object](?path=docs/Resources/Master-Data/Transaction-Interaction.md).

<!--
type: tab
titles: storedCredentials, additionalDataCommon
-->

The below table identifies the parameters in the `storedCredentials` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ---------| --------- |
| `initiator` | *string* | 11 | &#10004; | Indicates whether it is a merchant-initiated or explicitly consented to by card holder. **Valid Values:** *MERCHANT*, *CARD_HOLDER* |
| `scheduled` | *boolean* | N/A | &#10004; | Indicator if this is a [scheduled transaction](#scheduled-transaction). |
| `schemeReferencedTransactionId` | *string* | 256 | &#10004;  | The transaction ID received from the initial transaction. May be required if sequence is subsequent. |
| `sequence` | *string* | 10 | &#10004; | Indicates if the transaction is *FIRST* or *SUBSEQUENT* |
| `schemeOriginalAmount` | *number* | 18,3 | | Original transaction amount, required for Discover transactions. |

<!--
type: tab
-->

The below table identifies the parameters in the `additionalDataCommon` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------------ | --------- |
| `billPaymentType` | *string* | 11 | Indicates the [type](docs?path=docs/Resources/Master-Data/Additional-Data.md#bill-payment-type) of bill payment. |
| `paymentAmountType` | *string* | 20 | An identifier used to indicate if the *RECURRING* `billPaymentType` is *FIXED* or *VARIABLE*, required for Mastercard transactions. |

<!-- type: tab-end -->

---

### Bill Payment Type

Stored credentials can be used to submit merchant managed scheduled transactions by submitting `billPaymentType` in the `additionalDataCommon` [object](?path=docs/Resources/Master-Data/Additional-Data.md).

- **Recurring:** A transaction in a series of transaction that uses stored credentials and are processed at fixed, regular intervals *(not to exceed one year between transaction)*, representing a cardholder agreement for the merchant to initiate future transaction for the purchase of goods or services provided at regular intervals.
- **Installment:** A transaction in a series of transactions that uses stored credentials and represents a cardholder agreement for the merchant to initiate one or more future transactions over a period for a single purchase of goods or services.
- **Single:** A transaction using stored credentials for a fixed or variable amount that does not occur on a scheduled or regularly occurring transaction date, where the cardholder has provided consent for the merchant to initiate one or more future transactions, e.g. account auto-top.

### Scheduled Transaction

Stored credentials can be used to submit merchant managed scheduled transactions by submitting `billPaymentType` in the `additionalDataCommon` [object](?path=docs/Resources/Master-Data/Additional-Data.md).

### Unscheduled Transaction

Stored credentials can be used to submit merchant managed scheduled transactions by submitting `billPaymentType` in the `additionalDataCommon` [object](?path=docs/Resources/Master-Data/Additional-Data.md).

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a Mastercard charge payload request using `storedCredentials`.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentToken",
    "tokenData": "1234567890120019",
    "tokenSource": "TRANSARMOR",
    "card": {
      "expirationMonth": "03",
      "expirationYear": "2035"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "storedCredentials": {
    "scheduled": true,
    "initiator": "MERCHANT",
    "sequence": "SUBSEQUENT",
    "schemeReferenceTransactionId": "54231235467"
  },
  "additionalDataCommon": {
    "billPaymentType": "RECURRING",
    "paymentAmountType": "FIXED"
  },
  "merchantDetails": {
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}
```

<!--
type: tab
-->

Example of a charge (201: Created) response

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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
    "sourceType": "PaymentToken",
    "tokenData": "1234567890120019",
    "tokenSource": "TRANSARMOR",
    "card": {
      "expirationMonth": "03",
      "expirationYear": "2035"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
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
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z"
      }
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "storedCredentials": {
    "scheduled": true,
    "initiator": "MERCHANT",
    "sequence": "SUBSEQUENT",
    "schemeReferenceTransactionId": "54231235467"
  },
  "additionalDataCommon": {
    "billPaymentType": "RECURRING",
    "paymentAmountType": "FIXED"
  },
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](./api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)
- [Tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)

<!---
- [Incremental Auth](?path=docs/Resources/Guides/Authorizations/Incremental-Auth.md)
-->

---
