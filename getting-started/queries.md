---
label: Queries, Alerts and Dashboards
order: -2
---

# Queries, Alerts and Dashboards

---

This section is a quick start on how to define Queries, Alerts and Dashboards with the Baselime CLI.

Baselime supports Observability as Code: defining your observability configurations as code, rather than clicking in a web UI. The entire platform is driven by YAML files that you can track in your version control.

Create a `.baselime.yml` file in the root of your project folder, and use it to define queries, alerts and dashboards.

```bash # :icon-terminal: terminal
baselime init
```

You can use the CLI to apply your observability configurations.

```bash # :icon-terminal: terminal
baselime apply
```

All queries, alerts and dashboards created in the web UI can be exported as YAML files.

---

## Queries

You can create queries using the `.baselime.yml` file.

```yaml # :icon-code: .baselime.yml
version: 0.0.1
application: api
description: The API that powers our web application

queries:
  lambda-duration:
    name: duration of the lambda execution
    description: how long does it take to execute the lambda function?
    parameters:
      dataset: logs
      calculations:
        - MAX(@duration)
        - MIN(@duration)
        - P99(@duration)
  response-time:
    description: how longs does the handler take to process a request?
    parameters:
      dataset: logs
      calculations:
        - MAX(extra.duration)
        - MIN(extra.duration)
        - P99(extra.duration)
      filters:
       - key: message
         operation: "="
         value: "RESPONSE"
```

---

## Channels

You can create channels that are sinks where messages can be sent from Baselime

```yaml # :icon-code: .baselime.yml
version: 0.0.1
application: api
description: The API that powers our web application

queries:
  lambda-duration:
    # ... query parameters ... #

channels:
  developers:
    type: email
    targets:
      - mail1@mail.com
      - mail2@mail.com 
```

---

## Alerts

You can create an alert based on the previous query. Reference the query ID with the `!ref` function.

```yaml # :icon-code: .baselime.yml
version: 0.0.1

application: api
description: The API that powers our web application

queries:
  lambda-duration:
    # ... query parameters ... #

channels:
  developers:
    # ... channel parameters ... #

alerts:
  critical-response-time:
    name: It takes too long to respond to requests
    parameters:
      query: lambda-duration
      threshold:
        operation: ">"
        value: 2000
      frequency: 5
      duration: 5
    channels:
      - developers 
```

---

## Dashboards

Coming soon.
