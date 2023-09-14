# Data Validation

Baselime has a size limit for events of `256kb`. This size limit helps ensure that the ingestion process is efficient and that the data stored in Baselime is manageable and fast to query. If an event exceeds this `256kb` size limit, it will not be ingested into Baselime.

--- 
## Sending Semi-Structured Logs to Baselime

Semi-structured logs are logs that are not in the strict JSON format, but still contain structured data that can be extracted.These logs contain a mixture of structured and unstructured data, making them difficult to parse and analyze. Fortunately, Baselime has built-in mechanisms to parse and extract relevant data from semi-structured logs.

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


