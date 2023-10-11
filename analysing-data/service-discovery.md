---
label: Service Discovery
order: 2
---

# Automatic Service Discovery


Baselime automatically discovers services in your cloud accounts and organises your observability data following services and teams boundaries. This ebales you to quickly sift through the vast amounts of data your applications produce.

---

## Discovering Services

Baselime automatically discovers all cloud resources in your cloud accounts. Each resource is linked to a service. The service is typically based on the deployment framework that you use.

+++ AWS CDK

The service name is the name of the CloudFormation template the AWS CDK generates during `cdk synth`

+++ SST

The name of the service is the name of the SST app

+++ Serverless Framework

The name of the service is the name of the Serverless Framework App

+++ AWS SAM

The name of the service is the name of the CloudFormation template generated when deploying the AWS SAM application

+++ CloudFormation

The name of the service is the name of the CloudFormation template

+++

When ingesting data from your architecture, Baselime correlates the incoming data with the service name of the cloud resource the data originates from.

---

## Overriding the service discovery on AWS

To force the resources from a CloudFormation stack to belong to a service with a different name, set the value of the tag `baselime:service` to the desired service name on the CloudFormation template. All resources deployed with the CloudFormation template will be correlated with the desired service name.