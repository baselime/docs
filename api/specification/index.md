---
label: Specification
order: -10
icon: light-bulb
---

This page contains the information about Baselime API endpoints, types of
requests that can be made to them and the expected responses.

Data specification of the constructs referenced in the requests can be found under
[Data Specification](#data-specification) section

## Endpoints
[!ref api.baselime.io](#apibaselimeiov1)
[!ref data.baselime.io](#databaselimeiov1)
[!ref go.baselime.io](#gobaselimeiov1)

---

### api.baselime.io/v1

This endpoint requires OAuth2 authentication, and is used by `https://console.baselime.io` to
query the majority of the data.

#### Headers
* `content-type: application/json`
* `Authorization: Bearer <access token>` - [how to obtain access token](https://baselime.io/docs/api/#oauth-authentication)


#### Dashboards
==- [!badge GET] `/dashboards/{workspaceId}/{environmentId}`
**Description:** Lists all dashboards in the workspace and environment.

---
**Request**
* `{workspaceId}` - The ID of the workspace.
* `{environmentId}` - The ID of the environment.
--- 

**Response**
```typescript Body
{
  "message": "Dashboards found",
  "data": Array<Dashboard>,
  "status": 200
}
```

==- [!badge GET] `/dashboards/{workspaceId}/{environmentId}/{dashboardId}`
**Description:** Gets a dashboard by ID.

---
**Request**
* `{workspaceId}` - The ID of the workspace.
* `{environmentId}` - The ID of the environment.
* `{dashboardId}` - The ID of the dashboard.
---

**Response**
```typescript Body
{
  "message": "Dashboard found",
  "data": Dashboard,
  "status": 200
}
```
---
==- [!badge variant="success" text="POST"] `/dashboards`
**Description:** Creates a new dashboard.

---
**Request**
```typescript Body
Dashboard
```
==- [!badge variant="warning" text="PUT"] `/dashboards/{workspaceId}/{environmentId}/{dashboardId}`
**Description:** Updates a dashboard.

---
**Request**
* `{workspaceId}` - The ID of the workspace.
* `{environmentId}` - The ID of the environment.
* `{dashboardId}` - The ID of the dashboard.

```typescript Body
// Exclude workspaceId, environmentId, and id fields from body
Dashboard
```

---
**Response**
```typescript Body
{
  "message": "Dashboard updated",
  "data": Dashboard,
  "status": 200
}
```

==- [!badge variant="danger" text="DELETE"] `/dashboards/{workspaceId}/{environmentId}/{dashboardId}`
**Description:** Deletes a dashboard

---
**Request**
* `{workspaceId}` - The ID of the workspace.
* `{environmentId}` - The ID of the environment.
* `{dashboardId}` - The ID of the dashboard.

---
**Response**
```typescript Body
{
  "message": "Dashboard deleted",
  "status": 200
}
```
===

#### Queries

==- [!badge GET] `/queries/{workspaceId}/{environmentId}`
**Description:** Lists all queries in the workspace and environment.

---
**Request**
* `{workspaceId}` - The ID of the workspace.
* `{environmentId}` - The ID of the environment.
---

**Response**
```typescript Body
{
  "message": "Queries found",
  "data": Array<Query>,
  "status": 200
}
```

==- [!badge GET] `/queries/{workspaceId}/{environmentId}/{queryId}`
**Description:** Gets a query by ID.

---
**Request**
* `{workspaceId}` - The ID of the workspace.
* `{environmentId}` - The ID of the environment.
* `{queryId}` - The ID of the query.
---

**Response**
```typescript Body
{
  "message": "Query found",
  "data": Query,
  "status": 200
}
```

==- [!badge variant="success" text="POST"] `/queries`
**Description:** Creates a new query.

---
**Request**
```typescript Body
Query
```

---
**Response**
```typescript Body
{
  "message": "Query created",
  "data": Query,
  "status": 200
}
```

==- [!badge variant="warning" text="PUT"] `/queries/{workspaceId}/{environmentId}/{queryId}`
**Description:** Updates a query.

---
**Request**
* `{workspaceId}` - The ID of the workspace.
* `{environmentId}` - The ID of the environment.
* `{queryId}` - The ID of the query.

```typescript Body
// Exclude workspaceId, environmentId, and id fields from body
Query
```

---
**Response**
```typescript Body
{
  "message": "Query updated",
  "data": Query,
  "status": 200
}
```

==- [!badge variant="danger" text="DELETE"] `/queries/{workspaceId}/{environmentId}/{queryId}`
**Description:** Deletes a query.

---
**Request**
* `{workspaceId}` - The ID of the workspace.
* `{environmentId}` - The ID of the environment.
* `{queryId}` - The ID of the query.

---
**Response**
```typescript Body
{
  "message": "Query deleted",
  "status": 200
}
```
===

#### Alerts

==- [!badge GET] `/alerts/{workspaceId}/{environmentId}`
**Description:** Lists all alerts in the workspace and environment.

---
**Request**
* `{workspaceId}` - The ID of the workspace.
* `{environmentId}` - The ID of the environment.

---
**Response**
```typescript Body
{
  "message": "Alerts found",
  "data": Array<Alert>,
  "status": 200
}
```

==- [!badge GET] `/alerts/{workspaceId}/{environmentId}/{alertId}`
**Description:** Gets an alert by ID.

---
**Request**
* `{workspaceId}` - The ID of the workspace.
* `{environmentId}` - The ID of the environment.
* `{alertId}` - The ID of the alert.

---
**Response**
```typescript Body
{
  "message": "Alert found",
  "data": Alert,
  "status": 200
}
```

==- [!badge variant="success" text="POST"] `/alerts`
**Description:** Creates a new alert.

---
**Request**
```typescript Body
Alert
```

---
**Response**
```typescript Body
{
  "message": "Alert created",
  "data": Alert,
  "status": 200
}
```

==- [!badge variant="warning" text="PUT"] `/alerts/{workspaceId}/{environmentId}/{alertId}`
**Description:** Updates an alert.

---
**Request**
* `{workspaceId}` - The ID of the workspace.
* `{environmentId}` - The ID of the environment.
* `{alertId}` - The ID of the alert.

```typescript Body
// Exclude workspaceId, environmentId, and id fields from body
Alert
```

---
**Response**
```typescript Body
{
  "message": "Alert updated",
  "data": Alert,
  "status": 200
}
```

==- [!badge variant="danger" text="DELETE"] `/alerts/{workspaceId}/{environmentId}/{alertId}`
**Description:** Deletes an alert.

---
**Request**
* `{workspaceId}` - The ID of the workspace.
* `{environmentId}` - The ID of the environment.
* `{alertId}` - The ID of the alert.

---
**Response**
```typescript Body
{
  "message": "Alert deleted",
  "status": 200
}
```
===

#### Query runs
==- [!badge GET] `/query_runs/{workspaceId}/{environmentId}/{queryId}/{runId}`
**Description:** Lists all query runs in the workspace and environment.

---
**Request**
* `{workspaceId}` - The ID of the workspace.
* `{environmentId}` - The ID of the environment.
* `{queryId}` - The ID of the query.
* `{runId}` - The ID of the run.

---
**Response**
```typescript Body
{
  "message": "Query runs found",
  "data": Array<QueryRun>,
  "status": 200
}
```
===

---

### data.baselime.io/v1

#### Headers
* `content-type: application/json`
* `Authorization: Bearer <access token>` - [how to obtain access token](http://localhost:5000/docs/api/#oauth-authentication)

==- [!badge POST] `/query_runs`
**Description:** Creates a new query run.

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
  }
  "timeframe": {
    "from": number
    "to": number
  }
  "granularity": number
  "limit": number
  "view": "traces" | "events" | "calculations" | "invocations" | "requests" // (LITERAL)
}
```

---
**Response**
```typescript Body
{
  "message": "Success",
  "data": QueryRun
}
```
===

---






### go.baselime.io/v1

Endpoint uses API key for authentication, and provides the majority of the functionality
offered by `https://api.baselime.io/v1` endpoint. It is the endpoint utilised by tools such as the
Baselime CLI and Terraform provider.

#### Headers
* `content-type: application/json`
* `x-api-key: <api key>` - obtain api key from [Baselime console](https://console.baselime.io)

#### Dashboards

==- [!badge GET] `/dashboards`
**Description:** Lists all dashboards in the workspace and environment.

**Response**
```typescript Body
{
  "data": Array<Dashboard>,
}
```

==- [!badge GET] `/dashboards/{id}`
**Description:** Gets a dashboard by ID.


**Request**
* `{id}` - The ID of the dashboard.

**Response**
```typescript Body
{
  "data": Dashboard,
}
```

==- [!badge variant="success" text="POST"] `/dashboards`
**Description:** Creates a new dashboard.

**Request**
```typescript Body
// Exclude workspaceId, environmentId - they are automatically set from API key
Dashboard
```

**Response**
```typescript Body
{
  "data": Dashboard
}
```


==- [!badge variant="warning" text="PUT"] `/dashboards`
**Description:** Updates a dashboard.

**Request**

```typescript Body
// Exclude workspaceId, environmentId fields from body
Dashboard
```

**Response**
```typescript Body
{
  "data": Dashboard
}
```


==- [!badge variant="danger" text="DELETE"] `/dashboards/{id}`
**Description:** Deletes a dashboard

**Request**
* `{id}` - The ID of the dashboard.

**Response**
```typescript Body
{
  "message": "Dashboard deleted",
}
```
===
#### Queries

==- [!badge GET] `/queries`
**Description:** Lists all queries in the workspace and environment.

**Response**
```typescript Body
{
  "data": Array<Query>,
}
```

==- [!badge GET] `/queries/{id}`
**Description:** Gets a query by ID.

**Request**
* `{id}` - The ID of the query.

**Response**
```typescript Body
{
  "data": Query,
}
```

==- [!badge variant="success" text="POST"] `/queries`
**Description:** Creates a new query.

**Request**
```typescript Body
// Exclude workspaceId, environmentId - they are automatically set from API key
Query
```

**Response**
```typescript Body
{
  "data": Query
}
```

==- [!badge variant="warning" text="PUT"] `/queries`
**Description:** Updates a query.

**Request**

```typescript Body
// Exclude workspaceId, environmentId fields from body
Query
```

**Response**
```typescript Body
{
  "data": Query
}
```

==- [!badge variant="danger" text="DELETE"] `/queries/{id}`
**Description:** Deletes a query

**Request**
* `{id}` - The ID of the query.

**Response**
```typescript Body
{
  "message": "Query deleted"
}
```
===

#### Alerts

==- [!badge GET] `/alerts`
**Description:** Lists all alerts in the workspace and environment.

**Response**
```typescript Body
{
  "data": Array<Alert>,
}
```

==- [!badge GET] `/alerts/{id}`
**Description:** Gets an alert by ID.

**Request**
* `{id}` - The ID of the alert.

**Response**
```typescript Body
{
  "data": Alert,
}
```

==- [!badge variant="success" text="POST"] `/alerts`
**Description:** Creates a new alert.

**Request**
```typescript Body
// Exclude workspaceId, environmentId - they are automatically set from API key
Alert
```

**Response**
```typescript Body
{
  "data": Alert
}
```

==- [!badge variant="warning" text="PUT"] `/alerts`

**Description:** Updates an alert.

**Request**

```typescript Body
// Exclude workspaceId, environmentId fields from body
Alert
```

**Response**
```typescript Body
{
  "data": Alert
}
```

==- [!badge variant="danger" text="DELETE"] `/alerts/{id}`
**Description:** Deletes an alert

**Request**
* `{id}` - The ID of the alert.

**Response**
```typescript Body
{
  "message": "Alert deleted"
}
```

===








### Data specification
==- Query
```typescript
{
  "workspaceId": string
  "environmentId": string
  "id": string
  "parameters": {
    "dataset": Array<string>
    "calculations": Array<{
      "key": string
      "operator": string
      "alias": string
    }>
    "filters": Array<{
      "type": string | number | boolean // (LITERAL)
      "key": string
      "operation": string
      "value": string
    }>
    "groupBys": Array<{
      "type": string
      "value": string
    }>
    "needle": {
      "value": string
      "isRegex": boolean
    }
    "filterCombination": "AND" | "OR" // (LITERAL)
  }
}
```
==- Dashboard
```typescript
{
  "workspaceId": string
  "environmentId": string
  "id": string
  "parameters": {
    "widgets": Array<{
      "type": "table" | "timeseries" | "statistic" | "timeseries_bar" // (LITERAL)
      "queryId": string
    }>
  }
}
```
==- Alert
```typescript
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
    "type": "email" | "slack" | "webhook" // (LITERAL)
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
==- QueryRun

```typescript
{
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
  "events": {}
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
      "granularity": number
    "query": Query
    "statistics": {
      "elapsed": number
      "rows_read": number
      "bytes_read": number
    }
  }
  "events": Array<Event>
  "invocations": Record<string, Invocation>
  "rootSpans": Array<Span>
  "fields": Array<Field>
  "statistics": {
    "elapsed": number
    "rows_read": number
    "bytes_read": number
  }
}
```
===