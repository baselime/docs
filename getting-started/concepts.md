---
label: Baselime Concepts
order: -3
---

# Baselime Concepts
---

Serverless is the next evolution of software architecture.

However, when adopting serverless architectures, there's usually and explosion in operational complexity. Highly distributed microservices leveraging serverless functions, databases, event buses and event queues can make it extremely difficult to track and understand how the systems are behaving and how defects occur.

The goal of [Baselime](https://baselime.io) is to empower your teams to:
- Solve issues before they impact actual users and customers
- Deeply understand how their production systems are behaving
- Improve collaboration within and across teams on production systems

---

## Telemetry Data

Once you onboard on Baselime, Baselime will start to automatically collect logs, metrics and various other data types from your serverless applications.

In order to improve the observability of your serverless systems, your systems need to emit telemetry data in the form of spans and traces.

Spans are data describing an event which happened in your systems, the context in which it happened and any additional attribute around the event. The combination of related spans are a trace. Spans and traces allow you to investigate and resolve issues more efficiently than with logs and metrics.   

Baselime ingests those events from your applications and allows you to interact with them through its various clients in near-real-time.

Once the telemetry data is ingested, you can run complex queries on your data, filtering across any dimension or formula, grouping and aggregating as you please. This allows you to interrogate your systems at a fine level and isolate a single user, a single service or a single transaction; or query across multiple dimensions to get a higher level overview.

---

## Observability as Code

Observability as Code adapts the principles of Infrastructure as Code to observability configurations. Dashboards, queries, alerts and everything else are configured and automated through Continuous Deployment pipelines, are source-controlled, and are repeatable across teams and environments.

Baselime helps teams adopt the best practices from software engineering to collaborate and iterate on observability configurations.

With Observability as Code, start treating observability as a first class citizen of the software development life cycle, rather than an after-thought.

---

## Debug and Test in Prod

Baselime collects telemetry data from your applications in prod. It correlates logs, metrics, traces and all the events your systems emit.

This allows your team to investigate and resolve incidents without relying on adding additional log messages when there's an outage. You can search through requests, events payloads, database requests, etc... across your serverless applications.
