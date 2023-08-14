---
label: What is Baselime?
order: 2
---

[Baselime](https://baselime.io) is an observability solution built for modern cloud-native environments. It enables teams to identify defects, correlate telemetry data, and find the root case of issues faster, without compromising on cost, cardinality, or scale.

![Baselime Console](./assets/images/illustrations/diagrams.png)

Baselime makes it easy to observe your cloud services, containers orchestrators (AWS ECS), and serverless functions. Monitor everything, from function latencies and cold-starts to business domain metrics derived from your logs and distributed traces. 


---

## Our mission

Our mission is to simplify the complexity of serverless stacks. We make observability easy for developers such that they can focus on what truly matters: building better products.

---

## How is Baselime different?

Traditional monitoring solutions were built for a world where most applications were single monolithic applications. These solutions lack when it comes to microservices and serverless in 3 major ways:
- **Data volume and cardinality**: Microservices generate a higher amounts of data with higher cardinality. The cost of traditional solutions scales exponentially with higher cardinality data.
- **Distributed transactions**: Microservices handle distributed transactions across multiple services and serverless functions. Traditional solutions based on logs struggle to capture the end-to-end transactions, and limit the ability to diagnose performance bottlenecks and failures.
- **Silos and fragmentation**: Traditional solutions provide typically previde logs, metrics and traces in isolation without the contextual correlation to understand the business impact of defects and performance issues.

Baselime directly connects to your AWS account and uses OpenTelemetry to automatically instrument your microservices and serverless functions.

Also, Baselime uses our proprietary query engine built on top of ClickHouse to effectively index all your telemetry data. From day 0, everything is queriable and searchable, and correlation between data sources is a breeze.

---

## How does Baselime work?

Connecting your AWS account to Baselime takes under 2 minutes, after which you can start troubleshooting and solving infrastructure and application issues unbelievably fast with high cardinalty data.

Baselime is built on top of ClickHouse, the open-source fastest database in the world and leverages OpenTelemetry to instrument your applications.

!!!
Do you want to learn more about OpenTelemetry? Start [here](https://opentelemetry.io/).
!!!

Baselime does not perform any pre-aggregation of data before ingestion; as such developers can run arbitrary queries on their telemetry data, and get answers about the state of their application, regardless of how unusual or unique this state is.

![Baselime in your ecosystem](./assets/images/illustrations/o11y-for-serverless/ecosystem.png)

---

## Why Baselime?

==- End-to-end observability
Slice and dice millions of logs, metrics, traces and events faster than on any other serverless solution. Full visibility across your stack, no blind-spots.
==- Detect & solve issues faster
Troubleshoot infrastructure and application issues unbelievably fast with high cardinality data.
==- Unlimited cardinality, all indexed, all searchable
Query against any nested field and automatically surface anomalies; no matter how rare, specific, or deep in your serverless stack.
==- Take control of your data and costs
Up to 6x more value than the big dogs. No per-function pricing, no per-seat pricing, no per-alert pricing. Start at $0 and scale up as your apps grow, with no hidden fees.
==-
