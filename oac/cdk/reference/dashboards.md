---
label: Dashboards
order: -3
---

# Baselime CDK Dashboards

Dashboards give you a birds eye view of a collection of your query results. This can help you look at multiple related graphs on a single page to spot interesting trends.

Dashboards are a collection of queries and charts that you want to keep for future reference. Boards help you visualise multiple queries at once, to spot interesting trends and share your findings with your team.

--- 

## Dashboard Specification

Here’s a sample dashboard in Baselime CDK that uses all of the supported settings for defining dashboard in Baselime. Use it to get started creating your own dashboard.

```typescript # :icon-code: index.ts 
new Dashboard("cluster-performance", {
  // Provide a description for the board - optional
  description: `Stats representing the cluster performance`,
  parameters: {
    widgets: [
        { query: clickhouseCpuPerNode, name: "CPU Per Node" },
        { query: clickhouseDiskPerNode, name: "Disk Usage Per Node" },
        { query: clickhouseMemoryPerNode, name: "Memory Usage Per Node" },
    ]
  }
});
```

---

## properties

### description (optional)

The description of the dashboard is a string that provides more information about the dashboard. It can include high-level details or any other relevant information.

Example:

```typescript # :icon-code: index.ts
description: "A detailed explanation for the dashboard"
```

--- 

### parameters

The `parameters` of a dashboard define the widgets to display on the dashboard.

#### widgets

The `widgets` parameter is an array of widget objects that specify the queries to run and the names of the widgets to display on the dashboard. `name` and `description` are both optional parameters for a widget.

Example:

```typescript # :icon-code: index.ts
widgets: [
  { query: queryConstruct, name: "A short title", description: "And a detailed description" },
]
```