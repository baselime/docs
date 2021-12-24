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
  "orders": [{ "key": "@initDuration", "type": "number", "order": "DESCENDING"}]
  "name": "Sample query",
  "description": "A sample description"
}
'
```

### Sample Response

The expected response is:

```json
{
  "query": {
    "id": "abcdefgh"
  }
}
```

