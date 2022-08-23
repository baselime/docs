---
label: Security Overview
order: 1
---

# Security Overview

Baselime provides secure service for your telemetry data.

---

## Data Security

- All ingested data is deleted after the standard 30-day retention period
- All ingested data is encrypted at rest and in transit
- All storage nodes, both for backups and live data are not reachable from the public internet
- All data transfers, both internal and client facing are encrypted 
- The Baselime infrastructure follows modern security best practices for accessing data such as separate private VPCs and restrictive IAM roles   
- You can request data for specific namespaces or specific columns to be deleted

---

## Connector Security

Baselime connects to your AWS account through CloudFormation, and secure the connection with a unique code.