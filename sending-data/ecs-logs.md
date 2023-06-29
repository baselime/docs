---
label: Amazon ECS Container Logs
order: -3
---

# Amazon ECS Container Logs

This page describes how to collect application container logs from [Amazon ECS](https://aws.amazon.com/ecs/) clusters launched with AWS ECS using AWS FireLens. This method can also be used to collect ECS clusters with EC2 containers.

!!! Optional
Sending AWS ECS container logs to Baselime is optional, but highly recommended to gain full visibility into your containerized applications.
!!!

---

## How it works

The following diagram illustrates the process for sending container logs from ECS containers to Baselime using the FireLens log driver.

[FireLens](https://aws.amazon.com/about-aws/whats-new/2019/11/aws-launches-firelens-log-router-for-amazon-ecs-and-aws-fargate/) is an Amazon ECS native log router that enables you to send logs from your containerized applications to different destinations, including Baselime. By adding the FireLens sidecar to your task definitions, you can easily configure and route your container logs to different destinations without modifying your application code.

![Sending ECS Logs to Baselime](../assets/images/illustrations/sending-data/ecs.png)

Each of your ECS tasks can take a sidecar container running the FireLens log driver that will forward all the logs from the containers to Baselime.

---
## Configuring your ECS Tasks

### Step 1: Obtaining your Baselime API Key

You can get your Baselime API key using the Baselime CLI. Ensure you have downloaded the Baselime CLI and logged in your environment. To get your Baselime API Key, run the following command

```bash #
baselime iam
```

Copy the Baselime API Key in the output of the command and keep it safe. In the following instructions we will use `<BASELIME_API_KEY>` to refer to your Baselime API key, make sure to replace it with the key you copied from the output of the command.

### Step 2: Adding the FireLens sidecar to your task definitions

Adding the FireLens sidecar to your task definitions is a straightforward process that can be accomplished using various Infrastructure as Code solutions or manually in the console.

Add the Baselime ECS endpoint to your FireLens configuration:
- Endpoint `ecs-logs-ingest.baselime.io`
- Header: `x-api-key <BASELIME_API_KEY>` 

#### Using Terraform

```hcl #
resource "aws_ecs_task_definition" "example_task" {
  family                = "example-task"
  container_definitions = jsonencode([
    {
      name              = "example-container"
      image             = "example-image:latest"
      log_configuration {
        log_driver      = "awsfirelens"
        options = {
          "Name"        = "http"
          "Host"        = "ecs-logs-ingest.baselime.io"
          "Port"        = "443"
          "TLS"         = "on"
          "format"      = "json"
          "retry_limit" = "2"
          "header"      = "x-api-key <BASELIME_API_KEY>"
        }
      }
    }
  ])
}
```

#### Using AWS CDK for TypeScript

```ts #
import * as ecs from "aws-cdk-lib/aws-ecs";

const taskDef = new ecs.FargateTaskDefinition(this, "your_ecs_worker", {
    memoryLimitMiB: 1024,
});

taskDef.addContainer("container", {
  containerName: "your-container",
  logging: new ecs.FireLensLogDriver({
    options: {
      "Name": "http",
      "Host": "ecs-logs-ingest.baselime.io",
      "Port": "443",
      "TLS": "on",
      "format": "json",
      "retry_limit": "2",
      "header": `x-api-key <BASELIME_API_KEY>`,
    },
  }),
});

```

#### Directly in AWS console

```json #
{
  "containerDefinitions": [
    {
      "name": "log-router",
      "image": "906394416424.dkr.ecr.eu-west-1.amazonaws.com/aws-for-fluent-bit:latest"
    },
    {
      "name": "your-container",
      "image": "1234567891234.dkr.ecr.eu-west-1.amazonaws.com/your-image",
      "logConfiguration": {
        "logDriver": "awsfirelens",
        "options": {
          "Host": "ecs-logs-ingest.baselime.io",
          "Name": "http",
          "Port": "443",
          "TLS": "on",
          "format": "json",
          "header": "x-api-key <BASELIME_API_KEY>",
          "retry_limit": "2"
        },
        "secretOptions": []
      }
    }
  ]
}
```

---

## Troubleshooting

If you're having trouble sending data from your AWS ECS logs to Baselime, here are a few things to check:

- Verify that you're using the correct API key and host in the FireLens configuration
- Make sure that your containers are receiving traffic and are writing logs to either `stdout` or `stderr`
- Check the logs of the FireLens container to look for any anomaly
