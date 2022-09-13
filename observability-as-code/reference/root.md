---
label: index.yml
order: 0
---

A list of all the available root properties in mandatory `index.yml` file in the `.baselime` folder.

```yaml # :icon-code: .baselime/index.yml
# Version number - the version of the Baselime CLI used to generate or deploy this file
version: 0.0.15

# Application name
application: demo

# Appplication description
description: demo app

# Cloud provider
provider: aws

# Cloud infrastructure
infrastructure:
  # List of cloud functions this application comprises
  functions:
    - function-A
    - function-B
```
