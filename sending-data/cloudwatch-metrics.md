---
label: CloudWatch Metrics
order: -4
---

# CloudWatch Metrics

Once you connect your AWS account to Baselime, the necessary resources including a [CloudWatch Metrics Stream](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html) and a [Kinesis Firehose](https://aws.amazon.com/kinesis/data-firehose/) will be automatically created and configured for you. This means that you don't need to do any additional setup or configuration.

---

## Why CloudWatch Metrics ?

[CloudWatch](https://aws.amazon.com/cloudwatch/) is a monitoring service provided by Amazon Web Services (AWS) that enables you to collect and track metrics and log data for your AWS resources and applications. Metrics are important as they provide insight into the performance and behavior of your serverless applications and the underlying infrastructure.

CloudWatch Metrics can help you identify issues such as high error rates and latencies, which can help improve the overall reliability and scalability of your applications.

Moreover, CloudWatch Metrics cover all aspects of your serverless architecture automatically, from DynamoDB tables to S3 buckets and SQS Queues.


---

## Custom CloudWatch Metrics

Baselime automatically ingests all metrics published to CloudWatch. This includes both standard CloudWatch metrics and any [custom metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html) that you may have created.

There is no need to manually configure or set up anything to start ingesting custom CloudWatch metrics. Once your AWS account is connected, all metrics will be available for querying in Baselime.

---

## Querying CloudWatch Metrics

Once your AWS account is connected to Baselime, you can use any of the our clients to visualize and query your CloudWatch Metrics. You'll have access to all the metrics available in your AWS account, and you can use the [Observability Reference Language (ORL)](../observability-reference-language/overview.md) to filter and aggregate the data in near real-time.