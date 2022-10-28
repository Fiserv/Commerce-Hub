---
tags: [Response Code, Error Code, Error Response]
---

# Error Response Codes

The error code indicates the reason why a transaction is rejected and is returned in a HTTP 2xx, 4xx or 5xx response. Commerce Hub includes the code along with the corresponding message in the [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md) or [HTTP error response](?path=docs/Resources/Guides/Response-Codes/HTTP.md). 


<!--
type: tab
titles: 1xx, 2xx, 3xx, 4xx, 5xx, 6xx-649, 65x-699, 7xx, 8xx, 9xx
-->

Codes starting with 1xx identifies an error in the submission data. This includes missing data, invalid data or format errors. Verify the data submitted and resend the request.

| Code| Message |
| ---- | ----- |
| 100 | Invalid or Missing Field Data |
| 101 | Unknown Field Data in Object |
| 102 | Missing or Invalid Payment Source |
| 103 | Missing or Invalid Card Number or Token |
| 104 | Unable to Assign Card to Brand: Invalid |
| 105 | Invalid Amount or Currency |
| 106 | Amount or currency missing |
| 107 | Missing Required Field |
| 108 | Missing Conditional Data |	 	 
| 109 | Invalid or Incomplete Level 2 Data |	 	 
| 110 |	Invalid or Incomplete Level 3 Data |	 	 
| 111 | Blanks Not Passed in Reserved Field | 	 
| 112 | Approval Code Invalid |
| 113 | Invalid Date or Time |
| 114 | Invalid Time Zone |
| 115 | Missing or Invalid Expiration Date |
| 116 | Invalid Email Address |	 	 
| 117 |	Invalid MICR Data | 	 
| 118 | Invalid Mag Stripe or Track I/II/III Data | 	 
| 119 |	Missing Mag Stripe or Track I/II/III Data | 	 
| 120 |	Missing Terminal ID/City/State |	 	 
| 121 | Malformed JSON |	 	 
| 122 |	Missing Split Shipment Data | 	 
| 123 |	Illegal Characters in Field Data |	 	 
| 124 |	Dynamic Descriptor: Customer Phone Number Missing | 	 
| 125 |	Invalid MCC |	 	 
| 126 |	Invalid Subclass |	 	 
| 127 |	Invalid Approval Number	|
| 128 |	Invalid Transaction Version or Format |
| 129 | Missing Card Data In Request |
| 130 | Store Id Does Not Exist |
| 131 | Missing Referenced Transaction |
| 133 | The Order ID is Missing |
| 132 | Tax Amount Too Long |
| 134 | Invalid Merchant Order ID |
| 135 | Invalid Merchant Invoice Number |
| 136 | Another Transaction With Same OrderId/Transaction Id Currently Being Processed |
| 137 | Invalid Issuer |	 	 
| 138 |	Missing Body or Header in Request | 	 
| 139 | Hosted payment page only supports Ecom Transaction origin | 	
| 140 |	Hosted Payment Page Extended Hash Already Used |

<!--
type: tab
-->

