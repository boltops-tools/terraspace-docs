---
title: Terraform Statefile Approaches and Thoughts
---

{% include state/preamble.md %}

## General Approaches

In practice, folks have taken these different approaches:

1. One statefile for everything
2. A statefile for each environment
3. A statefile per groups of modules
4. A statefile per module

Terraspace supports all approaches. Though terraspace's default approach is pretty much #3, it is completely configurable.

## Graduating Along The Way

Teams seem to go through a similar process where they graduate from one statefile approach to the next. This presentation [Evolving Your Infrastructure with Terraform](https://www.youtube.com/watch?v=wgzgVm7Sqlk) covers the evolution process well and is similar to what we cover below.

## One statefile for everything

In the beginning, teams who are starting off with Terraform state might use approach #1, one statefile to rule them all. On its face, the approach is simple.

However, it is fraught with a huge caveat. It is possible that `terraform apply` intended only for development resources, unintentionally affect production resources, including accidental deletion.  There is no clear isolation between development and production resources.  You essentially have all your eggs in one basket. The single statefile for everything is strongly not recommended for this reason. Here's an example of the setup with terraspace anyway:

config/terraform/backend.rb

```ruby
backend("s3",
  bucket:         "my-bucket",
  key:            "/all/my/eggs/terraform.tfstate",
  region:         ":REGION",
)
```

## A statefile for each environment

By isolating the statefile on a per-environment basis, we know that running `terraform apply` on development, staging, uat, production, etc will not affect each other. This is a nice leap forward.

The next caveat with this approach is that there's no distinction within an environment of the resources being deployed. When `terraform apply` is ran, any resource can be affected. There's no regard for:

1. Risk-level: Is it high risk? Making a change can affect anything. For example, changes to the VPC are high-risk. Additionally, VPCs usually require less frequent updates.
2. Type of Resource: Is it a database or is it stateless? Accidentally, deleting a stateful resource like a database has more impact than a stateless web server.
3. Logical Grouping: Everything is deployed at once. It makes sense to group resources powering a specific app and service together.

Essentially, it's a mud pie. It's like having one Admin permission policy for everyone. It's probably better to limit and control the blast radius of what can be affected. Here's an example of this setup with terraspace:

config/terraform/backend.rb

```ruby
backend("s3",
  bucket:         "my-bucket",
  key:            ":REGION/:ENV/terraform.tfstate",
  region:         ":REGION",
)
```

With this approach, use only one `app/stacks`. Example:

    app/stacks/monolith

## A statefile per groups of modules

Teams will then evolve their statefile approach to one that groups related-modules together.  Here are some possible examples:

Stack | Description
--- | ---
Core | Foundational layer with resources like vpc.
DB | Stateful database components. It may make sense to keep this as a separate stack or group them with the app/service stacks.
Compute | General compute capacity like EKS or GKE. Or if using traditional VMs, maybe ELBs, AutoScaling, Instance groups, etc.
App/Service | Could be the resources to deploy the app/services like kubernetes resource definitions. Some may also prefer to include the ELB, AutoScaling, Instance groups here instead.

The nice thing about this approach is the increased isolation of running `terraform apply`. We won't be touching the statefile that affects the VPC, so we know that it cannot be affected. Though there's rarely a one-size-that-fits-all approach, this approach provides good flexibility and isolation protection.

A downside with this approach is the extra coordination required. Essentially, "orchestration" now gets moved away from terraform itself to us/humans. For example, the VPC layer must be provisioned first. Then the other layers can be deployed. We have to either manually coordinate or add another build process outside of terraform to help coordinate. A CI/CD system here may help. When you have one state file per env, coordination is given for free. Separate stacks require extra coordination.

You also have to "stitch" the layers together with outputs and inputs. IE: You'll feed the vpc id into the db, compute, app layers. The [terraform_remote_state](https://www.terraform.io/docs/providers/terraform/d/remote_state.html) data source may also help.

An interesting point here is how we design the stacks, and group modules together affect the required level of coordination. For example, a fully distributed system with thousands of tiny microservices will require more coordination than a monolith. Ideally, stacks should be as self-sufficient as possible, else cost of coordination will be high.

Remember, which cloud resources belong to which terraform statefile is can also be difficult. The [terraspace summary]({% link _docs/intro/summary-command.md %}) command can help. It provides a summary of resources grouped by statefile.

All that being said, here's an example of this setup with terraspace:

config/terraform/backend.rb

```ruby
backend("s3",
  bucket:         "my-bucket",
  key:            ":REGION/:ENV/:BUILD_DIR/terraform.tfstate",
  region:         ":REGION",
)
```

The bucket key example:

    :REGION/:ENV/:BUILD_DIR/terraform.tfstate

Gets expanded to actual values:

    us-west-2/development/stacks/wordpress/terraform.tfstate

## A statefile per module

The finest-grain approach is to have a statefile per module.  So instead of deploying stacks, which groups related modules together, we choose to deploy each module individually.  While terraspace does allow you to deploy a module on a one-off basis, it's really meant to be used for convenient quick testing. You deploy a module the pretty much the same way as a stack. Terraspace will create a different statefile for that specific module.

The `:BUILD_DIR` above includes the name of the "type_dir", which is either modules or stacks.  So if you happened to deploy a module from `app/modules/instance`, the statefile would expand out from

    :REGION/:ENV/:BUILD_DIR/terraform.tfstate

To:

    us-west-2/development/modules/instance/terraform.tfstate

## Why the default?

Terraspace default is to have a state file on a per stack basis, which is intended to group modules together. This allows fine-grain control and isolation protection when running `terraform apply`.
