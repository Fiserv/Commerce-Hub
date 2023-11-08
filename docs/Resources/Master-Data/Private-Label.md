---
tags: [Private Label, API Reference, Master Data]
---

# Private Label Data 

The private label object contains additional fields that may be required for some [private label proccessors](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md).  

<!--
type: tab
titles: additionalData3DS, JSON Example
-->


The below table identifies the parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |


---

<!--
type: tab
-->


JSON string format for `additionalData3DS`:

```json
{
  "additionalDataCommon": {
    "serviceProvider": "CARDINAL",
    "serviceProviderReferenceId": "764a086f-ad30-4313-b90d-d6dc1929c0d6",
    "serviceProviderTransactionId": "475a086f-ad30-4313-b90d-d6dc1929c98",
    "acsTransactionId": "13a086f-ad30-6543-b90d-d6dc1929c98",
    "acsReferenceNumber": "123jd-009ddk-876",
    "dsTransactionId": "3543-b90d-d6dc1765c98",
    "challengeStatus": "A",
    "challengeIndicator": "true",
    "authenticationStatus": "A",
    "statusReason": "Approved",
    "authenticationAttemptResult": "uyt45t89cnwu3rhc98a4hterjklth4o8ctsrjzth4",
    "serverTransactionId": "8561c0ef-931a-474f-bfee-55eb98a331b1",
    "challengeToken": "uyt45t89cnwu3rhc98a4hterjklth4o8ctsrjzth4",
    "acsUrl": "https://www.example.com/3ds/redirect",
    "stepUpUrl": "https://www.example.com/3ds/stepUp",
    "channel": "BROWSER",
    "messageCategory": "1",
    "methodData": {
      "dataCollectionUrl": "https://www.example.com/3ds/device/collect",
      "encodedToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      "encodedData": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6IjNhYzdjYWE3LWFhNDItMjY2My03OTFiLTJhYzA1YTU0MmM0YSJ9",
      "notificationUrl": "https://www.example.com/webhooks/v1/callback"
    },
    "mpiData": {
      "cavv": "AAABCZIhcQAAAABZlyFxAAAAAAA",
      "xid": "&x_MD5_Hash=abfaf1d1df004e3c27d5d2e05929b529&x_state=BC&x_reference_3=&x_auth_code=ET141870&x_fp_timestamp=1231877695",
      "eci": "05",
      "tavv": "AAABCZIhcQAAAABZlyFxAAAAAAA"
    },
    "versionData":{
      "recommendedVersion": "2.2.0"
   }
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

--- 
