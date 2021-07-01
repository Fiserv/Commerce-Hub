---
tags: [carat, card-not-present, commerce-hub, error, response, response-codes, card-present]
---

# Gateway Response Codes

The gateway response code indicates the status of a transaction after Commerce Hub receives the transaction. Commerce Hub includes the value in the `responseCode` along with the corresponding text in `responseMessage` fields of the [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md).

<!-- https://escmconfluence.1dc.com/display/CARAT/CARAT+Response+Codes+to+Nashville+Response+Codes+%28from+Spec+Version+2020-2%29+Mapping - CARAT Mapping

https://support.payeezy.com/hc/en-us/articles/203730509-First-Data-Payeezy-Gateway-Bank-Response-Codes - Payeezy

https://support.payeezy.com/hc/en-us/articles/203730499-eCommerce-Response-Codes-ETG-Payeezy-Gateway-Transaction-Codes- - Payeezy Gateway

https://escmconfluence.1dc.com/display/ACCOR/IPG+response+codes - IPG Responses
-->

---

## Commerce Hub Response Codes

<!--
type: tab
title: 0xx
-->

| Code| Message | Type | Description/Action |
| ---- | ----- | ------- | ------- | 
| 000 | Approve  | Successful | The transaction is approved. |
| 001 | Schema Validation Error  | Decline | Fix the error and resend |
| 002 | Approve for partial amount  | Successful | Send another charge request for the balance. |
| 003 | Approve VIP  | Successful | The transaction is approved. |

<!--
type: tab
title: 1xx
-->


| Code| Message | Type | Description/Action |
| ---- | ----- | ------- | ------- |
| 100 | Do not honor  | Decline | Advise customer to contact issuing bank |
| 101 | Expired card  | Decline | Card is expired |
| 102 | Suspected fraud  | Decline | Advise customer to contact issuing bank |
| 103 | Unable to process TeleCheck recurring transaction with this payment type   | Decline | Transaction not supported with payment type |
| 104 | Restricted card  | Decline | Advise customer to contact issuing bank |
| 105 | Call acquirer’s security department  | Decline | Call acquirer’s security department  |
| 106 | Allowable PIN tries exceeded  | Decline | Allowable number of PIN tries exceeded |
| 107 | Allowable PIN tries exceeded  | Decline | Call for voice authorization. |
| 108 | Refer to issuer’s special conditions  | Decline | Refer the customer back to their isuing bank. |
| 109 | Invalid merchant.  | Reject | Resend the request with correct merchant details. If correct details been sent contact to the account Representative. |
| 110 | Invalid amount  | Decline | Resend request with valid amount. |
| 112 | DES Encryption not allowed from the device / terminal  | Reject | Verify terminal setup and contact Account Representative for assistance. |
| 114 | Invalid account type  | Reject | Resend request with valid account type. |
| 116 | Not sufficient funds  | Decline | Customer dount have sufficient funds in account. |
| 117 | Incorrect PIN or PIN length error  | Decline | Customer entered invalid PIN. |
| 118 | No card record  | Decline | Resend the request with correct card data. |
| 119 | Transaction not permitted to customer  | Decline | Advise customer to contact issuing bank |
| 120 | Transaction not permitted to terminal  | Reject | Transaction not permitted to terminal  |
| 121 | Exceeds withdrawal amount limit  | Decline | Customer withdrawal limit exceeded. |
| 122 | Security violation  | Decline | Resend the request with the correct security code. |
| 123 | Exceeds withdrawal frequency limit  | Decline | Customer withdrawal frequency limit exceeds. |
| 124 | Violation of law  | Reject | Contact your Account Representative to seek assistance. |
| 129 | Suspected counterfeit card  | Decline | Advise customer to contact issuing bank |
| 130 | Invalid terminal  | Decline | Resend request with correct terminal details. |
| 131 | Invalid account number  | Reject | Advise customer to contact issuing bank |
| 132 | Unmatched card expiry date  | Reject | Advise customer to correct expiry date then resend transaction. |
| 133 | The TPP ID was not found  | Reject | Resend the request with correct TPP ID. |
| 134 | Not sufficient funds  |  |  |
| 150 | Invalid merchant set up  | Reject | Call your Account Representative for resolution. |
| 151 | Activation failed  | Reject | Attempt to activate new Gift card. |
| 152 | Exceeds limit  | Decline | Customer limit exceeds |
| 153 | Already redeemed  | Reject | Request another form of payment from the customer. |
| 154 | Over monthly limit  | Decline | Request another form of payment from the customer. |
| 155 | Recharge amount exceeded  | Reject | Resend the request with the lower amount. |
| 156 | Max number of recharges exceeded  | Reject | Try again later. |
| 157 | Invalid entry  | Reject | Resend the request with correct data. |

