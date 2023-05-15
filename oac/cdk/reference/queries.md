---
label: Queries
order: -1
---

# Baselime CDK Queries

Queries are used to retrieve and analyze data from various datasets in order to
gain insights from your services.

---

## Sample Query Spec

Here’s a sample query in Baselime CDK that uses all of the supported settings
for defining queries in Baselime. Use it to get started creating your own
queries.

```typescript # :icon-code: index.ts
import { Query } from "@baselime/cdk";
const query = new Query("errors-latency-p95", {
  // Provide a description for the query
  description: `Computes the average request duration, maximum response size, and
      p95 requestLatency for each user ID in the otel traces dataset, filtered
      to only include user IDs with a request duration greater than 500ms, up to
      100 users.`,
  parameters: {
    // Specify the datasets to be queried
    datasets: ["otel"],
    // Define the calculations to be performed on the data
    calculation: [
      avg("event.duration"),
      max("event.response.size"),
      p95("event.duration"),
      count(),
    ],
    // Define filters to be applied to the data
    filters: [
      gt("event.duration", 500),
    ],
    // Specify how the data should be grouped
    groupBy: {
      type: "string",
      value: "event.attributes.userId",
      limit: 100,
      orderBy: avg("event.duration"),
      order: "DESC",
    },
    // Define a needle to search for in the haystack of all the telemetry data
    needle {
      value: "error",
      isRegex: false,
      matchCase: true,
    }
  }
});
```

---

## properties

Queries have a set of properties that define the query's characteristics and
behavior.

### description (optional)

The `description` of the query is a string that provides more information
about the query. It can include details about the data being queried, the
calculations being performed, and any other relevant information.

Example:

```typescript # :icon-code: index.ts
description: This query calculates the average request duration for each user ID in the logs dataset.
```

---

### parameters

The `parameters` of a query define the datasets to query, the calculations
to perform on the data, and any filters or groupings to apply.

#### datasets

The `datasets` parameter is an array of strings that specify the names of the
datasets to query. Baselime supports querying multiple datasets simultaneously,
allowing you to analyze data from different sources in a single query.

Example:

```typescript # :icon-code: index.ts
datasets: ["lambda-logs", "otel", "cloudwatch-metrics"]
```

---

#### filters (optional)

The `filters` parameter is an array of strings that specify conditions to filter
the data by. Baselime CDK provides multiple helper functions to create query filters:

- `eq`: Equals
- `neq`: Does not equal
- `gt`: Greater than
- `gte`: Greater than or equal to
- `lt`: Less than
- `lte`: Less than or equal to
- `includes`: Includes
- `notIncludes`: Does not include
- `exists`: Exists (applies to fields that may or may not exist in the data)
- `notExists`: Does not exist (applies to fields that may or may not exist
  in the data)
- `regex`: Matches a regular expression
- `inArray`: In (applies to arrays only)
- `notInArray`: Not in (applies to arrays only)
- `startsWith`: Starts with (applies to strings only)

Filters can be used to narrow down the data being analyzed and focus on specific
events or attributes.

Example:

```typescript # :icon-code: index.ts
filters: [
  eq("@message.data.responseStatus",  404),
  inArray("@message.userId", [123, 456, 789]),
  gt("requestDuration", 500),
  exists("requestMethod"),
  startsWith("requestPath", "/api"),
]
```

Moreover, it is possible to add a filter to a query after the query has been initialised.

```typescript # :icon-code: index.ts
const query = new Query("errors-in-logs", {
  datasets: ["lambda-logs"],
});

query.addFilters([eq("LogLevel", "ERROR")]);
```

---

#### calculations (optional)

The `calculations` parameter is an array of strings that specify the
calculations to perform on the data. Baselime CDK provides multiple helper functions to create query calculations:

- `count`: Counts the number of events.
- `countDistinct`: Counts the number of distinct occurences of a field (applies
  to strings only).
- `max`: returns the maximum value of a field.
- `min`: returns the minimum value of a field.
- `sum`: returns the sum of all values of a field.
- `avg`: returns the average of all values of a field.
- `median`: returns the median of all values of a field.
- `stdDev`: returns the sample standard deviation of a field.
- `variance`: returns the sample variance of a field.
- `p001`, `p01`, `p05`, `p10`, `p25`, `p75`, `p90`, `p95`, `p99`, `p999`: return
  the specified percentile of all values of a field.

