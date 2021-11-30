---
tags: [carat, commerce-hub, enterprise, directed-routing, network, processor]
---

# Directed Routing

Directed Routing allows merchants to send transactions to a specific processor or network based on cost, approval rates, liability shift and ticket size.


## Request Variables

The `directedRouting` is part of the `additionalDataCommon` object.

<!--
type: tab
title: directedRouting
-->

The below table identifies the required parameters in the `directedRouting` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `network` | *string* | 16 | Identifies the debit card processing network. **Valid Values:** NYCE, PULSE, VISA |
| `cardFunction` | *string* | 6 | Identifies if the processing method is CREDIT or DEBIT |
| `processors` | *array* | N/A  | Identifies the processor or processors for Directed Routing. |

<!--
type: tab
title: processors
-->

The below table identifies the required parameters in the `processors` array.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `code` | *string* | 256 | Identifies the payment processor. **Valid Values:** FISERV, CHASE |
| `platform` | *string* | 256 | Identifies the payment platform of the processor. **Valid Values:** NORTH, TAMPA |
| `priority` | *string* | 256 | Identifies the priority to use each processor. **Valid Values:** PRIMARY, SECONDARY |

<!--
type: tab
title: JSON Example
-->

```json

{
"additionalDataCommon": {
	"directedRouting": {
		"network": "VISA",
		"cardFunction": "CREDIT",
		"processors": [{
				"code": "FISERV",
				"platform": "NORTH",
				"priority": "PRIMARY"
			},
			{
				"code": "CHASE",
				"platform": "TAMPA",
				"priority": "SECONDARY"
			}
		]
	}
}
}

```

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request using `directedRouting`.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "nameOnCard": "Jane Smith",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123",
      "securityCodeIndicator": "PROVIDED"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "additionalDataCommon": {
    "directedRouting": {
      "network": "VISA",
      "cardFunction": "CREDIT",
      "processors": [
        {
          "code": "FISERV",
          "platform": "NORTH",
          "priority": "PRIMARY"
        },
        {
          "code": "CHASE",
          "platform": "TAMPA",
          "priority": "SECONDARY"
        }
      ]
    }
  },
  "merchantDetails": {
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}
```
<!--
type: tab
title: Response
-->

##### Example of a charge (201: Created) response.

```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "CHARGES",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionDate": "2016-04-16",
      "transactionTime": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "nameOnCard": "Jane Smith",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "bin": "400555",
      "last4": "0019",
      "scheme": "VISA"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": "12.04",
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK3483",
      "authenticationResponseCode": "string",
      "referenceNumber": "845366457890-TODO",
      "schemeTransactionId": "019078743804756",
      "feeProgramIndicator": "123",
      "processor": "FISERV",
      "responseCode": "00000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2016-04-16T16:06:05Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2016-04-16T16:06:05Z"
      }
    }
  },
  "additionalDataCommon": {
    "directedRouting": {
      "network": "VISA",
      "cardFunction": "CREDIT",
      "processors": [
        {
          "code": "FISERV",
          "platform": "NORTH",
          "priority": "PRIMARY"
        },
        {
          "code": "CHASE",
          "platform": "TAMPA",
          "priority": "SECONDARY"
        }
      ]
    }
  }
}
```

<!-- type: tab-end -->

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Additional Data](?path=docs/Resources/Master-Data/Additional-Data.md)

---