# Containers

The [Baselime Node.js SDK for OpenTelemetry](https://github.com/baselime/node-opentelemetry) (Star us ⭐) enables you to instrument your Node.js container services with OpenTelemetry without the boilerplate of using the OpenTelemetry SDK directly. 

---

## Instrumentation

### Step 1

Install the [Baselime Node.js SDK for OpenTelemetry](https://github.com/baselime/node-opentelemetry). 

```bash
npm i --save-dev @baselime/node-opentelemetry @opentelemetry/auto-instrumentations-node
```

### Step 2

Create a `tracing.cjs` file inside your application working directory.

``` javascript # :icon-code: src/tracing.cjs
const { BaselimeSDK } = require('@baselime/node-opentelemetry');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');


const sdk = new BaselimeSDK({
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
```

### Step 3

Set the environment variables of your comntainer service to include the Baselime API Key and set the NODE_OPTIONS enviroment variable to preload the OpenTelemetry SDK into your application.

| Key          | Value                                       | Description                                                                         |
| ------------ | --------------------------------------------- | ----------------------------------------------------------------------------------- |
| BASELIME_KEY | <you-api-key>               | Get this key from the [Baselime CLI](https://github.com/Baselime/cli) running `baselime iam` |
| NODE_OPTIONS | `-r ./src/tracing.cjs --experimental-loader=import-in-the-middle/hook.mjs` | Preloads the OpenTelemetry SDK at startup                                                 |

+++ SST

```typescript #
const service = new Service(stack, 'sst-service', {
    path: './',
    environment: {
        BASELIME_KEY: StringParameter.valueForStringParameter(stack, 'baselime-key'),
        NODE_OPTIONS: '-r ./src/tracing.cjs --experimental-loader=import-in-the-middle/hook.mjs'
    }
});
```
+++ AWS CDK
```typescript #
const loadBalancedFargateService = new ecsPatterns.ApplicationLoadBalancedFargateService(stack, 'Service', {
    cluster,
    taskImageOptions: {
        environment: {
            BASELIME_KEY: StringParameter.valueForStringParameter(stack, 'baselime-key'),
            PORT: '80',
            NODE_OPTIONS: '-r ./src/tracing.cjs',
        }
    },
});
```
+++

Once these steps are completed, distributed traces from your Node.js container applications should be available in Baselime to query via the console or the CLI.

![Example OpenTelemetry Trace](../../../../assets/images/illustrations/sending-data/opentelemetry/trace.png)

---

## Configuration

The `BaselimeSDK` class of the [Baselime Node.js SDK for OpenTelemetry](https://github.com/baselime/node-opentelemetry) takes the following configuration options.

| Field            | Type                    | Description                          |
| ---------------- | ----------------------- | ------------------------------------ |
| instrumentations | InstrumentationOption[] | An array of instrumentation options. |
| baselimeKey      | string (optional)       | The Baselime API key.                    |
| collectorUrl     | string (optional)       | The URL of the collector.            |
| service          | string (optional)       | The service name.                    |
| namespace        | string (optional)       | The namespace.                       |
