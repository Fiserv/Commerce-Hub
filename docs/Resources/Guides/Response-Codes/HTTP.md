---
tags: [carat, card-not-present, commerce-hub, error, http-response-code, response-code, card-present]
---

# HTTP Status Codes

## Overview
Commerce Hub responds back to the merchant request with a three-digit HTTP status code grouped in to three different classes. Its first digit can quickly identify the class of a status code:

- **2xx: Success** – Indicates that the request was accepted successfully.
- **4xx: Client Error** – Indicates that incorrect data in request.
- **5xx: Server Error** – Indicates that the server was unable to process the request.

---

## HTTP Status Codes List

<!--
type: tab
title: 2xx
-->

##### Success Status code and description

| Code | Message | Description |
| --------- | --- | ------- |
| 200 | Success | Indicates that request has succeeded. |
| 201 | Created | Indicates that request has succeeded and a new resource has been created as a result. |


<!--
type: tab
title: 4xx
-->

##### Client Error Status code, description and resolution

| Code | Message  | Description | Resolution |
| --------- | --- | ------- | --------- |
| 400 | Bad Request | The request could not be understood due to incorrect syntax. | The merchant should do the modifications and repeat the request. |
| 401 | Unauthorized | Indicates that the request requires user authentication information. | The merchant may repeat the request with a suitable Authorization header field. |
| 403 | Forbidden | Unauthorized request. The merchant does not have access rights to the content. | Please contact Account Representative for an access. |
| 404 | Not Found | Commerce Hub can not find the requested resource. | Please check API Explorer for more information. |

<!--
type: tab
title: 5xx
-->

##### Server Error Status code, description and resolution

| Code | Message | Description | Resolution |
| --------- | ---- | ------ | ------- |
| 500 | Internal Server Error | Commerce Hub encountered an unexpected condition which prevented it from fulfilling the request. | Report the error to Commerce Hub support team. |
| 503 | Service Unavailable | The application server is not ready to handle the request. | Please try after sometime. |


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
   "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
   "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
   "responseType":"BadRequest",
   "error":{
      "code":"INVALID_INPUT",
      "message":"Invalid request input. Please see details below.",
      "details":[
         {
            "field":"payloadObjectType",
            "message":"Payload object type missing."
         }
      ]
   }
}

```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Bank Response Code](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md)
- [Gateway Response Code](?path=docs/Resources/Guides/Response-Codes/Gateway.md)

---
