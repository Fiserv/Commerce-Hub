---
tags: [carat, commerce-hub, enterprise, integration-methods, restful-api, in-app, online, google-pay, wallet, mobile]
---

# Google Pay: In-App Integration

<!-- theme: danger -->
> We are enhancing Commerce Hub to Apple Pay in app integration. The documents related to the features will be released soon.

<!---
#### Google Pay on the App

## Step 1: Configure Google Pay in App

The merchant will need to be do the changes in their [App to integrate with Google Pay](https://developers.google.com/pay/api/web/guides/tutorial). This includes define Google Pay API Version, request a payment token, define payment card networks, describe allowed payment methods, create PaymentClientsInstance, determine readniness to pay, create PaymentDataRequest, register event handler etc.

---

## Step 2: Submit a Charge Request

- Option 1 - Encrypted Data (wallet encrypted data using apple encryption, commerce hub will decrypt)
- Option 2 - Decrypted Wallet (Merchant using their own certificate and they decrypt themselves and send us card data)

### Request Variables
--->
<!---
type: tab
title: source
--->
<!---
The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | &#10004; | Value *GooglePay* is used for Google Pay request. Refer Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details. |
| `data` | *string* | 4000 | &#10004; | Encrypted Data. Payment data dictionary, Base64 encoded as a string. |
| `signature` | *string* | 2000 | &#10004; | Verifies that the message came from Google, base64-encoded, and created with ECDSA by the intermediate signing key. |
| `version` | *string* | 32 | &#10004; | Specific Protocol version supported by Google. Identifies the encryption or signing scheme under which the message is created. It allows the protocol to evolve over time, if needed. |
| `merchantId` | *string* | 256 | &#10004; | Single Merchant Identifier common for all Google Pay merchants. |
| `keyInfo` | *array* | N/A | &#10004; | Key information |

--->

<!---
type: tab
title: keyInfo
--->
<!---
The below table identifies the required parameters in the `keyInfo` array.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `merchantPrivateKey` | *string* | 1024 | | Merchant private key - Hex encoded. |
| `signingVerificationKey` | *string* | 1024 | &#10004; | Signing verification key - Base64 encoded. |
--->
<!--- type: tab-end --->
<!---
### Payload Example
--->

<!---
type: tab
title: Request
--->
<!---
##### Example of a Charge Payload Request.
```json
{
   "amount":{
      "total":"12.04",
      "currency":"USD"
   },
   "source":{
      "sourceType":"GooglePay",

   }
}

```
--->
<!---
type: tab
title: Response
--->
<!---
##### Example of a Charge (201: Created) Response.--->

<!-- theme: info -->
<!--- > See [Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.--->
<!---
```json
{
   "gatewayResponse":{
      "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType":"charge",
      "transactionState":"authorized",
      "transactionOrigin":"ecom"
   },
   "transactionProcessingDetails":{
      "transactionDate":"2021-04-16",
      "transactionTime":"2021-04-16T16:06:05Z",
      "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId":"838916029301"
   },
   "source":"GooglePay",
   "paymentToken":{
      "tokenData":"1234123412340019",
      "PARId":"string",
      "declineDuplicates":false,
      "tokenSource":"RSA"
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total":"1.00",
         "currency":"USD"
      },
      "processorResponseDetails":null,
      "approvalStatus":"APPROVED",
      "approvalCode":"OK7118",
      "referenceNumber":"845366457890-TODO",
      "schemeTransactionID":"019078743804756",
      "processor":"fiserv",
      "responseCode":"00",
      "responseMessage":"APPROVAL",
      "hostResponseCode":"54022",
      "hostResponseMessage":"Approved",
      "localTimestamp":"2021-04-16T16:06:05Z",
      "bankAssociationDetails":{
         "associationResponseCode":"000",
         "transactionTimestamp":"2021-04-16T16:06:05Z",
         "transactionReferenceInformation":null
      }
   }
}
```
--->
<!--- type: tab-end --->

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charges](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)

<!---
- [Google Pay Web Integration - RESTful API](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-REST.md)
- [Google Pay Web Integration - Hosted Page](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-HPP.md)
--->
---
