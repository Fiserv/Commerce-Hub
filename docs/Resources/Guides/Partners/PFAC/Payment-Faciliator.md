---
tags: [Payment Faciliator]
---

# Payment Faciliator

A payment facilitator is a merchant service provider that simplifies the merchant account enrollment process. Small merchants that don't have enough infrastructure to start accepting card payments, gets onboarded under payment facilitator as a sub-merchant. Payment facilitator have removed the friction in the application and onboarding process by simplifying it and tailoring it to the businesses they serve, enabling those businesses to begin accepting card payments more quickly. 

---

## Request Variables

For the transaction acquired at sub-merchant, the transaction request from payment facilitator should have the merchant information as in below format.

<!--
type: tab
title: merchantDetails, dynamicDescriptors, splitSettlement
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|

<!--
type: tab
title: JSON Example
-->

JSON string format for `subMerchant`:

```json
{
   "subMerchant":{
      "id": "99998888",
      "name": "ABC Pharmacy",
      "street": "123 Main Street",
      "city": "Atlanta",
      "state": "GA",
      "postalCode": "30303-001",
      "country": "US",
      "taxId": "123456789"
   }
}
```

<!-- type: tab-end -->

---

## Payment Faciliator SIngle (CNP)

Add Description

## Payload Example

<!--
type: tab
title: Request
-->

Example of a PFAC Single(CNP) payload request

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4012000033330026",
      "expirationMonth": "12",
      "expirationYear": "2025",
      "securityCode": 977
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
  ]
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

## Payment Faciliator Multi (CNP)

Add description

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a PFAC Multi(CNP) payload request

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4012000033330026",
      "expirationMonth": "12",
      "expirationYear": "2025",
      "securityCode": 977
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
    "merchantId": "100004SUBPFACM1",
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
  ]
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&payments-vas/v1/accounts/gift-cards)

<!--
type: tab
-->

Example of payload response

Description:

```json

{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "CAPTURED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG0194cb628f83db3c6f8f947fca45e626e5",
      "transactionTimestamp": "2023-10-26T17:57:32.186136941Z",
      "apiTraceId": "248670cda571448f9d597f2f8f725681",
      "clientRequestId": "08299e6ddb9307c5a0f49d2bf3b5c837",
      "transactionId": "248670cda571448f9d597f2f8f725681"
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
      "approvalCode": "OK410C",
      "referenceNumber": "7f2f8f725681",
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
          "value": "ARAyIAGADoAAAgAAAAAAAACAABAmF1cyAUUCAAFZN2YyZjhmNzI1NjgxT0s0MTBDMDAwMTY1MDk3NQI0AEgxNE4wMTMyOTk5MzUyMTg4NDNJViAgICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAGDIyQVBQUk9WQUwgICAgICAgIAADNDlNAAZWSUNSQyAAMVNQMDcwMTY4NDA4NzI3ODk1ODAwMDI2MTAwMDMwMDIAZlNEVEMwMTU2MDExMDAwMDAwMDAwMDBSSTAxNTAwMDAwMDAwMDAwMDAwME5MMDA0VklTQVRZMDAxQ0FSMDA0VjAwMABIQVJCTjAwOFVTQSBCYW5rQ0kwMDNVU0FDUDAwMUhEUDAwMUNSQzAwMjAwQ0IwMDFW"
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
    "retrievalReferenceNumber": "7f2f8f725681"
  },
  "transactionInteraction": {
    "posEntryMode": "MANUAL",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM",
    "additionalPosInformation": {
      "stan": "014502",
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
    "merchantId": "100004SUBPFACM1"
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
    "transactionIdentifier": "013299935218843"
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
