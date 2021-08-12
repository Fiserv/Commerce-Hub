---
tags: [carat, commerce-hub, enterprise, level-2-card, level-3-card, mastercard, visa, american-express, discover, purchase-card, commercial-card, business-card]
---

# Level II and III Data

<!-- theme: danger -->
> We are enhancing the Commerce Hub to include Level II and III purchase card support and the documents related to the features will be released soon.

Commerce Hub can pass Level II and III data (also knows as Enhanced Data) with business-to-business corporate and purchase card transactions. With a Level II and III data pass through solution, merchant's can meet card brand requirements, provide invoice-level transaction details and qualify for lower rates.

## Request Variables

Level II and III transactions require the `level23Data` object, and level III requires line item details in the `level23DataItems` object based on card brand [data requirements](?path=docs/Resources/Guides/Level23/Level23-Brand-Req.md).

<!--
type: tab
title: level23Data
-->


The below table identifies the parameters in the `level23Data` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`customerReference` | *string* | 128 | Purchase order number (PO Number), mapped from `merchantOrderId` in `transactionDetails` |
|`totalTaxAmount` | *number* | 18,3 | Total tax amount |
|`freightAmount` | *number* | 18,3 | Total amount of freight |
|`totalDiscountAmount` | *number* | 18,3 | Total discount amount |
|`dutyAmount` | *number* | 18,3 | Duty amount charged |
|`destinationPostalCode` | *string* | | Postal Code where goods will be delivered |
|`destinationCountryCode` | *string* | | Country code where goods will be delivered |
|`orderDate` | *string* | | Date of order in YYYY-MM-DD format |
|`shipFromPostalCode` | *string* | | Postal code where goods are being shipped from |
|`merchantTaxId` | *string* | | Merchant tax ID |
|`merchantInvoiceNumber` | *string* | | Merchant invoice number |
|`taxRate` | *string* | | Tax rate for the amount purchased |
|`supplierVatRegistrationNumber` | *string* | | Supplier VAT registration number |
|`freightRate` | *string* | | Freight rate percent |
|`totalDiscountRate` | *string* | | Discount rate percent |
|`totalLineItemTax` | *string* | | Line item tax |


<!--
type: tab
title: level23DataItems
-->


The below table identifies the parameters in the `level23DataItems` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`commodityCode` | *string* |  | Code for the commodity |
|`itemDescription` | *string* | | Description of the item being purchased |
|`productCode` | *string* | | Code for the product being purchased |
|`unitPrice` | *string* | | Price for the unit being purchased |
|`quantity` | *string* | | Amount of the product being purchased |
|`unitOfMeasurement` | *string* | | Unit of measurment for the product purchased |
|`totalAmount` | *number* | 18,3 | Total amount purchased |
|`discountIndicator` | *string* | | Discout code for the product being purchased |
|`discountRate` | *string* | | Discout rate percent |
|`discountAmount` | *number* | 18,3 | Discount amount on the purchased product |
|`taxIndicator` | *string* | | Tax code for purchased product |
|`lineItemTaxRate` | *string* | | Discout code for the product being purchased |
|`taxType` | *string* | | Discout code for the product being purchased |
|`lineItemTax` | *string* | | Discout code for the product being purchased |
|`vatRate` | *string* | | Value added tax (VAT) rate percent |
|`vatAmount` | *number* | 18,3 | Value added tax (VAT) amount |
|`lineItemTotal` | *string* | | Line item total after tax and discounts |
|`totalAmount` | *number* | 18,3 | Total amount purchased |

<!--
type: tab
title: JSON Example
-->

JSON string format for `leve23Data`:

```json
{
   "card":{
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123",
      "securityCodeIndicator": "PROVIDED"
   }
}
```

<!-- type: tab-end -->



## Payload Example 

<!--
type: tab
title: Request
-->

##### Example of a charge payload request.

```json
{
   "amount":{
      "total": "12.04",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035"
      }
   },
   "transactionDetails":{
      "captureFlag": true
   }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
title: Response
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [HTTP Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.

```json
{
   "gatewayResponse":{
      "transactionType":"CHARGE",
      "transactionState":"AUTHORIZED",
      "transactionOrigin":"SECURE_ECOM"
   },
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "cardData":"4005550000000019",
         "expirationMonth":"02",
         "expirationYear":"2035"
      }
   },
   "transactionProcessingDetails":{
      "orderId":"RKOrdID-525133851837",
      "apiTraceId":"362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId":"4345791",
      "transactionId":"84356531338"
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total":"12.04",
         "currency":"USD"
      }
   },
   "processorResponseDetails":{
      "approvalStatus":"APPROVED",
      "approvalCode":"OK5882",
      "schemeTransactionId":"0225MCC625628",
      "processor":"fiserv",
      "responseCode":"000000",
      "responseMessage":"APPROVAL",
      "hostResponseCode":"00",
      "hostResponseMessage":"APPROVAL",
      "localTimestamp":"2021.02.25 14:14:38 (CET)",
      "bankAssociationDetails":{
         "transactionTimestamp":"2021.02.25 14:14:38 (CET)"
      }
   },
   "transactionDetails":{
      "merchantTransactionId":"RKTransID-768086381518"
   }
}
```

<!-- type: tab-end -->



## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](path?=docs/Resources/API-Documents/Payments/Charges.md)
- [Commodity Codes](path?=docs/Resources/Guides/Level23/Commodity-Codes.md)
- [Tax Types](path?=docs/Resources/Guides/Level23/Tax-Types.md)


---

