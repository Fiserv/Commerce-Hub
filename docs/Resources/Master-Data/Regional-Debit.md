---
tags: [carat, commerce-hub, enterprise, card-present, master-data, regional-debit, international-debit]
---

# Regional Debit

Applies to International Debit transactions.

<!--
type: tab
title: regionalPin
-->

The below table identifies the parameters in the `regionalPin` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | -------------------------------|
| `pinBlock` | *object* | N/A | The [PIN block](?path=docs/Resources/Master-Data/Pin-Block.md) is used to transport a PIN value. |
| `region` | *string* |  | Region of Debit Origin - Canadian, German , etc |
| `debitTransactionCode` | *string* |  |  |
| `debitMACValue` | *string* |  | To confirm that the key data elements of the transaction have not been tampered. MAC protection is required on all Canadian Debit transactions. It is optional when processing U.S. debit/EBT transactions. |
| `encryptedKeyIndex` | *string* |  |  |
| `messageAuthenticationWorkingKey` | *string* |  |  |
| `messageAuthenticationWorkingKeyCheckDigits` | *string* |  |  |
| `messageEncryptionWorkingKey` | *string* |  |  |
| `debitPinPadSerialNumber` | *string* |  | Canadian Debit requests to indicate the serial number of the PIN device being used at the POS.Serial Number of the PIN device in use at the POS. This value must be present on the Chase Merchant Services system in order for any Canadian Debit transactions to process successfully.' |
| `accountType` | *string* |  | Canada debit - Checking, Savings |
| `transactionSequenceCounter` | *string* |  | Required on all Canadian Debit EMV transaction requests. Contains a unique sequence counter for this transaction from this point of sale. |


<!--
type: tab
title: JSON Example 
-->

JSON string format for `regionalPin`:

```json
{
   "regionalPin":{
     "pinBlock":{
        "encryptedPin": "F5f36kA...",
        "keySerialNumber": "TRACK_2",
        "pinEncryptionWorkingKey": ""
     }
     "region": "",
     "debitTransactioCode": "",
     "debitMACValue": "",
     "encryptedKeyIndex": "",
     "messageAuthenticationWorkingKey": "",
     "messageAuthenticationWorkingKeyCheckDigits": "",
     "messageEncryptionWorkingKey": "",
     "debitPinPadSerialNumber": "",
     "accountType": "",
     "transactionSequenceCounter": ""
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Encrypted Data](?path=docs/Resources/Master-Data/Encryption-Data.md)
- [Pin Block](?path=docs/Resources/Master-Data/Pin-Block.md)

---



