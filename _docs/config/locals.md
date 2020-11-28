---
title: Locals
---

A useful example might be to create a global `locals.tf` file.

config/terraform/locals.tf

```terraform
locals {
  env = "<%= Terraspace.env %>"
  account_name = "my-account"
}
```

## Building

When you run `terraspace` commands, it will build files in the `config/terraform` folder and with deployed module.  For example, let's say you have an `app/stacks/demo` module:

    ├── app
    │   └── stacks
    │       └── demo
    └── config
        └── terraform
            └── locals.tf

Running:

    terraspace build demo

Builds a `.terraspace-cache/dev/stacks/demo/locals.tf` using the `config/terraform/locals.tf`. This is useful if you want to have the same locals available in your stacks.