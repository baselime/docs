---
label: Alerts
order: -2
---

# ORL Alerts

ORL (Observability Reference Language) alerts are used to monitor data from various datasets and trigger notifications when specific conditions are met. ORL alerts are defined by a set of properties that specify the characteristics and behavior of the alert. They are based on ORL queries, which are used to retrieve and analyze the data. This allows you to monitor your systems and services and be notified when there are issues or anomalies that require attention.


!!!warning Warning
Note that an alert can only be set for queries that include calculations. It is not possible to set an alert for a query that does not have any calculations.
!!!

## properties

ORL alerts have a set of properties that define the alert's characteristics and behavior.


### name (optional)

The `name` of the ORL alert is a string used to identify the alert. It can be a human-readable name that describes the purpose of the alert.

Example:

```yaml # :icon-code: .baselime/resources.yml
name: High request latency alert
```

---

### description (optional)

The `description` of the ORL alert is a string that provides more information about the alert. It can include details about the data being monitored, the conditions or thresholds being checked, and any other relevant information.

Example:

```yaml # :icon-code: .baselime/resources.yml
description: This alert triggers when the average request latency exceeds 500ms for more than 5 minutes.
```

---

### enabled (optional)

The `enabled` property is a boolean that specifies whether the ORL alert is currently active or inactive. If set to true, the alert will be triggered when the conditions or thresholds are met. If set to false, the alert will be disabled and will not trigger.

```yaml # :icon-code: .baselime/resources.yml
enabled: true
```

---

### parameters

The `parameters` of an ORL alert define the query to use, the frequency at which the query is run, the window of time over which the query's results are analyzed, and the threshold or condition that triggers the alert.

#### query

The `query` parameter is a reference to an ORL query that defines the data to be monitored for the alert. It is specified as a string in the format `!ref query_name`, where `query_name` is the name of the ORL query.

Example:

```yaml # :icon-code: .baselime/resources.yml
query: !ref request-latency
```

---

#### frequency

The `frequency` parameter is a string that specifies how often the alert is checked. It can follows the format `number time_unit`, where `number` is a positive integer and `time_unit` is one of the following:

- `mins` / `minutes`: minutes
- `h` / `hours`: hours
- `d` / `days`: days
- `months`: months
- `y` / `years`: years

The `frequency` can also be defined as a cron expression, following the [AWS Cron Reference](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchevents-expressions.html)

Examples:

`15 10 * * ? *`: 10:15 AM (UTC) every day
`0 18 ? * MON-FRI *`: 6:00 PM Monday through Friday
`0 8 1 * ? *`: 8:00 AM on the first day of the month
`0/10 * ? * MON-FRI *`: Every 10 min on weekdays
`0/5 8-17 ? * MON-FRI *`: Every 5 minutes between 8:00 AM and 5:55 PM weekdays
`0 9 ? * 2#1 *`: 9:00 AM on the first Monday of each month


The alert is checked at the specified interval, and if the conditions are met, the alert is triggered.

Example:

```yaml # :icon-code: .baselime/resources.yml
frequency: 30mins
```

---

#### window

The `window` parameter is a string that specifies the time window to consider for the alert. It follows the same format as the frequency parameter, but cannot be defined as a CRON expression.

The alert is only triggered if the conditions are met within the specified time window.

Example:

```yaml # :icon-code: .baselime/resources.yml
window: 30mins
```

---

#### threshold

The `threshold` parameter is a string that specifies the threshold at which the alert is triggered. It is a value that inculdes the comparison and the value (e.g. `< 5`).

The threshold is compared to the result of the first calculation in the query of the alert. If the result meets the specified condition, the alert is triggered.

The following comparison operators are supported:

- `=`: Equals
- `!=`: Does not equal
- `>`: Greater than
- `>=`: Greater than or equal to
- `<`: Less than
- `<=`: Less than or equal to

Example:

```yaml # :icon-code: .baselime/resources.yml
threshold: < 5
```

---

### channels

The `channels` parameter is an array of objects that specify the channels to send the alert to. ORL supports the following types of channels:

`slack`: Sends the alert to a Slack channel
`email`: Sends the alert to an email address
`pagerduty`: Triggers a PagerDuty incident
`webhook`: Sends the alert to a custom webhook URL

Each channel type has its own set of properties that define the behavior of the channel.

