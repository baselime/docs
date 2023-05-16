---
label: Alerts
order: -2
---

# Baselime CDK Alerts

Alerts are used to run a query on a schedule and notify you if a threshold is crossed. This can help notify you about problems or things of interest happening in your application.

## Sample Alert Spec

Here’s a sample alert in Baselime CDK that uses all of the supported settings for defining alert in Baselime. Use it to get started creating your own alert.

```typescript # :icon-code: index.ts 
import { Alert } from "@baselime/cdk";

new Alert("sign-up-errors", {
  // Provide a description for the alert - optional
  description: `Notify me when ever an error happens whilst a user is signing up`,
  // disable the alert - optional
  enabled: true,
  parameters: {
    // run the sign up query - this query can also be inlined
    query: signUpErrorQuery,
    // trigger if the querys calculation is greater than 10
    threshold: threshold.gt(10),
    // run this alert every 30 minutes
    frequency: '30 mins',
    // look back over the last 30 minutes of data
    window: '30 mins',
  },
  // route the alert slack or webhook
  channels: [{ targets: ['baselime-alerts'], type: 'slack' }]
});
```

---

## properties

#### description (optional)

The description of the alert is a string that provides more information about the alert. It can include details about the conditions being monitored and any other relevant information.

Example:

```typescript # :icon-code: index.ts 
description: "Notify me whenever an error happens while a user is signing up."
```

#### enabled (optional)

The enabled property is a boolean that indicates whether the alert is enabled or disabled. If set to true, the alert will be active and trigger notifications when conditions are met. If set to false, the alert will be inactive and no notifications will be sent.

Example:

```typescript # :icon-code: index.ts
enabled: true
```

### parameters

The parameters of an alert define the query to run, the threshold to evaluate, and the frequency and window for monitoring.
query

#### parameters.query
The query parameter specifies the query to run for monitoring. It can reference an existing query object or include an inline query definition.

Example:

```typescript # :icon-code: index.ts
query: {
  filters: [
    eq("LogType", "ERROR"),
    eq("Action", "SIGN_UP")
  ]
}
```

> With the inline query the calculation defaults to `[calc.count()]`

or

```typescript # :icon-code: index.ts
query: new Query("sign-up-errors", {
  calculation: [calc.count()]
  filters: [
    eq("LogType", "ERROR"),
    eq("Action", "SIGN_UP")
  ]
})
```


#### parameters.threshold

The threshold parameter specifies the condition to evaluate from the query results. It can use helper functions to create comparisons or calculations, such as gt, lt, eq, count, etc.

Example:

```typescript # :icon-code: index.ts
threshold: gt(10)
```

#### parameters.frequency

The frequency parameter specifies the frequency at which the alert should run the query and evaluate the threshold. It uses a string representation of the frequency, such as '5 mins', '1 hour', '1 day', etc.

Example:

```typescript # :icon-code: index.ts
frequency: '5 mins'
```

#### parameters.window

The window parameter specifies the time window to look back for data when evaluating the threshold. It uses a string representation of the time window, such as '10 mins', '1 hour', '1 day', etc.

Example:

```typescript # :icon-code: index.ts
window: '10 mins'
```

#### channels

The channels parameter specifies the channels or destinations to send the alert notifications. It is an array of channel objects, where each object defines the channel type and targets.

type

The type property specifies the type of channel for the alert. Baselime CDK supports various channel types, such as 'slack', 'webhook', etc.

targets

The targets property specifies the target destinations for the alert notifications. The targets can be specific user IDs, channels, or URLs depending on the channel type.

Example:

```typescript # :icon-code: index.ts

channels: [{ targets: ['baselime-alerts'], type: 'slack' }]
```

You can define a defaultChannel on Baselime Init to avoid having to duplicate the channel logic on every alert. 

```typescript # :icon-code: index.ts
Baselime.init(this, { defaultChannel: { targets: ['baselime-alerts'], type: 'slack'}})
```