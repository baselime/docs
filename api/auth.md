---
label: Auth API
order: -1
---

# Auth API

The auth API is used to validate an authentication key and to verify the actions it's allowed to perform on Baselime.

---

### Verify API Key

### Request

```bash # :icon-terminal: terminal
curl https://go.baselime.io/v1/auth \
    -X GET \
    -H "Authorization: YOUR_API_KEY" 
```

### Sample Response

The expected response is:

```json # :icon-code: output
{
  "permissions": {
    "alerts": true,
    "applications": true,
    "dashboards": true,
    "defects": true,
    "environments": true,
    "events": false,
    "queries": true
  }
}
```

