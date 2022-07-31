---
label: Welcome to Baselime
icon: home
---
# Welcome to Baselime

[Baselime](https://baselime.io) is an Observability as Code platform based on OpenTelemetry that makes it easy for your team to resolve incidents and performance bottlenecks in your serverless applications.

Baselime currently supports serverless services on [AWS](https://aws.amazon.com/).

![](./assets/images/cli.svg)

---

## Observability as Code

Typically, monitoring and observability solutions let you define your configurations in web-based user interfaces.

Baselime empowers you to write your observability configurations in human-readable declarative configuration files, alongside your application code. This lets you create a blueprint that you can version, share and re-use. Observability becomes a first-class citizen of your software development process.

The primary interface to interact with Baselime is the [Baselime CLI](./cli/install.md).

---

## Events, Logs, Metrics and Traces

Serverless runtimes and infrastructures emit telemetry data in various formats. These are usually the missing context when debugging defects and incidents. Baselime doesn't re-invent the wheel. Data is gathered in your serverless application from:
- Direct integration with AWS services through CloudFormation
- OpenTelemetry to capture runtime traces
- Logs and Metrics from CloudWatch
- An Events API which empowers you to send events directly through HTTP

---

## Baselime Data Storage

Baselime [securely stores](./security/overview.md) your telemetry data per namespace. A namespace is typically a Lambda function. Namespaces help partition your data and facilitate querying your data.

---

## Queries, Alerts and Dashboard

Query your data, using any of the Baselime clients, to get a deeper understanding of your production systems. Create and share alerts and dashboard based on the results of your queries.

---

## Collaboration

Baselime is built for **teams**. Collaborate with your team on the findings and learnings from your queries and dashboards.

---

## Made for Developers

Monitoring and observability platforms are usually built with operations professionals as primary users; Baselime puts the developer at the center of the observability efforts of your teams. Baselime shifts left observability in your developement lifecycles.

---

```js # :icon-code: quick-start.js
if(baselime.use === "first-time") {
  return quickStart();
}
```