<!--
type: tab
title: 2xx
-->

| Code| Message | Type | Description/Action |
| ---- | ----- | ------- | ------- |
| 208 | Lost Card / Lost Check  | Decline | Advise customer to contact issuing bank |
| 209 | Stolen card  | Decline | Advise customer to contact issuing bank |
| 211 | Invalid SKU number.  | Reject | Resend the request with valid SKU number. |
| 212 | Missing conditional data.  | Reject | Correct the data and resend the request. |
| 213 | Invalid account number for card type.  | Reject | Resend the request with valid account number. |
| 214 | Invalid payment type/card type for merchant ID.  | Reject | Resend the request with valid payment or card data for merchant id. Contact your Account Representative to seek assistance. |
| 215 | Invalid transaction for Merchant ID.  | Reject | Send correct transaction for Merchant Id. |
| 216 | Invalid TransArmor request. | Reject | Merchant not enabled for TransArmor. |
| 217 | Missing or invalid secure payment data.  | Reject | Resend request with valid secure payment data. |
| 218 | Merchant ID not enabled for Secure Code.  | Reject | Merchant ID not enabled for Secure Code.  |
| 219 | Invalid Merchant Category Code  | Reject | Resend request with correct Merchant Category Code. |
| 220 | Customer service phone number missing.  | Reject | Customer AVS, CVV not matched. Advise customer to contact issuing bank. |
| 221 | Merchant not enabled for soft descriptors.  | Reject | Call your Account Representative for setup/enable soft descriptors. |
| 222 | Partial auth not allowed.  | Reject | Verify transaction origin is POS/Retail face to face. |
| 223 | Customer under 18 years old.  | Decline | Customer under 18 years old.  |
| 224 | Account blocked – possible compromise.  | Decline | Advise customer to contact issuing bank |
| 225 | Bill-to address does not match ship-to.  | Decline | Advise customer to contact issuing bank |
| 226 | Invalid preapproval number.  | Decline | Advise customer to contact issuing bank. |
| 227 | Invalid email address.  | Decline | Advise customer to contact issuing bank. |
| 228 | Need more ID – request full SSN.  | Decline | Advise customer to contact issuing bank. |
| 229 | Previously declined/closed account.  | Decline | Advise customer to contact issuing bank. |
| 230 | One time stop payment requested by customer.  | Decline | Customer requested this recurring payment to be stopped. Contact customer. |
| 231 | Stop payment requested for all payments.  | Decline | Customer requested all recurring payment to be stopped. Contact customer. |
| 232 | Stop all payments – account closed.  | Decline | Account Closed. Contact customer. |
| 233 | Auth response date not valid.  | Reject | Resend the request with valid Auth response date. |
| 234 | Issuance under minimum amount.  | Reject | Resend the request with valid amount. |
| 235 | Outstanding auth – funds on hold.  | Decline | Capture or Cancel original auth before resending. |
| 236 | Activation amount incorrect.  | Decline | Resend the request with valid activation amount. |
| 237 | Deny – new card issued.  | Decline | Advise customer to contact issuing bank. |
| 238 | BIN blocked.  | Decline | BIN block requested by merchant. |
| 242 | Customer opt-out.  | Decline | BIN block requested by merchant. |
| 243 | Institution does not accept ACH payments.  | Decline | Institution does not accept ACH payments.  |
| 244 | Original transaction not approved.  | Decline | Original transaction not approved.  |
| 245 | Invalid MICR data.  | Reject | Verify check reader, try another check or manually enter the account information. |
| 246 | Declined due to high risk.  | Decline | High risk transaction. |
| 247 | Declined due to stand-in rules.  | Decline | Declined due to stand-in rules.  |
| 248 | Conditional Approval – Hold shipping for 24 hours  | Successful | Ship the items after 24 hours. |
| 250 | Re-authorization request is declined. Original Auth could not be found.  | Decline | Original transaction not found.  |
| 251 | Re-authorization request is declined.  | Decline | Resend the request with the original customer account number, merchant id or amount from the initial authorization. |
| 252 | Re-authorization request is declined.  | Decline | The amount exceeds the original request amount. Resend the request with the lower amount. |
| 253 | Re-authorization request is declined. | Decline | Re-authorization timeframe exceeded. Send the new authorization request. |
| 254 | Counter Offer to Supply Personal Guaranty.  | Decline | Resend the request with Personal Guaranty. |


