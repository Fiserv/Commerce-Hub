## Charges

Charges can be initiated in 2 ways. either as `Sale` or `Pre-Auth` and can be distinguished as per the `captureFlag` sent in the request. 
If the value for captureFlag is sent as *TRUE*, the transaction will be considered as sale, 
where the customer will be charged with the transaction amount whereas if the value of
captureFlag in charge request is sent as *FALSE*, the request would be considered as Pre-Auth Request,
where the funds on the customer account would be kept reserved and the followup transaction(Capture) 
would be needed in order to charge the fund to the customer.

---
### Sale
A `sale` is a customer transaction where the purchase amount is authorized and settled at the same time. While a tip amount can be added, it is permitted only before the transaction is authorized and settled.
If a sale is not voided within 25 minutes, the merchant funding process begins for this sale. At this point, the merchant can still refund the customer.
E.g: Quick service restaurants, where customers select a tip amount before completing the transaction with a payment or Retail stores, where tips are not expected.

<!-- theme: info -->
> 
>**NOTE**
>A `Sale` transaction may come back as a tip-adjustable `Auth`, depending on the payment gateway. The SaleResponse includes boolean fields that indicate whether the transaction is final (`"isSale": true`) or will be finalized during closeout (`"isAuth": true`).

### Auth
An `auth` is a customer transaction where the purchase amount is authorized, and then can be tip adjusted even after the transaction is authorized. Tip adjustment can be made without requiring the customer's payment method (physical card or digital wallet).
The merchant funding process for the day begins at closeout when the auth or batch of auth transactions is setled. Before an auth is settled, there is no limit to the number of times a merchant can adjust the tip amount on a device. This is helpful in case of human errors.
E.g: Full-service restaurants, where customers can use a credit card to authorize an initial value, and then add a tip amount to the receipt after the card has been charged.

<!-- theme: info -->
> **NOTE** 
>It is important to note the following rules about tip adjustments:
>- The most recent tip adjustment overrides all previous tip adjust amounts. Tip adjustments are not summed.
>- Fiserv does not place a limit on tip adjustment amounts. However, if merchants tip adjust amounts more than 20% of the bill, funds are not guaranteed subject to the rules set by card schemes (such as Visa and Mastercard) and electronic payment associations.

### Closeout

Closeout is the process of finalizing a batch of auth transactions (including tips) or captured pre-auth transactions and then starting the merchant funding process.

**Below data need to be changed as per Commerce HUB**
During the boarding process, Clover merchants can be set up for automatic or manual closeout (depending on the [merchant's region](https://docs.clover.com/docs/region-specific-features)). If your POS supports manual closeout, the CloverConnector#closeout method can be used to trigger the closeout process on the device. The CloseoutRequest includes an allowOpenTabs indicator of whether tabs without tips should be processed as part of the batch.


### Pre-auth

A pre-auth is a customer transaction where the merchant can validate that a given amount is available on the customer payment method (physical card or digital wallet), and then also place a hold for that amount. This amount is deducted from the customer account (credit limit or bank balance), but not yet transferred to the merchant.

Once the merchant captures a pre-auth amount, the transaction further continues as an auth transaction and is governed by the same auth transaction rules.

<!-- theme: Warning -->
> For the merchant to be funded, the pre-auth amounts must be captured before closeout.

Typical businesses where pre-auth transactions occur include:

- Hotels, where a hold is placed on a customer credit card during check-in and may be adjusted at checkout for incidental damages and in-room charges
- Car rental agencies, where a hold is placed on a customer credit card at vehicle hand-off and may be adjusted for incidental damages, late return of the vehicle, or failing to refuel

## Minimum Field Requirement
**Component : Amount**

Field    | Data Type| Maximum Length | Description
---------|----------|----------------|---------
Total | Number | 12 | Sub component values must add up to total amount. 0.00 expected format
Currency | String | 3 | ISO 3 Currency Format. Click on [Link](../../Master Data/Currency-Code.md) for more details

**Component : paymentSource**

Field    | Data Type| Maximum Length | Description
---------|----------|----------------|---------
sourceType | String | 15 | Payment Source (Example PaymentCard)
cardData | String | 19 | Card Number 
expirationMonth| String | 2 | Card Expiration date Month (Example 12)
expirationYear| String | 4 | Card Expiration date Month (Example 2035)
SecurityCode | String | 3| A card security code (CSC), card verification data (CVD), card verification number, card verification value (CVV), card verification value code, card verification code (CVC)

**Component : transactionDetails**

Field    | Data Type| Maximum Length | Description
---------|----------|----------------|---------
captureFlag | String | 5 | Designates if the transaction should be captured ( TRUE for Sale and FALSE for Pre-Auth)


**OR**

- `amount` : Amount object to support the request for payment.
- `paymentSource` : Model for Payment source. This is sent as a part of the request to determine wht is the source of the payment.
- `card` : Used to sent the card details. Contains card number, expiry date, CVV etc. Clink on Link to know more about Card Component.
- `transactionDatils` : Used to send transaction data.


## Request and Response

<!--
type: tab
title: Request
-->

### Required Fields!

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "paymentSource": {
    "sourceType": "PaymentCard",
    "cardData": "4005550000000019",
    "expirationMonth": "02",
    "expirationYear": "2035",
    "securityCode": "123"
  },
  "transactionDetails": {
    "captureFlag": true
  }
}
```
<!--
type: tab
title: Response
-->

### Required Fields!

With more mind-blowing material. Really. Just amazing, grade-A stuff.

<!-- type: tab-end -->







add tab here with response in another tab




## Payload  Examples
Please click the link to refer the schema for Charge Request 

** The link should get connected to the schema hwre the sample charge request is present. **




## Payload Response Example

explain sample response 201
for error resposes please check error page (use callout box)










