---
title: Locals
---

config/locals.tf

```terraform
locals {
  env = "<%= Terraspace.env %>"
  account_name = "my-account"
}
```

## Materialization

When you run `terraspace` commands, it will use the files in the config folder and materialized withdeployed module.  For example, let's say you have an `app/modules/instance` module:

    .
    │── app
    │   └── modules
    │       └── instance
    └── config
        └── locals.tf

Running:

    terraspace build instance

Builds a `.terrspace-cache/dev/modules/instance/locals.tf` using the `config/locals.tf`. This is useful if you want to have the same locals available in your modules.