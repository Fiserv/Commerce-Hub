---
tags: [Online, Card Not Present, Checkout, Hosted Fields, iFrame, PaymentCard, PaymentCheck]
---

# Hosted Fields: HTML rendering examples

The below examples provide a simple demonstration of how Checkout Hosted Fields can be rendered using HTML.

<!-- theme: danger -->
> For security reasons, Commerce Hub recommends that these examples should not be used as-is in a production environment.

<!--
type: tab
titles: Card, Check, Gift
-->

The below HTML example can be used to render a payment form to accept [credit and debit card payments](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-PaymentCard.md).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Merchant App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://commercehub-secure-data-capture.fiservapps.com/3.1.7/checkout.js"></script>
    <style>
      .field {
        height: 34px;
        border: 1px solid #ddd;
        border-radius: 0;
        padding: 5px;
        margin-bottom: 10px;
        box-sizing: border-box;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <span>Form Valid: </span>
    <span id="status-formValid">FALSE</span>
    <br />
    <span>Card Brand: </span>
    <span id="status-cardBrand"></span>
    <br />
    <br />
    <div>
      <label for="field-cardNumber">Card Number</label>
      <div id="field-cardNumber" class="field"></div>
    </div>
    <div>
      <label for="field-nameOnCard">Name on Card</label>
      <div id="field-nameOnCard" class="field"></div>
    </div>
    <div>
      <label for="field-expiration">Expiration</label>
      <div id="field-expiration" class="field"></div>
    </div>
    <div>
      <label for="field-securityCode">Security Code</label>
      <div id="field-securityCode" class="field"></div>
    </div>
    <script defer>
      const promise = window.fiserv.components.paymentFields({
        hooks: {
          onCardBrandChange: (cardBrand) => {
            window.document.getElementById("status-cardBrand").innerText = cardBrand ?? "";
          },
          onFormValid: () => {
            window.document.getElementById("status-formValid").innerText = "TRUE";
          },
          onFormNoLongerValid: () => {
            window.document.getElementById("status-formValid").innerText = "FALSE";
          }
        },
        data: {
          environment: "CERT",
          paymentMethod: "CREDIT_CARD",
          fields: {
            cardNumber: {
              parentElementId: "field-cardNumber",
              masking: {
                mode: "ALWAYS_MASK_EXCEPT_TRAILING"
              }
            },
            nameOnCard: {
              parentElementId: "field-nameOnCard",
            },
            expiration: {
              parentElementId: "field-expiration"
            },
            securityCode: {
              parentElementId: "field-securityCode",
              masking: {
                mode: "ALWAYS_MASK_ALL"
              }
            }
          },
          contextualCssClassNames: {
            invalid: 'invalid',
            valid: 'valid',
          },
          css: {
            "input": {
              "font-size": "16px",
              color: "#00a9e0",
              background: 'black',
            },
            ".valid": {
              color: "#43B02A",
            },
            ".invalid": {
              color: '#C01324',
            },
            "input::placeholder": {
              color: "#aaa",
            },
          }
        }
      });
    </script>
  </body>
</html>
```

<!--
type: tab
-->

The below HTML example can be used to render a payment form to accept [check *(ACH)* payments](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-PaymentCheck.md).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Merchant App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://commercehub-secure-data-capture.fiservapps.com/3.1.7/checkout.js"></script>
    <style>
      .field {
        height: 34px;
        border: 1px solid #ddd;
        border-radius: 0;
        padding: 5px;
        margin-bottom: 10px;
        box-sizing: border-box;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <span>Form Valid: </span>
    <span id="status-formValid">FALSE</span>
    <br />
    <br />
    <div>
      <label for="field-routingNumber">Bank Routing Number</label>
      <div id="field-routingNumber" class="field"></div>
    </div>
    <div>
      <label for="field-accountNumber">Bank Account Number</label>
      <div id="field-accountNumber" class="field"></div>
    </div>
    <div>
      <label for="field-idType">ID Type</label>
      <div id="field-idType" class="field"></div>
    </div>
    <div>
      <label for="field-idValue">ID#</label>
      <div id="field-idValue" class="field"></div>
    </div>
    <div>
      <label for="field-driverLicenseState">Driver License State/Province</label>
      <div id="field-driverLicenseState" class="field"></div>
    </div>
    <script defer>
      const promise = window.fiserv.components.paymentFields({
        hooks: {
          onFormValid: () => {
            window.document.getElementById("status-formValid").innerText = "TRUE";
          },
          onFormNoLongerValid: () => {
            window.document.getElementById("status-formValid").innerText = "FALSE";
          }
        },
        data: {
          environment: "CERT",
          paymentMethod: "BANK_ACCOUNT",
          fields: {
            routingNumber: {
              parentElementId: "field-routingNumber",
              masking: {
                mode: "ALWAYS_MASK_EXCEPT_TRAILING"
              }
            },
            accountNumber: {
              parentElementId: "field-accountNumber",
              masking: {
                mode: "ALWAYS_MASK_ALL"
              }
            },
            idType: {
              parentElementId: "field-idType",
            },
            idValue: {
              parentElementId: "field-idValue",
            },
            driverLicenseState: {
              parentElementId: "field-driverLicenseState",
            },
          },
          contextualCssClassNames: {
            invalid: 'invalid',
            valid: 'valid',
          },
          css: {
            "input": {
              "font-size": "16px",
              color: "#00a9e0",
              background: 'black',
            },
            ".valid": {
              color: "#43B02A",
            },
            ".invalid": {
              color: '#C01324',
            },
            "input::placeholder": {
              color: "#aaa",
            },
          }
        }
      });
    </script>
  </body>
</html>
```

<!--
type: tab
-->

The below HTML example can be used to render a payment form to accept [gift card payments](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Gift.md).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Merchant App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://commercehub-secure-data-capture.fiservapps.com/3.1.7/checkout.js"></script>
    <style>
      .field {
        height: 34px;
        border: 1px solid #ddd;
        border-radius: 0;
        padding: 5px;
        margin-bottom: 10px;
        box-sizing: border-box;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <span>Form Valid: </span>
    <span id="status-formValid">FALSE</span>
    <br />
    <br />
    <div>
      <label for="field-cardNumber">Gift Card Number</label>
      <div id="field-cardNumber" class="field"></div>
    </div>
    <div>
      <label for="field-securityCode">Gift Security Code (PIN/EAN)</label>
      <div id="field-securityCode" class="field"></div>
    </div>
    <script defer>
      const promise = window.fiserv.components.paymentFields({
        hooks: {
          onFormValid: () => {
            window.document.getElementById("status-formValid").innerText = "TRUE";
          },
          onFormNoLongerValid: () => {
            window.document.getElementById("status-formValid").innerText = "FALSE";
          }
        },
        data: {
          environment: "CERT",
          paymentMethod: "GIFT",
          fields: {
            cardNumber: {
              parentElementId: "field-cardNumber",
              masking: {
                mode: "ALWAYS_MASK_EXCEPT_TRAILING"
              }
            },
            securityCode: {
              parentElementId: "field-securityCode",
              masking: {
                mode: "ALWAYS_MASK_ALL"
              }
            }
          },
          contextualCssClassNames: {
            invalid: 'invalid',
            valid: 'valid',
          },
          css: {
            "input": {
              "font-size": "16px",
              color: "#00a9e0",
              background: 'black',
            },
            ".valid": {
              color: "#43B02A",
            },
            ".invalid": {
              color: '#C01324',
            },
            "input::placeholder": {
              color: "#aaa",
            },
          }
        }
      });
    </script>
  </body>
</html>
```

<!-- type: tab-end -->

---

## See also

- [Checkout SDK](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)
- [Create a Hosted Fields integration](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Request.md)
- [Hosted Fields event handling](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Events.md)
- [Hosted Fields methods](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Methods.md)

---
