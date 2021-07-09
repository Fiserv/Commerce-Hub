---
tags: [carat, commerce-hub, enterprise, eds, enhanced-data-service, fraud, security, api-reference]
---

# Enhanced Data Service

Enhanced Data Service (EDS) enables sharing of relevant data between merchants and issuers outside of the authorization flow. Issuer leverages data to make a more informed authorization decision in an attempt to improve authorization rates and reduce fraud.

## Mimimum Requirements

<!-- theme: info -->
> The below parameters are the minimum required to submit an EDS request; however it is recommended to submit as much optional data as possible to provide better fraud protection.

<!--
type: tab
title: amount
-->

The below table identifies the required parameters in the `amount` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|
| `total` | *number* | 18,3 | &#10004; | Total amount of the transaction. |
| `currency` | *string* | 3 | &#10004; | The requested currency in [ISO 3 currency format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
title: transactionDetails
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `merchantOrderId` | *string* | 128 | &#10004; | Client transaction ID if supplied by client mapped from Retrieval Reference Number (RRN) in the Request.|
| `deviceFingerPrint` | *array* | N/A | &#10004; | An array containing the device fingerprint details |

<!--
type: tab
title: deviceFingerPrint
-->

The below table identifies the required `dataStatic` parameters in the `deviceFingerprint` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `deviceId` | *string* | 48 | &#10004; | MAC of the device originating the transaction |

The below table identifies the required `dataDynamic` parameters in the `deviceFingerprint` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `latitude` | *string* | 256 | &#10004; | Cardholder current latitude GPS position |
| `longitude` | *string* | 256 | &#10004; | Cardholder current longitude GPS position |
| `ipAddress` | *string* | 39 | &#10004; | Device IP Address |

<!-- theme: info -->
> Refer to the [device finger print](?path=docs/Resources/Master-Data/Transaction-Details.md#device-fingerprint-data) object for additional fields.

<!--
type: tab
title: customer
-->

The below table identifies the required parameters in the `customer` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `email` | *string* | 256 | &#10004; | Customer email address |
| `phone` | *array* | N/A | &#10004; | Customer [phone number](?path=docs/Resources/Master-Data/Customer-Details.md#phone-number) |

<!-- theme: info -->
> Refer to the [customer details](?path=docs/Resources/Master-Data/Customer-Details.md) object for additional fields.

<!--
type: tab
title: splitTender
-->

The below table identifies the required parameters in the `splitTender` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `splitTenderMethod` | *array* | N/A | &#10004; | Identifies the additional forms of payment used as part of this order |

The below table identifies the required parameters in the `splitTenderMethod` array.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `method` | *string* | 1024 | &#10004; | **Valid Values:** CREDIT_CARD, COUPON, GIFT_CARD, STORE_CREDIT, DEBIT_CARD, EBT_SNAP |

<!-- theme: info -->
> Refer to the [split tender](?path=docs/Resources/Guides/Split-Tender.md#request-variables) object for available fields.

<!--
type: tab
title: shippingAddress
-->

The below table identifies the required parameters in the `shippingAddress` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `firstName` | *string* | 256  | &#10004; | Shipping contact first name |
| `lastName` | *string* | 256 | &#10004; | Shipping contact last name |
| `address` | *object* | N/A | &#10004; | Shipping [address](?path=docs/Resources/Master-Data/Address.md#address) details |

<!-- theme: info -->
> Refer to the [address](?path=docs/Resources/Master-Data/Order-Data.md) object for available fields.

<!--
type: tab
title: merchantDetails
-->

The below table identifies the required parameters in the `shippingAddress` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `merchantId` | *string* | 16 | &#10004; | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `alternateMerchantId` | *string* | 16 | &#10004; | An Alternate ID assigned to a merchant based on a Value Added Service. |

<!--
type: tab
title: Optional Data
-->

Refer to the respective article below for optional request parameters.
- [billingAddress](?path=docs/Resources/Master-Data/Address.md#billing-address)
- [fraudAttributes](?path=docs/Resources/Master-Data/Fraud-Attributes.md)
- [orderData](?path=docs/Resources/Master-Data/Order-Data.md)
- [storedCredentials](?path=docs/Resources/Guides/Stored-Credentials.md)

<!-- type: tab-end -->

## EDS using PaymentCard

The merchant can initiate Enhanced Data Service request ransaction by passing the card details of the customer and using `PaymentCard` as a payment source.

### Additional Requirements

<!--
type: tab
title: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | &#10004; | Value *PaymentCard* is used for a Enhanced Data Request request using `card`. |
|`card` | *string* | 15 | &#10004; | Card data object |

<!--
type: tab
title: card
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `bin` | *string* | 8 | &#10004; | Bank Identification Number (BIN), the initial set of four to six numbers of the Primary Account Numbe (PAN). |
| `last4` | *string* | 4 | &#10004; | Contains the last four digits of the Primary Account Number (PAN). |

<!-- type: tab-end -->

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of an EDS payload request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "ApplePay",
    "data": "hbreWcQg980mUoUCfuCoripnHO210lvtizOFLV6PTw1DjooSwik778bH....",
    "header": {
      "applicationDataHash": "94ee059335e587e501cc4bf90613e0814f00a7b08bc7c648fd865a2af6a22cc2",
      "ephemeralPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEvR....",
      "publicKeyHash": "KRsyW0NauLpN8OwKr+yeu4jl6APbgW05/TYo5eGW0bQ=",
      "transactionId": "31323334353637"
    },
    "signature": "MIAGCSqGSIb3DQEHAqCAMIACAQExDzANBglghkgBZQMEAgEFADCABgkqhki.....",
    "version": "EC_v1",
    "applicationData": "VEVTVA==",
    "merchantId": "merchant.com.fapi.tcoe.applepay",
    "merchantPrivateKey": "MHcCAQEE234234234opsmasdsalsamdsad/asdsad/asdasd/....."
  }
  "transactionDetails": {
    "captureFlag": true,
    "createToken": true,
    "tokenProvider": "RSA"
  }
}

```

<!--
type: tab
title: Response
-->

##### Example of an EDS response.

<!-- theme: info -->
> See [Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.
```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "charge",
    "transactionState": "authorized",
    "transactionOrigin": "ecom"
  },
  "transactionProcessingDetails": {
    "transactionDate": "2021-04-16",
    "transactionTime": "2021-04-16T16:06:05Z",
    "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
    "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
    "transactionId": "838916029301"
  },
  "source": "ApplePay",
  "tokenData": "1234123412340019",
  "PARId": "string",
  "declineDuplicates": false,
  "tokenSource": "string",
  "paymentReceipt": {
    "approvedAmount": {
      "total": "1.00",
      "currency": "USD"
    },
    "processorResponseDetails": null,
    "approvalStatus": "APPROVED",
    "approvalCode": "OK7118",
    "referenceNumber": "845366457890-TODO",
    "schemeTransactionID": "019078743804756",
    "processor": "fiserv",
    "responseCode": "00",
    "responseMessage": "APPROVAL",
    "hostResponseCode": "54022",
    "hostResponseMessage": "Approved",
    "localTimestamp": "2021-04-16T16:06:05Z",
    "bankAssociationDetails": {
      "associationResponseCode": "000",
      "transactionTimestamp": "2021-04-16T16:06:05Z",
      "transactionReferenceInformation": null,
    }
  }
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Order Data](?path=docs/Resources/Master-Data/Order-Data.md)
- [Fraud Attributes](?path=docs/Resources/Master-Data/Fraud-Attributes.md)
- [Stored Credentials](?path=docs/Resources/Guides/Stored-Credentials.md)
---