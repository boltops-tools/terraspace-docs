---
title: "Tfvars: Friendly Names"
---

You can configure a `layering.names` map to assign friendly names to the layer name.  Currently, namespace is supported. Example setup:

config/app.rb

```ruby
Terraspace.configure do |config|
  config.layering.names = {
    111111111111: "dev-account",
    222222222222: "prod-account",
  }
end
```

This maps the `111111111111` namespace to a friendly  name `dev-account`. So when build or deploy it'll use the friendly name. Example build:

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

## State File and Build cache_dir

Note, if you've changed `build.cache_dir`, add `namespace` to the path, and deployed stacks previous, then changing added friendly names mapping can result in the `cache_dir` path and state file changing. If you want to maintain the old state, then you can set `layering.enable_names.cache_dir=false` to disable the mapping only for the `cache_dir`. The friendly names will only be used for your local folders and not the generated `cache_dir` path. More docs: [Build Cache Dir]({% link _docs/config/cache-dir.md %}).
