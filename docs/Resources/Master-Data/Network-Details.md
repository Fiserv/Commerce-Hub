---
tags: [carat, commerce-hub, enterprise, network-details, master-data]
---

# Authorization Network Response

Authorization network response contains the `networkDetails` object.

<!--
type: tab
title: networkDetails
-->

The below table identifies the required parameters in the `networkDetails` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `partialAuthDetails` | *object* | | [Partial authorization](#partial-auth-details) details |
| `network` | *string* | 64 | Processing card network e.g. VISA |
| `debitNetworkId` | *string* | | Network ID for the debit component |
| `transactionSequence`| *string* | | This field contains transaction specific data that may be returned in response messages. |
| `systemTrace`| *string* | | This field contains the original trace number that was returned in an authorization response. |
| `authorizationCharacteristicsIndicator` | *string* | | Code used for qualification in the Custom Payment Service (CPS) program as defined by Visa. Upon evaluation, the code may be changed in the response message if provided by Visa. |
| `VisaBID` | *string* | | The Business Identifier (BID) provided by Visa to Third Party Servicers (TPS) |
| `VisaAUR` | *string* | | Agent Unique Account Result (AUAR) provided by Visa to Third Party Servicers (TPS) |
| `networkResponseCode ` | *string* | | Debit network response |


<!--
type: tab
title: JSON Example
-->

JSON string format for `networkDetails`:

```json
{
   "partialAuthDetails":{
      "interchangeComplianceIndicator":"A",
      "bankNetRefNumber":"string",
      "bankNetDate":"2021-07-09",
      "cvcIndicator":"Y",
      "partialAuthTransactionId":"string",
      "validationCode":"string",
      "totalAuthAmount":"1.00",
      "downgradeReason":"ACCOUNT_NUMBER_MISSING",
      "creditAuthType":"DISCOVER",
      "authScore":"string"
   },
   "network":"VISA",
   "debitNetworkId":"123456",
   "transactionSequence":"1123456",
   "systemTrace":"123456789",
   "authorizationCharacteristicsIndicator":"CARD_NOT_PRESENT",
   "VISABID":"string",
   "VISAAUR":"12345AD89012",
   "networkResponseCode":"00"
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

## Partial Auth Details

<!--
type: tab
title: partialAuthDetails
-->

The below table identifies the required parameters in the `partialAuthDetails` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `interchangeComplianceIndicator` | *string* | | A code to indicate that Mastercard interchange compliance data was provided for this transaction, and if any other special Mastercard authorization requirements were met. |
| `bankNetRefNumber` | *string* | | A Mastercard generated identifier for each original authorization request. Reference number assigned by Mastercard to each authorization message.|
| `bankNetDate` | *string* | | A Mastercard generated date for this transaction. YYYY-MM-DD format |
| `cvcIndicator` | *string* | | Indicates the CVC response data |
| `partialAuthTransactionId` | *string* | | Generated identifier unique for each original authorization request. |
| `validationCode` | *string* | | A code calculated by Visa to ensure that the fields present in the authorization are also present in the clearing record. |
| `totalAuthAmount` | *string* | | Total amount authorized |
| `downgradeReason` | *string* | | Downgrade reason as supplied by Visa |
| `creditAuthType` | *string* | | Indicates the type of authorization required |
| `authScore` | *string* | | The auth score returned for the transaction |
 
<!--
type: tab
title: JSON Example
-->

JSON string format for `partialAuthDetails`:

```json
{
   "partialAuthDetails":{
      "interchangeComplianceIndicator": "A",
      "bankNetRefNumber": "12345678",
      "bankNetDate": "2021-07-09",
      "cvcIndicator": "Y",
      "partialAuthTransactionId": "string",
      "validationCode": "string",
      "totalAuthAmount": 1.00,
      "downgradeReason": "ACCOUNT_NUMBER_MISSING",
      "creditAuthType": "DISCOVER",
      "authScore": "string"
   }
}
```
<!-- type: tab-end -->
## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charges](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Refund](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Credit](?path=docs/Resources/API-Documents/Payments/Credit.md)
- [Forced Post](?path=docs/Resources/API-Documents/Payments/Forced.md)

---