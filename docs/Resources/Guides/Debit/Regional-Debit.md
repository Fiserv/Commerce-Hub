---
tags: [Card Present, In-Person, Debit, Regional]
---

<!--
# Regional Debit

Regional _(International)_ Debit Solutions from Commerce Hub provide anywhere, anytime payment convenience to your customers through comprehensive transaction processing and settlement services, card management and personalization services, and extensive implementation and support services.
-->

# Message Authentication

Canadian debit allows message authentication to provide another layer of security using encryption so that the message is received by the intended recipient and has not been tampered with on the network. Message authentication is performed by using a MAC value computed by both the sender and receiver. MAC value is derived using an encryption algorithm on certain data elements in a message. Terminal computes and includes `debitMACValue` in the message sent to the host. The host calculates the MAC using the same data elements. If the host-calculated value matches that in the message, it confirms the message has not been tampered with or damaged during the transmission.

<!-- theme: Info -->
> Commerce Hub supports MACpassthrough and MACless transactions based on the MAC attribute in Merchant Configuration and Boarding. Depending on the setup if `debitMacValue` is sent or absent from the request, Commerce Hub will reject the transaction. Please contact your account representative for more information.

### Request Requirements

#### MACless

<!-- theme: Info -->
> The `processingCode` in `transactionDetails` is required for Canadian debit processing if merchant is configured as _MACless_ in Merchant Configuration and Boarding.

#### MACpassthrough

A terminal uses a DUKPT key to generate the encrypted MAC block and is included in the request sent to the host.

<!-- theme: Info -->
> The `processingCode` and `retrievalReferenceNumber` in `transactionDetails` and `stan` in `transactionInteraction` are required fields for Canadian debit processing if merchant is configured as _MACpassthrough_ in Merchant Configuration and Boarding.

The terminal generates a MAC block for a transaction by using the following data elements:

- Account number (PAN)
- Processing code
- Transaction amount
- STAN
- Retrieval Reference Number

#### Processing Codes
 
The following values are supported Canadian debit [processing codes](?path=docs/Resources/Master-Data/Processing-Code.md)

- **Sale:** ‘001000’ (savings) ‘002000’ (checking)
- **Refund:** ‘200010’ (savings) ‘200020’ (checking)
- **Adjustment of Refund (Void):** ‘021000’ (savings) ‘022000’ (checking)
- **Adjustment of Sale (Void):** ‘220010’ (savings) ‘220020’ (checking)

### Response Validation

Responses received by the terminal may or may not have a MAC value, depending upon the response code received. If there is a valid MAC value present in the `debitMACValue` field in the response, the terminal does the verification on the MAC.

When terminal receives the transaction response from the host, the MAC value is validated using the same DUKPT key that was sent in the request. 

The following are the mandated data elements that are used for the MAC verification by the terminal:

- Account number (PAN). This is a variable length field and the maximum length is 19 bytes
- Processing code
- Transaction amount
- STAN
- Retrieval Reference Number
- Response code

<!-- theme: info -->
> Upon a MAC validation failure, the terminal must complete a [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md) with the host.

---

## Request Variables

<!--
type: tab
titles: regionalDebit, JSON Example
-->

