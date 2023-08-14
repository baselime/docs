---
label: FAQ
order: 1
---

## What is Baselime?

[Baselime](https://baselime.io) is an observability solution that makes observability for cloud-native microservices easy. Baselime covers your logs, metrics, traces (both [OpenTelemetry](https://opentelemetry.io/) and AWS X-Ray) and security events in a single solution. Baselime is built on top of ClickHouse, the fastest analytics database in the world. 

---

## How much does it cost?

Baselime pricing is based on the number of invocations or traces your systems produce. This scales linearly with the traffic your applications handle. Moreover, Baselime has a full free tier for up to 200K invocations / traces.

Check out our [pricing page](https://baselime.io/pricing) for more details.

---

## How does Baselime count invocations and traces for billing?

Invocations are counted using the `REPORT` line of your AWS Lambda function logs. Each instance of the `REPORT` line is an invocations. Distributed traces are counted using the number of unique trace ids received from your services. If a traceID is matched with an existing invocation using the `REPORT` line, the trace is not counted towards your monthly number of traces.

If a trace goes through multiple function invocations, each invocation is counted individually, and the trace is not counted. As such you are not charged twice for the same invocations.

Baselime counts the number of invocations and traces daily and updates your dashboard accordingly.

---

## Does Baselime support containers?

Baselime works with any environment where OpenTelemetry is available. Moreover, Baselime provides an events HTTP API that could be used to send events individually from environments where OpenTelemetry is not available.

That being said, Baselime has a native integration with both serverless and container platforms on AWS:
- AWS Lambda
- Amazon ECS (Fargate and EC2)
- Amazon AppRunner

---

## Does Baselime support multi-accounts and multi-regions?

Yes, Baselime has support for multi-accounts and multi-region. When you connect your first cloud account to Baselime, Baselime created a Baselime Environment. You can subsequently add as many new cloud accounts or region to the Baselime environment. All your telemetry data from those separate accounts and regions will be unified in the Baselime environment.

---

## How easy is it to instrument my applications?

When you connect your AWS account to Baselime, logs from your AWS Lambda functions, API Gateways and AppRunner services, and metrics from your entire AWS account are automatically ingested into Baselime. No further setup is required.

Moreover, if you have Amazon X-Ray enabled on your services (both serverless functions and containers), these traces are automatically ingested into Baselime.

To adopt OpenTelemetry distributed tracing, add the `baselime:tracing` tag to your AWS Lambda functions using the Node.js runtime and these will be automatically instrumented. We're currently working on more runtimes. 

---

## How do I get distributed tracing?

Baselime supports both OpenTelemetry and AWS X-Ray for distributed tracing. If you application is already instrumented with OpenTelemetry, change the destination of your instrumetation to the Baselime endpoint:
- URL: https://otel.baselime.io/v1
- Header: `x-api-key: <BASELIME_API_KEY>`

Alternatively, you can instrument your AWS Lambda function with the Baselime OpenTelemetry tracer. Simply add the `baselime:tracing` tag to your AWS Lambda functions, and set it to `true`.

!!!
The automatic OpenTelemetry tracing with the tag is available for Node.js AWS Lambda functions, we're currently working on enabling this for other runtimes.
!!!

If you use AWS X-Ray, Baselime automatically capture traces from X-Ray when your AWS Account is connected.

---

## How hard is it to remove Baselime from my AWS account?

If you decide to remove Baselime from your AWS account, delete the CloudFormation template Baselime creates on your AWS account. That's all, all resources Baselime created, including the instrumentation layers, will be removed.

---

## Does Baselime automatically recognise new functions and services?

Yes, when you deploy new serverless functions and services to your cloud infrastructure, Baselime automatically detects them and starts ingesting logs, metrics and traces from those function. To add OpenTelemetry tracing, add the `baselime:tracing` tag to your new functions and set it to `true`. 

---

## Where is my data stored?

You own your data.

All the telemetry data your cloud infrastructure generate is storred in two data tiers:
- hot tier: on Baselime accounts, to enable fast queries
- cold tier: in an Amazon S3 bucket in your AWS cloud account for long terms storage

It is possible to rehydrate data from the cold tier to the hot tier for queriyng historical incidents free of charge.

---

## Is my data secure?

Baselime is fully GDPR compliant and your data is storred in data centers that are all SOC2 compliant.

---

## How can I work with my team?

Once you sign up to Baselime with your organisation domain email, you can configure Baselime such that anyone with the same email domain can join your workspace.

Moreover, you can invite your teammates individurally. Additionally, every query result, dashboards, an alerts have a unique permalink in Baselime that you can share with your team.

