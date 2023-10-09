---
label: Queries
order: 0
---

# Queries

Queries are the building blocks of all interactions with your telemetry data on Baselime. When you view a request or a trace, it's the result of a query.

You can run queries both in the [Baselime console](https://console.baselime.io) and using the [Baselime CLI](../cli/install.md).

## Queries in the Console

From anywhere in the [Baselime console](https://console.baselime.io) you can start a new query by clicking on the "New query" button.

You can use the query builder to construct queries to explore your data, investigate issues and resolve performace bottlenecks. The query builder is aware of your observability data and will recommend values such that you always query within the context of your data.

![Sending AWS App Runner logs to Baselime](../../assets/images/illustrations/analyzing-data/queries/builder.png)

---

## Queries in the CLI

You can also run queries using the Baselime CLI. To do so, use the `baselime query` command.

Use the `baselime query` without any flags to enter interactive mode where you can specify all the arguments of your query interactively.

```bash # :icon-terminal: terminal
baselime query
```

You can also run saved queries using the CLI, either in interactive mode or by passing the arguments as flags

```bash # :icon-terminal: terminal
baselime query --service my-service --id my-query
```

You can also save your query results to a file. Use the `--format` to print the results of the query in JSON, and pipe them to a file.

```bash # :icon-terminal: terminal
baselime query --format json > results.json
```

For more advanced usage of the baselime query command, please refer to the [CLI reference](../cli/reference//query.md).
