---
tags: [Private Label, Payment Sources]
---

# ChargeAfter Card Present (CP)

ChargeAfter is a leading network for Buy Now Pay Later  *(BNPL)* consumer point-of-sale financing.

<!-- theme: warning -->
> Currently, only direct send settlement model is supported. Merchants must submit the settlement batch file directly to the processor. Commerce Hub will not have access to transaction completion, therefore refunds will need to be submitted as an open refund. For more information, please contact your account representative.

<!-- theme: warning -->
> Merchant must pass origin for CP/CNP Auth and Open refund transactions.
Origin supported  - MOTO, ECOM, POS

---

## Request Variables

<!--theme:info-->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service, `paymentTokens` will be returned in the response. To override this behavior, `createToken`: *false* is required in `transactionDetails`. Contact your account representative for more information about enabling tokenization.

<!--
type: tab
titles: customFields, JSON Example
-->

The below table identifies the key value pairs to indentify the required `customFields` in the `additionalDataCommon` object.

<!-- theme: info -->
> Values are merchant specfic, please contact your account representative for more details.

| Key | Description |
| -------- | -------- |
| Request_Date_Time_GMT | GMT timestamp set when output message is created for send to vendor |
| Request_Date_Time_Local | Local timestamp set when output message is created for send to vendor |
| Requestor_Channel_Code | Channel code the identifies the store |
| Requestor_Organization_Code | Organization code that identifies the merchant |
| Requestor_User_ID | Name of the comm server sending the message |
| Requestor_POS_Event_Code | The type of transaction being requested |
| Requestor_Location_State_Code | State Code from POS request  |
| Retailer_Channel | Retail origination type i.e. STORE |
| Consumer_Decision | Identifies if the customer ACCEPTS the terms |
| Terms_Verified | Identifies if the terms were verified |
| Lookup_Strategy | Defines the DETERMINISTIC lookup with ChargeAfter |
| Sales_Doc_ID | Invoice or sales order document number |

<!--
type: tab
-->

```json

{
  "additionalDataCommon": {
    "customFields": [
      {
        "key": " Request_Date_Time_GMT",
        "value": "2023-09-20T05:33:05Z"
      },
      {
        "key": " Request_Date_Time_Local",
        "value": "2023-09-20T05:33:05Z"
      },
      {
        "key": "Requestor_Channel_Code",
        "value": "STORE"
      },
      {
        "key": " Requestor_Organization_Code",
        "value": "ORGANIZATION_CODE"
      },
      {
        "key": "Requestor_User_ID",
        "value": "USER_ID"
      },
      {
        "key": "Requestor_POS_Event_Code",
        "value": "SALE"
      },
      {
        "key": "Requestor_Location_State_Code",
        "value": "TX"
      },
      {
        "key": "Retailer_Channel",
        "value": "STORE"
      },
      {
        "key": "Consumer_Decision",
        "value": "ACCEPT"
      },
      {
        "key": " Terms_Verified",
        "value": "Y"
      },
      {
        "key": "Lookup_Strategy",
        "value": "DETERMINISTIC"
      },
      {
        "key": "Sales_Doc_ID",
        "value": "SALES_ID"
      }
    ]
  }
}

```

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a charge payload request using a ChargeAfter PLCC

```json
{
  "amount": {
    "total": 1.45,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentTrack",
    "encryptionData": {
      "encryptionType": "ON_GUARD",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "4599892543100751=36193012513455685570",
      "keyId": "FFFF999999039D4001080114",
      "deviceType": "INGENICO"
    }
  },
  "transactionDetails": {
    "captureFlag": false,
    "merchantOrderId": "7EWVTZRNAK7AJMXL",
    "merchantTransactionId": "FT4WTBP9LW0FB0PD"
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "MAG_STRIPE",
    "posConditionCode": "CARD_PRESENT",
    "terminalTimestamp": "2023-09-20T05:33:05Z"
  },
  "merchantDetails": {
    "merchantId": "100012000003424",
    "terminalId": "10000001"
  },
  "additionalDataCommon": {
    "customFields": [
      {
        "key": " Request_Date_Time_GMT",
        "value": "2023-09-20T05:33:05Z"
      },
      {
        "key": " Request_Date_Time_Local",
        "value": "2023-09-20T05:33:05Z"
      },
      {
        "key": "Requestor_Channel_Code",
        "value": "STORE"
      },
      {
        "key": " Requestor_Organization_Code",
        "value": "BUSINESS"
      },
      {
        "key": "Requestor_User_ID",
        "value": "XXXX"
      },
      {
        "key": "Requestor_POS_Event_Code",
        "value": "SALE"
      },
      {
        "key": "Requestor_Location_State_Code",
        "value": "TX"
      },
      {
        "key": "Retailer_Channel",
        "value": "STORE"
      },
      {
        "key": "Consumer_Decision",
        "value": "ACCEPT"
      },
      {
        "key": " Terms_Verified",
        "value": "Y"
      },
      {
        "key": "Lookup_Strategy",
        "value": "DETERMINISTIC"
      },
      {
        "key": "Sales_Doc_ID",
        "value": "12443-605"
      }
    ],
    "directedRouting": {
      "processors": [
        {
          "processorName": "CHARGE_AFTER",
          "processingPlatform": "PRIVATE_LABEL",
          "priority": "PRIMARY"
        }
      ]
    }
  }
}
```

