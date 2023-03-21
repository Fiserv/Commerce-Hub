---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, Secure Data Capture]
---

# 3-D Secure - Secure Data Capture Integration

Commerce Hub's Secure Data Capture is designed to work seemlessly with our 3-D Secure (3DS) authentication provider. This eliminates the need to manually integrate with the provider's API and increases PCI security. The [iFrame](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md) or [Javascript SDK](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md) handles the data collection and storage to send to the 3DS provider. 

#### Transaction Flow

1. The customer navigates to checkout page of the merchant's website.
2. The customer's browser loads the Commerce Hub iFrame or JS SDK.
3. The Commerce Hub builds and renders an a card form that allows the customer to initiate the payment session.
4. The customer's details are entered and stored against a sessionID within Commerce Hub on form submit.
5. Upon a successful card capture, Commerce Hub will initiate a device capture with the 3DS provider.
6. Upon a scuccesful device capture, the merchant's website will attempt an authentication call via the merchant's backend server.
7. Upon a successful autnetication, the merchant's website will attempt to process the charges/tokens transaction via the merchant's backend server.
8. Commerce Hub sends the transaction response to the merchant's website.

---

## Step 1: Acquire Credentials

A [credentials](?path=docs/Resources/API-Documents/Security/Credentials.md) request with `authentication3DS` *true* in the `transactionDetails` object is required to inform Commerce Hub the transaction will require 3DS authentication.

