---
label: Materialized Keys API
order: -6
---

# Materialized Keys API

The Materialized Keys API is used to create and manage materialized keys.

---

## Create Materialized Key

### Request

The payload to create a materialized key should follow the specs below.

- `alias`: a string representing the `materialized_key`. An alias can only consist of alpha-numerical characters.
- `expression`: the calculation for the `materialized_key`. Please make sure to follow the [specs](../advanced/materialized-keys.md).
- `description`: a description of the materialized key

Sample request:

```bash # :icon-terminal: terminal
curl https://go.baselime.io/v1/materialized_key -X POST  \
    -H "Authorization: YOUR_API_KEY"  \
    -d '
{
  "alias": "totalDuration",
  "expression": "PLUS($@duration, $@initDuration)",
  "description": "A sample description"
}
'
```

### Sample Response

```json # :icon-code: output
{
  "materialized_key": {
    "id": "1f5199de-52e4-4e30-89ee-762a15c0c5b6"
  }
}
```

---

## Get Materialized Key

### Request

To retrieve a materialized key, send a `GET` request to `/v1/materialized_key/<materialized_key_id>`.

```bash # :icon-terminal: terminal
curl https://go.baselime.io/v1/materialized_key/<materialized_key_id> -X GET  \
    -H "Authorization: YOUR_API_KEY"
```

### Sample Response

```json # :icon-code: output
{
  "materialized_key": {
    "id": "1f5199de-52e4-4e30-89ee-762a15c0c5b6",
    "alias": "totalDuration",
    "expression": "PLUS($@duration, $@initDuration)",
    "description": "A sample description",
    "created_at": "2021-12-25T04:24:38Z",
    "updated_at": "2021-12-25T04:24:38Z",
    "author": "d98f27fc-f472-4338-ac3e-55d3089ff6fb"
  }
}
```

---

## Get Materialized Key by Alias

### Request

To retrieve a materialized key, send a `GET` request to `/v1/materialized_key?alias=<materialized_alias>`.

```bash # :icon-terminal: terminal
curl https://go.baselime.io/v1/materialized_key?alias=<materialized_alias> -X GET  \
    -H "Authorization: YOUR_API_KEY"
```

### Sample Response

```json # :icon-code: output
{
  "materialized_key": {
    "id": "1f5199de-52e4-4e30-89ee-762a15c0c5b6",
    "alias": "totalDuration",
    "expression": "PLUS($@duration, $@initDuration)",
    "description": "A sample description",
    "created_at": "2021-12-25T04:24:38Z",
    "updated_at": "2021-12-25T04:24:38Z",
    "author": "d98f27fc-f472-4338-ac3e-55d3089ff6fb"
  }
}
```

---

## Update Materialized Key

### Request

To update an materialized key, send a `PUT` request to `/v1/materialized_key/<materialized_key_id>`. The request body should include all fields that you wish to edit on the materialized key. Only included fields will be updated.

```bash # :icon-terminal: terminal
curl https://go.baselime.io/v1/materialized_key/<materialized_key_id> -X PUT  \
    -H "Authorization: YOUR_API_KEY"  \
    -d '
{
  "alias": "twiceTotalDuration",
  "expression": "MULTIPLY(PLUS($@duration, $@initDuration), 2)"
}
'
```

### Sample Response

```json # :icon-code: output
{
  "materialized_key": {
    "id": "1f5199de-52e4-4e30-89ee-762a15c0c5b6",
    "alias": "twiceTotalDuration",
    "expression": "MULTIPLY(PLUS($@duration, $@initDuration), 2)"
    "description": "A sample description",
    "created_at": "2021-12-25T04:24:38Z",
    "updated_at": "2021-12-25T04:24:38Z",
    "author": "d98f27fc-f472-4338-ac3e-55d3089ff6fb"
  }
}
```

---

## Delete Materialized Keys

### Request

To delete an materialized key, send a `DELETE` request to `/v1/materialized_key_id/<materialized_key_id>`.

!!!warning
It is not possible to delete materialized keys that are being used by other queries
!!!

```bash # :icon-terminal: terminal
curl https://go.baselime.io/v1/materialized_key/<materialized_key_id> -X DELETE  \
    -H "Authorization: YOUR_API_KEY"
```

### Sample Response

```json # :icon-code: output
{
  "materialized_key": {
    "id": "1f5199de-52e4-4e30-89ee-762a15c0c5b6"
  }
}
```

---

## List Materialized Key

### Request

To list materialized key, send a `GET` request to `/v1/materialized_key/`.

```bash # :icon-terminal: terminal
curl https://go.baselime.io/v1/materialized_key -X GET  \
    -H "Authorization: YOUR_API_KEY"
```

### Sample Response

```json # :icon-code: output
{
  "materialized_key": [
    {
      "id": "1f5199de-52e4-4e30-89ee-762a15c0c5b6",
      "alias": "twiceTotalDuration",
      "expression": "MULTIPLY(PLUS($@duration, $@initDuration), 2)"
      "description": "A sample description",
      "created_at": "2021-12-25T04:24:38Z",
      "updated_at": "2021-12-25T04:24:38Z",
      "author": "d98f27fc-f472-4338-ac3e-55d3089ff6fb"
    }
    ... more materialized key ...
  ]
}
```

