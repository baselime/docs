# OpenTelemetry Traces

---

If your codebase is already instrumented with [OpenTelemetry](https://opentelemetry.io/), you can start sending us your tracing data today.

Add the Baselime OTel endpoint to your exporter:
- Endpoint `https://otel.baselime.io/v1/`
- Header: `x-api-key: <YOUR_BASELIME_API_KEY>` 

You can get your Baselime API key from the Baselime CLI with 

```bash # :icon-terminal: terminal
baselime iam
```

If you have not instrumented your codebase with OpenTelemetry yet, do not worry. We are building OpenTelemetry instrumentation methods for serverless that will not significantly negatively impact the performance of your systems.

---

## OpenTelemetry Auto Instrumentation

[!ref icon="../../assets/images/logos/node.svg"](./nodejs/index.md)
