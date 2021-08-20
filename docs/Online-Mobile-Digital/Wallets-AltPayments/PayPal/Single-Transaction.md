# Single-Transaction


## Overview

PayPal allows merchants to process single transactions using on the platform. In order to process a single transaction,  prepare all the data required to perform the transaction as follows:

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
Now simply perform the transaction using the `paypalSale` method.

You can check whether the transaction was performed successfully by calling the `isSuccess` method.
Retrieving the transaction ID number (or error details, if anything goes wrong) is also very simple and can be done as shown below.

If the `paypalSale` method was performed successfully, you can redirect the customer to the PayPal’s website, where they’ll perform the payment. Use the URL returned by the `paypalSale`.

```java

try {
    $status = $client->paypalSale($paypal_params);
} catch (Exception $e) {
    // handle exceptions here
}  

if ($client->isSuccess()) {
    echo "Success, id_sale: {$status['id_sale']} \n";
} else {
    die("Error ID: {$status['error']['id_error']}, \n".
        "Error number: {$status['error']['error_number']}, \n".
        "Error description: {$status['error']['error_description']}");
}

header('Location: ' . $status['redirect_url']);
die;

```

After submitting the payment on the PayPal’s website, the customer will be redirected back to your site (the back_url, to be precise). You should now verify the returned information to avoid any fraud attempts and check the transaction’s status.

```java

$salt        = 'YOUR_HASH_SALT';
$status      = $_GET['status'];
$description = $_GET['description'];
$amount      = $_GET['amount'];
$currency    = $_GET['currency'];
$hash        = $_GET['hash'];

$id = '';
if ($status !== 'ERROR') // success, get id_sale
    $id = $_GET['id_sale'];

$calc_hash = sha1("{$salt}|{$status}|{$description}|{$amount}|{$currency}|{$id}");

// check hash salt
if ( $calc_hash !== $hash ) {
    die ("Error, wrong hash");
}

 // check transaction status
switch ($status) {
    case 'PERFORMED':
        echo "Success, transaction completed, id_sale: {$_GET['id_sale']}";
        break;
       
    default:
        die("Error, transaction declined, {$_GET['error_description']}");
        break;
}

```

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [PayPal](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/PayPal/PayPal.md)

---
