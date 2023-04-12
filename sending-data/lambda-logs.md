---
label: AWS Lambda Logs
order: 0
---

# AWS Lambda Logs


Once you connect your AWS account to Baselime, Baselime automatically create [CloudWatch Logs subscription filters](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html) to automatically ingest logs from your AWS Lambda functions.

---

## How it works

The following diagram illustrates the process for sending AWS Lambda logs to Baselime. Once Baselime is connected to an AWS Account, it automatically creates Logs subscription filters for all the Lambda functions in the account. Log subscription filters enable Baselime to asynchronously ingest logs from the Lambda functions through CloudWatch, without any impact on the performance of the Lambda functions. 

![Sending Lambda Logs to Baselime](../assets/images/illustrations/sending-data/lambda-logs.png)

Moreover, Baselime automatically creates new subscription filters for newly deployed Lambda functions, thanks to it CloudTrail integration. Baselime listens to new Lambda events in CloudTrail and appropriately creates subscription filters for newly created Lambda functions. 

This method however has one drawback: Lambda logs appear in Baselime with a delay (typically less than 3 seconds) as a results of the logs going through CloudWatch before being piped to Baselime.

An alternative method to ingesting AWS Lambda logs is with the use of the [Baselime Lambda Extension](./lambda-extension.md).

---

## Discovered Keys

Baselime automatically discovers key - value pairs from your AWS Lambda logs. This enables you to run complex queries and setup alerts on data that otherwise would be difficult to work with from the AWS Lambda service. For instance, from the discovered keys from the Lambda logs, it's possible to set alerts on the maximum memory used by lambda functions during execution, compared to the amount of memory they are assigned at deployment time.

---

## Instrumentation

By default this instrumentation is agentless but if you want to see your request and response data in baselime you can install our SDK. 

```bash
npm i @baselime/lambda-logger
```

Its just a 2.5kb javascript file with 0 dependencies so adds minimal overhead to your lambda function.

### Usage

```javascript
const { wrap } = require('@baselime/lambda-logger');

exports.handler = wrap(async (event, context) => {
   
});
``` 


It also exports a middy middleware 


```javascript
import { logger, Baselime } from "@baselime/lambda-logger";
import middy from "@middy/core";

exports.handler = middy()
	.use(Baselime())
	.handler(function (e, context) {
		
	});
```

### Logging best practices

