---
label: Queries API
order: -2
---

# Queries API

The queries API is used to create and manage queries.

---

## Create Query

### Request

The payload to create a query should follow the specs below. All fields are optional:

- `namespaces`: a list of namespaces to run the query against
- `keys`: a list of objects representing the fields to retrieve, Each `key` constists of a `key` (the name of the key to retrieve) and its `type`.
- `calculations`: a list of calculations to perform on the events. Calculations consist of a `key`, a `type` and `operator`. If the `operator` is `COUNT`, a key is not necessary. `calculations` and `keys` cannot be used simultaneously. 
- `filters`: a list of objects representing the filters to apply to the query. Each filter consists of a `key`, an `operation` and a `value`. The value could be:
  -  a literal value
  -  another `key`/`type` pair; the key can be a [materialized key](../advanced/materialized-keys.md)
-  `filter_combination`: `AND` or `OR`. If the list of filters contains multiple filters, `filter_combination` defines how they are applied. 
   -  `AND`: find events matching all filters
   -  `OR`: find events matching any filter
-  `group_bys`: a list of `key`/`type` pairs to group your result by.
-  `orders`: a list of objects decribing how to order the query results. Each item should include a `key`, a `type` and a `order` which takes either `ASCENDING` or `DESCENDING`
-  `name`: the name of the query
-  `description`: A description of the query

Sample request:

```bash
curl https://go.baselime.io/v1/queries -X POST  \
    -H "Authorization: YOUR_API_KEY"  \
    -d '
{
  "namespaces": ["prod-user-login"],
  "calculations": [{ "operator": "MAX" , "key": "@billedDuration", "type": "number"}],
  "filters": [
    {"key": "@duration", "operation": ">", "value": "200"},
    {"key": "@sampled", "operation": "=", "value": true}
  ],
  "filter_combination": "OR",
  "group_bys": [{ "key": "@initDuration", "type": "number"}],
  "orders": [{ "key": "@initDuration", "type": "number", "order": "DESCENDING"}],
  "name": "Sample query",
  "description": "A sample description"
}
'
```

### Sample Response

```json
{
  "query": {
    "id": "abcdefgh"
  }
}
```

---

## Get Query

### Request

To retrieve a query, send a `GET` request to `/v1/queries/<query_id>`.

```bash
curl https://go.baselime.io/v1/queries/<query_id> -X GET  \
    -H "Authorization: YOUR_API_KEY"
```

### Sample Response

```json
{
  "query": {
    "id": "abcdefgh",
    "namespaces": ["prod-user-login"],
    "calculations": [{ "operator": "MAX" , "key": "@billedDuration", "type": "number"}],
    "filters": [
      {"key": "@duration", "operation": ">", "value": "200"},
      {"key": "@sampled", "operation": "=", "value": true}
    ],
    "filter_combination": "OR",
    "group_bys": [{ "key": "@initDuration", "type": "number"}],
    "orders": [{ "key": "@initDuration", "type": "number", "order": "DESCENDING"}],
    "name": "Sample query",
    "description": "A sample description",
    "created_at": "2021-12-25T04:24:38Z",
    "updated_at": "2021-12-25T04:24:38Z",
    "author": "d98f27fc-f472-4338-ac3e-55d3089ff6fb"
  }
}
```

---

## Update Query

### Request

To update a query, send a `PUT` request to `/v1/queries/<query_id>`. The request body should include all fields that you wish to edit on the query. Only included fields will be updated.

```bash
curl https://go.baselime.io/v1/queries/<query_id> -X PUT  \
    -H "Authorization: YOUR_API_KEY"  \
    -d '
{
  "namespaces": ["prod-user-login", "prod-user-signup"],
  "filter_combination": "AND",
  "name": "Updated sample query",
}
'
```

### Sample Response

```json
{
  "query": {
    "id": "abcdefgh",
    "namespaces": ["prod-user-login", "prod-user-signup"],
    "calculations": [{ "operator": "MAX" , "key": "@billedDuration", "type": "number"}],
    "filters": [
      {"key": "@duration", "operation": ">", "value": "200"},
      {"key": "@sampled", "operation": "=", "value": true}
    ],
    "filter_combination": "AND",
    "group_bys": [{ "key": "@initDuration", "type": "number"}],
    "orders": [{ "key": "@initDuration", "type": "number", "order": "DESCENDING"}],
    "name": "Updated sample query",
    "description": "A sample description",
    "created_at": "2021-12-25T04:24:38Z",
    "updated_at": "2021-12-25T04:24:38Z",
    "author": "d98f27fc-f472-4338-ac3e-55d3089ff6fb"
  }
}
```

---

## Delete Query

### Request

To delete a query, send a `DELETE` request to `/v1/queries/<query_id>`. If other resources such as alerts use the current query, the delete operation will fail and respond with status code `403`.

```bash
curl https://go.baselime.io/v1/queries/<query_id> -X DELETE  \
    -H "Authorization: YOUR_API_KEY"
```

### Sample Response

```json
{
  "query": {
    "id": "abcdefgh"
  }
}
```

---

## List Queries

### Request

To list queries, send a `GET` request to `/v1/queries/`.

```bash
curl https://go.baselime.io/v1/queries -X GET  \
    -H "Authorization: YOUR_API_KEY"
```

### Sample Response

```json
{
  "queries": [
    {
      "id": "abcdefgh",
      "namespaces": ["prod-user-login", "prod-user-signup"],
      "calculations": [{ "operator": "MAX" , "key": "@billedDuration", "type": "number"}],
      "filters": [
        {"key": "@duration", "operation": ">", "value": "200"},
        {"key": "@sampled", "operation": "=", "value": true}
      ],
      "filter_combination": "AND",
      "group_bys": [{ "key": "@initDuration", "type": "number"}],
      "orders": [{ "key": "@initDuration", "type": "number", "order": "DESCENDING"}],
      "name": "Updated sample query",
      "description": "A sample description",
      "created_at": "2021-12-25T04:24:38Z",
      "updated_at": "2021-12-25T04:24:38Z",
      "author": "d98f27fc-f472-4338-ac3e-55d3089ff6fb"
    },
    ... more queries ...
  ]
}
```
