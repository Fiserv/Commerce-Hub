---
tags: [Payment Sources, Network Token, Paze, Alternate Payments, Wallet, Online]
---

# Paze Checkout: Error handling

Commerce Hub's Paze Checkout errors can be handled via the `.catch` method of the returned Promise for each operation *(initialization, selection, submission)*.

**Error sources:**

- **ValidationError:** Integration bugs
- **HttpError:** Commerce Hub API errors
- **PazeError:** Paze errors
- **GeneralError:** Various, Resource loading failed

---

## Error types

The tables below outline response data for the different error types. Each error also includes `method toString()` to format the error into a human-readable representation of the error data for debugging purposes.

<!--
type: tab
titles: HttpError, ValidationError, GeneralError, PazeError
-->

HTTP errors are Commerce Hub errors.

| Field | Type | Details |
| ----- | :-----: | ----- |
| `name` | *string* | *HttpError* |
| `message` | *string* | HTTP status code and status text concatenated together with a space delimiter |
| `response` | *object* | HTTP response details object containing `statusCode`, `statusText` and `body` |
| `response::statusCode` | *string* | HTTP status code |
| `response::statusText` | *string* | HTTP status text |
| `response::body` | *string* | The response body deserialized as JSON |

<!--
type: tab
-->

Validation errors are integration bugs.

| Field | Type | Details |
| ----- | :-----: | ----- |
| `name` | *string* | *ValidationError* |
| `message` | *string* | Textual error code |
| `errors` | *array* | String of human-readable error messages for different fields that failed validation |

<!--
type: tab
-->

General errors can come from a multiple sources.

| Field | Type | Details |
| ----- | :-----: | ----- |
| `name` | *string* | String name for the type of error with default *GeneralError* |
| `message` | *string* | Textual error code |


<!--
type: tab
-->

Paze errors can come from Paze.

| Field | Type | Details |
| ----- | :-----:| ----- |
| `name` | *string* | *PazeError* |
| `message` | *string* | Textual error code |
| `description` | *string* | Human-readable summary of the error |
| `additionalDebuggingDetails` | *array* | An array of objects containing `location` and `message` string fields, only included if applicable |
| `isRetryable` | *boolean* | Whether or not Paze suggests retrying the operation once before falling back to a different payment method other than Paze |

<!-- type: tab-end -->

---

## Error scenarios

The following table outlines different error scenarios.

| Case | Step | `name` | `message` |
| ----- | ----- | ----- | ----- |
| Initialization configuration failed validations | Initialization | *ValidationError* |(error code): BAD_PAZE_CONFIG |
| Failed to load third-party Paze script | Initialization | *GeneralError* | (error code): SCRIPT_LOAD_ERROR |
| failed to fetch third-party Paze configuration | Initialization | *HttpError* | N/A |
| Paze initialization failed | Initialization | *PazeError* | N/A |
| `selectPaymentMethod` transaction data failed validations | selectPaymentMethod | *ValidationError* | (error code): BAD_PAZE_TRANSACTION_DATA |
| `selectPaymentMethod` Paze user experience interrupted | selectPaymentMethod | *PazeError* | (error code): INCOMPLETE |
| `selectPaymentMethod` Failed to decode Paze provided user/card metadata | selectPaymentMethod | *GeneralError* | (error code): FAILED_TO_DECODE_PAZE_RESPONSE |
| `selectPaymentMethod` invoked more than once but only one card is available in end-user Paze wallet | selectPaymentMethod | *PazeError* | (error code): NO_ALTERNATE_CARD |
| `selectPaymentMethod` miscellaneous Paze errors | selectPaymentMethod | *PazeError* | N/A |
| `submit` no payment method selected | Submission | *GeneralError* | (error code): NO_PAYMENT_METHOD_SELECTED |
| `submit` transaction data is provided again, possibly different than during selection of card, and failed validations | Submission | *ValidationError* | (error code): BAD_PAZE_TRANSACTION_DATA |
| `submit` failed due to Paze-related error | Submission | *PazeError* | N/A |
| `submit` failed during submission to Commerce Hub API | Submission | *HttpError* | N/A |

---

## Paze error codes

The below table outlines the possible Paze error codes.

| Code | Additional details |
| ----- | ----- |
| UNABLE_TO_CONNECT | |
| SERVER_ERROR | |
| SERVICE_ERROR | |
| AUTH_ERROR | |
| NOT_FOUND | |
| RATE_LIMIT_EXCEEDED | |
| INVALID_REQUEST | |
| MISSING_PARAMETER | Should not occur, validations are performed by Commerce Hub prior to submission to Paze |
| INVALID_PARAMETER | Should not occur, validations are performed by Commerce Hub prior to submission to Paze |
| REQUEST_TIMEOUT | |
| UNKNOWN_ERROR | |
| ACCT_INACCESSIBLE | |
| CLIENT_DATA_INVALID  | |
| INCOMPLETE | Defined by Commerce Hub, normalized from a Paze error scenario |
| NO_ALTERNATE_CARD |  Defined by Commerce Hub, normalized from a Paze error scenario |

---

## See also

- [Paze Checkout Integration Guide](?path=docs/Resources/Guides/Payment-Sources/Paze/Paze-Checkout.md)
- [Checkout Solutions](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)
- [Checkout Version Release Notes](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/SDC-Version-Release.md)

---
