---
tags: [carat, commerce-hub, enterprise, testing, test-integration, test-cards, test-errors]
---


# Test Errors

Merchants can trigger a specific error code when intergrating with Commerce Hub (using a test account) by entering a desired error code as the transaction amount. 


Describe how to submit an error with based with field requestedTestErrorResponseCode in additionalDataCommon

Link to the error codes 

JSON Request Example based with field requestedTestErrorResponseCode in additionalDataCommon
JSON Response Example 

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