---
label: OpenTelemetry Instrumentation
order: -1
---

# OpenTelemetry Instrumentation

---

Baselime supports [OpenTelemetry](https://opentelemetry.io/) to instrument your Lambda functions.

---

## OpenTelemetry Auto-Instrumentation

With OpenTelemetry you can add auto-instrumentation to your Lambda functions. This will collect basic instrumentation to incoming and outgoing requests to your Lambda, as well as Lambda invocations data.

Moreover, Baselime will be able to collect traces across your Lambda invocations.

+++ Node.js

To auto-instrument your Node.js Lambda function, you need to install the following packages:

```bash # :icon-terminal: terminal
npm install --save @opentelemetry/api
npm install --save @opentelemetry/auto-instrumentations-node
npm install --save @opentelemetry/exporter-otlp-http
npm install --save @opentelemetry/instrumentation
npm install --save @opentelemetry/instrumentation-aws-lambda
npm install --save @opentelemetry/instrumentation-http
npm install --save @opentelemetry/sdk-trace-base
npm install --save @opentelemetry/sdk-trace-node
```

Next you need to initialise OpenTelemetry in your Lambda function. Create a `tracing.js` file that will be executed as the first step of your Lambda invocation.

```js # :icon-code: tracing.js
const { SimpleSpanProcessor } = require("@opentelemetry/sdk-trace-base");
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { AwsLambdaInstrumentation } = require('@opentelemetry/instrumentation-aws-lambda');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { OTLPTraceExporter } = require("@opentelemetry/exporter-otlp-http");

const provider = new NodeTracerProvider();

provider.addSpanProcessor(
  new SimpleSpanProcessor(
    new OTLPTraceExporter({
      url: 'https://otel.baselime.io/',
      headers: {
        Authorization: process.env.BASELIME_API_KEY
      }
    })
  )
);

provider.register();

registerInstrumentations({
  instrumentations: [
    getNodeAutoInstrumentations(),
    new AwsLambdaInstrumentation({
      requestHook: (span, { event, context }) => {
        span.setAttribute('cloud.region', process.env.AWS_REGION);
      },
      disableAwsContextPropagation: true
    })
  ],
});
```

Deploy your Lambda function using your favourite IaC solution, or in the AWS Console.

In order to instrument the Lambda function, the `tracing.js` file should be executed before any other file is required in the Lambda handler.

As such, make sure to add the following environment variable to your Lambda:

```env
NODE_OPTIONS="--require tracing"
```
Alternatively, it should be the first file required at the top of your handler file.

<!-- +++ Python
+++ -->