The credential request is also needed to obtain the client `symmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, and `publicKey`. These will be used to create the [`authorization`](?path=docs/Resources/API-Documents/Authentication-Header.md) constant required in the Secure Data Capture request and `sessionId` required in the subsequent request.


---

## Step 2: Configure iFrame or JS

Follow the confguration requirements depending on the Secure Data Capture integration type; [iFrame](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md#step-2-configuration) or [JavaScript](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/JS-Request.md#step-2-configuration).

The iFrame or JS form will capture the customer card and device information to be used in the 3DS authentication and used for the subsequent charges or tokenization transaction.

---

## Step 3: Submit Authentication Request

Submit a request after a successful response which identifies the card and device data was captured in Commerce Hub. The request will use the payment `sourceType` of `PaymentSession` and the `sessionId` from the [credentials](#step-1-acquire-credentials) request.

<!-- theme: info -->
> If a successful response is not received, best practice is to still submit the transaction. If an error occurs, the iFrame will need to be re-displayed so the customer can re-submit their payment information.

### Endpoint

<!-- theme: success -->
>**POST** `/3ds/v1/authentication`


### Payload Example

<!-- theme: info -->
> Additional fields can be submitted as part of the request call. Additional fields can be found in the [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Success Response, Challenge Response
-->

##### Example of an authentication payload request.

```json
{
    "amount": {
        "total": "12.04",
        "currency": "USD"
    },
    "source": {
        "sourceType": "PaymentSession",
        "sessionId": "df8c33d2-af27-4a3a-b7a0-61d4edf09cad"
    },
    "billingAddress": {
        "firstName": "Jane",
        "lastName": "Smith",
        "address": {
            "street": "Main Street",
            "houseNumberOrName": "123",
            "city": "Sandy Springs",
            "recipientNameOrAddress": "ATTN: Accounting Dept",
            "stateOrProvince": "GA",
            "postalCode": "30303",
            "country": "US"
        },
        "phone": {
            "countryCode": "1",
            "phoneNumber": "123-123-1234"
        }
    },
    "storedCredentials": {
        "initiator": "CARD_HOLDER",
        "sequence": "SUBSEQUENT"
    },
    "additionalData3DS": {
        "serviceProvider": "CARDINAL",
        "channel": "BROWSER"
    },
    "customer": {
        "email": "customer@somedomain.com",
        "phone": [
            {
                "countryCode": "1",
                "phoneNumber": "123-123-1234",
                "type": "MOBILE"
            },
            {
                "countryCode": "1",
                "phoneNumber": "498-123-1234",
                "type": "WORK"
            }
        ]
    },
    "transactionDetails": {
        "merchantInvoiceNumber": "123456789012",
        "merchantTransactionId": "65757575675765",
        "merchantOrderId": "9458498544433",
        "deviceFingerprint": [
            {
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
    "transactionInteraction": {
        "dataEntrySource": "BROWSER_PC"
    },
    "shippingAddress": {
        "shippingMethod": "SHIP_TO_CARDHOLDER",
        "shippingTimeframe": "SAME_DAY",
        "shipToEmail": "customer@domain.com",
        "address": {
            "street": "Main Street",
            "houseNumberOrName": "123",
            "city": "Sandy Springs",
            "recipientNameOrAddress": "ATTN: Accounting Dept",
            "stateOrProvince": "GA",
            "postalCode": "30303",
            "country": "US"
        }
    },
    "orderData": {
        "goodsSoldCode": "PHYSICAL_GOODS",
        "reOrder": false,
        "preOrder": true,
        "preOrderDate": "2020-11-20",
        "giftcardCount": 2,
        "giftCardAmount": {
            "total": 12.04,
            "currency": "USD"
        }
    }
}
```


<!--
type: tab
-->

##### Example of an authentication (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json

{
    "gatewayResponse": {
        "transactionType": "AUTHENTICATE",
        "transactionState": "AUTHENTICATED",
        "transactionProcessingDetails": {
            "transactionTimestamp": "2021-06-20T23:42:48Z",
            "orderId": "RKOrdID-525133851837",
            "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
            "clientRequestId": "4345791",
            "transactionId": "84356531338"
        }
    },
    "source": {
        "sourceType": "PaymentSession",
        "card": {
            "bin": "40055500",
            "last4": "0019",
            "scheme": "VISA",
            "expirationMonth": "10",
            "expirationYear": "2030"
        }
    },
    "processorResponseDetails": {
        "approvalStatus": "APPROVED",
        "approvalCode": "OK5882",
        "processor": "CARDINAL",
        "responseCode": "000000",
        "responseMessage": "APPROVAL",
        "hostResponseCode": "00",
        "hostResponseMessage": "APPROVAL",
        "localTimestamp": "2021-06-20T23:42:48Z"
    },
    "transactionDetails": {
        "merchantInvoiceNumber": "123456789012",
        "merchantTransactionId": "65757575675765",
        "merchantOrderId": "9458498544433"
    },
    "additionalData3DS": {
        "serviceProvider": "CARDINAL",
        "serviceProviderTransactionId": "764a086f-ad30-4313-b90d-d6dc1929c0d6",
        "acsTransactionId": "8561c0ef-931a-474f-bfee-55eb98a331b1",
        "dsTransactionId": "8561c0ef-931a-474f-bfee-55eb98a33132",
        "acsReferenceNumber": "8561c0ef-931a-474f-bfee-55eb98a3jds7",
        "authenticationStatus": "A",
        "statusReason": "Approved",
        "serverTransactionId": "8561c0ef-931a-474f-bfee-55ebds7s6s",
        "challengeIndicator": false,
        "mpiData": {
            "cavv": "AAABCZIhcQAAAABZlyFxAAAAAAA",
            "xid": "&x_MD5_Hash=abfaf1d1df004e3c27d5d2e05929b529&x_state=BC&x_reference_3=&x_auth_code=ET141870&x_fp_timestamp=1231877695",
            "eci": "05",
            "tavv": "AAABCZIhcQAAAABZlyFxAAAAAAA"
        },
        "versionData": {
            "recommendedVersion": "2.2.0"
        }
    }
}
```

<!--
type: tab
-->

##### Example of an authentication challenge (201: Created) response.

<!-- theme: warning -->
> When a challenge response is recieved, a [3DS verification request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Verification.md) is required before submitting a subsequent transaction.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
    "gatewayResponse": {
        "transactionType": "AUTHENTICATE",
        "transactionState": "WAITING",
        "transactionProcessingDetails": {
            "transactionTimestamp": "2021-06-20T23:42:48Z",
            "orderId": "RKOrdID-525133851837",
            "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
            "clientRequestId": "4345791",
            "transactionId": "84356531338"
        }
    },
    "source": {
        "sourceType": "PaymentCard",
        "card": {
            "bin": "40055500",
            "last4": "0019",
            "scheme": "VISA",
            "expirationMonth": "10",
            "expirationYear": "2030"
        }
    },
    "processorResponseDetails": {
        "approvalStatus": "WAITING",
        "approvalCode": "OK5882",
        "processor": "CARDINAL",
        "responseCode": "364",
        "responseMessage": "3-D Secure: Challenged",
        "hostResponseCode": "01",
        "hostResponseMessage": "Challenged",
        "localTimestamp": "2021-06-20T23:42:48Z"
    },
    "transactionDetails": {
        "merchantInvoiceNumber": "123456789012",
        "merchantTransactionId": "65757575675765",
        "merchantOrderId": "9458498544433"
    },
    "additionalData3DS": {
        "serviceProvider": "CARDINAL",
        "serviceProviderTransactionId": "764a086f-ad30-4313-b90d-d6dc1929c0d6",
        "acsTransactionId": "8561c0ef-931a-474f-bfee-55eb98a331b1",
        "dsTransactionId": "8561c0ef-931a-474f-bfee-55eb98a33132",
        "acsReferenceNumber": "8561c0ef-931a-474f-bfee-55eb98a3jds7",
        "authenticationStatus": "C",
        "statusReason": "Challenged",
        "serverTransactionId": "8561c0ef-931a-474f-bfee-55ebds7s6s",
        "challengeIndicator": true,
        "mpiData": {
            "xid": "&x_MD5_Hash=abfaf1d1df004e3c27d5d2e05929b529&x_state=BC&x_reference_3=&x_auth_code=ET141870&x_fp_timestamp=1231877695",
            "eci": "05"
        },
        "versionData": {
            "recommendedVersion": "2.2.0"
        }
    }
}
```

<!-- type: tab-end -->

---

## Step 4: Submit Transaction Request

After authentication has been completed with the 3DS provider, submit a charges, tokenization, or verification request using the same `sessionId` and the [3DS response data](?path=docs/Resources/Master-Data/Additional-Data-3DS.md).

### Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

<!-- theme: success -->
>**POST** `/payments-vas/v1/tokens`


### Payload Example

<!-- theme: info -->
> Additional fields can be submitted as part of the request call. Additional fields can be found in the [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Charges Response, Tokens Response
-->

##### Example of a charge payload request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentSession",
    "sessionId": "df8c33d2-af27-4a3a-b7a0-61d4edf09cad"
  },
  "transactionDetails": {
    "captureFlag": true,
    "accountVerification": false,
    "merchantTransactionId": "RKTransID-768086381518"
  },
  "merchantDetails": {
    "merchantId": "123456789012345",
    "terminalId": "123456"
  },
  "additionalData3DS": {
  
  }
}
```


<!--
type: tab
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json

{
   "gatewayResponse":{
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2021-06-20T23:42:48Z",
         "orderId": "RKOrdID-525133851837",
         "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
         "clientRequestId": "4345791",
         "transactionId": "84356531338"
      }
   }, 
   "source":{
      "sourceType": "PaymentSession",
      "card":{
         "bin": "40055500",
         "last4": "0019",
         "scheme": "VISA",
         "expirationMonth": "10",
         "expirationYear": "2030"
      }
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total": 12.04,
         "currency": "USD"
      },
      "merchantName": "Merchant Name",
      "merchantAddress": "123 Peach Ave",
      "merchantCity": "Atlanta",
      "merchantStateOrProvince": "GA",
      "merchantPostalCode": "12345",
      "merchantCountry": "US",
      "merchantURL": "https://www.somedomain.com",
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK5882",
         "schemeTransactionId": "0225MCC625628",
         "processor": "FISERV",
         "host": "NASHVILLE",
         "responseCode": "000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2021-06-20T23:42:48Z",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2021-06-20T23:42:48Z"
         }
      }
   },
   "transactionDetails":{
      "captureFlag": true,
      "merchantInvoiceNumber": "123456789012"
   },
  "additionalData3DS": {
  
  }
}
```

<!--
type: tab
-->

##### Example of a tokenization (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "TOKENIZE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "source": {
    "sourceType": "PaymentSession",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  },
  "paymentTokens": [
    {
      "tokenData": "8519371934460009",
      "tokenSource": "TRANSARMOR",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
    },
    {
      "tokenData": "8519371934460010",
      "tokenSource": "CHASE",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
    }
  ],
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
    "merchantName": "Merchant Name",
    "merchantAddress": "123 Peach Ave",
    "merchantCity": "Atlanta",
    "merchantStateOrProvince": "GA",
    "merchantPostalCode": "12345",
    "merchantCountry": "US",
    "merchantURL": "https://www.somedomain.com",
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "fiserv",
      "responseCode": "000000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z"
      }
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "merchantInvoiceNumber": "123456789012"
  },
  "additionalData3DS": {
  
  },
}
```

<!-- type: tab-end -->


---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
