---
label: Basic Observability as Code
order: -1
---

The following example describes a simple query checking statistics of the execution cold start duration of a couple of Lambda functions and sets an email alert when the cold starts exceed a threshold. This is just to give a sense of the overall structure of a `.baselime.yml` file.


```yaml # .baselime.yml
version: 0.0.1
application: demo
description: demo app

queries:
  cold-start-durations:
    name: lambda functions cold start duration
    parameters:
      dataset: logs
      namespaces:
        - functionA
        - functionB
      calculations:
        - P99(@initDuration)
alerts:
  error-cold-starts:
    name: Execssive cold start durations
    parameters:
      query: cold-start-durations
      threshold:
        operation: ">"
        value: 2000
      frequency: 10
      duration: 10
    destinations:
      - type: email
        target: me@acme.com
```


## Observaility as Code

[!ref root](./reference/root.md)
[!ref queries](./reference/queries.md)
[!ref alerts](./reference/alerts.md)
