---
tags: [Level 2 Card, Level 3 Card, Purchase Card, Commercial Card, Business Card]
---

# Submitting Level II and III purchase card transactions

Commerce Hub can pass Level II and Level III data *(also known as enhanced data)* for business-to-business and corporate purchase card *(P-Card)* transactions. With a Level II and Level III data pass-through solution, merchants can meet card brand requirements, provide invoice-level transaction details, and qualify for lower rates.

- Level II data is used to identify purchase and tax details
- Level III data is level II data along with the `orderData` and `itemDetails`

<!-- theme: info -->
> Level II/III transactions are not supported for Discover.

---

## Submit a Level II transaction

<!--
type: tab
titles: Request, Response
-->

The example below contains the conditional [parameters](#parameters) for a successful Level II [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) using a P-Card. Required fields are based on the specific [card brand data requirements](?path=docs/Resources/Guides/Level23/Level23-Brand-Req.md). The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "amount": {
    "total": 98.44,
    "currency": "USD"
  },
  "amountComponents": {
    "subTotal": 80,
    "freightAmount": 5,
    "grossAmount": 98.44,
    "netAmount": 76,
    "taxAmounts": [
      {
        "taxAmount": 10,
        "taxExempt": false,
        "taxType": "LOCAL",
        "taxRate": 0.21
      },
      {
        "taxAmount": 7.44,
        "taxExempt": false,
        "taxType": "VAT",
        "taxRate": 3.52
      }
    ],
    "priceAdjustments": [
      {
        "adjustmentType": "DISCOUNT",
        "adjustmentRate": "5",
        "adjustmentAmount": "4"
      }
    ]
  },
  "orderData": {
    "orderDate": "08-17-2023",
    "supplierVatRegistrationNumber": "885525845"
  },
  "billingAddress": {
    "firstName": "Jane",
    "lastName": "Doe",
    "phone": [
      {
        "phoneNumber": "123-123-1234"
      }
    ],
    "address": {
      "street": "123 Main St.",
      "houseNumberOrName": "Apt 1",
      "city": "Atlanta",
      "stateOrProvince": "GA",
      "postalCode": "30301",
      "country": "USA"
    }
  },
  "shippingAddress": {
    "shipToEmail": "customer@domain.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": [
      {
        "phoneNumber": "123-123-1234"
      }
    ],
    "address": {
      "street": "123 West St.",
      "houseNumberOrName": "Apt 123",
      "city": "Atlanta",
      "stateOrProvince": "GA",
      "postalCode": "30301",
      "country": "USA"
    }
  },
  "shipperAddress": {
    "firstName": "John",
    "lastName": "Smith",
    "shipFromEmail": "shipper@domain.com",
    "phone": [
      {
        "phoneNumber": "123-123-1234"
      }
    ],
    "address": {
      "street": "123 Shipping Way",
      "houseNumberOrName": "Building A",
      "city": "Atlanta",
      "stateOrProvince": "GA",
      "postalCode": "30338",
      "country": "USA"
    }
  },
  "customer": {
    "merchantCustomerId": "88558548",
    "taxId": "123121234",
    "email": "customer@domain.com",
    "firstName": "Jane",
    "lastName": "Doe",
    "phone": [
      {
        "phoneNumber": "123-123-1234"
      }
    ]
  },
  "transactionDetails": {
    "captureFlag": true,
    "merchantOrderId": "397813268232121",
    "merchantTransactionId": "232223325"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001",
    "taxId": "123121234",
    "vatRegistrationNumber": "123456789"
  }
}
```

<!--
type: tab
-->

Example of a Charges API *(201: Created)* response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "SECURE_ECOM"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035"
    }
  },
  "transactionProcessingDetails": {
    "orderId": "RKOrdID-525133851837",
    "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
    "clientRequestId": "4345791",
    "transactionId": "84356531338"
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 98.44,
      "currency": "USD"
    }
  },
  "processorResponseDetails": {
    "approvalStatus": "APPROVED",
    "approvalCode": "OK5882",
    "schemeTransactionId": "0225MCC625628",
    "processor": "FISERV",
    "host": "NASHVILLE",
    "responseCode": "000",
    "responseMessage": "APPROVAL",
    "hostResponseCode": "00",
    "hostResponseMessage": "APPROVAL",
    "localTimestamp": "2021.02.25 14:14:38 (CET)",
    "bankAssociationDetails": {
      "transactionTimestamp": "2021.02.25 14:14:38 (CET)"
    }
  },
  "transactionDetails": {
    "merchantTransactionId": "RKTransID-768086381518"
  }
}
```

