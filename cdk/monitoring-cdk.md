---
label: Monitoring applications with the CDK
order: 0
---

# Baselime CDK Constructs

This is the documentation for Baselime's Observability as Code configurations using the CDK.

By defining your Observability using the CDK you get a tight integration between your CDK application and your applications alerts, dashboards, and queries. The CDK constructs are the best choice for instrumenting your application if you use the [CDK](https://aws.amazon.com/cdk/) or [SST](https://sst.dev).

Baselime CDK library has 3 constructs that map to different resources in Baselime and each serve a different purpose.

* Alerts - send a notification when a thing happens
* Query - a reusable way to discover something about your application
* Dashboard - get a birds eye view of your applications performance


## Installation

Baselime CDK is available on npm at [`@baselime/cdk`](https://www.npmjs.com/package/@baselime/cdk). This is how you download it


+++ npm

```
npm i --save-dev @baselime/cdk
```

+++ yarn

```
yarn add -D @baselime/cdk
```

+++ pnpm

```
pnpm i --save-dev @baselime/cdk
```

+++

## Config

Baselime CDK needs to be initialised in the stack it is being used in. We recommend you put the key in ssm but you can also use environment variables or secrets manager

```javascript
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Baselime } from '@baselime/cdk';

Baselime.init(this, {
    apiKey: ssm.StringParameter.valueForStringParameter(this, "/baselime/api-key"),
    defaultChannel: [{ targets: ['baselime-alerts'], type: 'slack' }]
});
```

A defaultChannel for alerts is also recommended because it means you don't have to specify it in every alert.

## Alert

Alert sends a POST request to a url or a slack. It also creates a snapshot of what happened around the time the alert fired so you can find related information.

```javascript
new Alert("service-errors", {
    parameters: {
        query: {
            filters: [filter.inArray("LogLevel", ["ERROR", "Error", "error", "FATAl", "Fatal", "fatal"])], // just covering all the basis lmao
        },
    },
});
```

You can also configure the threshold, frequency, window channel and define the query seperately so it can be easily reused.
```javascript
const query = new Query('daily-error-roundup-query', {
   ...
});

new Alert("daily-error-roundup", {
    parameters: {
        query
        threshold: threshold.gt(10)
		frequency: '24 hours',
		window: '24 hours',
    },
    channels: [{ type: 'webhook', targets: ['https://example.com/']}]
});
```

## Query

Queries form the building blocks of all your Observability. The CDK Observability construct lets you define your queries in javascript or typescript so that you can deeply integrate them with your stack. For example you can use the name of a resource to link it specifically to your OAC in a way that works across all stages of your stack

```javascript
const fn = new Function(this, 'new-lambda-function', {
    handler: 'src/functions/main.handler'
});

new Query('Top 10 users of analytics', {
    calculations: [{
        operation: 'MAX',
        key: '@message.data.events'
    }],
    filters: [
        filter.eq("$baselime.namespace", fn.functionName),
        filter.eq("@message.message", "Events submitted for analysis")
    ], 
    groupBy: {
        value: "@message.data.customerId"
        limit: 10
        orderBy: "Count"
        order: DESC
    }   
});
```

The query does not run at deploy time but is created in the environment so you can run it as part of dashboards, alerts, or a standalone query. 

## Dashboard

Dashboards let you display a list of queries on a single page.

```javascript
const latencyQuery = new Query('latency-query', {...});
const query = new Query('lambda-errors', { ... })
new baselime.Dashboard('MyDashboard', {
  parameters: {
    widgets: [
      { query, name: "Chart 1" },
      { query: latecyQuery, name: "Latency Chart" },
    ],
  },
});

```





