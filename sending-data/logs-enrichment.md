---
label: Enriching Logs
order: -9
---

# Enriching Logs in Baselime

---

Baselime enables you to enrich your logs with special fields to enable deeper insights into your application's performance and traceability.

The available fields are:
- `requestId`
- `duration`
- `traceId`
- `error`
- `namespace`

You can add those fields to your logs to enable the [Requests](../analysing-data/overview.md) view in Baselime.

!!!
Baselime automatically adds those fields to logs coming from cloud services with deep integrations such as [AWS Lambda](./aws/lambda-logs.md) and [Vercel](./vercel.md).
!!!

---

## Grouping your logs by request

Baselime enables you to group your logs by request by adding a `requestId` field to all the logs and events within the same request.

In an Express.js server:

```javascript #
const express = require('express');
const crypto = require('crypto');
const app = express();

app.use((req, res, next) => {
  // Generate a unique request ID
  const requestId = crypto.randomUUID();

  // Attach the requestId to the request object
  req.requestId = requestId;

  // Continue to the next middleware or route
  next();
});

app.get('/example', (req, res) => {
  // Access the requestId from the request object
  const requestId = req.requestId;

  // Add the requestId to the log
  console.log(JSON.stringify({ message: `Hello, World!`, requestId }));

  // Continue your route logic
});
```

!!!
You can leverage your favourite logger to automatically add the `requestId` field to all the logs within a single request.
!!!

!!!
In addition to HTTP requests, you can use the `requestId` field to group logs for any task, such as background jobs or build processes.
!!!

---

## Measuring Request Duration

Add the `duration` field to at least one log or event from a request to measure its duration and enable analytics on request durations in Baselime.

For example, in an Express.js server:

```javascript #
const express = require('express');
const crypto = require('crypto');
const app = express();

app.use((req, res, next) => {
  const requestId = crypto.randomUUID();
  req.requestId = requestId;
  next();
});

app.get('/example', (req, res) => {
  const startTime = Date.now();

  // Your route logic here
  
  const requestId = req.requestId;
  const duration = Date.now() - startTime;
  console.log(JSON.stringify({ message: `End of the request`, requestId, duration }));

});
```

---

## Capturing errors in your events

Add the `error` field to any event where an error occured in your application. The value of the error field must be a string. Any event with the `error` field will be captured by the Baselime automatic error-tracking.

For example:

```javascript #
function willThrow() {
  try {
    throw new Error("An error message");
  } catch (error) {
    console.log(JSON.stringify({ message: "There was an error", error: error.message }));
  }
}
```

---

## Grouping error by namespace or path

Baselime enables you to group your logs by namespace or path by adding a `namespace` field to at least one log from a given request.

In an Express.js server:

```javascript #
const express = require('express');
const crypto = require('crypto');
const app = express();

app.use((req, res, next) => {
  const requestId = crypto.randomUUID();
  req.requestId = requestId;
  next();
});

app.get('/example', (req, res) => {
  const requestId = req.requestId;

  // Add the namespace to the log
  console.log(JSON.stringify({ message: `Hello, World!`, requestId, namespace: "/example" }));

  // Continue your route logic
});
```

---

## Correlating logs and traces

Refer to the [Correlate Logs with Traces](./opentelemetry/logs-correlation.md) section.

---

## Usage

Once you have enriched your logs with the additional fields, your data will show in Baselime in the [Requests](../analysing-data/overview.md) view.

![Enriched logs in Baselime](../../assets/images/illustrations/sending-data/enriching-logs.png)