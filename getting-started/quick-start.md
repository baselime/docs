---
label: Quick Start
order: 0
---

# Quick Start

---

Integrating with [Baselime](https://baselime.io) and getting deep insights into your production serverless systems takes less than 5 minutes.

All you need is:
- An [AWS Account](https://aws.amazon.com/)
- The [AWS CLI](https://aws.amazon.com/cli/)
- Permissions to deploy a [CloudFormation](https://aws.amazon.com/cloudformation/) stack with IAM role.
- A deployed application leveraging [AWS Lambda](https://aws.amazon.com/lambda/) and other [AWS serverless services](https://aws.amazon.com/serverless/)

If you do not have an application, you can use one of our [example applications](https://github.com/Baselime/examples).

---

## Step 1: Install the Baselime CLI

```bash # :icon-terminal: terminal
curl -s https://get.baselime.io | bash
```

---

## Step 2: Sign up for Baselime

Baselime has a free usage tier.

Signup on the [Baselime app](https://baselime.io/signup).

Follow the onboarding process:
1. Create a workspace. Typically this will be the name of your organisation.
2. Invite your team. Baselime works best when collaborating with team mates.

---

## Step 3: Connect your AWS Account

In order to ingest data from your serverless systems, Baselime needs to connect to your AWS Account. This is done by deploying a CloudFormation template onto your account.

The CloudFormation template will:
- Create a role with read-only access to your account, plus permission to create a Lambda Function and add permissions to it
- An S3 Bucket, to store usage data
- An SNS Topic, used to signal new data in the aforementioned S3 Bucket
- A CloudTrail Trail, used to register changes to your serverless architecture

We've open-sourced the CloudFormation template [here](../integrations/integration.md).

You can generate and download this template through the [Baselime Web UI](https://baselime.io) or with the CLI:

```bash # :icon-terminal: terminal
baselime environments setup \
  --type aws \
  --account <AWS_ACCOUNT_ID> \
  --region <AWS_REGION> \
  --alias <INTEGRATION_ALIAS>
```

Once you've generated and downloaded the template, you must deploy it to your AWS Account.

!!!warning AWS Credentials
Please make sure you're using the correct credentials to deploy to the correct account and the correct region.
!!!

```bash # :icon-terminal: terminal
aws cloudformation create-stack \
  --stack-name baselime-integration \
  --template-body file://<FULL_PATH_TO_FILE> \
  --capabilities CAPABILITY_NAMED_IAM
```

Telemetry data (in the form of logs and metrics) should now be automatically ingested from your AWS account to Baselime and should be available through our various clients. Structured log messages sent to `stdout` or `stderr` from your Lambda functions will be sent to Baselime as events.

Send a request to or invoke any deployed AWS Lambda function in your account and you should see data from it in the Baselime UI within seconds. 

!!!warning 
If you do not complete any of the above steps, Baselime will not be able to ingest data from your AWS account.
!!!

!!!warning 
If you do not see any data in the Baselime UI within seconds of completing these steps, something went wrong. Please [contact us](mailto:support@baselime.io).
!!!

---

## Step 4: Query your data

The power of Baselime is in it's query engine.

You can create queries in the [Baselime UI](https://baselime.io) or using the CLI.

### Query in the Web UI

In the UI:
1. Navigate to `Queries` in the navigation bar. Click on `New Query`.
2. Select a template, for example the template for getting stats on cold starts.
3. Select a time frame. By default it's the past hour.
4. Click `Run Query`

Baselime will compute and display the results of your query.

Navigate to the Events tab to display the events matching the criteria of your query.

### Query with the CLI

In root of your project folder, initialise a new Baselime file.

```bash # :icon-terminal: terminal
baselime init --application demo
```

The Baselime CLI will initialise your current directory with a `.baselime.yml` file. It will automatically add a query, an alert, and an email channel to deliver the alert to. 

```yaml # :icon-code: .baselime.yml
version: 0.0.3
application: demo
description: ""
queries:
  lambda-invocations-durations:
    name: The duration of lambda invocations
    description: Statistics on the duration of lambda invocations across the stack
    parameters:
      dataset: logs
      calculations:
        - MAX(@duration)
        - MIN(@duration)
        - AVG(@duration)
        - P99(@duration)
      filters:
        - "@type := REPORT"
      filterCombination: AND
alerts:
  long-lambda-invocations:
    name: A Lambda invocation lasted more than 15seconds
    parameters:
      query: lambda-invocations-durations
      frequency: 30
      duration: 30
      threshold: :> 15000
    channels:
      - developers
channels:
  developers:
    type: email
    targets:
      - your_email@email.com
```

Don't hesitate to tweak the query and the alert. The complete set of parameters for the `.baselime.yml` file can be found in the [Observability as Code](../observability-as-code/overview.md) section.


Validate your `.baselime.yml` configuration file

```bash # :icon-terminal: terminal
baselime validate
✔ Valid configuration file
```

Apply the changes to the `.baselime.yml` file to Baselime

```bash # :icon-terminal: terminal
baselime apply
```

To run a query in your command line:

```bash # :icon-terminal: terminal
baselime queries run --application demo --ref lambda-invocations-durations
```

This will output the results of the query in the command line, with a link that will redirect to the results in the Web UI.

---

## Next Steps

Now you can setup our observability as code. Next up is to send more telemetry data to Baselime.
