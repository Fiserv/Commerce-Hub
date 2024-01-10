---
tags: [Payment Faciliator]
---

# Payment Faciliator Single MID

Add Description

## Request Variables

The following variables are also required when submitting a capture request.

<!--
type: tab
titles: merchantDetails, dynamicDescriptor
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Required|  Description |
| --------- | ---------- | -------- | --------- | ----- |
| `merchantId` | *string* | 40 | &#10004; | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `terminalId` | *string* | N/A | &#10004; | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!--
type: tab
-->

The below table identifies the required parameters in the `dynamicDescriptor` object.

- **Discover, Visa, and Mastercard Single Merchant ID Payment Facilitators:** the format for `merchantName` is the first 3 characters of the [Payment Facilitator](?path=docs/Resources/Guides/Partners/PFAC/Payment-Faciliator.md) name followed by an asterisk and the sub-merchant name, e.g. “XYZ*A SMALL CO”
- **Amex Single Merchant ID Payment Facilitators:** the `merchantName` must only contain the sub-merchant name, e.g. “A SMALL CO”

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `mcc` | *string* | 4 | [Merchant Category Code](?path=docs/Resources/Master-Data/Merchant-Category-Code.md) |
| `merchantName` | *string* | 1024 | Merchant Name or Doing Business As (DBA) |
| `customerServiceNumber` | *string* | 15| Customer service phone number information that is passed to the issuer *(it may appear on the cardholder’s statement)* or if merchant wants to pass information that differs from the information stored on our master File. |
| `serviceEntitlement` | *string* | 16 | Merchant Service Entitlement number |
| `address` | *object* | N/A  | Merchant [address](?path=docs/Resources/Master-Data/Address.md#address) details |
| `subMerchantId` | *string* | 1024 | Sub-merchant ID defined by a third party processor. |

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
title: Request
-->

Example of a PFAC Single payload charge request

```json
{
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
  "amount": {
    "total": 80,
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": true,
    "createToken": true
  },
  "merchantDetails": {
    "merchantId": "100004000PFACS1",
    "terminalId": "10000001"
  },
  "dynamicDescriptors": {
    "mcc": "5204",
    "merchantName": "Nike",
    "customerServiceNumber": "4448889999",
    "serviceEntitlement": "4040404040",
    "customerServiceEmail": "Nike.com",
    "subMerchantId": "MANUAL_PFACM_3",
    "address": {
      "street": "2900 Parkway",
      "city": "Alpharetta",
      "stateOrProvince": "GA",
      "postalCode": "30004",
      "country": "US"
    }
  }
}
```
<!--
type: tab
title: Response
-->

Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json

{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "CAPTURED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG01c918844925736c2a2ed97ffeef4a2366",
      "transactionTimestamp": "2023-10-26T17:55:51.305873759Z",
      "apiTraceId": "5e9267f7ae144e3ebdf0ba3baa55da67",
      "clientRequestId": "3f89b287bebfc82cc3f347200d4e6096",
      "transactionId": "5e9267f7ae144e3ebdf0ba3baa55da67"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
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
      "total": 80,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK265C",
      "referenceNumber": "ba3baa55da67",
      "processor": "FISERV",
      "host": "NASHVILLE",
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
          "securityCodeMatch": "MATCHED",
          "association": {
            "securityCodeResponse": "M"
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
          "value": "ARAyIAGADoAAAgAAAAAAAACAABAmF1VRAUQ3AAFZYmEzYmFhNTVkYTY3T0syNjVDMDAwMTY1MDk3NQI0AEgxNE4wMTMyOTk1MTg4ODYzNDJJViAgICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAGDIyQVBQUk9WQUwgICAgICAgIAADNDlNAAZWSUNSQyAAMVNQMDcwMTY4NDA4NzI3ODk1ODAwMDI2MTAwMDMwMDIAZlNEVEMwMTU2MDExMDAwMDAwMDAwMDBSSTAxNTAwMDAwMDAwMDAwMDAwME5MMDA0VklTQVRZMDAxQ0FSMDA0VjAwMABIQVJCTjAwOFVTQSBCYW5rQ0kwMDNVU0FDUDAwMUhEUDAwMUNSQzAwMjAwQ0IwMDFW"
        }
      ]
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "transactionCaptureType": "host",
    "partialApproval": true,
    "processingCode": "000000",
    "transactionCutTimeStamp": "2023-10-27T12:00:00Z",
    "createToken": true,
    "retrievalReferenceNumber": "ba3baa55da67"
  },
  "transactionInteraction": {
    "posEntryMode": "MANUAL",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM",
    "additionalPosInformation": {
      "stan": "014437",
      "posFeatures": {
        "pinAuthenticationCapability": "UNSPECIFIED",
        "terminalEntryCapability": "UNSPECIFIED"
      }
    },
    "authorizationCharacteristicsIndicator": "N",
    "hostPosEntryMode": "010",
    "hostPosConditionCode": "59"
  },
  "merchantDetails": {
    "tokenType": "BBY0",
    "terminalId": "10000001",
    "merchantId": "100004000PFACS1"
  },
  "splitSettlement": [
    {
      "merchantId": "222222",
      "subTotal": 50,
      "accountDetails": [
        {
          "name": "ABC Inc",
          "type": "REVENUE_ACCOUNT",
          "amount": {
            "total": 35,
            "currency": "USD"
          }
        },
        {
          "name": "ABC Inc",
          "type": "FEE_ACCOUNT",
          "amount": {
            "total": 15,
            "currency": "USD"
          }
        }
      ]
    },
    {
      "merchantId": "1111111",
      "subTotal": 30,
      "accountDetails": [
        {
          "name": "ABC Inc",
          "type": "RESERVE_ACCOUNT",
          "amount": {
            "total": 20,
            "currency": "USD"
          }
        },
        {
          "name": "ABC Inc",
          "type": "SERVICE_FEE_ACCOUNT",
          "amount": {
            "total": 10,
            "currency": "USD"
          }
        }
      ]
    }
  ],
  "networkDetails": {
    "network": {
      "network": "Visa"
    },
    "networkResponseCode": "00",
    "cardLevelResultCode": "C",
    "validationCode": "IV  ",
    "transactionIdentifier": "013299518886342"
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
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)

---
