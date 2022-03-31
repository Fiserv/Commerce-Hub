---
tags: [carat, commerce-hub, enterprise, online, card-not-present, payeezy]
---
# Reporting
<!-- theme: danger -->
>  :memo: **Note:** The following documentation is for Payeezy migration clients only. See [Fiserv Developer Studio for Merchants](https://developer.fiserv.com/merchants) for Commerce Hub integration options.

## General
- Reporting was previously accessed via the Payeezy Real-time Payment Manager (RPM) and will now be available from Client Line Enterprise.  For more details please see <link to CLX documentation/training>.
- In Payeezy there were five pre-defined reports available with the ability to adjust data ranges; the new solution,  Client Line Enterprise, is highly Configurable reporting engine.
- In Payeezy the reports had grouping/sub-totals by Terminal, Card Brand and Transaction Type, in the Client Line Enterprise the search does not have grouping/sub-totals but return a list of all transactions that meet the criteria; the generic analysis function supports grouping but does not have drill-down capability to the transaction.
- The Actions available for a transaction from the reporting screens in Payeezy Gateway differ from those available in Client Line Enterprise; for example a Purchase includes Refund and Void in Client Line Enterprise and Refund and New Transaction in Payeezy Gateway.  
- Finally, in Payeezy Gateway the Search could be displayed in multiple languages (EN, FR, ES) based on the terminal setting; at this time Client Line Enterprise is available in English language only.

## Data Available in Reports UI

In General, many more data elements are available for reporting in the new Client Line Enterprise solution than were previously available in Payeezy Gateway reporting.  The following exceptions exist where the data was available in Payeezy Reports, but is not available or is conditionally available in Client Line Enterprise:
> - Network (formerly known as Card Brand)
> - Transaction Type is available, but will be displayed as “unknown” in some cases
> - Approval Status is available, but “unknown” when the response was an error
> - User Id, which indicated whether the transaction was processed via API (with the GatewayID) or via Virtual Terminal (with the User ID) will not be available in Client Line reporting

## Reporting APIs
---
## See Also

- [CH Overview](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Solution Architecture](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Dev Studio](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CLX Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [Marketplace Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)


---
