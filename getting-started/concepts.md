---
label: Baselime Concepts
order: -1
---

# Baselime Concepts
---

When adopting serverless architectures, there's usually and explosion in operational complexity. Highly distributed microservices leveraging serverless functions, databases, event buses, and event queues make it extremely difficult to track and understand how the systems are behaving and how defects and incidents occur.

The goal of [Baselime](https://baselime.io) is to empower you and your teams to:
- Stay ahead of bugs and defects with the powers of Observability as Code 
- Solve issues before they impact actual users and customers
- Deeply understand how your production systems are behaving
- Improve collaboration within and across teams on production systems

---

## Observability as Code

Observability as Code adapts the principles of Infrastructure as Code to observability configurations. Dashboards, queries, alerts and everything else are configured and automated through Continuous Deployment pipelines, are source-controlled, and are repeatable across teams and environments.

Baselime helps your team adopt the best practices from software engineering to collaborate and iterate on observability configurations. By shifting left observability in your software developement lifecycles, write your observability configuration simultaneously with your application code, making them a first-class citizen of your codebase, rather than a post-deployment after-thougt.

---

## Telemetry Data

Once you sign-up to Baselime and connect your AWS account, Baselime starts to automatically collect logs, metrics and various other data types from your serverless applications.

Baselime ingests those events from your applications and empowers you to interact with them through its various clients in near-real-time.

Once the telemetry data is ingested, you can run complex queries on your data, filtering across any dimension or formula, grouping and aggregating as you please. This lets you to interrogate your systems at a fine level and isolate a single user, a single service or a single transaction; or query across multiple dimensions to get a higher level overview.

---

## Datasets

Your telemetry data is organised in datasets in Baselime. A dataset is collection of similar or related events events.

---

## Namespaces

Namespaces are additional dimensions to further organise your data such that you can slice and dice when running queries. A typical namespace would be the name of the serverless function emitting the telemetry data. 
