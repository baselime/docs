---
label: Queries, Alerts and Dashbaords
order: -2
---

# Queries, Alerts and Dashboards

---

This section is a quick start on how to define Queries, Alerts and Dashboards with the Baselime CLI.

Baselime supports Observability as Code: defining your observability configurations as code, rather than clicking in a web UI. The entire platform is driven by YAML files that you can track in your version control.

Create a `.baselime.yml` file in the root of your project folder, and use it to define queries, alerts and dashboards.

```bash #
baselime init
```

You can use the CLI to apply your observability configurations.

```bash #
baselime apply
```

All queries, alerts and dashboards created in the web UI can be exported as YAML files.

---

## Queries

This is a sample query which returns the maximum `@duration` from three namespaces (`my-function-name-1`, `my-function-name-2` and `my-sns-topic-1`)  for events matching a set of filters and grouped by `status`.

```yaml # .baselime.yml
version: 0.0.0.1

application: sample-application
description: Sample Description

queries:
  - ref: sample-query
    name: Sample Query
    description: Sample query description
    namespaces:
      - type: lambda
        value: "my-function-name-1"
      - type: lambda
        value: "my-function-name-2"
      - type: sns
        value: "my-sns-topic-1"
    calcultations:
      - operator: MAX
      - key: "@duration"
      - type: number
    filters:
      - key: "error.code"
        type: string
        operation: "="
        value: "ValidationException"
      - key: "@billedDuration"
        type: number
        operation: ">"
        value:
          key: "@initDuration"
          type: "number"
    groupBy:
      - type: string
        key: "status"
```

---

## Alerts

You can now create an alert based on the previous query. Reference the query ID with the `!ref` function.

```yaml .baselime.yml
version: 0.0.0.1

application: sample-application
description: Sample Description

queries:
  - ref: sample-query
    # ... query parameters ... #

alerts:
  - ref: sample-alert
    name: Sample alert
    description: Sample alert description
    query: !ref sample-query
    threshold:
      operator: ">"
      value: 5
    frequency: 3600
    destinations:
      - type: email
        target: test@acme.com
      - type: slack
        target: "#devs" 
```

---

## Dashboards

Under construction