Codes starting with 2xx identifies an error in the configuration setup. This includes merchant and terminal setup, account setup. Check the setup or contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 200 | Invalid Account Setup |
| 201 | Invalid Merchant ID or Setup |
| 202 | Invalid Terminal ID or Setup |
| 203 | Invalid Location or Setup |
| 204 | Invalid Merchant or Terminal |
| 205 | Invalid Payment Source or Not Supported |
| 206 |	Car Rental Not Enabled on Merchant Account |	 	 
| 207 |	Feature Not Enabled on Merchant Account	|	 	 
| 208 | Soft Descriptors Not Enabled on Merchant Account |		 	 
| 210 | Secure Code Not Enabled on Merchant Account |	 	 
| 211 |	3-D Secure Not Enabled on Merchant Account |		 	 
| 212 |	PayPal Not Enabled on Merchant Account |	
| 213 | Vault Not Enabled on Merchant Account |
| 214 | Transfer Not Enabled on Merchant Account |	 	 
| 215 |	Credit Not Enabled on Merchant Account | 
| 216 |Force Not Enabled on Merchant Account |
| 217 | Offline Transaction Not Enabled on Merchant Account |
| 218 | Additional Auth Data for MCC Not Enabled on Merchant Account |	 	 
| 219 | Bill Payments Not Enabled on Merchant Account |	 	 
| 220 | Split Shipment Not Enabled on Merchant Account | 	 
| 221 | Airline Service Not Enabled on Merchant Account | 
| 222 |	Cashback Not Enabled on Merchant Account |	 
| 223 |	Insurance Service Entry Not Enabled on Merchant Account | 	 
| 224 |	Hotel/Lodging Not Enabled on Merchant Account |	 
| 225 |	Visa Checkout Not Enabled on Merchant Account |	 
| 226 |	DCC Not Enabled on Merchant Account | 	 
| 227 |	Dynamic Pricing Not Enabled on Merchant Account	|	 
| 228 |	MasterPass Not Enabled on Merchant Account | 	 
| 229 |	Clearing Request Not Enabled for Merchant Account | 	 
| 230 |	Transaction Origin Not Supported |	 	 
| 231 |	Incomplete Merchant Configuration For PaySecure US |	 	 
| 232 |	Revolving Service Not Enabled On Merchant Account | 	 
| 233 |	Only Ecommerce Sale or Refunds Are Supported  | 	 
| 235 |	TeleCheck Account Not Active or Does Not Exist |	 	 
| 236 |	Merchant Account or Location Not Active	|
| 237 |	Merchant Account Not Permitted |
| 238 |	Request Not Supported for Account or Location | 	 
| 239 |	Partial Authorization Not Allowed | 	  
| 240 |	Chain ID Missing or Invalid for Merchant |	 	 
| 241 |	TPP ID Not Found |	 	 
| 242 |	Store Location 0 (zero) Not Allowed |	 	 
| 243 |	$0 Not Supported for Account or Location |	 	 
| 244 |	Service Not Allowed |
| 245 |	Invalid Transaction: Not Allowed |	 	 
| 246 |	Function Not Supported |	 	 
| 247 |	Currency Not Supported |	 	 
| 248 |	Settlement Split Not Supported |	 	 
| 249 |	TransArmor is not enabled or configured correctly on the Merchant Account | 
| 250 |	Missing or Invalid Clerk ID |	 
| 251 |	Checker/Manager Not Found |	 
| 252 | Security Insufficient | 
| 253 |	Invalid User |	 	 
| 254 |	Invalid Password |	 	 
| 255 |	Invalid New Password |	 	 
| 256 |	New Password Required |	 
| 257 |	Password Retry Exceeded: Account Locked | 	 
| 258 |	Invalid Account Data | 	 
| 259 |	Invalid MCC for Car Rental Merchant	|	 
| 260 |	Invalid MCC for Digital Wallet Operator |	 	 
| 261 |	Invalid MCC For Airline	| 	 
| 262 |	Invalid MCC For Hotel/Lodging |	 		 	 	 
| 268 |	Received Merchant TransactionId Does Not Match The TransactionId |

<!--
type: tab
-->

