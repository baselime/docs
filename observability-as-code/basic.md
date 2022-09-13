---
label: Basic Observability as Code
order: -1
---

For every application, developers must create a `index.yml` file in the root of the `.baselime` folder. This file is used to specify metadata on the application. This can be initialised with the Baselime CLI.

``` bash # :icon-terminal: terminal
baselime init
```

This is an interactive command to initialise the `.baselime` folder. The command prompts the user for a list of serverless functions that are part of the application being initialised.

Once the `.baselime` folder has been initialised, Observability as Code configurations can be defined in any `YAML` file in the `.baselime` folder or any of its subfolder.

!!!warning 
It should be noted that the Baselime CLI reserves a `.out` folder at the root of the `.baselime` folder where OaC configurations will be ignored.
!!!

The following example shows a simple example of the files present within the `.baselime` folder.

+++ index.yml

```yaml # :icon-code: .baselime/index.yml
version: 0.0.15
application: users-management
provider: aws

infrastructure:
  functions:
    - function-A
    - function-B
```

+++ demo.yml


```yaml # :icon-code: .baselime/demo.yml
lambda-invocations-durations:
  type: query
  properties:
    name: The duration of lambda invocations
    description: Statistics on the duration of lambda invocations across the stack
    parameters:
      dataset: logs
      calculations:
        - MAX(@duration)
        - MIN(@duration)
        - AVG(@duration)
        - P99(@duration)
      filters:
        - "@type = REPORT"
      groupBy:
        type: number
        value: "@memorySize"

long-lambda-invocations:
  type: alert
  properties:
    name: Lambda invocations lasted more than 15seconds
    parameters:
      query: !ref lambda-invocations-durations
      frequency: 30
      duration: 30
      threshold: "> 15000"
    channels:
      - !ref developers

developers:
  type: channel
  properties:
    type: email
    targets:
      - email@email.com

lambda-invocations-durations-chart:
  type: chart
  properties:
    type: timeseries
    name: A random chart
    parameters:
      query: !ref lambda-invocations-durations
      duration: 15

main-dashboard:
  type: dashboard
  properties:
    name: Main dashboard
    charts:
      - !ref lambda-invocations-durations-chart

```

+++

---
## Observaility as Code

[!ref index](./reference/root.md)
[!ref queries](./reference/queries.md)
[!ref alerts](./reference/alerts.md)
[!ref channels](./reference/channels.md)
[!ref charts](./reference/charts.md)
[!ref dashboards](./reference/dashboards.md)
