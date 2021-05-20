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

## Customer Account
The customer account associated with a customer account number or checking account number used in a payment request.

## Customer Street Address
The customer street address includes the street number and name. The [`street`](?path=docs/Resources/Master-Data/Address.md) field is part of the shipping address or billing address object.  

## Customer Zip/Postal Code
Five or nine digit zip code of the customer's billing or shipping address. When the customer is international, this field contains the alphanumeric postal code. The [`postalCode`](?path=docs/Resources/Master-Data/Address.md) is part of the shipping address or billing address object.  

## Security Code Indicator
The `securityCodeIndicator` used to indicate the presence of a [card security code](#card-security-code) during a [verification](?path=docs/Resources/Guides/Fraud/Security-Code.md) request.

## Security Code Response
The [value](?path=docs/Resources/Guides/Fraud/Security-Code.md#response-values) returned as `securityCodeMatch` or `securityCodeResponse` from the issuing bank.

## Cash Advance
A transaction in which a customer receives cash in-person which is posted against the customer's account.

## Check Digit
The last digit of an account number that is calculated according to a predetermined formula and used to validate an account number.

## "Code 10" Authorization
A merchant's request for a "code 10" authorization is used to alert the authorization network (processor) that a suspicious transaction is occurring.

## Conditioning
The "tuning" or addition of equipment to improve the transmission characteristics or quality of a leased voice-grade line so that it meets specifications for data transmission.

## Chargeback
A process by which a customer disputes the payment and often results in the money being refunded to the customer by the issuing bank unless the merchant can show the transaction is valid.

## Customer Account
Account connected to the financial institution that issued a payment card or checks.

## Card Expiration Date
The date beyond which the card may not be honored.

## CashBack
A transaction in which a cardholder obtains cash as part of the transaction.

## Closed Loop Prepaid Card
Closed loop prepaid solutions are designed to be used only at the issuer’s locations. Examples of closed loop issuers include retail stores, casinos, oil companies, e-commerce businesses, telecommunications companies, and restaurants.

## Contactless Payments
Contactless payments use radio frequency (RF), also known as Near Field Communication (NFC). The technology is used in payment cards and mobile devices. Contactless Payment Cards are similar to traditional cards except that they have a contactless chip. 

When a customer taps or waves a payment instrument at a merchant terminal equipped with an RFID (Radio Frequency Identification) reader, the instrument wirelessly transmits payment details to the terminal.

## Credit Card
A plastic card used to purchase goods and services and to obtain cash advances on credit for which the cardholder is subsequently billed by the issuing member for repayment of credit extended.

## Credit Line
The monetary amount of credit extended to a customer.

## Clearing
The process where the merchant's processor withdraws or deposits funds from the customer's bank account.

## Component Object Model
Component Object Model (COM) makes it easier to create components (pieces of code) or use preexisting components that can interact with other components and applications (using the object model). A big advantage is that these components can be written using a variety of computer languages.

## Cryptogram
A limited or single-use key (cipher) that encrypts the payment data. It is required to de-encrypt the payment data by the processor to continue processing the payment.

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

## Debit Function Code
Indicates the specific purpose of the message within its message class.

## Debit Network Response Code
The code that specifies the actual result provided by the debit network in response to the request message.

## Debit Network Routing ID
A 6-digit value identifying the specific debit network providing the response to the request message.

## Debt Indicator
Identifies the transaction as payment of an existing debt obligation, such as a car loan payment.

## Deferred Billing Indicator
Identifies transactions where the merchandise billing occurred after the merchandise was delivered to the cardholder. Available for Visa only.

## Derived Unique Key Per Transaction
Allows the encryption of a PIN via the use of a unique key for each transaction.

## Discover PayButton
The Discover PayButton is a digital wallet that stores cardholder payment information to be used at the time of checkout on-line or through a mobile device.

## Discretionary Data
Any valid information that the issuer uses for “on-us” transactions and wishes to have transmitted through the authorization process for inquiries on interchange transactions.

## Driver's License Number
Driver's license number of consumer, for Check Verification / Guarantee requests. When requesting verification with Driver's License Number, you must use the State Code field to indicate the state in which the driver's license was issued.

## Duration
Duration field is the anticipated length of the hotel stay or auto rental and is required in hotel and auto rental custom payment service transactions.

## Dynamic Descriptor
A [custom descriptor](?path=docs/Resources/Guides/Dynamic-Descriptor.md) you configure and pass with each transaction via the API. This includes both [soft descriptors](#soft-descriptor) and [hard descriptors](#hard-descriptor). Contact your account representative for more information on using dynamic descriptors.

## Expiration Date
The date embossed on the card beyond which the card is not valid to be used. Generally mentions the Month and Year that the card expires.

## Hard Descriptor
The descriptor that shows up after a transaction has settled. As soon as the customer's bank has finalized the transaction status, the hard descriptor will be permanently displayed as the description of the charge on the customer’s statement.

## Interchange Fees
Compensation paid by the acquiring member to an issuing member for particular expenses incurred in the process of interchange transactions.

## Issuing Bank
The issuing bank also known as the customer's bank, issues a payment card or checks to an individual.  

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