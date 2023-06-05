---
label: Alerts
order: -1
---

# Alerts

Baselime's alerting feature enables you to set up notifications for when certain conditions are met in your telemetry data. This can be helpful for detecting and responding to issues in your system in real-time.

## Setting up alerts

To set up an alert, you will need to specify a query and a threshold. When the result of the query meets the conditions the threshold, the alert will be triggered. You must also specify the frequency to check the query, and time window to consider for the alert.

You can set up alerts using the Baselime CLI with Observability as Code using the Observability Reference Language or the web console. Here is an example of how to set up an alert with ORL:

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

To create this alert, add it to a any `.yml` file in your `.baselime` folder. If you don't have a `.baselime` folder for your service, create it with `baselime init`.

Once you have the `.baselime` folder configured, run the following command to create your alert:

```bash # :icon-terminal: terminal
baselime deploy
```

---

## Receiving alerts

When an alert is triggered, you can choose to receive notifications through a variety of channels, such as email, Slack, or PagerDuty (coming soon).

---

## Tips for effective alerting

1. Make sure to set appropriate thresholds for your alerts. Setting the threshold too low may result in false positives, while setting it too high may result in missed issues.
2. Keep alerts specific and actionable: Alerts should be specific and provide clear instructions on what action to take.
3. Set up alerts for the right things: Make sure to set up alerts for the most important issues that need immediate attention.
4. Use multiple alerting methods: Use a combination of Slack, email, and webhooks to ensure that you are notified of important issues in a timely manner.
5. Use alert suppression: Silence repeated alerts to avoid alert fatigue and ensure that you are only notified of important issues.
6. Use alert grouping: Use alert grouping to group related alerts together, making it easier to triage and resolve issues.
7. Consider using webhook alerts to build self-healing systems
8. Test your alerts to ensure they are working as expected.
9. Use alert analytics: Use alert analytics to analyze the effectiveness of your alerting strategy and make improvements where necessary.
10. Regularly review and update alert thresholds and configurations to ensure they are still relevant and effective.
