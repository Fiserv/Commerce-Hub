---
tags: [carat, card-not-present, commerce-hub, error, response, response-code, card-present]
---

# Issuer Response Codes

## Overview

Issuer Response Codes are two digit codes, which Commerce Hub receives from the cardholder issuing bank. Commerce Hub includes that value in `hostResponseCode` along with the corresponding text in `approvalStatus` field in `processorResponseDetails` component in the response which is been sent back to the merchant.

## Issuer Response Codes

| Code | Corresponding | Displayed Text Meaning |
| ---- | ------------ | ------------ |
| 00 | Approval | Approved |
| 00 | New Account Information | Applies to recurring authorizations only. These are examples of what may have occurred: Card has expired, Account was upgraded, Portfolio sale, Conversion |
| 01 | Referral | Referral |
| 03 | Invld Mer ID | Invalid Merchant number or Subscriber doesn't exist or is inactive |
| 03 | Declined | Invalid Merchant number or Subscriber doesn't exist or is inactive |
| 05 | Format Error | Format Error |
| 05 | Declined | Declined |
| 05 | DOB Error | Date of Birth Error for Check Processing |
| 10 | Apprv Lesser Amt | Approved for a lesser amount than what was requested (i.e. partial approval) |
| 12 | Inv tran | Invalid Transaction |
| 12 | Inv State Code | Invalid State Code for Check Processing |
| 12 | Referral-Inv TR1 | More than 76 characters in Track 1 or Track 1 not formatted correctly |
| 13 | Inv Amt | Invalid amount |
| 14 | Inv Acct Num | Account Number not on file or Checking Account Number |
| 14 | New Account Information | Applies to recurring authorizations only. These are examples of what may have occurred: Card has expired, Account was upgraded, Portfolio sale, Conversion |
| 14 | Do not try again | Applies to recurring authorizations only. The account number is invalid. |
| 22 | Inv tran | Invalid Transaction – Reversal of Debit E-Commerce Refund |
| 25 | Inv Terminal | Terminal Not Found |
| 28 | Please Retry | File is temporarily unavailable |
| 51 | Declined | Declined |
| 51 | Inv Acct Num | Invalid Checking Acct Num |
| 51 | Do not honor | Declined: Association’s payment cancellation advice code provided Applies to recurring authorizations only |
| 51 | Do not try again | Declined: Association’s payment cancellation advice code provided Applies to recurring authorizations only. These are examples of what may have occurred: the account was closed, or fraudulent. |
| 51 | New Account Information available | Declined: Association’s payment cancellation advice code provided </br> Applies to recurring authorizations only. These are examples of what may have occurred: Card has expired, Account was upgraded, Portfolio sale, Conversion. |
| 51 | Try again later | Declined: Association’s payment cancellation advice code provided </br> Applies to recurring authorizations only. These are examples of what may have occurred: the account is over the credit limit try again in 72 hours. |
| 54 | Do not try again | Applies to recurring authorizations only. The card has expired. |
| 54 | New Account Information | Applies to recurring authorizations only. The card has expired. |
| 54 | Try again later | Applies to recurring authorizations only. The card has expired. Get the new expiration date and try again. |
| 54 | Expired Card | Expired Card |
| 55 | Incorrect Pin | Incorrect Pin |
| 57 | Tran Not Allowed | Transaction Not Allowed |
| 60 | Hold-Call Ctr | Capture Card -- Call Center |
| 61 | Amt Exceeds Lmt | Amount Exceeds Limit |
| 63 | Serv Not Allowed | Service Not Allowed |
| 63 | Declined | For American Express transactions if the CID from the transaction doesn't match the one on file then decline transaction. Transaction not permitted to acquirer or terminal |
| 63 | Do not try again | Decline – Do not try again |
| 69 | Host Key Error | Host Key Error |
| 75 | Pin Retry Max | Allowable number of PIN tries exceeded |
| 75 | Pin Try Exceeded | Allowable number of PIN tries exceeded |
| 76 | Approval | Approved (non captured) |
| 85 | No Reasn To Decl | No reason to decline – returned on $0.00 account verification, address verification, CVV2/CVC2/CID verification transactions (Visa, MasterCard, and Discover) and may be returned for Online Refunds (Visa). Should be treated as an approval. |
| 89 | Invalid Term ID | Invalid Term ID |
| 89 | Declined | Term record not found on First Data system |
| 91 | Please Retry | Reasons for this error are one of the following: </br> Format Error </br> Unable to route transaction </br> Switch or issuer unavailable </br> System Busy Timeout |
| 94 | Duplicate Tran | Duplicate Transaction |
| 1A | Add Auth Require | Additional Authorization Credentials Required (Visa, MasterCard, American Express, or Discover European Union Pass Through Merchants only) Not applicable to Amex OptBlue merchants. Please contact your American Express representative for details on this response code. |
| 1B | PIN Data Needed | Additional Authorization with PIN required (Visa and MasterCard European Union Merchants only) |
| C2 | CVV2 Declined | Association indicated the transaction was not approved due to mismatch of the CVV2, CVC2, or CID value, but it would have been approved had the value matched |
| CE | System Problem | System Problem |
| F1 | INVALID ID NBR | Invalid ID Number |
| F2 | INV DRIVER NBR | Invalid Driver Number |
| F3 | INV VEHICLE NBR | Invalid Vehicle Number |
| N3 | Invld Acct2 | Invalid account/date or sales date in future |
| N3 | Declined | Invalid Effective Date |
| NG | Rev Rejected | Reversal Rejected cannot parse 400 message |
| NH | Enter Lesser Amt | Entr lesser amount |
| NI | Pin Xlate Error | Host Security module could not decrypt the PIN block. Master Session: The master key is missing or incorrect in the PIN pad, or the merchant record set-up incorrectly at First Data Host. DUKPT: The Base Derivation key is missing or incorrect in the PIN pad, or is set-up incorrectly in the Host Security Module. |
| NJ | Inv Cashback Amt | Cash Back amount greater than total Transaction amount (bit 4) |
| NK | Crypto Box Unav | Crypto box is offline |
| NL | Dbt Switch Unavl | Communications link to debit/EBT network gateway is down or responded with a "System Malfunction (96)" message |
| NL | DBT T.O. Retry | Communications link to debit/EBT network gateway is down or responded with a "System Malfunction (96)" message |
| NM | Issuer Unav | Debit/EBT network gateway cannot get through to the ISSUER. |
| NN | Undefined Card | Debit/EBT network gateway cannot route card based on Merchant Entitlement |
| NP | Dbtsw inv merid | Network Response indicates that Merchant ID / SE is invalid. |
| NQ | Tran Ct Excd Lmt | Debit/EBT transaction count exceeds pre-determined limit in specified time/ Withdrawal limit exceeded. |
| NR | Resub Excds Lmt | Resubmission of transaction violates debit/EBT network frequency |
| NS | Dbtsw Pin Xl Err | The authorizing network has a problem decrypting the cryptogram in the request |
| NU | Declined | Insufficient funds </br>MasterCard or Check transactions may override standard display for responses. |
| RW | Rev Outside Win | Reversal Outside Window </br> Reversal transaction was received, but the original matching authorization request was processed more than 25 minutes ago and is no longer eligible to be reversed. ( Applicable to Credit Host Capture only ) </br> If the POS has received a RW response (25 minutes after the original Authorization), the transaction cannot be reversed (voided). The Merchant must issue a refund/credit, or refund the amount authorized by other means. |