---
label: Queries, Alerts and Dashboards
order: -2
---

# Queries, Alerts and Dashboards

---

This section is a quick start on how to define Queries, Alerts and Dashboards with the Baselime CLI.

Baselime is based on Observability as Code: defining your observability configurations as code, rather than point-and-click web UIs. Baselime entire platform is driven by YAML files that you can track in your version control.

Create a `.baselime` folder in the root of your project folder, and use it to define queries, alerts and dashboards.

```bash # :icon-terminal: terminal
baselime init
```

You can use the CLI to apply your observability configurations.

```bash # :icon-terminal: terminal
baselime apply
```

---

## Queries

You can create queries using any YAML file in the `.baselime` folder.

```yaml # :icon-code: .baselime/demo.yml
lambda-duration:
  type: query
  properties:
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
        - message := RESPONSE
```

---

## Channels

You can create channels that are destinations where Baselime can send messages. For instances, messages when an alert is trigerred.

```yaml # :icon-code: .baselime/demo.yml
developers:
  type: channel
  properties:
    type: email
    targets:
      - mail1@mail.com
      - mail2@mail.com 
```

---

## Alerts

You can create an alert based on queries. You can reference the query and the channels with the `!ref` function.

For instance, this alert will check the results of a query `lambda-duration` on a 5 minutes frequency, querying data for the past 5 minutes, and if the result of the query exceed a threshold, it will send a message to the channels specified.

```yaml # :icon-code: .baselime/demo.yml
critical-response-time:
  type: alert
  properties:
    name: It takes too long to respond to requests
    parameters:
      query: !ref lambda-duration
      threshold: :> 2000
      frequency: 5
      duration: 5
    channels:
      - !ref developers 
```

---

## Charts

Baselime empowers you to create dynamic charts to display the results of queries.

```yaml # :icon-code: .baselime/demo.yml
lambda-duration-chart:
  type: chart
  properties:
    type: timeseries
    name: The response time of the Lamdba functions
    parameters:
      query: !ref lambda-duration
      duration: 15
```

---

## Dashboards

A dashboard is a collection of charts that can be used to monitor the health of an sub-set of an application.

```yaml # :icon-code: .baselime/demo.yml
main-dashboard:
  type: dashboard
  properties:
    name: Main dashboard
    charts:
      - !ref lambda-duration-chart
```
