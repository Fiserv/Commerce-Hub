---
tags: [Track, In-Person, Card Present, Encrypted Payments, Payment Source]
---

# PaymentTrack


Payment Track can be used as [EMV Fallback](?path=docs/Resources/FAQs-Glossary/Glossary.md#emv-fallback) and involves manually swiping the payment source into a payment terminal using magnetic stripe. This can be used when the payment terminal fails to obtain the card details from the card's chip.

A device captures the customer's payment source unencrypted or encryptes the data and sends it to Commerce Hub.

<!-- theme: warning -->
> It is not recommended to send unencrypted track 1 and track 2 data for the payment transaction.

---

## PINless Transactions

Accept PINless and signature based track payments.


### Request Variables

<!-- theme: info -->
> Refer to the [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md) for additional fields that may be required based on business needs and industry vertical.

<!--
type: tab
titles: source,  encryptionData, JSON Example
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ---------| --------- |
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentTrack* for Magnetic stripe transactions |
| `track1Data` | *string* | N/A | | Contains the unencrypted magnetic stripe track 1 data from a payment card |
| `track2Data` | *string* | N/A | |  Contains the unencrypted magnetic stripe track 2 data from a payment card |
| `encryptionData` | *object* | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md)|


<!--
type: tab
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `encryptionType` | *string* | 256 |  &#10004; | [Encryption type](?path=docs/Resources/Master-Data/Encryption-Data.md#encryption-type) to be passed. Example (ON_GAURD) |
| `encryptionTarget` | *string* | 256 |  &#10004; | Target can be TRACK_1, TRACK_2, or BOTH |
| `encryptionBlock` | *string* | 2000 |  &#10004; | This field contains the track data or card number provided in encrypted form. |
| `deviceType` | *string* | 256 |  &#10004; | [Device type](?path=docs/Resources/Master-Data/Encryption-Data.md#device-type) need to be sent for TDES and AES encrypted track data. Example (INGENICO) |
| `keyId` | *string* | 64 | | Required if track data is encrypted |

<!--
type: tab
-->

JSON string format for PaymentTrack:

```json
{
   "source":{
      "sourceType": "PaymentTrack",
      "encryptionData":{
         "encryptionType": "RSA",
         "encryptionTarget": "TRACK_2",
         "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
         "deviceType": "INGENICO",
         "keyId": "88000000023"
      }
   }
}
```

<!-- type: tab-end -->

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a charge payload request using PaymentTrack.

```json
{
   "amount":{
      "total": "12.04",
      "currency": "USD"
   },
  "source": {
    "sourceType": "PaymentTrack",
    "encryptionData": {
      "encryptionType": "ON_GUARD",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "4614507291879694=078443325742854",
      "keyId": "FFFF109700000E4000340114",
      "deviceType": "INGENICO"
    }
  },
   "transactionDetails":{
      "captureFlag": true,
      "merchantInvoiceNumber": "123456789012"
   },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "MAG_STRIPE",
    "posConditionCode": "CARD_PRESENT",
    "terminalTimestamp": "2022-03-10T01:37:13Z",
    "additionalPosInformation": {
      "dataEntrySource": "MOBILE_TERMINAL",
      "posFeatures": {
        "terminalEntryCapability": "MAG_STRIPE_MANUAL_CHIP"
      }
    }
  },
    "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
    }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
   "gatewayResponse":{
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "POS",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2021-06-20T23:42:48Z",
         "orderId": "RKOrdID-525133851837",
         "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
         "clientRequestId": "4345791",
         "transactionId": "84356531338"
      }
   },
  "source": {
    "sourceType": "PaymentTrack",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2025",
      "bin": "401777",
      "last4": "5556",
      "scheme": "Visa"
    }
  },
   "paymentReceipt":{
      "approvedAmount":{
         "total": "12.04",
         "currency": "USD"
      },
      "merchantName": "Merchant Name",
      "merchantAddress": "123 Peach Ave",
      "merchantCity": "Atlanta",
      "merchantStateOrProvince": "GA",
      "merchantPostalCode": "12345",
      "merchantCountry": "US",
      "merchantURL": "https://www.somedomain.com",
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK5882",
         "schemeTransactionId": "0225MCC625628",
         "processor": "FISERV",
	 "host": "NASHVILLE",
         "responseCode": "000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2021-06-20T23:42:48Z",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2021-06-20T23:42:48Z"
         }
      }
   },
   "transactionDetails":{
      "captureFlag": true,
      "merchantInvoiceNumber": "123456789012"
   },
  "transactionInteraction": {
    "posEntryMode": "MAG_STRIPE",
    "posConditionCode": "CARD_PRESENT",
    "terminalTimestamp": "2022-03-10T01:37:13Z",
    "additionalPosInformation": {
      "stan": "001709",
      "dataEntrySource": "MOBILE_TERMINAL",
      "posFeatures": {
        "terminalEntryCapability": "MAG_STRIPE_MANUAL_CHIP"
      }
    }
  }
}
```

