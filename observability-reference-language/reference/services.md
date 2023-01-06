---
label: Services
order: 0
---

# ORL Services

ORL (Observability Reference Language) services are used to organize and manage observability resources such as queries, alerts, and dashboards.

!!!info Info
Note that the service must be defined in the madatory `index.yml` file in the `.baselime` folder.
!!!

## Properties

Services have a set of properties that define the service's characteristics and behavior.

### version (required)

The `version` property is a string that specifies the version of the Baselime CLI used to generate or deploy the service. It is used for version control and management.

Example: 

```yaml # :icon-code: .baselime/index.yml
version: 0.0.15
```

---

### service (required)

The `service` property is a string that specifies the name of the service. It is used to identify the service and distinguish it from other services.

Example: 

```yaml # :icon-code: .baselime/index.yml
service: demo
```

---

### description (required)

The `description` property is a string that provides more information about the service. It can include details about the purpose of the service, the components it includes, and any other relevant information.

Example: 

```yaml # :icon-code: .baselime/index.yml
description: demo service
```

---

### provider (required)

The `provider` property is a string that specifies the cloud provider for the service. It is used to identify the provider and distinguish it from other providers. ORL supports the following providers:

- `aws`
- `gcp` **(coming soon)**
- `azure` **(coming soon)**
- `cloudflare` **(coming soon)**
- `vercel` **(coming soon)**

Example: 

```yaml # :icon-code: .baselime/index.yml
provider: aws
```

---

### infrastructure (optional)

The `infrastructure` property is an object that specifies the cloud infrastructure for the service. It has the following properties:

#### stacks (optional)

The `stacks` property is an array of strings that specifies the CloudFormation stacks that are part of the service. Baselime will automatically find all the cloud resources in the specified stacks and limit all observability rules (queries, alerts, etc.) to these stacks. If the stacks property is not specified, Baselime will include all cloud resources in the environment.

Example: 

```yaml # :icon-code: .baselime/index.yml
infrastructure:
  stacks:
    - cloudformation-stack-1
    - cloudformation-stack-2
```

---

### templates (optional)

The `templates` property is an array of strings that specifies the templates to automatically download and implement for the service. Templates are used to define observability rules that can be shared and reused across multiple services. Each string is in the format `workspace/template`, where `workspace` is the name of the workspace where the template was defined and `template` is the unique ID of the template.

Example:


```yaml # :icon-code: .baselime/index.yml
templates:
  - workspace-1/template-1
  - workspace-1/template-2
  - workspace-1/template-3
  - workspace-2/template-2
  - workspace-2/template-7
```

---

### variables

The `variables` property is an object that enables you to define variables that can be used in the ORL queries and alerts within the service. These variables can be used to parameterize the ORL queries and alerts and make them more flexible and reusable.

Each variable has a name and one or more values. The values can be grouped by environment (e.g. prod, dev, etc.) or by any other criteria that makes sense for your service.

For example, you might define a `threshold` variable that has different values for different environments:

```yaml # :icon-code: .baselime/index.yml
variables:
  threshold:
    default: '> 30'
    prod: '> 10'
    dev: '> 20'
```

In this example, the `threshold` variable has a default value of `> 30`, and different values for the prod and dev environments: `> 10` and `> 20`, respectively.

To use this variable in an ORL query or alert, you can use the {{ variable }} syntax:

```yaml # :icon-code: .baselime/index.yml
query:
  type: alert
  properties:
    parameters:
      threshold: '{{ threshold }}'
    # ... other properties
```
In this example, the `threshold` variable will be replaced with the appropriate value depending on the environment in which the service is deployed.

!!!info Info
It is important to note that `variables` are optional in services. If a variable is defined, it must have at least one value.
!!!

---

### Example ORL Services

Here are example ORL services that combine all of the above properties.

This ORL service is for a web application that is hosted on Amazon Web Services (AWS).

- The cloud provider is AWS and the infrastructure consists of two CloudFormation stacks: `webapp-stack` and `database-stack`.
- The service has two templates defined: `baselime/lambda-logs-basics` and `workspace-name/template-name`.
- The service has two variables defined: `threshold` and `frequency`. The `threshold` variable has a default value of `> 30` and a value of `> 10` for the `prod` environment. The `frequency` variable has a default value of `30mins` and a value of `5mins` for the `prod` environment and a value of `0 9 ? * 2#1 *` for the `dev` environment.


```yaml # :icon-code: .baselime/index.yml
version: 0.0.15
service: MyWebApp
description: My web application hosted on AWS
provider: aws
infrastructure:
  stacks:
    - webapp-stack
    - database-stack
templates:
  - baselime/lambda-logs-basics
  - workspace-name/template-name
variables:
  threshold:
    default: '> 30'
    prod: '> 10'
  frequency: 
    default: '30mins'
    prod: '5mins'
    dev: '0 9 ? * 2#1 *'
```

--- 

This ORL service is for a microservices architecture that is hosted on AWS.

```yaml # :icon-code: .baselime/index.yml
version: 0.0.15
service: MyMicroservices
description: My microservices architecture hosted on GCP
provider: aws
infrastructure:
  stacks:
    - baselime/lambda-logs-basics
    - baselime/dynamodb-db-metrics-basics
    - baselime/s3-metrics-basics
templates:
  - workspace1/template3
  - workspace1/template4
  - workspace2/template5
variables:
  threshold:
    default: '> 50'
    prod: '> 60'
```



