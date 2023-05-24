---
tags: [Authorization, Approval Rate, Decline Rate]
---

# Authorization Optimization

Authorization Optimization from Commerce Hub helps businesses maximize their approval rates by preventing and recovering declines for E-commerce transactions. By combining adaptive rules based logic, using network account updater and leveraging partnerships with issuing banks ensuring higher approval rates. This is achieved by locating updated card numbers and/or expiration dates and retying the transaction with this new data.

<!-- theme: info -->
> Authorization Optimization needs to be configured in Merchant Configuration and Boarding. Auth Optimization can be configured to recieve updated card data and reason, or the reason only, please contact your account representative for more information.

### Supported Features

<!-- theme: info -->
> Authorization Optimization is valid for Visa and Mastercard card not present transactions.

- Real time card account updater 
- Dynamic retry
<!---
- Batch card account updater (Not in scope)
- Deferred retry (Not in scope)
- Enhanced data (Not in scope)
-->

<!-- theme: warning -->
> Card account updater and dynamic retry are not supported by all platforms and processors, please contact your account representative for more information.

### Supported Transaction Types

The following transactions may receive updated card details in the response; [Charges](?path=docs/Resources/API-Documents/Payments/Charges.md) *(pre-authorization and sale)* and online [Refunds](?path=docs/Resources/API-Documents/Payments/Refund.md). All secondary transactions including; [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md), offline Refund and [Cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md) *(voids)* requests may need to send updated card details in the subsequent requests.

---

### Auth Optimization Details

<!--
type: tab
titles: authOptimizationDetails, JSON Example
-->

The below table identifies the parameters in the `authOptimizationDetails` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `accountStatus` | *string* | N/A | Indicates the current status of the account. **Valid Values:** ACCOUNT_CHANGE, ACCOUNT_CLOSED, EXPIRATION_CHANGE, CONTACT_CARDHOLDER |
| `accountUpdaterErrorCode` | *string* | N/A | Error code provided the account updater system.|
| `originalResponseCode` | *string* | 27 | Original [Response Code](?path=docs/Resources/Guides/Response-Codes/Response-Code.md) for re-authorized (Optimized) transaction. |

<!--
type: tab
-->

JSON string format:

``` json
{
  "authOptimizationDetails": {
    "accountStatus": "ACCOUNT_CHANGE",
    "accountUpdaterErrorCode": "VAU001",
    "originalResponseCode": "006"
  }
}
```

<!-- type: tab-end -->

---

## Response Example

##### Example of an auth optimization (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG0198f37d492fff4680a1b442a364793854",
      "transactionTimestamp": "2022-09-29T22:17:12.23343Z",
      "apiTraceId": "c89af12ece4345b0a4c1de000efe2159",
      "clientRequestId": "4392850",
      "transactionId": "c89af12ece4345b0a4c1de000efe2159"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "11",
      "expirationYear": "2022",
      "bin": "411111",
      "last4": "1111",
      "scheme": "MASTERCARD"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 10.11,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "originalResponseCode": "DECLINED",
      "approvalStatus": "APPROVED",
      "approvalCode": "OK0321",
      "schemeTransactionId": "0122729757007",
      "processor": "FISERV",
      "responseCode": "000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2022-09-29T22:17:13Z"
    }
  },
  "transactionDetails": {
    "captureFlag": false,
    "merchantInvoiceNumber": "CHG0198f37d4"
  },
  "transactionInteraction": {
    "origin": "ECOM"
  },
  "AuthOptimizationDetail": {
    "accountStatus": "EXPIRATION_CHANGE",
    "originalResponseCode": "006"
  }
}
```

<!-- type: tab-end -->


---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)

---
