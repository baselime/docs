---
order: -10
label: Pino
---

# Baselime Pino Transport

Send structured logs to Baselime with [pino](https://github.com/pinojs/pino) and the [`@baselime/pino-transport`](https://www.npmjs.com/package/@baselime/pino-transport).

---

**Step 1:** Install the Transport

```bash :code-icon:
npm i @baselime/pino-transport
```

**Step 2:** Set up the Pino Logger with the Baselime Transport

!!!
Get your public `BASELIME_API_KEY` from the [Baselime Console](https://console.baselime.io/)
!!!

```javascript #
import pino from 'pino';

const transport = pino.transport({
  target: "@baselime/pino-transport",
  options: { baselimeApiKey: 'BASELIME_API_KEY' }
});

const logger = pino(transport);
```

**Step 3:** Use the logger

```javascript #
logger.error("I will display in the Baselime Error Page");
logger.info({
  pino: "AWESOME",
  baselime: "AWESOME",
  logging: "AWESOME"
}, "Logging with Pino and Baselime is AWESOME");
```

---

## Configuration

The `@baselime/pino-transport` takes the following options

| Field            | Type                    | Description                          |
| ---------------- | ----------------------- | ------------------------------------ |
| `baselimeApiKey`      | `string`       | The Baselime API key                    |
| `dataset`     | `string` (optional)       | The dataset name - defaults to pino-logs  |
| `service`          | `string` (optional)       | The service name                    |
| `namespace`        | `string` (optional)       | The namespace                       |
