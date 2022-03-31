---
tags: [carat, commerce-hub, enterprise, online, card-not-present, payeezy]
---
# Virtual Terminal
<!-- theme: danger -->
> The following documentation is for Payeezy migration clients only. See [Fiserv Developer Studio for Merchants](https://developer.fiserv.com/merchants) for Commerce Hub integration options.

## General

- Virtual Terminal was previously accessed via the Payeezy Real-time Payment Manager (RPM) and will now be available from Client Line Enterprise.  For more details please see <link to Virtual Terminal CLX documentation/training>.
- In Payeezy Gateway the Virtual Terminal functionality allows for Forced Post and Open Voids to be processed via Virtual Terminal; in the Client Line Enterprise solution those transaction types are no longer supported via Virtual Terminal.  Additionally, the ability to create a copy of a prior Pre-Auth or Purchase via a “New Transaction” is no longer available.
- Finally, in Payeezy Gateway the Virtual Terminal could be displayed in multiple languages (EN, FR, ES) based on the terminal setting; at this time Client Line Enterprise Virtual terminal is available in English language only.

<!--
type: tab

-->

| PGW Transaction Type | In PGW | In CLX | Notes|
| -------- | :-------------: | :----------: |----------|
|Purchase |In POS Screen | In Virtual Terminal|
|Pre-Authorization |In POS Screen | In Virtual Terminal|
|Forced Post |In POS Screen | Not Available|
|Open Void  |In POS Screen | Not Available| 
|Tagged Pre-Authorization Completion  |In POS Screen and Action in search or reports |In Search| 
|Tagged Void   |Action in search or reports  | In Search |
|Tagged Refund  |Action in search or reports  | In Search |
|New Transaction (Tagged Pre-Auth or Tagged Purchase)  |Action in search or reports  | Not Available | Transaction Type only available in VT, not API |
<!-- type: tab-end -->

## Element Level Differences

- In Client Line Virtual Terminal, the Currency is now required; it defaults to USD.  Alternatively in Payeezy Gateway, this value was pulled from the merchant’s configuration (not entered in the Virtual Terminal). 
- In Client Line Virtual Terminal, the Card brand is required; this detail was not previously needed in Payeezy Virtual Terminal.
- The Country information entered is now a free form text field (vs. previously a drop down).
- When processing secondary transactions (Completion/Capture, Void and Refund), the reference fields were previously editable in Payeezy Virtual Terminal and are no longer available in Client Line Enterprise VT.
---
## See Also

- [CH Overview](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Solution Architecture](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Dev Studio](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CLX Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [Marketplace Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)


---
