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
    key = "<%= expansion(':REGION/:ENV/:EXTRA/:BUILD_DIR/terraform.tfstate') %>"
    region = "<%= expansion(':REGION') %>"
    encrypt = true
    dynamodb_table = "terraform_locks"
  }
}
{% endhighlight %}

Note, if `TS_EXTRA` is not set. The `//` will be "squished". For example, so instead expanding out to:

    us-west-2/dev/bob//stacks/demo/terraform.tfstate

The `//` is replaced by a `/` like so:

    us-west-2/dev/bob/stacks/demo/terraform.tfstate

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

    terraspace up server                # uses dev.tfvars only
    TS_EXTRA=bob   terraspace up server # uses dev.tfvars and bob.tfvars (layered)
    TS_EXTRA=kevin terraspace up server # uses dev.tfvars and kevin.tfvars (layered)

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

The tfvars file for bob and kevin servers could have different TS_EXTRA:

app/stacks/server/tfvars/bob.tfvars

    name          = "bob"
    instance_type = "t3.small"

app/stacks/server/tfvars/kevin.tfvars

    name          = "kevin"
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
        ├── bob.tfvars
        ├── dev.tfvars
        └── prod.tfvars

So:

    TS_ENV=dev  TS_EXTRA=bob terraspace up server   # uses base.tfvars, dev.tfvars and bob.tfvars (layered)
    TS_ENV=prod TS_EXTRA=bob terraspace up server   # uses base.tfvars, prod.tfvars and bob.tfvars (layered)

You can also organize the files in corresponding `TS_ENV` based folders. Here's an example of a different organization.

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

A different statefile key path is used different TS_EXTRA values. Example:

    $ TS_EXTRA=kevin terraspace up server -y
    Building .terraspace-cache/us-west-2/dev/stacks/server.kevin <= DIFFERENT
    Apply complete! Resources: 0 added, 0 changed, 0 destroyed.
    $

The instance value is appended after a period (`.`). This allows multiple instances of the infrastructure to be deployed without colliding.

{% include tfvars/ts_extra_example.md heading="Extra Tfvars Example" %}

## Code Instead of TfVars

Using the `TS_EXTRA` with different tfvars is only one way to re-use the same infrastructure code. Depending on what you're trying to achieve, you may want reuse the module code by calling it multiple times in the stack code itself. Something like this:

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
