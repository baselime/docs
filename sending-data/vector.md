---
label: Vector
order: -9
---

# Vector Logs
[Vector](https://vector.dev/) is a high-performance, open-source, observability data router.
It can be configured to stream your logs to Baselime over HTTPS.

## How to use Vector with Baselime?

First obtain the API key from the
[Baselime console](https://console.baselime.io).


Next, create Vector configuration file `vector.yaml` with the following content:
```yaml # :icon-code: vector.yaml
# Set global options
data_dir: "/var/lib/vector"

sources:
  fluent:
    type: "docker_logs"
    exclude_containers:
      - "vector-x"

# Send structured data to Baselime
sinks:
  baselime:
    inputs:
      - "your_input"
    type: "http"
    uri: "https://events.baselime.io/v1/vector-logs"
    encoding:
      codec: "json"
    request:
      headers:
        x-api-key: "YOUR_API_KEY"
        baselime-data-source: "vector"
```
!!! Note
Make sure to use name of the Vector container under `exclude_containers` option.
This will prevent Vector from sending its own logs to Baselime.
!!!

!!! Note
Replace `YOUR_API_KEY` with the API key you obtained from the Baselime console.
!!!


Finally, start Vector container and mount the configuration file you created.
```shell
$ docker run \
  -v ./vector.yaml:/etc/vector/vector.yaml:ro \
  --name vector-x \
  timberio/vector:0.33.0-alpine
```

### Docker Labels
Make sure to set these labels on your Docker containers:
* `io.baselime.service` - used to extract service name used in Baselime console.
* `io.baselime.namespace` - used to extract the namespace used in Baselime console.