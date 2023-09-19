---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, Payment Source]
---

# 3-D Secure Request

Commerce Hub allows a merchant to pass the 3-D Secure _(3DS)_ authentication results that were obtained through a Commerce Hub or a thrid-party 3-D Secure provider when sending a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) or [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request. *PaymentCard* or *PaymentToken* is used by the merchant as the [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) when sending the transaction to Commerce Hub, along with the 3DS response data.

Commerce Hub supports 3DS request from merchants using one of the two options below;

- **Merchant Managed:** the merchant is directly integrated with a third-party system to perform 3DS authentication. The merchant will send the 3DS authentication data to Commerce Hub. Commerce Hub will pass this information to issuer during the transaction request. 
- **Commerce Hub Managed:** the merchant will use one of Commerce Hub's [3DS solutions](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md) to perform 3DS authentication and transaction authorization. 

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry _(PCI)_ Compliance capabilities to process and store card data.

---

## Request with PaymentSource

A request using `PaymentSource` requires sending the `additionalData3DS` data that is acquired through Commerce Hub or a thrid-party 3-D Secure provider listed in the table below.

### Request Variables

The below table identifies the required parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `dsTransactionId` | *string* | 60 | Unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction | 
| `authenticationStatus` | *string* | 2 | The result of authentication attempt returned by the 3D Secure authentication process (PaRes). |
| `authenticationAttemptResult` | *string* | 1024 | Result of authentication attempt from Payer Authentication Response (PaRes). 3DS 1.x |
| `mpiData` | *object* | N/A | [Merchant plug-in (MPI)](#mpi-data) data from 3-D Secure (3DS) authentication. |
| `versionData` | *object* | N/A | Additional [version data](#version-data) passed during 3-D Secure (3DS) flows. |

The below table identifies the `mpiData` parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `cavv` | *string* | 256 | The Cardholder Authentication Verification Value (CAVV) is a cryptographic value derived by the issuer during payment authentication that can provide evidence of the results of payment authentication during an online purchase. |
| `xid` | *string* | 512 | 3-D Secure value returned by service provider e.g. Cardinal Commerce. |
| `eci` | *string* | 256 | Payment system-specific value provided by the Access Control Server (ACS) or Directory Server (DS) to indicate the results of the attempt to authenticate the cardholder. |
| `tavv` | *string* | 512 | Cryptographic value that is generated during the Visa transaction authentication process for a payment token transaction. |

The below table identifies the `versionData` parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `recommendedVersion` | *string* | 6 | Recommended 3DS version as specified by the card issuer. |


<!-- type: tab-end -->

---

### Endpoint

<!-- theme: success -->
> **POST** `/payments/v1/charges`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of charges payload request with 3DS autnetication data.

```json
{
  "amount": {
    "total": 6,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "additionalData3DS": {
    "dsTransactionId": "3543-b90d-d6dc1765c98",
    "authenticationStatus": "A",
    "authenticationAttemptResult": "uyt45t89cnwu3rhc98a4hterjklth4o8ctsrjzth4",
    "mpiData": {
      "cavv": "AAABCZIhcQAAAABZlyFxAAAAAAA",
      "xid": "&x_MD5_Hash=abfaf1d1df004e3c27d5d2e05929b529&x_state=BC&x_reference_3=&x_auth_code=ET141870&x_fp_timestamp=1231877695",
      "tavv": "AAABCZIhcQAAAABZlyFxAAAAAAA"
    },
    "versionData": {
      "recommendedVersion": "2.2.0"
    }
  },
  "transactionDetails": {
    "captureFlag": false
  },
  "transactionInteraction": {
    "eciIndicator": "SECURE_ECOM"
  },
  "merchantDetails": {
    "merchantId": "100009000000202",
    "terminalId": "00000001"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)


<!--
type: tab
-->

##### Example of a charges (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG016bf4014790ae4542af01d2bfb82c2371",
      "transactionTimestamp": "2022-07-01T17:42:28.651979Z",
      "apiTraceId": "1bc2f7471fa746708667e4bff79f016e",
      "clientRequestId": "ed50be7a2b3638e2f5e8270075c326cb",
      "transactionId": "1bc2f7471fa746708667e4bff79f016e"
    }
  },
  "source": {
    "sourceType": "Payment3DS",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2025",
      "bin": "401200",
      "last4": "0026",
      "scheme": "VISA"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 6,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK973C",
      "referenceNumber": "e4bff79f016e",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "networkRouted": "VISA",
      "networkInternationalId": "0001",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL"
    }
  },
  "transactionDetails": {
    "captureFlag": false
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  },
  "networkDetails": {
    "network": {
      "network": "Visa"
    },
    "networkResponseCode": "00",
    "cardLevelResultCode": "C",
    "validationCode": "G205",
    "transactionIdentifier": "012182063695002"
  }
}

```

<!-- type: tab-end -->

---

## Request with Reference Identifier

If the 3DS [authentication request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Authentication.md) was originally performed by using Commerce Hub's [Secure Data Capture](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Secure-Data-Capture.md) or [API](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-API-Only.md), the reference transaction identifier can be used to submit a charges or tokenization request.

---

### Request Variables

<!--
type: tab
titles: referenceTransactionDetails, merchantDetails
-->

The below table identifies the available parameters in the `referenceTransactionDetails` object.

<!-- theme: info -->
> Only a single transaction identifier should be passed within the request. 

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
| `referenceTransactionId` | *string* | 40 | Commerce Hub generated `transactionId` from the original transaction. |
| `referenceMerchantTransactionId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |

<!--
type: tab
-->

The below table identifies the available parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
| `merchantId` | *string* | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `terminalId` | *string* | N/A | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. | 

<!-- type: tab-end -->

---

### Endpoint

<!-- theme: success -->
> **POST** `/payments/v1/charges`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of charges payload request using a referece identifier.

```json
{
    "amount": {
        "total": 9.00,
        "currency": "USD"
    },
    "source": {
        "sourceType": "PaymentCard",
        "card": {
            "cardData": "4012000033330026",
            "expirationMonth": "07",
            "expirationYear": "2025",
            "securityCode": "977"
        }
    },
    "additionalData3DS": {
        "serviceProviderTransactionId": "W1dkIvUNzLYgRGLBVNp1",
        "acsTransactionId": "46d071e5-2447-4980-a9ba-c8c55a99107a",
        "dsTransactionId": "3150f884-0a17-4669-8c50-5d9b8bdae022",
        "challengeIndicator": false,
        "authenticationStatus": "Y",
        "serverTransactionId": "c58e7f2e-56dd-496a-acda-b39c37bdf14b",
        "mpiData": {
            "cavv": "MTIzNDU2Nzg5MDEyMzQ1Njc4OTA=",
            "eci": "05"
        },
        "versionData": {
            "recommendedVersion": "2.1.0"
        }
    },
    "transactionDetails": {
        "captureFlag": true,
        "transactionCaptureType": "hcs",
        "deviceFingerprint": [
            { "dataDynamic": { "ipAddress": "192.168.0.12" } }
        ]
    },
    "merchantDetails": {
        "terminalId": "10000001",
        "merchantId": "100004000100116"
    "referenceTransactionDetails": {
        "referenceTransactionId": "123456789012e98re9fsf8aa8sa88a998"
    },
    "customer": {
        "firstName": "test",
        "lastName": "name",
        "email": "testvelocity@fiserv.com",
        "ipAddress": "192.168.0.6"
    },
    "additionalDataCommon":{"directedRouting":{"processors":[{"platform":"NASHVILLE","priority":"FINAL"}]}}
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

##### Example of a charges (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "CAPTURED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG01f7bcbe6eced099c48c745a18d845f3b8",
      "transactionTimestamp": "2023-08-08T19:59:52.267578481Z",
      "apiTraceId": "1efed3bb53a7474b9d1c719277c8f5e2",
      "clientRequestId": "2282171",
      "transactionId": "1efed3bb53a7474b9d1c719277c8f5e2"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "07",
      "expirationYear": "2025",
      "bin": "401200",
      "last4": "0026",
      "scheme": "VISA"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 9,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK962C",
      "referenceNumber": "719277c8f5e2",
      "networkRouted": "VISA",
      "networkInternationalId": "0001",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "responseIndicators": {
        "alternateRouteDebitIndicator": false,
        "signatureLineIndicator": false,
        "signatureDebitRouteIndicator": false
      },
      "bankAssociationDetails": {
        "associationResponseCode": "V000",
        "avsSecurityCodeResponse": {
          "streetMatch": "NONE",
          "postalCodeMatch": "NONE",
          "securityCodeMatch": "NOT_CHECKED",
          "association": {
            "securityCodeResponse": "X"
          }
        }
      },
      "additionalInfo": [
        {
          "name": "COUNTRY_CODE",
          "value": "USA"
        },
        {
          "name": "CARD_PRODUCT_ID",
          "value": "H"
        },
        {
          "name": "DETAILED_PRODUCT_ID",
          "value": "C"
        },
        {
          "name": "HOST_RAW_PROCESSOR_RESPONSE",
          "value": "ARAyIAGADoAAAgAAAAAAAAAJAAgIGVlSAAB5AAFZNzE5Mjc3YzhmNWUyT0s5NjJDMDAwMTY1MDk3MQIZAEgxNFUwMTMyMjA3MTE0OTg2MjVHNzE1ICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAGDIyQVBQUk9WQUwgICAgICAgIAADNDlYAAM2NTEABlZJQ1JDIAAxU1AwNzAxNjg0MDg3Mjc4OTU4MDAwMjYxMDAwMzAwMgBGU0RSSTAxNTAwMDAwMDAwMDAwMDAwME5MMDA0VklTQVRZMDAxQ0FSMDA0VjAwMABIQVJCTjAwOFVTQSBCYW5rQ0kwMDNVU0FDUDAwMUhEUDAwMUNSQzAwMjAwQ0IwMDFW"
        }
      ]
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "transactionCaptureType": "hcs",
    "processingCode": "000000",
    "transactionCutTimeStamp": "2023-08-09T01:45:00Z",
    "deviceFingerprint": [
      {
        "dataDynamic": {
          "ipAddress": "192.168.0.12"
        }
      }
    ],
    "createToken": true,
    "retrievalReferenceNumber": "719277c8f5e2"
  },
  "transactionInteraction": {
    "posEntryMode": "MANUAL",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM",
    "additionalPosInformation": {
      "stan": "000079",
      "posFeatures": {
        "pinAuthenticationCapability": "UNSPECIFIED",
        "terminalEntryCapability": "UNSPECIFIED"
      }
    },
    "authorizationCharacteristicsIndicator": "U",
    "hostPosEntryMode": "010",
    "hostPosConditionCode": "59"
  },
  "merchantDetails": {
    "tokenType": "BBY0",
    "terminalId": "10000001",
    "merchantId": "100004000100116"
  },
  "networkDetails": {
    "network": {
      "network": "Visa"
    },
    "networkResponseCode": "00",
    "cardLevelResultCode": "C",
    "validationCode": "G715",
    "transactionIdentifier": "013220711498625"
  },
  "cardDetails": {
    "recordType": "DETAIL",
    "lowBin": "4012000",
    "highBin": "4012000",
    "binLength": "07",
    "binDetailPan": "16",
    "countryCode": "USA",
    "detailedCardProduct": "VISA",
    "detailedCardIndicator": "CREDIT",
    "pinSignatureCapability": "SIGNATURE",
    "issuerUpdateYear": "21",
    "issuerUpdateMonth": "12",
    "issuerUpdateDay": "01",
    "regulatorIndicator": "NON_REGULATED",
    "cardClass": "CONSUMER",
    "nonMoneyTransferOCTsDomestic": "NOT_SUPPORTED",
    "nonMoneyTransferOCTsCrossBorder": "NOT_SUPPORTED",
    "onlineGamblingOCTsDomestic": "NOT_SUPPORTED",
    "onlineGamblingOCTsCrossBorder": "NOT_SUPPORTED",
    "moneyTransferOCTsDomestic": "NOT_SUPPORTED",
    "moneyTransferOCTsCrossBorder": "NOT_SUPPORTED",
    "fastFundsDomesticMoneyTransfer": "NOT_SUPPORTED",
    "fastFundsCrossBorderMoneyTransfer": "NOT_SUPPORTED",
    "fastFundsDomesticNonMoneyTransfer": "NOT_SUPPORTED",
    "fastFundsCrossBorderNonMoneyTransfer": "NOT_SUPPORTED",
    "fastFundsDomesticGambling": "NOT_SUPPORTED",
    "fastFundsCrossBorderGambling": "NOT_SUPPORTED",
    "productId": "A",
    "accountFundSource": "CREDIT",
    "panLengthMin": "16",
    "panLengthMax": "16"
  },
  "paymentTokens": [
    {
      "tokenData": "8408727895800026",
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
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)
- [Additional Data 3DS](?path=docs/Resources/Master-Data/Additional-Data-3DS.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
