---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, Getting Started]
---

# 3-D Secure Verification

Once a customer completes a challenge form, a verification request must be submitted to verify the result of the challenge form.

<!--
type: tab
titles: Request Variables
-->

The below table identifies the parameters in the request.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `?` | *string* | N/A | ? |

<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
>**POST** `/3ds/v1/verify`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a 3DS verification payload request.

```json
{

}
```

<!---
[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/3ds/v1/verify)
-->

<!--
type: tab
-->

##### Example of a 3DS verification (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{

}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/3ds/v1/verify)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)
- [3-D Secure: Secure Data Capture](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Secure-Data-Capture.md)
- [3-D Secure Authentication Request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Authentication.md)
- [3-D Secure Request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Request.md)

---
