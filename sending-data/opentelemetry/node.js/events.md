---
label: Custom Events
order: -2
expanded: false
---

The [Baselime Node.js OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/lambda-node-opentelemetry) provides and extension that enables you add context rich events to your traces using an API that feels like a logger. These events can be useful to show more detailed context on errors, add steps that you want recorded for a business process or adding extra debugging information.

```javascript
const { logger } = require("@baselime/lambda-node-opentelemetry");

logger.info("This is an informational message", {
  operation: "copy-paste-replace",
  count: 9000,
});
```

The extension provides an object that includes four logging functions - info, warn, debug, and error - enabling you to log messages with varying levels of severity. By setting the LOG_LEVEL environment variable, you can control the visibility of the events.

```javascript
const { logger } = require("@baselime/lambda-node-opentelemetry");

logger.info("This is an informational message", { payload: { foo: "bar" } });
logger.warn("This is a warning message", { payload: { foo: "bar" } });
logger.debug("This is a debug message", { payload: { foo: "bar" } });
logger.error("This is an error message", { payload: { foo: "bar" } });
```

It shares the same interface as `@baselime/lambda-logger` so if you are moving from cloudwatch to open telemetry this makes the transision seamless.

## Adding custom spans

To add custom spans to your OpenTelemetry traces, it is necessary to install the `@opentelemetry/api` package. It is left out of the [Baselime Node.js OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/lambda-node-opentelemetry) to limit the impact on cold-starts, such that your can add it only to the AWS Lambda functions that require it.

```javascript
import { trace } from "@opentelemetry/api";
const tracer = trace.getTracer('your-custom-traces');

export async function handler(event) {
  const activeSpan = trace.getActiveSpan();
  
  const { userId } = JSON.parse(event.body);
  activeSpan.setAttribute('user', userId)
  
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
