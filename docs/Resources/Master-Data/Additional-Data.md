---
tags: [Additional Data, API Reference, Master Data]
---

# Additional Data Common

The `additionalDataCommon` object is used to pass additional information required for processing specific business requirements to Commerce Hub. This object ensures that all necessary data is included for accurate and efficient processing within the API.

<!--
type: tab
titles: additionalDataCommon, JSON Example
-->

The below table identifies the parameters in the `additionalDataCommon` object.

| Variable | Type | Max Length | Description |
| -------- | -- | ------------ | ------------------ |
| `billPaymentType` | *string* | 12 | Indicates the type of [bill payment](#bill-payment-types). Required for Charges, Cancel and Capture transactions where a bill payment is being processed. |
| `paymentAmountType` | *string* | 20 | An identifier used to indicate the transaction payment amount type for [Stored Credential requests](?path=docs/Resources/Guides/Stored-Credentials.md) |
| `riskAssessmentEventType` | *string* | 40 | Identifies the risk assessment event type for [Fraud Mitigation API requests](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md). |
| `additionalData` | *object* | N/A | Used to identify specific data based on transaction requirements. |
| `customFields` | *array* | N/A | Used to submit merchant custom fields used in terminal processing such as Key Value Pair. |
| `installments` | *object* | N/A | Used in [installment bill payments](?path=docs/Resources/Guides/Bill-Payments/Installment-Payment.md) |
| `recurring` | *object* | N/A | Used in [recurring bill payments](?path=docs/Resources/Guides/Bill-Payments/Recurring-Payment.md) |
| `deferredPayments` | *object* | N/A | Used in deferred bill payments |
| `directedRouting` | *object* | N/A | Required in [Directed Routing](?path=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md) transactions. |
| `subMerchant` | *object* | N/A | Required in transaction initiated by a Payment Facilitator to identify the sub-merchant information. |
| `privateLabel` | *object* | N/A | Additional attributes used to process [private label payment cards (PLCC)](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md). |

---

<!--
type: tab
-->

JSON string format for `additionalDataCommon`:

```json
{
  "additionalDataCommon": {
    "billPaymentType": "RECURRING",
    "riskAssessmentEventType": "AUTHORIZATION",
    "additionalData": {
      "baiFlag": "PERSON_TO_PERSON",
      "ecomURL": "https://www.somedomain.com",
      "requestedTestResponseCode": "NO_CONNECTION_AVAILABLE",
      "emvParameterDownloadIndicator": true
    },
    "customFields": {
      "keyValuePair": {
        "key": "customFieldExample",
        "value": "custom value example"
      }
    },
    "directedRouting": {
      "network": "VISA",
      "cardFunction": "CREDIT",
      "processor": "fiserv"
    },
    "subMerchant": {
      "id": "9999",
      "name": "Some Business",
      "street": "123 Main Street",
      "city": "Atlanta",
      "state": "GA",
      "postalCode": "30303-001",
      "country": "US",
      "taxId": "123456789"
    },
    "installments": {
      "installmentCount": 12
    },
    "recurringPayments": {
      "frequency": "MONTHLY",
      "expiry": "05-05-2025"
    },
    "privateLabel": {
      "specialFinanceIndicator": "24/0",
      "creditPlanNumber": "00100",
      "minimumSpendExemptIndicator": "EXEMPT"
    }
  }
}
```

<!-- type: tab-end -->

## Bill payment types

<!-- theme: warning -->
> Bill Payment Indicator is required for all transactions where a bill payment is being processed.

The below table identifies the valid values of the `billPaymentType`.

| Value | Description |
| ----- | ----- |
| *SINGLE* | Single charge not for recurring services or installment plan. |
| *DEFERRED* | A charge for an order with a delayed payment for a specified amount of time. |
| *INSTALLMENT* | Single purchase where the cardholder is billed (charged) in installments. |
| *RECURRING* | Agreement where charges will occur on a periodic basis (e.g. subscriptions). |

---

## Additional Data

The `additionalData` object identifies various elements based on the specific transaction type.

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

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Directed Routing](?path=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md)
- [Fraud Mitigation API requests](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Stored Credential](?path=docs/Resources/Guides/Stored-Credentials.md)

---
