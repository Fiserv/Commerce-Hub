---
tags: [carat, commerce-hub, enterprise, network-details, master-data]
---

# Authorization Network Response

Authorization network response contains the `networkDetails` object.

<!--
type: tab
title: networkDetails
-->

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `partialAuthDetails` | *object* | 64 | [Partial authorization](?path=docs/Resources/Guides/Authorizations/Partial-Auth.md) details. |
| `debitNetworkId` | *string* |64 | Network ID for the debit component. |
| `transactionSequence`| *string* | 64 | This field contains transaction specific data that may be returned in response messages. |
| `systemTrace`| *string* | 64 | This field contains the original trace number that was returned in an authorization response. |
| `authorizationCharacteristicsIndicator` | *string* | 23 | Code used for qualification in the Custom Payment Service (CPS) program as defined by Visa. Upon evaluation, the code may be changed in the response message if provided by Visa. |
| `VisaBID` | *string* | 128 | The Business Identifier (BID) provided by Visa to Third Party Servicers (TPS). |
| `VisaAUR` | *string* | 128 | Agent Unique Account Result (AUAR) provided by Visa to Third Party Servicers (TPS). |
| `networkResponseCode ` | *string* |16 | Debit network response. |

---

### Authorization Characteristics Indicator
| Value | Description |
|-------|-------------|
| *CARD_NOT_PRESENT* |  Card not present trasaction (preferred customer only e.g. Lodging or Auto Rental). |
| *INCREMENT* | Incremental Authorization. | 
| *REQUEST_PARTICIPATION* |  Transaction requests participation. |
| *CARD_NOT_PRESENT_NO_AVS* |  Card not present, AVS not required. |

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
```
---

<!-- type: tab-end -->

## See Also

- [API Explorer](./api/?type=post&path=/payments/v1/charges)
- [Charges](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Refund](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Credit](?path=docs/Resources/API-Documents/Payments/Credit.md)
- [Forced Post](?path=docs/Resources/API-Documents/Payments/Forced.md)

---
