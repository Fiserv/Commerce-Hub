---

tags: [carat, commerce-hub, enterprise, api-required-elements, card-not-present, payeezy]

---

# Commerce Hub API Required Elements

<!-- theme: danger -->
> The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

The purpose of this page is to give developers a list of required API elements in Commerce Hub by transaction type.  _As new transation types and features are released in Commerce Hub, this table and downloadable document will be updated._  

Click [here](https://github.com/Fiserv/Commerce-Hub/raw/Payeezy-Prod/assets/doc-files/Commerce_Hub_Required_API_Elements.xlsx) to download the table in Excel.\
_Last Updated: June 15, 2022_

| Transaction Type | without Transarmor Token | with Transarmor Token|
| :-------------------------------------- | :------------- |:----------------|
|**Purchase** | amount.currency, Amount.total, merchantDetails.merchantId, merchantDetails.terminalId, source.sourceType, transactionDetails.captureFlag  | amount.currency, Amount.total, merchantDetails.merchantId, merchantDetails.terminalId, source.card.expirationMonth, source.card.expirationYear, source.sourceType, source.tokenData, source.tokenSource, transactionDetails.captureFlag |
|**Pre-Authorization** | amount.currency, Amount.total, merchantDetails.merchantId,  merchantDetails.terminalId, source.sourceType, transactionDetails.captureFlag | amount.currency, Amount.total, merchantDetails.merchantId, merchantDetails.terminalId, source.card.expirationMonth, source.card.expirationYear,  source.sourceType, source.tokenData, source.tokenSource,transactionDetails.captureFlag |
|**Pre-Auth Completion** | amount.currency, Amount.total, merchantDetails.merchantId, merchantDetails.terminalId, transactionId | amount.currency, Amount.total, merchantDetails.merchantId, merchantDetails.terminalId, source.card.expirationMonth, source.card.expirationYear, source.sourceType, source.tokenData, source.tokenSource, transactionId  |
|**Account Verification** | amount.currency,  Amount.total, merchantDetails.merchantId, merchantDetails.terminalId, source.sourceType,  transactionDetails.captureFlag | amount.currency, Amount.total, merchantDetails.merchantId, merchantDetails.terminalId, source.card.expirationMonth, source.card.expirationYear, source.sourceType, source.tokenData, source.tokenSource, transactionDetails.captureFlag, transactionDetails.createToken |
|**Tagged Void** |  merchantDetails.merchantId, merchantDetails.terminalId, transactionDetails.reversalReasonCode, transactionId |  merchantDetails.merchantId, merchantDetails.terminalId, source.card.expirationMonth, source.card.expirationYear, source.sourceType, source.tokenData, source.tokenSource, transactionDetails.reversalReasonCode, transactionId |
|**Tagged Refund** | amount.currency, Amount.total, merchantDetails.merchantId, merchantDetails.terminalId, transactiond | amount.currency, Amount.total, merchantDetails.merchantId, merchantDetails.terminalId, source.card.expirationMonth, source.card.expirationYear, source.sourceType, source.tokenData, source.tokenSource, transactionId  |

---

## See Also

- [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md)
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)

---
