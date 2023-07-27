---
label: Dashboards
order: -2
---

# ORL Dashboards

ORL (Observability Reference Language) dashboards are used to visualise data.

---

## Sample Dashboard Spec

Here’s a sample ORL spec that uses all of the supported settings for defining dashboards in Baselime. Use it to get started creating your own dashboards.

``` yaml # :icon-code: .baselime/resources.yml
lambda-stats:
  # type of the resource: dashboard 
  type: dashboard
  # properties of the dashboard
  properties:
    # description of the dashboard (optional)
    description: >
      This dashboards gives an overview of the health of the service.
    # parameters of the dashboard
    parameters:
      # list of widgets to include in the dashboard
      widgets:
          # view of the widget, one of 'calculations', 'events', or 'traces'
        - view: calculations
          # query to run for this widget, must be the reference to an existing query
          query: !ref my-metric-query
        - view: events
          query: !ref errors-in-logs
        - view: traces
          query: !ref slow-requests
```

---

## properties

### description (optional)

The `description` of the ORL dashboard is a string that provides more information about the dashboard.

Example:

```yaml # :icon-code: .baselime/resources.yml
description: This dashboards gives an overview of the health of the service.
```

---

### parameters

The `parameters` of an ORL dashboard define the widgets to display in the dashboard.

#### widgets

A widget is a graphical element that displays data in a compact and user-friendly way. It can be customized and configured to show specific the results of a specific query in a given view.

##### query

The `query` parameter is a reference to an ORL query that defines the data to be displayed in the widget. It is specified as a string in the format `!ref query_id`, where `query_id` is the id of the ORL query.

Example:

```yaml # :icon-code: .baselime/resources.yml
widgets:
  - view: calculations
    query: !ref my-metric-query
```


##### view

In ORL, there are three types of widget views:

- `calculations`: This view presents your data as line charts, enabling you to quickly calculate key performance metrics like averages, sums, and counts.
- `events`: This view allows you to explore individual events by filtering and searching, making it a valuable tool for investigating specific occurrences and trends.
- `traces`: This view provides a scatter plot of distributed traces, giving you insights into bottlenecks and latency issues. It's perfect for investigating specific requests or flows and optimizing performance.


Example:

```yml # :icon-code: .baselime/resources.yml
widgets:
  - view: calculations
    query: !ref my-metric-query
```

---

### Example ORL Dashboard

Here is an example ORL dashboard that combine all of the above properties.


``` yaml # :icon-code: .baselime/resources.yml
lambda-stats:
  type: dashboard
  properties:
    description: >
      This dashboards gives an overview of the health of the service.
    parameters:
      widgets:
        - view: calculations
          query: !ref my-metric-query
        - view: events
          query: !ref errors-in-logs
        - view: traces
          query: !ref slow-requests
```