Codes starting with 3xx identifies an error related to [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md). Check the error message, correct the data and resend the request. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 300 | Payment Source Error: General |
| 301 | Missing or Invalid Payment Data	|	 
| 302 |	Missing or Invalid Encryption Data |	 	 
| 303 |	Account Verification Not Supported for Payment Source |
| 304 | Refund/Cancel Locked or Not Supported for Payment Source |
| 305 | Pre-Auth/Post-Auth Locked or Not Supported for Payment Source |
| 306 | Incremental PreAuth or Reauthorization or Balance Enquiry Is Not Supported for Brand type |	 
| 308 | Invalid MCC for Digital Wallet |
| 309 | Missing or Incorrect Wallet Type |
| 310 | Missing or Incorrect Channel Type |
| 313 |	Funds Expired |
| 314 |	Activation Amount Incorrect | 	 
| 315 |	Activation Failed |
| 316 |	Activation Voided |	 
| 317 |	Already Active |
| 318 |	Already Redeemed/Maximum Redemption Met |	 	 
| 319 |	Lock Has Expired | 	 
| 320 |	Recharge/Reload Amount Exceeded	| 	 
| 321 |	Max Recharge/Reload Exceeded |	 	  
| 322 |	Not Activated | 	 
| 323 |	Balance Unavailable |	 	 
| 324 |	Account Closed or Purged | 	 	 
| 325 |	Inactive Account: Not Activated |	 	 
| 326 |	Unknown Account |	 	 
| 327 |	Bulk Activation Error |	 	 
| 330 |	Duplicate Check Number |	 	 
| 331 | Declined: High Risk | 	 
| 332 |	Declined: Stand-in Rules | 	 
| 333 | Date of Birth Error | 	 
| 334 |	Invalid State Code |	 	 
| 335 |	Use exiting message (for failure),Token Request Failed |
| 336 |	Approval, Token Request Failed |
| 337 |	Invalid Tokenization Request: Payment Source Not Supported |	 	 
| 338 |	Invalid Tokenization Request: Invalid Account Information | 	 
| 339 |	Tokenization Service Unavailable |	 	 
| 340 | Tokenization Key Error |
| 341 | Token Type "One Time" Not Allowed |
| 342 | Token Type Not Provided |
| 343 | Tokenization Database Problem |
| 344 | Tokenization Key Server Problem |
| 345 | Invalid Token Type |
| 347 | Payment Source Missing With Create Token True. |
| 348 |	PayPal Unexpected Event |	 	 
| 349 |	PayPal Payment Status Unsupported |	 	 
| 350 | PayPal Sent Incorrect Order ID |	 	 
| 351 |	PayPal Sent Incorrect Amount or Currency |	 	 
| 352 | PayPal Refund Confirmation | 	 	 	 
| 353 | PayPal Timeout: Unknown State |
| 355 | Cash Back Greater Than Total |	 
| 356 | Crypto Box Offline |	 
| 357 | Undefined Card | 	 
| 358 | Debit Merchant ID or Service Entitlement Invalid  |	 
| 359 | Exceeds Debit Network Frequency	|	 
| 360 | Exceeds Withdrawal Limit |
| 361 | Debit Card Not Authenticated |
| 363 | 3-D Secure: Authentication Failed |
| 364 | 3-D Secure: PARes and CAVV/UCAF is Invalid |
| 365 | 3-D Secure: Waiting to Decline |
| 366 | 3-D Secure Rejected Due to ECI Filters |
| 367 | 3-D Secure: Same AAV/CAVV |
| 368 | 3-D Secure: Same XID and ECI Combination |
| 369 | 3-D Secure IVR: Not Supported |
| 370 | 3-D Secure IVR: PARes Empty |	 
| 371 | 3-D Secure IVR: Unable to Get PARes |	 
| 372 | 3-D Secure IVR: Not Waiting - Wrong State |	 
| 373 | 3-D Secure Payer Authentication Error	|	 
| 374 | 3-D Secure: Unable to Transfer Card Data | 	 
| 375 | 3-D Secure Payer Authentication Response Missing | 	 
| 376 | 3-D Secure Payer Authentication PaReq Missing |	 
| 377 | 3-D Secure Payer Authentication Merchant Data Missing |	 
| 378 | 3-D Secure Missing Data For Referenced Transaction | 	 
| 379 | 3-D Secure Unable to Get Payer Authentication |
| 380 | 3-D Secure Country Excluded from Authentication |
| 381 | 3-D Secure RESTful API Not Supported |
| 382 | 3-D Secure: Invalid Response Value Combination |	 
| 384 | MasterPass Cancelled by User |	 
| 385 | MasterPass Transaction Failed |	 
| 386 | MasterPass Transaction Not Allowed | 
| 387 | MasterPass Recurring Must Start Today | 	 
| 388 | MasterPass Not Allowed for Gambling Services |
| 390 | Customer did Not Return from Third Party |
| 391 |	Invalid NPA Transaction Amount | 	 
| 392 | Invalid NPA Transaction Type |	 	 
| 393 |	Invalid NPA Sale Transaction |	 	 
| 394 | Message Category Data Allowed Only for Mastercard |  	 
| 395 | Message Category Data not Allowed |
| 396 | Only Ecommerce Transactions Are Supported  |
| 397 | Card function Not supported |