<!--
type: tab
title: 3xx
-->

| Code| Message | Type | Description/Action |
| ---- | ----- | ------- | ------- |
| 300 | Invalid EAN or SCV. | Reject | Resend the request with valid EAN and SCV. |
| 301 | Lock has expired on prepaid card. | Decline | Contact your account Representative for assistance. |
| 302 | Account closed. | Decline | The account was closed, probably because the account balance was $0.00. Advise customer to contact issuing bank. |
| 303 | Unknown account. | Decline | The account could not be located or the account does not exist in the account table. Advise customer to contact issuing bank. |
| 304 | Inactive account. | Decline | The account has not been activated by an approved location. Advise customer to contact issuing bank. |
| 308 | Already active. | Reject | The card is already active and does not need to be reactivated  |
| 311 | Not lost or stolen  | Decline | Advise customer to contact issuing bank. |
| 315 | Bad mag stripe. | Decline | The mag stripe could not be parsed for account information. Advise customer to contact issuing bank. |
| 316 | Incorrect location. | Reject | There was a problem with the merchant location. Verify merchant location in the request and resend the transaction. |
| 317 | Max balance exceeded. | Decline | Resend the request with lower amount. |
| 318 | Invalid amount. | Decline | There was a problem with the amount field in the transaction format – more or less than min/max amounts specified in the promotion for that transaction. Resend the request with correct amount. |
| 319 | Invalid clerk. | Reject | The clerk field was either missing, when required, or the content did not match the requirements. Resend the request with correct clerk details. |
| 320 | Invalid password | Decline | Password is Invalid |
| 321 | Invalid new password. | Decline | The new password does not meet the minimum security criteria. Resend the request with valid security criteria. |
| 322 | Exceeded account reloads. | Reject | The clerk/user/location was only permitted to reload some number of accounts. That number was exceeded. Contact your Account Representative for assistance. |
| 323 | Password retry exceeded. | Reject | The user account has been frozen because the user attempted access and was denied. Contact your Account Representative for assistance. |
| 326 | Incorrect transaction version or format number for POS transactions. | Reject | Resend the request with correct transaction version or format number. |
| 327 | Request not permitted by this account | Reject | Advise customer to contact issuing bank. |
| 328 | Request not permitted by this merchant location  | Reject | Contact your Account Representative to seek assistance. |
| 329 | Bad_repay_date | Reject | Resend the request with correct repay date. |
| 330 | Bad checksum. The checksum provided is incorrect | Reject | Resend the request with valid checksum data. |
| 331 | Balance not available (denial). | Decline | Due to an internal issue, information from this account could not be retrieved . Try again later. |
| 332 | Account locked | Decline | Advise customer to contact issuing bank. |
| 333 | No previous transaction. | Reject |  The void or reversal transaction could not be matched to a previous (original) transaction. In the case of a redemption, the corresponding locking transaction could not be identified. Resend the request with correct original transaction details. |
| 334 | Already reversed | Reject | The transaction is already reversed. |
| 336 | Bad Authorization ID. The Authorization ID test failed | Reject | Resend the request with correct Authorization ID. |
| 337 | Too many transactions requested | Decline | Retry the request after some time. |
| 338 | No transactions available/no more transactions available. | Decline | There are no transactions for this account or there are no transactions as determined by the specified first transaction number. Resend the request with correct tprevious transaction number |
| 339 | Transaction history not available | Decline | Retry the request with correct transaction history. |
| 340 | New password required | Decline | Enter new password. |
| 341 | Invalid status change. | Decline |  The status change requested (e.g. lost/stolen, freeze active card) cannot be performed. Retry the request with correct status to be changed. |
| 342 | Void of activation after account activity | Decline | Activity already performed on account. Advise customer to contact issuing bank. |
| 343 | No phone service. | Decline | Attempted a calling card transaction on an account which is not configured for calling card activity. Advise customer to contact issuing bank. |
| 344 | Internet access disabled | Reject | Verify internet access. |
| 345 | Invalid Date or Time | Reject | Resend the request with correct Date or Time. |
| 355 | Invalid currency. | Reject | The provided currency is invalid. Resend the request with valid currency. |
| 356 | Currency Not Supported | Reject | Resend the request with valid currency. |
| 357 | Currency conversion error | Reject | Resend the request with valid currency conversion data. |
| 359 | The terminal transaction number did not match (on a void or reversal).  | Decline | Resend the request with valid terminal transaction number. |
| 367 | Target embossed card entered and Transaction count entered do not match | Decline | Verify and Resend the request with matching data. |
| 368 | No account link | Decline | Advise customer to contact issuing bank. |
| 369 | Invalid time zone | Decline | Resend the request with valid time zone. |
| 370 | Account on hold or subscriber not active | Decline | Advise customer to contact issuing bank. |
| 372 | Promo location restricted | Reject | Promotion is not valid a the location, retry with different location. |
| 373 | Invalid Card Account  |  |  |
| 374 | Product code(s) restricted | Reject | Product is not qualify, resubmit the request. |
| 375 | Bad Post Date. The Post Date is not a valid date.  | Reject | Resend the request with correct post date. |
| 376 | Account status is void lock | Reject | Account is not allowed for voids, issue a refund. |
| 377 | Already active and reloadable | Decline | Account aleady activated. |
| 378 | Account is Purged. | Decline | The Account record was purged from the database. Advise customer to contact issuing bank. |
| 380 | Bulk activation error | Reject | Verify the information and try again. |
| 381 | Bulk activation un-attempted error | Reject | Builk activation not attempted.Verify the information and try again. |
| 382 | Bulk activation package amount error | Reject | Verify the package amount and try again. |
| 383 | Store location zero not allowed | Reject | Resend the request with correct store location. |
| 384 | Account row locked | Reject | Resend the request without the restricted data. |
| 385 | Accepted but not yet processed | Successful | Verify the transaction after 24 hours before resubmitting. |

