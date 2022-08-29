---
label: Overview
order: 1
---

# Webhook Integration

The Webhook integration enables you and your team to send POST requests to an http endpoint when an alert is triggered. 

To set this up, set ``[channel].properties.type`` to webhook and a valid URL in the targets array.

```yaml # :icon-code: .baselime/demo.yml
internal-bot:
  type: channel
  properties:
    type: webhook
    targets:
     - https://webhooks.acme.com/bot
```

When an alert triggers to a webhook channel, HTTP requests are made to the channel targets using the `/POST` method. Each request carries an event similar to the example outlines below. 


```json # :icon-code: 
{
    "workspace": {
        "id": "acme",
        "name": "Acme Inc"
    },
    "environment": {
        "id": "prod",
        "alias": "prod"
    },
    "application": "user-authentication",
    "alert": {
        "id": "high-latency",
        "name": "Requests have a very high latency",
        "description": ""
    },
    "check": {
        "id": "1661346772147",
        "time": "2022-08-24T13:12:52+00:00",
        "timeframe": {
            "from": 1661343172147,
            "to": 1661346772147
        },
        "key": "MAX(latency)",
        "value": "118440",
        "threshold": {
            "operation": ">",
            "value": 2000
        }
    },
    "query": {
        "id": "latency",
        "name": "Computes the latency on the requests",
        "description": ""
    },
    "channel": {
        "id": "internal-bot",
        "type": "webhook"
    },
    "url": "https://console.baselime.cc/acme/prod/user-authentication/alerts/high-latency/1661346772147"
}
```