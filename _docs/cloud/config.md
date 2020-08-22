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

Here's a table with the cloud related config settings:

Name | Description
--- | ---
overwrite | Whether or not to overwrite existing non-sensitive variables. Default: true
overwrite_sensitive | Whether or not to overwrite existing sensitive variables. Default: true
relative_root | Useful for the [VCS-driven workflow]({% link _docs/cloud/workflows/vcs.md %}) if you have your terraspace project within a subfolder of the repo root folder. Default: nil
