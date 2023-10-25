---
order: -1
---

# Baselime Cloudflare Logging

!!!
Works on the cloudflare Worker free plan
!!!

Use the `@baselime/edge-logger` when you overcome the limitations of logpush and have complete control over your cloudflare logging.

Collect logs from

* [Cloudlare Workers](https://developers.cloudflare.com/workers)
* [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/platform/functions/)
* [Cloudflare Pages Middleware](https://developers.cloudflare.com/pages/platform/functions/)


## Usage

### Step 1: Install @baselime/edge-logger

Install the [Baselime Edge Logger](https://github.com/baselime/edge-logger). 

```bash # :icon-terminal: terminal
npm i @baselime/edge-logger
```

### Step 2: Configure the Logger

!!!
`ctx.waitUntil(logger.flush());` You must flush at the end of your invocation.
!!!

```typescript # :icon-code: src/index.ts
import { BaselimeLogger } from '@baselime/edge-logger'

export interface Env {
	BASELIME_KEY: string
	IS_LOCAL_DEV?: string
}

export default {
	async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const logger = new BaselimeLogger({
			ctx,
			apiKey: env.BASELIME_KEY,
			service: 'my-worker',
			dataset: 'cloudflare',
			namespace: 'fetch',
			requestId: crypto.randomUUID(),
			isLocalDev: env.IS_LOCAL_DEV
		})

		logger.info('Hello world', { cfRay: req.headers.get('cf-ray'), foo: 'bar' })

		ctx.waitUntil(logger.flush());
		return new Response('Hello world!');
	}
}
```

### Step 3: Add the Baselime API Key to your wrangler.toml file

Set the `BASELIME_KEY` environment variable to your Baselime public API Key. Get your pulic API key from the [Baselime console](https://console.baselime.io).


```toml # :icon-code: wrangler.toml
[vars]
BASELIME_KEY = "your baselime key"

```

---

## Configuration

The BaselimeLogger class takes the following configuration options

| Property        | Type                |  Description                    |
|-----------------|---------------------|---------------------------------|
| `ctx`           | `ExecutionContext`  | Execution context              |
| `apiKey`        | `string`            |  API key for authentication      |
| `dataset`       | `string`            |  Optional dataset name          |
| `service`       | `string`            |  Optional service name          |
| `namespace`     | `string`            |  Optional namespace             |
| `baselimeUrl`   | `string`            |  Optional base URL              |
| `flushAfterMs`  | `number`            |  Flush after milliseconds       |
| `flushAfterLogs`| `number`            |  Flush after a number of logs   |
| `requestId`     | `string`            |  Request ID   |
| `isLocalDev`    | `boolean`           |  Indicates if it's for local development |

## Local Development

For pretty formatted logs in wrangler add a `.dev.var` file to your wrangler project

```.env
IS_LOCAL_MODE=1
```

and add the isLocalDev property when configuring the logger

```javascript
export default {
	async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const logger = new BaselimeLogger({
			ctx,
			apiKey: env.BASELIME_KEY,
			isLocalDev: env.IS_LOCAL_DEV
		})


        logger.info("Pretty Formatted Logs", {
            "foo": "bar"
        });

        ctx.waitUntill(logger.flush())
    }
}
```
---

## Supported methods

```javascript
logger.info("This is an informational message", { payload: { foo: "bar" } });
logger.warn("This is a warning message", { payload: { foo: "bar" } });
logger.error("This is an error message", { payload: { foo: "bar" } });
```
