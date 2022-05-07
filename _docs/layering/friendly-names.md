---
title: Friendly Layer Names
nav_text: Friendly Layering
category: layering
order: 6
---

You can configure a `layering.names` map to assign friendly names to the layer name.  Currently, namespace is supported. Example setup:

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
