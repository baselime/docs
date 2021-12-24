---
label: Auth API
order: -1
---

# Auth API

The auth API is used to validate an authentication key and to verify the actions it's allowed to perform on Baselime.

---

### Verify API Key

### Request

```bash
curl https://go.baselime.io/v1/auth \
    -X GET \
    -H "Authorization: YOUR_API_KEY" 
```

### Sample Response

The expected response is:

```json
{
  "permissions": {
    "events": true,
    "queries": true,
    "dashboards": true,
    "alerts": true,
    "defects": true,
    "conversations": false,
    "integrations": true
  }
}
```

