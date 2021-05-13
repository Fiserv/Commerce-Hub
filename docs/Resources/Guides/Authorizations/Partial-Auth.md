# Partial Authorizations

Definition.

## Network Details

<!--
type: tab
title: networkDetails
-->


| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `partialAuthDetails` | *object* | | [Partial authorization](?path=docs/Resources/Guides/Authorizations/Partial-Auth.md) details. |
| `interchangeComplianceIndicator` | *string* | | A code to indicate that Mastercard interchange compliance data was provided for this transaction, and if any other special Mastercard authorization requirements were met. |
| `bankNetRefNumber` | *string* | | A Mastercard generated identifier for each original authorization request. Reference number assigned by Mastercard to each authorization message. |
| `bankNetDate` | *string* | | A Mastercard generated date for this transaction. MMDD format. |
| `cvcIndicator` | *string* | | Indicates the CVC response data. |
| `partialAuthTransactionID` | *string* | | Generated identifier unique for each original authorization request. |
| `validationCode` | *string* | | A code calculated by Visa to ensure that the fields present in the authorization are also present in the clearing record. |
| `totalAuthAmount` | *string* | | Total amount authorized. |
| `downgradeReason` | *string* | | Downgrade reason as supplied by Visa. |
| `creditAuthType` | *string* | | Indicates the type of authorization required. |
| `authScore` | *string* | | The auth score returned for the transaction. |


The beginning of an awesome article...

## Partial Auth Details
 PartialAuthDetails:
      x-model-version: 1.0
      description: 'Partial authorization reponse details.'
      properties:
        interchangeComplianceIndicator:
          type: string
          description: 'A code to indicate that Mastercard interchange compliance data was provided for this transaction, and if any other special Mastercard authorization requirements were met.'
          example: 'A'
        bankNetRefNumber:
          type: string
          description: 'A Mastercard generated identifier for each original authorization request. Reference number assigned by Mastercard to each authorization message.'
          example: ''
        bankNetDate:
          type: string
          description: 'A Mastercard generated date for this transaction. MMDD format'
          example: '0310'
        cvcIndicator:
          type: string
          description: 'Indicats the CVC response data.'
          example: 'Y'
        partialAuthTransactionId:
          type: string
          description: 'Generated identifier unique for each original authorization request.'
          example: ''
        validationCode:
          type: string
          description: 'A code calculated by Visa to ensure that the fields present in the authorization are also present in the clearing record.'
          example: ''
        totalAuthAmount:
          type: string
          description: 'Total amount authorized.'
          example: '1.00'
        downgradeReason:
          type: string
          description: 'Downgrade reason as supplied by Visa.'
          example: 'ACCOUNT_NUMBER_MISSING'
        creditAuthType:
          type: string
          description: 'Indicates the type of authorization required.'
          example: 'DISCOVER'
        authScore:
          type: string
          description: 'The auth score returned for the transaction.'
          example: ''

          ```

          ---

<!-- type: tab-end -->

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)