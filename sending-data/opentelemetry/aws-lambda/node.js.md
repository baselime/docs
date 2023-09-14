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
To remove the OpenTelemetry instrumentation from your AWS Lambda functions, remove the `baselime:tracing=true` tag from the function and Baselime will revert the function to un-instrumentate state.
!!!


### How it works

This section outlines how the automatic instrumentation works.

The automatic instrumentation makes changes to your AWS Lambda functions once they are deployed:

- Add the Baselime Node.js OpenTelemetry AWS Lambda Layer to your AWS Lambda function: `arn:aws:lambda:${region}:097948374213:layer:baselime-node:${version}` - This layer is a slimmed down version of the [OpenTelemetry JavaScript Client](https://github.com/open-telemetry/opentelemetry-js) that will have minimal impact on the cold starts of your AWS Lambda functions
- Add the Baselime Extension added to your AWS Lambda function: `arn:aws:lambda:${region}:097948374213:layer:baselime-extension-${'x86_64' || 'arm64'}:${version}` - This extension enables the Baselime Layers to send the trace data to the Baselime backend after the invocation is complete, as such, distributed tracing will not have any negative impact on the latency of your AWS Lambda functions
- Set the `BASELIME_KEY` environment variable with the value of your environments Baselime API Key

These changes are kept in sync with your AWS Lambda function as you iterate on your architecture via events from Amazon CloudTrail.

![OpenTelemetry Automatic Instrumentation FLow](../../../../assets/images/illustrations/sending-data/opentelemetry/extension.png)

---

## Adding custom OpenTelemetry events

The [Baselime Node.js OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/lambda-node-opentelemetry) provides and extension that enables you add context rich events to your traces using an API that feels like a logger. These events can be useful to show more detailed context on errors, add steps that you want recorded for a business process or adding extra debugging information.

```javascript #
const { logger } = require("@baselime/lambda-node-opentelemetry");

logger.info("This is an informational message", {
  operation: "copy-paste-replace",
  count: 9000,
});
```

The extension provides an object that includes four logging functions - `info`, `warn`, `debug`, and `error` - enabling you to log messages with varying levels of severity. You can control the visibility of the events by setting the LOG_LEVEL environment variable, .

```javascript #
const { logger } = require("@baselime/lambda-node-opentelemetry");

logger.info("This is an informational message", { payload: { foo: "bar" } });
logger.warn("This is a warning message", { payload: { foo: "bar" } });
logger.debug("This is a debug message", { payload: { foo: "bar" } });
logger.error("This is an error message", { payload: { foo: "bar" } });
```

---

## Adding custom OpenTelemetry spans

To add custom spans to your OpenTelemetry traces, it is necessary to install the `@opentelemetry/api` package. It is left out of the [Baselime Node.js OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/lambda-node-opentelemetry) to limit the impact on cold-starts, such that your can add it only to the AWS Lambda functions that require it.

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

## Manual Instrumentation

To manually instrument your Node.js AWS Lambda functions, you can use the [Baselime Node.js OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/lambda-node-opentelemetry) independently from connecting your AWS Account to Baselime.

### Step 1: Install the SDK

Install the [Baselime Node.js OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/lambda-node-opentelemetry).

```bash #
npm install @baselime/lambda-node-opentelemetry
```

### Step 2: Manually wrap your function handlers with the SDK

Wrap the handlers of your AWS Lambda functions with the `baselime.wrap(handler)` method.

```javascript #
import baselime from '@baselime/lambda-node-opentelemetry'

async function main(event, context) {
   // your handler logic
}

export const handler = baselime.wrap(main);
```

### Step 3: Set the Baselime environment variables

Set the environment variables of your AWS Lambda functions to include the Baselime API Key and set the NODE_OPTIONS enviroment variable to preload the OpenTelemetry SDK into your AWS Lambda bundle.

| Key          | Value                                       | Description                                                                         |
| ------------ | --------------------------------------------- | ----------------------------------------------------------------------------------- |
| BASELIME_KEY | `your-api-key`              | Get this key from the [Baselime console](https://console.baselime.io) or the [Baselime CLI](https://github.com/Baselime/cli) running `baselime iam` |
| NODE_OPTIONS | `--require @baselime/lambda-node-opentelemetry` | Preloads the OpenTelemetry SDK at startup                                                 |

### Step 4: Bundle the OpenTelemetry SDK with your code

Ensure that the OpenTelemetry SDK is included in the `.zip` file that is uploaded to AWS Lambda during your deployment. The step depends on your deployment framework.

+++ AWS CDK / SST

Set the default function props of your service to include the wrapper in the bundle and add the environment variables

```typescript #
app.setDefaultFunctionProps({
  runtime: "nodejs18.x",
  environment: {
    NODE_OPTIONS: '--require @baselime/lambda-node-opentelemetry/lambda-wrapper',
    BASELIME_KEY: process.env.BASELIME_KEY
  },
  nodejs: {
    install: ["@baselime/lambda-node-opentelemetry"],
  },
});
```

+++ Serverless Framework

By default the Serverless Framework includes the entire `node_module` folder in the `.zip` bundle of your AWS Lambda functions. If you are using the `serverless-esbuild` plugin or any other plugin to prevent this, it is necessary to edit the configuration of your project.

Add the following line to the `package.patterns` block of your `serverless.yml` file.

```yaml #
package:
  patterns:
    - 'node_modules/@baselime/lambda-node-opentelemetry'
```

Add the following environment variables

```yaml #
    BASELIME_KEY: ${env:BASELIME_KEY}
    NODE_OPTIONS: '--require @baselime/lambda-node-opentelemetry/lambda-wrapper'
```

+++ Architect

Copy the `lambda-wrapper.js` file from the `node_modules` folder in the shared folder of your Architect project, it will be automatically included in all of your AWS Lambda `.zip` bundles.

```bash
cp node_modules/@baselime/lambda-node-opentelemetry/lambda-wrapper.js src/shared/
```

Add the environment variables to your architect project

```bash
arc env -e production --add BASELIME_KEY <your-api-key>
arc env -e production --add -- NODE_OPTIONS '--require @architect/shared/lambda-wrapper'
```

> Note the '--' in the NODE_OPTIONS command. This is required to escape options parsing.

+++



This method will however send the traces to the Baselime backend during the invocation of your AWS Lambda functions, and will result in a degradation in the latency performace of your functions.

In production we recommend additionally adding the Baselime AWS Lambda extension, as it will enable the OpenTelemetry tracer to send traces to the Baselime backend after the excecution of your AWS Lambda functions.

```javascript
`arn:aws:lambda:${region}:097948374213:layer:baselime-extension-${'x86_64' || 'arm64'}:1`
```

---

## Sending data to another OpenTelemetry backend

OpenTelemetry is an open standard, and you can use the [Baselime Node.js OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/lambda-node-opentelemetry) to send telemetry data to another backend of your choice.

Add the environment variable `COLLECTOR_URL` to send the data somewhere else than the Baselime backend.

---

## Limitations


The AWS JS SDK v2 can result in errors when interacting with OpenTelemetry during automatic request retries. This is the result of trace headers changing between retries and failing the signing verification processes. We've submitted a [Pull Request to the AWS JS SDK](https://github.com/aws/aws-sdk-js/issues/4472#issuecomment-1660786070) and will be updating accordingly. 

To prevent this issue from arising, add the code snippet below to your code.

```javascript #
const SignersV4 = require('aws-sdk/lib/signers/v4')

SignersV4.prototype.unsignableHeaders.push('traceparent');
```