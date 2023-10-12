---
label: Docker
order: -8
---

![Sending Telemetry data to Baselime](../assets/images/illustrations/sending-data/docker-ingestion.png)

Baselime enables you to stream your Docker logs by using Fluentd as your logging driver.

---

#### What is Fluentd?
Fluentd is an open source data collector for unified logging layer that is widely used
by the companies such as AWS, Google, Microsoft, and more.

#### How to use Fluentd with Baselime?
In order to get your Docker logs streaming to Baselime, you need to configure Fluentd.

Follow the steps:
1. Obtain the API key from the Baselime console.
2. Create a configuration file for Fluentd and add the following configuration to it.
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
3. Replace YOUR_API_KEY with the API key you obtained from the Baselime console.

4. Run the following command to start Fluentd.
```shell
$ docker run \
    -v ./conf:/fluentd/etc \
    -p 24224:24224 \
    fluentd:latest
```

5. Start your docker container with the following command.
```shell
$ docker run -d \
    --log-driver=fluentd \
    --log-opt fluentd-address=localhost:24224 \
    --log-opt tag=docker.{{.Name}} \
    YOUR_IMAGE
```

6. You should start seeing your Docker logs in the Baselime console.


#### Using Docker Compose
```yaml
version: "3.7"
services:
  logger:
    image: YOUR_IMAGE
    depends_on:
      - fluentd
    logging:
      driver: fluentd
      options:
        fluentd-address: localhost:24224
  fluentd:
    image: fluentd:latest
    volumes:
      - ./conf:/fluentd/etc
    environment:
      - FLUENTD_CONF=fluent.conf
```

#### Logs format
The logs are sent to Baselime in the following format.
```json
{
  "message": "This is a message from ",
  "timestamp": 1697109850,
  "service": "service_name",
  "namespace": "namespace_name"
}
```

You can add extra fields or leave the `service` and `namespace` fields empty, defaulting them
to the "default" service and namespace.