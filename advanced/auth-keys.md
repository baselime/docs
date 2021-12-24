---
label: API Keys
order: -1
---

# API Keys

Every programmatic request sent to Baselime must contain an API key. API keys are used to securely communicate with Baselime.

---

## Managing API Keys

API keys can be generated and revoked using the CLI, the API or in the Web UI. Only worspace owners and admins can create or revoke API keys.

API keys work across all namespaces in a workspace. API keys are not linked to users.

---

## Permissions

API keys can have different permissions that govern access to Baselime resources. By default API keys start with no permissions. In other words, API keys can do nothing in Baselime until you grant them the appropriate permissions.

The API key permissions are as follows:

- `events`: can send events to Baselime
- `queries`: can create, run and manage queries
- `dashboards`: can create and manage dashboards
- `alerts`: can create and manage alerts
- `defects`: can create and manage defects
- `conversations`: can create an manage comments and conversations on Baselime
- `integrations`: can create and manage integrations
