# AWS

---

Baselime provides observability for applications deployed on AWS, with a focus on modern serverless and container serices such as AWS Lambda, Amazon ECS and AWS AppRunner.

To connect your AWS account to Baselime, log in the [Baselime console](https://console.baselime.io). Create a new environment, select "Connect AWS account" and follow the instructions. You will be prompted to deploy a CloudFormation stack onto your AWS account. The stack is [open-source](../../../connectors/aws.md) and does not have any impact on your AWS bill.

---

## AWS Data Sources

The following sections highlight how Baselime captures telemetry data for supported AWS services.

[!ref icon="../../../assets/images/logos/logo_aws_lambda.png"](./aws-lambda/index.md)
[!ref icon="../../../assets/images/logos/logo_ecs_logs.png"](./ecs-logs.md)
[!ref icon="../../../assets/images/logos/apprunner_logo.png"](./apprunner-logs.md)
[!ref icon="../../../assets/images/logos/logo_aws_apigateway.png"](./apigateway-logs.md)
[!ref icon="../../../assets/images/logos/logo_cloudtrail.png"](./cloudtrail.md)
[!ref icon="../../../assets/images/logos/logo_cloudwatch.png"](./cloudwatch-metrics.md)
