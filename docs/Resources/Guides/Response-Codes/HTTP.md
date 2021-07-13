---
tags: [carat, card-not-present, commerce-hub, error, http-response-code, response-codes, card-present]
---

# HTTP Status Codes

Commerce Hub responds back to the merchant request with a three-digit HTTP status code grouped in to three different classes. The first digit can be used to quickly identify the class of a status code:

- **2xx: Success** – Indicates that the request was accepted successfully.
- **4xx: Client Error** – Indicates that incorrect data in request.
- **5xx: Server Error** – Indicates that the server was unable to process the request.

## Error Response

Commerce Hub includes the [`errorResponse`](?path=docs/Resources/Guides/Response-Codes/Error.md) as part of the `error` object along with the corresponding data in `type`, `code`, `field` and `message` fields.

<!-- 
type:
          description: 'The type of response either from the HOST, GATEWAY, NETWORK, or APIM.'
          type: string
          example: 'HOST'
        code: 
          description: 'Error response code from the host, gateway or network.'
          type: string
        field:
          description: 'The property or attribute associated with the error.'
          type: string
          example: 'source.sourceType'
        message:
          description: 'Information specific to a property or attribute.'
          type: string
          example: 'Missing type ID property.'
-->

---

## HTTP Status Codes List

<!--
type: tab
title: 2xx
-->

##### Success Status code and description

| Code | Message | Description |
| --------- | --- | ------- |
| 200 | Success | Indicates that request has succeeded |
| 201 | Created | Indicates that request has succeeded and a new resource has been created as a result |


<!--
type: tab
title: 4xx
-->

<!-- Add new responses and edit the payload example as well -->

##### Client Error Status code, description and resolution

| Code | Message  | Description | Resolution |
| --------- | --- | ------- | --------- |
| 400 | Bad Request | The request could not be understood due to incorrect syntax. | The merchant should do the modifications and repeat the request. |
| 401 | Unauthorized | Indicates that the request requires user authentication information. | The merchant may repeat the request with a suitable Authorization header field. |
| 403 | Forbidden | Unauthorized request. The merchant does not have access rights to the content. | Please contact Account Representative for an access. |
| 404 | Not Found | Commerce Hub can not find the requested resource. | Please check API Explorer for more information. |
| 408 | Request Time Out | The response to the request did not received till set period time. | Please try after some time. |
| 415 | Unsupported Media Type | Commerce Hub not able to process the supplied media type, as indicated by the Content-Type request header. | Merchant to correct the data and resend. |
| 425 | Too Early | The request was sent too early | Merchant to wait for sometime and send request. |
| 429 | Too Many Requests | Merchant had sent too many requests in a given amount of time. | Merchant to wait for sometime and send request. |



<!--
type: tab
title: 5xx
-->

##### Server Error Status code, description and resolution

| Code | Message | Description | Resolution |
| --------- | ---- | ------ | ------- |
| 500 | Internal Server Error | Commerce Hub encountered an unexpected condition which prevented it from fulfilling the request. | Report the error to Commerce Hub support team. |
| 503 | Service Unavailable | The application server is not ready to handle the request. | Please try after sometime. |
| 504 | Gateway Timeout | Commerce Hub did not received response from upstream application.. | Please try after sometime. |

<!-- type: tab-end -->

---

## Response Example

<!--
type: tab
title: Error Response
-->

##### Example of a charge (400: Bad Request) response.

```json
{
   "errorResponse":{
      "gatewayResponse":{
         "transactionType": "CANCEL",
         "transactionState": "ERROR",
         "transactionOrigin": "ECOM",
         "transactionProcessingDetails":{
            "orderId": "CH-aafaaf45-0cfb-4f4f-8ec0-301e40c14e34",
            "transactionDate": "2021-06-20",
            "transactionTime": "2021-06-20T23:42:48Z",
            "apiTraceId": "5c059eee2388e191",
            "clientRequestId": "myClientRequestId",
            "transactionId": "b2d883cdf3051598acb295f29a1e1582"
         }
      },
      "error":{
         "type": "GATEWAY",
         "code": "XXX",
         "field": "sourceType",
         "message": "Missing type ID property."
      }
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Bank Response Code](?path=docs/Resources/Guides/Response-Codes/Response-Code.md)
- [Gateway Error Code](?path=docs/Resources/Guides/Response-Codes/Error.md)

---
