---
title: Terrafile Usage
---

{% include terrafile/intro.md %}

## Example

Here's an example `Terrafile`.

```ruby
org "boltops-tools" # set default org

# Repo examples
mod "s3", source: "git@github.com:boltops-tools/terraform-aws-s3"
# mod "pet", source: "https://github.com/boltops-tools/random_pet"  # public repo
# mod "elasticache", source: "boltopspro/terraform-aws-elasticache" # explicit org
# mod "redis", source: "terraform-aws-elasticache"                  # inferred org
# mod "bucket1", source: "terraform-aws-s3", version: "master"      # pinned to branch. easily update with terraspace bundle update
# mod "bucket2", source: "terraform-aws-s3", tag: "v0.1.0"          # pinned to tag no matter what
# mod "null_resource", source: "https://github.com/boltops-tools/modules", subfolder: "path/to/null_resource_module"

# Terraform registry
mod "sg", source: "terraform-aws-modules/security-group/aws", version: "3.10.0"
```

**Options Docs**:

* [Mod-level options]({% link _docs/terrafile/options.md %}#1-mod-level): : These options apply at the mod-level, so they specifically affect each mod only.
* [Terrafile-level options]({% link _docs/terrafile/options.md %}#2-terrafile-level): These options apply globally and affect the entire Terrafile.

**Additional Docs**:

* [Version Locking Docs]({% link _docs/terrafile/version-locking.md %}): Everything you may want to know about version locking.
* [Stack Options]({% link _docs/terrafile/options/stack.md %}): The `stack` option tells Terraspace to copy examples from modules to the `app/stacks` folder. There are a variety of ways to use it.

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
