---
title: Tfvars
category: config
order: 4
---

A useful example might be to create a global `terraform.tfvars` file. Remember, Terraform automatically loads all files in the directory with the exact name of `terraform.tfvars`.

config/terraform/terraform.tfvars

```terraform
account_name = "my account"
region = "us-west-2"
```

## Building

When you run `terraspace` commands, it will use the files in the config folder and builds them with the deployed module.  For example, let's say you have an `app/modules/instance` module:

    ├── app
    │   └── modules
    │       └── instance
    └── config
        └── terraform
            └── terraform.tfvars

Running:

    terraspace build instance

Builds a `.terraspace-cache/dev/modules/instance/terraform.tfvars` using the `config/terraform/terraform.tfvars`. This is useful if you want to have to set the same tfvars in all your modules.
