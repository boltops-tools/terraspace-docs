---
title: Terraform Cloud Backend
---

To use Terraform Cloud, we configure the backend to "remote".

## Example

config/terraform/backend.tf

```hcl
terraform {
  backend "remote" {
    organization = "ORG" # replace with your terraform cloud account org
    workspaces {
      name = "<%= expansion(':MOD_NAME-:ENV-:REGION-:INSTANCE') %>"
    }
  }
}
```

The built backend.tf looks something like this:

```hcl
terraform {
  backend "remote" {
    organization = "boltops"
    workspaces {
      name = "demo-dev-us-west-2"
    }
  }
}
```

So the namespace name is generated based on the module name, env, and region. This means there will be separate workspaces created.

You can adjust the naming scheme for your workspaces by adjusting the expansion arguments. This allows the variable expansion to substitute the correct `:REGION`. See the [Config Backend Docs]({% link _docs/config/backend.md %}) for the available variables.
