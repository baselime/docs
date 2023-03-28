---
label: AWS ECS
order: -2
---

# AWS ECS

[AWS ECS](https://aws.amazon.com/ecs/) enabled developers to route their ECS containers logs directly into Baselime to monitor and investigate the issues.

---

## Setting up the AWS ECS ingestion

To start 
---
Obtain your API key by invoking `baselime iam` command - it will retrieve the details of currently logged-in Baselime user.
Within the printed information you will find an `apiKey` which you will need for your logs to be pushed to Baselime.

In the instructions below replace the `BASELIME_API_KEY` with your retrieved key.

### Using Terraform

```
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
          "header"      = "x-api-key BASELIME_API_KEY"
        }
      }
    }
  ])
}
```

### Using AWS CDK for TypeScript

```ts
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
      "header": `x-api-key BASELIME_API_KEY`,
    },
  }),
});

```

### Directly in AWS console

```json
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
          "header": "x-api-key BASELIME_API_KEY",
          "retry_limit": "2"
        },
        "secretOptions": []
      }
    }
  ]
}
```