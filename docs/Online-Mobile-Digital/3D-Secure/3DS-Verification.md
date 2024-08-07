---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present]
---

# 3-D Secure Verification

When using 3-D Secure _(3DS)_ merchants must go through an additional verification when the customer's [authentication](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Authentication.md) is challenged before submitting a [transaction request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Request.md) to Commerce Hub.

---

## Request Variables

<!--
type: tab
titles: referenceTransactionDetails, merchantDetails
-->

The below table identifies the available parameters in the `referenceTransactionDetails` object.

<!-- theme: info -->
> Only a single transaction identifier should be passed within the request.

| Variable | Data Type| Max Length |Description |
|---------|----------|----------------|---------|
| `referenceTransactionId` | _string_ | 40 | Commerce Hub generated `transactionId` from the original transaction. |
| `referenceMerchantTransactionId` | _string_ | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |

<!--
type: tab
-->

The below table identifies the available parameters in the `merchantDetails` object.

| Variable | Data Type| Max Length |Description |
|---------|----------|----------------|---------|
| `merchantId` | _string_ | 1024 | A unique ID used to identify the merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `terminalId` | _string_ | 1024 | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md)|

<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/3ds/verify`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

### Example of a 3DS verification payload request

```json
{
  "referenceTransactionDetails": {
    "referenceTransactionId": "123456789012e98re9fsf8aa8sa88a998"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/3ds/v1/verify)

<!--
type: tab
-->

### Example of a 3DS verification (201: Created) response

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
    "gatewayResponse": {
        "transactionType": "AUTHENTICATE",
        "transactionState": "AUTHENTICATED",
        "transactionProcessingDetails": {
            "transactionTimestamp": "2021-06-20T23:42:48Z",
            "orderId": "RKOrdID-525133851837",
            "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
            "clientRequestId": "4345791",
            "transactionId": "84356531338"
        }
    },
    "source": {
        "sourceType": "PaymentCard",
        "card": {
            "bin": "40055500",
            "last4": "0019",
            "scheme": "VISA",
            "expirationMonth": "10",
            "expirationYear": "2030"
        }
    },
    "processorResponseDetails": {
        "processor": "CARDINAL",
        "responseCode": "000",
        "responseMessage": "APPROVAL",
        "hostResponseCode": "00",
        "hostResponseMessage": "APPROVAL",
        "localTimestamp": "2021-06-20T23:42:48Z"
    },
    "transactionDetails": {
        "merchantTransactionId": "65757575675765",
    },
    "additionalData3DS": {
        "serviceProvider": "CARDINAL",
        "serviceProviderTransactionId": "764a086f-ad30-4313-b90d-d6dc1929c0d6",
        "acsTransactionId": "8561c0ef-931a-474f-bfee-55eb98a331b1",
        "dsTransactionId": "8561c0ef-931a-474f-bfee-55eb98a33132",
        "acsReferenceNumber": "8561c0ef-931a-474f-bfee-55eb98a3jds7",
        "authenticationStatus": "A",
        "statusReason": "Approved",
        "serverTransactionId": "8561c0ef-931a-474f-bfee-55ebds7s6s",
        "challengeIndicator": false,
        "mpiData": {
            "cavv": "AAABCZIhcQAAAABZlyFxAAAAAAA",
            "xid": "&x_MD5_Hash=abfaf1d1df004e3c27d5d2e05929b529&x_state=BC&x_reference_3=&x_auth_code=ET141870&x_fp_timestamp=1231877695",
            "eci": "05",
            "tavv": "AAABCZIhcQAAAABZlyFxAAAAAAA"
        },
        "versionData": {
            "recommendedVersion": "2.2.0"
        }
    }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/3ds/v1/verify)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)
- [3-D Secure Authentication Request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Authentication.md)
- [3-D Secure Request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Request.md)

---
