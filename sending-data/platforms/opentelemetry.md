---
label: OpenTelemetry
order: -4
---

If your codebase is already instrumented with [OpenTelemetry](https://opentelemetry.io/), you can start sending your tracing data to Baselime today.

Add the Baselime OpenTelemetry endpoint to your exporter:
+++HTTP
- Endpoint `https://otel.baselime.io/v1/`
- Header: `x-api-key: <BASELIME_API_KEY>`
- Header: `x-baselime-dataset: <YOUR_DATASET>` - the dataset to send the data to
+++gRPC
- Endpoint `grpc://grpc.baselime.io:4317`
- Header: `api-key: <BASELIME_API_KEY>`
- Header: `io.baselime.dataset: <YOUR_DATASET>` - the dataset to send the data to
+++

!!!
Get your public Baselime API key in the [Baselime console](https://console.baselime.io).
!!!

---

## Baselime Opentelemetry Distros
[!ref icon="../../assets/images/logos/node.svg"](../languages/node.js.md)
[!ref icon="../../assets/images/logos/next.js.svg"](../languages/next.js.md)
[!ref icon="../../assets/images/logos/python.svg"](../languages/python.md)
[!ref icon="../../assets/images/logos/golang.svg"](../languages/go.md)

