---
title: "Terraspace Extra Layering"
nav_text: Extra Layering
category: layering
order: 7
---

## Concept

Terraspace has a concept of extra stacks. The extra concept allows you to reuse the same stack and deploy multiple instances of it. It’s as simple as setting the TS_EXTRA env variable.

The stacks should be designed to allow for multiple instances of it to be deployed. Typically, this means making sure the resources created will have unique names.

## Backend Adjustment

You also want adjust the backend to include it so stacks will have separate state files.

Example:

config/terraform/backend.tf:

{% highlight sh %}
terraform {
  backend "s3" {
    bucket = "<%= expansion('terraform-state-:ACCOUNT-:REGION-:ENV') %>"
    key = "<%= expansion(':PROJECT/:TYPE_DIR/:APP/:ROLE/:MOD_NAME/:ENV/:EXTRA/:REGION/terraform.tfstate') %>"
    region = "<%= expansion(':REGION') %>"
    encrypt = true
    dynamodb_table = "terraform_locks"
  }
}
{% endhighlight %}

Note, if `TS_EXTRA` is not set. The `//` will be "squished". For example, so instead expanding out to:

    us-west-2/dev/dev-2//stacks/demo/terraform.tfstate

The `//` is replaced by a `/` like so:

    us-west-2/dev/dev-2/stacks/demo/terraform.tfstate

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

    terraspace up server            # uses dev.tfvars only
    TS_EXTRA=2 terraspace up server # uses dev.tfvars and dev-2.tfvars (layered)
    TS_EXTRA=3 terraspace up server # uses dev.tfvars and dev-3.tfvars (layered)

The tfvar structure files looks like this:

    app
    └── stacks
        └── server
            ├── main.tf
            ├── outputs.tf
            ├── tfvars
            │   ├── dev.tfvars
            │   ├── dev-2.tfvars
            │   └── dev-3.tfvars
            └── variables.tf

The tfvars file for dev-2 and dev-3 servers could have different TS_EXTRA:

config/stacks/server/tfvars/dev-2.tfvars

    name          = "dev-2"
    instance_type = "t3.small"

config/stacks/server/tfvars/dev-3.tfvars

    name          = "dev-3"
    instance_type = "t3.medium"

## Layering

The TS_EXTRA var adds another layer to be processed. Here's the typical layering structure for review:

    app/stacks/server
    └── tfvars
        ├── base.tfvars
        ├── dev.tfvars
        └── prod.tfvars

Terraspace adds the TS_EXTRA value as an additional layer.

    app/stacks/server
    └── tfvars
        ├── base.tfvars
        ├── dev.tfvars
        ├── dev-2.tfvars
        └── prod.tfvars

So:

    TS_ENV=dev  TS_EXTRA=2 terraspace up server   # uses base.tfvars, dev.tfvars and dev-2.tfvars (layered)
    TS_ENV=prod TS_EXTRA=2 terraspace up server   # uses base.tfvars, prod.tfvars and prod-2.tfvars (layered)

You can also organize the files in corresponding `TS_ENV` based folders. Here's an example of a different organization and how the extra layer also not include the env.

    config/stacks/server/tfvars
    ├── base.tfvars
    ├── dev
    │   ├── base.tfvars
    │   └── 2.tfvars
    └── prod
        ├── base.tfvars
        └── 2.tfvars

## State File

A different statefile key path is used different TS_EXTRA values. Example:

    $ TS_EXTRA=2 terraspace up server -y
    Building .terraspace-cache/us-west-2/dev/stacks/server.2 <= DIFFERENT
    Apply complete! Resources: 0 added, 0 changed, 0 destroyed.
    $

The instance value is appended after a period (`.`). This allows multiple instances of the infrastructure to be deployed without colliding.

{% include tfvars/ts_extra_example.md heading="Extra Tfvars Example" %}

## Code Instead of TfVars

Using the `TS_EXTRA` with different tfvars is only one way to re-use the same infrastructure code. Depending on what you're trying to achieve, you may want reuse the module code by calling it multiple times in the stack code itself. Something like this:

```terraform
module "dev-2" {
  source     = "../../modules/server"
  instance_type = "t3.small"
  tags          = { "Name": "dev-2" }
}

module "dev-3" {
  source     = "../../modules/server"
  instance_type = "t3.medium"
  tags          = { "Name": "dev-3" }
}
```

It really depends on the problem being solved. Either way, Terraspace allows you to use either option.
