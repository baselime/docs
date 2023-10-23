# Data Validation

Baselime has a size limit for events of `256kb`. This size limit helps ensure that the ingestion process is efficient and that the data stored in Baselime is manageable and fast to query. If an event exceeds this `256kb` size limit, it will not be ingested into Baselime.

--- 
## Sending Semi-Structured Logs to Baselime

Semi-structured logs are logs that are not in the strict JSON format, but still contain structured data that can be extracted. These logs contain a mixture of structured and unstructured data, making them difficult to parse and analyze. Baselime has built-in mechanisms to parse and extract relevant data from semi-structured logs.

Baselime will automatically detect log events that contain JSON data, but are prepended or appended by a generic string. 

The generic string will be wrapped in a `message` attribute, and the JSON data will be wrapped in a `data` attribute. This enables you to extract and analyze relevant data from semi-structured logs.

### Examples

Here are examples of automatic semi-structured logs detection.

||| Raw event
```txt
Events: { "key1": "value1", "key2": "value2", "key3": "value3" }
```
||| Parsed data
```json
{
  "message": "Events",
  "data": {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
  }
}
```
||| 
||| Raw event
```txt
User Data {"user":{"id":"7467c534-3759-11ed-a261-0242ac120002","email":"john@jimbies.com","roles":["guest","owner"],"apiKey":"4ec86d09-d056-4a9b-af07-3a8b68bcb4cc","profile":{"dob":"1982-01-12","name":"John Doe","address":"46 Amherst Street, Boling, Virginia","company":"Jimbies","location":{"lat":-50.341738,"long":-26.114914}},"username":"jjred","createdAt":"2011-03-11T11:45:23.942Z","updatedAt":"2011-03-12T11:45:23.942Z"}}'
```
||| Parsed data
```json
{
  "message": "User Data",
  "data": {
    "user": {
      "id": "7467c534-3759-11ed-a261-0242ac120002",
      "email": "john@jimbies.com",
      "roles": [
        "guest",
        "owner"
      ],
      "apiKey": "4ec86d09-d056-4a9b-af07-3a8b68bcb4cc",
      "profile": {
        "dob": "1982-01-12",
        "name": "John Doe",
        "address": "46 Amherst Street, Boling, Virginia",
        "company": "Jimbies",
        "location": {
          "lat": -50.341738,
          "long": -26.114914
        }
      },
      "username": "jjred",
      "createdAt": "2011-03-11T11:45:23.942Z",
      "updatedAt": "2011-03-12T11:45:23.942Z"
    }
  }
}
```
||| 

||| Raw event
```txt
localdomain {"metadata":{"name":"Optimus","local_time_zone":"GMT+1","created_at":1631689974}} sudo[14170]
```
||| Parsed data
```json
{
  "message": "localdomain - sudo[14170]",
  "data": {
    "metadata": {
      "name": "Optimus",
      "local_time_zone": "GMT+1",
      "created_at": 1631689974
    }
  }
}
```
||| 

#### Syslog
||| Raw event
```txt
render:token <6>1 2023-10-23T13:34:18.011041Z test-service-7af1 web-x4dv4 1 web-x4dv4 - {"level":"info","ts":1698068058.010938,"caller":"app/main.go:15","msg":"Hello world!","time":"2023-10-23T13:34:18Z"}
```
|||
```json
{
  "facility": "6",
  "level": "info",
  "hostname": "test-service-7af1",
  "appName": "web-8n8mp",
  "processId": "1",
  "messageId": "web-8n8mp",
  "structuredData": "-",
  "message": "Hello world!",
  "LogLevel": "INFO",
  "@message": "Hello world!",
  "timestamp": 1698070616172,
  "$baselime": {
    "namespace": "test-service-7af1",
    "service": "test-service-7af1",
    "dataset": "render",
    "baselimeId": "01HDEEAWVWMHJEHYGDWM9KQBRW",
    "type": "container"
  }
}
```
|||

