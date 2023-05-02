---
label: Baselime CDK
order: -1
---

# Baselime CDK

Baselime natively integrates with any CDK or SST application to let you set up your applications observability along side your existing infrastructure. By defining your Observability resources along side your application using the CDK you get some awesome productivity benefits like being able to reuse the types and resources created by your IAC directly in your observability code.

```javascript
const api = new Api(stack, "api", {
  routes: {
    "GET /": "packages/functions/src/lambda.handler",
  },
});

new baselime.Query("api-get-resource-logs", {
  parameters: {
    datasets: ["lambda-logs"],
    filters: [{
      key: "@baselime.namespace",
      value: api.getFunction("GET /")?.functionName as string,
      operation: "=",
    }],
  },
});
```

These queries can then be used within your alerts and dashboards to paint a complete picture of how your application is performing

## Usage

### Setting up the Baselime CDK

The `@baselime/cdk` package should be installed in the same folder as your cdk application.

```bash
# Select your projects package manager
pnpm i --save-dev @baselime/cdk
npm i --save-dev @baselime/cdk
yarn add -D @baselime/cdk
```

Next and store your api key in ssm. You can find your api key in CLI when running

```bash
baselime iam
```

or download it from [console.baselime.io](https://console.baselime.io/)

![Get your API Key from the Console](../assets/images/illustrations/api-key.png)

Then add the parameter to SSM

```bash
aws ssm put-parameter --name "/baselime/api-key" --value "<baselime_api_key>" --type "String"
```

> If you deploy your application to multiple aws accounts and multiple Baselime environments make sure you add a baselime api key per environment and prefix with the correct stage variable


Finally you can initialise `@baselime/cdk` in your CDK stack.


```javascript
import { StackContext, Api } from "sst/constructs";
import * as ssm from "aws-cdk-lib/aws-ssm";
import * as baselime from "@baselime/cdk";

export function API({ stack }: StackContext) {

  baselime.Config.init(stack, {
    // Remember to add a stage to your parameter if required
    apiKey: ssm.StringParameter.valueForStringParameter(stack, `/baselime/api-key`);,
  });

  const api = new Api(stack, "api", {
    routes: {
      "POST /subscription": "packages/functions/src/subscription.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
```

### Instrumenting your application

Here we have an lambda function that creates a subscription. This is a critical flow within the application. We need to know about any problems asap but also the business metrics that it produces can tell us about harder to detect issues in other parts of the system. Using `@baselime/cdk` we are going to create a comprehensive set of alerts and a dashboard that gives us insight into the business metrics and performance of our application.

```javascript
const stripe = require('stripe')('sk_prod_bmljZSB0cnkgOykK');
const { logger } = require('@baselime/logger');

exports.handler = async (event) => {
  const { customerId, priceId } = JSON.parse(event.body);

  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
    });

    logger.info("Subscription created", {
        customerId, priceId, ammount_c: subscription.plan.amount
    });

    return {
      statusCode: 200,
      body: JSON.stringify(subscription),
    };
  } catch (error) {
    logger.error("Failure creating subscription", {
        customerId, priceId,
    }, error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
```

In this lambda function we have added structured json logs to each critical path of this application that give us context of what happens. The lambda runtime will also emit `START`, `END`, and `REPORT` logs that we can use to understand the performance of the application.
  
### Catching Errors

The first thing we want to do is set up alerts for any errors in our new lambda function. Our billing team want to be informed about any subscription related errors separately. This can be done by putting a custom target in the channel once the slack integration is set up

```javascript
const api = new Api(stack, "api", {
  routes: {
   "POST /subscription": "packages/functions/src/subscription.handler",
  },
});

const query = new baselime.Query("api-get-resource-logs", {
  parameters: {
    datasets: ["lambda-logs"],
    filters: [{
      key: "@baselime.namespace",
      value: api.getFunction("POST /subscription")?.functionName as string,
      operation: "=",
    }, {
      key: "LogLevel",
      operation: 'IN'
      value: ["ERROR", "error"]
    }],
  },
});

query.addAlert({
   enabled: true,
    parameters: {
        frequency: "30mins",
        threshold: "> 10",
        window: "1 hour",
    },
    channels: [{ targets: ["billing-alerts"], type: "slack" }],
});
```