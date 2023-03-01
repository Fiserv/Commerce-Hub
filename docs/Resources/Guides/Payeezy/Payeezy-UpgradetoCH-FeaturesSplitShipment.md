---

tags: [carat, commerce-hub, enterprise, card-not-present, payeezy, split-shipment]

---

# Split Shipment

<!-- theme: danger -->
>  The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

<br>

A split shipment is the ability to capture an authorization for the full order amount by performing a capture for each item shipped. Additional information on Commerce Hub split shipment functionality can be found [here](?path=docs/Resources/Guides/Split-Shipment.md).

<br>

> :memo: **Note:** It is important to know the platform you are transacting on in order to review the most pertinent information for your migration to Commerce Hub. <br> <br> If you are using the **/api.globalgatewaye4.firstdata.com** URL, then you are transacting through the **Payeezy Gateway Direct (PGW)** platform. <br> <br> If you are using the **/api.payeezy.com** URL, then you are transacting through the **Developer API** platform.

---

### Platform Comparison for Split Shipment Transactions

| Transacting Platform | Endpoint | Required Elements | Notes|
| -------- | ------------- | :--------------: |----------|
|**Payeezy Gateway Direct** | `transaction_type` = <br> 01 = Pre-Authorization <br> 32 = Tagged Pre-Authorization Completion  | XML: `SplitShipmentNumber` OR <br> JSON: `Split_Shipment` = xx/yy <br> where: xx = number of the shipment <br> and yy = total shipments| If yy is not known, then yy = total number of items in order. <br>  <br> If 01/01 value sent, Compass would reject the transaction. |
|**Developer API** | `transaction_type` = <br> Authorize <br> Split | `Split_Shipment` = xx/yy <br> where: xx = number of the shipment <br> and yy = total shipments| If yy is not known, then yy = 99.<br>  <br> If 01/01 value sent, Compass would reject the transaction. 
|**Commerce Hub** | Authorize:[/payments/v1/charges with captureFlag = "false” ](?path=docs/Resources/API-Documents/Payments/Charges.md) <br> Partial Capture: [/payments/v1/charges/{transactionId}/capture](?path=docs/Resources/API-Documents/Payments/Capture.md)   |   splitShipment { `totalCount`:5, `finalShipment`:true} within 'transactionDetails' object| `totalCount` can be set in pre-authorization transaction or first capture. <br> <br>    `totalCount` valid values are '02-99'. <br><br>  `totalCount` can be updated in subsequent captures, but count must include all captures sent in the series, regardless of voids or refunds of captures.  This means that the count cannot reduce below the number of transactions that have already been completed.|

---

### Re-Authorization Handling

In Payeezy Gateway, re-authorizations for an expired initial authorization on a split shipment transaction is automatically processed for the merchant at time of settlement.  This functionality is available in Commerce Hub, but must be enabled in the merchant configuration in Client Line Enterprise (CLX).    

## See Also

- [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)

---
