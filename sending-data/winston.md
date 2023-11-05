---
order: 0
label: Winston
---

# Baselime Winston Transport

Send structured logs to Baselime with [winston](https://github.com/winstonjs/winston) and the [`@baselime/winston-transport](https://www.npmjs.com/package/@baselime/winston-transport).

## Step 1: Install the Transport

```bash :code-icon:
npm i @baselime/winston-transport
```
---
## Step 2: Setup

Set up the Winston Logger with the Baselime Transport.

!!!
Get the Baselime API Key from the [Baselime Console](https://console.baselime.io/) and set it in your projects environment variables
!!!

```javascript
import winston from 'winston';
import { BaselimeTransport } from '@baselime/winston-transport';

const logger = winston.createLogger({
    transports: [
        new BaselimeTransport({
            baselimeApiKey: 'YOUR_API_KEY'
        })
    ]
})
```
---

## Step 3: Use the logger

```js # :code-icon:
logger.error("I will display in the Baselime Error Page");
logger.info("Logging with Winston and Baselime is AWESOME", {
    winston: "AWESOME",
    baselime: "AWESOME",
    logging: "AWESOME"
});
```

---

## Configuration

The `@baselime/winston-transport` takes the following options

| Field            | Type                    | Description                          |
| ---------------- | ----------------------- | ------------------------------------ |
| `baselimeApiKey`      | `string`       | The Baselime API key                    |
| `dataset`     | `string` (optional)       | The dataset name - defaults to winston-logs  |
| `service`          | `string` (optional)       | The service name                    |
| `namespace`        | `string` (optional)       | The namespace                       |
