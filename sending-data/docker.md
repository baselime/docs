---
label: Docker
order: -8
---

# Docker Logs

![Sending Telemetry data to Baselime](../assets/images/illustrations/sending-data/docker-ingestion.png)

Baselime enables you to stream your Docker logs by using Fluentd as your logging driver.

---

## What is Fluentd?
[Fluentd](https://www.fluentd.org/) is an open source data collector for unified logging layer that is widely used
by companies such as AWS, Google, Microsoft, and more.


## How to use Fluentd with Baselime?

First obtain the API key from the
[Baselime console](https://console.baselime.io).


Next, create the following configuration file for Fluentd.
Make sure to replace `YOUR_API_KEY` with the API key you obtained from the Baselime console.

```apacheconf # :icon-code: fluent.conf
# fluentd/conf/fluent.conf
<match>
  @type http
  endpoint https://events.baselime.io/v1/docker-logs
  headers {"x-api-key":"YOUR_API_KEY"}
  open_timeout 2
  json_array true
  <format>
    @type json
  </format>
  <buffer>
    flush_interval 3s
  </buffer>
</match>
```

Now you need to start the Fluentd container and mount the configuration file you created.
```shell
$ docker run \
    -v ./conf:/fluentd/etc \
    -p 24224:24224 \
    fluentd:latest
```

Next, you need to configure your Docker container to use Fluentd as the logging driver.
```shell
$ docker run -d \
    --log-driver=fluentd \
    --log-opt fluentd-address=localhost:24224 \
    --log-opt labels=io.baselime.service,io.baselime.namespace \
    --labels io.baselime.service=service_name \
    --labels io.baselime.namespace=namespace_name \
    YOUR_IMAGE
```

Pay attention to the `labels` options. It is used to extract the `service` and `namespace` fields.


## Using Docker Compose
If manage your containers with Docker Compose, you can use the following configuration YAML.

```yaml
version: "3.7"
services:
  your_service:
    image: YOUR_IMAGE
    depends_on:
      - fluentd
    logging:
      driver: fluentd
      options:
        fluentd-address: localhost:24224
        labels: "io.baselime.service,io.baselime.namespace"
  fluentd:
    image: fluentd:latest
    volumes:
      - ./conf:/fluentd/etc
    environment:
      - FLUENTD_CONF=fluent.conf
    labels:
      io.baselime.service: "service_name"
      io.baselime.namespace: "namespace_name"
```

## Best practices

We expect the log messages to be in JSON format. For example:
```json
{
  "message": "Hello world!",
  "timestamp": 1697109850
}
```

or 

```json
{
  "message": "Hello world!",
  "timestamp": "2023-10-13 08:46:00 +0000"
}
```

The labels `io.baselime.service` and `io.baselime.namespace` are used to extract the `service` and `namespace` fields.