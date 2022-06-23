---
tags: [carat, commerce-hub, enterprise, card-not-present, payeezy]
---

# Commerce Hub API Required Elements

<!-- theme: danger -->
>  The following documentation is for **Payeezy** migration clients only. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

The prurpose of this page is to give developers a list of required API elements in Commerce Hub by transaction type.  _As new transation types and features are released in Commerce Hub, this table and downloadable document will be updated._  

Click [here](?path=/docs/Resources/Guides/Payeezy/Commerce_Hub_Required_API_Elements.xlsx) to download the table in Excel. _Last Updated: June 15, 2022_

| Transaction Type | without Token | with Token|
| :-------------------------------------- | :------------- |:----------------|
|**Purchase** | amount.currency <br> Amount.total <br> merchantDetails.merchantId <br> merchantDetails.terminalId <br> source.sourceType <br> transactionDetails.captureFlag  <br> <br> <br> <br> <br> | amount.currency <br> Amount.total <br> merchantDetails.merchantId <br> merchantDetails.terminalId <br> source.card.expirationMonth <br> source.card.expirationYear <br>  source.sourceType <br> source.tokenData <br> source.tokenSource <br> transactionDetails.captureFlag |
|**Pre-Authorization** | amount.currency <br> Amount.total <br> merchantDetails.merchantId <br> merchantDetails.terminalId <br> source.sourceType <br> transactionDetails.captureFlag  <br> <br> <br> <br> <br> | amount.currency <br> Amount.total <br> merchantDetails.merchantId <br> merchantDetails.terminalId <br> source.card.expirationMonth <br> source.card.expirationYear <br>  source.sourceType <br> source.tokenData <br> source.tokenSource <br> transactionDetails.captureFlag |
|**Pre-Auth Completion** | amount.currency <br> Amount.total <br> merchantDetails.merchantId <br> merchantDetails.terminalId <br> transactionId  | amount.currency <br> Amount.total <br> merchantDetails.merchantId <br> merchantDetails.terminalId <br> source.card.expirationMonth <br> source.card.expirationYear <br>  source.sourceType <br> source.tokenData <br> source.tokenSource <br> transactionId  |
|**Account Verification** | amount.currency <br> Amount.total <br> merchantDetails.merchantId <br> merchantDetails.terminalId <br> source.sourceType <br> transactionDetails.captureFlag  <br> <br> <br> <br> <br> <br> | amount.currency <br> Amount.total <br> merchantDetails.merchantId <br> merchantDetails.terminalId <br> source.card.expirationMonth <br> source.card.expirationYear <br>  source.sourceType <br> source.tokenData <br> source.tokenSource <br> transactionDetails.captureFlag <br> transactionDetails.createToken |
|**Tagged Void** |  merchantDetails.merchantId <br> merchantDetails.terminalId <br> transactionDetails.reversalReasonCode <br> transactionId <br> <br> <br> <br> <br> <br> |  merchantDetails.merchantId <br> merchantDetails.terminalId <br> source.card.expirationMonth <br> source.card.expirationYear <br>  source.sourceType <br> source.tokenData <br> source.tokenSource <br> transactionDetails.reversalReasonCode <br> transactionId |
|**Tagged Refund** | amount.currency <br> Amount.total <br> merchantDetails.merchantId <br> merchantDetails.terminalId <br> transactionId <br> <br> <br> <br> <br> <br> | amount.currency <br> Amount.total <br> merchantDetails.merchantId <br> merchantDetails.terminalId <br> source.card.expirationMonth <br> source.card.expirationYear <br>  source.sourceType <br> source.tokenData <br> source.tokenSource <br> transactionId  |

---

## See Also

- [Payeezy Merchant Migration Playbook](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedLanding.md)
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)



---