#### slack

The `slack` channel type sends the alert to a Slack channel. It has the following properties:

`targets`: An array of strings that specify the Slack channels to send the alert to. Each string should be the name of a Slack channel (e.g. general).
Example:

```yaml # :icon-code: .baselime/resources.yml
channels:
  - type: slack
    targets:
      - 'alerts'
      - 'errors'
```

Note that it is necessary to install the [Baselime Slack app](https://baselime.slack.com/apps/A03U3KEAM29-baselime?tab=more_info) and follow the Slack onboarding to get alerts on Slack. 

---

#### email

The `email` channel type sends the alert to an email address. It has the following properties:

`targets`: An array of strings that specify the email addresses to send the alert to. Each string should be a valid email address.

Example:

```yaml # :icon-code: .baselime/resources.yml
channels:
  - type: email
    targets:
      - 'alerts@example.com'
      - 'ops@example.com'
```

---

#### pagerduty **[Coming Soon]**

The `pagerduty` channel type triggers a PagerDuty incident. It has the following properties:

`serviceKey`: A string that specifies the PagerDuty service key to use for the incident. This key is used to identify the PagerDuty service that the incident should be created in.
`eventAction`: A string that specifies the action to take when creating the PagerDuty incident. Valid values are trigger (default) and resolve.
`client`: A string that specifies the name of the client that the incident should be associated with. This is optional and can be used to provide context for the incident.
`clientUrl`: A string that specifies the URL of the client that the incident should be associated with. This is optional and can be used to provide context for the incident.

Example:

```yaml # :icon-code: .baselime/resources.yml
channels:
  - type: pagerduty
    serviceKey: 'abc123'
    eventAction: 'trigger'
    client: 'Example App'
    clientUrl: 'http://example.com'
```

---

#### webhook

The `webhook` channel type sends the alert to a custom webhook URL. It has the following properties:

`url`: A string that specifies the URL to send the alert to.
`method`: A string that specifies the HTTP method to use when sending the alert. Valid values are POST (default) and GET.
`headers`: An object that specifies the headers to include in the request.
`body`: A string or object that specifies the body of the request. If a string is provided, it will be sent as-is. If an object is provided, it will be serialized as JSON and sent as the request body. **(Coming Soon)**

Example:

```yaml # :icon-code: .baselime/resources.yml
channels:
  - type: webhook
    url: 'http://example.com/webhook'
    method: 'POST'
    headers:
      'Content-Type': 'application/json'
    body:
      message: 'This is an alert from ORL' # Coming soon
```

---


### Example ORL Alerts

Here are example ORL alerts that combine all of the above properties.

#### DynamoDB ConsumedWriteCapacityUnits Alert

This alert is triggered when the ConsumedWriteCapacityUnits metric for a DynamoDB table exceeds a specified threshold over a specified time window.

1. The alert is set to run every 15 minutes and check the metric over the past hour.
2. If the ConsumedWriteCapacityUnits exceed 5 over the past hour, the alert is triggered.
3. The alert is sent to a Slack channel called `#dynamodb-alerts`.

``` yaml # :icon-code: .baselime/resources.yml
dynamodb-capacity-alarm:
  type: alert
  properties:
    name: DynamoDB Capacity Alarm
    description: >
      The average consumed read capacity for the dynamodd tables has exceeded 5 units over the past hour.
    enabled: true
    parameters:
      query: !ref dynamodb-capacity-query
      frequency: 15mins
      window: 1h
      threshold: '> 5'
    channels:
      - type: slack
        targets:
          - 'dynamodb-alerts'
```

---

#### Lambda Timeout Alarm

This alert checks the number of invocations that have timed out for Lambda functions in the service, and triggers if the count exceeds 10 over the past 15 minutes. It sends a notification to a custom webhook URL every 5 minutes.

``` yaml # :icon-code: .baselime/resources.yml
lambda-timeout-alarm:
  type: alert
  properties:
    name: Lambda Timeout Alarm
    description: The prod-vortex-function Lambda function has exceeded 10 timeouts over the past 15 minutes.
    enabled: true
    parameters:
      query: !ref lambda-timeout-query
      frequency: 5mins
      window: 15mins
      threshold: "> 10"
    channels:
      - type: webhook
        url: https://example.com/alerts
```

