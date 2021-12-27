---
label: Quick Start
order: 0
---

# Quick Start

---

Integrating with [Baselime](https://baselime.io) and getting deep insights into your production serverless systems takes less 5 minutes.

All you need is:
- An [AWS Account](https://aws.amazon.com/)
- The [AWS CLI](https://aws.amazon.com/cli/)
- Permissions to deploy a [CloudFormation](https://aws.amazon.com/cloudformation/) stack with IAM role.
- A deployed application leveraging [AWS Lambda](https://aws.amazon.com/lambda/) and other [AWS serverless services](https://aws.amazon.com/serverless/)

If you do not have an application, you can use one of our [example applications](TODO).

---

## Step 1: Install the Baselime CLI

```bash #
curl -s https://get.baselime.io | sudo bash
```

---

## Step 2: Signup for Baselime

Baselime has a free usage tier.

You can signup using the [Baselime CLI](../cli/install.md).

```bash #
baselime auth
```

You will get a window in your browser to create an account.

Follow the onboarding process:
1. Create a workspace. Typically this will be the name of your organisation.
2. Invite your team. Baselime works best when collaborating with team mates.

---

## Step 3: Connect your AWS Account

In order to ingest data from your serverless systems, Baselime needs to connect to your AWS Account. This is done by deploying a CloudFormation template onto your account.

The CloudFormation template will:
- Create a role with read-only access to your account, plus permission to create a Lambda Function and add permissions to it
- An S3 Bucket, to store usage data
- An SNS Topic, used to signal new data in the aforementionned S3 Bucket
- A CloudTrail Trail, used to register changes to your serverless architecture

We've open-sourced the CloudFormation template [here](../extending/integration.md).

You can generate and download this template through the [Baselime Web UI](https://baselime.io) or with the CLI:

```bash #
baselime aws create-template \
  --account <AWS_ACCOUNT_ID> \
  --region <AWS_REGION> \
  --alias <INTEGRATION_ALIAS>
```

Once you've generated and downloaded the template, you must deploy it to your AWS Account.

!!!warning AWS Credentials
Please make sure you're using the correct credentials to deploy to the correct account and the correct region.
!!!

```bash #
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
If you do not see any data in the Baselime UI within seconds of completing these steps, something went wrong. Please contact us.
!!!

---

## Step 4: Query your data

The power of Baselime is in it's query engine.

You can create queries in the [Baselime UI](https://baselime.io) or using the CLI.

### Query in the Web UI

In the UI:
1. Navigate to `Queries` in the left navigation bar. Click on `New Query`.
2. Select a timeframe. By default it's the past hour.
3. Select the namespaces you want to query. These are the Lambda functions in your account and region. By default, queries run accross all namespaces.
4. Select the fields you want to retrieve, or the function you want to run. `COUNT` is a good start.
5. Add filters and group-bys to your query.
6. Click `Run Query`

Now you should you see all the data gathered from your Lambda functions matching the criteria of your query.

You can save the query and share it with your team.

### Query with the CLI

In root of your project folder, initialise a new Baselime file.

```bash #
baselime init
```

This will create a `.baselime.yml` file.

```yaml # .baselime.yml
version: 0.0.0.1

application: sample-application
description: Sample Description
```

Add a query to your `.baselime.yml` file.

```yaml # .baselime.yml
version: 0.0.0.1

application: sample-application
description: Sample Description

queries:
  - ref: test-query
    name: A Test Query
    namespaces:
      - type: lambda
        value: <lambda_function_name>
    calculations:
      - operator: COUNT
    filters:
      - key: "error.code"
        type: string
        operation: "="
        value: "ValidationException"
    groupBy:
      - type: string
        key: "status"
```

Apply the changes to the `.baselime.yml` file to Baselime

```bash #
baselime apply

# Outputs
# Created queries:
#   - test-query: <created_query_id>
```

To visualise the results of the query run in the Web UI:

```bash #
baselime query-run <created_query_id> \
  --from <start_time_unix_in_ms> \
  --to <end_time_unix_in_ms> \
  --ui
```

This command will open the Baselime Web UI with the results for the given query run.

To save the query results in a file instead:

```bash #
baselime query-run <created_query_id> \
  --from <start_time_unix_in_ms> \
  --to <end_time_unix_in_ms> \
  >> data.json
```

---

## Next Steps

After the previous steps, Baselime collects logs and metrics from your Lambda functions. This is a good start, but it can be improved with traces.

Baselime support [OpenTelemetry](https://opentelemetry.io/) to instrument your Lambda functions.