#### Vector
|||
```json
[
  {
    timestamp: "2023-10-21T07:03:45.123634719Z",
    stream: "stderr",
    source_type: "docker_logs",
    message: "{\"level\":\"info\",\"ts\":1697876893.1233506,\"msg\":\"Hello world!\"}",
    container_name: "xenodochial_cohen",
    image: "baselime/baselime",
    container_created_at: "2023-10-21T07:03:44.455497291Z",
    container_id: "8f250bcb689f09f55015be1b31cfe73acff96794b956b2cd774caa1d0c302b73",
    host: "35f0b99e69bc"
  }
]
```
|||
```json
{
  "container_created_at": "2023-10-21T07:03:44.455497291Z",
  "container_id": "8f250bcb689f09f55015be1b31cfe73acff96794b956b2cd774caa1d0c302b73",
  "container_name": "xenodochial_cohen",
  "host": "a44cb26a91de",
  "image": "baselime/baselime",
  "message": "Hello world!",
  "source_type": "docker_logs",
  "stream": "stderr",
  "level": "info",
  "namespace": "default",
  "service": "default",
  "LogLevel": "INFO",
  "@message": "Hello world!",
  "timestamp": 1697876893581,
  "$baselime": {
    "namespace": "default",
    "service": "default",
    "dataset": "vector-logs",
    "baselimeId": "01HD8NJQ4136ZACPZMAX4Q36ZAV0KW",
    "type": "container"
  }
}
```
|||

### Docker through Fluentd
||| Raw event
```json
[
  {
    "container_id": "e83a1c74f382b313d9754ec678af9808f20478a5d8e7b839857b9f431832c3fa",
    "container_name": "/compose-logger-1",
    "source": "stderr",
    "log": "{\"level\":\"info\",\"ts\":1697812276.9344978,\"msg\":\"Hello world\",\"time\":\"2023-10-20T14:31:16Z\"}",
    "io.baselime.service": "from_label",
    "io.baselime.namespace": "default"
  }
]
```
||| Parsed data
```json
{
  "message": "Hello world",
  "level": "info",
  "namespace": "default",
  "service": "default",
  "LogLevel": "INFO",
  "@message": "Hello world",
  "timestamp": 1697812276000,
  "$baselime": {
    "namespace": "default",
    "service": "from_label",
    "dataset": "docker-logs",
    "baselimeId": "01HD71079VX9M76ZWHRS8YMAA6",
    "type": "container"
  }
}
```
|||

#### Kubernetes through Fluentd
||| Raw event
```json
[
    {"log": "2023-10-21T08:31:09.761551105Z stderr F finished scheduled compaction"}
]
```
||| Parsed data
```json
[
  {
    "message": "finished scheduled compaction",
    "level": "info",
    "namespace": "default",
    "service": "default",
    "LogLevel": "INFO",
    "@message": "finished scheduled compaction",
    "timestamp": 1697877069761,
    "$baselime": {
      "namespace": "default",
      "service": "default",
      "dataset": "kubernetes-logs",
      "baselimeId": "01HD8NR5JK1SG4NT31JDDS1F4S",
      "type": "container"
    }
  }
]
```

||| Raw Message
```json
[
  {"log": "2023-10-20T17:51:04.931672152Z stderr F {\"level\":\"info\",\"ts\":1697824264.93158,\"msg\":\"Hello world!\"}"}
]
```
||| Parsed data
```json
[
  {
    "message": "Hello world!",
    "level": "info",
    "namespace": "default",
    "service": "default",
    "LogLevel": "INFO",
    "@message": "Hello world!",
    "timestamp": 1697876973995,
    "$baselime": {
      "namespace": "default",
      "service": "default",
      "dataset": "kubernetes-logs",
      "baselimeId": "01HD8NNB4A42YF1XZC6DEKH6A2",
      "type": "container"
    }
  }
]
```
|||