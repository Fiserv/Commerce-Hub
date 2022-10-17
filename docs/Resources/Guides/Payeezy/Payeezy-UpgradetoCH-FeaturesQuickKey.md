---

tags: [carat, commerce-hub, enterprise, card-not-present, payeezy, quick-keys, batch-upload]

---

# Quick Keys

<!-- theme: danger -->
>  The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

Quick Keys was previously accessed via the Payeezy Real-time Payment Manager (RPM) POS screen and will now be available through ClientLine Enterprise (CLX) Virtual Terminal Initiate Bulk. For more details, please see [Commerce Hub Administration / ClientLine Enterprise Training](https://fiserv.cloudguides.com/en-us/guides/ClientLine%20Enterprise%20from%20Fiserv).

In RPM, the Quick Keys functionality had to be requested; in CLX, all merchants will have access to the Initiate Bulk menu item under Virtual Terminal.

### File Format and Upload

CLX supports the new Commerce Hub upload file format as well as the Payeezy file format.  Both templates can be downloaded from the Initiate Bulk screen.

RPM allowed for only 250 transactions per batch upload; CLX allows for an unlimited number of transactions.

The transaction type of 'Purchase' in RPM is now a 'Sale' in CLX.

### Screen Functionality

CLX provides the additional functionality of toggling between initiating a single transaction and bulk upload.

In RPM, a row could be edited by clicking on it and updating information in the left column; in CLX, checking the box in the first column of the row will make the row editable.

---

## See Also

- [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)

---
