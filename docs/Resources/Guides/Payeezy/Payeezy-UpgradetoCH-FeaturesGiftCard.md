---

tags: [carat, commerce-hub, enterprise, card-not-present, payeezy, gift-card, prepaid]

---

# Gift Card/Prepaid

<!-- theme: danger -->
>  The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.



## Transaction Types

|Transaction Type| Payeezy Element Values | Commerce Hub Endpoint |
| -------- | ------------- | -------------------------------- | 
|Authorization|transaction_type = 01 <br> credit_card_type = gift|/payments/v1/charges <br> `captureFlag` = "false” <br> `card.category` = "GIFT" <br> `card.subcategory` = "VALUELINK"|
|Purchase|transaction_type = 00 <br> credit_card_type = gift|/payments/v1/charges <br> `captureFlag` = "true” <br> `card.category` = "GIFT" <br> `card.subcategory` = "VALUELINK"|
|Cash Out|transaction_type = 83 <br> credit_card_type = gift|/payments-vas/v1/accounts/gift-cards|
|Activation|transaction_type = 85 <br> credit_card_type = gift|/payments-vas/v1/accounts/gift-cards|
|Balance Inquiry|transaction_type = 86 <br> credit_card_type = gift|/accounts/v1/balance-inquiry|
|Reload|transaction_type = 88 <br> credit_card_type = gift|/payments-vas/v1/accounts/gift-cards|

## Element Mapping

|Request/Response| Payeezy Gateway Direct XML Element | Payeezy Gateway Direct JSON Element | Payeezy Developer API Element |Commerce Hub Element |
| -------- | ------------- | -------------- | -------------- | -------------- |
|Request|`SCV`|`scv`|`scv`|`target.card.securityCode` <br> `additionalDataCommon.additionalData.securityCodeType` where `securityCodeType` = "SCV"|
|Request|`EAN`|`ean`|`ean`|`target.card.securityCode` <br> `additionalDataCommon.additionalData.securityCodeType` where `securityCodeType` = "EAN"|
|Request|`Reference_3`|`reference_3`|`reference_3`|`target.card.securityCode` <br> `additionalDataCommon.additionalData.securityCodeType` where `securityCodeType` = "FAC"|
|Request|`ForeignAccessCode`|foreign_access_code|N/A|`target.card.securityCode` <br> `additionalDataCommon.additionalData.securityCodeType` where `securityCodeType` = "FAC"|
|Response|`TransactionResult.CAVV`|`cavv_response`|N/A|`networkDetails.cavvResponseCode`|

Additional information on 3DS integration in Commerce Hub can be found [here](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Request.md).

---

## See Also

- [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)

---