The below table identifies the parameters in the `regionalDebit` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | -------------------------------|
| `debitMacValue` | *string* | 256 | [Message authentication](#message-authentication) is used to confirm that the key data elements of the transaction have not been tampered. MAC protection is optional on Canadaian debit transactions. |
| `macKeySerialNumber` | *string* | 256  | This field is used to create the base MAC encryption key for DUKPT PIN Debit, EBT, Fleet and Credit Transactions. **Format:** _"F" (1) + Base Derivation Key ID (9) + DeviceId (5) + TranCounter (5)_. |
| `accountType` | *string* | 256 | Identifies where the funds should be withdrawn, CHECKING or SAVINGS |

<!---
| `pinBlock` | *object* | N/A | Contains the encrypted PIN Encryption Working key (TKPE). |
| `messageAuthenticationWorkingKey` | *string* | 2048 | A message authentication code for a working key that uses a session key to detect both accidental and intentional modifications of the data.  |
| `messageAuthenticationWorkingKeyCheckDigits` | *string* | 2048 | A message authentication code for a working key that uses a session key to check digits. |
| `messageEncryptionWorkingKey` | *string* | 2048 | A message encryption working key is typically a random string of bits generated specicically to scramble and unscramble data. |
| `macWorkingKey` | *string* | 16  | A message authentication code for a working key that uses a session key to detect both accidental and intentional modifications of the data. |
| `macWorkingKeyCheckDigits` | *string* | 4  | A message authentication code for a working key that uses a session key to check digits. |
-->

<!--
type: tab
-->

JSON string format for `regionalDebit`: 

```json
{
   "regionalDebit":{
     "debitMACValue": "7A773FA892CDAADC",  
     "macSerialNumber": "F876543210E000200019",
     "accountType": "CHECKING"
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

Example of a Canadian regional debit payload with MAC request.

```json
{
  "amount": {
    "total": 42.8,
    "currency": "CAD"
  },
  "source": {
    "sourceType": "PaymentTrack",
    "encryptionData": {
      "encryptionType": "ON_GUARD",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "9986536786560=18292034288863948535615",
      "keyId": "FFFF10970000000000F60114",
      "deviceType": "INGENICO"
    },
    "regionalDebit": {
      "debitMacValue": "7A773FA892CDAADC",
      "macKeySerialNumber": "F876543210E000200019",
      "accountType": "CHECKING"
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "processingCode": "002000",
    "retrievalReferenceNumber": "000018486001"
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "MAG_STRIPE",
    "posConditionCode": "CARD_PRESENT",
    "additionalPosInformation": {
      "dataEntrySource": "MOBILE_TERMINAL",
      "stan": "486001",
      "posFeatures": {
        "pinAuthenticationCapability": "CAN_ACCEPT_PIN",
        "terminalEntryCapability": "MAG_STRIPE_ONLY"
      }
    }
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

Example of a refunds (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.
 
```json
{
    "gatewayResponse": {
        "transactionType": "CHARGE",
        "transactionState": "CAPTURED",
        "transactionOrigin": "POS",
        "transactionProcessingDetails": {
            "orderId": "CHG01567188dd4bb94cfd93543edd7acba8cb",
            "transactionTimestamp": "2022-07-29T17:17:28.158609Z",
            "apiTraceId": "f944365dcd634f06b9faa1c722db1977",
            "clientRequestId": "82561",
            "transactionId": "f944365dcd634f06b9faa1c722db1977"
        }
    },
    "source": {
        "sourceType": "PaymentEMV",
        "card": {
            "expirationMonth": "12",
            "expirationYear": "2018",
            "bin": "450644",
            "last4": "1933",
            "scheme": "VISA"
        },
        "emvData": "8a023030910ac2e41378606776818840",
        "regionalDebit": {
            "debitMacValue": "3E4F63782824AD3D",
            "messageAuthenticationWorkingKeyCheckDigits": "FFFF"
        }
    },
    "paymentReceipt": {
        "approvedAmount": {
            "total": 20.00,
            "currency": "CAD"
        },
        "processorResponseDetails": {
            "approvalStatus": "APPROVED",
            "approvalCode": "000025",
            "referenceNumber": "000018458051",
            "processor": "FISERV",
            "host": "NASHVILLE",
            "networkInternationalId": "0047",
            "responseCode": "000",
            "responseMessage": "Approved",
            "hostResponseCode": "00",
            "hostResponseMessage": "APPROVAL",
        }
    },
    "transactionDetails": {
        "captureFlag": true,
        "transactionCaptureType": "hcs",
        "processingCode": "002000",
        "createToken": false,
        "retrievalReferenceNumber": "000018458051"
    },
    "transactionInteraction": {
        "posEntryMode": "ICR_RELIABLE",
        "posConditionCode": "CARD_PRESENT",
        "additionalPosInformation": {
            "stan": "458051",
            "dataEntrySource": "MOBILE_TERMINAL",
            "posFeatures": {
                "pinAuthenticationCapability": "CAN_ACCEPT_PIN",
                "terminalEntryCapability": "MAG_STRIPE_ONLY"
            }
        }
    },
    "merchantDetails": {
        "tokenType": "S013",
        "terminalId": "10000001",
        "merchantId": "100009000000442"
    },
    "networkDetails": {
        "network": {
            "network": "Visa"
        },
        "debitNetworkId": "074000",
        "networkResponseCode": "00"
    },
    "paymentTokens": [
        {
            "tokenData": "1499982719941933",
            "tokenSource": "TRANSARMOR",
            "tokenResponseCode": "000",
            "tokenResponseDescription": "SUCCESS"
        }
    ]
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Encrypted Data](?path=docs/Resources/Master-Data/Encryption-Data.md)
- [Pin Block](?path=docs/Resources/Master-Data/Pin-Block.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)
- [Transaction Interaction](?path=/docs/Resources/Master-Data/Transaction-Interaction.md)


---
