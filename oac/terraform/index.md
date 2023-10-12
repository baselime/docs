---
label: Terraform
order: 0
---

# Baselime Terraform Provider

Observability is a first class citizen of your infrastructure with Baselime. You can use [Terraform](https://www.terraform.io/) to define and automate your observability configurations in Baselime.

---

## Configuration

Use the [Baselime Terraform Provider](https://registry.terraform.io/providers/baselime/baselime/latest) to create and manage your observability resources on Baselime with Terraform.

```terraform # :icon-code: baselime.ts
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

Get your API Key from the [Baselime console](https://console.baselime.io). Make sure to select an `Admin` API Key. Admin API keys have the permissions to create resources in your Baselime account.

### Resource types
- [Query](https://registry.terraform.io/providers/baselime/baselime/latest/docs/resources/query)
- [Dashboard](https://registry.terraform.io/providers/baselime/baselime/latest/docs/resources/dashboard)
- [Alert](https://registry.terraform.io/providers/baselime/baselime/latest/docs/resources/alert)

---

## Examples

View examples in the [Baselime Terraform Provider GitHub repository](https://github.com/baselime/terraform-provider-baselime/tree/main/examples/resources).
