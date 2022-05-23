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
alerts:
  critical-response-time:
    name: it takes too long to respond to requests
    parameters:
      query: response-time
      threshold:
        operation: ">"
        value: 2000
      frequency: 5
      duration: 5
    channels:
      - developers

channels:
  developers:
    type: email
    targets:
      - mail1@mail.com
      - mail2@mail.com 
```


## Observaility as Code

[!ref root](./reference/root.md)
[!ref queries](./reference/queries.md)
[!ref channels](./reference/channels.md)
[!ref alerts](./reference/alerts.md)
