---
title: Terraform Cloud Vars DSL
---

## Example

First, you create a `vars.rb` file like so:

config/terraform/tfc/vars.rb

```ruby
var(
  key: "AWS_ACCESS_KEY_ID",
  value: ENV['AWS_ACCESS_KEY_ID'],
  category: "env",
)
var(
  key: "AWS_REGION",
  value: ENV['AWS_REGION'],
  category: "env",
)
var(
  key: "AWS_SECRET_ACCESS_KEY",
  value: ENV['AWS_SECRET_ACCESS_KEY'],
  sensitive: true,
  category: "env",
)
```

Notice the use of ENV. This avoids hardcoding sensitive info.

Terraspace will then automatically call the Terraform Cloud API to set the variables as part of the `terraspace up`.

{% include tfc/vars-behavior.md %}
