---
title: Local paths
nav_text: Local
categories: sources
order: 5
---

## Example

Terrafile

```ruby
mod "local1", source: "/home/ec2-user/environment/downloads/example-module"
mod "local2", source: "./example-module"
mod "local3", source: "~/environment/infra-terrafile/example-module"
```

Running:

    terraspace bundle

Will download modules to:

    vendor/modules/local1
    vendor/modules/local2
    vendor/modules/local3
