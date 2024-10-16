---

tags: [carat, commerce-hub, enterprise, card-not-present, payeezy, 3DS]

---

# 3DS

<!-- theme: danger -->
> The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

Commerce Hub allows a merchant to pass the 3-D Secure (3DS) authentication results that were obtained through a Commerce Hub or a thrid-party 3-D Secure provider when sending the authorization transaction. PaymentCard or PaymentToken is used by the merchant as the payment source when sending the transaction to Commerce Hub, along with the 3DS response data.

Payeezy supported 3DS v1 and v2; Commerce Hub only supports 3DS v2.

> :memo: **Note:** It is important to know the platform you are transacting on in order to review the most pertinent information for your upgrade to Commerce Hub. <br> <br> If you are using the **/api.globalgatewaye4.firstdata.com** URL, then you are transacting through the **Payeezy Gateway Direct (PGW)** platform. <br> <br> If you are using the **/api.payeezy.com** URL, then you are transacting through the **Developer API** platform.

## Element Mapping

|Request/Response| Payeezy Gateway Direct XML Element | Payeezy Gateway Direct JSON Element | Payeezy Developer API Element |Commerce Hub Element |
| -------- | ------------- | -------------- | -------------- | -------------- |
|Request|`Transaction.ThreeDSecureProgramProtocol`|`three_d_secure_program_protocol`|`3DS.program_protocol`|`additionalData3DS.versionData3DS.recommendedVersion`|
|Request|`Transaction.ThreeDSecureDirectoryServerTransactionId`|`three_d_secure_directory_server_transaction_id`|`3DS.directory_server_transaction_id`|`additionalData3DS.dsTransactionId`|
|Request|`Transaction.CAVV`|`cavv`|`3DS.cavv`|`mpiData3ds.cavv`|
|Request|`Transaction.ecommerce_flag`|`ecommerce_flag`|`eci_indicator`|`mpiData3ds.eci`|
|Response|`TransactionResult.CAVV`|`cavv_response`|N/A|`networkDetails.cavvResponseCode`|

Additional information on 3DS integration in Commerce Hub can be found [here](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Request.md).

---

## See Also

- [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)

---
