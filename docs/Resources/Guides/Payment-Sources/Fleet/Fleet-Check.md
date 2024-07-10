---
tags: [Fleet, Petroleum, WEX, Comdata, Payment Check, ACH, Payment Sources ]
---

# Fleet Checks

Commerce Hub supports physical and virtual Fleet check payment methods including WEX Money Code *(previously EFS Check)*, Comdata Express Code *(virtual check)*, and Comdata ComCheck *(physical check)* using the *PaymentCheck* `sourceType`.

## Payload Example

The example below contains the minimum [parameters](#parameters) for a successful Fleet [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) request using *PaymentCheck*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Response
-->

Example of a charges payload request using *PaymentCheck*.

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCheck",
    "check": {
      "checkData": "3654803",
      "accountNumber": "144155167",
      "routingNumber": "121000248",
      "checkType": "MONEY_CODE"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  },
  "transactionInteraction": {
    "origin": "MOTO"
  },
  "customer": {
    "firstName": "ZEN",
    "lastName": "R",
    "email": null,
    "dateOfBirth": "1992-10-04",
    "driverLicenseNumber": "12345678",
    "driverLicenseState": "Tx",
    "taxid": "123456789"
  }
}
```

<!--
type: tab
-->

Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE_SALE",
    "transactionState": "CAPTURED",
    "transactionOrigin": "MOTO",
    "transactionProcessingDetails": {
      "orderId": "CHG01dec589299d309240fb51cb8957234868",
      "transactionTimestamp": "2024-03-07T22:23:21.506426965Z",
      "apiTraceId": "ae33c0c0dad948148aa4e00b14b15e0c",
      "clientRequestId": "5389247",
      "transactionId": "ae33c0c0dad948148aa4e00b14b15e0c"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.94,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "3212",
      "referenceNumber": "0021-becf314f-59cf-4a75-9133-f3f1495d862d",
      "processor": "FISERV",
      "host": "CONNECT_PAY",
      "networkRouted": "TELECHECK",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "0",
      "hostResponseMessage": "Approved",
      "bankAssociationDetails": {
        "transactionTimestamp": "2024-03-07T16:23:00Z"
      }
    }
  },
  "source": {
    "sourceType": "PaymentCheck",
    "check": {
      "routingNumber": "121000248",
      "accountNumber": "144155167"
    }
  },
  "networkDetails": {
    "systemTrace": "1400310000032032697430",
    "networkResponseStatus": "1",
    "networkResponseCode": "07"
  },
  "transactionDetails": {
    "captureFlag": true,
    "transactionCaptureType": "gateway",
    "retrievalReferenceNumber": "e00b14b15e0c",
    "transactionCutTimeStamp": "2024-03-08T05:00:00Z"
  },
  "transactionInteraction": {
    "origin": "MOTO",
    "posConditionCode": "CARD_NOT_PRESENT_MOTO",
    "motoType": "PHONE"
  }
}
```

<!-- type: tab-end -->

---

## Parameters

### Request Variables

The following variables are required when submitting a *PaymentCheck* request.

<!--
type: tab
titles: source, check, customer
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------ | --- |
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentCheck* for ACH transactions |
| `check` | *object* | N/A |  &#10004; | Contains the payment check details |

<!--
type: tab
-->

The below table identifies the required parameters in the `check` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ----------- |---|
| `routingNumber` | *string* | 45 | &#10004; | Routing number endorsed on the check |
| `accountNumber` | *string* | 45 | &#10004; | Account number endorsed on the check |
| `checkType` | *string* | 256 | &#10004; | Describes [check type](?path=docs/Resources/Master-Data/Check.md#check-type) |
| `checkData` | *String* | 45 | &#10004; | Identifying data for the check presented (i.e check number). |
| `accountType` | *string* | 45 | &#10004; | Describe [account type](?path=docs/Resources/Master-Data/Check.md#account-type) |

<!--
type: tab
-->

The below table identifies the required parameters in the `customer` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ----------- |---|
| `email` | *string* | 256 | &#10004; | Customer email address |
| `firstName` | *string* | 256 | &#10004; | Customer first name |
| `lastName` | *string* | 256 | &#10004; | Customer last name |
| `email` | *string* | 256 | &#10004; | Customer email address |
| `dateOfBirth` | *string* | 10 | &#10004; | Customer date of birth in YYYY-MM-DD format.|
| `driverLicenseNumber` | *string* | 256 | &#10004; | Customer driver license number |
| `driverLicenseState` | *string* | 256 | &#10004; | Driver license state code |
| `taxid` | *string* | N/A | &#10004; | Customer tax ID number. |

<!-- theme: info -->
> Refer to the [customer](?path=docs/Resources/Master-Data/Customer-Details.md) object for additional fields.

<!-- type: tab-end -->

| *COMDATA_CHECK* | Used for Fleet transactions processing a Comdata ComCheck [PaymentCheck](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Check.md) |
| *COMDATA_EXPRESS* | Used for Fleet transactions processing a Comdata Express Code [PaymentCheck](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Check.md) |
| *MONEY_CODE* | Used for Fleet transactions processing a WEX Money Code [PaymentCheck](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Check.md) |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Customer Details](?path=docs/Resources/Master-Data/Customer-Details.md)
- [Fleet Payments](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Payment System Product Codes](?path=docs/Resources/Master-Data/Payment-System-Product-Codes.md)

---
