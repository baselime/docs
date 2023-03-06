---
label: Baselime Concepts
order: -1
---

# Baselime Concepts
---

Before we continue, we need to learn some of the core Baselime concepts: Observability as Code, datasets, namespaces, and services. They are crucial to understanding how the platform functions. In this page, you will learn about these concepts and how they can help you effectively use Baselime to monitor and troubleshoot your serverless applications.

![baselime calculations, events, and traces](./baselime.gif)

---

## Observability as Code

Observability as Code is a way to manage your observability configurations using code instead of a graphical user interface. This makes it easier to version control and deploy your configurations, and collaborate with your team.

To use Observability as Code in Baselime, you'll use the Baselime [Observability Reference Language (ORL)](../observability-reference-language/overview.md) to define your configurations in a `.baselime` folder in your code repository. The `.baselime` folder contains YAML files that define different aspects of your observability configurations, such as alerts, dashboards, and integrations.

To get started with ORL, you can use the Baselime CLI and commands like `baselime init`, `baselime push`, `baselime pull` or `baselime plan`. These commands help you manage your observability configurations from your terminal or CI/CD pipelines.


![Observability as code change](./oac.gif)

Overall, Observability as Code makes it easier to manage and collaborate on observability configurations using code, helping you automate and streamline your observability practices.

---

## Datasets 

In Baselime, a dataset is a collection of data that is gathered from your Serverless applications. The datasets we currently support are:

* Lambda Logs
* API Gateway Logs
* Cloudwatch Metrics
* X-Ray
* Open Telemetry
* Cloudtrail

Baselime automatically blocks certain sensitive data from being included in your datasets, and you can also block additional keys as needed. You can view and analyze your datasets using different interfaces, such as a web console or a command-line interface, and you can also integrate them with other tools like GitHub and Slack. This helps you troubleshoot issues and monitor the performance of your serverless applications.

---

## Services

In Baselime, a service is a logical grouping of cloud resources automatically discovered from your Cloudformation Templates and typically corresponds to a repository in your version control system or a folder in your mono-repo.

For example, you might have a service called order-management with multiple Lambda functions, databases, and event queues. In Baselime you can run queries within the service, and query only the data emitted by one of the cloud resources that is part of the service, without the clutter of the rest of your architecture. This enables you to isolate, manage and query the observability for each component of your architecture separately.

---

## Namespaces

In Baselime, a namespace is a group of data for a single or type of resource. Namespaces are automatically created on ingestion and are dataset specific. For lambda-logs, otel, and x-ray, the namespace will be the lambda function name. For metrics and cloudtrail it's the resource type, i.e. `AWS/SQS`. 