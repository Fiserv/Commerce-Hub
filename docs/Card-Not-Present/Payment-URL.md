# Payment URL Integration

## Overview

Merchant can use the /payment-url integration method to generate a URL that they can send to a customer, which the customers can then use to pay for their purchase. When the customer clicks on the payment URL, they are directed to Commerce Hub secured hosted payment page solution where they can securely make the payment with their preferred payment method, whenever convenient for them.

## Generate a Payment URL

Commerce Hub provides an API that allows merchant to send transaction type, amount and currency as well as the language that shall be used on the hosted payment page that will be shown to the customer after accessing the link.

#### Endpoint
<!-- theme: success -->
>**POST** `/payment-vas/payment-url`

#### Payload Example

<!--
type: tab
title: Request
-->

##### Example of Payment Url Request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "customer": {
	  "locale": "ENGLISH",
  	"ipAddress": "10.10.10.10"
  },
  "transactionDetails": {
    "captureFlag": "true",
	  "merchantInvoiceNumber": "123890",
    "merchantOrderId": "845366457890"
  },
  "transactionNotificationURL": "https://showmethepaymentresult.com",
  "URLexpiration": "4102358400",
  "authenticateTransaction": "TRUE",
  "dynamicDescriptor": {
	  "merchantName": "MyWebsite.com"
  }
}
```

<!--
type: tab
title: Response
-->

##### Example of Payment Url (200: Success) Response.

<!-- theme: info -->

> See [Error Responses](url) for additional examples.

```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "charge",
    "transactionState": "authorized",
    "transactionOrigin": "ecom",
    "transactionProcessingDetails": {
      "transactionDate": "2016-04-16",
      "transactionTime": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301"
    }
  },
  "amount": {
    "total": "1.50",
    "currency": "USD"
  },
  "paymentSource": {
    "sourceType": "PaymentCard"
  },
  "transactionDetails": {
    "captureFlag": "TRUE",
    "merchantTransactionId": "1343678765",
    "merchantOrderId": "845366457890-TODO",
  },
  "transactionProcessingDetails": {
    "transactionDate": "2016-04-16",
    "transactionTime": "2016-04-16T16:06:05Z",
    "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
    "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
    "transactionId": "838916029301"
  },
  "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
  "requestStatus": "SUCCESS",
  "orderId": "9723846",
  "paymentUrl": "https://hyperlink-to-payment.com",
  "transactionId": "2381723322"
}
```
<!-- type: tab-end -->

## Get Payment URL Detail

Merchant may need to get the status of the payment Url so that if required they may contact shopper and request them to complete the transaction if they have not done. It may also be helpful while solving the customer queries if any on the status of the payment.

#### Endpoint
<!-- theme: success -->
>**POST** `/payment-vas/payment-url/{payment-url-id}`

#### Payload Example

<!--
type: tab
title: Request
-->

##### Example of Payment Url Request.

```json
???
```

<!--
type: tab
title: Response
-->

##### Example of Payment Url (200: Success) Response.

<!-- theme: info -->

> See [Error Responses](url) for additional examples.

```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "charge",
    "transactionState": "authorized",
    "transactionOrigin": "ecom",
    "transactionProcessingDetails": {
      "transactionDate": "2016-04-16",
      "transactionTime": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301"
    }
  },
  "amount": {
    "total": "1.50",
    "currency": "USD"
  },
  "paymentSource": {
    "sourceType": "PaymentCard"
  },
  "transactionDetails": {
    "captureFlag": "TRUE",
    "merchantTransactionId": "1343678765",
    "merchantOrderId": "845366457890-TODO",
  },
  "transactionProcessingDetails": {
    "transactionDate": "2016-04-16",
    "transactionTime": "2016-04-16T16:06:05Z",
    "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
    "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
    "transactionId": "838916029301"
  },
  "paymentUrl": "https://hyperlink-to-payment.com",
  "orderId": "9723846",
  "requestTime": "1518811817",
  "status": "Created"
}
```
<!-- type: tab-end -->


## Delete Payment URL

In some scenarios, merchant may want to force the expiry of a payment link. For example, if a shopper updates their order after payment link is sent, so merchant may want to create a new payment link with the updated amount. To avoid confusion with two payment links, set the status of the previous payment link to expired. Changing the status to expired also changes the payment link's expiry date to the current date and time.

#### Endpoint
<!-- theme: success -->
>**POST** `/payment-vas/payment-url/{payment-url-id}`

#### Payload Example

<!--
type: tab
title: Request
-->

##### Example of Payment Url Request.

```json
???
```

<!--
type: tab
title: Response
-->

##### Example of Payment Url (200: Success) Response.

<!-- theme: info -->

> See [Error Responses](url) for additional examples.

```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "charge",
    "transactionState": "authorized",
    "transactionOrigin": "ecom",
    "transactionProcessingDetails": {
      "transactionDate": "2016-04-16",
      "transactionTime": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301"
    }
  },
  "amount": {
    "total": "1.50",
    "currency": "USD"
  },
  "paymentSource": {
    "sourceType": "PaymentCard"
  },
  "transactionDetails": {
    "captureFlag": "TRUE",
    "merchantTransactionId": "1343678765",
    "merchantOrderId": "845366457890-TODO",
  },
  "transactionProcessingDetails": {
    "transactionDate": "2016-04-16",
    "transactionTime": "2016-04-16T16:06:05Z",
    "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
    "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
    "transactionId": "838916029301"
  },
  "paymentUrl": "https://hyperlink-to-payment.com",
  "orderId": "9723846",
  "requestTime": "1518811817",
  "status": "Created"
}
```
<!-- type: tab-end -->


