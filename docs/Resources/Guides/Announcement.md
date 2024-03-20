# Payeezy Gateway SSL Certificate Update March 20th, 2024

SSL Certificate Update
Time Sensitive Client Action Required!

<!--theme:info-->
## ANNOUNCEMENT!

To: All Payeezy Gateway Clients
Platform: E-commerce gateway

### WHAT IS HAPPENING?

Fiserv Owned Payeezy Gateway certificate with Common Name “globalgatewaye4.firstdata.com” has been updated and will be deployed on 03/20/24 at 11PM ET. Requesting you to reach external partners/clients, have them install the DigiCert root and intermediate certificates in their respective trust stores before the change implementation dates.

### WHEN IS IT HAPPENING?

On 20th March 2024, from 11:00 PM EST to 11:59 PM EST, Fiserv will renew the certificate affecting the following Prod Environment

URLs: https://api.globalgatewaye4.firstdata.com

### WHAT AM I SUPPOSED TO DO?

- Clients need to install Digi Root(DigiCert Global Root G2) and Intermediate(DigiCert Global G2 TLS RSA SHA256 2020 CA1) certificate if not available at their trust store.

- Clients may download the certificate from Digi Link here: https://www.digicert.com/kb/digicert-root-certificates.htm

#### Instructions to the client on how to install certificate.

How do I install the new Root Chain?

You must follow your device or application specific documentation.
Some examples of readily available documentation for Apache (on Redhat) and IIS are at the links below.

These were found while performing a standard search on the web.

o	https://access.redhat.com/solutions/43575

o	https://support.microsoft.com/en-us/help/954755/how-to-configure-intermediatecertificates-on-a-computer-that-is-runni

- For those clients who are using leaf certificate, they need to install leaf certificate at their trust store before the Fiserv scheduled change.

Digi Root and Intermediates Certificate are attached. Please reach out to us for Leaf certificate.
  
Note: If we are missing any recipient, please forward this email.

### WHAT IS THE IMPACT?

During the maintenance window, clients could experience a 10 – 15 minutes of service interruption. If you experience connectivity issues with these URLs after the maintenance window, please contact the Fiserv Global Command Center at 800-337-1222, opt. 3, opt. 9.