---
label: Discovered Keys
order: -2
---

# Discovered Keys

Discovered keys are keys automatically generated from your events and traces.

---

## Lambda Discovered Keys

The Lambda service automatically write logs at the beginning and end of every Lambda function invocation. There logs are parsed as events in Baselime, and keys are automatically discovered from those messages.

### `START` Log Message

The following keys are discovered from the `START` message:
- `@type`: is always `START`
- `@requestId`: the request ID of the Lambda invocation
- `@version`: the invoked version of the Lambda function

```json
 START RequestId: d5d410e5-7406-5a1b-888e-4aa7492a313d Version: $LATEST

{
  @type: "START",
  @requestId: "d5d410e5-7406-5a1b-888e-4aa7492a313d",
  @version: "$LATEST"
} 
```

### `END` Log Message

The following keys are discovered from the `END` message:
- `@type`: is always `END`
- `@requestId`: the request ID of the Lambda invocation

```json
 END RequestId: d5d410e5-7406-5a1b-888e-4aa7492a313d

{
  @type: "END",
  @requestId: "d5d410e5-7406-5a1b-888e-4aa7492a313d",
} 
```

### `REPORT` Log Message

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

```json
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

### Timeout Invocations

If your async Lambda invocation times out, Additional keys are automatically discovered:
- `@timedOut`: always `true`
- `@timeout`: the duration after which the invocation timed-out in seconds
- `@message`: always `Task timed out after {@timeout} seconds`
- `@timestamp`: the timestamp at the moment the invocation timed out.

```json
 2021-12-26T13:15:48.760Z 5b252591-51c6-5d15-87a9-7fd33ce32be4 Task timed out after 15.01 seconds

{
  @timestamp: "2021-12-26T13:15:48.760Z",
  @requestId: "5b252591-51c6-5d15-87a9-7fd33ce32be4",
  @timedOut: true,
  @message: "Task timed out after 15.01 seconds",
  @timeout: 15.01
} 
```

### `console.log` Log Message

We recommend writing directly to `stdout` and `stderr` from your Lambda functions. For Node.js environments, AWS Lambda uses a modified version of `console.log` (and other `console` logging functions) to write to `stdout` and `stderr`. These add fields to the log message which are parsed in discovered keys.

- `@timestamp`: the timestamp at the moment the log message was written
- `@requestId`: the request ID of the Lambda invocation
- `LogLevel`: the log level (`INFO`, `DEBUG`, `WARN`, `ERROR`)
- `@message`: the message.

!!!
If the message in `@message` is a JSON object, Baselime will parse it, otherwise it will be considered a `string`.
!!!

```json
 2021-12-26T14:00:19.258Z e578aebe-054e-4844-835c-66a75d3112cf ERROR Error doing something.

{
  @timestamp: "2021-12-26T14:00:19.258Z",
  @requestId: "e578aebe-054e-4844-835c-66a75d3112cf",
  LogLevel: "ERROR",
  @message: "Error doing something."
} 
```
