---
tags: [Error Response, Error Code, Response Code]
---

# Error Response

Commerce Hub includes the `errorResponse` as part of the `error` object along with the corresponding data in `type`, `code`, `field` and `message` fields. 

<!--
type: tab
titles: error, JSON Example
-->

The below table identifies the parameters in the `error` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `type` | *string* | 256 | The type of response either from the HOST, GATEWAY, NETWORK, or APIM |
| `code` | *string* | 256 | Error response code from the host, gateway or network |
| `field` | *string* | 256 | The property or attribute associated with the error |
| `message` | *string* | 256 | Information specific to a property or attribute |


<!--
type: tab
-->

JSON string format for `error`:

```json
{
   "error":{
      "type":"GATEWAY",
      "code":"XXX",
      "field":"sourceType",
      "message":"Missing type ID property."
   }
}
```

<!-- type: tab-end -->

---

## Response Example

<!--
type: tab
titles: Error Response
-->

##### Example of a charge (400: Bad Request) response.

```json
{
   "errorResponse":{
      "gatewayResponse":{
         "transactionType":"CANCEL",
         "transactionState":"DECLINED",
         "transactionOrigin":"ECOM",
         "transactionProcessingDetails":{
            "orderId":"CH-aafaaf45-0cfb-4f4f-8ec0-301e40c14e34",
            "transactionTimestamp":"2021-06-20T23:42:48Z",
            "apiTraceId":"5c059eee2388e191",
            "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
            "transactionId":"b2d883cdf3051598acb295f29a1e1582"
         }
      },
      "error":[
         {
            "type":"GATEWAY",
            "code":"703",
            "message":"Write to downstream failed"
         }
      ]
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md)
- [Error Response Codes](?path=docs/Resources/Guides/Response-Codes/Error-Code.md)

---
