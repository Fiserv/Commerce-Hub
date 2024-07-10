---
tags: [Fleet, Petroleum, WEX, Mastercard, Visa, Voyager, Comdata, Private Label, Payment Sources ]
---

# Fleet Brand Requirements

Fleet brands require specific data requirements when processing a [Fleet transactions](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md). The device or application must be able to read a Dynamic Card Table downloaded from the fleet brand or payment processor. In the case where an a table download is not supported, the device or application must provide a method to determine whether specific transactions are allowed.

<!-- theme: info -->
> The third-party vendor or merchant is required for managing the table file download. Please contact your account representative for more details.

---

## Purchase Restrictions

When procssing a transaction to Commerce Hub the limits for each allowed product category for the payment instrument will be returned in the authorization response. Any product category not included in the authorization response is considered not allowed. In offline processing mode, the device must make the determination about what products are allowed for offline purchase based on settings in the Dynamic Table.

---

## Device Prompts

The device or application must be able to prompt for specific customer or vehicle details for all Fleet transactions based on the Dynamic Card Table. The device or application must prompt for the data appropriate to the transaction it will be performing, and provide the details in the respective object. Prompts flagged as optional do not have to be offered.

| Object | Field | Mastercard | Visa | Description |
| ------ | ------ | :-----: | :------: | -----|
| `amountComponants::priceAdjustments` | all | &#10004; | &#10004; | Total [discount](?path=docs/Resources/Master-Data/Price-Adjustments.md) amounts and details applied to the purchase |
| `amountComponants` | `freightAmount` | | &#10004; | Freight amount applied |
| `orderData` | `itemCount` | &#10004; | &#10004; | Total number of items included in the purchase |
| `orderData::itemDetails` | `itemNumber` | &#10004; | &#10004; | Identifies the line item number out of total items sold |
| `orderData::itemDetails` | `itemDescription` | &#10004; | &#10004; | Name or description of item |
| `orderData::itemDetails` | `commodityCode` | &#10004; | &#10004; | Identifies the [commodity code](?path=docs/Resources/Master-Data/Commodity-Codes.md) of the products sold |
| `orderData::itemDetails` | `productUPC` | &#10004; | &#10004; | Universal Product Code identifier used for retail products worldwide |
| `orderData::itemDetails` | `unitOfMeasurement` | &#10004; | &#10004; | Identifies the [type of measurement](?path=docs/Resources/Master-Data/Unit-Measurement.md) for the product sold |
| `orderData::itemDetails` | `quantity` |  &#10004; | &#10004; | Identifies the number of units of the product sold |
| `orderData::itemDetails::amountComponents` | `unitPrice` | | &#10004; | Identifies the price per unit of measure for the product sold. This should exclude any taxes or charges |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Customer Details](?path=docs/Resources/Master-Data/Customer-Details.md)
- [Fleet Payments](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md)
- [Order Data](?path=docs/Resources/Master-Data/Order-Data.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment System Product Codes](?path=docs/Resources/Master-Data/Payment-System-Product-Codes.md)
- [Vehicle Details](?path=docs/Resources/Master-Data/Vehicle-Details.md)

---
