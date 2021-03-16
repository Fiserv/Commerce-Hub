# Payment-Faciliator

## Overview

A payment facilitator is a merchant service provider that simplifies the merchant account enrollment process. Small merchants that don't have enough infrastructure to start accepting card payments, gets onboarded under payment facilitator as a sub-merchant. Payment facilitator have removed the friction in the application and onboarding process by simplifying it and tailoring it to the businesses they serve, enabling those businesses to begin accepting card payments more quickly.


For the transaction acquired at sub-merchant, the transaction request from payment facilitator should have the merchant information as in below format.

##### Component : subMerchant

Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
|`id` | *string* |  | This field contains a sub-merchant ID used by Payment Facilitators. |
|`name` | *string* |  | This field contains the merchant name/product/service to be used in lieu of the Payment Facilitator name. |
|`street` | *string* |  | This field contains the merchant street address to be used in lieu of the Payment Facilitator. |
|`city` | *string* |  | This field contains the merchant city to be used in lieu of the Payment Facilitator. |
|`state` | *string* |  | This field contains the merchant state to be used in lieu of the Payment Facilitator. |
|`postal` | *string* |  | This field contains the merchant postal code to be used in lieu of the Payment Facilitator. |
|`country` | *string* |  | This field contains the merchant country to be used in lieu of the Payment Facilitator. |
|`taxid` | *string* |  | This field should contain the Tax ID collected by the merchant for this transaction. |
