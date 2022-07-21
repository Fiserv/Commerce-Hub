---
tags: [Online, Card Not Present, Secure Data Capture, Multi-Use Public Key]
---

# Merchant Managed Encryption

Merchant Managed Encryption is a [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md) integration that includes the use of a static public key, where the merchant can capture the payment source details and encrypt the details before sending it to Commerce Hub for authorization.

#### Use Cases
- Can be used as the primary integration method which will fall under SAQ D compliance from PCI DSS.
- Can be used with other integration methods which fall under SAQ A and SAQ A-EP and uses the support of static public key during system interruption *(also known as [Store and Forward](link_to_glossary) or offline processing)*.
  - System interruption can be related to scheduled activity or can be due to any network/application failure. 
  - When using Merchant Managed Encryption, the merchant will change from SAQ A/SAQ A-EP to SAQ D for processing.

---

