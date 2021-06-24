---
tags: [carat, commerce-hub, enterprise, master-data, additional-transaction-data]
---


# Additional Transaction Data

Additional transaction data is used for specific condition like installments, deferred payments, 3D-secure transactions etc. These data fields can be included as per the business requirements.

---

## Additional Data Common

The `additionalDataCommon` object contains common data elements used in requests based on business requirements.

<!--
type: tab
title: additionalDataCommon
-->

The below table identifies the required parameters in the `additionalDataCommon` object.

| Variable | Type | Length | Description |
| -------- | -- | ------------ | ------------------ |
| `additionalData` | *object* | | Used to identify specific data based on transaction requirements. |
| `amountComponents` | *object* | | Used in transactions where additional [amount](?path=docs/Resources/Master-Data/Amount-Components.md) fields such as tax, surcharge, fees are required as part of the request. |
| `directedRouting` | *object* | | Required in Directed Routing transactions. |
| `subMerchant` | *object* | | Required in transaction initiated by a [Payment Facilitator](?path=docs/Resources/Guides/Industry-Verticals/Payment-Faciliator.md) to identify the sub-merchant information. |
| `billPaymentIndicator` | *string* | 12 | Indicates the type of [bill payment](#bill-payment-indicator). | 
| `installments` | *object* | | Used in [installment bill payments](?path=docs/Resources/Guides/Bill-Payments/Installment-Payment.md) |
| `deferredPayments` | *object* | | Used in [defferred bill payments](?path=docs/Resources/Guides/Bill-Payments/Deferred-Payment.md) |
| `recurringPayments` | *object* | | Used in [recurring bill payments](?path=docs/Resources/Guides/Bill-Payments/Recurring-Payment.md) |
| `privateLabel` | *object* | | Used to process [Private Label](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md) payment cards. |
| `customFields` | *array* | | Used to submit merchant custom fields used in terminal processing such as Key Value Pair. |

<!--
type: tab
title: JSON Example
-->

JSON string format for `additionalDataCommon`:

```json
{
   "additionalDataCommon":{
      "additionalData":{
         "baiFlag": "PERSON_TO_PERSON",
         "networkTransactionReference":"123456788",
         "billPayment":false,
         "ecomURL":"https://www.somedomain.com",
         "goodsSoldCode":"GIFT_CARD",
         "terminalLaneNumber":"001",
         "requestedTestErrorResponseCode":"NO_CONNECTION_AVAILABLE",
         "emvParameterDownloadIndicator":true
      },
      "amountComponents":{
         "subTotal": 12.00,
         "convenienceFee": 1.00,
         "ITBISTaxAmount": 0.50,
         "localTax": 1.00,
         "shippingAmount": 5.00,
         "surcharge": 1.20,
         "vatAmount": 1.00
      },
      "directedRouting":{
         "network": "VISA",
         "cardFunction": "CREDIT",
         "processor": "fiserv"
      },
      "subMerchant":{
         "id": "9999",
         "name": "Some Business",
         "street": "123 Main Street",
         "city": "Atlanta",
         "state": "GA",
         "postalCode": "30303-001",
         "country": "US",
         "taxId": "123456789"
      },
      "billPaymentIndicator": "RECURRING",
      "installments":{
         "installmentAmount": 20.00,
         "lastInstallmentAmount": 20.00,
         "interestRate": 10,
         "paymentFirstDay": 10.00,
         "invoiceId": "534242",
         "invoiceDate": "05-01-2020",
         "deliveryDate": "05-01-2020",
         "dueDate": "05-01-2030"
      },
      "deferredPayments":{
         "numberOfPayments": "5",
         "paymentPlan": "PAY_LATER",
         "timePeriod": "12"
      },
      "recurringPayments":{    
      },
      "privateLabel":{
         "paymentSource": "SHELL",
         "paymentType": "REFUND",
         "specialFinanceIndicator": "24/0"
      },
      "customFields":{
         "keyValuePair":{
            "key": "",
            "value": ""
         }
      }
   }
}
```

<!-- type: tab-end -->

#### Bill Payment Indicator

The below table identifies the valid values of the Bill Payment Indicator.

| Value | Description |
| ----- | ----- |
| *SINGLE* | Single charge not for recurring services or installment plan. |
| *DEFERRED* | A charge for an order with a delayed payment for a specified amount of time. |
| *INSTALLMENT* | Single purchase where the cardholder is billed (charged) in installments. |
| *RECURRING* | Agreement where charges will occur on a periodic basis (e.g. subscriptions). |

---

## Additional Data

Additional Data identifies various elments based on the specific transaction type.

<!--
type: tab
title: additionalData
-->

The below table identifies the required parameters in the `additionalData` object.

| Variable | Type | Length | Description |
| ----- | ----- | ----- | ----- |
| `baiFlag` | *string* | 31 | Visa required [Business Application Identifier](#business-application-identifier) (BAI) used to identify the intended use of a [disbursement](?path=docs/Resources/Guides/Disbursement.md). |
| `billPayment` | *boolean* | | Identifies a [bill payment](docs/Resources/Guides/Bill-Payments/Bill-Payments.md) transaction. |
| `ecomURL` | *string* | 512 | Contains the URL of the site performing the Ecommerce transaction. |
| `goodsSoldCode` | *string* | 16 | Indicates a specific type of goods. It is used to help identify potentially fraudulent sales in a card present environment. |
| `terminalLaneNumber` | *string* | 16 | Terminal Lane Number |
| `requestedTestErrorResponseCode` | *string* | 28 | Value used to test/replicate a transaction Error. **Valid Values:** NO_CONNECTION_AVAILABLE, IOEXCEPTION_RECEIVED.|
| `emvParameterDownloadIndicator` | *string* | | Indicator if EMV Parameter has to be downloaded, sent as part of Auth/Sale Response.|

<!--
type: tab
title: JSON Example
-->

JSON string format for `additionalData`:

```json
{
   "additionalData":{
      "baiFlag": "PERSON_TO_PERSON",
      "networkTransactionReference": "123456788",
      "billPayment": false,
      "ecomURL": "https://www.somedomain.com",
      "goodsSoldCode": "GIFT_CARD",
      "terminalLaneNumber": "001",
      "requestedTestErrorResponseCode": "NO_CONNECTION_AVAILABLE",
      "emvParameterDownloadIndicator": true
   }
}
```

<!-- type: tab-end -->

#### Business Application Identifier

The BAI determines the data carried in the message, the limits and economics that may apply to the transaction, and may be used by the sending and/or receiving issuer to make an authorization decision. Below table identifies the valid values of Business Application Identifier.

| Value | Description |
| ----- | ----- |
| *PERSON_TO_PERSON* | Person to person initiated |
| *PERSON_TO_PERSON_BANK_INITIATED* | Person to person bank initiated |
| *BUSINESS_TO_BUSINESS* | Business to business initiated |
| *DIGITAL_WALLET* | Digital Wallet transfer |
| *ACCOUNT_TO_ACCOUNT* | Account to account transfer |
| *TOP_OFF* | Account top off or reload |
| *ACCOUNT_VERIFICATION* | [Account verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) or $0.00 auth |
| *FUNDS_TRANSFER* | Funds Transfer |
| *DISBURSEMENT* | Funds disbursement or payout |
| *GAMBLING_PAYOUT* | Gambling payout non-online |
| *GAMBLING_PAYOUT_ONLINE* | Online gambling payout |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Credit Request](?path=docs/Resources/API-Documents/Payments/Credit.md)
- [Forced Post](?path=docs/Resources/API-Documents/Payments/Forced.md)

---