<!--
type: tab
-->

Codes starting with 4xx identifies an error related to [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md). Check the error message, correct the data and resend the request. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 400 | Industry Specific General Error |	 
| 402 | Exceeds Limit | 	 
| 403 | Exceeds Frequency | 	 
| 404 | Exceeds Quantity |  	 
| 405 | Over Daily Limit | 	 	 
| 406 |	Over Weekly Limit |  	 
| 407 |	Over Monthly Limit |	 	 
| 408 |	Velocity Exceeded | 	 	 	 	 
| 410 | Daily Velocity Block Reject (Merchant) | 	 
| 411 |	7 day Velocity Block Reject (Merchant) |	 	 
| 412 |	30 Day Velocity Block Reject (Merchant) |	 	 
| 413 |	Daily Disbursement Reject Card (Funding) | 	 
| 414 |	7 Day Disbursement Reject Card (Funding) | 	 
| 415 |	30 Day Disbursement Reject Card (Funding) |
| 416 |	Daily Disbursement Reject Card (Payment) |	 
| 417 | 7 Day Disbursement Reject Card (Payment) | 	 
| 418 | 30 Day Disbursement Reject Card (Payment) |	 
| 419 | Per Transaction Amount Disbursement Limit Reject | 	 
| 420 | Daily/7 Day/30 Day Disbursement Manual Block |	 	 
| 422 | Max Balance Exceeded |
| 423 | Invalid Amount |
| 424 | Location Restricted |	 
| 425 | Product Code(s) Restricted |	 
| 426 | Account On Hold or Not Active |
| 427 | BIN Not Enabled |
| 429 | Invalid Driver | 	 
| 430 | Invalid Product |
| 431 | Exceeds Transaction Total Per Product |	 
| 432 |	Voyager ID Problem |	 	 
| 433 | Invalid Odometer |	 	 
| 434 | Invalid Restriction Code |	 	 
| 435 | Pay at Pump Not Allowed	| 	 
| 436 |	Over Fuel Limit	|
| 437 |	Over Cash Limit |	 	 
| 438 |	Over Merchandise Limit |	 	 
| 439 |	Over Repair Limit | 	 
| 440 |	Over Additive Limit |	 	 
| 441 |	Over Non-Fuel Limit | 	 
| 442 |	See Attendant | 	 
| 443 |Fuel Only | 	 
| 444 | Fuel Price Error |	 	 
| 445 |	Pay Inside |	 	 
| 446 |	Cashback Declined - Transaction Not Performed	|	 
| 447 |	Cashback Not Supported By Transaction Type |	 	 
| 448 |	Cashback Not Supported By Payment Source | 	  	 
| 450 |	Invalid SKU/EAN/SVC | 	 
| 451 |	Customer Under 18 Years Old |	 
| 452 |	Issuance Under Minimum Amount |	 	
| 453 |	Counter Offer to Supply Personal Guaranty | 	 
| 454 |	Need Additional Identification: Request Full SSN |	 	 
| 455 |	Customer Opt-out | 	
| 456 |	Driver's License or ID is Required | 	 
| 457 |	Signature Required |
| 458 | Authorization Required |	 	 	 	 
| 460 |	Bad Repay Date |	 	 
| 461 |	Bad Post Date	| 	  	 
| 463 |	Messages Pending  | 	 
| 464	| No Messages Pending | 	 
| 465 |	No Credit Account | 	 
| 466 |	No Checking or Savings Account |	  	 
| 468 |	Missing Contract ID |
| 471 |	Missing Mandate Reference | 	 
| 472 |	Missing Mandate Date |	 	 	 	 
| 474 | Local Tax Not Allowed | 	 	 
| 476 | Mobile Number (MSISDN) Unknown | 	 
| 477 | Topup Blocked |	 	 
| 478 |	Topup Limit Exceeded |	 	 
| 479 |	Invalid VO Number |	 	 
| 480 |	Mobile Number Blocked | 	 
| 481 |	Internal Provider Error	| 	 
| 482 |	SMS Response Timeout |	 	 	 
| 493 |	Trace Number in Authorization Request and Response Do Not Match |

