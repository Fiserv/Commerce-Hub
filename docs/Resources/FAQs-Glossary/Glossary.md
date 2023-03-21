---
tags: [Definition, Commerce Hub, Glossary, FAQ]
---

# Glossary

| [#](#0-9) | [A](#a)| [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [J](#j) | [K](#k) | [L](#l) | [M](#m) | [N](#n) | [O](#o) | [P](#p) | [Q](#q) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [W](#w) | X | [Y](#y) | Z |

# 0-9

## 3-D Secure

[3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md) (3DS and EMV 3-D Secure) is a protocol designed to be an additional security layer for online credit and debit card transactions. The name refers to the "three domains" which interact using the protocol: the merchant/acquirer domain, the issuer domain, and the interoperability domain.

This is a technical standard that adds security to online Card Not Present transactions by authenticating the customer as the owner of the payment card account.

3-D Secure technologies include Visa Secure (previously Verified by Visa), Mastercard SecureCode, Discover ProtectBuy, JCB International J/Secure, and American Express SafeKey.

---

# A

## Access Token	
A cryptographically secure credential that allows merchants to access the API.

## Access Control Server
An Access Control Server (ACS) is a card issuer component in the 3-D Secure process.

## Activation
Notification to an issuer that a Prepaid card has been purchased and should be activated for cardholder usage.

## Acquirer
The acquirer or acquiring bank is the bank or financial institution that processes credit or debit card transactions on behalf of a merchant. The acquirer sends the merchant's transactions to the customer's issuing bank through the card network.

## Acquirer Reference Number
An Account Reference Number (ARN) also known as a Retrieval Reference Number, is a UUID returned in the [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md) for a credit card transaction. Similar to STAN, an ARN is also used for refunds to track the processes through the acquiring bank, network, issuer, and processor.

## Address Verification Service 
The [Address Verification Service (AVS)](?path=docs/Resources/Guides/Fraud/Address-Verification.md) verifies customer-supplied billing address information against the billing address on the file at the issuer for Card Not Present transactions.

## Agile Software Development	
Agile software development refers to a group of software development methodologies that promotes development iterations, open collaboration, and process adaptability throughout the lifecycle of the project.

## Aggregator
Aggregators are defined as third party billers that bill for services/goods rendered by another entity. The terms Payment Facilitator, Payment Service Provider, and Aggregator are interchangeable terms for the same functionality.

## Approval Code
The approval code (authorization ID or authorization code) is an alphanumeric value, assigned by the issuing bank, to an authorization request that has received approval. The `approvalCode` is returned in the [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md). 

## Authorizing Network ID
A 3-digit value identifying the network providing the response to the request message.

## Available Balance
The available balance are the funds in a checking or on-demand account that are available for use by the customer or account holder. These are funds that are available for immediate use, and includes deposits, withdrawals, transfers, and any other activity that has already cleared or pending on the account.

## Authentication Value
The authentication value is returned as a cryptogram in digital payments e.g. [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md) and [wallets](?path=docs/Getting-Started/Getting-Started-Wallets.md). Also known as Cardholder Authentication Verification Value (CAVV) or Accountholder Authentication Value (AAV).

## Authorization
Authorization is necessary to verify whether a customer's payment source has sufficient funds. An authorization request is submitted as part of [charges](?path=docs/Resources/API-Documents/Payments/Charges.md).

## Auto-Substantiation
The process of verifying that purchase transactions are for expenses permitted and eligible under Internal Revenue Service regulations for Flexible Spending Accounts (FSAs) and Healthcare Reimbursement Arrangements (HRAs).

## Authorization Type Indicator
Identifies if the authorization requested is an initial, reauthorization, deferred or incremental.

---

# B

## Bank Identification Number
The Bank Identification Number (BIN) is the first 8 digits of the unique card number [Primary Account Number](#card-number) (PAN). Identifies the card network and the issuer. Sometimes referred to as the Issuer Identification Number (IIN).

## Bank Card Association
A group of institutions formed for the purpose of sponsoring a bank card program and/or using a common processing and administrative center.

## Banknet Data
A 13-digit field that identifies the date in which the authorization record was captured by Mastercard’s telecommunications network, followed by a unique data element which identifies the authorization transaction.

## Banknet Reference Number
Unique data element, assigned by Mastercard, which identifies an authorization transaction.

## Base URL	
The Base URL is used to reach the installed shopping cart, e.g. https://mydomain.com/cart/ or https://shop.mydomain.com/.

## B2B Invoice Payment
B2B invoice payments are payments made between two merchants for goods or services. Digital B2B invoice payments solutions make it faster to issue, receive, and process payments.

## Binary Synchronous
Binary Synchronous (BISYNC) is a category of synchronous communications protocols.

## Bill Payment Indicator
Identifies if the bill payment requested is a recurring, instalment, or deferred.

---

# C

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

## Card Expiration Date
The date beyond which the card may not be honored.

## Cashback
A transaction in which a cardholder obtains cash as part of the transaction.

## Cash Advance
A transaction in which a customer receives cash in-person which is posted against the customer's account.

## Clickjacking
A malicious technique of tricking a customer into clicking on something that can potentially reveal confidential information or allow unauthorized people to take control of their computer while clicking on seemingly something harmless links, including web pages. Commerce Hub handles the risk of clickjacking by its [`iFrame solution`](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md). 

## Customer Account
The customer account associated with a customer account number or checking account number used in a payment request.

## Customer Street Address
The customer street address includes the street number and name. The [`street`](?path=docs/Resources/Master-Data/Address.md) field is part of the shipping address or billing address object.  

## Customer Zip/Postal Code
Five- or nine-digit zip code of the customer's billing or shipping address. When the customer is international, this field contains the alphanumeric postal code. The [`postalCode`](?path=docs/Resources/Master-Data/Address.md) is part of the shipping address or billing address object.

## Check Digit
The last digit of an account number that is calculated according to a predetermined formula and used to validate an account number.

## Chargeback
A process by which a customer disputes the payment and often results in the money being refunded to the customer by the issuing bank unless the merchant can show the transaction is valid.

## Customer Account
Account connected to the financial institution that issued a payment card or checks.

## Closed Loop Prepaid Card
Closed loop prepaid solutions are designed to be used only at the issuer’s locations. Examples of closed loop issuers include retail stores, casinos, oil companies, e-commerce businesses, telecommunications companies, and restaurants.

## "Code 10" Authorization
A merchant's request for a "code 10" authorization is used to alert the authorization network (processor) that a suspicious transaction is occurring.

## Conditioning
The "tuning" or addition of equipment to improve the transmission characteristics or quality of a leased voice-grade line so that it meets specifications for data transmission.

## Contactless Payments
Contactless payments use radio frequency (RF), also known as Near Field Communication (NFC). The technology is used in payment cards and mobile devices. Contactless Payment Cards are like traditional cards except that they have a contactless chip. 

When a customer taps or waves a payment instrument at a merchant terminal equipped with an RFID (Radio Frequency Identification) reader, the instrument wirelessly transmits payment details to the terminal.

## Credit Card
A plastic card used to purchase goods and services and to obtain cash advances on credit for which the cardholder is subsequently billed by the issuing member for repayment of credit extended.

## Component Object Model
Component Object Model (COM) makes it easier to create components (pieces of code) or use preexisting components that can interact with other components and applications (using the object model). A big advantage is that these components can be written using a variety of computer languages.

## Credit Line
The monetary amount of credit extended to a customer.

## Clearing
The process where the merchant's processor withdraws or deposits funds from the customer's bank account.

## Cryptogram
A limited or single-use key (cipher) that encrypts the payment data. It is required to de-encrypt the payment data by the processor to continue processing the payment.

## Currency Code
The [three-digit code](?path=docs/Resources/Master-Data/Currency-Code.md) to designate the type of currency of the transaction.

## Customer
A person or company that buys goods or services from a merchant.

---

# D

## Decline
A response to a request for authorization in which approval is refused. A merchant receiving a decline should not complete the transaction.

## Deferred Authorization
Identifies transactions where the billing occurred after the merchandise was delivered to the customer. This normally occurs because of offline payment transaction.

## Deferred Bill Payment
Identifies a bill pay transaction where a recurring or incremental payment is delayed and charged at a future date.

## Derived Unique Key Per Transaction
Derived Unique Key Per Transaction (DUKPT) allows the encryption of a PIN via the use of a unique key for each transaction. DUKPT system of derived keys is used in a point-of-sale (POS) environment where the merchant can accept transactions from a large number of unique [PIN entry](?path=docs/Resources/Master-Data/Pin-Block.md) devices. This technique involves the use of a non-secret key serial number and a secret base derivation key. On each transaction, the PIN pad derives a unique key based on a previous key and the key serial number. Terminal encrypts the PIN with this derived key, and sends both the encrypted PIN and the key serial number to the Host. See also [Key Management](#key-management).

## Direct Capture
Direct capture also known as terminal direct capture or direct settlement, is the process where the merchant or the merchant's terminal directly settles the batch on the backend settlement system. Typically, credit transactions are setup for direct capture. See also [host capture](#host-capture) and [gateway capture](#gateway-capture).

## Doing Business As
Doing business as (DBA) refers to the specific name and location of the merchant's store where a transaction is made.

## Debit
Debit card transactions are the purchase/obtaining of goods and/or services, balance inquiries and cash withdrawals initiated by a cardholder with a debit card. There are two types of of debit card transactions: [PIN-based](?path=docs/Resources/Guides/Debit/PIN_Debit.md) and PIN-less. 

## Debit Function Code
Indicates the specific purpose of the message within its message class.

## Debit Network Response Code
The code that specifies the actual result provided by the debit network in response to the request message.

## Debit Network Routing ID
A 6-digit value identifying the specific debit network providing the response to the request message.

## Developer Dashboard
A web portal for managing your developer account, apps, and API credentials. 

## Device-Specific Primary Account Number
Device-Specific Primary Account Number (DPAN) is an encrypted, tokenized value of payment account information tied to a mobile device. Used by Apple Pay.

## Digital Certificate
Digital certificates are password protected files issued from a Certificate Authority (CA). The CA validates information on a company or person then issues a certificate that identifies and provides information so that people can be more certain that the information provided on a website is genuine.

## Discover PayButton
The Discover PayButton is a digital wallet that stores cardholder payment information to be used at the time of checkout on-line or through a mobile device.

## Discretionary Data
Any valid information that the issuer uses for “on-us” transactions and wishes to have transmitted through the authorization process for inquiries on interchange transactions.

## Dynamic Currency Conversion
Dynamic Currency Conversion (DCC) gives foreign customers the choice to pay for goods and services purchased in their home currency.

## Driver's License Number
Driver's license number of consumers, for Check Verification / Guarantee requests. When requesting verification with Driver's License Number, you must use the State Code field to indicate the state in which the driver's license was issued.

## Days Rented
The `daysRented` field is the length of the [car rental](?path=docs/Resources/Guides/Industry-Verticals/Car-Rental.md) and is required in car and auto rental custom payment service transactions.

## Dynamic Descriptor
A [custom descriptor](?path=docs/Resources/Guides/Dynamic-Descriptor.md) you configure and pass with each transaction via the API. This includes both [soft descriptors](#soft-descriptor) and [hard descriptors](#hard-descriptor). Contact your account representative for more information on using dynamic descriptors.

---

# E

## Echo
The return of transmitted data.

## E-commerce
Conducting business activities - buying, selling, and other transactions via the Internet.

## Electronic Commerce Indicator
Electronic Commerce Indicator (ECI). Use of this field is mandated by the banks and used to determine the source of the original transaction request.

## EMV
EMV is a global standard for inter-operation of Integrated Circuit Cards (ICC or chip cards) and IC card capable point of sale (POS) terminals. This standard is used for authenticating credit and debit card transactions.

## EMV Fallback
An EMV fallback transaction occur when an EMV-enabled payment card fails to complete the payment using EMV technology. In these instances, the merchant might “fall back” to processing the payment by manually entering the card details or swiping the magnetic stripe.

EMV fallback transactions only apply to card-present transactions where physical cards are presented by cardholders at payment terminals.

## End Sentinel
The character that follows the final character of data recorded on the track of the card's magnetic stripe.

## Encryption
Encoding and securing information by converting its format for transmission. Receivers of the encrypted message must decrypt it to read it.

## Estimated Authorization
An estimated authorization occurs when the merchant does not have the total amount to be charged to the cardholder at the time when the original authorization is presented. An estimated authorization is typically found in (Travel and Entertainment) environments, where the total charges for the full suite of services rendered is not available at the time of the initial authorization.

## Electronic Benefits Transfer
Electronic Benefits Transfer (EBT) is a payment card used at the point of sale to access a government account for Food Stamps or Cash Benefits.

## Electronic Funds Transfer
Electronic Funds Transfer (EFT) is the electronic transfer of money from one bank account to another, using an ATM, direct deposit, debit or credit card, paper check, wire transfers or bill payments.

## Expiration Date
The date embossed on the card beyond which the card is not valid to be used. Generally, mentions the Month and Year that the card expires.

## Existing Debt Indicator
Identifies the transaction as payment of an existing debt obligation, such as a car loan payment.

---

# F

## Firewall
A system between networks that filters data passing through it and removes unauthorized traffic, thus enhancing the network's security.

## Financial Institution
Any commercial bank, federal or state savings and loan association; federal or state savings bank; or any federal or state-chartered credit union. Also known as issuing bank (card issuer).

## Floor Limit
A maximum monetary amount above which a particular transaction requires authorization.

## FNS Number
A seven-digit merchant number issued by the US Department of Agriculture Food and Nutrition Service that is used in EBT Food Stamps.

## Forced Post
A [transaction](?path=docs/Resources/API-Documents/Payments/Forced.md) that immediately captures a transaction previously authorized outside of the payment gateway by calling the Voice Authorization Center. 

## Foreign Currency Amount Format
The local currency (non-U.S. dollars) transaction amount. The [decimal position](?path=docs/Resources/Master-Data/Currency-Code.md) is assumed, based upon the type of currencies.

## Front End Processor
The front-end processor (FEP) is a computer that connects to the communications channels on one end and the main computer on the other. Software in the FEP directs the transmitting and receiving of messages according to the rules of the communications protocol used in the network. The communications software, executing in the FEP, detects and corrects transmission errors, assembles and disassembles messages, etc., so that only "pure" data is transferred to and from the main computer (stripped of all codes that are attached for transmission through the network). A FEP is also called a communications control unit.

## Full-Duplex
A communications channel that transmits in both directions at the same time.

## Funding Primary Account Number
Funding Primary Account Number (FPAN) is the actual account number appearing on the physical card (or similar device) issued by issuing bank. See also [DPAN](#device-specific-primary-account-number).

---

# G

## Gateway
A gateway is a program or piece of hardware that passes data between networks.

## Gateway Capture
Gateway capture also known as gateway settlement, is the process where Commerce Hub closes and settles batches on behalf of the merchant. Typically, credit transactions are setup for terminal capture. See also [host capture](#host-capture) and [direct capture](#direct-capture).

---

# H

## Hard Descriptor
The descriptor that shows up after a transaction has settled. As soon as the customer's bank has finalized the transaction status, the hard descriptor will be permanently displayed as the description of the charge on the customer’s statement.

## Hot Card
A card being used on an account on which excessive purchasing, indicative of unauthorized purchasing, is taking place. Usually, a lost or stolen card.

## HMAC
Hash-based Message Authentication Code, used to ensure secure transmission of transactions.

## Host
The host is generally the central or controlling computer in a distributed system.

## Host Capture
Host capture also known as host capture system (HCS), is the process where the host _(e.g. Buypass)_ closes and settles batches on behalf of the merchant. Typically, debit transactions are single message transactions and setup for host capture. See also [direct capture](#direct-capture) and [gateway capture](#gateway-capture).

## Host Security Module
A Host Security Module (HSM) is a hardware device that safeguards and manages digital keys for strong authentication and provides crypto-processing. HSM’s are typically supported for merchants supporting an encrypted online PIN in transactions sent to Commerce Hub.

## Hybrid Card
A hybrid card combines both debit and credit card functionality in a single card. Based on the rounting choise it allows the customer to be charged immediately using debit processing or a later date using credit processing.

---

# I

## Idempotency
A property of an operation that states that clients can make that same call repeatedly while producing the same result. Our REST API uses the client_request_id element to ensure idempotency on transaction requests.

## Installation Root
The file system directory where the shopping cart is installed, e.g. /var/www/html/cart or /var/www/html/commerce.

## Interbank Network
An interbank network, known as ATM consortium or ATM network, is a computer network that allows ATM cards issued by different financial institution to perform transactions through ATMs that belong to another member of the network.

## Interchange
The exchange of transaction data between the merchant bank and customer card issuing bank.

## Interchange Fees
Compensation paid by the acquiring member to an issuing member for expenses incurred in the process of interchange transactions.

## Invalid Transaction ID
Response displayed when the `transactionID` sent does not match the transaction previously sent. This can also occur if the transaction ID cannot be found in the database.

## Internet Protocol
Internet Protocol (IP) defines how information gets passed between systems across the Internet.

## Internet Service Provider
Internet Service Provider (ISP) is a company that provides individuals and businesses with access to the Internet. Many ISPs also provide website hosting services.

## Independent Software Vendor
Independent Software Vendor (ISV) term may also refer to the vendor’s software developer.

## Integrated Voice Response
Integrated Voice Response (IVR) technology creates automatic message selections through phone systems.

## Issuing Bank
The issuing bank also known as the customer's bank, issues a payment card or checks to an individual.

---

# J

## JavaScript
JavaScript (JS) is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. Commerce Hub supports JavaScript integrations with [Payment.JS](?path=docs/Online-Mobile-Digital/Payment-JS/Payment-JS.md).

## JSON
JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. Commerce Hub requests and responses are written in JSON format.

---

# K

## Key Management
Key management refers to management of cryptographic keys in a cryptosystem. This includes dealing with the generation, exchange, storage, use, crypto-shredding (destruction) and replacement of keys. It includes cryptographic protocol design, key servers, user procedures, and other relevant protocols. See also [Derived Unique Key Per Transaction (DUKPT)](#derived-unique-key-per-transaction).

## Key Rotation
Key rotation in card processing is when an encryption key is expired after a timestamp and replaced by generating a new cryptographic key. It is a good practice to keep rotating the SAQ encryption keys on a regular basis to meet industry standards.

---

# L

## Leased Line
Dedicated communications channel leased from a common carrier; leased lines usually can handle greater transmission speeds than the dial-up telephone system. Leased lines from the telephone company can be "conditioned" (electronically fine-tuned), which can reduce transmission error rates.

## Load
Notification to an issuer of an amount to be loaded to a prepaid account’s available balance.

## Local Area Network
Communications network within an organization; local area networks (LAN) connect various hardware devices together via a network cable or wi-fi. Local networks do not rely on external public or private communications services, although they may connect to them in order to transfer information across long distances.

## Local Totals
Summary Data accumulated at the merchant’s device.

## Longitudinal Redundancy Check
A Longitudinal Redundancy Check (LRC) is a verification value that ensures that no data have been lost in the stripe reading process. The LRC is equivalent to a check digit of the entire track, including the control characters.

## Lost Card
A bank card that has been reported to the credit issuer as lost or misplaced by the cardholder of record.

## Luhn Check
The Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm, is a simple checksum formula used to validate credit card numbers.

---

# M

## Magnetic Stripe
A stripe of magnetic information affixed to the back of a plastic credit (or debit/EBT) card. The magnetic stripe contains essential customer and account information. See also [Track I/II](#).

## Magnetic Stripe Payment
A payment made with a traditional card that has a magnetic stripe on the back. Also referred to as a swipe payment.

## Mastercard Assigned ID
Mastercard Assigned ID (MAID) is an identifier assigned by Mastercard to identify a specific merchant who is registered with Mastercard for specific fees, special interchange treatment, or participation in select acceptance programs.

## Mail/Telephone Order Transaction
The Mail/Telephone Order Transaction (MOTO) is a purchase of goods or services where the cardholder is not present at the point of sale.

## Market Specific Authorization
This entry is used to indicate that market-specific authorization data was present in the authorization request to Visa’s VIP system.

## Market-Specific Authorization Data
Information supplied in the authorization request to assist the issuer in making better authorization decisions.

## Manual Refund
A [credit](?path=docs/Resources/API-Documents/Payments/Credit.md) that is not associated with a previous payment. Because it is an independent transaction, it can be for any amount; a manual refund is not limited to the total of a previous sale. Also referred to as an open refund.

## Masterpass
Masterpass is a digital wallet service that makes online shopping safe and easy by storing the customer's payment and shipping information securely.

## Merchant
A person or company that sells goods or services to a customer.

## Merchant Advice Code
A code associated with the reason a recurring payment transaction has been declined.

## Merchant Category Code
The Merchant Category Code (MCC) is an industry standard [four-digit number](?path=docs/Resources/Master-Data/Merchant-Category-Code.md) used to classify a business by the type of goods or services it provides. Also known as Standard Industrial Classification (SIC).

## Merchant Group
A feature used to associate all the merchants belonging to a single enterprise, so you can manage and report on them in bulk. A merchant can belong to multiple merchant groups. You can create merchant groups in the Developer Dashboard.

## Merchant ID
A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. Utilized for clients that support [dynamic descriptor](?path=docs/Resources/Guides/Dynamic-Descriptor.md), or support multiple stores in the same app.

## Merchandise Return
A refund to the cardholder’s account for merchandise previously purchased. Returns are typically processed a day (or days) after the cardholder performed the original purchase.

## Merchant Bank
The bank that has entered into an agreement with a merchant to accept deposits generated by bank card transactions.

## Merchant Floor Limit
A maximum monetary amount above which a particular transaction requires authorization.

## Message
A communication transmission; regardless of the nature of the data/information, it is considered a message as it travels from the terminal to the computer or from computer to computer over a communications channel.

## Modem
A modulation/demodulation device that provides compatibility between input/output equipment and communications facilities by conditioning data signals for transmission.

## mPOS
A mobile acceptance solution (mPOS) uses a mobile telecommunications device that is not solely dedicated to POS functions and can wirelessly communicate across open networks to accept a card payment. The solution will typically include a hardware attachment for the purpose of card reading and /or pin entry.

## Multiple Authorizations
In the hotel and auto rental industries, multiple or [incremental authorizations](?path=docs/Resources/Guides/Authorizations/Incremental-Auth.md) and a single partial reversal are often obtained after the initial authorization.

## Multi-Dropped
A communication line system having more than one terminal connected to the same line.

## Merchant Verification Value
Merchant Verification Value (MVV) is an identifier assigned by Visa to identify a merchant who is registered with Visa for specific fees, special interchange treatment, or participation in select acceptance programs.

---

# N

## National Association
MasterCard International or Visa International, which are licensing and regulatory agencies for bank card activities.

## Negative File
A file containing all accounts for which charge privileges have been revoked by the card issuer.

## Network Retrieval Reference Number
A reference number supplied by the debit network providing the response. It is used to help locate the transaction.

## Network Response
Ancillary data, obtained in the authorization process, which is used internally by First Data.

## Number of Nights
The `numberOfNights` field is the length of the [lodging stay](?path=docs/Resources/Guides/Industry-Verticals/Lodging.md) and is required in hotel and lodging custom payment service transactions.

---

# O

## On-Us Transaction
A transaction in which both the cardholder and the merchant are signed by the same member.

---

# P

## Partial Authorization
Commerce Hub can return a [partial authorization](?path=docs/Resources/Guides/Authorizations/Partial-Auth.md) if the transaction amount exceeds the customer’s payment source limit. 

## Payment Token
A cryptographically secure representation of payment instrument details for use with subsequent payment transactions. This token may be generated for a single or multiple use. Through a [payment token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md), the merchant does not need to store sensitive payment details on their servers.

## Payment Card Industry Data Security Standard
Payment Card Industry Data Security Standard (PCI DSS) is the published security standards for the handling of payment card data.

## PIN
A PIN also known as a Personal Identification Number, is a unique 4 to 12 digit confidential code created by the customer to secure PIN based transactions. This can be submitted in Commerce Hub using the encrypted [PIN block](?path=docs/Resources/Guides/Debit/PIN_Debit.md).


## Practical Extraction and Report Language
Practical Extraction and Report Language (Perl) is a popular programming language used for web server applications. It can be used for creating interactive forms and CGI programs.

## Point-of-Sale
Point-of-Sale (POS) is the point at which a product is paid for. [In-person](?path=docs/Getting-Started/Getting-Started-InPerson.md) transactions are conducted by a terminal or software. [Online](?path=docs/Getting-Started/Getting-Started-Online.md) transactions are conducted by a software on their online store or mobile app.

## Post-Auth
A secondary transaction that [captures](?path=docs/Resources/API-Documents/Payments/Capture.md) a pre-auth transaction and charges the customer's account.

## Pre-Auth
A pre-auth is a customer transaction where the merchant can validate a given amount is available on the customer payment method (physical card, digital wallet, etc.) and places a hold on a project sale amount. This amount is held on the customer account (credit limit or bank balance), but not yet transferred to the merchant. Once the merchant initiates a [capture](?path=docs/Resources/API-Documents/Payments/Capture.md) transaction, the held amount is then settled with the merchant batch.

## Primary Transaction
The main independent transactions between a customer and a merchant. Commerce Hub supports [Charges](?path=docs/Resources/API-Documents/Payments/Charges.md), [Credit](?path=docs/Resources/API-Documents/Payments/Credit.md), and [Forced](?path=docs/Resources/API-Documents/Payments/Forced.md) transactions.

## Prepaid Closed Loop
Prepaid Closed Loop is a [gift card](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md) product that is designed to only be used at the merchant's locations. Closed Loop payment schemes allow companies to reward loyalty and increase customer intimacy. 

---

# R

## Recurring Transaction
A transaction where the merchant charges for goods or services at a defined frequency (for example, a monthly subscription.)

## Real-time
Events and actions are taking place as it happens, and the time frame is now.

## Receipt Link
[Hosted Payment Pages'](?path=docs/Online-Mobile-Digital/Hosted-Payment-Page/Hosted-Payment-Page.md) simplest method of displaying customer receipts.

## Refund
A secondary transaction used to [return](?path=docs/Resources/API-Documents/Payments/Refund.md) funds to the customer of the total charge or a portion of that charge.

## Reporting
Commerce Hub provides extensive [reporting](?path=docs/Resources/Guides/Reporting/Reporting-Overview.md) with our virtual terminal. Detailed deposit totals and online activity can be tracked daily.

## Ruby
A dynamic, reflective, general purpose object-oriented programming language. Ruby combines syntax inspired by Perl with Smalltalk-like object-oriented features.

## Ruby on Rails
An open-source web application framework for the Ruby programming language. It is often referred to as 'Rails' or 'RoR'. It is intended to be used with an Agile development methodology, which is often utilized by web developers for its suitability for short, client-driven projects.

---

# S

## Sandbox
This environment is separate from the production environment. The sandbox will enable you to test apps prior to deploying them on the production server. 

## Security Code Indicator
The `securityCodeIndicator` used to indicate the presence of a [card security code](#card-security-code) during a [verification](?path=docs/Resources/Guides/Fraud/Security-Code.md) request.

## Security Code Response
The [value](?path=docs/Resources/Guides/Fraud/Security-Code.md#response-values) returned as `securityCodeMatch` or `securityCodeResponse` from the issuing bank.

## Sale
A sale is a customer transaction where the purchase amount is authorized and settled at the same time. If a sale is not voided [(cancel)](?path=docs/Resources/API-Documents/Payments/Cancel.md) before batching, the merchant funding process begins for this charge. At this point, the merchant can still return funds [(refund)](?path=docs/Resources/API-Documents/Payments/Refund.md) the customer.

<!-- theme: warning -->
> Settlement time is based on processing network, contact your account manager for more details.

## Secondary Transaction
The subsequent transactions between a customer and a merchant. Commerce Hub supports [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md), [Cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md), and [Refund](?path=docs/Resources/API-Documents/Payments/Refund.md) transactions.

## Self Assessment Questionnaire
The PCI DSS Self-Assessment Questionnaires (SAQs) are self validation tools intended to assist merchants and service providers in evaluating their compliance with the PCI DSS, ideal for merchants and service providers that are not required to submit a report on compliance, an SAQ is designed as a self-validation tool to assess security for cardholder data. For more information visit [PCI Security Standard](https://www.pcisecuritystandards.org/) website.

## Settlement
The process by which a merchant will receive or return funds for a transaction.

## Shopping Cart
An API software that allows a customer to purchase goods and services and connects to Commerce Hub for transaction processing. Also known as Web Storefront. 

## Silent Post
A Payment Pages process where Commerce Hub transmits results to the merchant server but does not receive a response back.

## Split Shipment
A [split shipment](?path=docs/Resources/Guides/Split-Shipment.md) transaction charges for only part of the goods or services being shipped.

## Soft Descriptor
The descriptor that shows up after a transaction has been authorized. If the charge is in a pending state, the soft descriptor will be displayed on the customer's statement.

## Stand-In-Processing
Stand-In-Processing (STIP) is a service offered by the Associations that provides transaction processing services on behalf of an unavailable or timed-out issuer.

## Start Sentinel
The character that indicates the initial data position on the track of the card's magnetic stripe.

## Stock Keeping Unit
Stock Keeping Unit (SKU) is a number used to uniquely identify a product.

## Store and Forward
Store and forward is a technique in which information is stored in an intermediate system where it is kept and sent at a later time to the final destination. The intermediate system, or node in a networking context, verifies the integrity of the message before forwarding it. In general, this technique is used when their is no connectivity or intermittent connectivity. It may also be preferable in situations when there are long delays in transmission and variable and high error rates, or if a direct, end-to-end connection is not available.

## Sub-Merchant
A merchant that contracts with a [payment facilitator](?path=docs/Resources/Guides/Industry-Verticals/Payment-Faciliator.md) or service provider to obtain payment services. Also known as Sponsored Merchant.

## Supplemental Nutrition Assistance Program
Supplemental Nutrition Assistance Program (SNAP), formerly known as Food Benefit, it is a program to provide nutrition assistance to eligible individuals and families.

## Surcharge Fees
A surcharge, also known as checkout fee, is an extra fee charged by a merchant when receiving a payment by check or payment card. The surcharge covers the cost to the merchant for processing the payment, such as the merchant service fee imposed by a processor.

<!-- theme: warning -->
> Surcharge is not supported by all processors or in all states, contact your account manager for more details.

## Synchronous Communications
High-speed transmission, synchronous communications is the transmission and recognition of long groups of characters at a time. Both the sending and receiving devices are set to the same synchronization of pulses (BITS).

<!-- theme : warning -->
> Not all processors and acquirers allow surcharge fees. For more information, please contact your account representative.

---

# T

## TeleCheck ECA
The TeleCheck Electronic Check Acceptance® (ECA®) is a service that converts a paper check into an electronic item at the point of sale.

## Transport Layer Security
Transport Layer Security (TLS), previously known as Secure Sockets Layer (SSL) is a cryptographic protocol designed to provide communications security over a computer network. Commerce Hub requires that integrations using our RESTful API have TLS to meet PCI compliance requirements.

## Transponder
A transponder is a wireless communications device that picks up and automatically responds to an incoming signal. For payment systems it is used to communicate cardholder account information to a POS device.

## Triple DES
Triple DES (3DES or TDES) is the Triple Data Encryption Algorithm (TDEA or Triple DEA) block cipher, which applies the Data Encryption Standard (DES) cipher algorithm three times to each data block.

## Token Cryptogram
A cryptogram generated using the [Payment Token](#payment-token) and additional transaction data to create a transaction-unique value.

## Tokenization
[Tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) is a process of replacing sensitive data with non-sensitive equivalent, referred to as a token, that has no extrinsic or exploitable meaning or value. In the payments industry, it is used to safeguard a card's PAN by replacing it with a unique string of numbers.

---

# U

## UNIX
A general-purpose operating system that can implement a Perl Module or Ruby Client Library.

## Universal Product Code
Universal Product Code (UPC) is the barcode used for scanning of trade items at the point of sale.

---

# V

## Voice Authorization
The authorization procedure in which a merchant uses a standard telephone to request authorization from an acquirer center. This is used when the bank provides a call or referral response message or for offline processing. Once approved, a [forced post](?path=docs/Resources/API-Documents/Payments/Forced.md) of transaction is required. 

## Void
A void or [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md) is a type of transaction used to correct an error or to accommodate a customer’s change of mind after the approval of the original transaction. 

## Virtual Point of Sale
Virtual Point of Sale (VPOS) or [Virtual Terminal](?path=docs/Online-Mobile-Digital/Virtual-Terminal/Virtual-Terminal.md) is a web based application that allows the merchant to process transactions when their API is down.

---
