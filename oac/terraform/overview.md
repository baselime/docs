---
label: Terraform Provider
order: 0
---

# Using Terraform with Baselime.io
For your convienience, we have created a Terraform provider for Baselime.io. This allows you to manage your Baselime.io resources using Terraform.

#### [Terraform Registry](https://registry.terraform.io/providers/baselime/baselime/latest)
#### [Source on Github](https://github.com/baselime/terraform-provider-baselime/tree/main)

## Getting API Key
To use the provider, you will need to generate an API key. To find your key:
1. Navigate to https://console.baselime.cc
2. Select the workspace you need
3. Select the environment you want to get the key for
4. Click on the "API Keys" button on the left-hand side menu (key icon)

## Example Usage

### Initialising Baselime.io Terraform Provider
```terraform
terraform {
  required_providers {
    baselime = {
      version = "~> 0.1.0"
      source  = "baselime/baselime"
    }
  }
}

provider "baselime" {
  api_key = "your_api_key"
}
```

### Creating a Query
```terraform

resource "baselime_query" "terraformed" {
  name        = "terraformed-query"
  description = "This query was created by Terraform"
  service     = "default"
  datasets    = ["lambda-logs"]
  filters     = [
    {
      key       = "message"
      operation = "INCLUDES"
      value     = "error"
      type      = "string"
    }
  ]
  filter_combination = "AND"
  calculations       = [
    {
      key      = ""
      operator = "COUNT"
      alias    = "count"
    }
  ]
  group_by = [
    {
      type  = "string"
      value = "message"
    }
  ]
  order_by = {
    value = "count"
    order = "DESC"
  }
  limit  = 10
  needle = {
    value      = ".*"
    is_regex   = true
    match_case = false
  }
}
```

### Creating an Alert
```terraform

resource "baselime_alert" "terraformed" {
  name        = "terraformed-alert"
  description = "This alert was created by Terraform"
  service     = "default"
  enabled     = true
  channels = [
    {
      type    = "email"
      targets = ["foo@baselime.io"]
    }
  ]
  query     = baselime_query.terraformed.id
  threshold = {
    operator = "GREATER_THAN"
    value     = 0
  }
  frequency = "10m"
  window    = "5m"
}
```


### Creating a Dashboard
```terraform
resource "baselime_dashboard" "terraformed" {
  name        = "terraformed-dashboard"
  description = "This alert was created by Terraform"
  service     = "default"
  widgets     = [
    {
      query_id     = baselime_query.terraformed.id
      type        = "timeseries"
      name        = "Line Chart"
      description = "This is a line chart"
    }
  ]
}
```
