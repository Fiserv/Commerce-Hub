# Processor Response Details

## Overview

  approvalStatus:
          type: string
          description: 'Final status of the transaction.'
          example: APPROVED, WAITING, VALIDATION_FAILED, PROCESSING_FAILED, DECLINED
        approvalCode:
          type: string
          description: 'Approval code from the processor.'
          example: 'OK3483'
        authenticationResponseCode:
          type: string
          description: 'Response code from authentication.'
        referenceNumber:
          type: string
          description: 'Transaction reference number.'
          example: '845366457890-TODO'
        schemeTransactionId:
          type: string
          description: 'Brand transaction ID.'
          example: '019078743804756'
        feeProgramIndicator:
          type: string
          description: 'Contains the Fee Program Indicator (FPI) code that may be returned on Debit or PLDebit transaction response.'
          example: '123'
        processor:
          type: string
          maxLength: 256
          description: 'Card processor.'
          example: 'fiserv'
        responseCode:
          type: string
          description: 'Normalized transaction response code from the gateway (Commerce Hub Response).'
          example: '00000'
        responseMessage:
          type: string
          description: 'Normalized transaction message from the gateway (Commerce Hub Response).'
          example: 'APPROVAL'
        hostResponseCode:
          type: string
          description: 'Endpoint or issuer response code.'
          example: '00'
        hostResponseMessage:
          type: string
          description: 'Endpoint or issuer response message.'
          example: 'APPROVAL'
        localTimestamp:
          type: string
          description: 'Transaction timestamp in local time.'
          example: '2021.02.25 14:14:38 (EST)'
        bankAssociationDetails:
          $ref: '#/components/schemas/BankAssociationDetails'

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Host Response Codes](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md)
- [Gateway Response Codes](?path=docs/Resources/Guides/Response-Codes/Gateway.md)
- [Gateway Response](?path=docs/Resources/Master-Data/Gateway-Response.md)

---