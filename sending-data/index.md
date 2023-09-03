# Sending Data to Baselime

---


Baselime supports a variety of data sources, including logs, metrics, traces, and wide events. You can start sending your data to Baselime and gain valuable insights into the performance and reliability of your microservices with a few steps.

Once received, all telemetry data is securely stored in hot storage for querying and in cold storage within your own AWS environment, in an **Amazon S3 bucket in your AWS account**. This ensures that you have complete long-term control over your data and its storage location.

![Sending Telemetry data to Baselime](../assets/images/illustrations/sending-data/s3.png)

!!!
The retention period of your telemetry data on Baselime is independent of the retention periods in AWS. You can safely reduce the retention period of your CloudWatch log groups.
!!!

---

## Data Sources

### OpenTelemetry
[!ref icon="../assets/images/logos/logo_open_telemetry.png"](./opentelemetry/index.md)


### AWS
[!ref icon="../assets/images/logos/logo_aws_lambda.png"](./aws/lambda-logs.md)
[!ref icon="../assets/images/logos/logo_ecs_logs.png"](./aws/ecs-logs.md)
[!ref icon="../assets/images/logos/logo_xray.png"](./aws/xray.md)
[!ref icon="../assets/images/logos/apprunner_logo.png"](./aws/apprunner-logs.md)
[!ref icon="../assets/images/logos/logo_aws_apigateway.png"](./aws/apigateway-logs.md)
[!ref icon="../assets/images/logos/logo_aws_lambda.png"](./aws/lambda-extension.md)
[!ref icon="../assets/images/logos/logo_cloudtrail.png"](./aws/cloudtrail.md)
[!ref icon="../assets/images/logos/logo_cloudwatch.png"](./aws/cloudwatch-metrics.md)

### Other Sources
[!ref icon="../assets/images/logos/http_flat@3x.png"](./events-api.md)
[!ref icon="../assets/images/logos/s3_flat@3x.png"](./s3-rehydration.md)

