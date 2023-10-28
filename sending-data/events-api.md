---
label: Events API
order: -8
---

# Events API


Baselime provides an Events API which enables you to send data to Baselime by making a `POST` request to the API endpoint. It enables your to send data directly from your applications or services to Baselime, rather than using a logging or monitoring service as an intermediary.


```bash # :icon-terminal: terminal
curl -X 'POST' 'https://events.baselime.io/v1/logs' \
  -H 'x-api-key: $BASELIME_API_KEY' \
  -H 'Content-Type: application/json' \
  -H 'x-service: my-service' \
  -d '[
        {
          "message": "This is an example log event",
          "error": "TypeError: Cannot read property 'something' of undefined",
          "requestId": "6092d6f0-3bfa-4d62-9d0b-5bc7ae6518a1",
          "namespace": "https://api.domain.com/resource/{id}"
        },
        {
          "message": "This is another example log event",
          "requestId": "6092d6f0-3bfa-4d62-9d0b-5bc7ae6518a1",
          "data": {"userId": "01HBRCB38K2K4V5SDR7YC1D0ZB"},
          "duration": 127
        }
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


Requests must be made to the `/<dataset>` route. `<dataset>` is the name of the dataset you want events to be stored in.


---

## Authentication

Add a public Baselime API key in the `x-api-key` header to all requests made to the Events API. You can get your API key from the [Baselime console](https://console.baselime.io).

---

## Request Headers

Optionally, you can send the `service` and/or `namespace` properties in the request headers

| Header | Value { class="compact"}                    |
|-------------|---------------------------------------|
| `x-service`         | The name of the service the events originates from |
| `x-namespace`         | The name of the namespace the events originates from |

---

## Validation

The Events API validates the every request and returns a `400 Bad Request` status code if any of the events fail validation. If some events pass validation and others fail, Baselime will ingest the events that pass validation. If you encounter a `400 Bad Request` error when submitting events to the Events API, the events that failed validation will be listed in the body of the request under the `invalid` key.

### Requirements
- Baselime accepts up to `6MB` of uncompressed data per request 
- Each event must be a properly formatted JSON
- Each event must be smaller than `256kb` of uncompressed JSON

---

## API Response codes

Baselime returns a `202` response for all valid requests to the Events API, and a range on of non-`200` responses for errors.

We welcome feedback on API responses and error messages. Reach out to us in our [Slack community](https://join.slack.com/t/baselimecommunity/shared_invite/zt-1eu7l0ag1-wxYXQV6Fr_aiB3ZPm3LhDQ) with any request or suggestion you may have.

### Successful responses

| Status Code | Body                                  | Meaning { class="compact" }                           |
|-------------|---------------------------------------|-------------------------------------------------------|
| 202         | ```{"message": "Request Accepted"}``` | All the events were successfully queued for ingestion |

### Failure responses

| Status Code | Body                              | Meaning { class="compact" }                                                                                                                                                                                                                                                                                  |
|-------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 405         | ```{"message": "Method Not Allowed"}``` | The HTTP method is not allowed                                                                                                                                                                                                                                                                               |
| 401         | ```{"message": "Unauthorised"}``` | Missing or invalid API Key                                                                                                                                                                                                                                                                                   |
| 400        | ```{"message": "Bad Request"}``` | - Missing or invalid path parameters (`v1` or `<dataset>`) <br/> - Unable to parse the request body as valid JSON<br/>- Empty request body <br/>- At least one of the events exceed the `256kb` size limit <br /> - At least one of the events could not be parsed as valid JSON |
| 500         | ```{"message": "Internal Error"}``` | An unexpected error occurred                                                                                                                                                                                                                                                                                 |


