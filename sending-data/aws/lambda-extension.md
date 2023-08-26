---
label: AWS Lambda Telemetry Extension
order: -4
---

# Lambda Telemetry Extension

Instrumenting AWS Lambda functions with Baselime is straightforward using our
Lambda Extension. The Lambda Extension listens to invocation events and collects
telemetry data, such as logs and runtime metrics. Once collected, the telemetry
data is sent to Baselime for storage, analysis, and visualization. In this
section, we'll walk you through the process of instrumenting your Lambda
functions with the Baselime Lambda Extension.

!!! Optional
The Baselime Lambda telemetry extension is an optional tool that provides additional telemetry data for your AWS Lambda functions. It is only necessary if you choose not to ingest Lambda logs directly from CloudWatch.
!!!

Before getting started you'll need to make sure that you have your Baselime API
key ready. You can get it by running the following command using the Baselime
CLI.

```bash # :icon-terminal: terminal
baselime iam
```

---

## How it works

The Baselime Lambda Extension is language agnostic and is compressed as a
single binary, such that it minimises its impact cold-starts and performance.

The diagram below illustrates how the Baselime Lambda Extension works within
your architecture.

![Using the Baselime Lambda Extension](../../assets/images/illustrations/sending-data/lambda-extension.png)

All the telemetry data from your Lambda function is collected asynchronously
from your invocation, and sent to the Baselime backend in a separate process
from your invocation.

---

## Instrumenting

To instrument your AWS Lambda Functions with the Baselime Lambda Extension, we
recommend using your Infrastructure as Code tool of choice, and add the
Extension as a Lambda Layer.

It is necessary to add the Baselime API key to the extension as an environment
variable. The example below shows the process with the serverless framework.

```yaml #
# serverless.yml
service: myService
 
provider:
  name: aws
  runtime: python3.8
  environment:
    BASELIME_KEY: <BASELIME_KEY>
  layers:
    - <BASELIME_LAMBDA_LAYER_ARN>
 
functions:
  hello:
    handler: handler.hello
```

Where the `BASELIME_KEY` is your Baselime API Key and the
`BASELIME_LAMBDA_LAYER_ARN` is the ARN of the Baselime Layer in your region.

```javascript
`arn:aws:lambda:${region}:097948374213:layer:baselime-extension-${'x86_64' || 'arm64'}:1`
```

