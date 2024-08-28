---
tags: [Online, Card Not Present, Checkout, Hosted Fields, iFrame, PaymentCard, PaymentCheck]
---

# Checkout: Hosted Fields HTML rendering examples

The below examples provide a simple demonstration of how Checkout Hosted Fields can be rendered using HTML.

<!-- theme: danger -->
> For security reasons these examples should not be used as is in a production environment.

---

## PaymentCard form rendering example

The below example will load a payment form to [accept a card payment](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-PaymentCard.md).

<!--
type: tab
titles: Form Example, HTML Code
-->

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

<!--
type: tab
-->

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
<!-- type: tab-end -->

---

