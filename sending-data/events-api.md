---
label: Events API
order: -7
---

# Events API


Baselime provides an HTTP events API which enables developers to send data to Baselime by making a `POST` request to the API endpoint. This enables developers to send data directly from their applications or services to Baselime, rather than using a logging or monitoring service as an intermediary.


```bash # :icon-terminal: terminal
curl -X 'POST' 'https://events.baselime.io/v1/<dataset>/<service>/<namespace>' \
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

The request body must be an array of JSON objects. Any element of the array that cannot be parsed as valid JSON will be rejected.


Requests must be made to the `/<dataset>/<service>/<namespace>` route:

- `<dataset>` is the name of the dataset that the events should be ingested into. You can either use an existing dataset or create a new one using the Baselime CLI.
- `<service>` is the service that the events belong to. If the service doesn't exist beforehand, the events can be queried through the `default` service. Once you create the service (in the web console or using the Baselime CLI), the events will be available from the service too.
- `<namespace>` is the namespace within the dataset that the events should be ingested into. The namespace is created automatically for you when events are received, if it didn't exist beforehand.

---

## Authentication

The HTTP API requires a valid Baselime API key to be sent in the `x-api-key` request header.

You can obtain your API key using the Baselime CLI.

```bash # :icon-terminal: terminal
baselime iam
```

---

## Validation

The HTTP API validates the provided events and returns a `400 Bad Request` status code if any of the events fail validation with a list of all the events that failed validation. If some events pass validation and others fail, we will ingest the events that pass validation. If you encounter a `400 Bad Request` error when submitting events to the HTTP API, the events that failed validation will be listed in the body of the request under the `invalid` key.

### High-level requirements
- Baselime accepts up to `6MB` of uncompressed data per request 
- Each event must be a properly formatted JSON
- Each event must be smaller than `128kb` of uncompressed JSON

---

## API Response codes

Baselime returns a `202` response for all valid requests to the HTTP Events API, and a range on of non-`200` responses for errors.

We welcome feeback on API responses and error messages. Reach out to us in our [Slack community](https://join.slack.com/t/baselimecommunity/shared_invite/zt-1eu7l0ag1-wxYXQV6Fr_aiB3ZPm3LhDQ) with any request or suggestion you may have.

### Successfull responses

| Status Code | Body                                  | Meaning { class="compact" }                           |
|-------------|---------------------------------------|-------------------------------------------------------|
| 202         | ```{"message": "Request Accepted"}``` | All the events were successfully queued for ingestion |

### Failure responses

| Status Code | Body                              | Meaning { class="compact" }                           |
|-------------|-----------------------------------|-------------------------------------------------------|
| 405         | ```{"message": "Method Not Allowed"}``` | The HTTP method is now allowed |
| 401         | ```{"message": "Unauthorised"}``` | Missing or invalid API Key |
| 400        | ```{"message": "Bad Request"}``` | - Missing or invalid path parameters (`v1`, `<dataset>`, `<service>` or `<namespace>`) <br/> - Unable to parse the request body as valid JSON<br/>- Empty request body <br/>- At least one of the events exceed the `128kb` size limit <br /> - At least one of the events could not be parsed as valid JSON |
| 500         | ```{"message": "Internal Error"}``` | An unexpected error occured |



