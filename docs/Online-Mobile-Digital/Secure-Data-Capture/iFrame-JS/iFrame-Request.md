---
tags: [Online, Card Not Present, Secure Data Capture, iFrame]
---

# Secure Data Capture - iFrame v2 Integration Guide

<!-- theme: info -->
> Commerce Hub's iFrame solution requires the integrated domains to be whitelisted for the Content-Security-Policy in Merchant Configuration and Boarding. Please contact your account representative for more information.

## Step 1: Acquire Credentials

A [credentials](?path=docs/Resources/API-Documents/Security/Credentials.md) request is required to obtain the client `symmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, and `publicKey`. These will be used to create the [`authorization`](?path=docs/Resources/API-Documents/Authentication-Header.md) constant required in the [form submission](#step-4-form-submission) and `sessionId` required in the [charges or tokens request](#step-3-submit-request).

<!-- theme: danger -->
> This request must be invoked as a server API call for each form submission and should not be attempted directly from the browser.

---

## Step 2: Configure iFrame

The iFrame JS script tag is required in the website by downloading or including the following code.

```php
<script src="https://commercehub-secure-data-capture.fiservapps.com/{version}/saq-a.js"></script>
```

It is recommended to use the latest [version](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/SDC-Version-Release.md) of Commerce Hub's SDK to ensure PCI and security compliance.

---

## Step 3: Create Payment Form

Instantiate the payment form within your JavaScript.

<!--
type: tab
titles: JavaScript, Variables
-->

Example of JavaScript `createPaymentForm`.

```javascript
const formPromise = window.fiserv.commercehub.createPaymentForm({
    data: {
        environment: "CERT",
        domain: "*.merchant.com",
        additionalFrameAncestor: "ancestorpage.merchant.com",
        supportedCardBrands: [],
        customCardBrands: [],
        fields: {},
        contextualCssClassNames: {
            valid: "validCssClass",
            invalid: "invalidCssClass",
        },
        font: {},
        css: {},
    },
    hooks: {},
});
```
<!--
type: tab
-->

The below table identifies the parameters used in `createPaymentForm`.

| Field | Required | Description |
| ----- | -------- | ----------- |
| `formPromise` | &#10004; | Promise will resolve to an instance of the payment form on success, or an error on failure |
| `environment` | &#10004; | Defines the Commerce Hub environment; **_PROD_** or **_CERT_** |
| `domain` | | Defaults to the hostname of the page the SDK is loaded into and is useful for referencing hostnames in the whitelist that use a wildcard |
| `additionalFrameAncestor` | | Indicates that the page the SDK is loaded into is itself an iFrame and what the parent page hostnames are so that each can be checked against the CDN whitelist and included in the resulting iFrame Content-Security-Policy value _(this is for supporting deeply nested iframes scenario)_. **Note:** The entire path of the page hostnames, starting above the page that loaded the SDK, up to and including the root frame _(or page)_ that displays in the browser URL needs to be included in this field where applicable. The expected data type of the field is a list of strings where each entry is a hostname (ports/path/protocol are not part of the hostname) |
| `supportedCardBrands` | | Defines [supported card brands](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md#supported-card-brands), defaults to no restrictions |
| `customCardBrands` | | Used to extend the built in card brand identification configuration with [custom card brands](?path=(?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md#custom-card-brands)) and works together with `supportedCardBrands` |
| `fields` | &#10004; | Defines the [field configuration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md#field-configuration) for the payment form |
| `valid` | | CSS class will be assigned to a field's input element when they have passed validation |
| `invalid` | | CSS class will be assigned to a field's input element when they have failed validation and are in an invalid state |
| `font` | | Defines [custom fonts](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md#fonts) for the payment form  |
| `css` | | Customized [CSS styling](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md#css) for the payment form  |
| `hooks` | | Defines [event hook](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Events.md) handling |

<!-- type: tab-end -->

---

## Step 4: Form Submission

When ready to submit the form data for card capture, such as when the form data is all valid and the user clicks a submit button, you can programmatically trigger submission for the iFrame payment form fields via the `submit` [method](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Methods.md).

```javascript
const submissionPromise = paymentForm.submit({
    apiKey: "API_KEY";
    accessToken: "ACCESS_TOKEN",
    createToken: "false",
    publicKey: "PUBLIC_KEY",
    keyId: "KEY_ID",
    merchantId: "MERCHANT_ID",
    terminalId: "TERMINAL_ID",
});
```

---

## Step 5: Submit an API Request

Submit a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) or [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request with the `sourceType` of `PaymentSession` and the `sessionID` from the [credentials](#step-1-acquire-credentials) request.

<!-- theme: info -->
> If a successful response is not received, best practice is to still submit the transaction. If an [error occurs](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Events.md#error-handling), the iFrame will need to be re-displayed so the customer can re-submit their payment information.

### Charges Example

<!-- theme: info -->
> Additional fields can be submitted as part of the request call. Additional fields can be found in the [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Response
-->

Example of a charges payload request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentSession",
    "sessionId": "df8c33d2-af27-4a3a-b7a0-61d4edf09cad"
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
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

Example of a charge (201: Created) response.

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
    "sourceType": "PaymentCard",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
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
  "transactionInteraction": {
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Customize iFrame Payment Form](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md)
- [iFrame Event Handling](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Events.md)
- [iFrame Methods](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Methods.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)
- [Version Release Notes](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/SDC-Version-Release.md)

---
