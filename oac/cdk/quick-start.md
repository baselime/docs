---
label: Baselime CDK Quick Start
order: 0
---

Observability is a first class citizen of your infrastructure with Baselime. You
can use the [AWS CDK](https://aws.amazon.com/cdk/) to define your observability
configurations in Baselime.

![](../../assets/images/logos/cdk.png)

---

## Installation

Download the [Baselime CDK](https://github.com/baselime/cdk) on npm:
[`@baselime/cdk`](https://www.npmjs.com/package/@baselime/cdk)

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

---

## Configuration

Initialise the Baselime CDK with your Baselime API Key.

```typescript # :icon-code: index.ts
import { Baselime } from "@baselime/cdk";

Baselime.init(this, {
  apiKey: `<BASELIME_API_KEY>`,
});
```

---

## Example alert

Set up an alert everytime there's an error in your application logs:

```typescript # :icon-code: index.ts
import { Alert, eq } from "@baselime/cdk";

new Alert("service-errors", {
  parameters: {
    query: {
      filters: [
        filter.inArray(eq("LogLevel", "ERROR")),
      ],
    },
    channel: { type: "slack", targets: ["baselime-alerts"] }
  },
});
```

This alert will notify you on Slack when there is an event with `LogLevel` equal `"ERROR"` in your telemetry data.
