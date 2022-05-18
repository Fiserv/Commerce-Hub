---
tags: [Data as a Service, Service, Data Solutions, EDS, Enhanced Data Service, Fraud, Security, API Reference]
---

# Enhanced Data Service

Enhanced Data Service enables sharing of relevant data between merchants and issuers outside of the authorization flow. Issuers leverage the data to make a more informed authorization decision in an attempt to improve authorization rates and reduce fraud.

---

## Request Variables

### Minimum Requirements

The following parameters are required to submit an Enhanced Data Service request: `bin` and `last4` or `tokenData`, `amount`, `currency`, `merchantId` and `alternateMerchantId` along with one of the [conditional requirements](#conditional-requirements).

<!--
type: tab
titles: amount, merchantDetails
-->

The below table identifies the required parameters in the `amount` object.

| Variable | Type| Maximum Length | Required | Description |
|-----|---|-----|-----|-----|
| `total` | *number* | 18,3 | &#10004; | Total amount of the transaction. |
| `currency` | *string* | 3 | &#10004; | The requested currency in [ISO 3 currency format](?path=docs/Resources/Master-Data/Currency-Code.md). |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Type| Maximum Length | Required | Description |
|-----|---|-----|-----|-----|
| `merchantId` | *string* | 16 | &#10004; | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `alternateMerchantId` | *string* | 16 | &#10004; | An Alternate ID assigned to a merchant based on a Value Added Service. |

<!-- type: tab-end -->

---

### Conditional Requirements

One of the following parameters is required to submit an Enhanced Data Service request: `email`, `phone`, `shippingAddress`, `splitTenderMethod`, or the device’s `deviceId`, `ipAddress`, `lattitude`, or `longitude`.

<!--
type: tab
titles: transactionDetails, deviceFingerPrint, customer, splitTender, shippingAddress
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Type| Maximum Length | Description |
|-----|---|-----|-----|
| `deviceFingerPrint` | *array* | N/A | An array containing the device fingerprint details |

<!--
type: tab
-->

The below table identifies the required `dataStatic` parameters in the `deviceFingerprint` array.

| Variable | Type| Maximum Length | Description |
|-----|---|-----|-----|
| `deviceId` | *string* | 48 | MAC of the device originating the transaction |

The below table identifies the required `dataDynamic` parameters in the `deviceFingerprint` object.

| Variable | Type| Maximum Length | Description |
|-----|---|-----|-----|
| `latitude` | *string* | 256 | &#10004; | Cardholder current latitude GPS position |
| `longitude` | *string* | 256 | &#10004; | Cardholder current longitude GPS position |
| `ipAddress` | *string* | 39 | &#10004; | Device IP Address |

<!-- theme: info -->
> Refer to the [device finger print](?path=docs/Resources/Master-Data/Device-Fingerprint.md) object for additional fields.

<!--
type: tab
-->

The below table identifies the required parameters in the `customer` object.

| Variable | Type| Maximum Length |Description |
|-----|---|-----|-----|
| `email` | *string* | 256 | Customer email address |
| `phone` | *array* | N/A | Customer [phone number](?path=docs/Resources/Master-Data/Customer-Details.md#phone-number) |

<!-- theme: info -->
> Refer to the [customer details](?path=docs/Resources/Master-Data/Customer-Details.md) object for additional fields.

<!--
type: tab
-->

The below table identifies the required parameters in the `splitTender` object.

| Variable | Type| Maximum Length | Description |
|-----|---|-----|-----|
| `splitTenderMethod` | *array* | N/A | Identifies the additional forms of payment used as part of this order |

The below table identifies the required parameters in the `splitTenderMethod` array.

| Variable | Type| Maximum Length | Description |
|-----|---|-----|-----|
| `type` | *string* | 1024 |**Valid Values:** *CREDIT_CARD*, *COUPON*, *GIFT_CARD*, *STORE_CREDIT*, *DEBIT_CARD*, *EBT_SNAP* |

<!-- theme: info -->
> Refer to the [split tender](?path=docs/Resources/Guides/Split-Tender.md#request-variables) object for available fields.

<!--
type: tab
-->

The below table identifies the required parameters in the `shippingAddress` object.

| Variable | Type| Maximum Length | Description |
|-----|---|-----|-----|
| `firstName` | *string* | 256  | Shipping contact first name |
| `lastName` | *string* | 256 | Shipping contact last name |
| `address` | *object* | N/A | Shipping [address](?path=docs/Resources/Master-Data/Address.md#address) details |

<!-- theme: info -->
> Refer to the [shipping address](?path=docs/Resources/Master-Data/Address.md#shipping-address) object for available fields.

<!-- type: tab-end -->

---

### Optional Variables

Refer to the respective article below for additional request parameters.

<!-- theme: warning -->
> It is recommended to submit as much optional data as possible to provide better authorization rate and fraud protection.

- [billingAddress](?path=docs/Resources/Master-Data/Address.md#billing-address)
- [fraudAttributes](?path=docs/Resources/Master-Data/Fraud-Attributes.md)
- [orderData](?path=docs/Resources/Master-Data/Order-Data.md)
- [storedCredentials](?path=docs/Resources/Guides/Stored-Credentials.md)
- [additionalPosInformation](?path=docs/Resources/Master-Data/Additional-POS-Info.md)
- [additionalDataCommon](?path=docs/Resources/Master-Data/Additional-Data.md)

---

## PaymentCard Request

The merchant can initiate Enhanced Data Service request transaction by passing the card details of the customer and using `PaymentCard` as a payment source.

### Additional Requirements

<!--
type: tab
titles: source, card
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Required | Description |
|-----|---|-----|-----|-----|
|`sourceType` | *string* | 15 | &#10004; | Value *PaymentCard* is used for a Enhanced Data Request request using `card`. |
|`card` | *object* | N/A | &#10004; | Card data object |

<!--
type: tab
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type| Maximum Length | Required | Description |
|-----|---|-----|-----|-----|
| `bin` | *string* | 8 | &#10004; | Bank Identification Number (BIN), the initial set of four to six numbers of the Primary Account Numbe (PAN). |
| `last4` | *string* | 4 | &#10004; | Contains the last four digits of the Primary Account Number (PAN). |

<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** `daas/v1/enhanceddata`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of an Enhanced Data payload request.

```json
{
   "amount": {
      "total": "12.04",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentCard",
      "card": {
         "bin": "400555",
         "last4": "0019"
      }
   },
   "transactionDetails": {
      "merchantOrderId": "123456789012",
      "deviceFingerPrint": [
         {
            "dataStatic": {
               "deviceId": "00:1B:44:11:3A:B7"
            },
            "dataDynamic": {
               "latitude": "13.0827 N",
               "longitude": "80.2707 E",
               "ipAddress": "172.27.37.221"
            }
         }
      ]
   },
   "customer": {
      "email": "customer@somedomain.com",
      "phone": [
         {
            "countryCode": "1",
            "phoneNumber": "123-123-1234",
            "type": "MOBILE"
         }
      ]
   },
   "splitTender": {
      "splitTenderMethod": [
         {
            "type": "CREDIT_CARD",
            "count": "1",
            "amount":{
               "total": "7.04"
            }
         },
         {
            "type": "GIFT_CARD",
            "count": "1",
            "amount": {
               "total": "5.00"
            }
         }
      ]
   },
   "shippingAddress": {
      "firstName": "Jane",
      "lastName": "Doe",
      "address": {
         "street": "Main Street",
         "houseNumberOrName": "123",
         "recipientNameOrAddress": "Accounting Department",
         "city": "Sandy Springs",
         "stateOrProvince": "GA",
         "postalCode": "30303",
         "country": "US"
      }
   },
   "merchantDetails": {
      "merchantId": "1234567890123456",
      "alternateMerchantId": "1234567890123456",
      "terminalId": "123456"
   }
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/enhanceddata)

<!--
type: tab
-->

##### Example of an Enhanced Data response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json

{
  "gatewayResponse": {
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "processorResponseDetails": {
    "referenceNumber": "845366457890-TODO"
  }
}
```
<!-- type: tab-end -->

---

## PaymentToken Request

The merchant can initiate Enhanced Data Service request transaction by passing the token details of the customer and using `PaymentToken` as a payment source.

### Additional Requirements

<!--
type: tab
titles: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Required | Description |
|-----|---|-----|-----|-----|
|`sourceType` | *string* | 15 | &#10004; | Value *PaymentToken* is used for a Enhanced Data Request request using a token. |
|`tokenData` | *string* | 2048 | &#10004; | TransArmor token created from the payment source. |

<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** `daas/v1/enhanceddata`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of an Enhanced Data payload request.

```json
{
   "amount": {
      "total": "12.04",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentToken",
      "tokenData": "1234560000000019"
   },
   "transactionDetails": {
      "merchantOrderId": "123456789012",
      "deviceFingerPrint": [
         {
            "dataStatic": {
               "deviceId": "00:1B:44:11:3A:B7"
            },
            "dataDynamic": {
               "latitude": "13.0827 N",
               "longitude": "80.2707 E",
               "ipAddress": "172.27.37.221"
            }
         }
      ]
   },
   "customer": {
      "email": "customer@somedomain.com",
      "phone": [
         {
            "countryCode": "1",
            "phoneNumber": "123-123-1234",
            "type": "MOBILE"
         }
      ]
   },
   "splitTender": {
      "splitTenderMethod": [
         {
            "type": "CREDIT_CARD",
            "count": "1",
            "amount":{
               "total": "7.04"
            }
         },
         {
            "type": "GIFT_CARD",
            "count": "1",
            "amount": {
               "total": "5.00"
            }
         }
      ]
   },
   "shippingAddress": {
      "firstName": "Jane",
      "lastName": "Doe",
      "address": {
         "street": "Main Street",
         "houseNumberOrName": "123",
         "recipientNameOrAddress": "Accounting Department",
         "city": "Sandy Springs",
         "stateOrProvince": "GA",
         "postalCode": "30303",
         "country": "US"
      }
   },
   "merchantDetails": {
      "merchantId": "1234567890123456",
      "alternateMerchantId": "1234567890123456"
   }
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/enhanceddata)

<!--
type: tab
-->

##### Example of an Enhanced Data response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for additional examples.

```json
{
   "gatewayResponse": {
      "transactionProcessingDetails": {
         "transactionTime": "2021-04-16T16:06:05Z",
         "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId": "838916029301"
      }
   },
   "processorResponseDetails":{
      "referenceNumber": "845366457890-TODO"
   }
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/enhanceddata)
- [Fraud Attributes](?path=docs/Resources/Master-Data/Fraud-Attributes.md)
- [Order Data](?path=docs/Resources/Master-Data/Order-Data.md)
- [Stored Credentials](?path=docs/Resources/Guides/Stored-Credentials.md)
- [Returns Optimization Service](?path=docs/Resources/API-Documents/DaaS/Returns-Optimizer-Service.md)

---