<!-- type: tab-end -->

---

## Submit a Level III transaction

<!--
type: tab
titles: Request, Response
-->

The example below contains the conditional [parameters](#parameters) for a successful Level III [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) using a P-Card. Required fields are based on the specific [card brand data requirements](?path=docs/Resources/Guides/Level23/Level23-Brand-Req.md). The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "amount": {
    "total": 98.44,
    "currency": "USD"
  },
  "amountComponents": {
    "subTotal": 80,
    "freightAmount": 5,
    "grossAmount": 98.44,
    "netAmount": 76,
    "taxAmounts": [
      {
        "taxAmount": 10,
        "taxExempt": false,
        "taxType": "LOCAL",
        "taxRate": 0.21
      },
      {
        "taxAmount": 7.44,
        "taxExempt": false,
        "taxType": "VAT",
        "taxRate": 3.52
      }
    ],
    "priceAdjustments": [
      {
        "adjustmentType": "DISCOUNT",
        "adjustmentRate": "5",
        "adjustmentAmount": "4"
      }
    ]
  },
  "orderData": {
    "orderDate": "08-17-2023",
    "itemCount": 3,
    "supplierVatRegistrationNumber": "885525845",
    "itemDetails": [
      {
        "commodityCode": "66996633252",
        "itemDescription": "Tablet 20.8 inch Black",
        "itemNumber": 1,
        "productUPC": "885909533046",
        "unitOfMeasurement": "NMB",
        "quantity": 3,
        "amountComponents": {
          "subTotal": 300,
          "freightAmount": 15,
          "grossAmount": 360,
          "unitPrice": 100,
          "netAmount": 285,
          "taxAmounts": [
            {
              "taxType": "LOCAL",
              "taxAmount": 3,
              "taxRate": 1,
              "taxExempt": false
            },
            {
              "taxType": "DUTY",
              "taxAmount": 21,
              "taxRate": 7,
              "taxExempt": false
            },
            {
              "taxType": "VAT",
              "taxAmount": 36,
              "taxRate": 12,
              "taxExempt": false
            }
          ],
          "priceAdjustments": [
            {
              "adjustmentType": "DISCOUNT",
              "adjustmentRate": 5,
              "adjustmentAmount": 15
            }
          ]
        }
      },
      {
        "commodityCode": "9966552000085",
        "itemDescription": "Laptop 15.3 Core i7",
        "itemNumber": 2,
        "productUPC": "884116392651",
        "unitOfMeasurement": "NMB",
        "quantity": 1,
        "amountComponents": {
          "subTotal": 80,
          "freightAmount": 8,
          "grossAmount": 105.2,
          "unitPrice": 80,
          "netAmount": 72,
          "taxAmounts": [
            {
              "taxType": "LOCAL",
              "taxAmount": 7.2,
              "taxRate": 10,
              "taxExempt": false
            },
            {
              "taxType": "FEDERAL",
              "taxAmount": 3.6,
              "taxRate": 5,
              "taxExempt": false
            },
            {
              "taxType": "CITY",
              "taxAmount": 14.4,
              "taxRate": 20,
              "taxExempt": false
            }
          ],
          "priceAdjustments": [
            {
              "adjustmentType": "DISCOUNT",
              "adjustmentRate": 10,
              "adjustmentAmount": 8
            }
          ]
        }
      },
      {
        "commodityCode": "4855288754210058",
        "itemDescription": "Candy 128 Mega Packs",
        "itemNumber": 3,
        "productUPC": "022000279705",
        "unitOfMeasurement": "NMB",
        "quantity": 50,
        "amountComponents": {
          "subTotal": 400,
          "freightAmount": 16,
          "grossAmount": 456.8,
          "unitPrice": 8,
          "netAmount": 380,
          "taxAmounts": [
            {
              "taxType": "LOCAL",
              "taxAmount": 26.6,
              "taxRate": 7,
              "taxExempt": false
            },
            {
              "taxType": "OTHER",
              "taxAmount": 19,
              "taxRate": 5,
              "taxExempt": false
            },
            {
              "taxType": "VAT",
              "taxAmount": 11.4,
              "taxRate": 3,
              "taxExempt": false
            },
            {
              "taxType": "MUNICIPAL",
              "taxAmount": 3.8,
              "taxRate": 1,
              "taxExempt": false
            }
          ],
          "priceAdjustments": [
            {
              "adjustmentType": "DISCOUNT",
              "adjustmentRate": 5,
              "adjustmentAmount": 20
            }
          ]
        }
      }
    ]
  },
  "billingAddress": {
    "firstName": "Jane",
    "lastName": "Doe",
    "phone": [
      {
        "phoneNumber": "123-123-1234"
      }
    ],
    "address": {
      "street": "123 Main St.",
      "houseNumberOrName": "Apt 1",
      "city": "Atlanta",
      "stateOrProvince": "GA",
      "postalCode": "30301",
      "country": "USA"
    }
  },
  "shippingAddress": {
    "shipToEmail": "customer@domain.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": [
      {
        "phoneNumber": "123-123-1234"
      }
    ],
    "address": {
      "street": "123 West St.",
      "houseNumberOrName": "Apt 123",
      "city": "Atlanta",
      "stateOrProvince": "GA",
      "postalCode": "30301",
      "country": "USA"
    }
  },
  "shipperAddress": {
    "firstName": "John",
    "lastName": "Smith",
    "shipFromEmail": "shipper@domain.com",
    "phone": [
      {
        "phoneNumber": "123-123-1234"
      }
    ],
    "address": {
      "street": "123 Shipping Way",
      "houseNumberOrName": "Building A",
      "city": "Atlanta",
      "stateOrProvince": "GA",
      "postalCode": "30338",
      "country": "USA"
    }
  },
  "customer": {
    "merchantCustomerId": "88558548",
    "taxId": "123121234",
    "email": "customer@domain.com",
    "firstName": "Jane",
    "lastName": "Doe",
    "phone": [
      {
        "phoneNumber": "123-123-1234"
      }
    ]
  },
  "transactionDetails": {
    "captureFlag": true,
    "merchantOrderId": "397813268232121",
    "merchantTransactionId": "232223325"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001",
    "taxId": "123121234",
    "vatRegistrationNumber": "123456789"
  }
}
```

<!--
type: tab
-->

Example of a Charges API *(201: Created)* response.

<!-- theme: info -->
> See [response handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "SECURE_ECOM"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035"
    }
  },
  "transactionProcessingDetails": {
    "orderId": "RKOrdID-525133851837",
    "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
    "clientRequestId": "4345791",
    "transactionId": "84356531338"
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    }
  },
  "processorResponseDetails": {
    "approvalStatus": "APPROVED",
    "approvalCode": "OK5882",
    "schemeTransactionId": "0225MCC625628",
    "processor": "FISERV",
    "host": "NASHVILLE",
    "responseCode": "000",
    "responseMessage": "APPROVAL",
    "hostResponseCode": "00",
    "hostResponseMessage": "APPROVAL",
    "localTimestamp": "2021.02.25 14:14:38 (CET)",
    "bankAssociationDetails": {
      "transactionTimestamp": "2021.02.25 14:14:38 (CET)"
    }
  },
  "transactionDetails": {
    "merchantTransactionId": "RKTransID-768086381518"
  }
}
```