Baselime works best when you log JSON, The [@baselime/lambda-logger](https://github.com/baselime/lambda-logger) helps you do this.

```javascript
console.log(JSON.stringify({ message: "This log is awesome", level: "info", data: { customer_id: "cus_1234", accountType: "premium" }}));
```

and with the baselime logger

```javascript
import { logger } from "@baselime/lambda-logger";

logger.info("This log is awesome", { customer_id: "cus_1234", accountType: "premium" });
```

Its also important you format errors correctly to make sure you can find all the information you need to make your queries.

```javascript
const error = new Error("A message for the error");

console.log(JSON.stringify({ message: "Unfortunately something went wrong", level: "error", data: { customer_id: "cus_1234", accountType: "premium", errorMessage: error.message, errorType: error.name, stackTrace: error.stack  }}));
```

with the baselime logger this is simpler

```javascript
import { logger } from "@baselime/lambda-logger";

logger.info("Unfortunately something went wrong", { customer_id: "cus_1234", accountType: "premium" }, error);
```

### Lambda Discovered Keys

The Lambda service automatically writes logs at the start and end of every function invocation. These logs are parsed as events in Baselime, and keys are automatically discovered from those messages.

#### `START` Log Message

The following keys are discovered from the `START` message:
- `@type`: is always `START`
- `@requestId`: the request ID of the Lambda invocation
- `@version`: the invoked version of the Lambda function

```json # :icon-code: output
 START RequestId: d5d410e5-7406-5a1b-888e-4aa7492a313d Version: $LATEST

{
  @type: "START",
  @requestId: "d5d410e5-7406-5a1b-888e-4aa7492a313d",
  @version: "$LATEST"
} 
```

#### `END` Log Message

The following keys are discovered from the `END` message:
- `@type`: is always `END`
- `@requestId`: the request ID of the Lambda invocation

```json # :icon-code: output
 END RequestId: d5d410e5-7406-5a1b-888e-4aa7492a313d

{
  @type: "END",
  @requestId: "d5d410e5-7406-5a1b-888e-4aa7492a313d",
} 
```

#### `REPORT` Log Message

The following keys are discovered from the `REPORT` message:
- `@type`: is always `REPORT`
- `@requestId`: the request ID of the Lambda invocation
- `@duration`: the duration in milliseconds
- `@billedDuration`: the billed duration in milliseconds
- `@memorySize`: the total memory available to the invocation, in MB
- `@maxMemoryUsed`: the max memory used, in MB
- `@initDuration`: the duration of the lambda initialisation in milliseconds (cold starts)

If the Lambda function is instrumented with XRAY, additional keys are discovered:

- `@xRAYTraceId`: the XRAY trace ID
- `@segmentId`: the XRAY segment ID
- `@sampled`: always `true`

```json # :icon-code: output
REPORT RequestId: 8fc6f963-411b-58b5-8483-a32130c0f45d Duration: 201.67 ms Billed Duration: 202 ms Memory Size: 2048 MB Max Memory Used: 81 MB Init Duration: 480.25 ms XRAY TraceId: 1-61c86fa4-59b3c6d959653c527fd10966 SegmentId: 107ea78a5750a811 Sampled: true

{
  @type: "REPORT",
  @requestId: "8fc6f963-411b-58b5-8483-a32130c0f45d",
  @duration: 201.67,
  @billedDuration: 202,
  @memorySize: 2048,
  @maxMemoryUsed: 81,
  @initDuration: 480.25,
  @xRAYTraceId: "1-61c86fa4-59b3c6d959653c527fd10966",
  @segmentId: "107ea78a5750a811",
  @sampled: true
} 
```

#### Timeout Invocations

If your async Lambda invocation times out, Additional keys are automatically discovered:
- `@timedOut`: always `true`
- `@timeout`: the duration after which the invocation timed-out in seconds
- `@message`: always `Task timed out after {@timeout} seconds`
- `@timestamp`: the timestamp at the moment the invocation timed out.

```json # :icon-code: output
 2021-12-26T13:15:48.760Z 5b252591-51c6-5d15-87a9-7fd33ce32be4 Task timed out after 15.01 seconds

{
  @timestamp: "2021-12-26T13:15:48.760Z",
  @requestId: "5b252591-51c6-5d15-87a9-7fd33ce32be4",
  @timedOut: true,
  @message: "Task timed out after 15.01 seconds",
  @timeout: 15.01
} 
```

#### `console.log` Log Message

We recommend writing directly to `stdout` and `stderr` from your Lambda functions. For Node.js environments, AWS Lambda uses a modified version of `console.log` (and other `console` logging functions) to write to `stdout` and `stderr`. These add fields to the log message which are parsed in discovered keys.

- `@timestamp`: the timestamp at the moment the log message was written
- `@requestId`: the request ID of the Lambda invocation
- `LogLevel`: the log level (`INFO`, `DEBUG`, `WARN`, `ERROR`)
- `@message`: the message.

!!!
If the message in `@message` is a valid JSON object, Baselime will parse it, otherwise it will be considered a `string`.
!!!

```json # :icon-code: output
 2021-12-26T14:00:19.258Z e578aebe-054e-4844-835c-66a75d3112cf ERROR Error doing something.

{
  @timestamp: "2021-12-26T14:00:19.258Z",
  @requestId: "e578aebe-054e-4844-835c-66a75d3112cf",
  LogLevel: "ERROR",
  @message: "Error doing something."
} 
```

---

## Troubleshooting

If you're having trouble sending data from your AWS Lambda logs to Baselime, here are a few things to check:

- Verify that your AWS account is correctly connected to Baselime and you receive data in other datasets such as [CloudWatch Metrics](./cloudwatch-metrics.md) or [CloudTrail Events](./cloudtrail.md)
- Check that your Lambda functions are not already using the maximum number of subscription filters allowed per log group. AWS limits each log group to 2 subscription filters at most. If you're already at the limit, you can remove subscription filters with the [cloudwatch-subscription-filters-remover](https://github.com/baselime/cloudwatch-subscription-filters-remover) to delete the ones you don't need anymore.
- Make sure that your AWS Lambda functions are being invoked and you can view the logs in the CloudWatch section of the AWS Console
