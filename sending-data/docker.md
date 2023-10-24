---
label: Docker
order: -5
---

# Docker Logs

[Docker](https://docker.com) is an open platform for developing, shipping, and running applications and services.

Docker enables you to configure a [logging driver](https://docs.docker.com/config/containers/logging/configure/) for each container. You can use [Fluentd](https://www.fluentd.org/) as your logging driver to stream logs from your Docker containers directly to Baselime over HTTPS.

!!!
The steps in this guide are implemented in this [example project](https://github.com/baselime/examples/tree/main/docker-logs).
!!!

---

## Single container

**Step 1:** Get your `BASELIME_API_KEY` in the [Baselime console](https://console.baselime.io).

**Step 2:** Create the Fluentd configuration file.

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
!!!
Make sure to replace `BASELIME_API_KEY` with your Baselime API key from Step 1.
!!!

!!!
You can send the logs to a different dataset by replacing `logs` in the URL `https://events.baselime.io/v1/logs` with a different dataset name.
!!!

**Step 3:** Start the Fluentd container and mount the configuration

```shell
$ docker run \
    -d \
    -v ./conf:/fluentd/etc \
    -p 24224:24224 \
    fluentd:latest
```

**Step 4:** Configure your Docker container to use Fluentd as the logging driver.
```shell :icon-terminal: terminal
$ docker run -d \
    --log-driver=fluentd \
    --log-opt fluentd-address=localhost:24224 \
    --log-opt labels=io.baselime.service \
    --labels io.baselime.service=service_name \
    YOUR_DOCKER_IMAGE
```
!!!
Baselime uses [Docker labels](https://docs.docker.com/config/labels-custom-metadata/) for service name.
!!!

Once these steps are completed, logs from your Docker container will be available to search and query in the [Baselime console](https://console.baselime.io).

---
## Using Docker Compose

If your containers are orchestrated using [Docker Compose](https://docs.docker.com/compose/), you can stream logs from multiple containers to Baselime using the following `docker-compose.yaml` file.

```yaml # :icon-code: docker-compose.yaml
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
        labels: "io.baselime.service"
  fluentd:
    image: fluentd:latest
    volumes:
      - ./conf:/fluentd/etc
    environment:
      - FLUENTD_CONF=fluent.conf
    labels:
      io.baselime.service: "my-service"
```

---

## Best practices

To best utilise the advanced query capabilities of Baselime, we recommend sending logs in JSON format.

```json #
{
  "message": "Hello world!",
  "timestamp": 1697109850
}
```
