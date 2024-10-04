---
tags: [API Reference, Risk Assessment, Fraud Mitigation, Fraud Scoring] 
---
 
# Initiate Fraud Scoring with the Risk Assessment API

Commerce Hub offers a standalone Fraud Scoring service through our Risk Assessment API. This service helps merchants assess the fraud risk associated with each transaction by providing a fraud score. With this information, merchants can make informed decisions on whether to proceed with the payment. The API is a crucial tool for enhancing security and reducing fraudulent activities in online transactions.

**Key features:**

- **Customized models:** Machine Learning models are tailored to your business, accurately detecting core fraud and reducing declines and fraud.
- **Customer-centric:** Approach: We use extensive data elements to score fraud on consumers and their transactions.
- **Link analysis:** Our proprietary link analysis maps connections between customers precisely and instantaneously.

---

## Submit a Fraud Scoring Request

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful Fraud Scoring request using the [Risk Assessment API](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md). The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments-vas/v1/risk-assessment).

<!-- theme: success -->
> **POST** `/payments-vas/v1/risk-assessment`

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
  "merchantDetails": {
    "merchantId": "900322000000064",
    "terminalId": "10000001"
  },
  "transactionDetails": {
    "merchantInvoiceNumber": "HRJHTQ6ZJ6URR2MMOO8M36R4ENN1GJF3NIU5FKS8OSRX5C060JQNGAXN3P9B6LIIOVJVXM8ROH8OP68CFN239VTOK11G0MYL0EMNF7WEHJA04JIZA4PKWY03GTS77JKL",
    "operationType": "PRE_EVALUATE",
    "deviceFingerprint": [
      {
        "provider": "RAVELIN",
        "dataCapture": {
          "dataEventId": "2866ac81864d7c9d1ff8b5aa6e98db"
        },
        "dataStatic": {
          "javaScriptEnabled": true,
          "javaEnabled": true,
          "accepts": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "locale": "en-US",
          "colorDepth": 32,
          "screenHeight": 1024,
          "screenWidth": 789,
          "timezoneOffset": -60,
          "userAgent": "Mozilla/5.0"
        },
        "dataDynamic": {
          "ipAddress": "172.27.37.221"
        }
      }
    ]
  },
  "dynamicDescriptors": {
    "mcc": "5542"
  },
  "transactionInteraction": {
    "origin": "ECOM"
  },
  "billingAddress": {
    "firstName": "John",
    "lastName": "Smith",
    "address": {
      "street": "Universal City Plaza",
      "houseNumberOrName": "100",
      "city": "Hollywood",
      "stateOrProvince": "CA",
      "postalCode": "20220",
      "country": "US"
    }
  },
  "customer": {
    "merchantCustomerId": "acmeSockCustomer",
    "firstName": "John",
    "lastName": "Doe",
    "email": "test@qa-force-allow.com",
    "phone": [
      {
        "countryCode": "1",
        "phoneNumber": "678-770-4567",
        "type": "MOBILE"
      }
    ]
  },
  "shippingAddress": {
    "firstName": "John",
    "lastName": "Smith",
    "address": {
      "street": "100 Universal City Plaza",
      "city": "Hollywood",
      "stateOrProvince": "CA",
      "postalCode": "20220",
      "country": "US"
    }
  },
  "orderData": {
    "itemCount": 1,
    "serviceType": "FULL_SERVE",
    "reOrder": true,
    "preOrder": true,
    "preOrderDate": "2024-09-24T18:13:26.911069823",
    "giftCardCount": "1",
    "goodsSoldCode": "2",
    "netLineItemTotal": 10,
    "netUnitPrice": 5,
    "giftCardAmount": {
      "total": 80,
      "currency": "USD"
    },
    "itemDetails": [
      {
        "itemType": "PRODUCT",
        "itemSubType": "OTHER",
        "paymentSystemProductCode": "001",
        "itemDescription": "UNLEADED",
        "quantity": 2,
        "unitOfMeasurement": "OTHER",
        "productSKU": "COO",
        "unitPrice": 100
      }
    ]
  },
  "additionalDataCommon": {
    "riskAssessmentEventType": "AUTHORIZATION",
    "customFields": [
      {
        "key": "FIRST_NAME",
        "value": "JOHN"
      },
      {
        "key": "LAST_NAME",
        "value": "LEE"
      }
    ]
  }
}
```

<!--
type: tab
-->

Example of a Fraud scoring Risk Assessment API *(200: Success)* response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "ASSESSMENT",
    "transactionState": "ASSESSED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2024-10-03T16:22:48.491485435Z",
      "apiTraceId": "086af8dece1945238e0568c3c5f37bb5",
      "clientRequestId": "1504218",
      "transactionId": "086af8dece1945238e0568c3c5f37bb5",
      "apiKey": "g6YnWN3VTbf1XTEikeGQ1fq2tW71poUevprw1I8XAyWI98y6"
    }
  },
  "processorResponseDetails": {
    "processor": "FISERV",
    "host": "FRAUD_MITIGATION",
    "localTimestamp": "2024-10-03T16:22:49.348650788Z"
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
  "riskAssessmentResult": {
    "approvalStatus": "APPROVED",
    "ruleDescription": "Accept External Decision",
    "assessmentDetails": [
      {
        "provider": "FISERV",
        "approvalStatus": "APPROVED",
        "score": 30
      },
      {
        "provider": "KOUNT",
        "approvalStatus": "APPROVED",
        "score": 30
      }
    ]
  }
}
```

<!-- type: tab-end -->

---

## Parameters

### Request variables

The following variables are required when submitting a Fraud Standalone Scoring request.

<!--
type: tab
titles: transactionDetails, merchantDetails --> Object Names
-->

The below table identifies the conditional parameters in the `transactionDetails` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
|`captureFlag` | *string* | 5 | Designates if the transaction should be [captured](?path=docs/Resources/API-Documents/Payments/Capture.md), *true* for Sale and *false* for Pre-Authorization |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
|`merchantId` | *string* | 40 | A unique ID used to identify the merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
|`terminalId` | *string* | N/A | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |

<!-- type: tab-end -->

---

### Optional request variables

The following data elements can be included with a fraud scoring request to enhance the accuracy of the risk assessment results.

- [Customer details](?path=docs/Resources/Master-Data/Customer-Details.md)
- [Device fingerprint](?path=docs/Resources/Master-Data/Device-Fingerprint.md)
- [Billing address](?path=docs/Resources/Master-Data/Address.md#billing-address)
- [Shipping address](?path=docs/Resources/Master-Data/Address.md#shipping-address)
- [Order data](?path=docs/Resources/Master-Data/Order-Data.md)

---

### Response variables

The following response variables are relevant to a Fraud Standalone Scoring request.

<!--
type: tab
titles: xyz
-->

The below table identifies the response parameters in the `xyz` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
|`merchantId` | *string* | 40 | A unique ID used to identify the merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
|`terminalId` | *string* | N/A | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/risk-assessment)
- [Fraud Mitigation](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Source Types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

<!--
- [Chargeback Guarantee](?path=)
- [Account Takeover *(ATO)*](?path=)
-->

---
