---
tags: [API Reference, Network Details, Master Data]
---

# Authorization Network Response

Authorization network response contains the `networkDetails` object.

<!--
type: tab
titles: networkDetails, JSON Example
-->

The below table identifies the parameters in the `networkDetails` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `network` | *object* | N/A | Processing [card network](#card-network) |
| `debitNetworkId` | *string* | | Network ID for the debit component |
| `transactionSequence`| *string* | | This field contains transaction specific data that may be returned in response messages. |
| `systemTrace`| *string* | | This field contains the original trace number that was returned in an authorization response. |
| `debitIssuerData` | *string* |  | Debit issuer specific data that may be returned in the response messages. |
| `networkResponseCode ` | *string* | | Debit network response |
| `posEntryModeChange` | *boolean* |  |  Issuer will reply if the entry mode has changed |
| `cardLevelResultCode` | *string* |  | Identifies purchase, corporate, and business card level e.g. Level II/Level III |
| `validationCode` | *string* |  | A code calculated by card brands to ensure that the fields present in the authorization are also present in the clearing record. |
| `downgradeReason` | *string* |  | Downgrade reason as supplied by Visa. |
| `creditAuthType` | *string* |  |Indicates the type of authorization required |
| `authScore` | *string* |  | The auth score returned for the transaction |
| `partialAuthTransactionId` | *string* |  | Generated identifier unique for each original authorization request |
| `totalAuthAmount` | *number* | 18,3  | Total amount authorized |
| `transactionIdentifier` | *string* |  | This field represents a unique value used to identify and link all related transactions for authorization and settlement |
| `magStripeQualityIndicator` | *string* |  |  |
| `authSource` | *object* |  |  |

<!--
type: tab
-->
 
JSON string format for `networkDetails`:

```json
{
   "networkDetails":{
      "network":{
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
      "creditAuthType": "DISCOVER",
      "authScore": "string",
      "partialAuthTransactionId": "string",
      "totalAuthAmount": 1,
      "transactionIdentifier": "string",
      "magStripeQualityIndicator": "string",
      "authSource": "string"
   }
}
```

<!-- type: tab-end -->

---

## Card Network 

Contains the card network data.

<!--
type: tab
titles: network, JSON Example
-->

The below table identifies the parameters in the `network` object.

|Variable |Type| Maximum Length | Description|
|------|--------|-------|----------------|
| `network` | *string* |  | Processing card network |

<!--
type: tab
-->

```json
{
  "network":{
    "network":"VISA" 
  }
}
```

<!-- type: tab-end -->

<!--
type: tab
titles: Amex, Discover, Mastercard, Visa, Debit
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
| `interchangeComplianceIndicator` | *string* | N/A | A code to indicate that Mastercard interchange compliance data was provided for this transaction, and if any other special Mastercard authorization requirements were met. |
| 'bankNetRefNumber' | *string* | N/A | A Mastercard generated identifier for each original authorization request. Reference number assigned by Mastercard to each authorization message. |
| `bankNetDate` | *string* | N/A | A Mastercard generated date for this transaction. MMDD format |
| `cvcErrorIndicator` | *string* | N/A | Indicates the CVC Error response data. |
| `transactionEditErrorCode` | *string* | N/A | Indicates the track data & POS validation Error in response data. ***Valid Values:** MISSING_TRACK_DATA, PRESENT_TRACK_DATA, PAN_DOES_NOT_MATCH_WITH_TRACK_DATA, EXPIRY_DATE_DOES_NOT_MATCH_WITH_TRACK_DATA, CARD_TYPE_INVALID, FIELD_SEPARATOR_INVALID, EXCEEDS_MAX_LENGTH, TRANSACTION_CODE_T, POS_CUST_PRESENT_1, POS_CARD_PRESENT_1* |
| `transactionIntegrityClass` | *string* | N/A | Contains the MasterCard provided Transaction Integrity Classification for Point of Sale (POS) Purchase and Purchase with Cash Back transactions initiated on the Authorization Platform. |
| `xCodeResponse` | *string* | 6 | Conditional for Mastercard EMV chip transactions. This value is used to notify the chip that the transaction was unable to go online and is required for batch uploads. |
| `chipCryptoValue` | *string* | 3 | Additional EMV chip info returned by Mastercard. |
| `cardDataOutputCapability` | *string* | 25 | Identifies the card's capability to output data. ***Valid Values:** UNSPECIFIED, NONE, MAG_STRIPE, ICC, OTHER* |
| `terminalDataOutputCapability` | *string* | 25 | Identifies the terminal's capability to display response data. ***Valid Values:** UNSPECIFIED, NONE, PRINTING_ONLY, DISPLAY_ONLY, PRINTING_AND_DISPLAY* |

```json
{
  "network": {
    "network": "Mastercard",
    "interchangeComplianceIndicator": "",
    "bankNetRefNumber": "123456",
    "bankNetDate": "0213",
    "cvcErrorIndicator": "",
    "transactionEditErrorCode": "PRESENT_TRACK_DATA",
    "transactionIntegrityClass": "",
    "xCodeResponse": "",
    "chipCryptoValue": "",
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
    "cardAuthenticationResultCode": "",
    "spendQualificationIndicator": false,
    "decisionSource": "Timeout",
    "agreementId": ""
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

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Credit Request](?path=docs/Resources/API-Documents/Payments/Credit.md)
- [Forced Post](?path=docs/Resources/API-Documents/Payments/Forced.md)
 
---
