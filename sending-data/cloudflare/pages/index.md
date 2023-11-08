---
label: Cloudflare Pages
order: 0
---

# Cloudflare Pages

[Cloudflare Pages](https://developers.cloudflare.com/pages/) is a frontend app development platform. You can use the [`@baselime/edge-logger`](./edge-logger.md) to send logs from the [Server Side](https://en.wikipedia.org/wiki/Server-side) parts of these web frameworks.

## Frameworks

Configuring logs for your favourite frameworks can be tough so we detail how to do it here. 

[!ref icon="../../../assets/images/logos/svelte_logo.png"](./sveltekit.md)

Request a guide for your framework in the [Baselime Community](https://join.slack.com/t/baselimecommunity/shared_invite/zt-25rig7ul2-m06V0DdYWpFHu~qH3F7DhQ)

## Vanilla Cloudflare Pages

You can setup logs for [Cloudflare Pages](https://developers.cloudflare.com/pages/) Functions in 5 steps.

---
**Step 1:** Install the [@baselime/edge-logger](https://github.com/baselime/edge-logger) package.

```bash # :icon-terminal: terminal
npm i @baselime/edge-logger
```
---
**Step 2:**

Update your projects package json with the these `dev` and `deploy` scripts

```json #4-5 :icon-code: package.json
{
  "name": "baselime-cloudflare-pages",
  "scripts": {
    "dev": "wrangler pages dev . --binding IS_LOCAL=1",
    "deploy": "wrangler pages deploy ."
  },
  "dependencies": {
    "@baselime/edge-logger": "^0.2.1"
  }
}    
```
---
**Step 3:**

Add the logger to your worker code in the functions directory

```javascript #4-8,12 :icon-code: functions/index.js
import { BaselimeLogger } from "@baselime/edge-logger"

export function onRequest(context) {
    const logger = new BaselimeLogger({
        service: "your-service-name"
        namespace: context.request.url
        apiKey: context.env.BASELIME_API_KEY,
        ctx: context,
        isLocalDev: context.env.IS_LOCAL
    });

    logger.info("Hello from the serverless world!")

    context.waitUntil(logger.flush());
    return new Response(JSON.stringify({
        message: "Hello from the serverless world!"
    }))
  } 
```

!!!
Remember to Flush, otherwise logs will not be sent to Baselime!
!!!

---

**Step 4:**

Deploy the worker to Cloudflare pages using the npm command `npm run deploy`.

To enable logging add the `BASELIME_API_KEY` environment variable to your cloudflare worker project in the [console](https://dash.cloudflare.com).

![Add Env to Cloudflare Pages](../../assets/images/illustrations/sending-data/cloudflare/pages-envs.png)

---

**Step 5:**

View your logs in the [Baselime Console](https://console.baselime.io).

![Cloudflare Pages Logs](../../assets/images/illustrations/sending-data/cloudflare/pages-logs.png)
