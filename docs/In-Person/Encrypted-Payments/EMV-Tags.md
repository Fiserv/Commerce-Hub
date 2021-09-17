---
tags: [carat, commerce-hub, enterprise, emv, in-person, card-present]
---

# EMV Tag/Length/Value

[PaymentEMV](?path=docs/In-Person/Encrypted-Payments/EMV.md) transactions require `emvData` which contains a series of Tag/Length/Value combinations for chip card processing. The data elements are captured from the [Integrated Circuit Card (ICC)](?path=docs/Resources/FAQs-Glossary/Glossary.md#emv), terminal, or issuer and is submitted in the request and returned in the response.


The below table contains the list of data elements, their consecutive EMV tags and their descriptions. For more information, refer to the document in [EMVCo](https://www.emvco.com/emv-technologies/contact/). 

| EMV Tag  | Request  | Response  | Element Name | Description | Source | Format  | Length |
|----| --- | ----| ----| ----| ----| ----| ----| ---- |
| 4F  | &#10004;  |  | Application Dedicated File (ADF) Name | Identifies the application as described in [ISO/IEC 7816-5](https://www.iso.org/standard/34259.html) | ICC | binary  | 5-16 |
| 50 | &#10004;  |  | Application Label | Mnemonic associated with the AID according to ISO/IEC 7816-5 | ICC | alphanumeric  | 1-16 |
| 5F2A  | &#10004;  |  | Transaction Currency Code | Indicates the [currency code](?path=docs/Resources/Master-Data/Currency-Code.md) of the transaction according to ISO 3 currency format | Terminal | numeric  | 3 |
| 5F34  | &#10004;  |  | Application Primary Account Number (PAN) Sequence Number | Identifies and differentiates cards with the same PAN | ICC | numeric  | 1 |
| 71 |  | &#10004;  | Issuer Script Template 1 | Contains proprietary issuer data for transmission to the ICC before the second GENERATE AC command | Issuer | binary  | 9-746  |
| 72 |  | &#10004;  | Issuer Script Template 2 | Contains proprietary issuer data for transmission to the ICC after the second GENERATE AC command | Issuer | binary  | 9-746  |
| 82 | &#10004;  |  | Application Interchange Profile | Indicates the capabilities of the card to support specific functions in the application | ICC | binary  | 2 |
| 84 | &#10004;  |  | Dedicated File (DF) Name | Identifies the name of the DF as described in [ISO/IEC 7816-4](https://www.iso.org/obp/ui/#iso:std:iso-iec:7816:-4:ed-4:v1:en) | ICC | binary  | 5-16 |
| 8A  |  | &#10004;  | Authorisation Response Code | Code that defines the disposition of a message | Issuer/ Terminal | alphanumeric  | 2 |
| 91 | &#10004;  | &#10004;  | Issuer Authentication Data | Data sent to the ICC for online issuer authentication | Issuer | binary  | 8-16 |
| 95 | &#10004;  |  | Terminal Verification Results | Status of the different functions as seen from the terminal | Terminal | binary  | 5 |
| 98 | &#10004;  |  | Transaction Certificate (TC) Hash Value | Result of a hash function specified in EMVCo Book 2, Annex B3.1 | Terminal | binary  | 20 |
| 9A  | &#10004;  |  | Transaction Date | Local date that the transaction was authorised | Terminal | numeric  | 3 |
| 9B  | &#10004;  |  | Transaction Status Information | Indicates the functions performed in a transaction | Terminal | binary  | 2 |
| 9C  | &#10004;  |  | Transaction Type | Indicates the type of financial transaction, represented by the first two digits of the [ISO 8583](https://www.iso.org/standard/31628.html) Processing Code. The actual values to be used for the Transaction Type data element are defined by the relevant payment system | Terminal | numeric  | 1 |
| 9F02  | &#10004;  |  | Amount, Authorised (Numeric) | Authorised amount of the transaction (excluding adjustments) | Terminal | numeric  | 6 |
| 9F03  | &#10004;  |  | Amount, Other (Numeric) | Secondary amount associated with the transaction representing a cashback amount | Terminal | numeric  | 6 |
| 9F06  | &#10004;  |  | Application Identifier (AID) – terminal | Identifies the application as described in ISO/IEC 7816-5 | Terminal | binary  | 5-16 |
| 9F07  | &#10004;  |  | Application Usage Control | Indicates issuer’s specified restrictions on the geographic usage and services allowed for the application | ICC | binary  | 2 |
| 9F09  | &#10004;  |  | Application Version Number | Version number assigned by the payment system for the application | Terminal | binary  | 2 |
| 9F10  | &#10004;  |  | Issuer Application Data | Contains proprietary application data for transmission to the issuer in an online transaction. Note: For CCD-compliant applications, EMVCo Book 3, Annex C, section C7 defines the specific coding of the Issuer Application Data (IAD). To avoid potential conflicts with CCD-compliant applications, it is strongly recommended that the IAD data element in an application that is not CCD-compliant should not use the coding for a CCD-compliant application | ICC | binary  | var. up to 32 |
| 9F16  | &#10004;  |  | Merchant Identifier | When concatenated with the Acquirer Identifier, uniquely identifies a given merchant | Terminal | alphanumeric  | 15 |
| 9F1A  | &#10004;  |  | Terminal Country Code | Indicates the country of the terminal, represented according to [ISO country code](?path=docs/Resources/Master-Data/Country-Code.md) | Terminal | numeric  | 2 |
| 9F1E  | &#10004;  |  | Interface Device (IFD) Serial Number | Unique and permanent serial number assigned to the IFD by the manufacturer | Terminal | alphanumeric  | 8 |
| 9F21  | &#10004;  |  | Transaction Time | Local time that the transaction was authorised | Terminal | numeric  | 3 |
| 9F26  | &#10004;  |  | Application Cryptogram | Cryptogram returned by the ICC in response of the GENERATE AC command | ICC | binary  | 8 |
| 9F27  | &#10004;  |  | Cryptogram Information Data | Indicates the type of cryptogram and the actions to be performed by the terminal | ICC | binary  | 1 |
| 9F33  | &#10004;  |  | Terminal Capabilities | Indicates the card data input, CVM, and security capabilities of the terminal | Terminal | binary  | 3 |
| 9F34  | &#10004;  |  | Cardholder Verification Method (CVM) Results | Indicates the results of the last CVM performed | Terminal | binary  | 3 |
| 9F35  | &#10004;  |  | Terminal Type | Indicates the environment of the terminal, its communications capability, and its operational control | Terminal | numeric  | 1 |
| 9F36  | &#10004;  |  | Application Transaction Counter (ATC) | Counter maintained by the application in the ICC (incrementing the ATC is managed by the ICC) | ICC | binary  | 2 |
| 9F37  | &#10004;  |  | Unpredictable Number | Value to provide variability and uniqueness to the generation of a cryptogram | Terminal | binary  | 4 |
| 9F39  | &#10004;  |  | Point-of-Service (POS) Entry Mode | Indicates the method by which the PAN was entered, according to the first two digits of the ISO 8583 POS Entry Mode | Terminal | numeric  | 1 |
| 9F40  | &#10004;  |  | Additional Terminal Capabilities | Indicates the data input and output capabilities of the terminal | Terminal | binary  | 5 |
| 9F41  | &#10004;  |  | Transaction Sequence Counter | Counter maintained by the terminal that is incremented by one for each transaction | Terminal | numeric  | 2-4 |
| 9F49  | &#10004;  |  | Dynamic Data Authentication Data Object List (DDOL) | List of data objects (tag and length) to be passed to the ICC in the INTERNAL AUTHENTICATE command | ICC | binary  | 0-252  |
| 9F53  | &#10004;  |  | Transaction Category Code  | Indicates the transaction category code | Terminal | binary  | 1 |


<!---
| 9F67  | &#10004;  |  | EMV-9F67  |  |  | binary  | 11689 |
| 9F6E  | &#10004;  |  | EMV-9F6E  |  |  | binary  | 11780 |
| 9F7C  | &#10004;  |  | EMV-9F7C  |  |  | binary  | 11689 |
--->

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [EMV Chip and PIN](?path=docs/In-Person/Encrypted-Payments/EMV.md)

---