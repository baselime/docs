---
label: Query Run API
order: -3
---

# Query Run API

The query run API is used to run queries on Baselime.

Running a query on Baselime is asynchronous. You submit a query run request, and the API responds with a receipt. You can subsequently poll the query run API to retrieve the query run result.

---

## Important Considerations

- Query results cannot exceed 6MB in size. Pagination is available for queries that exceed 6MB in size.
- Query results cannot take more than 10 seconds to run.
- Creating a query run is rate limited at 10 requests per minute per workspace.

---

## Create Query Run

### Request

The payload to create a query run should follow the specs below.

- `query_id`: the id of the query to run
- `from`: the datetime UNIX timestamp (with milliseconds) of the start time of the query run
- `to`: the datetime UNIX timestamp (with milliseconds) of the end time of the query run
- `limit` [optional]: the maximum number of query results
- `offset` [optional]: the number of query results to skip

Sample request:

```bash # :icon-terminal: terminal
curl https://go.baselime.io/v1/query_run -X POST  \
    -H "Authorization: YOUR_API_KEY"  \
    -d '
{
  "query_id": "abcdefgh",
  "from": 1640404332438,
  "to": 1640407932438,
  "limit": 120
}
'
```

### Sample Response

```json # :icon-code: output
{
  "query_run": {
    "id": "TfcBkYdh",
  }
}
```

---

## Get Query Run

### Request

To retrieve a query run, send a `GET` request to `/v1/query_run/<query_run_id>`.

```bash # :icon-terminal: terminal
curl https://go.baselime.io/v1/query_run/<query_run_id> -X GET  \
    -H "Authorization: YOUR_API_KEY"
```

### Sample Response

```json # :icon-code: output
{
  "query_run": {
    "id": "TfcBkYdh",
    "query_id": "abcdefgh",
    "from": 1640404332438,
    "to": 1640407932438,
    "limit": 120
  },
  "data": [
    ... query results ...
  ]
}
```
