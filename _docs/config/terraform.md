---
title: Terraform Config
---

The `config/terraform/terraform.tf` is a good spot for general Terraform settings.  For example, you may want to lock the version of Terraform and providers. Terraform and providers sometime releases new versions that are not backwards compatiable.

Note: If you are using Terraform Cloud or Enterprise, the terraform.tf is not used. [Terraform Cloud](https://www.terraform.io/docs/cloud/workspaces/variables.html) will override the terraform.tf and it's settings are used instead.

## Example

config/terraform/terraform.tf:

```terraform
terraform {
  required_version = "~> 0.12"
  required_providers {
    aws = "~> 3.0"
  }
}
```

## Building

When you run `terraspace` commands, it will build files in the `config/terraform` folder and with deployed module.  For example, let's say you have an `app/stacks/demo` module:

    ├── app
    │   └── stacks
    │       └── demo
    └── config
        └── terraform
            └── terraform.tf

Running:

    terraspace build demo

Builds a `.terrspace-cache/dev/stacks/demo/terraform.tf` using the `config/terraform/terraform.tf`. This is useful if you want to have the same terraform available in your stacks.