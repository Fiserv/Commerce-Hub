---
tags: [Online, Mobile, Digital, Card Not Present, Plugin, Extension, Adobe, Magento]
---

# Adobe Commerce Installation Guide

A developer will need to install and configure the Commerce Hub plugin to be able to run your first transaction in our test certification environment. The extension is built ready-to-go and the installation has been constructed to have pre-configured settings to run a transaction within minutes upon configuring your test account and credential information.

<!-- theme: warning -->
> Before you begin integration a Cert MID, credentials, and domain whitelist is required to be setup in Merchant Configuration and Boarding. Please contact your account representative for more information.

---

## Step 1: Download Extension

There are two options to access and download the Adobe extension, via Composer or the compressed library.

<!--
type: tab
titles: Composer, Library
-->

##### Install via Composer (recommended)

Add Commerce Hub's repository using the following command line:

```bash
config repositories.fiserv_payments git https://github.com/Fiserv/Adobe-Commerce-Plugin.git
```

Require Fiserv Payments:

```bash
composer require fiserv/payments:dev-master#v1.0.0 
```

<!--
type: tab
-->

##### Install compressed library (e.g. .tar / .zip file)

Extract [compressed plugin](needLink) to the following directory:

<!-- theme: example -->
> `root_directory/app/code/Fiserv`

<!-- type: tab-end -->

---

## Step 2: Enable Extension

After downloading, follow the below steps to enable the extension.

Enable Fiserv Payments module:

```bash
bin/magento module:enable Fiserv_Payments --clear-static-content 
```

Update modules:

```bash
bin/magento setup:upgrade
```

Deploy static content:

```bash
bin/magento setup:static-content:deploy –f
```

Clear cache:

```bash
bin/magento c:c
bin/magento c:f
```

---

## Step 3: Configure Credentials

Configure the plugin and run a test transaction. This will ensure that all initial environmental and configuration settings are in place.

Navigate to the Fiserv Payments configuration within the Adobe Commerce Administrative panel, *Stores > Configuration > Sales > Payment Methods > Other Payment Methods > Fiserv Payments*.

Expand Fiserv Payments to expose Commerce Hub Gateway Settings.

<!-- theme: info -->
> Each time a configuration setting is saved, the cache must be flushed for the changes to take effect.

1. Enabled the Commerce Hub Gateway and Save Config
2. Flush the cache, *System > Cache Management* and clicking Flush Magento Cache
3. From the Commerce Hub Gateway settings, configure the following [certification credentials obtained from Developer Studio](?path=docs/Resources/Guides/Dev-Studio/Account-Management.md), Merchant ID, Terminal ID, API Key, and API Secret, and set the API Environment to CERT
4. Save Config and flush the cache
5. Run a test transaction

<!-- theme: info -->
> Commerce Hub has different credentials and identifiers associated with the different environments. Please ensure you have the correct information for both CERT and PROD, respectively.  

---

## Step 4 : Configure Business Requirements

Configure the plugin based on the business requirements and run a test transaction. This includes setting the supported transactions, tokenization, currency and allowed countries.

Once business payment requirements are set, Save Config and flush the cache. It is recommended to run a test transaction for each configured use case.

| Field | Details |
| ----- | ----- |
| Transaction Type | Sale with Capture or Authorize Only |
| Allow Customer to Store Payment Methods | Allows TransArmor tokenization |
| Store Payment Methods without a Transaction | Allows a customer to manually store payment details from their account |
| Debug | Enables logging for troubleshooting purposes |
| Accepted Currency | Only supports USD, other currencies are planned in the future |
| Payment from Applicable Countries | Determine which countries customers can purchase from |
| Payment from Specific Countries | Specify which countries customers can purchase from |

---

## Step 7: Field Customization

Commerce Hub manages the capture and input of sensitive payment data at checkout and allows the customization of the consumer's experience with a merchant's brand and provides [customizable fields](?path=docs/Resources/Guides/Partners/Modules/Adobe-Customization.md) in the Customer Checkout Payment Form, Admin Order Payment Form and Tokenization Form.

---

## Step 8: Test and Go Live

After certification testing has been completed, the extension will need to be [configured](#step-3-configure-credentials) using the [production credentials obtained from Developer Studio](?path=docs/Resources/Guides/Dev-Studio/Account-Management.md).

---

## See Also

- [Adobe Commerce Customization Guide](?path=docs/Resources/Guides/Partners/Modules/Adobe-Customization.md)
- [Developer Studio Getting Started](?path=docs/Getting-Started/Getting-Started-Dev-Portal.md)

---
