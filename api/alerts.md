---
label: Alerts API
order: -4
---

# Alerts API

The alerts API is used to create and manage alerts.

---

## Create Alert

### Request

The payload to create an alert should follow the specs below.

- `query_id`: the ID of the query to use to for the alert. The query must contain exactly one `calculation`. 
- `threshold`: an object describing the threshold to compare with the `calculation` defined in the query. it consists of an `operation` and a `value`.
- `frequency`: the interval in seconds, between consecutive checks of the query `calculation`.
- `destinations`: a list describing the sinks to the receive the alert when triggered. Each sink is an object with a `type` and a `target`.
- `name`: the name of the alert
- `description`: a description of the alert

Sample request:

```bash # :icon-terminal: terminal
curl https://go.baselime.io/v1/alerts -X POST  \
    -H "Authorization: YOUR_API_KEY"  \
    -d '
{
  "query_id": "abcdefgh",
  "threshold": {
    "operations": ">",
    "value": 129
  },
  "frequency": 3600,
  "destinations": [
    {
      "type": "email",
      "target": "test@acme.com"
    },
    {
      "type": "slack",
      "target": "devs"
    }
  ],
  "name": "Sample alert",
  "description": "A sample description"
}
'
```

### Sample Response

```json # :icon-code: output
{
  "alert": {
    "id": "abcdefgh"
  }
}
```

---

## Get Alert

### Request

To retrieve an alert, send a `GET` request to `/v1/alerts/<alert_id>`.

```bash # :icon-terminal: terminal
curl https://go.baselime.io/v1/alerts/<alert_id> -X GET  \
    -H "Authorization: YOUR_API_KEY"
```

### Sample Response

```json # :icon-code: output
{
  "alert": {
    "id": "ZbcdXfFh",
    "query_id": "abcdefgj",
    "threshold": {
      "operations": ">",
      "value": 129
    },
    "frequency": 3600,
    "destinations": [
      {
        "type": "email",
        "target": "test@acme.com"
      },
      {
        "type": "slack",
        "target": "devs"
      }
    ],
    "name": "Sample alert",
    "description": "A sample description",
    "created_at": "2021-12-25T04:24:38Z",
    "updated_at": "2021-12-25T04:24:38Z",
    "author": "d98f27fc-f472-4338-ac3e-55d3089ff6fb"
  }
}
```

---

## Update Alert

### Request

To update an alert, send a `PUT` request to `/v1/alerts/<alert_id>`. The request body should include all fields that you wish to edit on the alert. Only included fields will be updated.

```bash # :icon-terminal: terminal
curl https://go.baselime.io/v1/alerts/<alert_id> -X PUT  \
    -H "Authorization: YOUR_API_KEY"  \
    -d '
{
  "name": "Updated sample alert",
  "frequency": 120
}
'
```

### Sample Response

```json # :icon-code: output
{
  "alert": {
    "id": "ZbcdXfFh",
    "query_id": "abcdefgj",
    "threshold": {
      "operations": ">",
      "value": 129
    },
    "frequency": 120,
    "destinations": [
      {
        "type": "email",
        "target": "test@acme.com"
      },
      {
        "type": "slack",
        "target": "devs"
      }
    ],
    "name": "Updated sample alert",
    "description": "A sample description",
    "created_at": "2021-12-25T04:24:38Z",
    "updated_at": "2021-12-25T04:24:38Z",
    "author": "d98f27fc-f472-4338-ac3e-55d3089ff6fb"
  }
}
```

---

## Delete Alert

### Request

To delete an alert, send a `DELETE` request to `/v1/alerts/<alert_id>`.

```bash # :icon-terminal: terminal
curl https://go.baselime.io/v1/alerts/<alert_id> -X DELETE  \
    -H "Authorization: YOUR_API_KEY"
```

### Sample Response

```json # :icon-code: output
{
  "alert": {
    "id": "ZbcdXfFh"
  }
}
```

---

## List Alerts

### Request

To list alerts, send a `GET` request to `/v1/alerts/`.

```bash # :icon-terminal: terminal
curl https://go.baselime.io/v1/alerts -X GET  \
    -H "Authorization: YOUR_API_KEY"
```

### Sample Response

```json # :icon-code: output
{
  "alerts": [
    {
      "id": "ZbcdXfFh",
      "query_id": "abcdefgj",
      "threshold": {
        "operations": ">",
        "value": 129
      },
      "frequency": 120,
      "destinations": [
        {
          "type": "email",
          "target": "test@acme.com"
        },
        {
          "type": "slack",
          "target": "devs"
        }
      ],
      "name": "Updated sample alert",
      "description": "A sample description",
      "created_at": "2021-12-25T04:24:38Z",
      "updated_at": "2021-12-25T04:24:38Z",
      "author": "d98f27fc-f472-4338-ac3e-55d3089ff6fb"
    }
    ... more alerts ...
  ]
}
```

