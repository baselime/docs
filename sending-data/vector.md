---
label: Vector
order: -6
---

# Vector

[Vector](https://vector.dev/) is a high-performance, open-source, observability data router. It can be configured to stream your logs to Baselime over HTTPS.

!!!
The steps in this guide are implemented in this [example project](https://github.com/baselime/examples/tree/main/vector).
!!!


---

## Setup with Docker

**Step 1:** Get your `BASELIME_API_KEY` from the [Baselime console](https://console.baselime.io).


**Step 2:** Create a `vector.yaml` configuration file:

```yaml # :icon-code: vector.yaml
# Send structured data to Baselime
sinks:
  baselime:
    inputs:
      - "*"
    type: "http"
    uri: "https://events.baselime.io/v1/logs"
    encoding:
      codec: "json"
    request:
      headers:
        x-api-key: "BASELIME_API_KEY"
        baselime-data-source: "vector"
```

!!!
Make sure to replace `BASELIME_API_KEY` with your Baselime API key from Step 1.
!!!

!!!
You can send the logs to a different dataset by replacing `logs` in the URL `https://events.baselime.io/v1/logs` with a different dataset name.
!!!


**Step 3:** Start the Vector container and mount the configuration file.
```shell
$ docker run \
  -v ./vector.yaml:/etc/vector/vector.yaml:ro \
  --name vector \
  timberio/vector:0.33.0-alpine
```

Once these steps are completed, logs from all containers mounted with Vector will be streamed to Baselime, and available for search, queries, alerts and dashboards.

---

## Docker Labels

Baselime uses [Docker labels](https://docs.docker.com/config/labels-custom-metadata/)  for service names. Add the relevant label to all your containers to ensure they are appropriately tagged.

* `io.baselime.service` - used to extract service name used in Baselime console.