<!--
type: tab
-->

Codes starting with 5xx identifies a [vertical](?path=docs/Resources/Guides/Industry-Verticals/Industry-Verticals.md) specific error. Check the error message, correct the data and resend the request. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 500	| Missing Required Data For Industry or MCC |
| 502 | Missing or Invalid Auth Data for Financial Institutions |
| 503 | Missing or Invalid BIN For Financial Institutions |
| 504 | Missing or Invalid Last 4(Four) for Financial Institutions |
| 505 | Missing or Invalid Postal Code for Financial Institutions |
| 506 | Missing or Invalid Surname for Financial Institutions |
| 507 | Missing or Invalid Birth Date for Financial Institutions |
| 508 | Missing or Invalid Account Number for Financial Institutions |
| 511 | Missing or Invalid Passenger Name For Airline |	 
| 512 | Missing or Invalid Ticket Number For Airline | 	 
| 513 | Missing or Invalid Departure Date For Airline | 	 
| 514 |	Missing or Invalid Origin For Airline | 	 
| 515 |	Missing or Invalid Carrier Code For Airline | 	 
| 516 |	Missing or Invalid Service Class For Airline | 	 
| 517 |	Missing or Invalid Stop Over Type For Airline | 	 
| 518 | Missing or Invalid Destination For Airline | 	 
| 519 |	Missing or Invalid Departure Tax For Airline | 	 	 
| 522 |	Missing or Invalid Arrival Date For Hotel/Lodging | 	 
| 523 |	Missing or Invalid Departure Date For Hotel/Lodging |	 	 
| 524 |	Missing or Invalid Folio Number For Hotel/Lodging |
| 525 | Reservation Authorization Expired |
| 526 | Reservation Authorization Already Captured |
| 527 | Reservation Authorization Already Settled |
| 529 | Convenience Fee Not Supported |
| 530 | Unacceptable Transaction Fee |	 	 	 	 
| 533 |	Missing or Invalid Rental Agreement Number field for Car Rental	|	 
| 534 |	Missing or Invalid Checkout Date Field for Car Rental | 	 
| 535 |	Missing or Invalid ClassId Field for Car Rental	| 	 
| 536 |	Missing or Invalid Renter Name Field for Car Rental |	 	 
| 537 | Missing or Invalid LocationId Field for Car Rental	| 	 
| 538 |	Missing or Invalid Return Date Field for Car Rental | 	 	 	 
| 541 |	Currency Conversion Error | 	 
| 542 |	DCC Inquiry Rate Already Used |	 	 
| 543 |	DCC Inquiry Expired | 	 
| 544 |	DCC/Dynamic Pricing Not Offered	| 	 
| 545 | Transaction Type Does Not Support DCC | 	 
| 546 |	Currency Does Not Match DCC Inquiry | 	 
| 547 |	Currency or Amount Missing From Dynamic Pricing Request	| 	 
| 548 |	DCC Inquiry ID Not Found |	 	 
| 549 |	Base Amount Does Not Match Request and DCC Inquiry |	 	 
| 550 |	Base Currency Does Not Match Request and DCC Inquiry |	 	 
| 551 |	Foreign Amount is Not Calculated Based on DCC Inquiry | 
| 552 |	Transaction Type Does Not Support Dynamic Pricing | 	 
| 553 | Exchange Rate Does Not Match Original | 	 
| 565 |	Payment Facilitator Does Not Exist |	 	 
| 566 |	No Terminal Activated or Supported for Payment Facilitator | 	 	 
| 567 |	Payment Facilitator Not Supported |	 	 
| 568 |	Payment Facilitator Missing ID Field |	 	 
| 569 |	Payment Facilitator Missing Name Field | 	 	 
| 570 |	Payment Facilitator Not Configured | 	 	 
| 571 |	Sub-Merchant Data Not Supported	| 	 
| 572 | Payment Facilitator Missing MerchantID | 

