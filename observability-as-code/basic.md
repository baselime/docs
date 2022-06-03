---
label: Basic Observability as Code
order: -1
---

The following example describes a simple query checking statistics of the execution cold start duration of a couple of Lambda functions and sets an email alert when the cold starts exceed a threshold. This is just to give a sense of the overall structure of a `.baselime.yml` file.


```yaml # .baselime.yml
version: 0.0.1
application: api
description: The api that powers our web application

queries:
  lambda-invocation-duration:
    name: Duration of the lambda execution
    description: How long does it take to execute the lambda function?
    parameters:
      dataset: logs
      calculations:
        - MAX(@duration)
        - MIN(@duration)
        - AVG(@duration)
        - P99(@duration)

alerts:
  critical-invocation-duration:
    name: Lambda invocations take more than 15 seconds
    parameters:
      query: lambda-invocation-duration
      threshold: :> 15000
      frequency: 30
      duration: 30
    channels:
      - developers

channels:
  developers:
    type: email
    targets:
      - exmple@email.com
      - exmple@email.com
```


## Observaility as Code

[!ref root](./reference/root.md)
[!ref queries](./reference/queries.md)
[!ref alerts](./reference/alerts.md)
[!ref channels](./reference/channels.md)