<!--
type: tab
-->

Example of a charge (201: Created) response

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "POS",
    "transactionProcessingDetails": {
      "orderId": "CHG012ed86c6922b3baa3daf6212a387a535e",
      "transactionTimestamp": "2023-10-02T15:06:53.265622209Z",
      "apiTraceId": "c62b549306424057a66dd862156c475b",
      "clientRequestId": "4396400",
      "transactionId": "c62b549306424057a66dd862156c475b"
    }
  },
  "source": {
    "sourceType": "PaymentTrack",
    "card": {
      "expirationMonth": "11",
      "expirationYear": "2025",
      "bin": "777676",
      "last4": "0685",
      "scheme": "THD"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 1.45,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "341003",
      "processor": "CHARGE_AFTER",
      "host": "PRIVATE_LABEL",
      "localTimestamp": "2023-10-02T15:06:57.703554Z"
    }
  },
  "transactionDetails": {
    "captureFlag": false,
    "transactionCaptureType": "terminal_direct",
    "merchantTransactionId": "FT4WTBP9LW0FB0PD",
    "merchantOrderId": "7EWVTZRNAK7AJMXL",
    "retrievalReferenceNumber": "d862156c475b"
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "MAG_STRIPE",
    "posConditionCode": "CARD_PRESENT",
    "terminalTimestamp": "2023-09-20T05:33:05Z"
  },
  "additionalDataCommon": {
    "customFields": [
      {
        "key": " Request_Date_Time_GMT",
        "value": "2023-09-20T05:33:05Z"
      },
      {
        "key": " Request_Date_Time_Local",
        "value": "2023-09-20T05:33:05Z"
      },
      {
        "key": "Requestor_Channel_Code",
        "value": "STORE"
      },
      {
        "key": " Requestor_Organization_Code",
        "value": "BUSINESS"
      },
      {
        "key": "Requestor_User_ID",
        "value": "XXXXX"
      },
      {
        "key": "Requestor_POS_Event_Code",
        "value": "Sale"
      },
      {
        "key": "Requestor_Location_State_Code",
        "value": "TX"
      },
      {
        "key": "Retailer_Channel",
        "value": "STORE"
      },
      {
        "key": "Consumer_Decision",
        "value": "ACCEPT"
      },
      {
        "key": " Terms_Verified",
        "value": "Y"
      },
      {
        "key": "Lookup_Strategy",
        "value": "DETERMINISTIC"
      },
      {
        "key": "Sales_Doc_ID",
        "value": "11111-000"
      },
      {
        "key": "Service_Version_ID",
        "value": "02_00_00"
      },
      {
        "key": "Transaction_Request_Type",
        "value": "PRE_AUTH"
      }
    ]
  },
  "paymentTokens": [
    {
      "tokenData": "7809293712430685",
      "tokenSource": "TRANSARMOR",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
    },
    {
      "tokenData": "1100000000056349",
      "tokenSource": "CHARGE AFTER"
    }
  ]
}
```

<!-- type: tab-end -->

---

# ChargeAfter Card Not Present (CNP)

ChargeAfter Card Not Present (CNP) is a leading network for Buy Now Pay Later  *(BNPL)* consumer point-of-sale financing.

<!-- theme: warning -->
> Currently, only direct send settlement model is supported. Merchants must submit the settlement batch file directly to the processor. Commerce Hub will not have access to transaction completion, therefore refunds will need to be submitted as an open refund. For more information, please contact your account representative.

<!-- theme: warning -->
> Merchant must pass origin for CP/CNP Auth and Open refund transactions.
Origin supported  - MOTO, ECOM, POS

---

## Request Variables

<!--theme:info-->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service, `paymentTokens` will be returned in the response. To override this behavior, `createToken`: *false* is required in `transactionDetails`. Contact your account representative for more information about enabling tokenization.

<!--
type: tab
titles: Conditional Fields
-->

The below table identifies conditional feilds that can be passed for CNP request.

| Fields |
| -------- |
| `Customer.firstName`|
| `Customer.lastName` |
| `address.street` |
| `address.houseNumberOrName` |
| `address.city` |
| `address.stateOrProvince` |
| `address.postalCode` |
| `merchantOrderId` |
| `paymentReceipt.processorResponseDetails.approvalCode` |

---

The below table identifies conditional feilds that can be passed for CNP response.

| Fields |
| -------- |
| `Customer.firstName`|
| `Customer.lastName` |
| `merchantDetails.Promotional_Code` |
| `BankAssociationDetails.financetype` |

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a charge payload request using a ChargeAfter CNP

```json
{
  "amount": {
    "total": 1,
    "currency": "USD"
  },
  "customer": {
    "merchantCustomerId": "272",
    "firstName": "THDApp",
    "lastName": "Testing Two"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "7776768052115754",
      "expirationMonth": "11",
      "expirationYear": "2025",
      "securityCode": "170"
    }
  },
  "billingAddress": {
    "firstName": "Jane",
    "lastName": "Smith",
    "address": {
      "street": "5 CONCOURSE PARKWAY STE 300",
      "city": "ATLANTA",
      "houseNumberOrName": "",
      "stateOrProvince": "GA",
      "postalCode": "30328",
      "country": "USA"
    }
  },
  "transactionDetails": {
    "captureFlag": false,
    "merchantOrderId": "5698874392878089",
    "merchantTransactionId": "JHARBTUTO0SN"
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "posEntryMode": "MANUAL",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM",
    "terminalTimestamp": "2024-03-26T03:41:58Z",
    "additionalPosInformation": {
      "dataEntrySource": "MOBILE_TERMINAL",
      "posFeatures": {
        "pinAuthenticationCapability": "UNSPECIFIED",
        "terminalEntryCapability": "UNSPECIFIED"
      }
    }
  },
  "merchantDetails": {
    "merchantId": "100012000102008",
    "terminalId": "10000001"
  },
  "additionalDataCommon": {
    "privateLabel": {
      "minimumSpendExemptIndicator": "EXEMPT",
      "creditPlan": "00100"
    },
    "customFields": [
      {
        "key": " Request_Date_Time_GMT",
        "value": "2024-01-16T05:32:54Z"
      },
      {
        "key": " Request_Date_Time_Local",
        "value": "2024-01-16T05:32:54Z"
      },
      {
        "key": "Requestor_Channel_Code",
        "value": "STORE"
      },
      {
        "key": " Requestor_Organization_Code",
        "value": "HOME DEPOT"
      },
      {
        "key": "Retailer_Channel",
        "value": "E-commerce"
      },
      {
        "key": "Consumer_Decision",
        "value": "ACCEPT"
      },
      {
        "key": " Terms_Verified",
        "value": "Y"
      },
      {
        "key": "Lookup_Strategy",
        "value": "DETERMINISTIC"
      }
    ],
    "directedRouting": {
      "processors": [
        {
          "processorName": "CHARGE_AFTER",
          "processingPlatform": "PRIVATE_LABEL",
          "priority": "PRIMARY"
        }
      ]
    }
  }
}
```

<!--
type: tab
-->

Example of a charge (201: Created) response

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "res": {
    "transactionDetails": {
      "captureFlag": false,
      "transactionCaptureType": "terminal_direct",
      "merchantTransactionId": "JHARBTUTO0SN",
      "merchantOrderId": "5698874392878089",
      "partialApproval": true,
      "retrievalReferenceNumber": "5a92365bb7bb"
    },
    "gatewayResponse": {
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails": {
        "orderId": "CHG0142e7d21b1c3286d3bd1aa77da0c63f15",
        "clientRequestId": "7201470",
        "transactionTimestamp": "2024-03-26T19:42:01.305523898Z",
        "transactionId": "d8961fd9362649019d8b5a92365bb7bb",
        "apiTraceId": "d8961fd9362649019d8b5a92365bb7bb"
      }
    },
    "additionalDataCommon": {
      "privateLabel": {
        "minimumSpendExemptIndicator": "EXEMPT",
        "creditPlan": "00100"
      },
      "customFields": [
        {
          "value": "2024-01-16T05:32:54Z",
          "key": "Request_Date_Time_GMT"
        },
        {
          "value": "2024-01-16T05:32:54Z",
          "key": "Request_Date_Time_Local"
        },
        {
          "value": "STORE",
          "key": "Requestor_Channel_Code"
        },
        {
          "value": "HOME DEPOT",
          "key": "Requestor_Organization_Code"
        },
        {
          "value": "E-commerce",
          "key": "Retailer_Channel"
        },
        {
          "value": "ACCEPT",
          "key": "Consumer_Decision"
        },
        {
          "value": "Y",
          "key": "Terms_Verified"
        },
        {
          "value": "DETERMINISTIC",
          "key": "Lookup_Strategy"
        },
        {
          "value": "HOME DEPOT",
          "key": "Requestor_Organization_Code"
        },
        {
          "value": "Y",
          "key": "Terms_Verified"
        },
        {
          "value": "12443-605",
          "key": "Sales_Doc_ID"
        },
        {
          "value": "NCLCP",
          "key": "Requestor_User_ID"
        },
        {
          "value": "2024-03-26T03:41:58Z",
          "key": "Request_Date_Time_GMT"
        },
        {
          "value": "02_00_00",
          "key": "Service_Version_ID"
        },
        {
          "value": "2024-03-26T03:41:58Z",
          "key": "Request_Date_Time_Local"
        },
        {
          "value": "Sale",
          "key": "Requestor_POS_Event_Code"
        },
        {
          "value": "PRE_AUTH",
          "key": "Transaction_Request_Type"
        }
      ]
    },
    "paymentTokens": [
      {
        "tokenData": "1100000000040685",
        "tokenSource": "CHARGE AFTER"
      },
      {
        "tokenResponseCode": "000",
        "tokenResponseDescription": "SUCCESS",
        "tokenData": "7308434633815754",
        "tokenSource": "TRANSARMOR"
      }
    ],
    "paymentReceipt": {
      "processorResponseDetails": {
        "approvalStatus": "APPROVED",
        "approvalCode": "376909",
        "hostResponseMessage": "Charge Approved",
        "bankAssociationDetails": {
          "bankId": "73"
        },
        "host": "PRIVATE_LABEL",
        "localTimestamp": "2024-03-26T19:42:06.0769637Z",
        "responseMessage": "Approved",
        "processor": "CHARGE_AFTER",
        "responseCode": "000"
      },
      "approvedAmount": {
        "total": 1,
        "currency": "USD"
      }
    },
    "billingAddress": {
      "firstName": "Jane",
      "lastName": "Smith",
      "address": {
        "country": "USA",
        "stateOrProvince": "GA",
        "city": "ATLANTA",
        "street": "5 CONCOURSE PARKWAY STE 300",
        "houseNumberOrName": "",
        "postalCode": "30328"
      }
    },
    "source": {
      "sourceType": "PaymentCard",
      "card": {
        "expirationYear": "2025",
        "last4": "5754",
        "scheme": "THD",
        "bin": "777676",
        "expirationMonth": "11"
      }
    },
    "merchantDetails": {
      "merchantId": "100012000102008",
      "promotionCode": "7900",
      "terminalId": "10000001"
    },
    "transactionInteraction": {
      "terminalTimestamp": "2024-03-26T03:41:58Z",
      "origin": "ECOM",
      "additionalPosInformation": {
        "posFeatures": {
          "terminalEntryCapability": "UNSPECIFIED",
          "pinAuthenticationCapability": "UNSPECIFIED"
        },
        "dataEntrySource": "MOBILE_TERMINAL"
      },
      "posConditionCode": "CARD_NOT_PRESENT_ECOM",
      "posEntryMode": "MANUAL",
      "eciIndicator": "CHANNEL_ENCRYPTED"
    },
    "customer": {
      "firstName": "THDApp",
      "lastName": "Testing Two"
    }
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Order Data](?path=docs/Resources/Master-Data/Order-Data.md)

---
