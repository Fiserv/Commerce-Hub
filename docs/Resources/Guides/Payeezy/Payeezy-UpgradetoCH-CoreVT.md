---

tags: [carat, commerce-hub, enterprise, virtual-terminal, card-not-present, payeezy]

---

# Virtual Terminal

<!-- theme: danger -->
>  The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

## General

Virtual Terminal was previously accessed via the Payeezy Real-time Payment Manager (RPM) and will now be available from ClientLine Enterprise (CLX).  For more details, please see [Commerce Hub Administration / ClientLine Enterprise Training](https://fiserv.cloudguides.com/en-us/guides/ClientLine%20Enterprise%20from%20Fiserv).

In RPM, the Virtual Terminal functionality allows for Forced Post and Open Voids to be processed. In the CLX solution, Forced Post is not currently supported, but targeted for a future release (Q2 2023). Open Void is not supported in CLX.  

Features currently unavailable in CLX Virtual Terminal:

<ul>
  <li>The ability to add Soft Descriptors on an inititated transaction.</li>
  <li>Creating a copy of a prior Pre-Auth or Purchase.</li>
  <li>Initiating an ACH transation. At this time, card only is supported.  ACH release is targeted for Q2 2023.</li>
</ul>

RPM Virtual Terminal could be displayed in multiple languages (EN, FR, ES) based on the terminal setting; at this time, CLX Virtual Terminal is available in English language only.

**Available Transaction Type Functionality Comparison**

| Payeezy Transaction Type | In RPM | In CLX |
| -------- | :-------------: | :----------: |
|Purchase |POS Screen | Virtual Terminal -> Initiate Card Transaction|
|Pre-Authorization |POS Screen | Virtual Terminal -> Initiate Card Transaction|
|Forced Post |POS Screen | Targeted Release Q2 2023| 
|Open Void  |POS Screen | Not Supported| 
|Tagged Pre-Authorization Completion  |POS Screen |Reports -> Commerce Hub -> Search <br> Filter Transaction Type = Pre-Auth Request <br> Action button to complete Capture| 
|Tagged Void   |Action in search or reports  | Reports -> Commerce Hub -> Search <br> Filter Transaction Type = Pre-Auth Request, Pre-Auth Complete or Purchase<br> Action button to complete Void |
|Tagged Refund  |Action in search or reports  |Reports -> Commerce Hub -> Search <br> Filter Transaction Type = Pre-Auth Complete or Purchase <br> Action button to complete Refund|
|New Transaction (Tagged Pre-Auth or Tagged Purchase)  |Action in search or reports <br>  _Transaction Type only available in Virtual Terminal, not API_ | Not Supported | 

---

## Element Level Differences

In CLX Virtual Terminal, the Currency is now required and defaults to USD.  In Payeezy, this value was pulled from the merchant’s configuration. 

In CLX Virtual Terminal, the Card brand is selectable. If the full card number is entered first, the correct card type will be auto-populated.

The Country field is now free form text versus a drop down.

When processing secondary transactions (Completion/Capture, Void and Refund), the reference fields are editable in Payeezy Virtual Terminal but they are not editable in CLX Virtual Terminal.

---

## See Also

- [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md)

---
