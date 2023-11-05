---
label: Docker
order: -5
---

# Docker Logs

[Docker](https://docker.com) is an open platform for developing, shipping, and running applications and services.

You can stream your Docker container logs to Baselime over HTTPS
by configuring a [logging driver](https://docs.docker.com/config/containers/logging/configure/) for each container.
In this guide we'll show you how to configure the [Fluentd](https://docs.docker.com/config/containers/logging/fluentd/)
and [Fluent Bit](https://docs.docker.com/config/containers/logging/fluentd/) logging drivers to stream your logs to Baselime.

!!!
The steps in this guide are implemented in this [example project](https://github.com/baselime/examples/tree/main/docker-logs).
!!!

## Driver configuration
Fluentd and Fluent Bit allow you to specify sources (inputs) and sinks (outputs) and processors (filters) in a configuration file.

Below, you can find a configuration file for each of the drivers,
which matches all inputs and sends them to Baselime.

+++FluentD
FluentD listens on port `24224` by default, so no additional configuration is required.

```apacheconf # :icon-code: fluent.conf
# fluentd/conf/fluent.conf
<match>
  @type http
  endpoint https://events.baselime.io/v1/logs
  headers {"x-api-key":"BASELIME_API_KEY", "baselime-data-source": "fluentd"}
  open_timeout 2
  json_array true
  <format>
    @type json
  </format>
</match>
```
+++ FluentBit
FluentBit does not listen on any port by default, so you need to configure it to listen on port `24224`
and forward the traffic.
This way Docker can send the logs to Fluent Bit.

```apacheconf # :icon-code: fluent-bit.conf
# /fluent-bit/etc/fluent-bit.conf
[INPUT]
    Name        forward
    Listen      0.0.0.0
    Port        24224

[OUTPUT]
    Name http
    Host events.baselime.io
    Tls On
    Port 443
    Uri /v1/docker-logs
    Match *
    Format json
    Header x-api-key BASELIME_API_KEY
    Header baselime-data-source fluentbit/docker
```
+++
!!!
Make sure to replace `BASELIME_API_KEY` in configuration file
with your Baselime API key from [Baselime console](https://console.baselime.io).
!!!
!!!
You can send the logs to a different dataset by replacing `logs` in the URL `https://events.baselime.io/v1/logs` with a different dataset name.
!!!


---

## Single container

**Step 1:** Create the configuration file for your logging driver and replace `BASELIME_API_KEY`.

**Step 2:** Start your logging driver with configuration file mounted as a volume.
+++ Fluentd

```shell
$ docker run \
    -d \
    -v ./conf:/fluentd/etc \
    -p 24224:24224 \
    fluentd:latest
```
+++ FluentBit
```shell
$ docker run \
    -d \
    -v ./conf:/fluent-bit/etc \
    -p 24224:24224 \
    fluent/fluent-bit:latest
```
+++

**Step 3:** Start your Docker container and specify a logging driver as with options
`--log-driver` and `--log-opt`.

```shell :icon-terminal: terminal
$ docker run -d \
    --log-driver=fluentd \
    --log-opt fluentd-address=localhost:24224 \
    --log-opt labels=io.baselime.service \
    --labels io.baselime.service=service_name \
    YOUR_DOCKER_IMAGE
```
!!!
Baselime uses [Docker labels](https://docs.docker.com/config/labels-custom-metadata/) `io.baselime.service`
and `io.baselime.namespace` for service name and the namespace.
!!!
!!!
If your logging driver exists in a different network, or you've specified a different
port, make sure to update the `localhost:24224` accordingly.
!!!
**Step 4:** View your logs in the [Baselime console](https://console.baselime.io).

---
## Using Docker Compose

If your containers are orchestrated using [Docker Compose](https://docs.docker.com/compose/), you can stream logs from multiple containers to Baselime using the following `docker-compose.yaml` file.

+++Fluentd
```yaml # :icon-code: docker-compose.yaml
version: "3.7"
services:
  your_awesome_service:
    image: YOUR_IMAGE
    depends_on:
      - fluentd
    logging:
      driver: fluentd
      options:
        fluentd-address: localhost:24224
        labels: "io.baselime.service"
    labels:
      io.baselime.service: "my-service"
  fluentd:
    image: fluentd:latest
    volumes:
      - ./conf:/fluentd/etc
    environment:
      - FLUENTD_CONF=fluent.conf
```
+++FluentBit
```yaml # :icon-code: docker-compose.yaml
version: "3.7"
services:
  your_awesome_service:
    image: YOUR_IMAGE
    depends_on:
      - fluentbit
    logging:
      driver: fluentd
      options:
        fluentd-address: localhost:24224
        labels: "io.baselime.service"
    labels:
      io.baselime.service: "my-service"
  fluentbit:
    image: fluent/fluent-bit:latest
    volumes:
      - ./conf:/fluent-bit/etc
```
+++
---

## Best practices

To best utilise the advanced query capabilities of Baselime, we recommend sending logs in JSON format.

```json #
{
  "message": "Hello world!",
  "timestamp": 1697109850
}
```
