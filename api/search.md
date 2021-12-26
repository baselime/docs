---
label: Search API
order: -7
---

# Search API

The search API is used to search through your events on Baselime.

Searching for a terms in your events on Baselime is asynchronous. You submit a search request, and the API responds with a receipt. You can subsequently poll the search API to retrieve the search result.

---

## Important Considerations

- Search results cannot exceed 6MB in size. Pagination is available for search requests that exceed 6MB in size.
- Search results cannot take more than 10 seconds to run.
- Creating a search request is rate limited at 10 requests per minute per workspace.

---

## Create Search

### Request

The payload to create a search should follow the specs below.

- `term`: the term to search through the events
- `namespaces`: a list of namespaces to search across. Each namespace must contain a `type` and a `value`.
- `from`: the datetime UNIX timestamp (with milliseconds) of the start time of the search
- `to`: the datetime UNIX timestamp (with milliseconds) of the end time of the search
- `limit` [optional]: the maximum number of search results
- `offset` [optional]: the number of search results to skip

Sample request:

```bash
curl https://go.baselime.io/v1/search -X POST  \
    -H "Authorization: YOUR_API_KEY"  \
    -d '
{
  "term": "error",
  "namespaces": [
    {
      "type": "lambda",
      "value": "prod-user-login"
    }
  ],
  "from": 1640404332438,
  "to": 1640407932438,
  "limit": 120
}
'
```

### Sample Response

```json
{
  "search": {
    "id": "TfcBkYdh",
  }
}
```

---

## Get Search

### Request

To retrieve a query run, send a `GET` request to `/v1/search/<search_id>`.

```bash
curl https://go.baselime.io/v1/search/<search_id> -X GET  \
    -H "Authorization: YOUR_API_KEY"
```

### Sample Response

```json
{
  "search": {
    "id": "TfcBkYdh",
    "term": "error",
    "namespaces": [
      {
        "type": "lambda",
        "value": "prod-user-login"
      }
    ],
    "from": 1640404332438,
    "to": 1640407932438,
    "limit": 120
  },
  "data": [
    ... search results ...
  ]
}
```
