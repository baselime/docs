---
label: OpenTelemetry
order: -4
---

If your codebase is already instrumented with [OpenTelemetry](https://opentelemetry.io/), you can start sending your tracing data to Baselime today.

Get your public Baselime API key in the [Baselime console](https://console.baselime.io).

---
## HTTP

Add the Baselime OpenTelemetry endpoint to your exporter:
- Endpoint `https://otel.baselime.io/v1/`
- Header: `x-api-key: <BASELIME_API_KEY>`

---
## gRPC

Add the Baselime OpenTelemetry endpoint to your exporter:
- Endpoint `otel-grpc.baselime.io:4317`
- Header: `api-key: <BASELIME_API_KEY>`

---
## Baselime Opentelemetry Distributables
* [Python](https://github.com/baselime/python-opentelemetry)
* [Node](https://github.com/baselime/node-opentelemetry)
* [Go](https://github.com/baselime/go-opentelemetry)
* [Lambda](https://github.com/baselime/lambda-node-opentelemetry)
