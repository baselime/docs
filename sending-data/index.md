# Sending Data to Baselime

---


Baselime supports a variety of data sources, including logs, metrics, traces, and wide events. You can start sending your data to Baselime and gain valuable insights into the performance and reliability of your serverless applications with a few steps.

Once ingested, the data is securely stored in hot storage for querying and in cold storage within your own AWS environment, in an **Amazon S3 bucket in your AWS account**. This ensures that you have complete long-term control over your data and its storage location.

![Sending Telemetry data to Baselime](../assets/images/illustrations/sending-data/s3.png)

---

## Data sources

[!ref icon="../assets/images/logos/logo_aws_lambda.png"](./lambda-logs.md)
[!ref icon="../assets/images/logos/logo_open_telemetry.png"](./opentelemetry/index.md)
[!ref icon="../assets/images/logos/logo_aws_apigateway.png"](./apigateway-logs.md)
[!ref icon="../assets/images/logos/logo_ecs_logs.png"](./ecs-logs.md)
[!ref icon="../assets/images/logos/logo_aws_lambda.png"](./lambda-extension.md)
[!ref icon="../assets/images/logos/logo_xray.png"](./xray.md)
[!ref icon="../assets/images/logos/logo_cloudtrail.png"](./cloudtrail.md)
[!ref icon="../assets/images/logos/logo_cloudwatch.png"](./cloudwatch-metrics.md)
[!ref icon="../assets/images/logos/http_flat@3x.png"](./events-api.md)
[!ref icon="../assets/images/logos/s3_flat@3x.png"](./s3-rehydration.md)

