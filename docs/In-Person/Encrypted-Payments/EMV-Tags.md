---
tags: [EMV, Encrypted Payments, In-Person, Card Present]
---

# EMV Tag/Length/Value

[PaymentEMV](?path=docs/In-Person/Encrypted-Payments/EMV.md) transactions require `emvData` which contains a series of Tag/Length/Value combinations for chip card processing. The data elements are captured from the [Integrated Circuit Card (ICC)](?path=docs/Resources/FAQs-Glossary/Glossary.md#emv), terminal, or issuer and is submitted in the request and returned in the response.


<!-- theme: warning -->
> The tag requirements may change at any time, EMV tags should be passed and not hard coded. If a tag is not recognized it can be ignored. If it does not exist, do not create one with a false or empty value. Issuers may provide other tags not listed here in a response.

<!-- theme: warning -->
> It is mandatory that all authorization request messages for any transcation type must contain the EMV tags. The tags are ignore by Commerce Hub when not required, and is set to zero when no data is passed.

The below table contains the list of data elements, their consecutive EMV tags and their descriptions. For a full list of EMV tags, refer to [EMVCo Book 3](https://www.emvco.com/emv-technologies/contact/). 

| EMV Tag  | Request  | Response  | Element Name | Description | Source | Format  | Length |
|----| --- | ----| ----| ----| ----| ----| ----|
| 4F  | &#10004;  |  | Application Dedicated File (ADF) Name | Identifies the application as described in [ISO/IEC 7816-5](https://www.iso.org/standard/34259.html) | ICC | binary  | 5-16 |
| 71 |  | &#10004;  | Issuer Script Template 1 | Contains proprietary issuer data for transmission to the ICC before the second GENERATE AC command | Issuer | binary  | 9-746  |
| 72 |  | &#10004;  | Issuer Script Template 2 | Contains proprietary issuer data for transmission to the ICC after the second GENERATE AC command | Issuer | binary  | 9-746  |
| 8A |  | &#10004;  | Authorisation Response Code | Code that defines the disposition of a message | Issuer/ Terminal | alphanumeric  | 2 |
| 82 | &#10004;  |  | Application Interchange Profile | Indicates the capabilities of the card to support specific functions in the application | ICC | binary  | 2 |
| 84 | &#10004;  |  | Dedicated File (DF) Name | Identifies the name of the DF as described in [ISO/IEC 7816-4](https://www.iso.org/obp/ui/#iso:std:iso-iec:7816:-4:ed-4:v1:en) | ICC | binary  | 5-16 |
| 91 | &#10004;  | &#10004;  | Issuer Authentication Data | Data sent to the ICC for online issuer authentication | Issuer | binary  | 8-16 |
| 95 | &#10004;  |  | Terminal Verification Results | Status of the different functions as seen from the terminal | Terminal | binary  | 5 |
| 9A  | &#10004;  |  | Transaction Date | Local date that the transaction was authorised | Terminal | numeric  | 3 |
| 9C  | &#10004;  |  | Transaction Type | Indicates the type of financial transaction, represented by the first two digits of the [ISO 8583](https://www.iso.org/standard/31628.html) Processing Code. The actual values to be used for the Transaction Type data element are defined by the relevant payment system | Terminal | numeric  | 1 |
| 5F24 | &#10004; |  | Application Expiry Date | Date after which application expires  | ICC | n 6 (YYMMDD) | 3 |
| 5F2A  | &#10004;  |  | Transaction Currency Code | Indicates the [currency code](?path=docs/Resources/Master-Data/Currency-Code.md) of the transaction according to ISO 3 currency format | Terminal | numeric  | 3 |
| 5F30  | &#10004; |  | Service Code | Service code as defined in ISO/IEC 7813 for track 1 and track 2 | ICC | n 3  | 2 |
| 5F34  | &#10004;  |  | Application Primary Account Number (PAN) Sequence Number | Identifies and differentiates cards with the same PAN | ICC | numeric  | 1 |
| 9F02  | &#10004;  |  | Amount, Authorised (Numeric) | Authorised amount of the transaction (excluding adjustments) | Terminal | numeric  | 6 |
| 9F03  | &#10004;  |  | Amount, Other (Numeric) | Secondary amount associated with the transaction representing a cashback amount | Terminal | numeric  | 6 |
| 9F06  | &#10004;  |  | Application Identifier (AID) – terminal | Identifies the application as described in ISO/IEC 7816-5 | Terminal | binary  | 5-16 |
| 9F07  | &#10004;  |  | Application Usage Control | Indicates issuer’s specified restrictions on the geographic usage and services allowed for the application | ICC | binary  | 2 |
| 9F09  | &#10004;  |  | Application Version Number | Version number assigned by the payment system for the application | Terminal | binary  | 2 |
| 9F0A | &#10004; |  | Application Selection Registered Proprietary Data | Proprietary data allowing for proprietary processing during application selection. Proprietary data is identified using Proprietary Data Identifiers that are managed by EMVCo and their usage by the Entry Point is according to their intended usage, as agreed by EMVCo during registration | Card | binary  | var |
| 9F10  | &#10004;  |  | Issuer Application Data | Contains proprietary application data for transmission to the issuer in an online transaction. Note: For CCD-compliant applications, EMVCo Book 3, Annex C, section C7 defines the specific coding of the Issuer Application Data (IAD). To avoid potential conflicts with CCD-compliant applications, it is strongly recommended that the IAD data element in an application that is not CCD-compliant should not use the coding for a CCD-compliant application | ICC | binary  | var. up to 32 |
| 9F1A  | &#10004;  |  | Terminal Country Code | Indicates the country of the terminal, represented according to [ISO country code](?path=docs/Resources/Master-Data/Country-Code.md) | Terminal | numeric  | 2 |
| 9F1E  | &#10004;  |  | Interface Device (IFD) Serial Number | Unique and permanent serial number assigned to the IFD by the manufacturer | Terminal | alphanumeric  | 8 |
| 9F24  |  | &#10004; | Payment Account Reference (PAR) | Payment Account Reference (PAR) generated or linked directly to the provision request in the token vault | Card | ans 24  | 24 |
| 9F26  | &#10004;  |  | Application Cryptogram | Cryptogram returned by the ICC in response of the GENERATE AC command | ICC | binary  | 8 |
| 9F27  | &#10004;  |  | Cryptogram Information Data | Indicates the type of cryptogram and the actions to be performed by the terminal | ICC | binary  | 1 |
| 9F33  | &#10004;  |  | Terminal Capabilities | Indicates the card data input, CVM, and security capabilities of the terminal | Terminal | binary  | 3 |
| 9F34  | &#10004;  |  | Cardholder Verification Method (CVM) Results | Indicates the results of the last CVM performed | Terminal | binary  | 3 |
| 9F35  | &#10004;  |  | Terminal Type | Indicates the environment of the terminal, its communications capability, and its operational control | Terminal | numeric  | 1 |
| 9F36  | &#10004;  |  | Application Transaction Counter (ATC) | Counter maintained by the application in the ICC (incrementing the ATC is managed by the ICC) | ICC | binary  | 2 |
| 9F37  | &#10004;  |  | Unpredictable Number | Value to provide variability and uniqueness to the generation of a cryptogram | Terminal | binary  | 4 |
| 9F39  | &#10004;  |  | Point-of-Service (POS) Entry Mode | Indicates the method by which the PAN was entered, according to the first two digits of the ISO 8583 POS Entry Mode | Terminal | numeric  | 1 |
| 9F41  | &#10004;  |  | Transaction Sequence Counter | Counter maintained by the terminal that is incremented by one for each transaction | Terminal | numeric  | 2-4 |
| 9F53*  | &#10004;  |  | Transaction Category Code  | This is a data object defined by MasterCard which indicates the type of transaction being performed, and which may be used in card risk management | Terminal  | binary | 1 |
| 9F66  | &#10004; |  | Terminal Transaction Qualifiers (TTQ)  | Indicates reader capabilities, requirements, and preferences to the card. TTQ byte 2 bits 8-7 are transient values, and reset to zero at the beginning of the transaction. All other TTQ bits are static values, and not modified based on transaction conditions. TTQ byte 3 bit 7 shall be set by the acquirer-merchant to 1b. | Terminal  | binary 32 | 4 |
| 9F5B  |  |  | Issuer Script Results  |Indicates the results of Issuer Script processing. When the reader/terminal transmits this data element to the acquirer, in this version of Kernel 3, it is acceptable that only byte 1 is transmitted, although it is preferable for all five bytes to be transmitted. | Terminal  | binary | var |
| 9F6E | &#10004; |  | Form Factor Indicator (VI), Device Type Indicator (M)  | Indicate not only the physical form factor but also other attributes such as device technology and payment app specifications | Terminal  | binary | 4 |
| 9F7C | &#10004; |  | Merchant Custom Data  | Proprietary merchant data that may be requested by the Card | Card  | binary | 20 |

---

#### EMV Data Sample

The EMV Data contains the EMV Data Length Indicator and the EMV chip data in tag-length-value (TLV) format. Multiple TLV data elements maybe present in the EMV Data Field Identifier.

TLV format is defined as:
- **Tag:** The tag contains 1 or 2 byte binary value that identifies the content of the value field.
- **Length:** The length defines the length of the value represented in binary format.
- **Value:** The value is a variable length field that contains transaction-specific data.

Below is a sample of the EMV Data Field Identifier with 2 TLV data elements.

<!-- theme: example -->
> 024**9F37**04833A1232**9F10**02AB34 (binary hex nibbles)


| EMV Data Length Indicator | Tag 1  | Length 1  | Value 1 | Tag 2 |  Length 2 | Value 2 |
|----------|--------|--------|------| -----| -------|-----|
| 024 | 9F37 | 04 | 833A1232 | 9F10 | 02 | AB34 |




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
