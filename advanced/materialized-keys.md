---
label: Materialized Keys
order: -3
---

# Materialized Keys in Baselime [Coming Soon]

Materialized keys in Baselime allow you to calculate and create new keys from existing keys in your events. These new keys are based on calculations performed on one or multiple existing keys, which must be of type `number`.

By creating materialized keys, you can gain additional insights into your data and make it easier to track and analyze specific metrics.

To create a materialized key, you can use the `baselime keys materialize` command and specify the key name and calculation you want to perform. For example

```bash # :icon-terminal: terminal
baselime keys materialize --name "total_revenue" --calculation "event.price * event.quantity" --dataset lambda-logs
```

This will create a new materialized key called `total_revenue` which is the result of multiplying the `price` and `quantity` keys in your events in the dataset `lambda-logs`.

Once you have created a materialized key, it will automatically be included in all your events going forward. You can view and manage your materialized keys in the [Baselime console](https://console.baselime.io).

!!!
It's important to note that materialized keys are only recalculated when a new event is ingested, so any changes to the calculation or the underlying keys will not be reflected in historical data.
!!!

---

## Syntax

Materialized keys are calculated keys that are generated based on one or multiple existing keys in your events. Materialized keys can only be generated from existing keys of type number.

!!!warning
Materialized keys can only take existing `key`s of type `number`.
!!! 


In Baselime, you can create Materialized Keys through the following operations:

### Basic arithmetic operations

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`

### Advanced operations

- Modulo: `%`
- Exponentiation: `^`

### Trigonometric operations

- Sine: `sin`
- Cosine: `cos`
- Tangent: `tan`
- Inverse Sine: `asin`
- Inverse Cosine: `acos`
- Inverse Tangent: `atan`

---

## Creating materialized keys

To create a Materialized Key, you can use the `baselime keys materialize` command and specify the operation you want to perform on the existing keys. For example:

```bash # :icon-terminal: terminal
baselime keys materialize --operation="key1 + key2" --name="materialized_key" --dataset lambda-logs
```

This command will create a Materialized Key called `materialized_key` in the dataset `lambda-logs` that is the result of adding `key1` and `key2`.

You can also use multiple operations and keys to create more complex Materialized Keys. For example:

```bash # :icon-terminal: terminal
baselime keys materialize --operation="(key1 + key2) * key3" --name="materialized_key" --dataset lambda-logs
```

This command will create a Materialized Key called `materialized_key` that is the result of adding `key1` and `key2`, and then multiplying that result with `key3`.

Once you have created a Materialized Key, you can use it just like any other key in your queries and alert rules.

## Examples

Here are some examples of how you can use materialized keys in your events:

- Calculate the average response time for an API by dividing the total response time by the number of requests
- Calculate the total revenue for an e-commerce store by multiplying the `price` and `quantity` keys for each order
- Calculate the conversion rate for a marketing campaign by dividing the number of conversions by the number of impressions

You can use these materialized keys to set up alerts, create dashboards, and run queries to gain deeper insights into your data.

---

## Troubleshooting

If you encounter any issues with materialized keys, here are a few things you can try:

- Check the syntax of your calculation to make sure it is correct
- Make sure that all the keys used in your calculation exist in your events and are of type `number`
- If you are using multiple keys, make sure they are all present in every event
- If you are still experiencing issues, you can contact the [Baselime support team](https://join.slack.com/t/baselimecommunity/shared_invite/zt-1eu7l0ag1-wxYXQV6Fr_aiB3ZPm3LhDQ) for help.

