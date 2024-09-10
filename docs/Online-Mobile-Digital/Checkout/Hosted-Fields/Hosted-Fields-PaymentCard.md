---
tags: [Online, Card Not Present, Checkout, Hosted Fields, iFrame, PaymentCard]
---

# Hosted Fields: Form configuration for credit card payments

In order to accept a card payment with Hosted Fields, the [supported fields](#supported-card-fields), [field configuration and placement](#field-configuration-schema-and-placement), and [supported card brands](#additional-configuration-options) are required in the [form configuration](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Request.md#step-3-create-payment-form).

---

## Supported card fields

The following table identifies the available fields for a card payment. No fields are required but at least one field must be configured.

<!-- theme: info -->
> Commerce Hub supports encrypting `securityCode` data only when processing a [stored credentials](?path=docs/Resources/Guides/Stored-Credentials.md) payment instrument such as a [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) or an encrypted [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md). This process enhances security and serves validation purposes.

| Field | Type | Description |
| ----- | ----- | ----- |
| `cardNumber` | numeric text field | The card number |
| `nameOnCard` | text field | The full name of the cardholder as listed on their card. **Cannot** be used with `firstName` and `lastName` |
| `firstName` | text field | The first name of the cardholder as listed on their card, requires `lastName` to be configured. **Cannot** be used with `nameOnCard` |
| `lastName` | text field | The last name of the cardholder as listed on their card., requires `firstName` to be configured. **Cannot** be used with `nameOnCard` |
| `securityCode` | numeric text field | The card security code |
| `expiration` | numeric text field | Configurable field that is auto-formatted for both the month and year portions of the card expiry in *MM/YY* or *MM/YYYY* format. **Cannot** be used with `expirationMonth` or `expirationYear` |
| `expirationMonth` | dropdown | A dropdown field for the month portion of the card expiry. Requires `expirationYear`. **Cannot** be used with `expiration` |
| `expirationYear` | dropdown | A dropdown field for the year portion of the card expiry, requires `expirationMonth` to be configured. **Cannot** be used alongside `expiration` |

---

## Field configuration schema and placement

Only a `parentElementId` is required, this is the id for the DOM element on the merchant's page where Commerce Hub will inject the iFrame for that field. If other field configuration properties fail validation, the portion of configuration that failed validation is ignored.

<!--
type: tab
titles: JavaScript Example, Variables
-->

Example of payment card fields configuration in `createPaymentForm`.

```javascript
window.fiserv.components.paymentFields({
  data: {
    fields: {
      cardNumber: {
        parentElementId: "element-id",
        placeholder: "placeholder text goes here",
        dynamicPlaceholderCharacter: "•",
        enableFormatting: true,
        masking: {
          character: "•",
          mode: "NO_MASKING",
          shrunkLength: 4
        }
      },
      nameOnCard: {
        parentElementId: "element-id",
        placeholder: "Name On Card"
      },
      firstName: {
        parentElementId: "element-id",
        placeholder: "First Name"
      },
      lastName: {
        parentElementId: "element-id",
        placeholder: "Last Name"
      },
      securityCode: {
        parentElementId: "element-id",
        placeholder: "placeholder text goes here",
        dynamicPlaceholderCharacter: "•",
        masking: {
          character: "•",
          mode: "NO_MASKING"
        },
        expiration: {
          parentElementId: "element-id",
          placeholder: "MM / YY",
          format: "FLEXIBLE",
          delimiter: " / "
        },
        expirationMonth: {
          parentElementId: "element-id",
          placeholder: "Card Expiration Month",
          optionLabels: [
            "01 - January",
            "02 - February",
            "03 - March",
            "04 - April",
            "05 - May",
            "06 - June",
            "07 - July",
            "08 - August",
            "09 - September",
            "10 - October",
            "11 - November",
            "12 - December"
          ]
        },
        expirationYear: {
          parentElementId: "element-id",
          placeholder: "Card Expiration Year"
        }
      }
    }
  },
});
```

<!--
type: tab
-->

| Field | Description |
| ----- | ----------- |
| `parentElementId` | The element ID to inject the iFrame inside |
| `placeholder` | Placeholder text for the field |
| `dynamicPlaceholderCharacter` | Placeholder character for the field. Has no effect if `placeholder` isn't specified; must be one character in length  |
| `enableFormatting` | Controls if the card number should be auto-formatted with additional spaces while user types |
| `masking.character` | Controls card number masking and be one character in length |
| `masking.mode` | Controls the masking mode |
| `masking.shrunkLength` | Controls how many characters of the masking character will represent the masked portion of the input after shrinking is applied, must be a number |
| `optionLabels` | The text to display for each option in `expirationMonth` |
| `format` | The format of the `expiration` month and year as MM_YY, MM_YYY or FLEXIBLE|
| `delimiter` | Delimiter for the `expiration` month and year. Up to one non-space character and any number of spaces before and after the non-space character |

**Masking Mode:**

| Valid Values | Description | `cardNumber` | `securityCode` |
| ------------ | ----------- | :--------: | :----------: |
| *NO_MASKING* | Masking is fully disabled | &#10004; | &#10004; |
| *ALWAYS_MASK_EXCEPT_LAST_4* | Each block of 4 digits entered will be masked in real time with final 4 left unmasked | &#10004; | |
| *ALWAYS_MASK_ALL* | Digits entered will be masked in real time with most recently entered digit left unmasked until input loses focus | &#10004; | &#10004; |
| *ALWAYS_MASK_EXCEPT_TRAILING* | Real-time masking of input with trailing digits left unmasked. Number of trailing unmasked digits is determined by the identified brand configuration and defaults to 4 digits. | &#10004; | |
| *BLUR_MASK_EXCEPT_LAST_4* | Masking is applied when input loses focus; only last 4 digits left unmasked | &#10004; | |
| *BLUR_MASK_ALL* | Masking is applied when input loses focus; all digits masked | &#10004; | &#10004; |
| *BLUR_MASK_EXCEPT_LAST_4_SHRINK* | Masking is applied when input loses focus; only last 4 digits left unmasked; masked portion is shrunk down to `shrunkLength` with configured masking `character` | &#10004; | |
| *BLUR_MASK_ALL_SHRINK* | Masking is applied when input loses focus; all digits masked; masked portion is shrunk down to `shrunkLength` with configured masking `character` | &#10004; | |
| *BLUR_MASK_EXCEPT_TRAILING* | Masks the input data when focus leaves that field *(AKA "blur" event)* with trailing digits left unmasked. Number of trailing unmasked digits is determined by the identified brand configuration and defaults to 4 digits. | &#10004; | |
| *BLUR_MASK_EXCEPT_TRAILING_SHRINK* | Masks the input data when focus leaves that field (AKA "blur" event) with trailing digits left unmasked and the masked portion shrunk down to a configured number of characters. Number of trailing unmasked digits is determined by the identified brand configuration and defaults to 4 digits. | &#10004; | |

<!-- type: tab-end -->

---

## Additional configuration options

The payment form can also be configured to define the [supported card brands](#supported-card-brands) and [custom card brands](#custom-card-brands). The promise will resolve to an instance of the payment form on success, or an error on failure.

```javascript
const formPromise = window.fiserv.components.paymentFields({
  data: {
    supportedCardBrands: [],
    customCardBrands: [],
  },
});
```

---

### Supported card brands

Supported [card brands](?path=docs/Resources/Master-Data/Card-Type.md) are defined in `supportedCardBrands` field of the `data` configuration object passed in `createPaymentForm`. The merchant can restrict the allowed brands to a subset of the supported card brands assigned to the configuration field as a string array of brand identifiers.

When the SDK has identified the card brand, or can no longer identify the card brand because of user input changes, the user-provided [event hook](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Events.md#event-hooks) `onCardBrandChange` is called with this information.

| Card Brand | CH Value | SDK Value |
| ----- | ----- | ----- |
| Visa | VISA | visa |
| Mastercard | MASTERCARD | mastercard |
| American Express | AMEX | american-express |
| Diners Club | DINERS | diners-club |
| Discover | DISCOVER | discover |
| JCB | JCB | jcb |
| Union Pay | UNION_PAY | unionpay |
| Maestro | MAESTRO | maeestro |

---

### Custom card brands

Custom card brands like [private label credit cards *(PLCC)*](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md), are defined in the `data` object and `customCardBrands` field, which works alongside `supportedCardBrands` in the `createPaymentForm` configuration. It is used to extend the built-in brand configurations by providing additional configurations.

<!-- theme: warning -->
> The identifiers defined for these custom card brands need to be enabled via `supportedCardBrands` if that field is being used. If `supportedCardBrands` is not defined then all the built-in as well as custom brands will be permitted by form validations.

<!--
type: tab
titles: JavaScript Example, Variables
-->

```javascript
customCardBrands: [{
  id: "plcc-test",
  enableLuhnCheck: false,
  patterns: [
    111111,
    [222222, 222224]
  ],
  gaps: [4, 8, 12],
  lengths: [16],
  securityCodeLengths: [0],
  trailingUnmaskedDigits: 4,
  illegalPatterns: [
    "111111XXXX12XXXX"
  ]
}, ],
```

<!--
type: tab
-->

Custom card brands accepts a list of objects, each object entry support the following fields.

| Field | Required | Description |
| ----- | ----- | ----- |
| `id` | &#10004; | The brand identifier that can be referenced in `supportedCardBrands` as well as what would be sent to the `onCardBrandChange` merchant defined hook |
| `enableLuhnCheck` | | Determines whether validations for card numbers identified under this config should include a Luhn check. Boolean field, defaults to false |
| `patterns` | &#10004; | List containing elements that are either a number *(indicating a bin prefix)* or a list containing two numbers *(indicating a bin range)* used to identify the card numbers. Can specify illegal card patterns for a custom brand |
| `gaps` | | List of numbers indicating the indices of user input for the card number where a space should be inserted if card formatting is enabled |
| `lengths` | &#10004; | List of numbers indicating card lengths that are valid |
| `securityCodeLengths` | | List of numbers indicating `securityCode` lengths, defaults to 0 |
| `illegalCardPatterns` | | List of strings of card patterns that are illegal for the brand, they should be full card numbers and can use the "X" *(capital "X")* character as a placeholder indicating any digit |
| `trailingUnmaskedDigits` | | Defines the *TRAILING* masking modes for card numbers, defaults to 4 |

<!-- type: tab-end -->

---

## Card method response differences

For a card transaction when using the `submit` method, the `last4`, `expirationMonth` and `expirationYear` are returned in the response payload by the SDK.

```json
{
  "gatewayResponse": {
    "transactionType": "TOKENIZE",
    "transactionState": "AUTHORIZED",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2024-03-12T18:15:39.710423262Z",
      "apiTraceId": "755f19915f284309bd28250124620ef5",
      "clientRequestId": "681a5623eceb7b521e6a3bd520b70915",
      "transactionId": "755f19915f284309bd28250124620ef5"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "last4": "0026",
      "expirationMonth": "03",
      "expirationYear": "2026"
    }
  }
}
```

---

## See also


- [Checkout SDK](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)
- [Create a Hosted Fields integrations](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields.md)
- [Customize the Hosted Fields form](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Customization.md)
- [Handle Hosted Fields events](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Events.md)
- [Supported Hosted Fields methods](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Methods.md)
- [Hosted Fields HTML examples](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-HTML-Examples.md)

---
