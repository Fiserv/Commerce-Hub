---
tags: [carat, commerce-hub, enterprise, eds, enhanced-data-service, fraud, security, api-reference]
---

# Enhanced Data Service

Enhanced Data Service (EDS) enables sharing of relevant data between merchants and issuers outside of the authorization flow. Issuer leverages data to make a more informed authorization decision in an attempt to improve authorization rates and reduce fraud.

## Request Variables - Option A

<!--
type: tab
title: amount
-->

The below table identifies the parameters in the `amount` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|
| `total` | *number* | 18,3 | &#10004; | Total amount of the transaction. |
| `currency` | *string* | 3 | &#10004; | The requested currency in [ISO 3 currency format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
title: transactionDetails
-->

The below table identifies the parameters in the `transactionDetails` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `merchantOrderId` | *string* | 128 | &#10004; | Client transaction ID if supplied by client mapped from Retrieval Reference Number (RRN) in the Request.|
| `deviceFingerPrint` | *array* | N/A | &#10004; | Device fingerprint details for mobile transactions |

<!--
type: tab
title: deviceFingerPrint
-->

The below table identifies the `dataCapture` parameters in the `deviceFingerprint` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `captureTime` | *string* | 128 | | Client transaction ID if supplied by client mapped from Retrieval Reference Number (RRN) in the Request.|

The below table identifies the `dataStatic` parameters in the `deviceFingerprint` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `deviceId` | *string* | 48 | &#10004; | MAC of the device originating the transaction |
| `javaScriptEnabled` | *boolean* | N/A | | Identifies if JavaScript is enabled on the device |
| `javaEnabled` | *boolean* | N/A | | Identifies if Java is enabled on the device |
| `userAgent` | *string* | 2048 | | User agent data from the user device truncated to 2048 bytes |
| `locale` | *string* | 8 | | Language/Region code of user in IETF BCP47 format |

The below table identifies the `dataDynamic` parameters in the `deviceFingerprint` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `latitude` | *string* | 256 | &#10004; | Cardholder current latitude GPS position |
| `longitude` | *string* | 256 | &#10004; | Cardholder current longitude GPS position |
| `ipAddress` | *string* | 39 | &#10004; | Device IP Address |
| **address** | object | | | |
| `city` | *string* | 256 | | City or locality |
| `country` | *string* | 256 | | [ISO country code](?path=docs/Resources/Master-Data/Country-Code.md).|

<!--
type: tab
title: orderData
-->

The below table identifies the parameters in the `orderData` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `orderDate` | *string* | 10 | | Date that goods and services are ordered. YYYY-MM-DD format. |
| `itemCount` | *integer* | 2 | | Total number of items included in the purchase |
| `itemDetails` | *array* | | | List of all item categories along with amount and quantity |
| `preOrder` | *boolean* | N/A | | Identifies if the purchase is a preorder |
| `preOrderDate` | *string* | 10 | | Date that goods and services are preordered. YYYY-MM-DD format. |
| `reOrder` | *boolean* | N/A | | Identifies if the purchase is a reorder |
| `giftCardPurchase` | *boolean* | N/A| | Identifies if the order contains a gift card purchase |
| `giftcardCount`  | *integer* | 2 | | Number of gift cards redeemed during the transaction |
| **giftCardAmount** | *object* | | | |
| `total` | *number* | 18,3 | | Total amount of the gift card |
| `currency` | *string* | 3 | | The requested currency in [ISO 3 currency format](?path=docs/Resources/Master-Data/Currency-Code.md).|

The below table identifies the parameters in the `itemDetails` array.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `categoryName` | *string* | 8 | | Category of the item sold |
| `itemCount` | *string* | | | Item count |
| `value` | *string* | 32 | | The monetary value of the item sold |

<!--
type: tab
title: customer
-->

The below table identifies the parameters in the `customer` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `firstName` | *string* | 256 | | Customer first name |
| `lastName` | *string* | 256 | | Customer last name |
| `email` | *string* | 256 | &#10004; | Customer email address |
| **phone** | *array* |  | | Customer phone number |
| `countryCode` | *string* | 4 | | Country's area code |
| `phoneNumber` | *string* | 15 | | Customer phone number |
| `type` | *string* | 5 | | This field indicates the type of phone number provided. Valid Values: *HOME*, *MOBILE*, *WORK*. |

<!-- type: tab-end -->

## Mimimum Requirements - Option B

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
title: orderData
-->

<!-- theme: info -->
> Refer to the [order data](?path=docs/Resources/Master-Data/Transaction-Details.md#device-fingerprint-data) object for available fields.

<!--
type: tab
title: customer
-->

The below table identifies the required parameters in the `customer` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `email` | *string* | 256 | &#10004; | Customer email address |

<!-- theme: info -->
> Refer to the [customer details](?path=docs/Resources/Master-Data/Customer-Details.md) object for additional fields.

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
|`sourceType` | *string* | 15 | &#10004; | Value *PaymentCard* is used for a Enhanced Data Request request using `cardData`. Refer Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details. |

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
- [Apple Pay App Integration](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)
- [Charges](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)

---