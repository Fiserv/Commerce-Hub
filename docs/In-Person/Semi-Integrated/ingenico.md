---
tags: [In-Person, Card Present, Semi-Integrated, Partner, Point of Sale, Terminal, Device]
---

# Semi-Integrated Ingenico Devices

Commerce Hub and Ingenico have partnered together to offer out of the box, EMV L3 certified, semi-integrated payment solutions to enterprise merchants. The merchant's hardware or sofware API connects to the Ingenico API on the device to process payments.

##### Key Benefits

- Eliminates the need to handle PCI data reducing PCI compliance burden.
- Ingenico solutions offers secure point to point encryption and tokenization using Commerce Hub's TransArmor tokenization.
- EMV L3 certification burden is removed for the merchant.
- Uses WebSockets and JSON for easier developer integration.

---

## Device Support

[Ingenico Axium Retail Core *(ARC)* devices](https://ingenico.com/us-en/products-services/payment-terminals/axium) are Android based and can be used with desktop, mobile and multi-lane integrations. The device can be connected via USB with PCL, Ethernet, WiFi and 4G.

Ingenico's Axium devices are an out of the box on the device, however, customization of screens, Android layouts, data collection, branding etc. are still possible on the terminal. This will require merchant to engage with Ingenico directly to validate and create a signed package. Terminal profile setup, estate management, life cycle management, replacement and repair services are handled using Ingenico's Hosted Estate Management *(HEM)* framework.

---

## Integration Methods

Traditional integration to an Axium device supports the ability for the merchant's API to send a single request to start a transaction. At that time the API only needs to listen for the transaction result.

For Axium devices such as the EX or DX lines, ARC offers the ability for the merchant's API to have shared or complete control over the device's screen, pre and post transaction. ARC can give control of the device during a transactions when specific events occur. For example, ARC allows the API to take control of the transaction result display. This means that ARC will provide the API the transaction result, but the update of the device's screen is dependent on the API requesting to display a screen.

- The application on the device can transition between the merchant's API *(i.e. tip prompt)* to the ARC application then switch back to the point of sale *(POS)* screen using a simple command after transaction is complete.
- The application on the device can use ARC as a headless solution. This appears to the end user as a single app, without the observation of the merchant's API and ARC switching in the foreground.

See the [Ingenico Developer Portal](https://developer.ingenico.us/) for information on integrating the Ingenico Axium with your hardware or software integration.

---

## Supported Features

| Feature | Details | Additional Information |
| ----- | ----- | ----- |
| **Industry** | Retail | |
| **Region** | USA | |
| **Processor** | Fiserv | |
| **Frontend** | Nashville | |
| **Backend** | North | |
| **Settlement** | Host Capture, Terminal Direct Capture | Merchant location must be setup in Merchant Configuration and Boarding. Please see you account representative for more details. |
| **Payment Methods** | Credit, Debit, Gift Cards *(Prepaid open-loop)*, Digital Wallets | Apple Pay and Google Pay are supported through EMV Contactless |
| **Entry Methods** | EMV *(contact, contactless)*, Track, Manual Entry | |
| **Verification Methods** | PIN, Signature, No CVM | Contactless transactions above certain thresholds have constraints on acceptable card holder verification methods *(CVM)*. Please see your account representative if contactless and PIN are valid use cases for your business. |
| **PIN Support** | Debit, Credit | |
| **AVS Support** | ZIP code only, Full address | |
| **Card Brands** | Visa, Mastercard, Amex, Discover, Diners, JCB, Union Pay | |
| **Device Encryption** | Ingenico On-Guard *(TDES)* | |
| **Tokenization** | TransArmor | |
| **Transaction Types** | Charges *(Authorization, Partial Authorization, Sale)*, Refunds, Cancels *(Void)*, Debit Cashback, Timeout Reversals | |

---

## See Also

- [Semi-Integrated Devices](?path=docs/In-Person/Integrations/Semi-Integrated.md)

---
