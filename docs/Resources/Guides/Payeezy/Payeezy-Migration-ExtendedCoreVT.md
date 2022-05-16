---

tags: [carat, commerce-hub, enterprise, virtual-terminal, card-not-present, payeezy]

---

# Virtual Terminal

<!-- theme: danger -->
>  The following documentation is for **Payeezy** migration clients only. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

## General

Virtual Terminal was previously accessed via the Payeezy Real-time Payment Manager (RPM) and will now be available from ClientLine Enterprise (CLX).  For more details, please see [Commerce Hub Administration / ClientLine Enterprise Training](https://fiserv.cloudguides.com/en-us/guides/ClientLine%20Enterprise%20from%20Fiserv).

In RPM, the Virtual Terminal functionality allows for Forced Post and Open Voids to be processed. In the CLX solution, Forced Post is not currently supported, but planned for a future release. Open Void is not supported in CLX.  

The ability to create a copy of a prior Pre-Auth or Purchase is no longer available.

RPM Virtual Terminal could be displayed in multiple languages (EN, FR, ES) based on the terminal setting; at this time CLX Virtual Terminal is available in English language only.

### Functionality Comparison between RPM and CLX Virtual Terminal

| Payeezy Transaction Type | In RPM | In CLX | Notes|
| -------- | :-------------: | :----------: |----------|
|Purchase |POS Screen | Virtual Terminal|
|Pre-Authorization |POS Screen |Virtual Terminal|
|Forced Post |POS Screen | Not Available| Functionality planned for future release.|
|Open Void  |POS Screen | Not Available| 
|Tagged Pre-Authorization Completion  |POS Screen and Action in search or reports |Search| 
|Tagged Void   |Action in search or reports  | Search |
|Tagged Refund  |Action in search or reports  | Search |
|New Transaction (Tagged Pre-Auth or Tagged Purchase)  |Action in search or reports  | Not Available | Transaction Type only available in Virtual Terminal, not API |

## Element Level Differences

In CLX Virtual Terminal, the Currency is now required and defaults to USD.  In Payeezy, this value was pulled from the merchant’s configuration. 

In CLX Virtual Terminal, the Card brand is selectable. If the full card number is entered first, the correct card type will be auto-populated.

The Country field is now free form text vs. a drop down.

When processing secondary transactions (Completion/Capture, Void and Refund), the reference fields are editable in Payeezy Virtual Terminal but they are not editable in CLX Virtual Terminal.

