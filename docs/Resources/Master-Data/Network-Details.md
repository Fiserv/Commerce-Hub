---
tags: [API Reference, Network Details, Master Data]
---

# Network Details

Network details contains the card network specific values from the response. Some of these values may need to be re-submitted as a part of [transaction interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md) for all subsequent transactions.

<!--
type: tab
titles: networkDetails, JSON Example
-->

The below table identifies the parameters in the `networkDetails` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `network` | *object* | N/A | Processing [card network](#card-network) |
| `debitNetworkId` | *string* | 64 | Network ID for the debit component |
| `transactionSequence`| *string* | 64 | This field contains transaction specific data that may be returned in response messages. |
| `systemTrace`| *string* | 64 | This field contains the original trace number that was returned in an authorization response. |
| `debitIssuerData` | *string* | | Debit issuer specific data that may be returned in the response messages. |
| `networkResponseCode ` | *string* | 16 | Debit network response |
| `posEntryModeChange` | *boolean* | N/A  |  Issuer will reply if the entry mode has changed |
| `cardLevelResultCode` | *string* | | Identifies purchase, corporate, and business card level e.g. Level II/Level III |
| `validationCode` | *string* | | A code calculated by card brands to ensure that the fields present in the authorization are also present in the clearing record. |
| `downgradeReason` | *string* | | Downgrade reason as supplied by the network. |
| `creditAuthType` | *string* |  |Indicates the type of authorization required |
| `authScore` | *string* | | The auth score returned for the transaction |
| `partialAuthTransactionId` | *string* | | Generated identifier unique for each original authorization request |
| `totalAuthAmount` | *number* | 18,3  | Total amount authorized |
| `transactionIdentifier` | *string* | | This field represents a unique value used to identify and link all related transactions for authorization and settlement |
| `magStripeQualityIndicator` | *string* | | This field dentifies the [error](#mag-stripe-quality-indicator) encountered with the track data provided in the authorization request message. |
| `networkAvsCode` | *string* | 1 | Non-normalized newtork AVS response code if available |
| `panMappingAccountNumber` | *string* | 19 | Returned for Mastercard (for MCCs 4111, 4131, 4784, and 7523) and for all AMEX token transactions |
| `cardholderResponse` | *string* | 5 | Non-normalized response from for verifying cardholder data where each position represents the postal/zip code, address, name, telephone, and email respectively. ***Valid Values:** Y = Yes data matches, N = No data does not match, U - Data unchecked, R - Retry, S - Service not allowed, Blank - Data not sent* |
| `authSource` | *string* | | Code indicating how the network performed the authorization |
| `debitRouting` | *string* | 256 | Provides the Debit network routing for PINless and Signature Debit transactions. ***Valid Values:** CREDIT, DEBIT, DUAL* |

<!--
type: tab
-->
 
JSON string format for `networkDetails`:

```json
{
  "networkDetails": {
    "network": {
      "network": "VISA"
    },
    "debitNetworkId": "123456",
    "transactionSequence": "1123456",
    "systemTrace": "123456789",
    "debitIssuerData": "Standard Issuer",
    "networkResponseCode": "00",
    "posEntryModeChange": true,
    "cardLevelResultCode": "string",
    "validationCode": "string",
    "downgradeReason": "ACCOUNT_NUMBER_MISSING",
    "creditAuthType": "VISA",
    "authScore": "string",
    "partialAuthTransactionId": "string",
    "totalAuthAmount": 1,
    "transactionIdentifier": "string",
    "magStripeQualityIndicator": "TRACK_PRESENT",
    "networkAvsCode": "Y",
    "panMappingAccountNumber": "string",
    "cardholderResponse": "YYNUU",
    "authSource": "STIP",
    "debitRouting": "CREDIT"
  }
}
```

<!-- type: tab-end -->

---

## Card Network 

Each card network can return specific values.

<!--
type: tab
titles: network, Amex, Discover, Mastercard, Visa, Debit
-->

The below table identifies the parameters in the `network` object.

|Variable |Type| Maximum Length | Description|
|------|--------|-------|----------------|
| `network` | *string* |  | Processing card network |

<!--
type: tab
-->

The below table identifies the parameters specific to American Express.

| Variable |Type| Maximum Length | Description|
|------|--------|-------|----------------|
| `safeKeyResponse` | *string* | 50 | Response that corresponds to the American Express SafeKey response value. |

| Value | Description |
| ----- | ----- |
| *FAILED_AUTH* | Authentication issuer key failed |
| *PASSED_AUTH* | Authentication issuer key passed |
| *PASSED_ATTEMPT* | Issuer key attempt passed |
| *FAILED_ATTEMPT* | Issuer key attempt failed |
| *FAILED_NON_PARTICIPANT* | Attempt failed, issuer not participating  in network key |
| *PASSED_NON_PARTICIPANT* | Attempt passed, issuer not participating in network key |
| *FAILED_PARTICIPANT* | Attempt failed, issuer participating in network key, ACS not available |
| *PASSED_PARTICIPANT* | Attempt passed, issuer participating in network key, ACS not available |
| *UNCHEKED* | Issuer key not checked |

```json
{
  "network":{
    "network":"Amex",
    "safeKeyResponse": "PASSED_AUTH"
  }
}
```

<!--
type: tab
-->

The below table identifies the parameters specific to Discover.

|Variable |Type| Maximum Length | Description|
|------|--------|-------|----------------|
| `networkOriginalAmount` | *number* | 18,3 | Original transaction amount, required for Discover card on file transactions. |

```json
{
  "network":{
    "network":"Discover",
    "networkOriginalAmount": 12.09
  }
}
```

<!--
type: tab
-->

The below table identifies the parameters specific to Mastercard.

|Variable |Type| Maximum Length | Description|
|------|--------|-------|----------------|
| `interchangeComplianceIndicator` | *string* | | A code to indicate that Mastercard interchange compliance data was provided for this transaction, and if any other special Mastercard authorization requirements were met. |
| `bankNetRefNumber` | *string* | | A Mastercard generated identifier for each original authorization request. Reference number assigned by Mastercard to each authorization message. |
| `bankNetDate` | *string* | | A Mastercard generated date for this transaction. MMDD format |
| `cvcErrorIndicator` | *string* | | Indicates the CVC Error response data. |
| `transactionEditErrorCode` | *string* | | Indicates the track data & POS validation Error in response data. ***Valid Values:** MISSING_TRACK_DATA, PRESENT_TRACK_DATA, PAN_DOES_NOT_MATCH_WITH_TRACK_DATA, EXPIRY_DATE_DOES_NOT_MATCH_WITH_TRACK_DATA, CARD_TYPE_INVALID, FIELD_SEPARATOR_INVALID, EXCEEDS_MAX_LENGTH, TRANSACTION_CODE_T, POS_CUST_PRESENT_1, POS_CARD_PRESENT_1* |
| `transactionIntegrityClass` | *string* | | Contains the MasterCard provided Transaction Integrity Classification for Point of Sale (POS) Purchase and Purchase with Cash Back transactions initiated on the Authorization Platform. |
| `xCodeResponse` | *string* | 6 | Conditional for Mastercard EMV chip transactions. This value is used to notify the chip that the transaction was unable to go online and is required for batch uploads. |
| `chipCryptoValue` | *string* | 3 | Additional EMV chip info returned by Mastercard. |
| `cardDataOutputCapability` | *string* | 25 | Identifies the card's capability to output data. ***Valid Values:** UNSPECIFIED, NONE, MAG_STRIPE, ICC, OTHER* |
| `terminalDataOutputCapability` | *string* | 25 | Identifies the terminal's capability to display response data. ***Valid Values:** UNSPECIFIED, NONE, PRINTING_ONLY, DISPLAY_ONLY, PRINTING_AND_DISPLAY* |

```json
{
  "network": {
    "network": "Mastercard",
    "interchangeComplianceIndicator": "string",
    "bankNetRefNumber": "123456",
    "bankNetDate": "0213",
    "cvcErrorIndicator": "",
    "transactionEditErrorCode": "PRESENT_TRACK_DATA",
    "transactionIntegrityClass": "string",
    "xCodeResponse": "string",
    "chipCryptoValue": "string",
    "cardDataOutputCapability": "UNSPECIFIED",
    "terminalDataOutputCapability": "PRINTING_AND_DISPLAY"
  }
}
```

<!--
type: tab
-->

The below table identifies the parameters specific to Visa.

|Variable |Type| Maximum Length | Description|
|------|--------|-------|----------------|
| `VISABID` | *string* | 128 | The Business Identifier (BID) provided by Visa to Third Party Services (TPS) |
| `VISAAUR` | *string* | 128 | Agent Unique Account Result (AUAR) provided by Visa to Third Party Services (TPS) in 12 hex digit format |
| `cardAuthenticationResultCode` | *string* | 1 | Card Authentication Results Code returned by Visa for EMV chip transactions |
| `spendQualificationIndicator` | *boolean* | N/A | A field used by Visa to establish annual point-of-sale spending requirements |
| `decisionSource` | *string* | 128 | This field identifies the Visa decision for the transaction |
| `agreementId` | *string* | 4 | This field will contain a value used to identify when a merchant is eligible for the preferred Commercial Choice interchange rates |

```json
{
  "network": {
    "network": "Visa",
    "VISABID": "0123456789",
    "VISAAUR": "12345AD89012",
    "cardAuthenticationResultCode": "string",
    "spendQualificationIndicator": false,
    "decisionSource": "Timeout",
    "agreementId": "string"
  }
}
```

<!--
type: tab
-->

The below table identifies the parameters specific to Debit.

|Variable |Type| Maximum Length | Description|
|------|--------|-------|----------------|
| `networkName` | *string* | 256 | Network name in which the transaction is processed |

```json
{
  "network": {
    "network": "Debit",
    "networkName": "Star"
  }
}
```

<!-- type: tab-end -->

---

### MAG Stripe Quality Indicator

| Value | Description |
| ----- | ------ |
| *TRACK_PRESENT* | Track 1 and Track 2 present in the message |
| *NO_TRACK* | Track 1 or Track 2 not present in the message |
| *PAN_NOT_EQUAL* | Primary Account Number not equal in track data |
| *EXPIRATION_NOT_EQUAL* | Expiration date not equal in track data |
| *CARD_TYPE_INVALID* | Card type invalid in track data |
| *FIELD_SEPARATORS* | Field separator(s) invalid in track data |
| *EXCEEDS_LENGTH* | A field within the track data exceeds maximum length |
| *CATEGORY_CODE* | The transaction category code is "T" |
| *CUSTOMER_PRESENCE* | `posConditionCode` invalid for customer presense |
| *CARD_PRESENCE* | `posConditionCode` invalid for card presence |


---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Credit Request](?path=docs/Resources/API-Documents/Payments/Credit.md)
- [Forced Post](?path=docs/Resources/API-Documents/Payments/Forced.md)
 
---
