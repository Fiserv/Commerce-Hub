# 3DSecure

## Overview
3-D Secure is a protocol designed to be an additional security layer for online credit and debit card transactions. The name refers to the "three domains" which interact using the protocol: the merchant/acquirer domain, the issuer domain, and the interoperability domain.

When using our payments API as the 3DSecure provider, the authentication is performed in-line with the existing transaction flow. The process starts by performing a typical authorization or sale request with a desire to perform 3DSecure authentication in the request.

The authorization is then placed into a WAITING status until the authentication process is completed. During authentication, the merchant may be required to update the original transaction request one or more times in order to move the process flow forward.

At the end of the authentication process, the original transaction is updated with the authentication results and the authorization is completed.

---