<!--
type: tab
-->

Codes starting with 6xx identifies an error related to [fraud checks](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md). Check the error message, correct the data and resend the request. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 600 | Fraud Error : General |
| 602 | Security Code Not Verified |
| 603 | Security Code Verification Failed |
| 604 | Security Code is Mandatory |
| 605 | Address Not Verified | 
| 606 |	Address Verification Failed |
| 607 |	Address is Mandatory |
| 609 | Blocked: BIN |
| 610 | Blocked: Card Number |
| 611 | Blocked: Country |
| 612 | Blocked: Customer Reference |
| 613 | Blocked: Duplicate Transaction |
| 614 | Blocked: Email |
| 615 | Blocked: Host |
| 616 | Blocked: IP or Class C Address |
| 617 | Blocked: Billing Name |
| 618| Velocity: Unkknown Error
| 619 | Velocity: Merchant Volume Exceeded |
| 620 | Velocity: Card Volume Exceeded |
| 621 | Velocity: Maximum Sale Exceeded |
| 622 | Velocity: Below Minimum Sale |
| 623 | Velocity: IP Volume Exceeded |
| 624 | Velocity: Refund Limit Exceeded |
| 625 | Velocity: Group Velocity limit has been exceeded |
| 626 | Bill-to Address Does Not Match Ship-to |
| 627 | Velocity: Location Velocity limit has been exceeded |
| 628 | Declined Fraud Detect Score |
| 629 | Declined: Fraud Detect Not Available |
| 630 | Velocity: EFT Velocity parameter record is missing |
| 631 | Velocity: Transaction Limit Exceeded |
| 632 |	Velocity: Max Amount Per Merchant Per Time-Box Exceeded | 
| 633 | Velocity: Max Amount Per Card Per Time-Box Exceeded |

<!--
type: tab
-->

Codes starting with 6xx identifies an error related to terminal configuration or encryption. Check the error message, correct the data and resend the request. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 650 | Terminal Error: General | 	 
| 651 |	Invalid Initialization: Try Again | 	 
| 652 | Initialization Not Permitted: Terminal Locked	| 	 
| 653 | Terminal Not Activated/Initialized | 	 
| 654 | Approved EMV Key Load |	 	 
| 655 | EMV Key Download Error |	 	 
| 656 | EMV Key Load Pending |	 
| 657 | Unable to Save EMV Response Data to Database | 	 	 
| 658 | EMV Transaction Not Supported | 	 
| 659 | PIN Length Error |	 	 
| 660 | PIN Pad Change Not Possible | 	 
| 661 | PIN Block Encryption Error | 	 
| 662 |	PIN Block Transcode Error |   	 
| 663 | PIN Pad Encryption Invalid or Missing | 	 
| 664 | PIN Timeout | 	 
| 665 | Invalid Encryption Key | 	 
| 666 | Invalid or Missing Key ID |	 
| 667 | Invalid Prompt Entry | 	 
| 668 | Security Error: Try Again |	 	 
| 669 | Security Error: No Action | 	 
| 670 | Security Violation |	 	 
| 671 | Invalid MAC Received |	 	 
| 672 | MAC Key Sync Error |	 	 
| 673 | Encryption Key Sync Error |	 	 
| 674 | Invalid Device Serial Number |
| 675 | No Terminal Setup or Found |
| 676 | Terminal ID Not Unique |
| 677 | Terminal Denied |
| 678 | PIN Block Error | 	 
| 679 | Configuration Error | 	 
| 680 | Missing Mandatory EMV values |	 	 
| 681 | Encryption Error: General | 	 
| 682 | Invalid or Missing Key |	 	 
| 683 | Security Counter error | 	 
| 684 | Settement Error: Please Wait |	
|	685 | Settlement in Progress |
|	686	| Settlement Unavailable |	 	 
| 687 |	No Open Batch | 	 
| 688	| Batch Not Valid |	 	 
|	689	| Batch Already Submitted, Upload not Allowed/Required | 	 
|	690	| Batch Upload Error : Invalid Field Data | 	 
| 691|    Upload Error: Unknown | 	 
|	692	| Batch Upload Error: Invalid Transaction |	 	 
|693 | Decryption Processing Error 
| 694	| Certificate not found |

