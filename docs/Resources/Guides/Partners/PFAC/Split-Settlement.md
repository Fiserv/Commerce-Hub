---
tags: [Payment Facilitator, Settlement]
---

# Payment Facilitator Split Settlement

Split settlement allows a payment facilitator *(PayFac)* to define how a transaction should be distributed between processing and non-processing MIDs to deposit revenue, fees, reserves, and hold amounts. The PayFac can send the instructions to processing and non-processing merchant MIDs or a processing PayFac MID to split [authorization or sale](?path=docs/Resources/API-Documents/Payments/Charges.md), [capture](?path=docs/Resources/API-Documents/Payments/Capture.md), and [refund](?path=docs/Resources/API-Documents/Payments/Refund.md) transactions.

<!-- theme: info -->
> Chargebacks will not be allowed to recoup through this method.

---

## Request Variables

The following variables are also required when submitting a capture request.

<!--
type: tab
titles: amount, splitSettlement
-->

The below table identifies the required parameters in the `amount` object.

| Variable | Type | Max Length | Description |
| -------- | -- | ------------ |-------------- |
| `total` | *number* | 18,3  | Amount of the transaction. The `splitSettlement` values must add up to total amount |
| `currency` | *string* | 3 | ISO 3 digit [Currency code](?path=docs/Resources/Master-Data/Currency-Code.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `splitSettlement` object.

| Variable | Data Type| Max Length | Description |
| -------- | -- | ------------ |-------------- |
| `merchantID` | *string* | 1024 | The merchant ID for each merchant account involved in split settlement |
| `subTotal` | *number* | 16,3 | The subtotal for each merchant account involved in split settlement |
| `accountDetails` | *array* | N/A | Important details of an account in split settlement |

The below table identifies the required parameters in the `accountDetails` object.

| Variable | Data Type| Max Length | Description |
| -------- | -- | ------------ |-------------- |
| `name` | *string* | 1024 | An account name for split settlement |
| `type` | *string* | 1024 | Split settlement [account type](#account-type). |
| `amount` | *object* | N/A | Total amount to be distributed to the specific account |

---

#### Account Type

The PayFac will define the destination of each split amount based on the virtual accounts listed below:

| Value | Description |
| ----- | ----- |
| *REVENUE_ACCOUNT* | The funds will send to the revenue account to fund out to processing and non-processing merchants as their revenue. This account can process both credits *(add funds)* and debits *(remove funds)*. |
| *FEE_ACCOUNT* | The fee account funds will roll up to the PayFac level and can be a PayFac of processing or non-processing merchants. It will fund to the PayFac as their revenue. This account can process both credits and debits. |
| *RESERVE_ACCOUNT* | The funds will send to the reserve account and a collateral account to collect deposits from the merchant. This account works with a processing or non-processing merchant MID. This account can process credit only. Negative amounts are not processed by Commerce Hub. |
| *SERVICE_FEE_ACCOUNT* | The funds for the service fee account are from processing or non-processing merchants and funded to the processing or non-processing PayFac account. The amount defined in this account will not count the `total` or `subTotal` in the authorization payload. |
| *GROSS_FEE_ACCOUNT* | The funds for the gross fee account are from processing or non-processing merchants and funded to the processing or non-processing PayFac account. The amount defined in this account will not count the `total` or `subTotal` in the authorization payload. |
| *HOLD_ACCOUNT* | The funds in the hold account are held within the [FBO *(For Benefit Of)* account](?path=docs/Resources/FAQs-Glossary/Glossary.md#fbo-account), under the specified processing or non-processing merchant. This account can process credits only. |

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a split settlement charges payload request.

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
    "captureFlag": true
  },
  "merchantDetails": {
    "merchantId": "100004000PFACS1",
    "terminalId": "10000001"
  },
  "dynamicDescriptors": {
    "mcc": "5204",
    "merchantName": "Mywebsite.com",
    "customerServiceNumber": "4448889999",
    "serviceEntitlement": "4040404040",
    "customerServiceEmail": "contact@mywebsite.com",
    "subMerchantId": "PFACMID3",
    "address": {
      "houseNumberOrName": "123",
      "street": "Main Street",
      "city": "Atlanta",
      "stateOrProvince": "GA",
      "postalCode": "30303",
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
            "total": 30,
            "currency": "USD"
          }
        }
      ]
    }
  ]
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/accounts/gift-cards)

<!--
type: tab
-->
Example of a split settlement charges (201: Created) response.

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
      "hostResponseMessage": "APPROVAL"
    },
    "transactionDetails": {
      "captureFlag": true,
      "transactionCaptureType": "host",
      "processingCode": "000000",
      "transactionCutTimeStamp": "2023-10-27T12:00:00Z",
      "retrievalReferenceNumber": "ba3baa55da67"
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
              "total": 30,
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
    }
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Facilitator](?path=docs/Resources/Guides/Partners/PFAC/Payment-Faciliator.md)

---
