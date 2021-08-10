---
title: Terraform Notation
---

Terraform-like source notation for subfolder and ref are supported for sources.

## Subfolder

Here's an example using the `//` subfolder notation.

Terrafile

```ruby
mod "demo3", source: "gcs::https://www.googleapis.com/storage/v1/terraform-example-modules/modules/example-module.zip//subfolder"
mod "subfolder2", source: "git@github.com:tongueroo/example-module//subfolder"
mod "subfolder3", source: "https://github.com/tongueroo/example-module//subfolder"
mod "subfolder4", source: "tongueroo/example-module//subfolder"
```

## Ref

The `ref` notation is also supported.

Terrafile

```ruby
mod "subfolder5", source: "tongueroo/example-module//subfolder?ref=7d73efb16aa09ef8c77f3ff3e6bbbeb9ce321865"
```

## Options Notation Instead

You can also use the `subfolder` and `ref` argument instead.

Terraform

```ruby
mod "subfolder4", source: "tongueroo/example-module", subfolder: "subfolder"
mod "subfolder4", source: "tongueroo/example-module", ref: "7d73efb16aa09ef8c77f3ff3e6bbbeb9ce321865"
```
