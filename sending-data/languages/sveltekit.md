---
order: 0
label: SvelteKit
---

# OpenTelemetry for SvelteKit

Instrument your [SvelteKit](https://kit.svelte.dev/) applications with [OpenTelemetry](https://opentelemetry.io/) using the the [Baselime Node.js OpenTelemetry SDK](https://github.com/baselime/node-opentelemetry) and the [SvelteKit OpenTelemetry Middleware](https://github.com/baselime/sveltekit-opentelemetry-middleware).

!!!
If you deploy your SvelteKit applications on Vercel, install the [Vercel Baselime Integration](https://vercel.com/integrations/baselime) to enable logs in addition to distributed tracing.
!!!

---


## Instrumentation

!!!
Check out a complete example in our [GitHub Examples Repo](https://github.com/baselime/examples/tree/main/svelte-opentelemetry-vercel).
!!!

### Step 1: Install the SDK


Install `@baselime/node-opentelemetry` in your project.

```bash # :icon-terminal: terminal
npm i @baselime/node-opentelemetry @baselime/sveltekit-opentelemetry-middleware
```

### Step 2: Initialise the tracer

Create a file `instrumentation.ts` in the root of your project and add the following code to configure and initialize OpenTelemetry.


```typescript # :icon-code: instrumentation.ts
import { withOpenTelemetry } from '@baselime/sveltekit-opentelemetry-middleware'
import { BaselimeSDK } from '@baselime/node-opentelemetry';

new BaselimeSDK({}).start();

export const handle = withOpenTelemetry(async ({ event, resolve }) => resolve(event));
```

!!!
If you use a `/src` folder your project, add the `instrumentation.ts` file in the `/src` folder instead of the root folder.
!!!

### Step 3: Set the Baselime environment variables

Set the `BASELIME_KEY` environment variable to your Baselime public API Key. Get your pulic API key from the [Baselime console](https://console.baselime.io).

