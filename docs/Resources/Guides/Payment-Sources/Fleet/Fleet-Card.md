---
tags: [Fleet, Petroleum, WEX, Mastercard, Visa, Voyager, Comdata, Private Label, Payment Sources, Payment Card, EMV, Track]
---

# Fleet Cards

Commerce Hub supports card based payments for Visa Fleet, Mastercard Fleet, Corpay *(formerly FleetCor)*; *(Fuelman, Fleetwide, Comdata)*, Wright Express *(WEX and Over-The-Road (OTR), Next Generation Fleet Card (NGFC), Fleet One)*, Voyager, and Private Label *(proprietary)* using [*PaymentEMV*](?path=docs/In-Person/Encrypted-Payments/EMV.md), [*PaymentTrack*](?path=docs/In-Person/Encrypted-Payments/Track.md) and [device encrypted](?path=docs/In-Person/Encrypted-Payments/Manual.md) or [MUPK encrypted](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md) *PaymentCard* as the `sourceType`.

---

## Supported Transactions

| Brand | Auth Only | Sale (Capture) | Refunds | Cancels | Offline |
| ----- | :-----: | :-----: | :-----: | :-----: | :-----: |
| Fleet One | &#10004; | &#10004; | | &#10004; | |
| Comdata | &#10004; | &#10004; | | &#10004; | |
| Corpay, Fuelman, Fleetwide | &#10004; | &#10004; | | &#10004; | &#10004; |
| Mastercard | &#10004; | &#10004; | &#10004;| &#10004; | |
| Visa | &#10004; | &#10004; | &#10004;| &#10004; | |
| Voyager | &#10004; | &#10004; | &#10004;| &#10004; | &#10004; |
| Wright Express | &#10004; | &#10004; | &#10004;| &#10004; | &#10004; |
| WEX OTR, NGFC | &#10004; | &#10004; | &#10004;| &#10004; | &#10004; |

---

## Transaction Example

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful WEX [charges request](?path=docs/Resources/API-Documents/Payments/Charges.md) using *PaymentEMV*. Required fields are based on the specific [card brand prompt requirements](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Brand-Req.md). The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 66.17,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentEMV",
    "emvData": "0249F3704833A12329F1002AB34",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS....",
      "deviceType": "INGENICO",
      "keyId": "88000000022"
    },
    "card": {
      "category": "FLEET",
      "subCategory": "WEX"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001",
    "terminalLaneNumber": "01",
    "siteTypeIndicator": "RETAIL"
  },
  "customer": {
    "driverID": "0070",
    "additionalData1": "3"
  },
  "orderData": {
    "itemDetails": [
      {
        "paymentSystemProductCode": "001",
        "itemDescription": "Regular",
        "quantity": 18.385,
        "unitOfMeasurement": "GALLON",
        "itemType": "PRODUCT",
        "itemSubType": "FUEL",
        "amountComponents": {
          "unitPrice": 3.599,
          "netAmount": 66.17
        }
      }
    ]
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "ICR_RELIABLE",
    "posConditionCode": "CARD_PRESENT",
    "additionalPosInformation": {
      "attendedTerminalData": "UNATTENDED",
      "cardholderActivatedTerminalInformation": "CAT_LEVEL_2",
      "dataEntrySource": "AUTOMATED_FUEL_DISPENSING_MACHINE",
      "terminalLocation": "ON_PREMISE",
      "terminalOperator": "CUSTOMER",
      "posFeatures": {
        "pinAuthenticationCapability": "CAN_ACCEPT_PIN",
        "terminalEntryCapability": "EMV_CONTACTLESS"
      }
    }
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

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
      "total": 66.17,
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
    "sourceType": "PaymentEMV",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "02",
      "expirationYear": "2035"
    },
    "emvData": "8a0230309f36020073910a1be55403be070aa53030"
  },
  "networkDetails": {
    "systemTrace": "1400310000032032697430",
    "networkResponseStatus": "1",
    "networkResponseCode": "07"
  },
  "transactionDetails": {
    "captureFlag": true,
    "transactionCaptureType": "host",
    "retrievalReferenceNumber": "e00b14b15e0c",
    "transactionCutTimeStamp": "2024-03-08T05:00:00Z"
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "ICR_RELIABLE",
    "posConditionCode": "CARD_PRESENT",
    "additionalPosInformation": {
      "attendedTerminalData": "UNATTENDED",
      "cardholderActivatedTerminalInformation": "CAT_LEVEL_2",
      "dataEntrySource": "AUTOMATED_FUEL_DISPENSING_MACHINE",
      "terminalLocation": "ON_PREMISE",
      "terminalOperator": "CUSTOMER",
      "posFeatures": {
        "pinAuthenticationCapability": "CAN_ACCEPT_PIN",
        "terminalEntryCapability": "EMV_CONTACTLESS"
      }
    }
  },
  "orderData": {
    "itemDetails": [
      {
        "paymentSystemProductCode": "001",
        "itemDescription": "Regular",
        "quantity": 18.385,
        "unitOfMeasurement": "GALLON",
        "itemType": "PRODUCT",
        "itemSubType": "FUEL",
        "amountComponents": {
          "unitPrice": 3.599,
          "netAmount": 66.17
        }
      }
    ]
  }
}
```

<!-- type: tab-end -->

---

## Parameters

#### Request Variables

Required fields are based on the specific [card brand prompt requirements](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Brand-Req.md).

<!--
type: tab
titles: source, card, customer, itemDetails
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `sourceType` | *string* | 15 | Fleet transaction support [*PaymentEMV*](?path=docs/In-Person/Encrypted-Payments/EMV.md), [*PaymentTrack*](?path=docs/In-Person/Encrypted-Payments/Track.md), [*PaymentCard*](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md) or a previously generated [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) |
| `card` | *object* | N/A | Contains the payment card details |

<!--
type: tab
-->

The below table identifies the additional required parameters in the `card` object.

<!-- theme: warning -->
> Not all Fleet BINs are part of the Commerce Hub BIN file, the merchant will need to provide [card category and sub-category](?path=docs/Resources/Master-Data/Card.md#category-and-sub-category) based on the Dynamic Fleet Table.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `category` | *string* | 25 |  Identifies the card category as *FLEET* |
| `subCategory` | *string* | 25 | Provides the [subcategory](?path=docs/Resources/Master-Data/Card.md#category-and-sub-category) for the `category` field to identify the card type |

<!-- theme: info -->
> Refer to the [card](?path=docs/Resources/Master-Data/Card.md) object for additional fields.

<!--
type: tab
-->

The conditional parameters in the `customer` and `vehicle` objects is based on the [card brand prompt requirements](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Brand-Req.md).

<!--
type: tab
-->

<!-- theme: warning -->
> - The `paymentSystemProductCode`, `itemType` and `itemSubType` must be sent in all Fleet transactions to identify fuel and non-fuel purchases.
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
| `amountComponents` | *object* | N/A | Identifies the [additional amounts](?path=docs/Resources/Master-Data/Amount-Components.md#amount-components) used in transactions, Fleet transactions require `unitPrice` and `netAmount` for each item purchased |

<!-- theme: info -->
> Refer to the [order data](?path=docs/Resources/Master-Data/Order-Data.md) object for additional fields.

<!-- type: tab-end -->

---

## See Also

- [API explorer](../api/?type=post&path=/payments/v1/charges)
- [Customer details](?path=docs/Resources/Master-Data/Customer-Details.md)
- [Fleet payments](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md)
- [Payment requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Payment System Product Codes](?path=docs/Resources/Master-Data/Payment-System-Product-Codes.md)

---
