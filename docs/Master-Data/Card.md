# Payment Card

## Overview

Payment cards are part of a payment system issued by financial institutions, such as a bank, to a customer that enables its owner (the cardholder) to access the funds in the customer's designated bank accounts, or through a credit account and make payments by electronic funds transfer and access automated teller machines (ATMs).

The card component consists of following fields

## Card

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `cardData` | *string* |  | Credit Card Number or Encrypted Data. |
| `nameOnCard` | *string* |  | Cardholder name. |
| `expirationMonth` | *string* |  | 2-digit card expiration month. |
| `expirationyear` | *string* |  | 4-digit card expiration year. |
| `securityCode` | *string* |  | A card security code (CSC), card verification data (CVD), card verification number, card verification value (CVV), card verification value code, card verification code (CVC), verification code (V-code or V code), or signature panel code (SPC). |
| `securityCodeIndicator` | *string* |  | Indicates how the security code is passed. Valid Values are |

#### Valid Values: SecurityCodeIndicator

| Value | Description |
| ----- | --------- |
| NOT_SUPPORTED (Default) | Not Supported |
| PROVIDED | Security code provided in the transaction request |
| VALUE_ILLEGIBLE | Illegible value of security code |
| NOT_AVAILABLE | Security code not available |
