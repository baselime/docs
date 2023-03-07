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

## Environments

In Baselime, an Environment represents your whole system. Environments can contain the data for many AWS accounts and regions enabling you to unify your O11y. We recommend you create an environment for each instance of your system. I.E. seperate environments for prod, testing ect. This keeps your test and prod data seperate in baselime making it easy to find what you are looking for.

When using the CLI you can setup multiple local profiles for each environment by running `baselime login --profile 'new profile name goes here' and selecting the environment you want. Every baselime cli command supports the --profile flag to use the environment you want.


## Services

In Baselime, a service is a logical grouping of cloud resources automatically discovered from your Cloudformation Templates and typically corresponds to a repository in your version control system or a folder in your mono-repo.

For example, you might have a service called order-management with multiple Lambda functions, databases, and event queues. In Baselime you can run queries within the service, and query only the data emitted by one of the cloud resources that is part of the service, without the clutter of the rest of your architecture. This enables you to isolate, manage and query the observability for each component of your architecture separately.

---

## Namespaces

In Baselime, a namespace is a group of data for a single or type of resource. Namespaces are automatically created on ingestion and are dataset specific. For lambda-logs, otel, and x-ray, the namespace will be the lambda function name. For metrics and cloudtrail it's the resource type, i.e. `AWS/SQS`. 