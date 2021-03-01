# Address-Verification


## Overview

**Address Verification Services (AVS)** - A service in which the merchant verifies the cardholder’s [billing address](../../Master-Data/Address.md#billing-address). AVS is widely used Fraud Prevention measure for the transaction where the card holder is not present.

## Perform AVS Check

by submitting the verification request or during a  charge request


#### Payload Example


## AVS Result Codes

The result of checking the cardholder’s postal code and any additional address information provided against the Issuer’s system of record is termed as AVS Result code. The value of result varies as per the card type.


<!--
type: tab
title: VISA
-->

##### AVS Result Code - VISA

| Value | Description |
| ------- | ------- |
| A | Street address matches, postal code does not match |
| B | Street addresses match; postal code not verified due to incompatible formats |
| C | Street address and postal code not verified |
| D | Street addresses and postal codes match (International only) |
| F | Street address and postal code match (UK) |
| G | Address information not verified for international transaction. Issuer is not an AVS Participant, or, AVS data was present in the request but the issuer did not return an AVS result, or no address on file (International only) |
| I | Address verification service not performed (International only) |
| M | Street address and postal code match (International only) |
| N | No match; neither the street addresses nor the postal codes match |
| P | Postal code matches; street address not verified |
| R | Retry, system unavailable to process |
| S | Service not supported |
| U | Address information is unavailable |
| Y | Both postal code and address match |
| Z | Postal code matches, Street address does not match or Street address not included in request |


<!--
type: tab
title: MASTERCARD
-->

##### AVS Result Code - MASTERCARD

| Value | Description |
| ------- | ------- |
| A | Street address matches, postal code does not match |
| N | No match; neither the street addresses nor the postal codes match |
| R | Retry, system unavailable to process |
| S | Service not supported |
| U | Address information is unavailable |
| W | U.S. - Street Address does not match, nine digit postal code matches; For address outside the U.S., postal code matches, address does not |
| X | Exact: U.S. - Address and 9-digit postal code match; For address outside the U.S., postal code matches, address matches |
| Y | Yes: Address and 5-digit postal code match for US address |
| Z | Five digit postal code matches, address does not match |


<!--
type: tab
title: AMEX
-->

##### AVS Result Code - AMEX

| Value | Description |
| ------- | ------- |
| A | Street address matches, postal code does not match |
| N | No match; neither the street addresses nor the postal code matches |
| R | Retry, system unavailable to process |
| S | Service not supported |
| U | Address information is unavailable |
| Y | Both postal code and address match |
| Z | Nine or five digit postal code matches, address does not match |
| L | Card member Name and Billing Postal Code match |
| M | Card member Name, Billing Address and Postal Code match |
| O | Card member Name and Billing Address match |
| K | Card member Name matches |
| D | Card member Name incorrect, Billing Postal Code matches |
| E | Card member Name incorrect, Billing Address and Postal Code match |
| F | Card member Name incorrect, Billing Address matches |
| W | No, Card member Name, Billing Address and Postal Code are all incorrect |
 

<!--
type: tab
title: DISCOVER/JCB
-->

##### AVS Result Code - DISCOVER/JCB

| Value | Description |
| ------- | ------- |
| A | Street address matches, postal code does not match |
| G | Address information not verified for international transaction |
| N | No match; neither the street addresses nor the postal code matches |
| R | Retry, system unable to process |
| S | Service not supported |
| U | No data received from Issuer |
| W | Nine digit postal code matches, address does not match |
| X | All digits match (nine digit zip code) |
| Y | Both address and five digit postal code match |
| Z | Five digit postal code matches, address does not match


<!-- type: tab-end -->
