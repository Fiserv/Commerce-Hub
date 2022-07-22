---
tags: [Authorization, Approval Rate, Decline Rate]
---

# Authorization Optimization

<!-- theme: danger -->
> We are enhancing Commerce Hub to support auth optimization and the documents related to the feature will be released soon.

Authorization Optimization from Commerce Hub helps businesses maximize their approval rates by preventing and recovering declines for E-commerce transactions. By combining adaptive rules based logic, using network account updater and leveraging partnerships with issuing banks ensuring higher approval rates. Features include;

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

## Response Variables

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
}
  "authOptimizationDetails": {
    "accountStatus": "ACCOUNT_CHANGE",
    "accountUpdaterErrorCode": "VAU001",
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
