---
label: AWS Connector
order: -1
---

# AWS Connector on Baselime

---

The AWS Connector allows you to send data from your AWS resources to Baselime. This includes logs, traces, and metrics. By connecting your AWS account to Baselime, you can get a unified view of your architecture, query your data, and set up alerts.

---

## Setting up the AWS Connector

The connector is an automated flow based on a CloudFormation template.

Navigate to the [Baselime web console](https://console.baselime.io) and login.

Follow the steps on the home screen to connect a new AWS Account. Baselime will generate a CloudFormation template for you to deploy on your AWS account.

Once the template is deployed on AWS, return to the Baselime console and refresh the page. You should see the newly connected AWS environment in the list of connected environment.

Within minutes telemetry data from your AWS environment should start displaying in the events streams in the Baselime web console.

---

## How hard is it to remove Baselime from my AWS account?

If you decide to remove Baselime from your AWS account, delete the CloudFormation template Baselime creates on your AWS account. That's all, all resources Baselime created, including the instrumentation layers, will be removed.

---

## Does Baselime automatically recognise new functions and services?

Yes, when you deploy new serverless functions and services to your cloud infrastructure, Baselime automatically detects them and starts ingesting logs, metrics and traces from those function. To add OpenTelemetry tracing, add the `baselime:tracing` tag to your new functions and set it to `true`. 

---

## Does Baselime have an impact on my AWS bill?

Baselime relies on a few AWS resources in your AWS account, most notably:
- Amazon CloudWatch metrics stream: to enable CloudWatch metrics to be queried using the Baselime query engine
- Amazon CloudTrail: to enable CloudTrail events, and also register new subscription filters as soon as new serverless functions or services are created
- Amazon Kinesis Data Firehose: To store telemetry data in cold storage in your AWS account

These services may add a minimal cost on your AWS monthly bill. Please refer to the [AWS princing calculator](https://calculator.aws/) for estimates based on your usage.


---

## Troubleshooting

If you encounter any issues or error when connecting your AWS environment, please don't hesitate to contact us, or join the [Cloudflare Discord community](https://discord.cloudflare.com) where we are always available to support.

---

## CloudFormation Template

The CloudFormation template is open-source and available here.

:::code source="../assets/templates/cf.yaml" title="Baselime AWS Integration Template":::

---

## Your data

Once connected, Baselime will automatically ingest data from your AWS environment. This includes:
* AWS Lambda Logs
* Amazon API Gateway Logs
* Amazon Cloudtrail Logs
* Amazon Cloudwatch Metrics
* Amazon ECS Logs (through fluentd)
* Open Telemetry Metrics

Once ingested, the telemetry data is streamed through a Kinesis Firehose to an Amazon S3 bucket in your AWS account for cold storage. There you can access the raw data and use it for your own purposes.

The default retention period of the telemetry data in your bucket is set to 180 days by default.