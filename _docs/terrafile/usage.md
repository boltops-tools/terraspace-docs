---
title: Terrafile Usage
---

{% include terrafile/intro.md %}

## Example

Here's an example `Terrafile`.

```ruby
org "boltops-tools" # set default org

# GitHub repo with default org
mod "s3", source: "terraform-aws-s3", version: "master"
# mod "s3", source: "terraform-aws-s3", tag: "v0.1.0"

# GitHub repo with explicit org
# mod "elasticache", source: "boltopspro/terraform-aws-elasticache"

# Terraform registry
mod "sg", source: "terraform-aws-modules/security-group/aws", version: "3.10.0"
```

For more examples on how to use specific versions see: [Version Locking Docs]({% link _docs/terrafile/version-locking.md %}).

## Install

When you run:

    terraspace bundle

The modules in `Terrafile` are downloaded to the `vendor/modules` folder.

A `Terrafile.lock` file is generated to lock module versions. You can then check in the lockfile into version control.  Other members on your team running `terraspace bundle` will download the **exact** same versions as you.

## How do vendor/modules work?

We can download modules into the `vendor/modules` folder, and Terraspace will know to use them because it's another lookup location that Terraspace considers. This lookup ability is described in the [Lookup Paths Docs]({% link _docs/lookups.md %}). Terraspace is smart enough to build and materialize the Terraform project that it deploys from multiple source folders.

## Updating

To update the `Terrafile.lock` with the latest versions.

    terraspace bundle update

You can also selectively update multiple modules.

    terraspace bundle update mod1 mod2

## Listing

You can list the modules that installed from the `Terrafile` with:

    $ terraspace bundle list
    Modules included by Terrafile.lock

        ec2
        rds
        vpc

    Use `terraspace bundle info` to print more detailed information about a module

## Getting Info

You can get additional information about each bundled module with:

    $ terraspace bundle info vpc
    vpc:
        sha: 30df090adc9d1a0d396551fd51ce11e780065b76
        source: terraform-aws-modules/vpc/aws
        stack: "examples/simple-vpc"
        type: registry
        url: https://github.com/terraform-aws-modules/terraform-aws-vpc
    $

## Stack Option

Often modules come with examples. Terraspace can copy these starter examples to the `app/stacks` folder for you. Terraspace also will rewrite the module `source` attribute to point to the correct location. This streamlines the `terraspace bundle` workflow. Example:

```ruby
mod "vpc", "terraform-aws-modules/vpc/aws", stack: "simple-vpc"
```

Terraspace copies `vendor/modules/vpc/examples/simple-vpc` to `app/stacks/vpc`. For most examples, you'll be able to deploy immediately:

    terraspace up vpc

More Docs: [Stack Options]({% link _docs/terrafile/options/stack.md %})