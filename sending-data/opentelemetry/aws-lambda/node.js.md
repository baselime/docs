---
order: -3
label: Node.js
---

# OpenTelemetry for Node.js on AWS Lambda

The [Baselime Node.js OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/lambda-node-opentelemetry) instruments your Node.js AWS Lambda functions with OpenTelemetry and automatically sends OpenTelemetry traces to Baselime. This is the most powerful and flexible way to instrument your Node.js AWS Lambda functions.


---

## Automatic Instrumentation

To automatically instrument your AWS Lambda functions with the [Baselime Node.js OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/lambda-node-opentelemetry), set the following tag to your AWS Lambda functions: `baselime:tracing=true`.

+++ AWS CDK

To add the Baselime tag to all your AWS Lambda functions in a service or stack add this line to your AWS CDK code.

```typescript #
 Tags.of(app).add("baselime:tracing", `true`);
```

+++ SST

To add the Baselime tag to all your AWS Lambda functions in a service or stack add this line to your `sst.config.ts` file.

```typescript #
 Tags.of(app).add("baselime:tracing", `true`);
```

+++ Serverless Framework

To add the Baselime tag to all your AWS Lambda functions in a add this snippet to your `serverless.yml` file.

```yaml #
provider:
  name: aws
  tags:
    "baselime:tracing": "true"
```

+++ AWS SAM

To add the Baselime tag to all your AWS Lambda functions in a add this snippet to your AWS SAM configuration file.

```yaml #
AWSTemplateFormatVersion: "2010-09-09"
Transform: AWS::Serverless-2016-10-31
Description: "Gets data from the xxxxx API."
Globals:
  Function:
    Tags:
       "baselime:tracing": "true"
```
+++

That's all you are all set with OpenTelemetry on Node.js AWS Lambda functions.

!!! 
OpenTelemetry automatic instrumentation is available only once you have connected your AWS Account to Baselime. Adding the tag to AWS Lambda functions in an AWS Account not connected to Baselime will not have any effect.
!!!

!!!
We recommended a miminum of 512mb of memory configured on AWS Lambda functions with the automatic OpenTelemetry instrumentation. AWS Lambda functions with less memory may experience higher latencies as the traces are being processed.
!!!

!!! 
To remove the OpenTelemetry instrumentation from your AWS Lambda functions, remove the `baselime:tracing=true` tag from the function and Baselime will revert the function to un-instrumentate state.
!!!

!!!warning
Other observability tool layers and tags can adversely interact with the Baselime OpenTelemetry layer. We recommend to disable all other observability layers and tags before instrumenting your AWS Lambda functions with the Baselime OpenTelemetry layer. Failing to do so could result in down-time.  
!!!

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