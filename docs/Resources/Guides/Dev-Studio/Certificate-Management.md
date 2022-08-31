---
tags: [Account Management, Enterprise Portal, Key Management, Certificate, CSR, Apple Pay]
---

# Certificate Signing Requests

A developer can create Certificate Signing Requests (CSR) from the Developer Studio Dashboard. A CSR allows integration with [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md) and other integrations that require a PEM cerfificate.

---

## Create a Certificate

Developers can create and manage API Keys from the Dashboard in the Certificates section.

#### Step 1: Access Developer Studio

Login to the Developer Studio and access the Developer Dashboard. 

#### Step 2: Add a New Certificate

Select Certificates from the left navigation menu to create a Certificate Signing Request (CSR).

#### Step 3: Create CSR

Click the Create CSR button, complete the following information and click the Create button.

- Common name: Fully qualified domain name. Cannot contain a space or special characters. 

- Wallet type: Type of digital wallet

- Organization name: Legal name of your organization

- Country/region: Full name of the country/region

- State/province: Full name of the state/province

- City/locality: Full name of the city/locality

- Description: Details of the CSR

#### Step 4: Download the CSR

Click the download icon, review the steps and click the OK button to save the CSR (_common_name.pem_) to your computer. 

<!-- theme: info -->
> View, Update or Delete the CSR by clicking the appropriate button or icon. 



---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)
- [Use Commerce Hub APIs](?path=docs/Resources/API-Documents/Use-Our-APIs.md)


---
