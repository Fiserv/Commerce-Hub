# Additional Data

## Overview

Additional Data Common features common objects used for all request types.

#### Component: additionalDataCommon
| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `additionalData` | *array* | | Used to identify specific data based on transaction requirements. |
| `amountComponents` | *array* | | Used in transactions where additional [amount](?path=docs/Resources/Master-Data/Amount-Components.md) fields such as tax, surcharge, fees are required as part of the request. |
| `directedRouting` | *array* | | Required in Directed Routing transactions. |
| `subMerchant` | *array* | | Required in transaction initiated by a [Payment Facilitator](?path=docs/Resources/Guides/Industry-Verticals/Payment-Faciliator.md) to identify the sub-merchant information. |
| `billPaymentIndicator` | *string* | 12 | Indicates the type of [bill payment](#bill-payment-indicator). | 
| `installments` | *array* | | Used in [installment bill payments](?path=docs/Resources/Guides/Bill-Payments/Installment-Payment.md). |
| `deferredPayments` | *array* | | Used in [defferred bill payments](?path=docs/Resources/Guides/Bill-Payments/Deferred-Payment.md). |
| `recurringPayments` | *array* | | Used in [recurring bill payments](?path=docs/Resources/Guides/Bill-Payments/Recurring-Payment.md). |
| `privateLabel` | *array* | | Used to process [Private Label](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md) payment cards. |
| `customfields` | *array* | | Used to submit merchant custom fields used in terminal processing such as Key Value Pair. |

---

### Bill Payment Indicator

#### Object: billPaymentIndicator

| Value | Description |
| ----- | ----- |
| SINGLE | Single charge not for recurring services or installment plan. |
| DEFERRED | A charge for an order with a delayed payment for a specified amount of time. |
| INSTALLMENT | Single purchase where the cardholder is billed (charged) in installments. |
| RECURRING | Agreement where charges will occur on a periodic basis (e.g. subscriptions). |

---

## Additional Data

Additional Data identifies various elments based on the specific transaction type.

#### Subcomponent: additionalData

| Variable | Type | Length | Description/Values |
| ----- | ----- | ----- | ----- |
| `baiFlag` | *string* | 31 | Visa required [Business Application Identifier](#business-application-identifier). This identifies the intended use of a push payment. It determines the data carried in the message, the limits and economics that may apply to the transaction, and may be used by the sending and/or receiving issuer to make an authorization decision. |
| `billPayment` | *boolean* | | Identifies a [bill payment](docs/Resources/Guides/Bill-Payments/Bill-Payments.md) transaction. |
| `ecomURL` | *string* | 512 | Contains the URL of the site performing the Ecommerce transaction. |
| `goodsSoldCode` | *string* | 16 | Indicates a specific type of goods. It is used to help identify potentially fraudulent sales in a card present environment. |
| `terminalLaneNumber` | *string* | 16 | Terminal Lane Number. |
| `requestedTestErrorResponseCode` | *string* | 28 | Value used to test/replicate a transaction Error. **Valid Values:** NO_CONNECTION_AVAILABLE, IOEXCEPTION_RECEIVED.|
| `emvParameterDownloadIndicator` | *string* | | Indicator if EMV Parameter has to be downloaded, sent as part of Auth/Sale Response.|

---

### Business Application Identifier

#### Object: baiFlag
| Value | Description |
| ----- | ----- |
| PERSON_TO_PERSON | Person to person initiated. |
| PERSON_TO_PERSON_BANK_INITIATED | Person to person bank initiated. |
| BUSINESS_TO_BUSINESS | Business to business initiated. |
| DIGITAL_WALLET | Digital Wallet transfer. |
| ACCOUNT_TO_ACCOUNT | Account to account transfer. |
| TOP_OFF | Account top off or reload. |
| ACCOUNT_VERIFICATION | [Account Verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) (also known as $0.00 auth). |
| FUNDS_TRANSFER | Funds Transfer. |
| DISBURSEMENT | Funds disbursement or payout. |
| GAMBLING_PAYOUT | Gambling payout non-online. |
| GAMBLING_PAYOUT_ONLINE | Online gambling payout. |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charges](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Refund](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Credit](?path=docs/Resources/API-Documents/Payments/Credit.md)
- [Forced Post](?path=docs/Resources/API-Documents/Payments/Forced.md)

---
