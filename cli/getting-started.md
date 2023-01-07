---
label: Getting Started with the Baselime CLI
order: -2
---

# Getting Started with the Baselime CLI

Welcome to the Baselime CLI! This guide will help you get up and running with the CLI so you can start using Baselime to gain visibility into your serverless architecture.

## Prerequisites
Before you can use the Baselime CLI, you'll need to:

1. Install the Baselime CLI. See the [installation instructions](./install.md) for more details.
2. Connect your AWS Account to Baselime. See the [quick start guide](../getting-started/quick-start.md) for instructions on how to do this.

---

## First Steps

Once you have the Baselime CLI installed and your AWS Account connected, you're ready to start using Baselime! Here are a few commands to get you started:

- `baselime iam`: displays information about the current user logged in to the CLI.
- `baselime services list`: List all of the services in the authenticated environment.
- `baselime query`: Run a query against your telemetry data to find specific events or metrics.
- `baselime tail`: Stream all of the events ingested into Baselime in real-time.

---

## Next Steps

Now that you've gotten your feet wet with the Baselime CLI, you can learn more about the other commands and features available. Here are a few places to start:

- Check out the [CLI reference](./) for a full list of available commands and their options.
- Learn about [Observability as Code](../getting-started/concepts.md#observability-as-code) and how you can use it to define and manage your observability configurations.
- Explore the [Baselime Console](https://console.baselime.io) and learn how to use it to view and analyze your telemetry data.
- Set up [integrations](./) with tools like GitHub, Slack, and PagerDuty to get notifications and take action on your observability data.
