---
title: Terraform Cloud Config
---

When using Terraform Cloud, Terraspace performs additional convenience logic to make it easier to use Terraform Cloud Workspaces. Some of the processing behavior can be configured.

## Terraform Cloud Variables Behavior

Whenever a `terraspace up` is ran, terraspace reads the `config/terraform/cloud/vars.json` file and uses it to create Terraform Cloud Variables.

Terraspace will overwrite TFC variables by default. The behavior is configurable. Non-sensitive and sensitive variables can be finely controlled with different overwrite behavior.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.cloud.overwrite = true # non-sensitive variables
  config.cloud.overwrite_sensitive = true
end
```
