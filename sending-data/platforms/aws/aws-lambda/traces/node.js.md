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

## Tracing AWS SDK v3

The [Node.js AWS SDK v3]([link](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/)) is not traced by default using OpenTelemetry on AWS Lambda when bundled as part of your function code. We currently support instrumentation for CommonJS codebases. We currently support instrumentation for  CommonJS codebases. Use the following steps to enable tracing of the Node.js AWS SDK v3.

1. Mark `@smithy/middleware-stack` and `@aws-sdk/middleware-stack` as external.
2. Ensure your functions `.zip` file includes these dependencies

These packages are both extremely small and removing these from your bundle can also decrease your coldstarts

Follow the example below for popular serverless frameworks

+++ AWS CDK

Add the following config to your `lambda.NodejsFunction` settings

```typescript #
new lambda.NodejsFunction(this, 'my-handler', {
  bundling: {
    nodeModules: ['@smithy/middleware-stack', '@aws-sdk/middleware-stack'],
    format: lambda.OutputFormat.CJS
  },
});
```

+++ SST

Add the config globally to your `sst.config.ts` file.

```typescript #
app.setDefaultFunctionProps({
  nodejs: {
    format: 'cjs',
    install: ["@smithy/middleware-stack", "@aws-sdk/middleware-stack"]
  },
});
```

+++ Serverless Framework

If using the [`serverless-esbuild`]() plugin set the following options in your `serverless.yml`

```yaml #
plugins:
  - serverless-esbuild

custom:
  esbuild:
    external:
      - "@smithy/middleware-stack"
      - "@aws-sdk/middleware-stack"
```
+++

## Step functions

Traces can be propogated accross Lambda invocations in step functions by adding the environment variable `BASELIME_TRACE_STEP_FUNCTIONS`.

### Propogation

Lambda functions will automatically propogate the trace state between steps by attaching the `_baselime` tracing metadata object to your functions response. This will be automatically detected if the lambda payloads are not modified.

If you are using [custom parameters](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html) update the functions input to include the following.

+++ CDK

Using the [AWS CDK](https://aws.amazon.com/cdk/) manually propagate the _baselime tracing metadata using the following code snippet

```ts #
 const taskTwoA = new LambdaInvoke(stack, "TaskTwoA", {
    lambdaFunction: new Function(stack, "task-two-a", {
      handler: "packages/functions/src/task-two.handler",
    }),
    payload: TaskInput.fromObject({
      code: TaskInput.fromJsonPathAt("$.Payload.statusCode").value,
      _baselime: TaskInput.fromJsonPathAt("$.['Payload._baselime', 'null']").value
    })
  })
```
+++ State Machine Definition

Using the [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) manually propagate the _baselime tracing metadata using the following code snippet

```json #
{
    "StartAt": "TaskTwoA",
    "States": {
      "TaskTwoA": {
        "End": true,
        "Type": "Task",
        "Resource": "arn:aws:states:::lambda:invoke",
        "Parameters": {
          "FunctionName": "arn:aws:lambda:us-east-1:123456789:function:prod-state-machine-lambda-time",
          "Payload": {
            "code.$": "$.Payload.statusCode",
            "_baselime.$": "$.['Payload._baselime', 'null']"
          }
        }
      }
    }
}
```
+++

If you have tasks which cannot be instrumented like [SNS: Publish](https://docs.aws.amazon.com/step-functions/latest/dg/connect-sns.html) then propogate the traceparent with the result path [result path](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-resultpath.html) so the Baselime state is appended to the output of the task.


+++ CDK

Using the [AWS CDK](https://aws.amazon.com/cdk/) manually propagate the _baselime tracing metadata using the following code snippet

```ts #
const snsPublish = new SnsPublish(stack, "SnsPublish", {
    topic: SNS.fromTopicArn(stack, "SnsTopic", "arn:aws:sns:us-east-1:123456789012:MyTopic"),
    message: TaskInput.fromObject({
      ...
    }),
    resultPath: "$.['Payload._baselime', 'null']",
})
```

+++ State Machine Definition

Using the [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) manually propagate the _baselime tracing metadata using the following code snippet

```json #
{
  "SNS Publish": {
  "Type": "Task",
  "Resource": "arn:aws:states:::sns:publish",
  "Parameters": {
    "Message.$": "$",
    "TopicArn": "arn:aws:sns::1249256823:topic:my-topic"
  },
  "Next": "TaskTwoA",
  "ResultPath": "$.['Payload._baselime', 'null']"
}
```
+++

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