<!--
type: tab
title: 4xx
-->

| Code| Message | Type | Description/Action |
| ---- | ----- | ------- | ------- |
| 402 | TransArmor Service Unavailable  | Reject | Retry transaction after some time. |
| 403 | TransArmor Invalid Token or Account Number  | Reject | Resend the request with correct token data. |
| 404 | TransArmor Key Error  | Reject | Verify the transArmor key and resend the request with correct key. |



<!--
type: tab
title: 5xx
-->

| Code| Message | Type | Description/Action |
| ---- | ----- | ------- | ------- |
| 500 | Decline  | Decline | Request another form of payment from the customer. |
| 501 | Date of Birth Error for Check Processing  | Decline | Resend the request with correct Date of Birth. |
| 502 | Invalid State Code  | Decline | Resend the request with valid state code. |
| 503 | New Account Information  | Decline | Advise customer to contact issuing bank. |
| 504 | Do not try again  | Decline | Hard bank decline. |
| 505 | Please retry  | Decline | File is temporarily unavailable. Retry the transaction. |
| 506 | Invalid Checking Account Number  | Decline | Account Number not on file or Checking Account Number. Advise customer to contact issuing bank. |
| 507 | New Account Information available  | Decline | Advise customer to contact issuing bank. |
| 508 | Try again later – Declined | Decline | Association‘s payment cancellation Advise code provided. Applies to recurring authorizations only. These are examples of what may have occurred: the account is over the credit limit try again in 72 hours.  |
| 509 | Do not try again  | Decline | Applies to recurring authorizations only. The card has expired. |
| 510 | New Account Information | Decline | Applies to recurring authorizations only. The card has expired. Advise customer to contact issuing bank. |
| 511 | Try again later  | Decline | Applies to recurring authorizations only. The card has expired. Get the new expiration date and try again. |
| 512 | Service not allowed  | Decline | Service not available. Try again after some time. |
| 513 | Decline. Transaction not permitted to acquirer or terminal  | Decline | Verify the transaction type. If correct contact account represetative to verify the account configuration. |
| 514 | Do not try again – Applies to recurring authorizations only. There was security violation.  | Decline | Security violation. Contact Commerce Hub customer care to seek assistance. |
| 515 | Declined. No term record on the merchant account. | Decline | Verify the correct terminal data. If correct contact account represetative to verify the account configuration. |
| 516 | Please retry   | Decline | Reasons for this error are one of the following: Format Error, Unable to route transaction, Switch or issuer unavailable, System Busy, Timeout. Retry transaction after some time. |
| 517 | CVV2 Declined  | Decline | Resend th erequest with correct CVV2 data. |
| 518 | Invalid account/date or sales date in future  | Reject | Verify information entered and try again. |
| 519 | Invalid Effective Date  | Reject | Verify Effective date and try again. |
| 520 | Reversal Rejected. Do not try again.  | Reject | Reversal Rejected cannot parse 400 message. Verify the reversal request and try again. |
| 521 | Enter lesser amount  | Decline | Resend the request with lesser amount. |
| 522 | Cash Back greater than total Transaction amount  | Decline | Cashback amount greater than transaction amount. Correct the cashback amount and try again. |
| 523 | Crypto box is offline  | Reject | Resend the request after some time. |
| 524 | Debit Switch unavailable. | Reject | Resend the request after some time. |
| 525 | Debit/EBT network gateway cannot get through to the ISSUER.  | Reject | Resend the request after some time. |
| 526 | Undefined Card – Debit/EBT network gateway cannot route card based on Merchant Entitlement  | Reject | Call your Account Representative to seek assistance. |
| 527 | Network Response indicates that Merchant ID / SE is invalid  | Reject | Call your Account Representative to seek assistance. |
| 528 | Debit/EBT transaction count exceeds pre-determined limit in specified time/ Withdrawal limit exceeded. | Reject | Retry after some tome or call your Account Representative to seek assistance. |
| 529 | Resubmission of transaction violates debit/EBT network frequency  | Reject | Call your Account Representative to seek assistance. |
| 530 | The authorizing network has a problem decrypting the cryptogram in the request  | Reject | Call your Account Representative to seek assistance. |
| 532 | The DUKPT Base Derivation key is missing or incorrect in the PIN pad, PIN key synchronization error, or Master session PIN key is missing.  | Reject | Verify the keys configured. If configured correctly, call your Account Representative to seek assistance. |
| 533 | Invalid encryption key offset sent by merchant  | Reject | Verify the keys configured. If configured correctly, call your Account Representative to seek assistance. |
| 534 | Invalid master session key id sent by merchant  | Reject | Verify the keys configured. If configured correctly, call your Account Representative to seek assistance. |
| 539 | No Checking Account  | Decline | No Checking account. Advise customer to contact issuing bank. |
| 540 | Edit Honor  | Successful | Edit honor |
| 541 | No Savings Account  | Decline | No Savings account. Advise customer to contact issuing bank. |
| 542 | DUKPT: An error while processing the PIN block that is not related to the point- of-sale equipment. Contact the Help Desk for assistance.  | Reject | Call your Account Representative to seek assistance. |
| 550 | Invalid Vehicle  | Decline | Invalid Vehicle number. Advise customer to contact issuing bank. |
| 551 | Invalid Driver  | Decline | Invalid Driver number. Advise customer to contact issuing bank. |
| 552 | Invalid Product  | Decline | Invalid Product. Resend the request with valid product code. |
| 553 | Exceeds transaction total limit per product class.  | Reject | Transaction total limit exceeded. Try again on next business date. |
| 554 | Over daily limit  | Reject | Daily limit exceeded. Try again on next business date. |
| 555 | Invalid Date/Time  |  |  |
| 556 | Exceeds quantity  | Reject | Daily quantity exceeded. Try again on next business date. |
| 557 | Invalid prompt entry  | Reject | Try again with correct selection. |
| 558 | Invalid Track 2 data  | Decline | Advise customer to contact issuing bank. |
| 559 | Voyager ID problem  | Reject | Resend the request with valid Voyager ID. |
| 560 | Invalid Odometer  | Decline | Resend the request with valid Odometer data. |
| 561 | Invalid Restriction Code  | Reject | Resend the request with correct restriction code. |
| 562 | Pay at pump not allowed  | Decline | Advise customer to contact issuing bank. |
| 563 | Over fuel limit  | Decline | Advise customer to contact issuing bank. |
| 564 | Over cash limit  | Decline | Advise customer to contact issuing bank. |
| 565 | Fuel price error  | Reject | Fuel price error. Contact your Account Representative to seek assistance. |
| 566 | Y or N required  | Reject | Resent the request with required data. |
| 567 | Over repair limit  | Reject | Check repair limits. Contact your account Representative for assistance. |
| 568 | Over additive limit  | Reject | Check additive limits. Contact your account Representative for assistance. |
| 569 | Invalid user  | Reject | Contact your Account Representative to seek assistance. |
| 570 | Before 1400 and can’t cut. Wait until 2:00 pm Eastern.  | Reject | Try again after 2:00 PM Eastern time. |
| 571 | Cut time too close to 1400  | Reject | Try again after 2:00 PM Eastern time. |
| 572 | Checker/Manager not found  | Reject | Check the configuration, if configure correctly call your Account Representative to seek assistance. |
| 573 | Security insufficient  | Reject | Call your Account Representative to seek assistance. |
| 574 | No transaction security record  | Reject | Call your Account Representative to seek assistance. |
| 575 | Insufficient data  | Reject | Verify the request and retry transaction. If the data is proper, call your Account Representative to seek assistance. |
| 576 | Merchant has mail pending  | Successful | Merchant has mail pending  |
| 577 | No messages pending  | Successful | No messages pending  |
| 578 | The Visa OCT / MasterCard MoneySend activity has exceeded preset transaction count or amount limit within a rolling 24-hour period for given merchant.  | Reject | Check merchant configuration for money send transaction. |
| 579 | The Visa OCT / MasterCard MoneySend activity has exceeded preset transaction count or amount limit within a rolling 7-day period for given merchant.  | Reject | Check merchant configuration for money send transaction. |
| 580 | The Visa OCT / MasterCard MoneySend activity has exceeded preset transaction count or amount limit within a rolling 30-day period for given merchant.  | Reject | Check merchant configuration for money send transaction. |
| 581 | The Visa OCT / MasterCard MoneySend Funding activity has exceeded preset transaction count or amount limit within a rolling 24-hour period for this account number.  | Reject | Advise customer to contact issuing bank. |
| 582 | The Visa OCT / MasterCard MoneySend Funding activity has exceeded preset transaction count or amount limit within a rolling 7-day period for this account number.  | Reject | Advise customer to contact issuing bank. |
| 583 | The Visa OCT / MasterCard MoneySend Funding activity has exceeded preset transaction count or amount limit within a rolling 30-day period for this account number.  | Reject | Advise customer to contact issuing bank. |
| 584 | The Visa OCT / MasterCard MoneySend Payment activity has exceeded preset transaction count or amount limit within a rolling 24-hour period for this account number.  | Reject | Advise customer to contact issuing bank. |
| 585 | The Visa OCT / MasterCard MoneySend Payment activity has exceeded preset transaction count or amount limit within a rolling 7-day period for this account number.  | Reject | Advise customer to contact issuing bank. |
| 586 | The Visa OCT / MasterCard MoneySend Payment activity has exceeded preset transaction count or amount limit within a rolling 30-day period for this account number.  | Reject | Advise customer to contact issuing bank. |
| 587 | The single transaction amount limit was exceeded for a Visa OCT/ MasterCard MoneySend transaction for given merchant.  | Reject | Check merchant configuration for money send transaction. |
| 588 | All Visa OCT / MasterCard MoneySend transactions are blocked for a rolling 24 hour period, or 7 day period (current and prior 6 days), or 30 day period (current and prior 29 days) for given merchant  | Reject | Check merchant configuration for money send transaction. |


