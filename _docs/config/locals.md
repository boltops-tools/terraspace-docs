---
title: Locals
---

A useful example might be to create a global `locals.tf` file.

config/templates/locals.tf

```terraform
locals {
  env = "<%= Terraspace.env %>"
  account_name = "my-account"
}
```

## Materialization

When you run `terraspace` commands, it will use the files in the `config/templates` folder and materialized withdeployed module.  For example, let's say you have an `app/modules/instance` module:

    ├── app
    │   └── modules
    │       └── instance
    └── config
        └── templates
            └── locals.tf

Running:

    terraspace build instance

Builds a `.terrspace-cache/dev/modules/instance/locals.tf` using the `config/templates/locals.tf`. This is useful if you want to have the same locals available in your modules.