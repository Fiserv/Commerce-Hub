---
tags: [carat, commerce-hub, enterprise, network-details, master-data]
---

# Authorization Network Response

Authorization network response contains the `networkDetails` object.

<!--
type: tab
title: networkDetails
-->

The below table identifies the parameters in the `networkDetails` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `network` | *object* | N/A | Processing [card network] |
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
title: JSON Example
-->

JSON string format for `networkDetails`:

```json
{
   "networkDetails":{
      "network":{
         "network": "string"
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

### Network 

Contains the card network data.

<!--
type: tab
title: network
-->

The below table identifies the parameters in the `network` object.

|Variable |Type| Maximum Length | Description|
|------|--------|-------|----------------|
| `network` | *string* |  | Processing card network |

<!--
type: tab
title: JSON Example
-->

```json
{
   "network":{
      "network":"string"
   }
}
```

<!-- type: tab-end -->

---

#### Authorization Characteristics Indicator

Code used for qualification in the Custom Payment Service (CPS) program as defined by Visa. The below table identifies the valid values of `authorizationCharacteristicsIndicator`.

| Value | Description |
|-------|-------------|
| *CARD_NOT_PRESENT* |  Card not present trasaction (preferred customer only e.g. Lodging or Auto Rental) |
| *INCREMENT* | Incremental Authorization | 
| *REQUEST_PARTICIPATION* |  Transaction requests participation |
| *CARD_NOT_PRESENT_NO_AVS* |  Card not present, AVS not required |


## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Credit Request](?path=docs/Resources/API-Documents/Payments/Credit.md)
- [Forced Post](?path=docs/Resources/API-Documents/Payments/Forced.md)

---