<!--
type: tab
-->

Codes starting with 7xx identifies an error related to gateway communication. Check the error message and take appropriate action. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 700 | Technical Error: General |
| 701 |	Uknown	Error 
| 702 | Communication Error |
| 703 | Internal Error |
| 704 | Transaction Timed Out |
| 705 |	System Error or Problem |	 	 
|	706 |Function Performed Error Free | 	 
| 707 |	Unknown	Processor Response Code |
| 708 |	Invalid Action Attempted | 	 
| 	709 |	Invalid Encryption Data or Cryptogram | 	 
| 710 |Not Authoriezed | 
| 711 |	Issuer Unavailable | 	 
| 712 |	Service Unavailable | 	 
| 713 |	Acquirer Unavailable | 	 
| 714 |	Processor Unavailable | 	 
| 715 |	Switch Unavailable | 	 
| 716 |	Bank Not Supported by Switch | 	 
| 717 |	Unknown Financial Institution or Network for Routing	 	 
| 718 |	Issuer Unable to Authorize | 	 
| 719 |	Bad Checksum | 	 
| 720 |	Format Error |	 
| 721 |	Message Timed-out at Host | 	 
| 722 |	Message Timed-out at Processor | 	 
| 723 |	Message Timed-out at Issuer | 	 
| 724 | System Busy or Time Out, Please Retry |
| 725 |	Invalid Response from Host | 	 
|726 |	Invalid Response from Processor	|	 
|727 |	Invalid Response from Issuer | 	 
|728 |	Unable to Connect/No Connection | 	 
| 729 |	Socket Error | 	 
|730 |	Host Error | 	 
|731 |	Host Not Ready | 	 
|732|	Sequence Error | 	 
| 733 |	System Busy | 	 
|734 |	Validation Failed | 	 
|735|	Resource not found |
|738 | Number of Payments Not Supported For This Endpoint Ask |
| 739	| Value Pay offset Not Supported For This Endpoint |
|740|Partial Reversal Not Allowed For The Endpoint |
| 741 | Endpoint Temporarily Not Available |
| 742 | Autocancel is Not Supported For This Endpoint |
| 751 | Database Error: General |
|752|	Invalid Status Change: Unable to Perform Change	|
|753| Unable to Read Record from Database | 
|754|Unable to Read Record from Database |
| 755 | Database Unavailable |
| 756 | Order/Transaction Too Old to Be Referenced |
| 757 | Order/Transaction Already Exists in Database |
|758	|Data Not Found |
|759 |	Request in Progress | 	
|760 |	Too Many Transactions Requested | 	 
|761 | Transaction History Unavailable |
|762 |	Totals Unavailable |
| 763 | Referenced Payment Type Not Found |
|764	|Referenced transaction not found | 	  	  	 
|768 |	Vault Data Entry Failed	|	 
|769 |	Vault Data Entry Failed: ID Invalid | 	 
|770 |	Vault Data Entry Failed: ID Belongs to Another Merchant	|	 
| 766 | Duplicate Vault Entry |
| 767 | Vault Data Not Found |
| 771 | Vault ID Should Not be Present With Create Token |
| 793 |	Payment Source Does Not Support Feature |

