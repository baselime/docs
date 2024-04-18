---
label: OpenTelemetry
order: -4
---

If your codebase is already instrumented with [OpenTelemetry](https://opentelemetry.io/), you can start sending your traces, metrics and logs to Baselime today.


## Configuration

### Endpoint
* HTTP: `otel.baselime.io/v1/`
* gRPC: `otel-ingest.baselime.io:4317`

### Headers
```yaml
x-api-key: <BASELIME_API_KEY>
x-baselime-dataset: <YOUR_DATASET> # Optional, defaults to "otel"
```

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
