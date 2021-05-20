---
tags: [carat, commerce-hub, glossary, acquiring-bank, aggregator, authorization, AVS, capture, card-network, card-not-present, pre-auth, sale, surcharge, soft-descriptor, tokenization]
---

# Glossary

## 3-D Secure
3-D Secure (3DS) is a technical standard that adds [security](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md) to online Card Not Present transactions by authenticating the customer as the owner of the payment card account.

## Access Token	
A cryptographically secure credential that allows merchants to access the API.

## Activation
Notification to an issuer that a Prepaid card has been purchased and should be activated for cardholder usage.

## Access Control Server
An Access Control Server (ACS) is a card issuer component in the 3-D Secure process.

## Acquirer
The acquirer or acquiring bank is the bank or financial institution that processes credit or debit card transactions on behalf of a merchant. The acquirer sends the merchant's transactions to the customer's issuing bank through the card network.

## Address Verification Service 
The [Address Verification Service (AVS)](?path=docs/Resources/Guides/Fraud/Address-Verification.md) verifies customer-supplied billing address information against the billing address on the file at the issuer for Card Not Present transactions.

## Agile Software Development	
Agile software development refers to a group of software development methodologies that promotes development iterations, open collaboration, and process adaptability throughout the life-cycle of the project.

## Aggregator
Aggregators are defined as third party billers that bill for services/goods rendered by another entity. The terms Payment Facilitator, Payment Service Provider, and Aggregator are interchangeable terms for the same functionality.

## Approval Code
The approval code (authorization ID or authorization code) is an alphanumeric value, assigned by the issuing bank, to an authorization request that has received approval. The `approvalCode` is returned in the [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md). 

## Authorizing Network ID
A 3-digit value identifying the network providing the response to the request message.

## Available Balance
The available balance are the funds in a checking or on-demand account that are available for use by the customer or account holder. These are funds that are available for immediate use, and includes deposits, withdrawals, transfers, and any other activity that has already cleared or pending on the account.

## Authentication Value
The authentication value is returned as a crypotogram in digital payments e.g. [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md) and [wallets](?path=docs/Getting-Started/Getting-Started-Wallets.md). Also known as Cardholder Authentication Verification Value (CAVV) or Accountholder Authentication Value (AAV).

## Authorization
Authorization is necessary to verify whether a customer's payment source has sufficient funds. An authorization request is submitted as part of [charges](?path=docs/Resources/API-Documents/Payments/Charges.md).

## Auto-Substantiation
The process of verifying that purchase transactions are for expenses permitted and eligible under Internal Revenue Service regulations for Flexible Spending Accounts (FSAs) and Healthcare Reimbursement Arrangements (HRAs).

## Base URL	
The Base URL is used to reach the installed shopping cart, e.g. https://mydomain.com/cart/ or https://shop.mydomain.com/.

