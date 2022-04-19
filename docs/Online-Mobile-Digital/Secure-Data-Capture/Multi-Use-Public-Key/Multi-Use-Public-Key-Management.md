
# Multi-Use Public Key Management

The objective of a key management system is to achieve PCI DSS compliance for a banking institution. It involves implementing a crypto system that manages the secure creation, exchange, distribution, storage and use of cryptographic keys, which is typically known as the key life cycle for protecting customer's sensitive payment card data.


## Best Practices for Key Management

- The merchant should initiate the new key request 2 days prior to the expiry of the previous key. The merchant shall start using the new key once it is successfully exchanged.
  - If merchant does not initiate the new key exchange as per the best practices, Commerce Hub will send three notifications via webhook at 47, 44 and 41 hours before the key expires.
- Merchant should set the limit on the transaction amount for offline (Store and Forward) transactions.
  - Any transaction that exceeds the set limit should be rejected by the merchant.
  - The merchant is liable for any approved transaction with a higher amount that is rejected during processing.

## Generate Key

Commerce Hub allows the merchant to provision a new encryption key to store for the payment data for any future offline requirements. This provides a valid Commerce Hub generated merchant public key for card encryption where a merchant will store and forward to Commerce Hub at a later time.

Table of fields.

### Payment Form Example

```php

<html>
    <head>
        <meta charset="utf-8">
        <script id="commercehub" src="https://test.api.fiservapps.com/ch/js/commercehub-client-sdk.js"></script>
    </head>
    <body>
        <div id="payment-saq-a-ep-form-div"></div>
        <script>
         const authorization = '50e56404-4595-41b0-a5e7-44b9e4e6569b';
         const apiKey = '1951fe5b30e34cdaad758b8874140872'; 
         const formConfig = {
                "merchantId": '100204342250',
                "publicKey": 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCUYMJPHx8HLM1hUGNr1WOteYFt+PC0RZTpSeOcMhyQreTcfSwNi75wRR0k+QvMk4u8fm8A/Vq7tRU+LRbSTiFuSDJqszQGybm1LWoDoYuTD3QkF8r3Ej1VkhR7nBB8jlK+tpbWsigF3PeWUmfVEIA/qfLKhNDpUY71lyw8pxZTfwIDAQAB=',
                "symmetricEncryptionAlgorithm": 'AES_GCM'
            };
            const form = new commercehub.FiservSaqAEp(formConfig, authorization, apiKey);
            form.loadPaymentForm("payment-saq-a-ep-form-div")
            .then((next) => {
            })
            .catch((error) => {
            });
        </script>
    </body>
</html>

```

## Revoke Key

Description.

Table of fields.

Payload examples.

## Key Expiry Example

(Table..... point 6 )

## See Also
