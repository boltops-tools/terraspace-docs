---
title: Terrafile
---

The Terrafile provides a way to install and manage Terraform modules from sources like the [Terraform Registry](https://registry.terraform.io/), [GitHub](https://github.com/), etc.

## Example

The Terrafile processes a DSL. Here's an example:

```ruby
org "boltopspro" # set default github org. IE: https://github.com/boltopspro

# Use modules from your org
mod "instance", source: "terraform-aws-instance", version: "v0.1.0"
mod "elb", source: "terraform-aws-elb"

# Use modules and specify org explicitly
mod "vpc", source: "another-org/terraform-aws-vpc", version: "master"

# Use modules from the Terraform registry
mod "sqs", source: "terraform-aws-modules/sqs/aws"
```

When you run:

    terraspace bundle

The modules declared in `Terrafile` are downloaded to the `vendor/modules` folder. A `Terrafile.lock` file is also created to lock module versions. You can check in the lockfile to version control, so others running `terraspace bundle` will download the exact same versions as you.

## Updating

To update the `Terrafile.lock` with the latest versions:

    terraspace bundle update

Terrafile simplifies managing module versions to a centralized place.  The `terraspace bundle` commands makes use of [boltops-tools/terraspace-bundler](https://github.com/boltops-tools/terraspace-bundler).
