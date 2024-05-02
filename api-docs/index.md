---
label: API Docs
order: -11
icon: book
---

This page contains the information about Baselime API endpoints, types of
requests that can be made to them and the expected responses.

---

### Endpoint `go.baselime.io/v1`

Endpoint uses API key for authentication.

#### Headers
* `content-type: application/json`
* `x-api-key: <api key>` - obtain api key from [Baselime console](https://console.baselime.io)

#### Dashboards

==- [!badge GET] `/dashboards`
**Description:** Lists all dashboards in the workspace and environment.

**Response**
```typescript Body
{
  "data": Array<{
    "id": string
    "parameters": {
      "widgets": Array<{
        "type": "table" | "timeseries" | "statistic" | "timeseries_bar" // (LITERAL)
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
        "type": "table" | "timeseries" | "statistic" | "timeseries_bar" // (LITERAL)
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
      "type": "table" | "timeseries" | "statistic" | "timeseries_bar" // (LITERAL)
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
        "type": "table" | "timeseries" | "statistic" | "timeseries_bar" // (LITERAL)
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
      "type": "table" | "timeseries" | "statistic" | "timeseries_bar" // (LITERAL)
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
        "type": "table" | "timeseries" | "statistic" | "timeseries_bar" // (LITERAL)
        "queryId": string
      }>
    }
  }
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
  "data": Array<{
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

**Response**
```typescript Body
{
  "data": {
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

**Response**
```typescript Body
{
  "data": {
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