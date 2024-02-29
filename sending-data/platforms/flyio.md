---
label: Fly.io
order: -5
---

# Fly.io

[Fly.io](https://fly.io) is a platform for running applications globally. You can stream your Fly.io service logs to Baselime using the [fly-log-shipper](https://github.com/superfly/fly-log-shipper?tab=readme-ov-file#provider-configuration).

---

## Setup

**Step 1:** Get your `BASELIME_API_KEY` from the [Baselime console](https://console.baselime.io).

**Step 2:** Create a Fly Log Shipper service and set the secrets using following commands:

```bash #
fly launch --image flyio/log-shipper:latest`
fly secrets set ACCESS_TOKEN=$(fly auth token)`
fly secrets set HTTP_URL=https://events.baselime.io/v1/flyio`
fly secrets set HTTP_TOKEN=BASELIME_API_KEY`
```

Once these steps are completed, logs from all services deployed on Fly.io will be streamed to Baselime, and available for search, queries, alerts and dashboards.