## Bank Indentification Number
The Bank Indentification Number (BIN) is the first 8 digits of the unique card number [Primary Account Number](#card-number) (PAN). Identifies the card network and the issuer. Sometimes referred to as the Issuer Identification Number (IIN).

## B2B Invoice Payment
B2B invoice payments are payments made between two merchants for goods or services. Digital B2B invoice payments solutions make it faster to issue, receive, and process payments.

## Bank Card Association
A group of institutions formed for the purpose of sponsoring a bank card program and/or using a common processing and administrative center.

## Banknet Data
A 13 digit field that identifies the date in which the authorization record was captured by Mastercard’s telecommunications network, followed by a unique data element which identifies the authorization transaction.

## Banknet Reference Number
Unique data element, assigned by Mastercard, which identifies an authorization transaction.

## Binary Synchronous
Binary Synchronous (BISYNC) is a category of synchronous communications protocols.

## Capture
The process of [charging](?path=docs/Resources/API-Documents/Payments/Capture.md) the customer's account for a previously authorized transaction. The issuer does this once the merchant sends a capture request, indicating that the purchased goods or services are ready for shipment to the customer.

## Card Network
Payment networks that determine where a card can be used and facilitate cashless payment between merchants and customers. Common card networks include Visa, Mastercard, American Express, and Discover. Note that American Express and Discover are also card issuers as well.

## Card Not Present
A Card Not Present (CNP) transaction is done when the card cannot be physically used, e.g. in an online store.

## Card Number
The unique number associated with a payment card. The entire number is known as the Primary Account Number (PAN). The first 8 digits are the [Bank Identification Number](#bank-identification-number) (BIN).

## Card Security Code
A Card Security Code (CSC), Card Verification Data (CVD), Card Verification Number (CVN), Card Verification Value (CVV), Card Verification Code (CVC), Verification Code (V-code or V code), or Signature Panel Code (SPC) is a security feature for [card not present](#card-not-present) payment card transactions instituted to reduce credit card fraud.

## Cardholder
A person to whom a card has been issued or a person authorized to use a card.

## Cardholder Bank
The bank that has issued a bank card to an individual. The term is frequently used in conjunction with interchange arrangements to identify the card-issuing bank.

## Cardholder Account
Actual Cardholder Account Number or Checking Account Number (encoded on bottom of check) for Check Verification / Guarantee request.

## Cardholder Street Address
At least twenty characters of the cardholder's billing address that was used in the Address Verification request. The merchant must convert spelled numbers to numeric values (e.g., Fourth Street becomes 4TH Street prior to sending the address verification request).

## Cardholder Zip/Postal Code
Five or nine digit zip code of the cardholder's billing address that was used in the Address Verification request. When the cardholder is from out of the U.S., this field contains any alphanumeric postal code.

## Card Code Value Presence Indicator
A code used to indicate the presence of a Card Verification Value (Visa), a Card Validation Code (MasterCard), a Card Identifier (Discover), and another identically named Card Identifier (American Express) printed on the front or back of a credit card; used to reduce fraud losses.

## Card Code Response Value
A Card Verification Value (Visa), Card Validation Code (MasterCard), Card Identifier (Discover), and another identically named Card Identifier (American Express) returned on the Authorization Response Message in response to the Card Code Value information entered on the request. For example, the Card Code Response Value “M” indicates that there is a Card Code Value Match, whereas the Card Code Response Value “U” indicates that the Card Code Value is unknown or that the Issuer does not participate.

## Card Code Value
A 3- or 4-digit Card Value printed on the back of a credit card.

## Cash Advance
A transaction in which a customer receives cash in-person which is posted against the customer's account.

## Check Digit
The last digit of an account number that is calculated according to a predetermined formula and used to validate an account number.

## "Code 10" Authorization
A merchant's or member's request for a "code 10" authorization is the merchant's or member's means of alerting its Authorizing Member that a suspicious transaction is occurring.

## Common Carrier
Government regulated organization that provides telecommunications services for public use such as ATandT, GTandE, ITT, MCI, SBS and Western Union.

## Conditioning
The "tuning" or addition of equipment to improve the transmission characteristics or quality of a leased voice-grade line so that it meets specifications for data transmission.

## Chargeback
A process by which a customer disputes the payment and often results in the money being refunded to the customer by the issuing bank unless the merchant can show the transaction is valid.

## Customer Account
Account connected to the financial institution that issued a payment card or checks.

## Card Code Value
The card code value (CCV) is a 3 or 4-digit card value printed on the front or back of a payment card. This is the Card Verification Value (Visa), Card Validation Code (Mastercard, Maestro International), Card Identifier (Discover) or CID/4DBC (American Express).

## CCV Result Code
The CCV result code is the response to the Card Verification Value. It is returned on the Authorization Response Message in response to the Card Code Value information entered on the request. For example, the Card Code Response Value “Match” indicates that there is a Card Code Value Match, whereas the Card Code Response Value “NotPrt” indicates that the Card Code Value is unknown or that the Issuer does not participate.

## Card Expiration Date
The date beyond which the card may not be honored.

## CashBack
A transaction in which a cardholder obtains cash as part of the transaction.

## Closed Loop Prepaid Card
Closed loop prepaid solutions are designed to be used only at the issuer’s locations. Examples of closed loop issuers include retail stores, casinos, oil companies, e-commerce businesses, telecommunications companies, and restaurants.

## Contactless
Contactless Payment Cards are similar to traditional cards except that they have a contactless chip and radio frequency (RF) antenna configuration embedded within the plastic. After you tap or wave your Contactless Payment Card at a merchant terminal equipped with an RFID (Radio Frequency Identification) reader, the card wirelessly transmits Track 1 and / or Track 2 payment details to the terminal.

## County Code
Three digit number identifying the U.S. county where the transaction occurred.

## Credit Card
A plastic card used to purchase goods and services and to obtain cash advances on credit for which the cardholder is subsequently billed by the issuing member for repayment of credit extended.

## Credit Line
The monetary amount of credit extended to a cardholder.

## Cardholder Identification Data
Cardholder Identification Data (CID) is the American Express term for the 4-digit security code on the front of the credit card. For Visa and MasterCard, it is 3-digits and located on the back.

## Clearing
The process whereby financial institutions collect or pay out for items drawn on, or paid into, accounts in their institution. First Data Payeezy Gateway settles according to the credit card companies' agreements with banking institutions.

## Component Object Model
Component Object Model (COM) makes it easier to create components (pieces of code) or use preexisting components that can interact with other components and applications (using the object model). A big advantage is that these components can be written using a variety of computer languages.

## CTR
Customer Transaction Record. With the First Data Payeezy Gateway Transaction Processing Solution, the CTR is issued upon completion of a transaction. It states the business name, has an authorization number, and lists all important transaction details.

## Card Validation Code 2
Card Validation Code 2 (CVC2) is the MasterCard term for the 3-digit security code on the back of the credit card (Visa and MasterCard). For American Express, it is 4-digits and located on the front.

## Cardholder Verification Value
Cardholder Verification Value (CVV) a 3 or 4 digit security code on the back of the credit card (Visa and MasterCard). For American Express, it is 4-digits and located on the front.

## Cardholder Verification Value2
Cardholder Verification Value2 (CVV2) is the Visa term for the a 3-digit security code on the back of the credit card (Visa and MasterCard). For American Express, it is 4-digits and located on the front.

## Cardholder Verification Data
Cardholder Verification Data (CVD) is a 3-digit security code on the back of the credit card (Visa and MasterCard). For American Express, it is 4-digits and located on the front. Also known as CVV, CVV2 (Visa), CID (American Express), and CVC2 (Mastercard).

## Cryptogram
A limited- or single-use key that links the payment token to the actual payment account number. Required by the token service provider to match the actual account number to the token and continue processing the payment.

## CSR
A Certificate Signing Request used with Apple Pay.

## Customer
A person or company that buys goods or services from a merchant.

## Decline
A response to a request for authorization in which approval is refused. A merchant receiving a decline should not complete the transaction.

## Deferred Billing
Identifies transactions where the billing occurred after the merchandise was delivered to the cardholder. Available for Visa only.

## Derived Unique Key Per Transaction
Derived Unique Key Per Transaction (DUKPT) allows the encryption of a PIN via the use of a unique key for each transaction.

## DBA (Doing business as)
Doing business as (DBA) refers to the specific name and location of the merchant's store where a bank card purchase is made.

## Dynamic Descriptor
A [custom descriptor](?path=docs/Resources/Guides/Dynamic-Descriptor.md) you configure and pass with each transaction via the API. This includes both [soft descriptors](#soft-descriptor) and [hard descriptors](#hard-descriptor). Contact your account representative for more information on using dynamic descriptors.

## Expiration Date
The date embossed on the card beyond which the card is not valid to be used. Generally mentions the Month and Year that the card expires.

## Hard Descriptor
The descriptor that shows up after a transaction has settled. As soon as the customer's bank has finalized the transaction status, the hard descriptor will be permanently displayed as the description of the charge on the customer’s statement.

## Interchange Fees
Compensation paid by the acquiring member to an issuing member for particular expenses incurred in the process of interchange transactions.

## Issuing Bank
The bank that has issued a payment card or checks to an individual. 

## Merchant Category Code
The Merchant Category Code (MCC) is an industry standard [four-digit number](?path=docs/Resources/Master-Data/Merchant-Category-Code.md) used to classify a business by the type of goods or services it provides.

## Payment Token
A cryptographically secure representation of payment instrument details for use with subsequent payment transactions. This token may be generated for a single or multiple use. Through a payment token, the merchant does not need to store sensitive payment details on their servers.

## Pre-Auth
A pre-auth is a customer transaction where the merchant can validate a given amount is available on the customer payment method (physical card, digital wallet, etc.) and places a hold on a project sale amount. This amount is held on the customer account (credit limit or bank balance), but not yet transferred to the merchant. Once the merchant initiates a [capture](?path=docs/Resources/API-Documents/Payments/Capture.md) transaction, the held amount is then setled with the merchant batch.

## Sale
A sale is a customer transaction where the purchase amount is authorized and settled at the same time. If a sale is not voided [(cancel)](?path=docs/Resources/API-Documents/Payments/Cancel.md) before batching, the merchant funding process begins for this charge. At this point, the merchant can still return funds [(refund)](?path=docs/Resources/API-Documents/Payments/Refund.md) the customer.

<!-- theme: warning -->
> 
>Settlement time is based on processing network, contact your account manager for more details.

## Soft Descriptor
The descriptor that shows up after a transaction has been authorized. As long as the charge is in a pending state, the soft descriptor will be displayed on the customer's statement.

## Surcharge Fees
A surcharge, also known as checkout fee, is an extra fee charged by a merchant when receiving a payment by check or payment card. The surcharge covers the cost to the merchant for processing the payment, such as the merchant service fee imposed by a processor.

## Triple DES
Triple DES (3DES or TDES) is the Triple Data Encryption Algorithm (TDEA or Triple DEA) block cipher, which applies the Data Encryption Standard (DES) cipher algorithm three times to each data block.

## Tokenization
[Tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) is a process of replacing sensitive data with non-sensitive equivalent, referred to as a token, that has no extrinsic or exploitable meaning or value. In the payments industry, it is used to safeguard a card's PAN by replacing it with a unique string of numbers.