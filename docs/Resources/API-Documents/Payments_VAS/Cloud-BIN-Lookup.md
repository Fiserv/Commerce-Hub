---
tags: [Account Information, Card Details, Card Metadata, BIN]
---

# Perform an Cloud BIN Information Lookup

Commerce Hub's [Cloud BIN Service](?path=docs/Resources/API-Documents/Device-Management/DT-Cloud-BIN-Guide.md) performs a lookup against the [Global BIN](?path=docs/Resources/API-Documents/Payments_VAS/Global-BIN-Lookup.md) and Cloud BIN files, and provides a response including the `cardDetails` *(also known as [card metadata](?path=docs/Resources/Master-Data/Card-Details.md))*. The Cloud BIN data is returned as `primaryCardData` and may also include `additionalCardData` in the clear *(unencrypted)* based on the merchant configuration.

<!-- theme: info-->
> The Cloud BIN Service needs to be configured in Merchant Configuration and Boarding. Please contact your account representative for more information.

---

## Account found in the Cloud BIN only

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum parameters for a Cloud BIN Information Lookup API request using a *PaymentEMV* [gift card](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md) not in the Global BIN file and setup for Cloud BIN Service. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/information-lookup).

<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/information-lookup`

```json

{
  "source": {
    "sourceType": "PaymentEMV",
    "emvData": "0249F3704833A12329F1002AB34",
    "encryptionData": {
      "encryptionType": "VERIFONE",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=tb5miL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS....",
      "deviceType": "VERIFONE",
      "keyId": "88000000022"
    },
    "card": {
      "category": "GIFT"
    }
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}

```

<!--
type: tab
-->

Example of a Information Lookup API *(201: Created)* response for an account found in the Cloud BIN only.

Account information lookup response for a card not in the Global BIN file .

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "INFORMATION",
    "transactionState": "SUCCESS",
    "transactionProcessingDetails": {
      "orderId": "CHG3b83fca82f9c436486ae12c91f1fcf16",
      "transactionTimestamp": "2016-04-16T16:06:05Z",
      "apiTraceId": "1234567a1234567b1234567c1234567d",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "1234567a1234567b1234567c1234567d"
    }
  },
  "cardDetails": [
    {
      "primaryCardData": "6543210098765432",
      "additionalCardData": "7"
    }
  ]
}
```

<!-- type: tab-end -->

---

## Account found in the Cloud BIN and Global BIN

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum parameters for a Cloud BIN Information Lookup request using a *PaymentEMV* card in the Global BIN file and setup for Cloud BIN Service. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/information-lookup).

<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/information-lookup`

```json

{
  "source": {
    "sourceType": "PaymentEMV",
    "emvData": "0249F3704833A12329F1002AB34",
    "encryptionData": {
      "encryptionType": "VERIFONE",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS....",
      "deviceType": "VERIFONE",
      "keyId": "88000000022"
    },
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}

```

<!--
type: tab
-->

Example of a Information Lookup API *(201: Created)* response for an account found in the Cloud BIN and Global BIN.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.


```json
{
  "gatewayResponse": {
    "transactionType": "INFORMATION",
    "transactionState": "SUCCESS",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "cardDetails": [
    {
      "detailedCardProduct": "VISA",
      "productId": "N1",
      "visaProductSubType": "HC",
      "detailedCardIndicator": "DEBIT",
      "pinSignatureCapability": "PIN_OR_SIGNATURE",
      "cardClass": "CORPORATE",
      "countryCode": "USA",
      "issuerBankName": "Example Bank",
      "recordType": "DETAIL",
      "lowBin": "400337",
      "highBin": "400338",
      "binLength": "6",
      "binDetailPan": "16",
      "issuerUpdateYear": "20",
      "issuerUpdateMonth": "09",
      "issuerUpdateDay": "22",
      "regulatorIndicator": "NON_REGULATED",
      "fsaIndicator": "SUPPORTED",
      "nonMoneyTransferOCTsDomestic": "SUPPORTED",
      "nonMoneyTransferOCTsCrossBorder": "SUPPORTED",
      "onlineGamblingOCTsDomestic": "SUPPORTED",
      "onlineGamblingOCTsCrossBorder": "SUPPORTED",
      "moneyTransferOCTsDomestic": "SUPPORTED",
      "moneyTransferOCTsCrossBorder": "SUPPORTED",
      "fastFundsDomesticMoneyTransfer": "SUPPORTED",
      "fastFundsCrossBorderMoneyTransfer": "SUPPORTED",
      "fastFundsDomesticNonMoneyTransfer": "SUPPORTED",
      "fastFundsCrossBorderNonMoneyTransfer": "SUPPORTED",
      "fastFundsDomesticGambling": "SUPPORTED",
      "fastFundsCrossBorderGambling": "SUPPORTED",
      "prepaidIndicator": "PREPAID",
      "visaLargeTicketIndicator": "SUPPORTED",
      "accountFundSource": "DEBIT",
      "panLengthMin": "16",
      "panLengthMax": "16",
      "tokenIndicator": "SUPPORTED",
      "cardholderBillingCurrency": "USD",
      "b2bProgramId": "B2B_PROGRAM_1",
      "primaryCardData": "400055",
      "additionalCardData": "7"
    }
  ]
}
```

<!-- type: tab-end -->

---

## Primary and additional card response data

Based on the set up in Merchant Configuration and Boarding the `cardDetails` may include the `primaryCardData` and `additionalCardData`. This data may include the decrypted PAN, leading digits, and/or required positions returned in clear based on the business requirements.

<!-- theme: info -->
> When configured for Cloud Bin Service, if the customer's card is not found in the Global BIN or Cloud BIN files, the card data will be returned based on *Return Complete Card Data* being enabled; otherwise, the gateway error code 104 *Unable to assign card to brand: Invalid* will be returned.

<!--
type: tab
titles: Decrypted PAN, Leading digits, Positions
-->

The below snippet shows the response elements expected for non-PCI data when configured to receive the decrypted `cardData` or `trackData`.

```json
{
  "primaryCardData": "8543299999995432=9876510098765432",
}
```

<!--
type: tab
-->

The below snippet shows the response elements expected for non-PCI data when configured to return first 8-digits of the PAN and the required positions 30-31.

```json
{
  "primaryCardData": "765432123",
  "additionalCardData": "12"
}
```

<!--
type: tab
-->

The below snippet shows the response elements expected for PCI data when configured to return first 8-digits of the PAN.

```json
{
  "primaryCardData": "40055500",
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/information-lookup)
- [Card Metadata *(Card Details)*](?path=docs/Resources/Master-Data/Card-Details.md)
- [POS Decision Tables](?path=docs/Resources/API-Documents/Device-Management/Decision-Table.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
