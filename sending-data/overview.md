---
label: Sending Data Overview
order: 1
---

# Sending Data to Baselime

---

Baselime ingests your telemetry data and allows you to observe your production environments.

You can send your telemetry data to Baselime with either of:
[!ref Automatic CloudWatch logs subscription filters](./cloudwatch.md)
[!ref Events API](./events-api.md)
[!ref Automatic CloudTrail events](./cloudtrail)
[!ref Auto-instrumentation with OpenTelemetry (Coming Soon)](./otel.md)

---

## Validation

Events sent to Baselime should not exceed `32kb` in raw, uncompressed size per event. Events exceeding this limit will not be ingested and will be dropped.

--- 
## Semi-structured logs

It is recommended to send events to Baselime in structure JSON format. However, we understand that not every team has made their way through OpenTelemetry or structure logging yet. As such, we support semi-structured logs, such that you and your team can run complex queries on data that hasn't been formatted as per current industry standards.

Baselime automatically detects log events that contain JSON data, but is prepended or appended by a generic string.

The generic string will be wrapped in a `message` attribute, and the JSON data will be wrapped in a `data` attribute.

---

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


