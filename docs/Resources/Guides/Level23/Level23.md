---
tags: [Level 2 Card, Level 3 Card, Mastercard, Visa, American Express, Discover, Purchase Card, Commercial Card, Business Card]
---

# Level II and III Data

<!-- theme: danger -->
> We are enhancing the Commerce Hub to include Level II and III purchase card support and the documents related to the features will be released soon.

Commerce Hub can pass Level II and III data *(also knows as Enhanced Data)* with business-to-business corporate and purchase card transactions. With a Level II and III data pass through solution, merchant's can meet card brand requirements, provide invoice-level transaction details and qualify for lower rates.

## Request Variables

Level II and III transactions require the `level23Data` object, and level III requires line `itemDetails` object. Required fields are based on the specific card brand [data requirements](?path=docs/Resources/Guides/Level23/Level23-Brand-Req.md).

<!--
type: tab
titles: level23Data, itemDetails, JSON Example
-->

The below table identifies the parameters in the `level23Data` object.

| Variable | Type| Maximum Length | Description |
|---------|:----------:|:----------------:|---------|
|`customerReference` | *string* | 128 | Purchase order number (PO Number), mapped from `merchantOrderId` in `transactionDetails` |
|`totalTaxAmount` | *number* | 18,3 | Total tax amount |
|`freightAmount` | *number* | 18,3 | Total amount of freight |
|`totalDiscountAmount` | *number* | 18,3 | Total discount amount |
|`dutyAmount` | *number* | 18,3 | Duty amount charged |
|`destinationPostalCode` | *string* | | Postal Code where goods will be delivered |
|`destinationCountryCode` | *string* | | [Country code](?path=docs/Resources/Master-Data/Country-Code.md) where goods will be delivered |
|`orderDate` | *string* | 10 | Date of order in YYYY-MM-DD format |
|`shipFromPostalCode` | *string* | | Postal code where goods are being shipped from |
|`merchantTaxId` | *string* | | Merchant tax ID |
|`merchantInvoiceNumber` | *string* | | Merchant invoice number |
|`taxRate` | *number* | 3 | Tax rate for the amount purchased |
|`supplierVatRegistrationNumber` | *string* | | Supplier VAT registration number |
|`freightRate` | *number* | 3 | Freight rate percent |
|`totalDiscountRate` | *number* | 3 | Discount rate percent |
|`totalLineItemTax` | *number* | 18,3 | Line item tax |
| `itemDetails` | *array* | NA | Array containing the details of line items sold |

<!--
type: tab
-->

The below table identifies the parameters in the `itemDetails` object.

| Variable | Type| Maximum Length | Description |
|---------|:----------:|:----------------:|---------|
|`commodityCode` | *string* |  | [Code](?path=docs/Resources/Guides/Level23/Commodity-Codes.md) for the commodity |
|`itemDescription` | *string* | | Description of the item being purchased |
|`productCode` | *string* | | Code for the product being purchased |
|`unitPrice` | *string* | 18,3 | Price for the unit being purchased |
|`quantity` | *string* | | Amount of the product being purchased |
|`unitOfMeasurement` | *string* | | [Unit of measurment](?path=docs/Resources/Guides/Level23/Unit-Measurement.md) for the product purchased |
|`totalAmount` | *number* | 18,3 | Total before tax and discounts |
|`discountIndicator` | *boolean* | NA | Indicates the product being purchased has a discount |
|`discountRate` | *number* | 3 | Discout rate percent |
|`discountAmount` | *number* | 18,3 | Discount amount on the purchased product |
|`taxIndicator` | *boolean* | NA | Indicates tax is being charged for the purchased product |
|`lineItemTaxRate` | *number* | 3 | Tax rate precent |
|`taxType` | *string* | | [Tax type](?path=docs/Resources/Guides/Level23/Tax-Types.md) for the product being purchased |
|`lineItemTax` | *number* | 18,3| Tax aount for the line item |
|`vatRate` | *number* | 3 | Value added tax (VAT) rate percent |
|`vatAmount` | *number* | 18,3 | Value added tax (VAT) amount |
|`lineItemTotal` | *number* | 18,3 | Line item total after tax and discounts |

<!--
type: tab
-->

JSON string format for `leve23Data`:

```json
{
  "leve23Data": {
    "totalTaxAmount": "3.00",
    "freightAmount": "9.00",
    "totalDiscountAmount": "2.00",
    "dutyAmount": "5.00",
    "destinationPostalCode": "12875",
    "destinationCountryCode": "ABC",
    "orderDate": "2023-03-27",
    "shipFromPostalCode": "55555",
    "merchantTaxId": "1112233333",
    "merchantInvoiceNumber": "1024245874",
    "taxRate": "5",
    "supplierVatRegistrationNumber": "15574",
    "freightRate": "1",
    "totalDiscountRate": "1",
    "totalLineItemTax": "4.50",
    "itemDetails": [
      {
        "commodityCode": "12345",
        "itemDescription": "Shoes",
        "productCode": "2035",
        "unitPrice": "10.00",
        "quantity": "2",
        "unitOfMeasurement": "EACH",
        "totalAmount": "20.00",
        "discountIndicator": "true",
        "discountRate": "10",
        "discountAmount": "2.00",
        "taxIndicator": "true",
        "lineItemTaxRate": "5",
        "taxType": "SALES",
        "vatRate": "20",
        "vatAmount": "3.60",
        "lineItemTotal": "22.50"
      }
    ]
  }
}
```

<!-- type: tab-end -->

## Payload Example 

<!--
type: tab
titles: Request, Response
-->

##### Example of a charge payload request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "level23",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035"
    }
  },
  "leve23Data": {
    "totalTaxAmount": "3.00",
    "freightAmount": "9.00",
    "totalDiscountAmount": "2.00",
    "dutyAmount": "5.00",
    "destinationPostalCode": "12875",
    "destinationCountryCode": "ABC",
    "orderDate": "2023-03-27",
    "shipFromPostalCode": "55555",
    "merchantTaxId": "1112233333",
    "merchantInvoiceNumber": "1024245874",
    "taxRate": "5",
    "supplierVatRegistrationNumber": "15574",
    "freightRate": "1",
    "totalDiscountRate": "1",
    "totalLineItemTax": "4.50",
    "itemDetails": [
      {
        "commodityCode": "12345",
        "itemDescription": "Shoes",
        "productCode": "2035",
        "unitPrice": "10.00",
        "quantity": "2",
        "unitOfMeasurement": "EACH",
        "totalAmount": "20.00",
        "discountIndicator": "true",
        "discountRate": "10",
        "discountAmount": "2.00",
        "taxIndicator": "true",
        "lineItemTaxRate": "5",
        "taxType": "SALES",
        "vatRate": "20",
        "vatAmount": "3.60",
        "lineItemTotal": "22.50"
      }
    ]
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "merchantDetails": {
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

##### Example of a charge (201: Created) response.

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
      "total": "12.04",
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

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Card Brand Requirements](?path=docs/Resources/Guides/Level23/Level23-Brand-Req.md)
- [Commodity Codes](?path=docs/Resources/Guides/Level23/Commodity-Codes.md)
- [Tax Types](?path=docs/Resources/Guides/Level23/Tax-Types.md)
- [Unit of Measurement](?path=docs/Resources/Guides/Level23/Unit-Measurement.md)

---
