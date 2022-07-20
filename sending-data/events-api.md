---
label: Events API
order: -2
---

# Events API

---

Baselime can ingest your events through our Events API. All requests should be made via HTTPS to `events.baselime.io`.


```bash # :icon-terminal: terminal
curl -X 'POST' 'https://events.baselime.io/v1/<dataset>/<namespace>' \
  -H 'x-api-key: $BASELIME_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '[
        {"key1":"value1","key2":"value2"},
        {"key3":"value3","key4":"value4"}
      ]'
```

---

## Request Format

Each request ingests a batch of events into Baselime. Events are part of the request body. Baselime supports Content-Type `application/json`.

```json # :icon-code:
[
  {"key1":"value1","key2":"value2"},
  {"key3":"value3","key4":"value4"}
]
```

Requests must be made to the `/<dataset>/<namespace>` route:
- `<dataset>` is an existing dataset
- `<namespace>` is created automatically for you when events are received, if it didn't exist beforehand

The request body must be an array of JSON objects. Any element of the array that cannot be parsed as valid JSON will be rejected.

---

## Authentication

The HTTP API requires a valid Baselime API key to be sent in the `x-api-key` request header.

You can get your API Key using the Baselime CLI.

```bash # :icon-terminal: terminal
baselime auth status
```

---

## Validation

The HTTP API validates the provided events and returns a `400 Bad Request` status code if any of the events fail validation with a list of all the events that failed validation. If some events pass validation and others fail, we will ingest the events that pass validation. If you encounter a `400 Bad Request` error when submitting events to the HTTP API, the events that failed validation will be listed in the body of the request under the `invalid` key.

### High-level requirements
- Baselime accepts up to **6MB** of uncompressed data per request 
- Each event must be a properly formatted JSON
- Each event must be smaller than **32kb** of uncompressed JSON

### Data types

Baselime supports basic data types for the value of each key or nested key of any event:
- string
- boolean
- number

---

## API Response codes

The HTTP API will return the following response codes.

### Successfull responses

| Status Code | Body                                  | Meaning { class="compact" }                           |
|-------------|---------------------------------------|-------------------------------------------------------|
| 202         | ```{"message": "Request Accepted"}``` | All the events were successfully queued for ingestion |

### Failure responses

| Status Code | Body                              | Meaning { class="compact" }                           |
|-------------|-----------------------------------|-------------------------------------------------------|
| 405         | ```{"message": "Method Not Allowed"}``` | The HTTP method is now allowed |
| 401         | ```{"message": "Unauthorised"}``` | Missing or invalid API Key |
| 400        | ```{"message": "Bad Request"}``` | - Missing or invalid path parameters (`v1`, `<dataset>` or `<namespace>`) <br/> - Unable to parse the request body as valid JSON<br/>- Empty request body <br/>- At least one of the events exceed the `32kb` size limit <br /> - At least one of the events could not be parsed as valid JSON |



