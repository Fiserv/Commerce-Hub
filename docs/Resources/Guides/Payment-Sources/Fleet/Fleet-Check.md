---
tags: [Fleet, Petroleum, WEX, Comdata, Payment Check, ACH, Payment Sources ]
---

# Fleet Checks

Commerce Hub supports physical and virtual fleet check payment methods including WEX OTR Money Code, Comdata Express Code *(virtual check)*, and Comdata ComCheck *(physical check)* using the *PaymentCheck* `sourceType`.

---

## Supported Transactions

| Brand | Auth Only | Sale (Capture) | Refunds | Cancels | Offline |
| ----- | :-----: | :-----: | :-----: | :-----: | :-----: |
| Comdata Express Code | | &#10004; | | | |
| Comdata ComCheck | &#10004; | | | | |
| WEX OTR Money Code | &#10004; | | | | &#10004; |

---

## Transaction Example

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful WEX Money Code [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) request using a *PaymentCheck*. Required fields are based on the specific [fleet brand prompt requirements](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Brand-Req.md). The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCheck",
    "check": {
      "nameOnCheck": "Jane Smith",
      "checkData": "123456",
      "accountNumber": "25753254",
      "checkType": "MONEY_CODE"
    }
  },
  "transactionDetails": {
    "captureFlag": false
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001",
    "terminalLaneNumber": "01",
    "siteTypeIndicator": "RETAIL"
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "MANUAL"
  },
  "orderData": {
    "itemDetails": [
      {
        "paymentSystemProductCode": "400",
        "itemDescription": "General Merchandise",
        "quantity": 1,
        "unitOfMeasurement": "EACH",
        "itemType": "PRODUCT",
        "itemSubType": "MERCHANDISE",
        "amountComponents": {
          "unitPrice": 14.04,
          "netAmount": 12.04
        }
      }
    ]
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
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "RETAIL",
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
      "total": 12.04,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "3212",
      "referenceNumber": "0021-becf314f-59cf-4a75-9133-f3f1495d862d",
      "processor": "FISERV",
      "host": "BUYPASS",
      "networkRouted": "GECC/Wright Exp",
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
      "accountNumber": "144155167"
    }
  },
  "networkDetails": {
    "systemTrace": "1400310000032032697430",
    "networkResponseStatus": "1",
    "networkResponseCode": "07"
  },
  "transactionDetails": {
    "captureFlag": false,
    "transactionCaptureType": "host",
    "retrievalReferenceNumber": "e00b14b15e0c",
    "transactionCutTimeStamp": "2024-03-08T05:00:00Z"
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "MANUAL"
  },
  "orderData": {
    "itemDetails": [
      {
        "paymentSystemProductCode": "400",
        "itemDescription": "General Merchandise",
        "quantity": 1,
        "unitOfMeasurement": "EACH",
        "itemType": "PRODUCT",
        "itemSubType": "MERCHANDISE",
        "amountComponents": {
          "unitPrice": 14.04,
          "netAmount": 12.04
        }
      }
    ]
  }
}
```

<!-- type: tab-end -->

---

## Paramters

#### Request Variables

Required fields are based on the specific [fleet brand prompt requirements](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Brand-Req.md).

<!--
type: tab
titles: source, check, itemDetails
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `sourceType` | *string* | 15 | Use Value *PaymentCheck* for Fleet check transactions |
| `check` | *object* | N/A | Contains the payment check details |

<!--
type: tab
-->

The below table identifies the required parameters in the `check` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `nameOnCheck` | *string* | 45 | Check holder name |
| `routingNumber` | *string* | 45 | Routing number endorsed on the check |
| `checkData` | *String* | 45 | Identifying data for the check presented (i.e check number). |
| `checkType` | *string* | 256 | Defines the check as *COMDATA_CHECK*, *COMDATA_EXPRESS* or *MONEY_CODE* |

<!-- theme: info -->
> Refer to the [check](?path=docs/Resources/Master-Data/Check.md) object for additional fields.

<!--
type: tab
-->

<!-- theme: warning -->
> - The `paymentSystemProductCode`, `itemType` and `itemSubType` must be sent in all fleet transactions to identify fuel and non-fuel purchases.
> - Fuel products must always be the first item group.
> - A maximum of ten products is allowed in `orderData`.
> - The total amounts must equal the `amount.total`.

The below table identifies the required parameters in the `itemDetails` array in `orderData`.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `paymentSystemProductCode` | *string* | 4 | [Payment System Product Code](?path=docs/Resources/Master-Data/Payment-System-Product-Codes.md) as defined by Conexxus |
| `itemDescription` | *string* | 1024 | Name or description of item |
| `quantity` | *number* | 8 | Identifies the number of units of the product sold |
| `unitOfMeasurement` | *string* | | Identifies the [type of measurement](?path=docs/Resources/Master-Data/Unit-Measurement.md) for the product sold |
| `itemType` | *string* | 256 | Identifies the [type of the item](?path=docs/Resources/Master-Data/Order-Data.md#item-type-and-subtype) |
| `itemSubType` | *string* | 256 | Identifies the [subtype of item](?path=docs/Resources/Master-Data/Order-Data.md#item-type-and-subtype) |
| `amountComponents` | *object* | N/A | Identifies the [additional amounts](?path=docs/Resources/Master-Data/Amount-Components.md#amount-components) used in transactions, fleet transactions require `unitPrice` and `netAmount` for each item purchased |

<!-- theme: info -->
> Refer to the [order data](?path=docs/Resources/Master-Data/Order-Data.md) object for additional fields.

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Customer Details](?path=docs/Resources/Master-Data/Customer-Details.md)
- [Fleet Payments](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md)
- [Order Data](?path=docs/Resources/Master-Data/Order-Data.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Payment System Product Codes](?path=docs/Resources/Master-Data/Payment-System-Product-Codes.md)

---
