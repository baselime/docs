---
label: AWS Connector
order: -1
---

# AWS Connector on Baselime

---

The AWS Connector allows you to send data from your AWS resources to Baselime. This includes logs, traces, and metrics. By connecting your AWS account to Baselime, you can get a unified view of your serverless architecture, query your data, and set up alerts.

## Setting up the AWS Connector

The connector is an automated flow based on a CloudFormation template.

It can be done using the Baselime CLI or throught the web console.

### Using the CLI

To connect a cloud account to Baselime using the CLI, run the following command in your terminal

```bash # :icon-terminal: terminal
baselime environments connect --provider aws --account <account_numner> --region <region> --alias <alias>
```

Once you've followed the interactive steps, the CLI will generate a CloudFormation template for you to deploy on your AWS account. FOllow the link in your terminal to deploy the temple on your AWS account.

Once deployed, login in your newly connected environment from the CLI.

```bash # :icon-terminal: terminal
baselime login
```

The interactive prompt should list your newly connected environment.

Within minutes you should get telemetry data flowing through with the command

```bash # :icon-terminal: terminal
baselime tail --follow
```

### Using the Web Console

Navigate to the [Baselime web console](https://console.baselime.io) and login.

Follow the steps on the homescreen to connect a new AWS Account. Baselime will generate a CloudFormation template for you to deploy on your AWS account.

Once the template is deployed on AWS, return to the Baselime web console and refresh the page. You should see the newly connected AWS environment in the list of connected environment.

Within minutes telemtry data from your AWS environment should start displaying in the events streams in the Baselime web console.

---

## Troubleshooting

If you encounter any issers or error when connecting your AWS environment, please don't hesitate to contact us, or join our [Slack community](https://join.slack.com/t/baselimecommunity/shared_invite/zt-1eu7l0ag1-wxYXQV6Fr_aiB3ZPm3LhDQ) where we are always available to support.

---

## CloudFormation Template

The CloudFormation template is open-source and available here.

:::code source="../assets/templates/cf.yaml" title="Baselime AWS Integration Template":::
