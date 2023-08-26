---
label: What is Baselime?
order: 2
---

[Baselime](https://baselime.io) is an observability solution built for modern cloud-native environments. It enables teams to identify defects, correlate telemetry data, and find the root case of issues faster, without compromising on cost, cardinality, or scale.

![Baselime Console](./assets/images/illustrations/diagrams.png)

Baselime makes it easy to observe your cloud services, containers orchestrators (AWS ECS), and serverless functions. Monitor everything, from function latencies and cold-starts to business domain metrics derived from your logs and distributed traces. 


---

## Our mission

Our mission is to simplify the complexity of serverless stacks. We make observability easy for you such that you can focus on what truly matters: building better products.

---

## How is Baselime different?

Traditional monitoring solutions were built for a world where most applications were single monolithic applications. These solutions lack when it comes to microservices and serverless in 3 major ways:
- **Logs volume and cardinality**: Microservices generate a higher amounts of data with higher cardinality. The cost of traditional solutions scales exponentially with higher cardinality data.
- **Distributed tracing**: Microservices handle distributed transactions across multiple services and serverless functions. Traditional solutions based on logs struggle to capture the end-to-end transactions.
- **Centralized architecture**: Traditional solutions typically collect all the logs and metrics and store them in a centralised place. This approach is not suitable for microservices as the data volume increases exponentially.

Baselime directly connects to your AWS account and uses OpenTelemetry to automatically instrument your microservices and serverless functions.

Also, Baselime uses our proprietary query engine built on top of ClickHouse to effectively index all your telemetry data. From day 0, everything is queriable and searchable, and correlation between data sources is a breeze.

Moreover, Baselime gives your control over the residency of your data. Either using our backend or a **Bring Your Own Backend** solution where all the data is stored on your cloud account.

---

## How does Baselime work?

Connecting your AWS account to Baselime takes under 5 minutes, after which you can start troubleshooting and solving infrastructure and application issues unbelievably fast with high cardinalty data.

Baselime is built on top of ClickHouse, the fastest open-source database in the world, and leverages OpenTelemetry to instrument your applications.

!!!
Do you want to learn more about OpenTelemetry? Start [here](https://opentelemetry.io/).
!!!

Baselime does not perform any pre-aggregation of data before ingestion; as such you can run arbitrary queries on you telemetry data, and get answers about the state of your application, regardless of how unusual or unique this state is.

![Baselime in your ecosystem](./assets/images/illustrations/o11y-for-serverless/ecosystem.png)

---

## Why Baselime?

==- Reduce downtime
Troubleshoot infrastructure and application issues unbelievably fast with high cardinality data.
==- Search anything, anywhere. It's all indexed
Query against any nested field and automatically surface anomalies fast; no matter how rare, specific, or deep in your stack.
==- Take control of your data and costs
Use or backend or **Bring Your Own Backend**. Up to 6x more value than the big dogs. No per-function pricing, no per-seat pricing, no per-alert pricing. Start at $0 and scale up as your apps grow, with no hidden fees.
==-