<!--
type: tab
title: 6xx
-->

| Code| Message | Type | Description/Action |
| ---- | ----- | ------- | ------- |
| 601 | Invalid Batch Number/ Invalid Batch ID or Invalid OpenBatch  | Reject | Verify batch number. If correct, contact your Account Representative to seek assistance. |
| 602 | No Open Batch  | Reject | Verify the batch. |
| 603 | Close Unavailable  | Reject | Try again later. |
| 604 | Close Not Valid  | Reject | Verify the batch details and try again. |


<!--
type: tab
title: 7xx
-->

| Code| Message | Type | Description/Action |
| ---- | ----- | ------- | ------- |
| 701 | Approved EMV Key Load  | Successful | EMV Key load approved. |
| 702 | EMV Key Download Error  | Reject | Verify the key download request and try again. |
| 703 | Approved EMV Key Load, more key load data pending  | Successful | EMV Key load successful, check for other pending key data. |
| 704 | Pick Up Card  | Decline | Advise customer to contact issuing bank. |
| 708 | Honor With Authentication  | Successful | Approved transaction. |
| 721 | Invalid ZIP Code  | Decline | Check the zip code entered by customer, correct the data and resend the request. |
| 722 | Invalid value in the field  | Decline | Resend the request after correcting the value. |
| 723 | Driver’s License or ID is Required  | Reject | Resend th erequest with valid driver's license id. |
| 724 | Referred – Not Active  | Decline | Advise customer to contact issuing bank. |
| 726 | Unable to Locate Record On File  | Reject | Verify the record sent and resend the transaction with correct record. |
| 727 | Refer – Call Authorization  | Reject | Call for voice authorization. |
| 728 | Referred – Skip Trace Info  | Reject | Call for voice authorization. |
| 729 | Hard Negative Info On File  | Decline | Hard bank decline. |
| 731 | Rejected Lost/Stolen Checks  | Decline | Advise customer to contact issuing bank. |
| 740 | Totals Unavailable  | Reject | Try again later. |
| 767 | Hard Capture; Pick Up  | Decline | Bank is requesting card pickup. Advise customer to contact issuing bank. |
| 771 | Amount Too Large  | Reject | Resend the request with correct amount. |
| 772 | Duplicate Return  | Reject | Check the request, the return request is duplicate. Contact your Account Representative if assistance needed. |
| 773 | Unsuccessful  | Decline | Resend the request with correct data. |
| 774 | Duplicate Reversal  | Reject | Duplicate reversal sent. |
| 775 | Subsystem Unavailable  | Reject | System unavailable. Please retry sending transaction after some time. |
| 776 | Duplicate Completion  | Reject | The transaction is already completed. |
| 782 | Count Exceeds Limit  | Reject | Check transaction count limits. Contact your account Representative for assistance. |
| 785 | No reason to decline.  | Successful | Returned on account verification, address verification, CVV2/CVC2/CID verification transactions (Visa, MasterCard, and Discover) and may be returned for Online Refunds (Visa). Should be treated as an approval. |
| 790 | Not approved. Used only in Visa bill/recurring payment.  | Reject | Merchant must not resubmit same transaction but may continue billing process in subsequent billing period.  |
| 791 | Not approved. Used only in Visa bill/recurring payment.  | Reject | Merchant must stop recurring payment requests.  |
| 792 | See attendant.  | Reject | Contact your account Representative for assistance. |

