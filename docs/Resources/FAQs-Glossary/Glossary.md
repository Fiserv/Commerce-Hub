---
tags: [carat, commerce-hub, glossary, acquiring-bank, aggregator, authorization, AVS, capture, card-network, card-not-present, pre-auth, sale, surcharge, soft-descriptor, tokenization, ]
---

# Glossary

## Acquirer
The acquirer or acquiring bank is the bank or financial institution that processes credit or debit card transactions on behalf of a merchant. The acquirer sends the merchant's transactions to the customer's issuing bank through the card network.

## Aggregator
Aggregators are defined as third party billers that bill for services/goods rendered by another entity. The terms Payment Facilitator, Payment Service Provider, and Aggregator are interchangeable terms for the same functionality.

## Authorization
Authorization is necessary to check whether a card holder's credit card holds sufficient funds and is approved to purchase from a merchant. An authorization request first emerges whenever a cardholder attempts to purchase a good or service through a debit or credit card.


## Address Verification Service 
The Address Verification Service (AVS) verifies customer-supplied billing address information against the billing address on file at the issuer for Card Not Present transactions.


## Capture
The process of charging the customer's account for a previously authorized transaction. The issuer does this once the merchant sends a capture request, indicating that the purchased goods or services are ready for shipment to the customer.


## Card Network
Payment networks that determine where a card can be used and facilitate the payment process between merchants and customers. Common card networks include Visa, MasterCard, American Express and Discover. Note that American Express and Discover are also card issuers as well.


## Card Not Present
A Card Not Present (CNP) transaction made when the card cannot be physically used, e.g. in an online store.


## Card Number
The unique number associated with a payment card. The entire number is known as the Primary Account Number (PAN). The first 4-6 digits are the Bank Identification Number (BIN).

## Card Security Code
A Card Security Code (CSC), Card Verification Data (CVD), Card Verification Number (CVN), Card Verification Value (CVV), Card Verification Code (CVC), Verification Code (V-code or V code), or Signature Panel Code (SPC) is a security feature for [card not present](#cardnotpresent) payment card transactions instituted to reduce credit card fraud.

## Cardholder
A person to whom a card has been issued or a person authorized to use a card by the person to whom it was issued.

## Cardholder Account
Actual Cardholder Account Number or Checking Account Number (encoded on bottom of check) for Check Verification / Guarantee request.

## Cardholder Bank
The bank that has issued a bank card to an individual. The term is frequently used in conjunction with interchange arrangements to identify the card-issuing bank.

## Cash Advance
A transaction in which a cardholder obtains cash in person at a branch of a member financial institution and which is posted against the cardholder's bank card account.

## Chargeback
A process by which a customer disputes the payment and often results in the money being refunded to the customer by the issuing bank unless the merchant can show the transaction is valid.

## Dynamic Descriptor
A custom descriptor you configure and pass with each transaction via the API. This includes both [soft descriptors](#softdescriptor) and [hard descriptors](#harddescriptor). Contact your account representative for more information on using dynamic descriptors.

## Expiration Date
The date embossed on the card beyond which the card must not be honored. Month and Year that the card expires.

## Hard Descriptor
The descriptor that shows up after a transaction has settled. As soon as the customer's bank has finalized the transaction status, the hard descriptor will be permanently displayed as the description of the charge on the customer’s statement.

## Interchange Fees
Compensation paid by the acquiring member to an issuing member for particular expenses incurred in the process of interchange transactions.

## Merchant Category Code
The Merchant Category Code (MCC) is an industry standard [four-digit number](?path=docs/Resources/Master-Data/Merchant-Category-Code.md) used to classify a business by the type of goods or services it provides.

## Payment Token
A cryptographically secure representation of payment instrument details for use with subsequent payment transactions. This token may be generated for a single use or for multiple uses. By making use of a payment token, the merchant does not need to store sensitive payment details on their servers.


## Pre-Auth
A pre-auth is a customer transaction where the merchant can validate a given amount is available on the customer payment method (physical card, digital wallet, etc.) and then also place a hold for that amount. This amount is held on the customer account (credit limit or bank balance), but not yet transferred to the merchant. Once the merchant initiates a [capture](?path=docs/Resources/API-Documents/Payments/Capture.md) transaction, the held amount is then setled with the merchant batch.

## Sale
A sale is a customer transaction where the purchase amount is authorized and settled at the same time. If a sale is not voided [(cancel)](?path=docs/Resources/API-Documents/Payments/Cancel.md) before batching, the merchant funding process begins for this charge. At this point,the merchant can still return funds [(refund)](?path=docs/Resources/API-Documents/Payments/Refund.md) the customer.

<!-- theme: warning -->
> 
>Settlement time is based on processing network, contact your account manager for more details.

## Soft Descriptor
The descriptor that shows up after a transaction has been authorized. As long as the charge is in a pending state, the soft descriptor will be displayed on the customer's statement.

## Surcharge Fees
A surcharge, also known as checkout fee, is an extra fee charged by a merchant when receiving a payment by check or payment card. The surcharge covers the cost to the merchant for processing the payment, such as the merchant service fee imposed by a processor.

## Tokenization
Tokenization is a process of replacing sensitive data with non-sensitive equivalent, referred to as a token, that has no extrinsic or exploitable meaning or value. In the payments industry, it is used to safeguard a card's PAN by replacing it with a unique string of numbers.