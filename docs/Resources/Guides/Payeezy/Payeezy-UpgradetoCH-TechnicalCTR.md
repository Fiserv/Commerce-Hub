---

tags: [carat, commerce-hub, enterprise, card-not-present, payeezy, customer-transaction-record]

---

# Customer Transaction Record (CTR) Response Element Creation

<!-- theme: danger -->
>  The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.


Commerce Hub will not be providing a single CTR element in the API response.  The purpose of this page is to provide developers with the element equivalent list in Commerce Hub in order to recreate the CTR if neccessary.

**Payeezy CTR Example:**

```json
{
   "additional_info": {
             "ctr": "========== TRANSACTION RECORD ==========\nSEI stereo shop Terminal NO-TA\n1231 Durrett Lane\nLouisville, KY 40217\nUnited States\nwww.abc.com\n\nTYPE: Purchase\n\nACCT: Visa                   $ 5.00 USD\nTest 2 Dollar:        $2.00 USD\nTotal:        $7.00 USD\n\nCARDHOLDER NAME : Joe Public\nCARD NUMBER     : ############0002\nDATE/TIME       : 10 May 21 12:59:08\nREFERENCE #     : 001 0599326 M\nAUTHOR. #       : 875006\nTRANS. REF.     : Invoice A\n\n    Approved - Thank You 100\n\n\nPlease retain this copy for your records.\n\nCardholder will pay above amount to\ncard issuer pursuant to cardholder\nagreement.\n========================================"
    }
}
```

### CTR Creation from Commerce Hub Elements
Click [here](https://github.com/Fiserv/Commerce-Hub/raw/Payeezy-Prod/docs/Resources/Guides/Payeezy/Customer_Transaction_Record_Creation.xlsx) to download the table in Excel. _Last Updated: June 15, 2022_

| Payeezy Customer Transaction Record (CTR)| Commerce Hub Elements | 
| :-------------------------------------- | :------------- |
|========== TRANSACTION RECORD ========== | CTR+10 equal Symbols + TRANSACTION RECORD + 10 equal symbols |
| SEI stereo shop Terminal| paymentReceipt.merchantName |
|1231 durrett lane |paymentReceipt.merchantAddress |
|louisville, KY 40217 | paymentReceipt.merchantCity + , + paymentReceipt.merchantStateOrProvince + paymentReceipt.merchantPostalCode|
|United States| paymentReceipt.merchantCountry|
|TYPE: Purchase | TYPE: + <br> if charges endpoint and transactionDetails.captureFlag = true, then "Purchase" <br> if charges endpoint and transactionDetails.captureFlag = false, then "Pre - Authorization" <br> if cancel endpoint  then "Void" <br> if refund endpoint  then "Refund" |
|ACCT: Visa                    $ 5.00 USD| ACCT: + cardDetails.brand + $ + paymentReceipt.approvedAmount.total + paymentReceipt.approvedAmount.currency |
|FEE NAME:                    $ 2.00 USD | FEE NAME: + $ + AmountComponents.convenienceFee + paymentReceipt.approvedAmount.currency |
|TOTAL:                        $ 7.00 USD | TOTAL: + $ + (paymentReceipt.approvedAmount.total + AmountComponents.convenienceFee) + paymentReceipt.approvedAmount.currency |
|CARDHOLDER NAME : Joe Public | CARDHOLDER NAME: source.card.nameOnCard |
|CARD NUMBER     : ############1111 | CARD NUMBER: + <br> if cardDetails.brand = "Amex" then ########### + source.card.last4 <br> else ############ + source.card.last4|
|DATE/TIME       : 10 May 21 12:59:08 | DATE/TIME: + gatewayresponse.transactionProcessingDetails.transactionTimeStamp  |
|REFERENCE #     : 001 0599326 M| REFERNCE #: merchantDetails.terminalId + gatewayResponse.transactionProcessingDetails.orderId + M |
|AUTHOR. #       : 875006 | AUTHOR. #: + PaymentReceipt.ProcessorResponseDetails.ApprovalCode |
|TRANS. REF.     : Invoice A | TRANS. REF.: + transactionDetails.merchantInvoiceNumber |
|Approved - Thank You 100 | If paymentReceipt.processorResponseDetails.approvalStatus = APPROVED then "Approved - Thank you 100" <br> If paymentReceipt.processorResponseDetails.approvalStatus = DECLINED  then "Not Approved" |
|Please retain this copy for your records. Cardholder will pay above amount to card issuer pursuant to cardholder agreement. | Hardcoded and should match exctly -> Please retain this copy for your records. Cardholder will pay above amount to card issuer pursuant to cardholder agreement. |
|========================================| 40 equal symbols|
  
---

## See Also

- [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md)
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)

---
