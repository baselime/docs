---
label: Queries
order: -1
---

# ORL Queries

ORL (Observability Reference Language) queries are used to retrieve and analyze data from various datasets in order to gain insights and improve observability of systems and services.

## properties

ORL queries have a set of properties that define the query's characteristics and behavior.


### name (optional)

The `name` of the ORL query is a string used to identify the query. It can be a human-readable name that describes the purpose of the query.

Example:

```yaml # :icon-code: .baselime/resources.yml
name: Average request duration by user ID
```

---

### description (optional)

The `description` of the ORL query is a string that provides more information about the query. It can include details about the data being queried, the calculations being performed, and any other relevant information.

Example:

```yaml # :icon-code: .baselime/resources.yml
description: This query calculates the average request duration for each user ID in the logs dataset.
```

---

### parameters

The `parameters` of an ORL query define the datasets to query, the calculations to perform on the data, and any filters or groupings to apply.

#### datasets

The `datasets` parameter is an array of strings that specify the names of the datasets to query. ORL supports querying multiple datasets simultaneously, allowing you to analyze data from different sources in a single query.

Example:

```yaml # :icon-code: .baselime/resources.yml
datasets:
  - lambda-logs
  - metrics
  - otel
```

---

#### filters (optional)

The `filters` parameter is an array of strings that specify conditions to filter the data by. Each string follows this format: `'key operation value'`, where `key` is the field to filter on, `operation` is the comparison operator to use, and `value` is the value to compare against. ORL supports the following operations:

- `=`: Equals
- `!=`: Does not equal
- `>`: Greater than
- `>=`: Greater than or equal to
- `<`: Less than
- `<=`: Less than or equal to
- `INCLUDES`: Includes
- `DOES_NOT_INCLUDE`: Does not include
- `EXISTS`: Exists (applies to fields that may or may not exist in the data)
- `DOES_NOT_EXIST`: Does not exist (applies to fields that may or may not exist in the data)
- `MATCH_REGEX`: Matches a regular expression
- `IN`: In (applies to arrays only)
- `NOT_IN`: Not in (applies to arrays only)
- `STARTS_WITH`: Starts with (applies to strings only)
- `LIKE`: Matches a string
- `NOT_LIKE`: Does not match a string

Filters can be used to narrow down the data being analyzed and focus on specific events or attributes.

Example: 

```yaml # :icon-code: .baselime/resources.yml
filters:
  - '@message.data.responseStatus = 404'
  - '@message.userId IN [123, 456, 789]'
  - 'requestDuration > 500'
  - 'requestMethod EXISTS'
  - 'requestPath STARTS_WITH /api'
```

---

#### calculations (optional)

The `calculations` parameter is an array of strings that specify the calculations to perform on the data. ORL supports the following calculations:

- `COUNT`: Counts the number of events.
- `COUNT_DISTINCT`: Counts the number of distinct occurences of a field (applies to strings only).
- `MAX`: returns the maximum value of a field.
- `MIN`: returns the minimum value of a field.
- `SUM`: returns the sum of all values of a field.
- `AVG`: returns the average of all values of a field.
- `MEDIAN`: returns the median of all values of a field.
- `STDDEV`: returns the sample standard deviation of a field.
- `VARIANCE`: returns the sample variance of a field.
- `P001`, `P01`, `P05`, `P10`, `P25`, `P75`, `P90`, `P95`, `P99`, `P999`: return the specified percentile of all values of a field.

Calculations can be used to perform statistical analysis on the data and derive insights such as the average request duration, the maximum response size, or the 95th percentile of request latencies.


Example:

```yaml # :icon-code: .baselime/resources.yml
calculations:
  - 'AVG(requestDuration)'
  - 'MAX(responseSize)'
  - 'P95(requestLatency)'
```

---

#### groupBy (optional)

The `groupBy` parameter is an object that specifies how to segment the data by a field. It has the following fields:

- `value`: The field to group the data by
- `limit`: The maximum number of results to return (default: 10)
- `type`: The type of the data field to group by (string, boolean, or number)
- `orderBy`: The calculation to order the results by (default: the first calculation in the query)
- `order`: The order in which to return the results (ASC or DESC, default: DESC)

Grouping the data by a field allows you to segment the results into distinct groups and analyze them separately.

Example:

```yaml # :icon-code: .baselime/resources.yml
groupBy:
  value: userId
  limit: 100
  type: string
  orderBy: 'AVG(requestDuration)'
  order: ASC
```

---

#### needle (optional)

The `needle` parameter is an object that specifies a search to perform on the data. It has the following fields:

- `value`: The string to search for
- `matchCase`: A boolean indicating whether the search should be case-sensitive (default: false)
- `isRegex`: A boolean indicating whether the search value is a regular expression (default: false)

The needle can be used to find specific set of events or patterns in the data.

Example:

```yaml # :icon-code: .baselime/resources.yml
needle:
  value: 'error'
  matchCase: true
  isRegex: false
```

---

### Example ORL Queries

Here are example ORL queries that combine all of the above properties.

This ORL query retrieves data from the otel traces dataset and performs several calculations on the data. It computes the average request duration, maximum response size, and 95th percentile of request latencies for each user ID in the dataset.

It filters the data to only include user IDs with a request duration greater than 500ms, and limits the results to the top 100 user IDs based on the average request duration. The results are ordered by the average request duration in descending order. The query also searches for the word "error" in the data and filters the results based on whether or not the word is present.

``` yaml # :icon-code: .baselime/resources.yml
errors-latency-p95:
  type: query
  properties:
    name: Errors with Latency P95
    description: > 
      Computes the average request duration, maximum response size, and
      p95 requestLatency for each user ID in the otel traces dataset, filtered
      to only include user IDs with a request duration greater than 500ms, up to
      100 users.
    parameters:
      datasets:
        - otel
      calculations:
        - AVG(event.duration)
        - MAX(event.response.size)
        - P95(event.duration)
      filters:
        - event.duration > 500
      groupBy:
        type: string
        value: event.attributes.userId
        limit: 100
        orderBy: AVG(event.duration)
        order: DESC
      needle:
        value: error
        isRegex: false
        matchCase: true
```

This ORL query calculates the total consumed read capacity units for each DynamoDB table in a service. It filters the data to only include events with a metric_name of ConsumedReadCapacityUnits and a unit of Count, and groups the results by TableName. The query returns the top 10 tables with the highest consumed read capacity units.

``` yaml # :icon-code: .baselime/resources.yml
dynamodb-consumed-read-capacity-units-by-table:
  type: query
  properties:
    name: DynamoDB Consumed Read Capacity Units by Table
    description: Computes the total consumed read capacity units for each table in the CloudWatch metrics dataset.
    parameters:
      datasets:
        - cloudwatch-metrics
      filters:
        - 'namespace = AWS/DynamoDB'
        - 'metric_name = ConsumedReadCapacityUnits'
      calculations:
        - SUM(value.sum)
      groupBy:
        type: string
        value: dimensions.TableName
        limit: 10
        orderBy: SUM(value.sum)
```

