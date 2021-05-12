# Network Details



<!--
type: tab
title: networkdetails
-->

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `partialauthdetails` | *string* | | Processing card network. |
| `debitNetworkId` | *string* | | Network ID for the debit component. |
| `transactionSequence`| *string* | | This field contains transaction specific data that may be returned in response messages. |
| `systemTrace`| *string* | | This field contains the original trace number that was returned in an authorization response. |
| `authorizationCharacteristicsIndicator` | *string* | | Code used for qualification in the Custom Payment Service (CPS) program as defined by Visa. Upon evaluation, the code may be changed in the response message if provided by Visa. |

<!--
type: tab
title: JSON Example
-->

```json


    "partialAuthDetails": {
      "interchangeComplianceIndicator": "A",
      "bankNetRefNumber": "string",
      "bankNetDate": "0310",
      "cvcIndicator": "Y",
      "partialAuthTransactionId": "string",
      "validationCode": "string",
      "totalAuthAmount": "1.00",
      "downgradeReason": "ACCOUNT_NUMBER_MISSING",
      "creditAuthType": "DISCOVER",
      "authScore": "string"
    },
    "network": "VISA",
    "debitNetworkId": "123456",
    "transactionSequence": "1123456",
    "systemTrace": "123456789",
    "authorizationCharacteristicsIndicator": "CARD_NOT_PRESENT",
    "VISABID": "string",
    "VISAAUR": "12345AD89012",
    "networkResponseCode": "00"
  }

---

<!-- type: tab-end -->
