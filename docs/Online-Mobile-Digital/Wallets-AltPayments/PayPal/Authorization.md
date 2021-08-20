# Authorization

## Overiew

Merchants may not wish to charge a customer for a total amount of a transaction, but only authorize a certain amount. This may be useful in some business scenarios, when you want to block funds and charge it (or a portion of the amount) later.

Prepare the data required to perform the authorization. Note that the data comes in exactly the same format as when performing a regular transaction.

```java

$paypal_params = array(
    'sale'     => array(
        'amount'      => 19.99,
        'currency'    => 'EUR',
        'description' => 'Product #1'
    ),
    'back_url'  => 'http://example-page.com',
);

```

Once the data is prepared, simply call the paypalAuthorization method (just like you would do with the paypalSale method).

You can also easily check whether the authorization was successful and retrieve the ID number – you can use it later to perform resales within the recurring payments.

```java

try {
    $status = $client->paypalAuthorization($paypal_params);
} catch (Exception $e) {
    // handle exceptions here
}

if ($client->isSuccess()) {
    echo "Success, id_authorization: {$status['id_authorization']} \n";
} else {
    die("Error ID: {$status['error']['id_error']}, \n".
        "Error number: {$status['error']['error_number']}, \n".
        "Error description: {$status['error']['error_description']}");
}

```
---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [PayPal]

---
