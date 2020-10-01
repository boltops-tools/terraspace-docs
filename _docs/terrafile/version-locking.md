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

When running

    terraspace bundle

A `Terrafile.lock` generated that will lock versions. For strict versions like `tag: "v0.1.0"` the versions are locked as-is. For "loose" versions like `branch: "master"` the latest current version is snapshotted.  You can update these versions with:

    terraspace bundle update

This updates the `Terrafile.lock` versions.
