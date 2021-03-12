# Payment-Faciliator

## Overview

Small merchants that don't have enough infrastructure to start accepting card payments gets onboarded under Payment Facilitator (PayFac) as a sub-merchant. Sub-merchant component is used to pass the information of those merchants. 


## Sub-Merchant

| Variable | Type | Length | Description/Values |
| --------- | --- | ------ | -------------- |
| `id` | *string* |  | This field contains a sub-merchant ID used by Payment Facilitators. |
| `name` | *string* |  | This field contains the merchant name/product/service to be used in lieu of the Payment Facilitator name. |
| `street` | *string* |  | This field contains the merchant street address to be used in lieu of the Payment Facilitator. |
| `state` | *string* |  | This field contains the merchant city to be used in lieu of the Payment Facilitator. |
| `city` | *string* |  | This field contains the merchant state to be used in lieu of the Payment Facilitator. |
| `postalCode` | *string* |  | This field contains the merchant postal code to be used in lieu of the Payment Facilitator. |
| `country` | *string* |  | This field contains the merchant country to be used in lieu of the Payment Facilitator. |
| `taxId` | *string* |  | This field should contain the Tax ID collected by the merchant for this transaction. |

