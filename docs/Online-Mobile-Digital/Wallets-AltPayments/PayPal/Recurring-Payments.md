# Recurring-Payments


## Overview


Recurring payments are simply resales performed in specific time periods. You can perform them based on any conditions defined by your business model.

### Subscriptions with recurring payment profiles

Normally PayPal recurring payments require merchants to create recurring payment profiles. Such profiles allow PayPal to automatically initiate further payments according to instructions that are passed with the first transaction.

### Notification configuration:

In order to integrate PayPal recurring payments with Commerce Hub, you need to set the notifications in the PayPal account and point them to the Commerce Hub server: http://Commerce-Hub

### Creating a PayPal recurring profile:

In order to create a PayPal recurring profile, we must add a recurring structure to the first PayPal transaction. The structure will define the properties of a profile, for example:


$paypal_params = array(
    'sale'     => array(
        'amount'      => 19.99,
        'currency'    => 'EUR',
        'description' => 'Product #1'
    ),
    'back_url'  => 'http://example-page.com',
    'recurring' => array(
        'amount'     => '19.99',
        'start_date' => '2014-11-01',
        'period'     => 'month'
    ),
);
We have three parameters in the recurring structur:

amount – the amount that will be collected within every time period,
start_date – date (YYYY-MM-DD format) that defines the beginning of the cycle,
period – defines the payment frequency; acceptable values: day, week, month, year.

## Reference transactions

Reference transactions (resales that refer to previous payments) are a more flexible solution addressed to experienced merchants – they are the ones who initiate every transaction. This means that merchants have to implement such functionalities on their own.

What is more, merchants have to contact PayPal to have the reference transactions activated. An appropriate monthly turnover (e.g. USD 100 000) is required and it is PayPal’s decision whether reference transactions will be turned on.

Resales do not require all the customer/transaction information. That is why they have to refer to a single transaction performed previously.

Start with preparing the necessary information to perform a resale. In order to do that you must first retrieve the ID number of a previous transaction. This ID number identifies the transaction in Commerce Hub’s systems. You can easily retrieve this number while performing the transaction, for example:


$status = $client->paypalSale($paypal_params);
$id_first_sale = $status['id_sale'];

See the Single transaction page for more details on performing a single sale.

Although you can refer to any previous transaction ID to perform a resale, we highly recommend to refer to the most recent transaction. This approach has several advantages, for example allows to easily track the transaction flow.

Usually merchants store such ID numbers in their database. This way they do not have to store any sensitive data, yet they are still able to refer to a specific transaction.

Now, having retrieved the ID number (e.g. from your database), prepare information and perform the resale (call the resaleBySale function).

You can also check whether the transaction was performed successfully by calling the isSuccess method. Retrieving the transaction ID number (or error details, if anything goes wrong) is also very simple and can be done as shown below.


$resale_params = array(
    'id_sale'     => $id_first_sale,
    'amount'      => 99.99,
    'currency'    => 'EUR',
    'description' => 'Recurring billing product #1',
);

try {
    $status = $client->resaleBySale($resale_params);
} catch (Exception $e) {
    // handle exceptions here
}

if ($client->isSuccess()) {
    echo "Success, second id_sale: {$status['id_sale']} \n";
} else {
    die("Error ID: {$status['error']['id_error']}, \n".
        "Error number: {$status['error']['error_number']}, \n".
        "Error description: {$status['error']['error_description']}");
}

Recurring payments are just resales performed periodically. It’s your choice whether you want to do this weekly, monthly or annually; it is also possible to perform a resale e.g. when a customer reaches a certain amount that should be paid.

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)


---
