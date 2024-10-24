---

tags: [carat, commerce-hub, enterprise, card-not-present, payeezy, level-2, level-3]

---

# Level 2 and Level 3 Data

<!-- theme: danger -->
> The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

## Description

Credit card processing methods fit into three levels: Level 1, Level 2 and Level 3. Each level is defined by the amount of information that is required or passed to complete a payment with Level 1 having the lowest requirements and potentially the highest costs.

Level 2 and Level 3 card data (also known as Level II and Level III) is a set of additional information that can be passed during a credit card transaction. Level 2 and Level 3 card data provides more information for business, commercial, corporate, purchasing, and government cardholders.

Credit card transactions submitted with Level 2 and Level 3 card data can obtain lower interchange rates and provide merchants with a lower processing cost. Therefore, it is in the best interest of merchants to submit Level 2 and Level 3 card data whenever possible.

### Detailed Mapping

For a comprehensive mapping of all elements from Payeezy to Commerce Hub, please reveiew the [API Element Mapping Document](?path=docs/Resources/Guides/Payeezy/Payeezy-UpgradetoCH-TechnicalAPI.md).

### Gateway Differences

Payeezy performed gateway validation on the required Description, Quantity and Unit Cost Elements; Commerce Hub does not validate that the data provided in the transaction is sufficient to qualify for specific interchange rates required by card schemes - acting as a pass through system only.

In Payeezy, a merchant could allow Level 2 and Level 3 data processing via the configuration in RPM; in Commerce Hub, Level 2 and Level 3 data processing is always allowed.

---

## See Also

- [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)

---
