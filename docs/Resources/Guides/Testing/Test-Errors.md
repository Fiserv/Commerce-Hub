---
tags: [carat, commerce-hub, enterprise, testing, test-integration, test-cards, test-errors]
---


# Test Errors

Merchants can trigger a specific error code when intergrating with Commerce Hub (using a test account) by entering a desired error code as the transaction amount. 

To trigger an error code, enter the desired error code as the transaction amount. The error codes are listed in the error codes section.

Describe how to submit an error with based with field requestedTestErrorResponseCode in additionalDataCommon

Link to the error codes 

JSON Request Example based with field requestedTestErrorResponseCode in additionalDataCommon
JSON Response Example 

### Example of a request
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

### Example of a response
---


<!--
type: tab
title: JSON Example
-->

### Response
JSON string format for `additionalData`:

```json
{
   "additionalData":{
      "baiFlag": "PERSON_TO_PERSON", // Future Release
      "networkTransactionReference": "123456788",
      "billPayment": false, // Future Release
      "ecomURL": "https://www.somedomain.com",
      "goodsSoldCode": "GIFT_CARD", // Future Release
      "terminalLaneNumber": "001", // Future Release
      "requestedTestErrorResponseCode": "NO_CONNECTION_AVAILABLE",
      "emvParameterDownloadIndicator": true // Future Release
   }
}
```

<!-- type: tab-end -->

---

```json
{
   "errorResponse": {
      "gatewayResponse": {
         "transactionType": "CANCEL",
         "transactionState": "DECLINED",
         "transactionOrigin": "ECOM",
         "transactionProcessingDetails": {
            "orderId": "CH-aafaaf45-0cfb-4f4f-8ec0-301e40c14e34",
            "transactionTime": "2021-06-20T23:42:48Z",
            "apiTraceId": "5c059eee2388e191",
            "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
            "transactionId": "b2d883cdf3051598acb295f29a1e1582"
         }
      },
      "error":{
         "type": "GATEWAY",
         "code": "103",
         "field": "cardData",
         "message": "Missing or Invalid Card Number or Token"
      }

   }
}
```


## See Also


- [API Explorer]
- [Charge Request]
- [Test Address and Security Code]
- [Test Declines]
- [Test Errors]