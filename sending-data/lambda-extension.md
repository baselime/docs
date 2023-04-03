# Lambda Telemetry Extension

If you want to instrument a few lambdas without fully connecting your AWS account. This lambda telemetry extension to send your `lambda-logs` to Baselime using the AWS Telemetry API and your Baselime API Key. The layer is language agnostic and a compressed go binary to minimise coldstarts and function invocation latency.

> To get your Baselime API Key run `baselime iam`

First add the `BASELIME_KEY` environment variable to your lambda function, then attach the correct layer


## Layers

| Region | Architecture | ARN |
| ---- | ---- | ----- |
| us-east-1 | x86-64 | arn:aws:lambda:us-east-1:097948374213:layer:baselime-telemetry-extension-x86_64:3 |
| us-east-1 | arm64 | arn:aws:lambda:us-east-1:097948374213:layer:baselime-telemetry-extension-arm64:3 |
| us-east-2 | x86-64 | arn:aws:lambda:us-east-2:097948374213:layer:baselime-telemetry-extension-x86_64:3 |
| us-east-2 | arm64 | arn:aws:lambda:us-east-2:097948374213:layer:baselime-telemetry-extension-arm64:3 |
| us-west-2 | x86-64 | arn:aws:lambda:us-west-2:097948374213:layer:baselime-telemetry-extension-x86_64:3 |
| us-west-2 | arm64 | arn:aws:lambda:us-west-2:097948374213:layer:baselime-telemetry-extension-arm64:3 |
| us-central-1 | x86-64 | arn:aws:lambda:us-central-1:097948374213:layer:baselime-telemetry-extension-x86_64:3 |
| us-central-1 | arm64 | arn:aws:lambda:us-central-1:097948374213:layer:baselime-telemetry-extension-arm64:3 |
| eu-west-1 | x86-64 | arn:aws:lambda:eu-west-1:097948374213:layer:baselime-telemetry-extension-x86_64:3 |
| eu-west-1 | arm64 | arn:aws:lambda:eu-west-1:097948374213:layer:baselime-telemetry-extension-arm64:3 |
| eu-west-2 | x86-64 | arn:aws:lambda:eu-west-2:097948374213:layer:baselime-telemetry-extension-x86_64:3 |
| eu-west-2 | arm64 | arn:aws:lambda:eu-west-2:097948374213:layer:baselime-telemetry-extension-arm64:3 |
| ap-south-1 | x86-64 | arn:aws:lambda:ap-south-1:097948374213:layer:baselime-telemetry-extension-x86_64:3 |
| ap-south-1 | arm64 | arn:aws:lambda:ap-south-1:097948374213:layer:baselime-telemetry-extension-arm64:3 |
| ap-southeast-1 | x86-64 | arn:aws:lambda:ap-southeast-1:097948374213:layer:baselime-telemetry-extension-x86_64:3 |
| ap-southeast-1 | arm64 | arn:aws:lambda:ap-southeast-1:097948374213:layer:baselime-telemetry-extension-arm64:3 |
| ap-southeast-2 | x86-64 | arn:aws:lambda:ap-southeast-2:097948374213:layer:baselime-telemetry-extension-x86_64:3 |
| ap-southeast-2 | arm64 | arn:aws:lambda:ap-southeast-2:097948374213:layer:baselime-telemetry-extension-arm64:3 |
| ap-northeast-1 | x86-64 | arn:aws:lambda:ap-northeast-1:097948374213:layer:baselime-telemetry-extension-x86_64:3 |
| ap-northeast-1 | arm64 | arn:aws:lambda:ap-northeast-1:097948374213:layer:baselime-telemetry-extension-arm64:3 |
| ca-central-1 | x86-64 | arn:aws:lambda:ca-central-1:097948374213:layer:baselime-telemetry-extension-x86_64:3 |
| ca-central-1 | arm64 | arn:aws:lambda:ca-central-1:097948374213:layer:baselime-telemetry-extension-arm64:3 |

