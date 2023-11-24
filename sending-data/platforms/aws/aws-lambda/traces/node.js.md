---
order: -3
label: Node.js
---

# OpenTelemetry for Node.js on AWS Lambda

The [Baselime Node.js OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/lambda-node-opentelemetry) instruments your Node.js AWS Lambda functions with OpenTelemetry and automatically sends OpenTelemetry traces to Baselime. This is the most powerful and flexible way to instrument your Node.js AWS Lambda functions.

---

## Automatic Instrumentation

To automatically instrument your AWS Lambda functions with the [Baselime Node.js OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/lambda-node-opentelemetry), set the following tag to your AWS Lambda functions: `baselime:tracing=true`.


For detailed instructions on how to add the tag to for your framework go to the [OpenTelemetry for AWS Lambda](./index.md) Guide

---

## Adding custom OpenTelemetry spans

To add custom spans to your OpenTelemetry traces, install the `@opentelemetry/api` package.

```bash
npm i --save @opentelemetry/api
```

And manually add spans to your traces.

```javascript #
import { trace } from "@opentelemetry/api";
const tracer = trace.getTracer('your-custom-traces');

export async function handler(event) {
  const activeSpan = trace.getActiveSpan();
  
  const { userId } = JSON.parse(event.body);
  span.setAttribute('user', userId)
  
  // do something meaningful
  
  const result = await tracer.startActiveSpan(`business-logic`, async (span) => {
    span.setAttributes(args)
    // your business logic
    const result = await yourBusinessLogic(args)
    span.setAttributes(result)
    return result
  });
}

```

---

## Sending data to another OpenTelemetry backend

OpenTelemetry is an open standard, and you can use the [Baselime Node.js OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/lambda-node-opentelemetry) to send telemetry data to another backend of your choice.

Set environment variable `COLLECTOR_URL` to your observability backend.

---

## Limitations


The AWS JS SDK v2 can result in errors when interacting with OpenTelemetry during automatic request retries. This is the result of trace headers changing between retries and failing the signing verification processes. We've submitted a [Pull Request to the AWS JS SDK](https://github.com/aws/aws-sdk-js/issues/4472#issuecomment-1660786070) and will be updating accordingly. 

To prevent this issue from arising, add the code snippet below to your code.

```javascript #
const SignersV4 = require('aws-sdk/lib/signers/v4')

SignersV4.prototype.unsignableHeaders.push('traceparent');
```