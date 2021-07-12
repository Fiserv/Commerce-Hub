# Secure Data Capture

The PCI DSS Self-Assessment Questionnaires (SAQs) are self validation tools intended to assist merchants and service providers in evaluating their compliance with the PCI DSS, ideal for small merchants and service providers that are not required to submit a report on compliance, an SAQ is designed as a self-validation tool to assess security for cardholder data.

<!--
line 3 in glossary
The overview should be - how CH offers online integration methods that need SAQA and SAQA-EP complaince requirements.
- SAQ-A, where CH hosts the checkout process
- SAQ A-EP - an integration where the merchant hosts the checkout process

## Integrations 
- SAQ A - HPP, 
- SAQ A-EP - JS, and RESTful API, **HPP bypass**
-->


## SAQ-A

SAQ-A applies to Card-not-present merchants (e-commerce ), that have fully outsourced all cardholder data functions to PCI DSS compliant third-party service providers, with no electronic storage, processing, or transmission of any cardholder data on the merchant’s systems or premise and is not applicable to face-to-face channels. 

- All payment acceptance and processing are entirely outsourced to PCI-DSS validated third party service providers OR
- Redirect the request to hosted payment page provided by validated PCI-DSS complaint service provider.

## SAQ-A-EP

SAQ A-EP is designed to apply to e-commerce merchants who partially outsource payment processing to PCI DSS compliant service providers. The merchant will typically have a website that redirects consumer users to a payment processor at point of payment, but the web server itself doesn’t electronically store, process, or transmit card data. Merchant website present the payment page but processing of the cardholder data is handled by a validated PCI-DSS complaint service provider, such as a website configured for a direct post to force submission of a cardholder data direct from the browser to the payment processor. 

