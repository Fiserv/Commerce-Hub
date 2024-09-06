---
tags: [Additional Data, API Reference, Master Data]
---

# Additional Data Common

Additional data common is used for specific business requirements.

<!--
type: tab
titles: additionalDataCommon, JSON Example
-->

The below table identifies the parameters in the `additionalDataCommon` object.

| Variable | Type | Max Length | Description |
| -------- | -- | ------------ | ------------------ |
| `billPaymentType` | *string* | 12 | Indicates the [type of bill payment](#bill-payment-type). Required for Charges, Cancel and Capture transactions where a bill payment is being processed. |
| `additionalData` | *object* | N/A | Used to identify specific data based on transaction requirements. |
| `directedRouting` | *object* | N/A | Required in [Directed Routing](?path=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md) transactions. |
| `privateLabel` | *object* | N/A | Additional attributes used to process [private label payment cards (PLCC)](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md). |
| `customFields` | *array* | N/A | Used to submit merchant custom fields used in terminal processing such as Key Value Pair. |

<!--
type: tab
-->

JSON string format for `additionalDataCommon`:

```json
{
  "additionalDataCommon": {
    "additionalData": {
      "baiFlag": "PERSON_TO_PERSON",
      "ecomURL": "https://www.somedomain.com",
      "requestedTestResponseCode": "NO_CONNECTION_AVAILABLE",
      "emvParameterDownloadIndicator": true
    },
    "directedRouting": {
      "network": "VISA",
      "cardFunction": "CREDIT",
      "processor": "fiserv"
    },
    "billPaymentType": "RECURRING",
    "privateLabel": {
      "specialFinanceIndicator": "24/0",
      "creditPlanNumber": "00100",
      "minimumSpendExemptIndicator": "EXEMPT"
    },
    "customFields": {
      "keyValuePair": [
        {
          "key": "customFieldExample",
          "value": "custom value example"
        }
      ]
    }
  }
}
```

<!-- type: tab-end -->

---

#### Bill Payment Type

<!-- theme: warning -->
> Bill Payment Indicator is required for Charges, Cancel and Capture transactions where a bill payment is being processed.

The below table identifies the valid values of the `billPaymentType`.

| Value | Description |
| ----- | ----- |
| *SINGLE* | Single charge not for recurring services or installment plan. |
| *DEFERRED* | A charge for an order with a delayed payment for a specified amount of time. |
| *INSTALLMENT* | Single purchase where the cardholder is billed (charged) in installments. |
| *RECURRING* | Agreement where charges will occur on a periodic basis (e.g. subscriptions). |

---

## Additional Data

Additional Data identifies various elements based on the specific transaction type.

<!--
type: tab
titles: additionalData, JSON Example
-->

| Variable | Type | Max Length | Description/Values |
| ----- | ----- | ----- | ----- |
| `ecomURL` | *string* | 512 | Contains the URL of the site performing the Ecommerce transaction. |

<!---
| `requestedTestResponseCode` | *string* | 28 | Value used to test/replicate a [transaction error](?path=docs/Resources/Guides/Response-Codes/Error-Code.md).|
| `baiFlag` | *string* | 31 | Visa required [Business Application Identifier](#business-application-identifier) (BAI) used to identify the intended use of a [disbursement](?path=docs/Resources/Guides/Disbursement.md). |
| `emvParameterDownloadIndicator` | *boolean* |  N/A  | Indicator if EMV Parameter has to be downloaded, sent as part of Auth/Sale Response.|
-->

---

<!--
type: tab
-->

JSON string format for `additionalData`:

```json
{
  "additionalData": {
    "ecomURL": "https://www.somedomain.com"
  }
}
```

<!-- type: tab-end -->

---

<!---
#### Business Application Identifier
The BAI determines the data carried in the message, the limits and economics that may apply to the transaction, and may be used by the sending and/or receiving issuer to make an authorization decision. Below table identifies the valid values of `baiFlag`.

| Value | Description |
| ----- | ----- |
| *PERSON_TO_PERSON* | Person to person initiated. |
| *PERSON_TO_PERSON_BANK_INITIATED* | Person to person bank initiated. |
| *BUSINESS_TO_BUSINESS* | Business to business initiated. |
| *DIGITAL_WALLET* | Digital Wallet transfer. |
| *ACCOUNT_TO_ACCOUNT* | Account to account transfer. |
| *TOP_OFF* | Account top off or reload. |
| *ACCOUNT_VERIFICATION* | [Account verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) or $0.00 auth. |
| *FUNDS_TRANSFER* | Funds Transfer. |
| *DISBURSEMENT* | Funds disbursement or payout. |
| *GAMBLING_PAYOUT* | Gambling payout non-online. |
| *GAMBLING_PAYOUT_ONLINE* | Online gambling payout. |
-->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)

---
