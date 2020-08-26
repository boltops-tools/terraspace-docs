---
title: "Instance Option"
---

## Concept

Terraspace allows you to deploy multiple instances of your stack with the `--instance` option. The stack instance concept enables you to use the same code with different tfvars.

The stacks should be designed to allow for multiple instances of it to be deployed. Typically, this means making sure the resources created will have unique names.

## Example

Let's say, we with have a stack that creates a server. Something like this:

    app
    └── stacks
        └── server
            ├── main.tf
            ├── outputs.tf
            └── variables.tf

app/stacks/server/main.tf

```terraform
module "server" {
  source     = "../../modules/server"
  instance_type = var.instance_type
  tags          = { "Name": var.name }
}
```

We can launch multiple "instances" of the stack to create servers using different tfvar files.

    terraspace up server                  # uses dev.tfvars only
    terraspace up server --instance bob   # uses dev.tfvars and bob.tfvars (layered)
    terraspace up server --instance kevin # uses dev.tfvars and kevin.tfvars (layered)

The tfvar structure files looks like this:

    app
    └── stacks
        └── server
            ├── main.tf
            ├── outputs.tf
            ├── tfvars
            │   ├── bob.tfvars
            │   ├── dev.tfvars
            │   └── kevin.tfvars
            └── variables.tf

The tfvars file for bob and kevin servers could have different variables like `instance_type`:

app/stacks/server/tfvars/bob.tfvars

    name          = "bob"
    instance_type = "t3.small"

app/stacks/server/tfvars/kevin.tfvars

    name          = "kevin"
    instance_type = "t3.medium"

## Layering

The `--instance` option adds another layer to be processed. Here's the typical layering structure for review:

    app/stacks/server
    └── tfvars
        ├── base.tfvars
        ├── dev.tfvars
        └── prod.tfvars

Terraspace adds the `--instance` value as an additional layer.

    app/stacks/server
    └── tfvars
        ├── base.tfvars
        ├── bob.tfvars
        ├── dev.tfvars
        └── prod.tfvars

So:

    TS_ENV=dev  terraspace up server --instance bob   # uses base.tfvars, dev.tfvars and bob.tfvars (layered)
    TS_ENV=prod terraspace up server --instance bob   # uses base.tfvars, prod.tfvars and bob.tfvars (layered)

You can also organize the files in corresponding TS_ENV based folders. Here's an example of a different organization.

    app/stacks/server/tfvars
    ├── base.tfvars
    ├── dev
    │   ├── base.tfvars
    │   ├── bob.tfvars
    │   └── kevin.tfvars
    └── prod
        ├── base.tfvars
        ├── bob.tfvars
        └── kevin.tfvars

## State File

A different statefile key path is used different `--instance` values. Example:

    $ terraspace up server --instance kevin -y
    Building .terraspace-cache/us-west-2/dev/stacks/server.kevin <= DIFFERENT
    Apply complete! Resources: 0 added, 0 changed, 0 destroyed.
    $

The instance value is appended after a period (`.`). This allows multiple instances of the infrastructure to be deployed without colliding.

{% include tfvars/instance_option_example.md %}

## Code Instead of TfVars

Using the `--instance` with different tfvars is only one way to re-use the same infrastructure code. Depending on what you're trying to achieve, you may want reuse the module code by calling it multiple times in the stack code itself. Something like this:

```terraform
module "bob" {
  source     = "../../modules/server"
  instance_type = "t3.small"
  tags          = { "Name": "bob" }
}

module "kevin" {
  source     = "../../modules/server"
  instance_type = "t3.medium"
  tags          = { "Name": "kevin" }
}
```

It really depends on the problem being solved. Either way, Terraspace allows you to use either option.
