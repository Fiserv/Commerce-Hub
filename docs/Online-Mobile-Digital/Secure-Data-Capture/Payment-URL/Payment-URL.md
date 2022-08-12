---
tags: [Online, Card Not Present, Invoice, Secured Payment Form, Payment URL]
---

# Payment URL Integration

Merchant's can use the Payment URL integration method to generate an invoice that they can send to a customer, which the customers can then use to pay for their purchase. When the customer clicks on the Payment URL, they are directed to Commerce Hub secured hosted payment page solution where they can securely make the payment with their preferred payment method.

**User Action:** The merchant needs to invoice a customer's purchase. 

1. The merchant provides payment information such as amount, currency to Commerce Hub to create a Payment URL.
2. Commerce Hub generates a Payment URL by processing the information received by merchant and sends it back.
3. The merchant shares the URL with the customer.
4. Once the customer accesses the URL, they can complete the payment on Commerce Hub's secure hosted page.
5. The merchant can verify the status of URL by initiating a Payment URL status request to Commerce Hub.
6. The merchant would receive a response to their designated `transactionNotificationURL`.

---

## Generate a Payment URL

Commerce Hub provides an API that allows the merchant to send transaction type, amount and currency as well as the language that shall be used on the hosted payment page that will be shown to the customer after accessing the link.

<!--theme: info-->
> The default `expiration` for the Payment URL is 182 days.

### Endpoint
<!-- theme: success -->
>**POST** `/payment-vas/payment-url`

### Minimum Requirements

add here

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of Payment URL Request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "customer": {
	  "locale": "ENGLISH",
   },
  "transactionDetails": {
    "captureFlag": "true",
	  "merchantInvoiceNumber": "123890",
    "merchantOrderId": "845366457890"
  },
  "transactionNotificationURL": "https://showmethepaymentresult.com",
  "expiration": "4102358400",
  "merchantIpAddress": "10.10.10.10",
  "authenticateTransaction": "TRUE",
  "dynamicDescriptor": {
	  "merchantName": "MyWebsite.com"
  },
  "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
    }
}
```

<!--
type: tab
title: Response
-->

##### Example of Payment Url (200: Success) Response.

<!-- theme: info -->
>  See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json

{
  "gatewayResponse": {
    "transactionProcessingDetails": {
      "transactionDate": "2016-04-16",
      "transactionTime": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301",
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16"
    }
  },
  "requestStatus": "SUCCESS",
  "paymentUrl": "https://api.fiservapps.com/ch/payment-vas/payment-url?storename=123456789&oid=R-96cdbaa4-c22e-4598-a2f1-c2b5fed79ef1&paymentUrlId=d3eb74fe-cf63-47e1-b89f-52ba0cc7965c",
  "paymentUrlId": "d3eb74fe-cf63-47e1-b89f-52ba0cc7965c"
}

```
<!-- type: tab-end -->

---

## Get a Payment URL Status

Merchant may need to get the status of the payment URL so that if required they may contact shopper and request them to complete the transaction if they have not done. It may also be helpful while solving the customer queries if any on the status of the payment.

Get Payment URL request can be initiated by sending the request to the appropriate endpoint by providing valid `paymentUrlId` with no minimum field requirement.

### Endpoint
<!-- theme: info -->
>**GET** `/payment-vas/payment-url/{payment-url-id}`

### Payload Example


<!--
type: tab
title: Response
-->

##### Example of Payment URL Detail (200: Success) Response.

The [status](#payment-url-status) of the Payment URL will be recieved in component `paymentUrlDetail` of the response. 

```json
{
  "gatewayResponse": {
    "transactionProcessingDetails": {
      "transactionDate": "2016-04-16",
      "transactionTime": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301",
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16"
    }
  },
  "status": "Created",
  "paymentUrl": "https://api.fiservapps.com/ch/payment-vas/payment-url?storename=123456789&oid=R-96cdbaa4-c22e-4598-a2f1-c2b5fed79ef1&paymentUrlId=d3eb74fe-cf63-47e1-b89f-52ba0cc7965c",
  "paymentUrlId": "d3eb74fe-cf63-47e1-b89f-52ba0cc7965c"
}

```
<!-- type: tab-end -->

#### Component: paymentUrlDetail

| Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `paymentUrl` | *string* |  | URL for embedded payment link. |
| `merchantTransactionId` | *string* |  | The unique merchant transaction ID from the request, if supplied. |
| `orderId` | *string* |  | Client order ID if supplied by client, otherwise the order ID. |
| `requestTime` | *integer* |  | The transaction time in seconds since epoch. |
| `status` | *string* |  | The [status](#payment-url-status) of payment URL. |

#### Payment URL Status

- **Created:** The payment URL is created and is ready for use by the shopper.
- **Used:** The Payment URL is used by the shopper. If the status is used, then the merchant needs to submit a [transaction inquiry](../Transactions/Inquiry.md) to determine the final state of the transaction.
- **Expired:** The Payment URL is not used by the shopper and is expired. New Payment URL needs to be created if required.
- **Cancelled:** The Payment URL is deleted by the merchant. 

---

## Delete a Payment URL

In some scenarios, merchant may want to force the expiry of a payment link. For example, if a shopper updates their order after payment link is sent, so merchant may want to create a new payment link with the updated amount. To avoid confusion with two payment links, set the status of the previous payment link to expired. Changing the status to expired also changes the payment link's expiry date to the current date and time.

Delete Payment URL request can be initiated by sending the request to the appopriate endpoint by providing valid `paymentUrlId` with no minimum field requirement.


### Endpoint
<!-- theme: danger -->
>**DELETE** `/payment-vas/payment-url/{payment-url-id}`

### Payload Example

<!--
type: tab
title: Response
-->

##### Example of Payment URL Delete (200: Success) Response.
<!-- theme: info -->
>  See [Response Handling](#response-handling) for additional status.

```json

{
  "gatewayResponse": {
    "transactionProcessingDetails": {
      "transactionDate": "2016-04-16",
      "transactionTime": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301",
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16"
    }
  },
  "requestStatus": "SUCCESS",
  "paymentUrl": "https://api.fiservapps.com/ch/payment-vas/payment-url?storename=123456789&oid=R-96cdbaa4-c22e-4598-a2f1-c2b5fed79ef1&paymentUrlId=d3eb74fe-cf63-47e1-b89f-52ba0cc7965c",
  "paymentUrlId": "d3eb74fe-cf63-47e1-b89f-52ba0cc7965c"
}

```
<!-- type: tab-end -->

---

## Error Responses

| Value | Description |
| ---- | ---------- |
| SUCCESS | The Payment URL is successfully deleted or created. |
| VALIDATION_FAILED | Failed to validate the Payment URL. |
| PROCESSING_FAILED | Failed to process the Payment URL. |
| FAILURE | Generic failure message. |

---

## See Also
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)
