---
label: Quick Start
order: 0
---

# Quick Start

---

Getting started with [Baselime](https://baselime.io) and starting discovering the benefits of Observability as Code (OaC) takes less than 5 minutes.

All you need is:
- An [AWS Account](https://aws.amazon.com/)
- The [AWS CLI](https://aws.amazon.com/cli/)
- Permissions to deploy a [CloudFormation](https://aws.amazon.com/cloudformation/) stack with IAM role.
- A deployed application leveraging [AWS Lambda](https://aws.amazon.com/lambda/) and other [AWS serverless services](https://aws.amazon.com/serverless/)

If you do not have a deployed application, you can use one of our [example applications](https://github.com/Baselime/examples).

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/12696f2f3fad44538cbc6b79a4c9cebf" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

---

## Step 1: Sign up for Baselime

Baselime has a free usage tier.

Signup on the [Baselime console](https://console.baselime.io).

Follow the onboarding process:
1. Create a workspace. Typically this will be the name of your organisation.
2. Connect your AWS Account

---

## Step 2: Connect your AWS Account

In order to ingest data from your serverless systems, Baselime needs to connect to your AWS account. This is done by deploying a CloudFormation template onto your AWS account.

The CloudFormation template will:
- Create a role with read-only access to your account, plus permission to create a Lambda Function and add permissions to it
- An S3 Bucket, to store CloudTrail data
- An SNS Topic, used to signal new data in the aforementioned S3 Bucket
- A CloudTrail Trail, used to register changes to your serverless architecture

We've open-sourced the CloudFormation template [here](../connectors/cloudformation-connector.md).

You can generate and download this template through the [Baselime Console](https://console.baselime.io).

Once you've generated and downloaded the template, you must deploy it to your AWS Account. Baselime automatically opens a new tab in your default browser with the link to deploy the downloaded CloudFormation template. Follow the step in CloudFormation without changing any of the provided values to deploy the stack on your AWS account.

!!!warning AWS Credentials
Please make sure you're using the correct credentials to deploy to the correct account and the correct region.
!!!

Telemetry data (in the form of logs and metrics) should now be automatically ingested from your AWS account to Baselime and should be available through our various clients. Structured logs sent to `stdout` or `stderr` from your Lambda functions will be sent to Baselime as events.

Send a request to or invoke any deployed AWS Lambda function in your account and you should see data from it in the Baselime console within seconds. Moreover, you can stream all the events ingeste in Baselime directly in your terminal.

!!!warning 
If you do not complete any of the above steps, Baselime will not be able to ingest data from your AWS account.
!!!

!!!warning 
If you do not see any data in the Baselime UI or using the `stream` command within seconds of completing the above steps, something went wrong. Please [contact us](mailto:support@baselime.io).
!!!

---

## Step 3: Install the Baselime CLI

+++ MacOs

#### Using Homebrew

```bash # :icon-terminal: terminal
# Add Baselime brew repository
brew tap baselime/tap

# Install the CLI
brew install baselime
```

#### Manual Install

```bash # :icon-terminal: terminal
# Install the Baselime CLI on MacOS manually
curl -s https://get.baselime.io | bash
```

+++ Linux

```bash # :icon-terminal: terminal
# Download and install the Baselime CLI on every Linux distribution
curl -s https://get.baselime.io | bash
```

+++

---

## Step 4: Log in the Baselime CLI

After creating an account, you should log in the Baselime CLI.

```bash # :icon-terminal: terminal
baselime auth login
```

---

## Step 5: Deploy your observability

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/291b7f4c21f54e1c8cbe8df4d64059f6" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

</br>

The power of Baselime is in its Observability as Code (OaC) capabilities. Baselime empowers you and your team to manage observability resources as code.

In the root of your project folder, initialise a new Baselime config folder.

```bash # :icon-terminal: terminal
baselime init --application demo --template @baselime/basic-lambdas-logs
```

The Baselime CLI will initialise your working directory with a `.baselime` folder. It will automatically add sample observability resources (queries, alerts and alert channels) based on the template you selected in the previous command. This would help getting you started. 

```yaml # :icon-code: .baselime/index.yml
version: 0.0.3
application: demo
description: ""
```

```yaml # :icon-code: .baselime/demo.yml
lambda-cold-start-durations:
  type: query
  properties:
    name: Duration of lambda cold-starts
    description: How long do cold starts take on our API?
    parameters:
      dataset: logs
      calculations:
        - MAX(@initDuration)
        - MIN(@initDuration)
        - AVG(@initDuration)
        - P99(@initDuration)
        - COUNT
      filters:
        - "@type := REPORT"
      filterCombination: AND
critical-cold-start-duration:
  type: alert
  properties:
    name: Lambda cold-starts take more than 2 seconds
    parameters:
      query: !ref lambda-cold-start-durations
      frequency: 30
      duration: 30
      threshold: :> 2000
    channels:
      - !ref developers
developers:
  type: channel
  properties:
    type: email
    targets:
      - your_email@email.com
```

Don't hesitate to tweak the query and the alert. The complete set of parameters for the `.baselime` folder can be found in the [Observability as Code](../observability-as-code/overview.md) section.


Validate your `.baselime` configuration folder

```bash # :icon-terminal: terminal
baselime validate
✔ Valid configuration folder
```

Apply the changes to the `.baselime` folder to Baselime

```bash # :icon-terminal: terminal
baselime apply
```

To run a query in your command line:

```bash # :icon-terminal: terminal
baselime queries run --application demo --id lambda-cold-start-durations
```

This will output the results of the query in the command line, with a link that will redirect to the results in the web console.

---

## Next Steps

Now you can setup our Observability as Code (OaC). Next up is to send more telemetry data to Baselime.
