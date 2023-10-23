---
label: FAQ
order: 1
---

## What is Baselime?

[Baselime](https://baselime.io) is an observability solution that makes observability for cloud-native microservices easy. Baselime covers your logs, metrics, traces in a single solution. Baselime is built on top of ClickHouse, the fastest columnar database in the world. 

---

## How much does it cost?

Baselime pricing is based on the number of events your systems produce. This scales linearly with the traffic your applications handle. Moreover, Baselime has a full free tier for up to 20M events per month.

Check out our [pricing page](https://baselime.io/pricing) for more details.

---

## How does Baselime count events for billing?

Baselime counts the number of events daily and updates your dashboard accordingly. Baselime does not count Amazon CloudWatch metrics or Amazon CloudTrail logs as part of the monthly event cap. All other events are counted, include the `START`, `END` and `REPORT` log lines from serverless functions.

---

## Does Baselime support containers?

Baselime works with any environment where OpenTelemetry is available. Moreover, Baselime provides an HTTP API where you can send events individually from environments where OpenTelemetry is not available.

Baselime has a native integration with container platforms on AWS:
- Amazon ECS (Fargate and EC2)
- Amazon AppRunner

These integration enable logs, metrics and traces generated without OpenTelemetry to be automatically ingested into Baselime.

---

## Does Baselime support multi-accounts and multi-regions?

Yes, Baselime supports for multi-account and multi-region setups. When you connect your first cloud account to Baselime, Baselime creats a Baselime environment. You can subsequently add as many new cloud accounts or regions to the Baselime environment. All your telemetry data from those separate accounts and regions will be unified in the Baselime environment.

---

## How easy is it to instrument my AWS applications?

When you connect your AWS account to Baselime, logs from your AWS Lambda functions, API Gateways and AppRunner services, and metrics from your entire AWS account are automatically ingested into Baselime. No further setup is required.

When you connect your Vercel account to Baselime, all your Vercel application logs, edge function logs and build logs are ingested into Baselime. No further setup is required.

Moreover, if you have Amazon X-Ray enabled on your services (both serverless functions and containers), these traces are automatically ingested into Baselime.

To use OpenTelemetry distributed tracing, add the `baselime:tracing` tag to your AWS Lambda functions using the Node.js runtime and these will be automatically instrumented. We're currently working on more runtimes.

For any other runtimes or environments, instrument your applications with OpenTelemetry or send your logs via the HTTP API.

---

## How easy is it to instrument my Vercel applications?


When you connect your Vercel account to Baselime, all your Vercel application logs, edge function logs and build logs are ingested into Baselime. No further setup is required.

---

## How do I get distributed tracing?

Baselime supports both OpenTelemetry and AWS X-Ray for distributed tracing. If you application is already instrumented with OpenTelemetry, change the destination of your instrumetation to the Baselime endpoint:
- URL: https://otel.baselime.io/v1
- Header: `x-api-key: <BASELIME_API_KEY>`

Alternatively, you can instrument your AWS Lambda function with the Baselime OpenTelemetry tracer. Add the `baselime:tracing` tag to your AWS Lambda functions, and set it to `true`.

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

You can select to use either our cloud offering, or our **Bring Your Own Backend** solution. With **Bring Your Own Backend**, all the data is stored on your AWS account and your use the Baselime clients to access it.

### Cloud offering

All the telemetry data your cloud infrastructure generate is stored in two data tiers:
- hot tier: on Baselime AWS accounts in the `eu-west-1` region. This data is used for fast questions
- cold tier: in an Amazon S3 bucket in your AWS cloud account. This data is used for long terms storage in a resource you own

It is possible to rehydrate data from the cold tier to the hot tier for queriyng historical incidents free of charge.

### Bring Your Own Backend

Baselime can integrate with your own backend. As such, all the telemetry data is stored and queried in your cloud account. The enables you to keep maximum flexibility and privacy for storing sensitive data. You will be able to set your own retention periods, your own storage type, and your own privacy settings.

**Bring Your Own Backend** is available on our Enterprise Plans.

---

## Is my data secure?

Baselime is fully GDPR compliant and your data is stored in data centers that are all SOC2 compliant.

---

## How can I work with my team?

Once you sign up to Baselime with your organisation domain email, you can configure Baselime such that anyone with the same email domain can join your workspace.

Moreover, you can invite your teammates individurally. Additionally, every query result, dashboards, an alerts have a unique permalink in Baselime that you can share with your team.

---

## Does Baselime have an impact on my AWS bill?

Baselime relies on a few AWS resources in your AWS account, most notably:
- Amazon CloudWatch metrics stream: to enable CloudWatch metrics to be queried using the Baselime query engine
- Amazon CloudTrail: to enable CloudTrail events, and also register new subscription filters as soon as new serverless functions or services are created
- Amazon Kinesis Data Firehose: To store telemetry data in cold storage in your AWS account

These services may add a minimal cost on your AWS monthly bill. Please refer to the [AWS princing calculator](https://calculator.aws/) for estimates based on your usage.

---

## Does Baselime have an impact on my Vercel bill?

No, Baselime doesn't have any impact on your Vercel bill.

