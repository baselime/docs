---
label: API Docs
order: -11
icon: book
---

This page contains the information about Baselime API endpoints, types of
requests that can be made to them and the expected responses.

---

# Application resources

**Endpoint: `go.baselime.io/v1`**

This endpoint enables the client to interact with resources on Baselime platform, such as queries, alerts or dashboards.

## Authentication Headers
* `content-type: application/json`
* `x-api-key: <api key>` - get your admin API key from [Baselime console](https://console.baselime.io)

## Dashboards

==- [!badge GET] `/dashboards`
**Description:** Lists all dashboards in the environment.

**Response**
```typescript Body
{
  "data": Array<{
    "id": string
    "parameters": {
      "widgets": Array<{
        "type": "table" | "timeseries" | "statistic" | "timeseries_bar" // literal
        "queryId": string
      }>
    }
  }>
}

```

==- [!badge GET] `/dashboards/{id}`
**Description:** Gets a dashboard by ID.


**Request**
* `{id}` - The ID of the dashboard.

**Response**
```typescript Body
{
  "data": {
    "id": string
    "parameters": {
      "widgets": Array<{
        "type": "table" | "timeseries" | "statistic" | "timeseries_bar" // literal
        "queryId": string
      }>
    }
  }
}
```

==- [!badge variant="success" text="POST"] `/dashboards`
**Description:** Creates a new dashboard.

**Request**
```typescript Body
{
  "id": string
  "parameters": {
    "widgets": Array<{
      "type": "table" | "timeseries" | "statistic" | "timeseries_bar" // literal
      "queryId": string
    }>
  }
}
```

**Response**
```typescript Body
{
  "data": {
    "id": string
    "parameters": {
      "widgets": Array<{
        "type": "table" | "timeseries" | "statistic" | "timeseries_bar" // literal
        "queryId": string
      }>
    }
  }
}
```


==- [!badge variant="warning" text="PUT"] `/dashboards`
**Description:** Updates a dashboard.

**Request**

```typescript Body
{
  "id": string
  "parameters": {
    "widgets": Array<{
      "type": "table" | "timeseries" | "statistic" | "timeseries_bar" // literal
      "queryId": string
    }>
  }
}
```

**Response**
```typescript Body
{
  "data": {
    "id": string
    "parameters": {
      "widgets": Array<{
        "type": "table" | "timeseries" | "statistic" | "timeseries_bar" // literal
        "queryId": string
      }>
    }
  }
}
```


==- [!badge variant="danger" text="DELETE"] `/dashboards/{id}`
**Description:** Deletes a dashboard.

**Request**
* `{id}` - The ID of the dashboard.

**Response**
```typescript Body
{
  "message": "Dashboard deleted",
}
```
===
## Queries

==- [!badge GET] `/queries`
**Description:** Lists all queries in the environment.

**Response**
```typescript Body
{
  "data": Array<{
    "workspaceId": string
    "environmentId": string
    "id": string
    "parameters": {
      "datasets": Array<string>
      "calculations": Array<{
        "key": string
        "operator": string
        "alias": string
      }>
      "filters": Array<{
        "type": "string" | "number" | "boolean" // literal
        "key": string
        "operation": string
        "value": string | number | boolean
      }>
      "groupBys": Array<{
        "type": "string" | "number" | "boolean"
        "value": string | number | boolean
      }>
      "needle": {
        "value": string | number | boolean
        "isRegex": boolean
      }
      "filterCombination": "AND" | "OR" // literal
    }
  }>
}
```

==- [!badge GET] `/queries/{id}`
**Description:** Gets a query by ID.

**Request**
* `{id}` - The ID of the query.

**Response**
```typescript Body
{
  "data": {
    "workspaceId": string
    "environmentId": string
    "id": string
    "parameters": {
      "datasets": Array<string>
      "calculations": Array<{
        "key": string
        "operator": string
        "alias": string
      }>
      "filters": Array<{
        "type": "string" | "number" | "boolean" // literal
        "key": string
        "operation": string
        "value": string | number | boolean
      }>
      "groupBys": Array<{
        "type": "string" | "number" | "boolean"
        "value": string | number | boolean
      }>
      "needle": {
        "value": string | number | boolean
        "isRegex": boolean
      }
      "filterCombination": "AND" | "OR" // literal
    }
  }
}
```

==- [!badge variant="success" text="POST"] `/queries`
**Description:** Creates a new query.

**Request**
```typescript Body
{
  "workspaceId": string
  "environmentId": string
  "id": string
  "parameters": {
    "datasets": Array<string>
    "calculations": Array<{
      "key": string
      "operator": string
      "alias": string
    }>
    "filters": Array<{
      "type": "string" | "number" | "boolean" // literal
      "key": string
      "operation": string
      "value": string | number | boolean
    }>
    "groupBys": Array<{
      "type": "string" | "number" | "boolean"
      "value": string | number | boolean
    }>
    "needle": {
      "value": string | number | boolean
      "isRegex": boolean
    }
    "filterCombination": "AND" | "OR" // literal
  }
}
```

**Response**
```typescript Body
{
  "data": {
    "workspaceId": string
    "environmentId": string
    "id": string
    "parameters": {
      "datasets": Array<string>
      "calculations": Array<{
        "key": string
        "operator": string
        "alias": string
      }>
      "filters": Array<{
        "type": "string" | "number" | "boolean" // literal
        "key": string
        "operation": string
        "value": string | number | boolean
      }>
      "groupBys": Array<{
        "type": "string" | "number" | "boolean"
        "value": string | number | boolean
      }>
      "needle": {
        "value": string | number | boolean
        "isRegex": boolean
      }
      "filterCombination": "AND" | "OR" // literal
    }
  }
}
```

==- [!badge variant="warning" text="PUT"] `/queries`
**Description:** Updates a query.

**Request**

```typescript Body
{
  "workspaceId": string
  "environmentId": string
  "id": string
  "parameters": {
    "datasets": Array<string>
    "calculations": Array<{
      "key": string
      "operator": string
      "alias": string
    }>
    "filters": Array<{
      "type": "string" | "number" | "boolean" // literal
      "key": string
      "operation": string
      "value": string | number | boolean
    }>
    "groupBys": Array<{
      "type": "string" | "number" | "boolean" // literal
      "value": string | number | boolean
    }>
    "needle": {
      "value": string | number | boolean
      "isRegex": boolean
    }
    "filterCombination": "AND" | "OR" // literal
  }
}
```

**Response**
```typescript Body
{
  "data": {
    "workspaceId": string
    "environmentId": string
    "id": string
    "parameters": {
      "datasets": Array<string>
      "calculations": Array<{
        "key": string
        "operator": string
        "alias": string
      }>
      "filters": Array<{
        "type": "string" | "number" | "boolean" // literal
        "key": string
        "operation": string
        "value": string | number | boolean
      }>
      "groupBys": Array<{
        "type": "string" | "number" | "boolean"
        "value": string | number | boolean
      }>
      "needle": {
        "value": string | number | boolean
        "isRegex": boolean
      }
      "filterCombination": "AND" | "OR" // literal
    }
  }
}
```

==- [!badge variant="danger" text="DELETE"] `/queries/{id}`
**Description:** Deletes a query.

**Request**
* `{id}` - The ID of the query.

**Response**
```typescript Body
{
  "message": "Query deleted"
}
```
===
## Alerts

==- [!badge GET] `/alerts`
**Description:** Lists all alerts in the environment.

**Response**
```typescript Body
{
  "data": Array<{
    "workspaceId": string
    "environmentId": string
    "id": string
    "name": string
    "description": string
    "enabled": boolean
    "generated": boolean
    "generatedType": string
    "channels": Array<{
      "type": "email" | "slack" | "webhook" // literal
      "targets": Array<string>
    }>
    "parameters": {
      "queryId": string
      "threshold": {
        "operation": string
        "value": number
      },
      "frequency": string
      "window": string
    },
    "snoozed": {
      "value": boleean
      "until": number
      "userId": string
    }
  }>
}
```

==- [!badge GET] `/alerts/{id}`
**Description:** Gets an alert by ID.

**Request**
* `{id}` - The ID of the alert.

**Response**
```typescript Body
{
  "data": {
    "workspaceId": string
    "environmentId": string
    "id": string
    "name": string
    "description": string
    "enabled": boolean
    "generated": boolean
    "generatedType": string
    "channels": Array<{
      "type": "email" | "slack" | "webhook" // literal
      "targets": Array<string>
    }>
    "parameters": {
      "queryId": string
      "threshold": {
        "operation": string
        "value": number
      },
      "frequency": string
      "window": string
    },
    "snoozed": {
      "value": boleean
      "until": number
      "userId": string
    }
  }
}
```

==- [!badge variant="success" text="POST"] `/alerts`
**Description:** Creates a new alert.

**Request**
```typescript Body
{
  "workspaceId": string
  "environmentId": string
  "id": string
  "name": string
  "description": string
  "enabled": boolean
  "generated": boolean
  "generatedType": string
  "channels": Array<{
    "type": "email" | "slack" | "webhook" // literal
    "targets": Array<string>
  }>
  "parameters": {
    "queryId": string
    "threshold": {
      "operation": string
      "value": number
    },
    "frequency": string
    "window": string
  },
  "snoozed": {
    "value": boleean
    "until": number
    "userId": string
  }
}
```

**Response**
```typescript Body
{
  "data": {
    "workspaceId": string
    "environmentId": string
    "id": string
    "name": string
    "description": string
    "enabled": boolean
    "generated": boolean
    "generatedType": string
    "channels": Array<{
      "type": "email" | "slack" | "webhook" // literal
      "targets": Array<string>
    }>
    "parameters": {
      "queryId": string
      "threshold": {
        "operation": string
        "value": number
      },
      "frequency": string
      "window": string
    },
    "snoozed": {
      "value": boleean
      "until": number
      "userId": string
    }
  }
}
```

==- [!badge variant="warning" text="PUT"] `/alerts`

**Description:** Updates an alert.

**Request**

```typescript Body
{
  "workspaceId": string
  "environmentId": string
  "id": string
  "name": string
  "description": string
  "enabled": boolean
  "generated": boolean
  "generatedType": string
  "channels": Array<{
    "type": "email" | "slack" | "webhook" // literal
    "targets": Array<string>
  }>
  "parameters": {
    "queryId": string
    "threshold": {
      "operation": string
      "value": number
    },
    "frequency": string
    "window": string
  },
  "snoozed": {
    "value": boleean
    "until": number
    "userId": string
  }
}
```

**Response**
```typescript Body
{
  "data": {
    "workspaceId": string
    "environmentId": string
    "id": string
    "name": string
    "description": string
    "enabled": boolean
    "generated": boolean
    "generatedType": string
    "channels": Array<{
      "type": "email" | "slack" | "webhook" // literal
      "targets": Array<string>
    }>
    "parameters": {
      "queryId": string
      "threshold": {
        "operation": string
        "value": number
      }
      "frequency": string
      "window": string
      "filters": Array<{
        "type": "string" | "number" | "boolean" // literal
        "key": string
        "operation": string
        "value": string | number | boolean
      }>
      "groupBys": Array<{
        "type": "string" | "number" | "boolean"
        "value": string | number | boolean
      }>
      "needle": {
        "value": string | number | boolean
        "isRegex": boolean
      }
    }
    "snoozed": {
      "value": boleean
      "until": number
      "userId": string
    }
  }
}
```

==- [!badge variant="danger" text="DELETE"] `/alerts/{id}`
**Description:** Deletes an alert.

**Request**
* `{id}` - The ID of the alert.

**Response**
```typescript Body
{
  "message": "Alert deleted"
}
```
===

---

## Services

==- [!badge GET] `/services`
**Description:** Lists all services in the environment.

**Response**
```typescript Body
{
  "data": Array<{
    "name": string
    "workspaceId": string
    "environmentId": string
    "userId": string
    "generated": boolean
    "created": string
    "updated": string
    "metadata": Record<string, any>
  }>
}

```

==- [!badge GET] `/services/{name}`
**Description:** Gets a service by name.


**Request**
* `{id}` - The name of the service.

**Response**
```typescript Body
{
  "data": {
    "name": string
    "workspaceId": string
    "environmentId": string
    "userId": string
    "generated": boolean
    "created": string
    "updated": string
    "metadata": Record<string, any>
  }
}
```

==- [!badge variant="danger" text="DELETE"] `/services/{name}`
**Description:** Deletes a service.

**Request**
* `{name}` - The name of the service.

**Response**
```typescript Body
{
  "message": "Service deleted",
}
```
===


# Telemetry data

**Endpoint `data.baselime.io/v1`**

This endpoint enables you to query your telemetry data.

## Authentication
* `content-type: application/json`
* `x-api-key: <api key>` - get your admin API key from [Baselime console](https://console.baselime.io)

==- [!badge POST] `/query_runs`
**Description:** Creates a new query run and returns its results.

---
**Request**
```typescript Body
{
  "workspaceId": string
  "environmentId": string
  "queryId": string
  "parameters": {
    "datasets": Array<string>
    "calculations": Array<{
      "key": string
      "operator": CalculationOperator
    }>
    "filters": Array<{
      "type": string
      "operation": FilterOperator
      "value": string | number | boolean
      "key": string
    }>
    "groupBys": Array<{
        "type": "string" | "number" | "boolean" // literal
        "value": string | number | boolean
    }>
    "orderBy": {
      "value": string,
      "order": "ASC" | "DESC"
    }
    "needle": {
        "value": string | number | boolean
        "isRegex": boolean
        "matchCase": boolean
    }
    "limit": number
  }
  "timeframe": {
    "from": number // unix milliseconds
    "to": number // unix milliseconds
  }
  "granularity": number // milliseconds
  "limit": number
  "view": "traces" | "events" | "calculations" | "invocations" | "requests"  | "patterns" // literal
  "patternType": "message" | "error"
}
```

---
**Response**
```typescript Body
{
  "message": "Success",
  "data": {
    "calculations": {
      "aggregates": Array<{
        "values": QueryDependent
      }>
      "series": Array<{
        "time": string
        "data": Array<{
          "aggregates": QueryDependent
        }>
      }>
    }
    "queryRun": {
      "id": number
      "workspaceId": string
      "environmentId": string
      "timeframe": {
        "from": number
        "to": number
      }
      "userId": string
      "status": string
      "granularity": number // milliseconds
      "query": Query
      "statistics": {
        "elapsed": number
        "rows_read": number
        "bytes_read": number
      }
    }
    "events": Array<Event>
    "patterns": Array<EventPatterns>
    "invocations": Record<string, Invocation>
    "rootSpans": Array<Span>
    "fields": Array<Field>
    "statistics": {
      "elapsed": number
      "rows_read": number
      "bytes_read": number
    }
  }
}
```
===

#### Query data types

==- CalculationOperator
```typescript
enum CalculationOperator {
  COUNT_DISTINCT = "COUNT_DISTINCT",
  COUNT = "COUNT",
  MAX = "MAX",
  MIN = "MIN",
  SUM = "SUM",
  AVG = "AVG",
  MEDIAN = "MEDIAN",
  P001 = "P001",
  P01 = "P01",
  P05 = "P05",
  P10 = "P10",
  P25 = "P25",
  P75 = "P75",
  P90 = "P90",
  P95 = "P95",
  P99 = "P99",
  P999 = "P999",
  STDDEV = "STDDEV",
  VARIANCE = "VARIANCE",
}
```
==- FilterOperator
```typescript
enum FilterOperator {
  EQUAL = "=",
  DIFFERENT = "!=",
  GREATER_THAN = ">",
  GREATER_THAN_EQUAL = ">=",
  LOWER_THAN = "<",
  LOWER_THAN_EQUAL = "<=",
  LIKE = "LIKE",
  NOT_LIKE = "NOT_LIKE",
  INCLUDES = "INCLUDES",
  DOES_NOT_INCLUDE = "DOES_NOT_INCLUDE",
  MATCH_REGEX = "MATCH_REGEX",
  EXISTS = "EXISTS",
  DOES_NOT_EXIST = "DOES_NOT_EXIST",
  IN = "IN",
  NOT_IN = "NOT_IN",
  STARTS_WITH = "STARTS_WITH",
}
```
===

---