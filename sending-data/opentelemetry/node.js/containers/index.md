# Containers

The [Baselime SDK for Open Telemetry](https://github.com/Baselime/lambda-node-opentelemetry) (Star us ⭐) for Node.js removes the boilerplate of instrumenting container based services. 

## Quick Start

Install the dependencies

```
npm i --save-dev @baselime/node-opentelemetry @opentelemetry/auto-instrumentations-node
```

Create the `src/tracing.cjs` file inside your containers `src` directory

```javascript
const { BaselimeSDK } = require('@baselime/node-opentelemetry');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');


const sdk = new BaselimeSDK({
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
```
Set the environment variables

* BASELIME_KEY set to the api key for your Baselime environment
* NODE_OPTIONS to load the tracer when the container starts


Make the BASELIME_KEY environment variable is set to the api key for your Baselime environment and the NODE_OPTIONS e

+++ SST
```typescript
const service = new Service(stack, 'sst-service', {
    path: './',
    environment: {
        BASELIME_KEY: StringParameter.valueForStringParameter(stack, 'baselime-key'),
        NODE_OPTIONS: '-r ./src/tracing.cjs --experimental-loader=import-in-the-middle/hook.mjs'
    }
});
```
+++ CDK
```typescript
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


## Configuration

The BaselimeSDK class takes the following configuration options

| Field            | Type                    | Description                          |
| ---------------- | ----------------------- | ------------------------------------ |
| instrumentations | InstrumentationOption[] | An array of instrumentation options. |
| baselimeKey      | string (optional)       | The Baselime key.                    |
| collectorUrl     | string (optional)       | The URL of the collector.            |
| service          | string (optional)       | The service name.                    |
| namespace        | string (optional)       | The namespace.                       |
