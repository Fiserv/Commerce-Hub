# Amount Component

## Overview

AmountComponents is used for the transactions where additional amount such as tax, surcharge, fees has to be the part of request which of the particular transactions.

## Amount Components

| Variable | Type | Length | Description/Values |
| --------- | --- | ------ | -------------- |
| `subTotal` | *number* | 12 | Subtotal amount. |
| `vatAmount` | *number* | 12 | This field represents the Level 2 VAT (Value Added Tax) or Alternate Tax amount applied at the order level. |
| `localTax` | *number* | 12 | Local sales tax amount included in a transaction. |
| `shippingAmount` | *number* | 12 | Shipping amount included in a transaction. |
| `surcharge` | *number* | 12 | Identifies the transaction’s surcharge amount as an extra fee, tax, or cost added to the already existent cost of a good or service. Note: Not all processors and acquirers allow surcharge fees. For more information, please contact your Account Representative. |
| `ITBISTaxAmount` | *number* | 12 | Tax on the Transfer of Industrialised Goods and Services (ITBIS) tax amount. |
| `convenienceFee` | *number* | 12 | Optional convenience fee for payments made through an alternative channel, rather than by cash, check, or ACH. Note: Not all processors and acquirers allow surcharge fees. For more information, please contact your Account Representative. |