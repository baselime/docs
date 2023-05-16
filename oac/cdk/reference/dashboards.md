---
label: Dashboards
order: -3
---

# Baselime CDK Dashboards

Dashboards give you a birds eye view of a collection of your query results. This can help you look at multiple related graphs on a single page to spot interesting trends.

## Sample Alert Spec

Here’s a sample dashboard in Baselime CDK that uses all of the supported settings for defining dashboard in Baselime. Use it to get started creating your own dashboard.

```typescript # :icon-code: index.ts 
new Dashboard("clickhouse-cluster-performance", {
  // Provide a description for the alert - optional
  description: `High level clickhouse stats`,
  // disable the alert - optional
  parameters: {
    widgets: [
        { query: sumEventsIngested, name: "Events Ingested" },
        { query: querysRan, name: "Queries Executed" },
        { query: queryLatency, name: "Query Latency" },
        { query: clickhouseCpuPerNode, name: "Clickhouse CPU Per Node" },
        { query: clickhouseDiskPerNode, name: "Clickhouse Disk Usage Per Node" },
        { query: clickhouseMemoryPerNode, name: "Clickhouse Memory Usage Per Node" },
    ]
  }
});
```

---

## properties

#### description (optional)

The description of the dashboard is a string that provides more information about the dashboard. It can include high-level details or any other relevant information.

Example:

```typescript # :icon-code: index.ts
description: "A detailed explanation for the dashboard"
```

### parameters

The parameters of a dashboard define the widgets to display on the dashboard.

#### parameters.widgets

The widgets parameter is an array of widget objects that specify the queries to run and the names of the widgets to display on the dashboard. `name` and `description` are both optional parameters for a widget.

Example:

```typescript # :icon-code: index.ts
widgets: [
  { query: queryConstruct, name: "A short title", description: "and a detailed description" },
]
```