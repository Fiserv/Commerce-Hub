---
tags: [carat, commerce-hub, google-pay, wallet, google-pay-web-integration]
---


# Google Pay: Web Integration

Merchants need to follow the below steps in order to integrate Google Pay with their website.

## Step 1: Define Google Pay API Version

The merchant need to declare the version of the Google Pay API to their site. The major and minor versions are required in the fields of each passed object, and are included in the response.

The following code sample shows declared API versions:

```json
const baseRequest = {
  apiVersion: 2, 
  apiVersionMinor: 0
};
```

## Step 2: Request a Payment Token

Google encrypts information about a payer's selected card for secure processing by a payment provider.

```json
const tokenizationSpecification = {
  type: 'PAYMENT_GATEWAY',
  parameters: {
    "gateway": "firstdata",
    "gatewayMerchantId": "GatewayMerchantId"
  }
};

```

<!--theme : warning-->
> The data in above example is as per Payeezy as found in Google website, need to reconfirm about the Commerce Hub

## Step 3: Define Payment Card Networks

The merchant need to define the card networks which will be allowed for the transactions. Please check Commerce Hub [supported card types](../../../Resources/Master-Data/Card-Type.md). See the following code sample:

```json
const allowedCardNetworks = ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"];
```

## Step 4: Define Auth Methods

Google Pay API might return cards on file with Google (PAN_ONLY), and/or a device token on an Android device that's authenticated with a 3-D Secure cryptogram (CRYPTOGRAM_3DS). See the following code sample:

```json
const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];
```

For more information, see CardParameters in Google's object [reference documentation](https://developers.google.com/pay/api/web/reference/request-objects#CardParameters).


## Step 5: Describe Allowed Payment Methods

The merchant need to follow the following steps in order to decribe allowed payment methods

1. Combine supported authentication methods and supported card networks in order to describe the CARD payment method. See the following code sample:

```json
const baseCardPaymentMethod = {
  "type": "CARD",
  parameters: {
    "allowedAuthMethods": "allowedCardAuthMethods",
    "allowedCardNetworks": "allowedCardNetworks"
  }
};
```
2. Extend the base card payment method object to describe information expected to be returned to the application. Include a description of the tokenized payment data. See the following code sample:

```json
const cardPaymentMethod = Object.assign(
  {tokenizationSpecification: tokenizationSpecification},
  baseCardPaymentMethod
);
```

## Step 6: Add Payment Tag

To load the Google Pay API JavaScript library, merchant needs to complete the following steps:

1. Include Google's hosted JavaScript on their webpage. See the following code sample:

```json
<script
  async
  src="https://pay.google.com/gp/p/js/pay.js"
  onload="console.log('TODO: add onload function')">
</script>
```

2. After the Google Pay API JavaScript library loads, initialize a PaymentsClient object. Initial development uses a TEST environment, which returns dummy payment methods that are suitable to reference the structure of a payment response. In this environment, a selected payment method isn't capable of a transaction. See the following code sample:

```json
const paymentsClient =
    new google.payments.api.PaymentsClient({environment: "TEST"});
```

For more information about the requirements for a PRODUCTION environment that returns chargeable payment methods, see the Google Pay [Integration checklist](https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist).


## Step 7: Determine Readiness to Pay

To determine readiness to pay with the Google Pay API, merchant needs to complete the following steps:

1. Add allowed payment methods to the base request object. See the following code sample:

```json
const isReadyToPayRequest = Object.assign({}, baseRequest);
isReadyToPayRequest.allowedPaymentMethods = [baseCardPaymentMethod];
```

2. Call isReadyToPay() to determine if the Google Pay API is supported by the current device and browser for the  specified payment methods. See the following code sample:

```json
paymentsClient.isReadyToPay(isReadyToPayRequest)
    .then(function(response) {
      if (response.result) {
        // add a Google Pay payment button
      }
    })
    .catch(function(err) {
      // show error in developer console for debugging
      console.error(err);
    });
```

---

## Step 8: Support Google Pay on Website

Merchant can start supporting Google Pay on their website either by using Google Pay API Framework or by using Commerce Hub Hosted Payment Page.

**Integrate Using Google Pay API:** For more details refer [Google Pay API](url) documentation.

**Integrate Using Commerce Hub Hosted Page:** configure your apple pay settings in Commerce Hub Hosted Page.

---

## Step 9: Add Google Pay Button

The merchant needs to add a Google Pay payment button to the page to encourage shoppers to check out with payment methods that are supported by the Google Pay API and their website. For more information about available button types, colors, and display requirements, see the [Brand guidelines](https://developers.google.com/pay/api/web/guides/brand-guidelines). See the following payment button code sample:

```json
const button =
    paymentsClient.createButton({onClick: () => console.log('TODO: click handler')});
document.getElementById('container').appendChild(button);
```

## Step 10: Create Payload Request

<!--theme: warning-->
> This step is only required when utilizing Commerce Hub's RESTful API and Google Pay API. Hosted Checkout will manage the payment information automatically.

<!--
type: tab
title: Request
-->

##### Example of a Charge Payload Request.
```json
{
   "amount":{
      "total":"12.04",
      "currency":"USD"
   },
   "source":{
      "sourceType":"GooglePay",

   }
}

```

<!--
type: tab
title: Response
-->

##### Example of a Charge (201: Created) Response.

<!-- theme: info -->
> See [Error Responses](url) for additional examples.
```json
{
   "gatewayResponse":{
      "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType":"charge",
      "transactionState":"authorized",
      "transactionOrigin":"ecom"
   },
   "transactionProcessingDetails":{
      "transactionDate":"2021-04-16",
      "transactionTime":"2021-04-16T16:06:05Z",
      "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId":"838916029301"
   },
   "source":"GooglePay",
   "paymentToken":{
      "tokenData":"1234123412340019",
      "PARId":"string",
      "declineDuplicates":false,
      "tokenSource":"RSA"
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total":"1.00",
         "currency":"USD"
      },
      "processorResponseDetails":null,
      "approvalStatus":"APPROVED",
      "approvalCode":"OK7118",
      "referenceNumber":"845366457890-TODO",
      "schemeTransactionID":"019078743804756",
      "processor":"fiserv",
      "responseCode":"00",
      "responseMessage":"APPROVAL",
      "hostResponseCode":"54022",
      "hostResponseMessage":"Approved",
      "localTimestamp":"2021-04-16T16:06:05Z",
      "bankAssociationDetails":{
         "associationResponseCode":"000",
         "transactionTimestamp":"2021-04-16T16:06:05Z",
         "transactionReferenceInformation":null
      }
   }
}
```

<!-- type: tab-end -->

## See Also

- [API Explorer](url)
- [Google Pay App Integration](Google-Pay-App.md)
- [Charges](../../../Resources/API-Documents/Payments/Charges.md)
- [Apple Pay](../Apple-Pay/Apple-Pay.md)

