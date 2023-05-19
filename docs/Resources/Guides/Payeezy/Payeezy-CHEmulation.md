---

tags: [carat, commerce-hub, enterprise, card-not-present, payeezy]

---

## Welcome to Commerce Hub through Emulation!   

If you have been directed to reveiw this page, it means that your MIDs will soon be upgraded to Commerce Hub through emulation. The purpose of this document is to outline the steps of this journey, call out the anticipated response payload differences between Payeezy and the Commerce Hub emulator and guide you to the appropriate place for support.

**Let's begin...**

1. **PREPARE TO TEST:** *We encourage all of our clients to test this new environment!*  All merchants will receive a set of test credentials.  These generic test credentials are not merchant specific; testing will be done in a shared sandbox.  We recommend that you do not include any proprietray information in your test payloads.

2. **TIME TO TEST:** Please refer to the test cards provided in your test package to facilitate the testing of transactions through Commerce Hub emulation.  A test card contains data to be transmitted during testing, such as dummy card numbers.  You will run your regression tests for the Payeezy integration. During testing, if you encounter any issues, please reach out to the Implementation Manager assigned.

3. **CONFIRM:**  If you are satisfied with testing results, we will confirm that it is time to move forward with the upgrade.

4. **UPGRADE:** There is nothing expected of the merchant during this time; notification before and after will be communicated and once complete, we will begin to monitor.  AT this point, reporting, Virtual Terminal and User Management will now reside in ClientLine Enterprise (CLX).  Please see reporting section below for more information.

5. **RECODE TO COMMERCE HUB:** Now that you have been migrated to Commerce Hub emulation, it is time to begin planning your upgrade to the full capablities that Commerce Hub has to offer!  Here is the place to start: [Getting Started with Commerce Hub](?path=docs/Getting-Started/Getting-Started-General.md)  There is also a [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md) that will help you to understand how to transition your code from one platform to the next and incorporate features. 

Your billing code will change - please reach out to your AM/RM with any questions concerning the potential impact.

---

### Reporting

It's time to start moving away from Payeezy Real-time Payment Manager (RPM) as your source for transaction reporting and towards ClientLine Enterprise (CLX) reporting.   [ClientLine Enterprise Training](https://fiserv.cloudguides.com/en-us/guides/ClientLine%20Enterprise%20from%20Fiserv) is available so that you can become familiar with the new reporting platform's features and functionality.

We also have a dedicated article in the [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/Payeezy-UpgradetoCH-CoreReporting.md) that explains the differences between the two reporting platforms as well as how to create similar RPM reporting in CLX.

---

### Response Payload Differences

**Response Codes**

Bank Response Codes, Bank Messages, Exact Response Codes and Exact Messages have been paired down to a normalized list.  This means that not all codes and related messages documented in Payeezy will continue to be returned in the response.  *Note: No new codes or messages have been introduced.*  
This table respresents the shortened list of expected response codes:

| Bank Response Code | Bank Message | Exact Response Code | Exact Message |
| :--------: | ------------- | :--------------: | ---------|
|100|Approved|00|Transaction Normal|
|225|Invalid Field Data|72|Data within the transaction is incorrect|
|253|Invalid Tran. Type|32|Invalid Transaction Code|
|299|Duplicate Transaction|63| Invalid Duplicate|
|301|Issuer Unavailable|42|Unable to Send Trans|
|303|Processor Decline|42|Unable to Send Trans|
|503|Fraud / Security Violation|08|CVV2/CID/CVC2 Data not verified|
|508|Excessive PIN Try|72|Data within the transaction is incorrect|
|509|Over Limit|26|Invalid Amount|
|510|Over Limit Frequency|34|Card Volume Exceeded|
|519|On Negative File|68|Restricted Card Number|
|522|Card is Expired|25|Invalid Expiry Date|
|523|Encrypted Data is Bad|42|Unable to Send Trans|
|530|Do Not Honor|42|Unable to Send Trans|
|607|Invalid AMount|26|Invalid Amount|
|755|No Account/Unable to Locate|22|Invalid Credit Card Number|
|763|Invalid Account Number|22|Invalid Credit Card Number|
|813|Invalid PIN|72|Data within the transaction is incorrect|
|833|Invalid Merchant|14|Invalid Gateway ID|
|833|Invalid Merchant|53|Terminal/Gateway Mismatch|
|902|Process Unavailable|07|Terminal Restriction: Try again later|
|902|Process Unavailable|12|Message Timed-out at Host|
|902|Process Unavailable|42|Unable to Send Trans|

**Fraud Response**

All negative filter and velocity control decline responses will appear as:

  "transaction_error": 1, <br>
    "transaction_approved": 0, <br>
    "exact_resp_code": "72", <br>
    "exact_message": "Data within the transaction is incorrect" 

All AVS/CVV decline responses will appear as:

 "transaction_error": 1, <br>
 "transaction_approved": 0, <br>
 "exact_resp_code": "72", <br>
 "exact_message": "Data within the transaction is incorrect", <br>
 "bank_resp_code": "100", <br>
 "bank_message": "Approved", <br>
 AVS and CVV2 codes will also be returned in the response as expected.

*NOTE: These are generic fraud response messages.  Commerce Hub emulation will not return messages specific to the reason for decline.*

**Other Response Differences to Expect**

- Gateway validation of authorization_num and transaction_tag will no longer happen.  Declines due to these element values being invalid will come from the downstream system and the decline response will reflect that of a bank response message.

-  The language element, if included in a request payload, will no longer impact the language of a gateway error message or CTR element in the response.  The functionality of this element is not being replicated in Commerce Hub emulation.

---

