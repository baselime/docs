---
label: AWS X-Ray
order: -2
---

# AWS X-Ray

[AWS X-Ray](https://aws.amazon.com/xray/) enables developers to gather traces across their distributed services. In order to gain visibility into their applications, developers can use X-Ray to trace requests as they travel through their application, and collect data about the performance and errors of their application. Baselime enables you to easily ingest this data and make it available for analysis and troubleshooting.

---

## Setting up the AWS X-Ray Connection

To start ingesting traces from AWS X-Ray to Baselime, you'll need to [connect your AWS account to Baselime](../readme.md). Once connected, Baselime will periodically poll your AWS account for new traces and automatically ingest them into your Baselime dataset.

---

## Analyzing X-Ray Traces in Baselime

Once your X-Ray traces are in Baselime, you can analyze them using the full power of the [Observability Reference Language (ORL)](../observability-reference-language/overview.md). You can use this data to create queries, alerts, dashboards, and troubleshoot defects in your services.

---

## Troubleshooting

If you're having trouble sending data from AWS X-Ray to Baselime, here are a few things to check:

- Verify that your AWS account is correctly connected to Baselime and you receive data in other datasets such as [CloudWatch Metrics](./cloudwatch-metrics.md) or [CloudTrail Events](./cloudtrail.md)
- Check that the Baselime IAM user has the appropriate permissions to access X-Ray
- Make sure that your applications emit X-Ray traces and you can view the traces in the X-Ray section of the AWS Console