<!--
type: tab
-->

Codes starting with 8xx identifies an error related to the transaction information. Check the error message, correct the data and resend the request. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 800 | Transaction Error: General |
| 801 | Invalid Transaction ID or Not Found |
| 802|	Invalid Primary Transaction ID or Not Found |
|803|	Transaction ID Missing
| 804 | Currency Mismatch |
| 805 | Payment Source Mismatch |
| 806 | Amount Total Mismatch |
| 807 | Amount Too Large, Enter Lesser Amount |
|808	|	Amount Significantly Exceeds Original Request |
|809	|	Amount No Longer Available |	 
| 810 | Amount is Greater Than Refund/Void |
|811 | Customer	Account, Merchant Account or Amount Incorrect |
| 812 | Unable to Refund |
| 813 | Unable to Refund: Transaction Not Found |
| 814 | Unable to Refund: Transaction Older Than 12 Months |
| 815 | Unable to Refund: Transaction Older Than 12 Months |
| 816 | Duplicate Refund |
| 817 | Refund Missing Final Shipment Indicator |
| 818 | Unable to Capture |
| 819 | Unable to Capture: No Pre-auth Found |
| 820 | Unable to Capture: Already Performed |
| 821	|Unable to Capture: Transaction Refunded/Cancelled | 
|822|	Unable to Capture: Authorization Timeframe Exceeded 
| 823 | Unable to Capture: Final Shipment Submitted |
| 824 | Unable to Capture: Split Shipment Information Missing |
| 825 | Unable to Capture: Prior Post-auth Was Not a Split Shipment |
| 826 | Duplicate Capture |
| 827 | Unable to Cancel |
| 828 | Unable to Cancel: Outside Window |
| 829 | Unable to Cancel: Transaction Settled |
| 830 | Unable to Cancel: Contains Incremental Auth |
| 831 | Unable to Cancel: No Transaction Found |
| 832 | Unable to Cancel: Order Involves Split Shipments And Has a Refund Associated |
| 833 | Unable to Cancel: Transaction Not in Captured or Authorized Status |
| 834	|	Unable to Cancel: Missing Amount |
|832|	Unable	to Cancel: Amount is Greater than Original Transaction |
|836	|Amount Must Be >$0 |
|837 |	 Unable to Refund: Transaction Not in a Captured or Authorized Status |
|838 |	$0 Auth Not Supported |
| 839 | Maximum Transactions Per Order Exceeded |
| 840 | Maximum Recurring Transactions Per Order Exceeded |
|841	|Forced Post Sent Without Approval Code |
|842|Iemental Auth Not Allowed: Transaction Captured |	 
| 843| Incremental Auth Not Supported |	
| 844 | Reauthorization Not Allowed or Supported |
|845 | Order Could Not Be Updated After Transaction was Processed |
|846|Transaction Denied |	 
|	847 | Tnsaction Placed in Queue |
| 848 | Transaction Type Not Supported |
| 849 | Transaction State Declined |
| 850 | Currency or Amount Total Mismatch |
|845	| Order Could Not Be Updated After Transaction Was Processed |
|846	|	Transaction Denied |	 
|847	|	Transaction Placed in Queue |
| 865 | 3S Secure With Recurring Not Allowed |
| 866 | Only 3D Secure as Non Recurring Transaction Allowed |
| 877 | Transaction Expired |

<!--
type: tab
-->

Codes starting with 8xx identifies a general gateway error. Check the error message and take appropriate action. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 999 | Unable to Process Transaction. Please Contact Support Team. |

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md)
- [Response Codes](?path=docs/Resources/Guides/Response-Codes/Response-Code.md)
- [Error Response](?path=docs/Resources/Guides/Response-Codes/Error-Response.md)

---
