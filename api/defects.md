---
label: Defects API
order: -5
---

# Defects API

The defects API is used to create and manage defects.

---

## Create Defect

### Request

The payload to create a defect should follow the specs below.

- `target`: an object describing the entity to flag as a defect. Each `target` should contain:
  - `type`: the type of the target, `EVENT` for a single event and `TRACE` for a entire trace.
  - `id`: the id of the target.
- `priority`: the priority of the defect, `LOW`, `MEDIUM`, `HIGH`, `URGENT`.
- `severity`: the severity of the defect, `MINOR`, `MAJOR`, `CRITICAL`, `FATAL`.
- `name`: the name of the alert
- `description`: a description of the alert

!!!
Creating a defect via the API will trigger downstream events, such as notifications to relevant team-members and creating tickets in linked project management software.
!!!

Sample request:

```bash
curl https://go.baselime.io/v1/defects -X POST  \
    -H "Authorization: YOUR_API_KEY"  \
    -d '
{
  "target": {
    "type": "EVENT",
    "id": "b47feb84-ce5b-4f2c-b3ec-4875c7e74c8b"
  },
  "priority": "LOW",
  "severity": "MAJOR",
  "name": "Sample defect",
  "description": "A sample description"
}
'
```

### Sample Response

```json
{
  "defect": {
    "id": "1f5199de-52e4-4e30-89ee-762a15c0c5b6"
  }
}
```

---

## Get Defect

### Request

To retrieve a defect, send a `GET` request to `/v1/defects/<defect_id>`.

```bash
curl https://go.baselime.io/v1/defects/<defect_id> -X GET  \
    -H "Authorization: YOUR_API_KEY"
```

### Sample Response

```json
{
  "defect": {
    "id": "1f5199de-52e4-4e30-89ee-762a15c0c5b6",
    "target": {
      "type": "EVENT",
      "id": "b47feb84-ce5b-4f2c-b3ec-4875c7e74c8b"
    },
    "priority": "LOW",
    "severity": "MAJOR",
    "name": "Sample defect",
    "description": "A sample description",
    "resolved": false,
    "created_at": "2021-12-25T04:24:38Z",
    "updated_at": "2021-12-25T04:24:38Z",
    "author": "d98f27fc-f472-4338-ac3e-55d3089ff6fb"
  }
}
```

---

## Update Defect

### Request

To update an defect, send a `PUT` request to `/v1/defects/<defect_id>`. The request body should include all fields that you wish to edit on the defect. Only included fields will be updated.

!!!
It is not possible to update the target of a defect.
!!!

```bash
curl https://go.baselime.io/v1/defects/<defect_id> -X PUT  \
    -H "Authorization: YOUR_API_KEY"  \
    -d '
{
  "resolved": true,
}
'
```

### Sample Response

```json
{
  "defect": {
    "id": "1f5199de-52e4-4e30-89ee-762a15c0c5b6",
    "target": {
      "type": "EVENT",
      "id": "b47feb84-ce5b-4f2c-b3ec-4875c7e74c8b"
    },
    "priority": "LOW",
    "severity": "MAJOR",
    "name": "Sample defect",
    "description": "A sample description",
    "resolved": true,
    "created_at": "2021-12-25T04:24:38Z",
    "updated_at": "2021-12-25T04:24:38Z",
    "author": "d98f27fc-f472-4338-ac3e-55d3089ff6fb"
  }
}
```

---

## Delete Defect

### Request

To delete an defect, send a `DELETE` request to `/v1/defects/<defect_id>`.

```bash
curl https://go.baselime.io/v1/alerts/<alert_id> -X DELETE  \
    -H "Authorization: YOUR_API_KEY"
```

### Sample Response

```json
{
  "defect": {
    "id": "1f5199de-52e4-4e30-89ee-762a15c0c5b6"
  }
}
```

---

## List Defects

### Request

To list defects, send a `GET` request to `/v1/defects/`.

```bash
curl https://go.baselime.io/v1/defects -X GET  \
    -H "Authorization: YOUR_API_KEY"
```

!!!
Filter only resolved or active defects with a query parameter to the request: `/v1/defects?resolved=true`
!!!

### Sample Response

```json
{
  "defects": [
    {
      "id": "1f5199de-52e4-4e30-89ee-762a15c0c5b6",
      "target": {
        "type": "EVENT",
        "id": "b47feb84-ce5b-4f2c-b3ec-4875c7e74c8b"
      },
      "priority": "LOW",
      "severity": "MAJOR",
      "name": "Sample defect",
      "description": "A sample description",
      "resolved": true,
      "created_at": "2021-12-25T04:24:38Z",
      "updated_at": "2021-12-25T04:24:38Z",
      "author": "d98f27fc-f472-4338-ac3e-55d3089ff6fb"
    }
    ... more defects ...
  ]
}
```