<!-- type: tab-end -->

---

## PIN Based Transactions

Accept PIN based Track payment cards.

### Request Variables

<!-- theme: info -->
> Refer to the [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md) for additional fields that may be required based on business needs and industry vertical.

<!--
type: tab
titles: source, encryptionData, pinBlock, JSON Example
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentTrack* for Track transactions |
| `track1Data` | *string* | N/A | | Contains the unencrypted magnetic stripe track 1 data from a payment card |
| `track2Data` | *string* | N/A | |  Contains the unencrypted magnetic stripe track 2 data from a payment card |
| `encryptionData` | *object* | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md)|
| `pinBlock` | *object* | N/A | &#10004; | Contains the [encrypted PIN details](?path=docs/Resources/Master-Data/Pin-Block.md). Used in credit, [debit](?path=docs/Resources/Guides/Debit/PIN_Debit.md), gift card or EBT/WIC where a PIN is required. |

<!--
type: tab
-->

The below table identifies the parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `encryptionType` | *string* | 256 |  &#10004; | [Encryption type](?path=docs/Resources/Master-Data/Encryption-Data.md#encryption-type) to be passed. Example (ON_GAURD) |
| `encryptionTarget` | *string* | 256 |  &#10004; | Target can be TRACK_1, TRACK_2, or BOTH |
| `encryptionBlock` | *string* | 2000 |  &#10004; | This field contains the track data or card number provided in encrypted form. |
| `deviceType` | *string* | 256 |  &#10004; | [Device type](?path=?path=docs/Resources/Master-Data/Encryption-Data.md#device-type) need to be sent for TDES and AES encrypted track data. Example (INGENICO) |
| `keyId` | *string* | 64 | | Required if track data is encrypted |

<!--
type: tab
-->

The below table identifies the required parameters in the `pinBlock` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `encryptedPin` | *string* | 2000 |  &#10004; | This field contains the Encrypted PIN Block for Debit, EBT, Fleet or Credit transactions. |
| `keySerialNumber` | *string* | 256 |  &#10004; | This field is used to create the base PIN encryption key for DUKPT PIN Debit, EBT, Fleet and Credit Transactions. |
| `pinEncryptionWorkingKey` | *string* | 2000 |  &#10004; | Terminal PIN Encryption working key (TKPE). A PIN Encryption Key is a used to protect PINs as they are transmitted. |


<!--
type: tab
-->


JSON string format for PaymentTrack:

```json
{
   "source":{
      "sourceType": "PaymentTrack",
      "encryptionData":{
         "encryptionType": "RSA",
         "encryptionTarget": "TRACK_2",
         "encryptionBlock": "4614507291879694=078443325742854",
         "deviceType": "INGENICO",
         "keyId": "FFFF109700000E4000340114"
      },
      "pinBlock":{
         "encryptedPin": "0FF7A610CC84CE40",
         "keySerialNumber": "FFFF3D3D3D00232002C9"
         "pinEncryptionWorkingKey": "7586325254178549.....",
      }
   }
}
```

<!-- type: tab-end -->

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a charge payload request using PaymentTrack.

