---
order: 1
label: Next.js and Vercel
---

# Trace Next.js With Open Telemetry

Learn how to use [OpenTelemetry](https://opentelemetry.io/) and Baselime to trace your [Next.js](https://nextjs.org/) application.

### Install `@baselime/node-opentelemetry`


Inside your Next.js project install the Baselime Node OpenTelemetry SDK


+++ NPM
```bash # :icon-terminal: terminal
npm i @baselime/node-opentelemetry 
```
+++ Yarn
```bash # :icon-terminal: terminal
yarn add @baselime/node-opentelemetry 
```
+++ PNPM
```bash # :icon-terminal: terminal
pnpm add @baselime/node-opentelemetry 
```
+++

### Set environment keys

Bellow is an example .env.local file. For production you will need to make this environment variable available to your [hosting provider](https://vercel.com/docs/projects/environment-variables)

!!!
Create an API key in the [Baselime Console](https://console.baselime.io)
!!!

```env # :icon-key: .env.local
BASELIME_KEY=409j49-40hk-5kh-r0kh
```

### Configure the BaselimeSDK

Next, create an instrumentation.ts file in the root of your project and add the following code to initialize and configure OpenTelemetry.

!!!
If you have a src/ folder the instrumentation.ts file needs to go in there
!!!

```typescript # :icon-code: instrumentation.ts
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { BaselimeSDK, VercelPlugin, BetterHttpInstrumentation } = await import('@baselime/node-opentelemetry');

    const sdk = new BaselimeSDK({
      serverless: true,
      service: "your-project-name",
      instrumentations: [
        new BetterHttpInstrumentation({ 
          plugins: [
            new VercelPlugin() // Add our vercel plugin to get log trace correlation to projects deployed to vercel
          ]
        }),
      ]
    });

    sdk.start();
  }
}
```

### Enable Next.js Auto Instrumentation

Next.js 13.4+ supports auto-instrumentation. To use this feature, add `experimental.instrumentationHook = true` to your [next.config.js](https://nextjs.org/docs/app/api-reference/next-config-js).

For more information read the [Next.js OpenTelemetry Documentation](https://nextjs.org/docs/pages/building-your-application/optimizing/open-telemetry)

```typescript # :icon-code: next.config.mjs
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
    experimental: {
        instrumentationHook: true,
    }
};

export default config;
```
