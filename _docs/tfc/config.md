---
title: Terraform Cloud Config
nav_text: Config
category: tfc
order: 4
---

When using Terraform Cloud, Terraspace performs additional convenience logic to make it easier to use Terraform Cloud Workspaces. Some of the processing behavior can be configured.

## Terraform Cloud Variables Behavior

Whenever a `terraspace up` is ran, terraspace reads the `config/terraform/tfc/vars.json` file and uses it to create Terraform Cloud Variables.

Terraspace will overwrite TFC variables by default. The behavior is configurable. Non-sensitive and sensitive variables can be finely controlled with different overwrite behavior.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.tfc.overwrite = true # non-sensitive variables
  config.tfc.overwrite_sensitive = true
end
```

Here's a table with the cloud related config settings:

{% include config/reference/header.md %}
{% include config/reference/tfc.md %}
{% include config/reference/footer.md %}
