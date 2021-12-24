---
label: Queries, Alerts and Dashbaords
order: -2
---

# Queries, Alerts and Dashboards

---

You can defined queries and alerts in the [Baselime UI](https://baselime.io) but this section is a quick start on how to defined them with the Baselime CLI.

Baselime supports Observability as Code: defining your observability configurations as code, rather than clicking around in a web UI. The entire platform is driven by YAML files that you can track in your version control.

Create a `.baselime.yml` file in the root of your project folder, and use it to define queries, alerts and dashboards.

You can use the CLI to apply your observability configurations.

```bash #
baselime apply
```

All queries, alerts and dashboards created in the web UI can be exported as YAML files.

---

## Queries

This is a sample query which retrieves `error.code`, `status` and `message` from three namespaces (`my-function-name-1`, `my-function-name-2` and `my-sns-topic-1`) and events matching a set of filters and grouped by `status`.

```yaml # .baselime.yml
version: 0.0.0.1
application: Sample Application
description: Sample Description

queries:
  - name: Sample Query
    namespaces:
      - type: lambda
        value: my-function-name-1
      - type: lambda
        value: my-function-name-2
      - type: sns
        value: my-sns-topic-1
    fields:
      - type: string
        key: "error.code"
      - type: number
        key: "status"
      - type: string
        key: "message"
    filters:
      - key: "error.code"
        type: string
        operation: "="
        value: "ValidationException"
      - key: "@billedDuration"
        type: number
        operation: ">"
        formula:
          - value: 2
          - type: operator
            value: "*"
          - type: key
            value: "@initDuration"
    groupBy:
      - type: string
        key: "status"
```