<!--
type: tab
title: 8xx
-->

| Code| Message | Type | Description/Action |
| ---- | ----- | ------- | ------- |
| 801 | Over merchandise limit  | Reject | Check merchant limits. Contact your Account Representative if assistance required. |
| 802 | Imprint card  | Successful | Bank request merchant to take imprint of the card. |
| 803 | Not on file  |  |  |
| 804 | Fuel only  | Decline | Fuel only transactions allowed. |
| 805 | Velocity exceeded  | Reject | Velocity exceeded. Contact your Account Representative to seek assistance. |
| 806 | Authorization ID needed  | Reject | Resend the request with correct Authorization ID. |
| 807 | Over non-fuel limit  | Reject | Non Fuel limit exausted. Advise customer to contact issuing bank. |
| 808 | Invalid location  | Decline | Resend the request with valid address. |
| 809 | Over card velocity count  | Decline | Advise customer to contact issuing bank. |
| 810 | Over card velocity amount  | Decline | Advise customer to contact issuing bank. |
| 811 | Over issuer velocity count  | Decline | Advise customer to contact issuing bank. |
| 812 | Over issuer velocity amount  | Decline | Advise customer to contact issuing bank. |
| 813 | Over merchant daily velocity count  | Reject | Check configuration for velocity count. Call your Account Representative to seek assistance. |
| 814 | Over merchant daily velocity amount  | Reject | Check configuration for velocity amount. Call your Account Representative to seek assistance. |
| 815 | Over merchant daily velocity both  | Reject | Check configuration for velocity count and amount. Call your Account Representative to seek assistance. |
| 816 | Over merchant product velocity amount  | Reject | Check configuration for product velocity amount. Call your Account Representative to seek assistance. |
| 817 | Over merchant product velocity count  | Reject | Check configuration for product velocity count. Call your Account Representative to seek assistance. |
| 818 | Over merchant product velocity both  | Reject | Check configuration for product velocity count and amount. Call your Account Representative to seek assistance. |
| 819 | Over chain daily velocity count  | Reject | Check configuration for chain daily velocity count. Call your Account Representative to seek assistance. |
| 820 | Over chain daily velocity amount  | Reject | Check configuration for chain daily velocity amount. Call your Account Representative to seek assistance. |
| 821 | Over chain daily velocity both  | Reject | Check configuration for chain daily velocity count and amount. Call your Account Representative to seek assistance. |
| 822 | Over chain product velocity count  | Reject | Check configuration for chain product velocity count. Call your Account Representative to seek assistance. |
| 823 | Over chain product velocity both  | Reject | Check configuration for chain product velocity count and amount. Call your Account Representative to seek assistance. |
| 824 | Over chain product velocity amount  | Reject | Check configuration for chain product velocity amount. Call your Account Representative to seek assistance. |
| 825 | No chain ID for chain merchant  | Reject | Check configuration for chain ID. Contact your Account Representative if assistance needed. |
| 826 | Signature required  | Reject | Resend the request with valid signature data. |
| 827 | Velocity exception error – pay inside  | Reject | Check velocity configuration for pay inside. Contact your Account Representative if assistance needed. |
| 828 | Exceeds merchant count for period – pay inside  | Reject | Check configuration for pay inside merchant count. Contact your Account Representative if assistance needed. |
| 829 | Exceeds merchant amount for period – pay inside  | Reject | Check configuration for pay inside merchant amount. Contact your Account Representative if assistance needed. |
| 830 | Exceeds merchant count and amount for period – pay inside  | Reject | Check configuration for pay inside merchant count and amount. Contact your Account Representative if assistance needed. |
| 831 | Exceeds zip code count for period – pay inside  | Reject | Check configuration for pay inside zip code count. Contact your Account Representative if assistance needed. |
| 832 | Exceeds zip code amount for period – pay inside  | Reject | Check configuration for pay inside zip code amount. Contact your Account Representative if assistance needed. |
| 833 | Exceeds zip code count and amount for period – pay inside  | Reject | Check configuration for pay inside zip code count and amount. Contact your Account Representative if assistance needed. |
| 834 | Exceeds state count for period – pay inside  | Reject | Check configuration for pay inside state count. Contact your Account Representative if assistance needed. |
| 835 | Exceeds state amount for period – pay inside  | Reject | Check configuration for pay inside state amount. Contact your Account Representative if assistance needed. |
| 836 | Exceeds state count and amount for period – pay inside  | Reject | Check configuration for pay inside state count and amount. Contact your Account Representative if assistance needed. |
| 837 | Exceeds global count for period – pay inside  | Reject | Check configuration for pay inside global count. Contact your Account Representative if assistance needed. |
| 838 | Exceeds global amount for period – pay inside  | Reject | Check configuration for pay inside global amount. Contact your Account Representative if assistance needed. |
| 839 | Exceeds global count and amount for period – pay inside  | Reject | Check configuration for pay inside global count and amount. Contact your Account Representative if assistance needed. |
| 840 | Unknown velocity error – pay inside  | Reject | Contact your Account Representative to seek assistance. |


