# OpenTelemetry Traces

---

If your codebase is already instrumented with [OpenTelemetry](https://opentelemetry.io/), you can start sending your tracing data to Baselime today.

Add the Baselime OpenTelemetry endpoint to your exporter:
- Endpoint `https://otel.baselime.io/v1/`
- Header: `x-api-key: <BASELIME_API_KEY>` 

You can get your Baselime API key in the [Baselime console](https://console.baselime.io) from the [Baselime CLI](../../cli/install.md) with:

```bash # :icon-terminal: terminal
baselime iam
```

If you have not instrumented your codebase with OpenTelemetry yet, do not worry. We are building OpenTelemetry SDKs to facilitate instrumenting your code.

---

## OpenTelemetry SDKs

[!ref icon="../../assets/images/logos/node.svg"](./node.js.md)
[!ref icon="../../assets/images/logos/node.svg"](./aws-lambda/node.js/index.md)

