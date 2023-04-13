---
label: Dashboards
order: -2
---

# ORL Dashboards

ORL (Observability Reference Language) dashboards are used to monitor data from various datasets as a single pain of glass

## Dashboard Views

In ORL, there are three types of dashboard views:

    Calculations: This view shows calculations based on metrics and logs. It can be used to calculate aggregate values, such as averages, sums, and counts.

    Events: This view shows individual log events, which can be filtered and searched. It can be used to investigate specific events or trends.

    Traces: This view shows distributed traces as a scatter plot, which can be used to identify bottlenecks and latency issues. It can be used to investigate specific requests or flows.

```yml
view: calculations | events | traces
```

## Dashboard Queries

In ORL, queries are used to retrieve data from various sources, such as metrics, logs, and traces. A query can be defined in YAML format and can reference existing queries or data sources.

For example, a query might look like this:

```yml
query: !ref my-query
```

Where my-query is the name of an existing query in the ORL project.

## Dashboard Widgets

In ORL, widgets are used to display data on a dashboard. A widget can be defined in YAML format and can reference a view and a query.

For example, a widget might look like this:

```yml
widgets:
  - view: calculations
    query: !ref my-metric-query
```

Where calculations is the view type and my-metric-query is the name of a query that retrieves metric data.

## Putting it all together

These properties combine to look like this

```yml
lambda-stats:
  type: dashboard
  properties:
    parameters:
      widgets:
        - view: calculations
          query: !ref lambda-cold-starts
        - view: calculations
          query: !ref lambda-errors-only
```

## Conclusion

ORL dashboards are a powerful tool for monitoring and troubleshooting systems. By using views, queries, and widgets, you can customize dashboards to meet your specific needs and gain insights into system behavior.