---
label: Edge Logger
order: -1
---

# Edge Logger

Cloudflare Logpush is not available in all Cloudflare edge environments. In those environments, it's necessary to emit logs from within the process. The [Baselime Edge Logger](https://github.com/baselime/edge-logger) enables you to send logs from your Cloudflare edge environments to Baselime regardless of the platform.

It enables logging from:

* [Cloudlare Workers](https://developers.cloudflare.com/workers)
* [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/platform/functions/)
* [Cloudflare Pages Middleware](https://developers.cloudflare.com/pages/platform/functions/)

---

## Usage

**Step 1:** Install the [@baselime/edge-logger](https://github.com/baselime/edge-logger) package.

 

```bash # :icon-terminal: terminal
npm i @baselime/edge-logger
```

**Step 2:** Add the `BASELIME_API_KEY` to your your environment variables

```txt # :icon-code: wrangler.toml
[vars]
BASELIME_API_KEY = "BASELIME_API_KEY"
```

!!!
Get your public `BASELIME_API_KEY` from the [Baselime console](https://console.baselime.io)
!!!


**Step 3:** Use the logger

```typescript # :icon-code: src/index.ts
import { BaselimeLogger } from '@baselime/edge-logger'

export interface Env {
  BASELIME_API_KEY: string
}

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const logger = new BaselimeLogger({
      ctx,
      apiKey: env.BASELIME_API_KEY,
      service: 'my-service',
      dataset: 'cloudflare',
      namespace: 'my-worker-name',
      requestId: crypto.randomUUID(),
    })

    // Use the Baselime Edge logger to log
    logger.info('Hello, World!', { foo: 'bar' })

    // Make sure to add this to flush the logs to Baselime before the return statement
    ctx.waitUntil(logger.flush());
    return new Response('Request Completed');
  }
}
```

---

## Supported methods

```typescript # :icon-code: src/index.ts
logger.info("This is an informational message", { payload: { foo: "bar" } });
logger.warn("This is a warning message", { payload: { foo: "bar" } });
logger.error("This is an error message", { payload: { foo: "bar" } });
```
---

## Local Development

To get logs appropriately formatted in your local development environment using wrangler, add the `IS_LOCAL_MODE` environment variable to your `.dev.var` file.

```env # :icon-code: .dev.var
IS_LOCAL_MODE=1
```

And use it when configurting the `BaselimeLogger`.

```typescript # :icon-code: src/index.ts
export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const logger = new BaselimeLogger({
      ctx,
      apiKey: env.BASELIME_KEY,
      isLocalDev: env.IS_LOCAL_DEV
    })

    logger.info("Pretty Formatted Logs", { foo: "bar" });

    ctx.waitUntill(logger.flush())
  }
}
```

Local development mode is disabled by default to improve performance.

---

## Configuration

The BaselimeLogger class takes the following configuration options

| Property        | Type                |  Description                    |
|-----------------|---------------------|---------------------------------|
| `ctx`           | `ExecutionContext`  | Execution context              |
| `apiKey`        | `string`            |  API key for authentication      |
| `dataset`       | `string` (optional) |  Dataset name          |
| `service`       | `string` (optional) |  Service name          |
| `namespace`     | `string` (optional) |  Namespace             |
| `flushAfterMs`  | `number` (optional) |  Wait time to flush the logs to Baselime       |
| `flushAfterLogs`| `number` (optional) |  Threshold number of logs to flush   |
| `requestId`     | `string` (optional) |  Request ID   |
| `isLocalDev`    | `boolean` (optional)|  Indicates if it's for local development |
