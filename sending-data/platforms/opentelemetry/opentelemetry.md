---
label: OpenTelemetry
order: -4
---

If your codebase is already instrumented with [OpenTelemetry](https://opentelemetry.io/), you can start sending your traces, metrics and logs to Baselime today.


## Configuration

### Endpoint
* HTTP:
  * `otel.baselime.io/v1/traces` - traces
  * `otel.baselime.io/v1/metrics` - metrics
  * `otel.baselime.io/v1/logs` - logs
* gRPC: `otel-ingest.baselime.io:4317`

### Headers
```yaml
x-api-key: <BASELIME_API_KEY>
x-baselime-dataset: <YOUR_DATASET> # Optional, defaults to "otel"
```

## Debugging

If events do not appear in the [Baselime Console](https://console.baselime.io) enable DEBUG logging using the sdk or collector you are using.

For our [OpenTelemetry Distros](#baselime-opentelemetry-distros) add the env `OTEL_LOG_LEVEL=DEBUG` to enable debug logging. 

If you use the [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/) follow the debugging steps in the [troubleshooting guide](https://github.com/open-telemetry/opentelemetry-collector/blob/main/docs/troubleshooting.md).


---
## Baselime OpenTelemetry for Platforms
[!ref icon="../../../assets/images/logos/logo_aws_lambda.png"](../../platforms/aws/aws-lambda/traces/index.md)
[!ref icon="../../../assets/images/logos/cloudflare.png"](../../platforms/cloudflare/traces.md)

---

## Baselime OpenTelemetry Distros
[!ref icon="../../../assets/images/logos/node.svg"](../../languages/node.js.md)
[!ref icon="../../../assets/images/logos/next.js.svg"](../../languages/next.js.md)
[!ref icon="../../../assets/images/logos/python.svg"](../../languages/python.md)
[!ref icon="../../../assets/images/logos/golang.svg"](../../languages/go.md)

---

## AWS PrivateLink

Baselime supports [AWS PrivateLink](https://aws.amazon.com/privatelink/) for OpenTelemetry.
[!ref icon="../../../assets/images/logos/aws.svg"](./private-link.md)
