---
title: Terrafile Version Locking
---

Terraspace provides a lot of control over version locking.

## Example

Here's a `Terrafile` example with the different version options:

```ruby
# GitHub repo
mod "example1", source: "boltops-tools/terraform-aws-s3", version: "master"
mod "example2", source: "boltops-tools/terraform-aws-s3", branch: "master"
mod "example3", source: "boltops-tools/terraform-aws-s3", ref: "3a414a39"
mod "example4", source: "boltops-tools/terraform-aws-s3", sha: "c1d04816"
mod "example5", source: "boltops-tools/terraform-aws-s3", tag: "v0.1.0"

# Terraform registry
mod "sg", source: "terraform-aws-modules/security-group/aws", version: "3.10.0"
```

Run `terraspace bundle` to download the modules:

    $ terraspace bundle
    Bundling with Terrafile...
    Exporting example1
    Exporting example2
    Exporting example3
    Exporting example4
    Exporting example5
    Exporting sg
    Modules saved to vendor/modules

To list the modules:

    $ terraspace list --type module
    vendor/modules/example1
    vendor/modules/example2
    vendor/modules/example3
    vendor/modules/example4
    vendor/modules/example5
    vendor/modules/sg

A `Terrafile.lock` is also generated to lock the versions. For strict versions like `tag: "v0.1.0"` the versions are locked as-is. For "loose" versions like `branch: "master"` the latest current version is snapshotted.  You can update these versions with:

    terraspace bundle update

This updates the `Terrafile.lock` versions.