<!--
type: tab
title: 9xx
-->

| Code| Message | Type | Description/Action |
| ---- | ----- | ------- | ------- |
| 902 | Invalid transaction.  | Reject | Contact your Account Representative to seek assistance. |
| 904 | Format error.  | Reject | Verify the request and try again. |
| 905 | Unsupported message. Transaction was rejected. Call your helpdesk or operations support.  | Reject | Contact your Account Representative to seek assistance. |
| 906 | System Error.   | Reject | There is a problem with the host processing system. Contact your Account Representative to seek assistance. |
| 907 | Card issuer or switch inoperative or processor not available  | Reject | Resend th erequest after some time. |
| 908 | Transaction destination not found for routing.  | Reject | Check the routing configuration. Call your Account Representative if assistance needed. |
| 909 | System malfunction or timeout  | Reject | Retry after some time or call your Account Representative to seek assistance. |
| 911 | Card issuer timed out.  | Decline | Retry after some time. |
| 913 | Duplicate transaction.  | Decline | Duplicate transaction. Verify the request. |
| 914 | Void/Full Reversal request unable to process due to settlement already occurred.  | Decline | A Refund transaction may be necessary to reconcile the customer’s account.  |
| 915 | Timeout Reversal not supported.  | Reject | Resend the original transaction with the same Reference Number that timed out. Do not retry the timeout reversal  |
| 916 | Void/Full Reversal request unable to process since the Original Authorization was not found.  | Reject | Check the request with original transaction data and send the request again with correct data. |
| 920 | Security H/W or S/W error – try again  | Reject | Retry the transaction. |
| 921 | Security H/W or S/W error – no action  | Reject | Try another transaction. |
| 923 | Request in progress  | Successful | Request is in progress. Check the transaction status after some time. |
| 924 | Limit check failed  | Reject | Check the limits configured. Contact your account Representative for assistance. |
| 940 | Error.  | Reject | Transaction has error. Retry the transaction after some time. |
| 941 | Invalid issuer.  | Reject | Verify the user details and retry. |
| 942 | Customer cancellation  | Reject | Customer has cancelled the transaction. Contact customer for more details. |
| 944 | Invalid response  | Decline | Invalid response received. Contact your Account Representative for more details. |
| 950 | Violation of business arrangement  | Reject | Contact your Account Representative to seek assistance. |
| 954 | CCV failed.  | Decline | CVV Verification failed. Resend the request with correct CVV data. |
| 958 | CCV2 failed  | Decline | CVV2 Verification failed. Resend the request with correct CVV2 data. |
| 959 | CAV failed  | Decline | CAV Verification failed. Resend the request with correct CAV data. |
| 963 | Acquirer channel unavailable  | Reject | Retry transaction after some time. |

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Host Response Code](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md)
- [HTTP Response Code](?path=docs/Resources/Guides/Response-Codes/HTTP.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)

---
