# PayPal-Refund

## Overiew

A refund allows you to return funds to a customer in reference to a specific transaction. There are cases when you want to return a customer’s money – either the whole amount or just a portion of it.

In order to perform a refund, you must know the transaction ID number. This ID number identifies the transaction in Commerce Hub's systems. You can easily retrieve this number while performing the transaction, for example:



<$status = $client->paypalSale($paypal_params);
$id_sale = $status['id_sale'];>


See the Single transaction page for more details on performing a single sale.
Usually merchants store such ID numbers in their database. This way they do not have to store any sensitive data, yet they are still able to refer to a specific transaction.

Now prepare the required data required and perform the refund (call the refund method.). Note that you can provide the amount of the transaction or less; if you enter a greater value than the transaction amount, you will receive an error message. You can also specify the refund’s reason and currency. To view the currency table, click here.

Just like with any other transaction, you can also check whether the refund was performed successfully by calling the isSuccess method.
Retrieving the refund ID number (or error details, if anything goes wrong) is also very simple and can be done as shown below.



$refund_params = array(
    'id_sale'  => $id_sale,
    'amount'   => 9.99,
    'reason'   => 'Partial refund',
);

try {
    $status = $client->refund($refund_params);
} catch (Exception $e) {
    // handle exceptions here
}

if ($client->isSuccess()) {
    echo "Success, id_refund: {$status['id_refund']} \n";
} else {
    die("Error ID: {$status['error']['id_error']}, \n".
        "Error number: {$status['error']['error_number']}, \n".
        "Error description: {$status['error']['error_description']}");
}

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [PayPal]

---
