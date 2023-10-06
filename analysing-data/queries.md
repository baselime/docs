---
label: Queries
order: 0
---

# Queries

Queries are the primary way of interacting with your data in Baselime.

## Queries in the Console

You can run queries in the [Baselime console](https://console.baselime.io) by navigating to your service and clicking on the New Query button. This brings up the Visual Query Editor.

To execute a query, click the Run Query button. The query results will be displayed in visually and in a table below the editor.

[!embed](https://www.youtube.com/watch?v=QuLT55XqJsE)

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
