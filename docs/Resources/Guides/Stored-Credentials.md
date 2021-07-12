---
tags: [carat, commerce-hub, enterprise, stored-credentials, vault]
---

# Stored Credentials

Stored Credentials also known as Credentials on File, allows the merchant to initiate a transactions on behalf of customers (e.g. for subscription payments), using the [Payment Token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) created from the customer's card details.

---

## Request Variables

The following variables are used in the initial `PaymentToken` request and subsequent transactions.

<!--
type: tab
title: transactionDetails
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `authorizationTypeIndicator` | *string* | 11 | &#10004; | Type of authorization requested. **Valid Values:** INITIAL, REAUTH, DEFERRED, INCREMENTAL. |

<!--
type: tab
title: storedCredentials
-->

The below table identifies the parameters in the `storedCredentials` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `initiator` | *string* | 11 | &#10004; | Indicates whether it is a merchant-initiated or explicitly consented to by card holder. **Valid Values:** *MERCHANT*, *CARD_HOLDER* |
| `scheduled` | *boolean* | N/A | &#10004; | Indicator if this is a scheduled transaction. |
| `schemeReferencedTransactionId` | *string* | 256 | | The transaction ID received from the initial transaction. May be required if sequence is subsequent. |
| `sequence` | *string* | 10 | &#10004; | Indicates if the transaction is first or subsequent. **Valid Values:** *FIRST*, *SUBSEQUENT* |
| `networkOriginalAmount` | *number* | 18,3 | | Original transaction amount, required for Discover Card on File transactions. |
| `originationDate` | *string* | 10 | | Date the customer account was created with merchant in YYYY-MM-DD format. |
| `accountAge` | *string* | | | Indicator on the age of customer account with merchant. **Valid Values:** *GUEST*, *NEW_ACCOUNT*, *LESS_THAN_30_DAYS*, *30_60_DAYS*, *60_90_DAYS*, *OVER_90_DAYS* |
| `count` | *integer* | 2 | | Number of cards on file with this account |
| `lastUpdated` | *string* | | | Age of most recent card add/modify. **Valid Values:**  *NEVER*, *NOW*, *LESS_THAN_30_DAYS*, *30_60_DAYS*, *OVER_60_DAYS* |
| `age`  | *string* | | | Indicator on the age of this payment card on file with merchant. **Valid Values:** *GUEST*, *NEW_ACCOUNT*, *LESS_THAN_30_DAYS*, *30_60_DAYS*, *60_90_DAYS*, *OVER_90_DAYS* |
| `attempts`  | *string* | 2 | | Number of attempts to add a payment card in prior 24hrs |
| `accountPasswordReset` | *string* | | | Indicator of the last time the account password was reset. **Valid Values:** *NEVER*, *NOW*, *LESS_THAN_30_DAYS*, *30_60_DAYS*, *60_90_DAYS*, *OVER_90_DAYS*|
| `sixMonthTransactionCount` | *integer* | 2 | | Number of transaction on this account in prior 6 months |
| `twentyFourHourTransactionCount` | *integer* | 2 | | Number of transaction on this account in prior 24 hours |
| `retryAttempts` | *integer* | 2 | | Number of retry attempt if the initial transaction was unsuccessful |

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request using `storedCredentials`.

```json
{
   "amount":{
      "total":"12.04",
      "currency":"USD"
   },
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "cardData":"4005550000000019",
         "nameOnCard":"Jane Smith",
         "expirationMonth":"02",
         "expirationYear":"2035",
         "securityCode":"123"
      }
   },
   "transactionDetails":{
      "captureFlag":true,
      "createToken":true,
      "tokenProvider":"RSA",
      "authorizationTypeIndicator":"INITIAL"
   },
   "storedCredentials":{
      "scheduled":true,
      "initiator":"CARD_HOLDER",
      "sequence":"FIRST",
      "schemeReferenceTransactionId":"54231235467",
   }
}
```

<!--
type: tab
title: Response
-->

##### Example of a charge (201: Created) response.

```json
{
   "gatewayResponse":{
      "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType":"CHARGES",
      "transactionState":"AUTHORIZED",
      "transactionOrigin":"ECOM",
      "transactionProcessingDetails":{
         "transactionTime":"2016-04-16T16:06:05Z",
         "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId":"838916029301"
      }
   },
   "source":{
      "sourceType":"PaymentCard",
      "tokenData":"1234123412340019",
      "tokenSource":"RSA",
      "card":{
         "nameOnCard": "Jane Smith",
         "expirationMonth":"05",
         "expirationYear":"2025",
         "bin":"400555",
         "last4":"0019"
      }
   },
   "transactionDetails":{
      "captureFlag":true,
      "createToken":true,
      "tokenProvider":"RSA",
      "authorizationTypeIndicator":"INITIAL"
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total":12.04,
         "currency":"USD"
      },
      "processorResponseDetails":{
         "approvalStatus":"APPROVED",
         "approvalCode":"OK3483",
         "authenticationResponseCode":"string",
         "referenceNumber":"845366457890-TODO",
         "schemeTransactionId":"019078743804756",
         "feeProgramIndicator":"123",
         "processor":"fiserv",
         "responseCode":"00000",
         "responseMessage":"APPROVAL",
         "hostResponseCode":"00",
         "hostResponseMessage":"APPROVAL",
         "localTimestamp":"2016-04-16T16:06:05Z",
         "bankAssociationDetails":{
            "associationResponseCode":"000",
            "transactionTimestamp":"2016-04-16T16:06:05Z",
            "avsSecurityCodeResponse":{
               "securityCodeMatch":"MATCH",
               "association":{
                  "securityCodeResponse":"M"
               }
            }
         }
      }
   },
   "storedCredentials":{
      "scheduled":true,
      "initiator":"CARD_HOLDER",
      "sequence":"FIRST",
      "schemeReferenceTransactionId":"54231235467",
   }
}
```

<!-- type: tab-end -->


---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Incremental Auth](?path=docs/Resources/Guides/Authorizations/Incremental-Auth.md)
- [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)
- [Recurring Payment](?path=docs/Resources/Guides/Bill-Payments/Recurring-Installments.md)
- [Tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)
---