<!-- type: tab-end -->

---

## Parameters

### Request variables

Required fields are based on the specific [card brand data requirements](?path=docs/Resources/Guides/Level23/Level23-Brand-Req.md).

<!-- theme: warning -->
> Sending `taxAmounts` and `merchantOrderId` is required to identify a Level II/III transaction with Commerce Hub.

<!--
type: tab
titles: orderData, itemDetails, amountComponents, merchantDetails, transactionDetails, customer
-->

The below table identifies the [conditional](?path=docs/Resources/Guides/Level23/Level23-Brand-Req.md) parameters in the `orderData` object.

| Variable | Type| Max Length | Description |
|---------|-------|----------|---------|
| `orderDate` | *string* | 10 | Date that goods and services are ordered. YYYY-MM-DD format |
| `itemCount` | *integer* | 3 | Total number of items included in the purchase |
| `supplierVatRegistrationNumber` | *string* | 15 | Supplier VAT registration number |
| `itemDetails` | *array* | N/A | List of all item details including categories along with amount and quantity |

<!--
type: tab
-->

The below table identifies the [conditional](?path=docs/Resources/Guides/Level23/Level23-Brand-Req.md) parameters in the `itemDetails` object.

| Variable | Type| Max Length | Description |
|---------|-------|------------|---------|
| `itemNumber` | *number* | 3 | Identifies the line item number out of total items sold |
| `commodityCode` | *string* | 256 | Identifies the [commodity code](?path=docs/Resources/Master-Data/Commodity-Codes.md) of the products sold |
| `itemDescription` | *string* | 1024 | Name or description of item |
| `productUPC` | *string* | 12 | Universal Product Code identifier used for retail products worldwide |
| `quantity` | *number* | 8 | Identifies the number of units of the product sold |
| `unitOfMeasurement` | *string* | | Identifies the [type of measurement](?path=docs/Resources/Master-Data/Unit-Measurement.md) for the product sold |
| `amountComponents` | *object* | N/A | Used to define the required [line item amounts](?path=docs/Resources/Master-Data/Amount-Components.md) as part of the request |

