---
title: Friendly Layer Names
nav_text: Friendly Layering
category: layering
order: 6
---

You can configure a `layering.names` map to assign friendly names to the layer name.  Namespace is supported. Example setup:

config/app.rb

```ruby
Terraspace.configure do |config|
  config.layering.names = {
    "111111111111" => "dev-account",
    "222222222222" => "prod-account",
  }
end
```

This maps the `111111111111` namespace to a friendly  name `dev-account`. So when you build or deploy it'll use the friendly name. Example:

    $ ls app/stacks/demo/tfvars/dev-account/
    base.tfvars
    $ terraspace build demo
    $ ls .terraspace-cache/us-west-2/dev/stacks/demo/*.tfvars
    .terraspace-cache/us-west-2/dev/stacks/demo/1-dev-account-base.auto.tfvars
    $

Without the mapping, the paths would look like so:

    $ ls app/stacks/demo/tfvars/111111111111/
    base.tfvars
    $ terraspace build demo
    $ ls .terraspace-cache/us-west-2/dev/stacks/demo/*.tfvars
    .terraspace-cache/us-west-2/dev/stacks/demo/1-111111111111-base.auto.tfvars
    $

Here's a useful command to check for the AWS account id.

    $ aws sts get-caller-identity
    {
        "UserId": "EXAMPLE16O4571EXAMPLE",
        "Account": "111111111111",
        "Arn": "arn:aws:iam::111111111111:user/tung"
    }

## Naming Layers Consideration

When mapping namespace/account to a friendly name it can cause a duplicated layer. For example:

config/app.rb

```ruby
Terraspace.configure do |config|
  config.layering.names = {
    "111111111111" => "dev",
  }
  config.layering.mode = "namespace" # simple, namespace, or provider
end
```

    $ terraspace build demo 2>&1 | grep config
        config/terraform/tfvars/base.tfvars
        config/terraform/tfvars/dev.tfvars
        config/terraform/tfvars/us-west-2.tfvars
        config/terraform/tfvars/us-west-2/base.tfvars
        config/terraform/tfvars/us-west-2/dev.tfvars
        config/terraform/tfvars/dev.tfvars # <= duplicated and removed by Terraspace
        config/terraform/tfvars/dev/base.tfvars
        config/terraform/tfvars/dev/dev.tfvars
        config/terraform/tfvars/dev/us-west-2.tfvars
        config/terraform/tfvars/dev/us-west-2/base.tfvars
        config/terraform/tfvars/dev/us-west-2/dev.tfvars
    $

To avoid confusion, the duplicated layer is removed by Terraspace per [#237](https://github.com/boltops-tools/terraspace/pull/237).
