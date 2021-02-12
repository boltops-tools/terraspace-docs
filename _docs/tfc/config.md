---
title: Terraform Cloud Config
---

When using Terraform Cloud, Terraspace performs additional convenience logic to make it easier to use Terraform Cloud Workspaces. Some of the processing behavior can be configured.

## Terraform Cloud Variables Behavior

Whenever a `terraspace up` is ran, terraspace reads the `config/terraform/tfc/vars.json` file and uses it to create Terraform Cloud Variables.

Terraspace will overwrite TFC variables by default. The behavior is configurable. Non-sensitive and sensitive variables can be finely controlled with different overwrite behavior.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.cloud.overwrite = true # non-sensitive variables
  config.cloud.overwrite_sensitive = true
end
```

Here's a table with the cloud related config settings:

Name | Description | Default
--- | --- | ---
build.clean_cache | Disable cleaning the `.terraspace-cache` entirely. Terrspace generally tries to only remove the cache files in a way to allow the TFC VCS-Driven workflow to work. But it may not work for your needs, depending on Terraspace is configured. This setting keeps the cache. You can manually delete items from the `.terraspace-cache` manually. | true
{% include config/tfc.md %}