Calculations can be used to perform statistical analysis on the data and derive
insights such as the average request duration, the maximum response size, or the
95th percentile of request latencies.

It is possible to pass an optional alias to each of these functions, such that the results are displayed in the Baselime console or CLI using the alias.

Example:

```typescript # :icon-code: index.ts
calculations: [
  avg("requestDuration"),
  max("responseSize", "maxSize"),
  p95("requestLatency"),
]
```

---

#### groupBy (optional)

The `groupBy` parameter is an object that specifies how to segment the data by a
field. It has the following fields:

- `value`: The field to group the data by
- `limit`: The maximum number of results to return (default: 10)
- `type`: The type of the data field to group by (string, boolean, or number)
- `orderBy`: The calculation to order the results by (default: the first
  calculation in the query)
- `order`: The order in which to return the results (ASC or DESC, default: DESC)

Grouping the data by a field allows you to segment the results into distinct
groups and analyze them separately.

Example:

```typescript # :icon-code: index.ts
groupBy {
  value: "userId",
  limit: 100,
  type: "string",
  orderBy: avg("requestDuration"),
  order: "ASC",
}
```

---

#### needle (optional)

The `needle` parameter is an object that specifies a search to perform on the
data. It has the following fields:

- `value`: The string to search for
- `matchCase`: A boolean indicating whether the search should be case-sensitive
  (default: false)
- `isRegex`: A boolean indicating whether the search value is a regular
  expression (default: false)

The needle can be used to find specific set of events or patterns in the data.

Example:

```typescript # :icon-code: index.ts
needle: {
  value: "error",
  matchCase: true,
  isRegex: false,
}
```

---

### Adding an alert

Baselime CDK enables you to add an alert to a query. The alert will run the query on a defined schedule and notify you on your preferred channels when specific conditions are met.

```typescript # :icon-code: index.ts
const query = new Query("errors-in-logs", {
  datasets: ["lambda-logs"],
});

query.addFilters([eq("LogLevel", "ERROR")]);

query.addAlert({
  parameters: {
    threshold: gt(0)
  },
  channels: [{ type: "slack", targets: ["baselime-alerts"] }] 
});
```
---

### Example Queries

Here are example Baselime CDK queries that combine all of the above properties.

This query retrieves data from the otel traces dataset and performs several
calculations on the data. It computes the average request duration, maximum
response size, and 95th percentile of request latencies for each user ID in the
dataset.

It filters the data to only include user IDs with a request duration greater
than 500ms, and limits the results to the top 100 user IDs based on the average
request duration. The results are ordered by the average request duration in
descending order. The query also searches for the word "error" in the data and
filters the results based on whether or not the word is present.

```typescript # :icon-code: index.ts
const query = new Query("errors-latency-p95", {
  description: `Computes the average request duration, maximum response size, and
      p95 requestLatency for each user ID in the otel traces dataset, filtered
      to only include user IDs with a request duration greater than 500ms, up to
      100 users.`,
  parameters: {
    datasets: ["otel"],
    calculation: [
      avg("event.duration"),
      max("event.response.size"),
      p95("event.duration"),
      count(),
    ],
    filters: [
      gt("event.duration", 500),
    ],
    groupBy: {
      type: "string",
      value: "event.attributes.userId",
      limit: 100,
      orderBy: avg("event.duration"),
      order: "DESC",
    },
    needle {
      value: "error",
      isRegex: false,
      matchCase: true,
    }
  }
});
```

This Baselime CDK query calculates the total consumed read capacity units for each
DynamoDB table in a service. It filters the data to only include events with a
metric_name of ConsumedReadCapacityUnits and a unit of Count, and groups the
results by TableName. The query returns the top 10 tables with the highest
consumed read capacity units.

```typescript # :icon-code: index.ts
const query = new Query("dynamodb-consumed-read-capacity-units-by-table", {
  description: "Computes the total consumed read capacity units for each table in the CloudWatch metrics dataset.",
  parameters: {
    datasets: ["cloudwatch-metrics"],
    filters: [
      eq("namespace", "AWS/DynamoDB"),
      eq("metric_name", "ConsumedReadCapacityUnits"),
    ],
    calculations: [
      sum("value.sum", "DynamoDBConsumedReadCUs")
    ],
    groupBy: {
      type: "string",
      value: "dimensions.TableName",
      limit: 10,
      orderBy: "DynamoDBConsumedReadCUs"
    }
  }
})
```
