---
label: Fly.io
order: -5
---

# Fly.io
[Fly.io](https://fly.io) is a platform for running applications globally. You can stream your Fly.io services logs to Baselime using their log exporter.

---

## Obtain Baselime API Key
Get your `BASELIME_API_KEY` from the [Baselime console](https://console.baselime.io).

## Create a Logger service and set the secrets using following commands:
1. `fly launch --image flyio/log-shipper:latest`
2. `fly secrets set ACCESS_TOKEN=$(fly auth token)`
3. `fly secrets set HTTP_URL=https://events.baselime.io/v1/flyio`
4. `fly secrets set HTTP_TOKEN=BASELIME_API_KEY`

!!!info
You can change the destination "dataset" in Baselime.io by changing ~~`flyio`~~ part of  `https://events.baselime.io/v1/flyio`
!!!

## Navigate to Baselime console

You can now deploy the logger service to Fly.io and start streaming your logs to [Baselime console](https://console.baselime.io).
Once the Log Stream is created, all your logs from Fly.io will be available in Baselime for searching, queries, dashboard and alerts.

For more configuration options of the logger consult [fly-log-shipper](https://github.com/superfly/fly-log-shipper?tab=readme-ov-file#provider-configuration) documentation.

