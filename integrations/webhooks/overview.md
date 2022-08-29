---
label: Overview
order: 1
---

# Webhook Integration

The Webhook integration enables you and your team to send POST requests to an http endpoint when an alert is triggered. 

To set this up, set ``[channel].properties.type`` to webhook and a valid URL in the targets array.

```yaml # :icon-code: .baselime/demo.yml
developers:
  type: channel
  properties:
    type: webhook
    targets:
     - https://awebhookendpoint.com/alerts 
```

An example structure of the webhook POST request body

```JSON
{
    "workspace": {
      "id": "",
      "name": ""
    },
    "environment": {
      "id": "",
      "alias": ""
    },
    "application": "",
    "alert": {
      "id": "",
      "name": "",
      "description": ""
    },
    "check": {
      "id": "",
      "time": "",
      "timeframe": "",
      "key": "",
      "value": "",
      "threshold": {
        "operation": "",
        "value": ""
      },
    },
    "query": {
      "id": "",
      "name": "",
      "description": ""
    },
    "channel": {
      "id": "",
      "name": "",
      "type": "",
      "userId": ""
    },
    "url": ""
}
```