```json{
   "amount":{
      "total":"12.04",
      "currency":"USD"
   },
   "source":{
      "sourceType":"PaymentTrack",
      "encryptionData":{
         "encryptionType": "RSA",
         "encryptionTarget": "TRACK_2",
         "encryptionBlock": "4614507291879694=078443325742854",
         "deviceType": "INGENICO",
         "keyId": "88000000022"
      },
       "pinBlock":{
         "encryptedPin": "0FF7A610CC84CE40",
         "keySerialNumber": "FFFF3D3D3D00232002C9"
      }
   },
   "transactionDetails":{
      "captureFlag": true,
      "merchantInvoiceNumber": "123456789012"
   },
   "transactionInteraction":{
      "origin": "POS",
      "posEntryMode": "MAG_STRIPE",
      "posConditionCode": "CARD_PRESENT",
      "terminalTimestamp": "2022-03-10T01:37:13Z",
      "additionalPosInformation":{
         "dataEntrySource": "MOBILE_TERMINAL",
         "posFeatures":{
            "pinAuthenticationCapability": "CAN_ACCEPT_PIN",
            "terminalEntryCapability": "MAG_STRIPE_MANUAL_CHIP"
         }
      }
   },
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
   }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
	"gatewayResponse": {
		"transactionType": "CHARGE",
		"transactionState": "AUTHORIZED",
		"transactionOrigin": "POS",
		"transactionProcessingDetails": {
			"transactionTimestamp": "2021-06-20T23:42:48Z",
			"orderId": "RKOrdID-525133851837",
			"apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
			"clientRequestId": "4345791",
			"transactionId": "84356531338"
		}
	},
	"source": {
		"sourceType": "PaymentTrack",
		"card": {
			"expirationMonth": "12",
			"expirationYear": "2025",
			"bin": "401777",
			"last4": "5556",
			"scheme": "Visa"
		}
	},
	"paymentReceipt": {
		"approvedAmount": {
			"total": "12.04",
			"currency": "USD"
		},
		"merchantName": "Merchant Name",
		"merchantAddress": "123 Peach Ave",
		"merchantCity": "Atlanta",
		"merchantStateOrProvince": "GA",
		"merchantPostalCode": "12345",
		"merchantCountry": "US",
		"merchantURL": "https://www.somedomain.com",
		"processorResponseDetails": {
			"approvalStatus": "APPROVED",
			"approvalCode": "OK5882",
			"schemeTransactionId": "0225MCC625628",
			"processor": "fiserv",
			"responseCode": "000",
			"responseMessage": "APPROVAL",
			"hostResponseCode": "00",
			"hostResponseMessage": "APPROVAL",
			"localTimestamp": "2021-06-20T23:42:48Z",
			"bankAssociationDetails": {
				"associationResponseCode": "000",
				"transactionTimestamp": "2021-06-20T23:42:48Z"
			}
		}
	},
	"transactionDetails": {
		"captureFlag": true,
		"merchantInvoiceNumber": "123456789012"
	},
	"transactionInteraction": {
		"posEntryMode": "MAG_STRIPE",
		"posConditionCode": "CARD_PRESENT",
		"terminalTimestamp": "2022-03-10T01:37:13Z",
		"additionalPosInformation": {
			"stan": "001709",
			"dataEntrySource": "MOBILE_TERMINAL",
			"posFeatures": {
				"pinAuthenticationCapability": "CAN_ACCEPT_PIN",
				"terminalEntryCapability": "MAG_STRIPE_MANUAL_CHIP"
			}
		}
	},
	"additionalDataCommon": {},
	"networkDetails": {
		"network": {
			"network": "Visa"
		},
		"debitNetworkId": "060007"
	}
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [EMV Chip](?path=docs/In-Person/Encrypted-Payments/EMV.md)
- [Encryption Data](?path=docs/Resources/Master-Data/Encryption-Data.md)
- [Encrypted PIN Data](?path=docs/Resources/Master-Data/Pin-Block.md)
- [Manual Entry](?path=docs/In-Person/Encrypted-Payments/Manual.md)
- [Merchant Details](?path=docs/Resources/Master-Data/Merchant-Details.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)

---
