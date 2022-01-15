---
title: "SSH"
nav_text: SSH
categories: sources
order: 6
---

## Example

Terrafile

```ruby
mod "mod1", source: "ssh://user@host:repo"
mod "mod2", source: "ssh://user@host:relative/path/from/home/to/repo"
mod "mod3", source: "ssh://user@host/absolute/path/to/repo"
mod "mod4", source: "ssh://host:repo"
mod "mod5", source: "git::https://github.com/boltops-tools/terraform-aws-s3"
```

Running:

    terraspace bundle

Will download modules to:

    vendor/modules/mod1
    vendor/modules/mod2
    vendor/modules/mod3
    vendor/modules/mod4
    vendor/modules/mod5
