---
tags: [Gift Card, Payment Card, Payment Source, Loyalty, Activation]
---

# Gift Card Activation

An Activation transaction allows a merchant to create and activate a new gift card and sends the necessary information to the account in Commerce Hub. The Card needs to be Activated first to perform other Gift related transactions.

## Request Variables

Description 

<!--
type: tab
titles: amount, transactionDetails, transactionInteraction, merchantDetails, additionalDataCommon 
-->

The below table identifies the required parameters in the `amount` object.

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `merchantTransactionID` | *string* | 5 | Designates if the transaction should be captured (*true* for Sale and *false* for Pre-Auth)|
| `merchantOrderID`| *string* | 128 | Merchant order ID (aka customer reference number or purchase order (PO) number).
| `operationType` | *string* | 50 | Add descriptionXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionInteraction` object.

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `terminalTimestamp` | *string* | N/A | Terminal timestamp in ISO 8601 format YYYY-MM-DDThh:mm:ssZ'

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
|`merchantId` | *string* | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | N/A |Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!--
type: tab
-->

The below table identifies the required parameters in the `additionalDataCommon` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `securityCodeType` | *string* | 32 |  Type of security code requested when activating a card (e.g. Digital Gift card).
| `fundingProvider` | *string* | 32 |  Identifies who provided the funds.|
| `transactionPosDate` | *string* | 16 | 'Used to override a transaction post date in reporting.

<!-- type: tab-end -->

---

## Endpoint 

<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/gift-cards`

---

## Digital Gift Card 

Description 

### Payload Example

<!--
type: tab
titles: Request, Response
-->

#### Example of payload request 

```json
{
  "amount": {
    "total": 13.05,
    "currency": "USD"
  },
  "transactionDetails": {
    "merchantTransactionId": "1343678765",
    "merchantOrderId": "845366457890",
    "operationType": "ACTIVATION"
  },
  "transactionInteraction": {
    "terminalTimestamp": "2016-04-16T16:06:05Z"
  },
  "merchantDetails": {
    "terminalId": "123567",
    "merchantId": "123456789012345",
    "promotionCode": "12A34B7"
  },
  "additionalDataCommon": {
    "additionalData": {
      "securityCodeType": "EAN",
      "fundingProvider": "CUSTOMER",
      "transactionPostDate": "2016-04-16"
    }
  }
}
```

#### Example of payload response 

```json


Description 

tab and json 

## Physical Gift Card 

Description 

Description 

### Payload Example

Description 

<!--
type: tab
titles: Request, Response
-->

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/refunds)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Gift Solution](?path=docs/Resources/Guides/Payment-Sources/Gift/Gift-Solutions.md)
