---
label: ORL Overview
order: 0
---

# Observability Reference Language (ORL)

This is the documentation for Baselime's Observability as Code configurations using the Observability Reference Language (ORL).

ORL (Observability Reference Language) is a language used to express queries for observability telemetry data. ORL queries can be used to extract insights from logs, metrics, and traces data sources. ORL queries are defined by a set of parameters that specify the data sources, filters, and calculations to be performed on the data. The result of an ORL query is a set of events that match the criteria defined in the query, optionally aggregated by calculations.

ORL configurations are defined in [YAML](https://yaml.org/) files. 

Generally, ORL files live in the `.baselime` folder in the root directory of a given project. We refer to this folder as `.baselime` elsewhere in the documentation, although users can rename it at will.

Multiple integrations and connectors with your favourite Infrastructure as Code platforms are currently being developed.

## Best Practice

To streamline your Observability workflows, we recommend keeping your `.baselime` folder in Git alongside your source code. This enables you to sync and version control your queries, alerts and dashboards, and collaborate with other team members.

To pull the pregenerated queries and dashboards to your local machine, run `baselime pull` using the Baselime CLI. If the service has not been initialized locally, the CLI will prompt you to select the relevant service from a list of all your services. Once selected, Baselime will download all the queries, alerts, and dashboards for that service, enabling you to work with them locally.