<!--
type: tab
-->

The below table identifies the [conditional](?path=docs/Resources/Guides/Level23/Level23-Brand-Req.md) parameters in the `amountComponents` object.

| Variable | Type | Max Length | Description |
| --------- | --- | ------ | -------------- |
| `unitPrice` | *number* | 18,3 | Identifies the price per unit of measure for the product sold. This should exclude any taxes or charges |
| `subTotal` | *number* | 18,3 | The total amount before any other costs, discounts, fees, or taxes |
| `freightAmount` | *number* | 18,3 | Freight amount applied |
| `priceAdjustments` | *array* | N/A | Total [adjustment](?path=docs/Resources/Master-Data/Price-Adjustments.md) amounts and details applied to the purchase |
| `netAmount` | *number* | 18,3 | The pre-tax cost of an item, minus any discounts or promotions |
| `taxAmounts` | *array* | N/A | Total [tax](?path=docs/Resources/Master-Data/Tax-Types.md) amounts and details applied to the purchase |
| `grossAmount` | *number* | 18,3 | The total cost of an item, including the unit price and any other costs, discounts, fees, or taxes |

<!--
type: tab
-->

The below table identifies the [conditional](?path=docs/Resources/Guides/Level23/Level23-Brand-Req.md) parameters in the `merchantDetails` object.

| Variable | Type| Max Length | Description |
|---------|-------|------|---------|
| `taxId` | *string* | 15 | The tax ID in the US or Business Number *(BNN)* in Canada |
| `vatRegistrationNumber` | *string* | 64  | Merchant's VAT registration number |

<!--
type: tab
-->

The below table identifies the [conditional](?path=docs/Resources/Guides/Level23/Level23-Brand-Req.md) parameters in the `transactionDetails` object.

| Variable | Type| Max Length | Description |
|---------|-------|----------|---------|
| `merchantOrderId` | *string* | 128 | Merchant order ID, customer reference number or purchase order number *(PO Number)* |
| `merchantInvoiceNumber` | *string* | 12 | Merchant invoice number or reference number |

<!--
type: tab
-->

The below table identifies the [conditional](?path=docs/Resources/Guides/Level23/Level23-Brand-Req.md) parameters in the `customer` object.

| Variable | Type| Max Length | Description |
|---------|------|---------|---------|
| `merchantCustomerId` | *string* | 1024 | Merchant's unique customer identifier |
| `taxId` | *string* |  | Customer tax ID number |

<!-- type: tab-end -->

---

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Card Brand Requirements](?path=docs/Resources/Guides/Level23/Level23-Brand-Req.md)
- [Commodity Codes](?path=docs/Resources/Guides/Level23/Commodity-Codes.md)
- [Tax Types](?path=docs/Resources/Master-Data/Tax-Types.md)
- [Unit of Measurement](?path=docs/Resources/Master-Data/Commodity-Codes.md)

---
