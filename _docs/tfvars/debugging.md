---
title: "Tfvars: Debugging Layering"
---

Terraspace's Layering abilities are so powerful that they can be difficult to debug when overly used like a russian doll.  It is recommend you chose only a few layers that make sense for your goals and stick to them. Essentially, limit the rope length. Here are also some debugging tips.

## Enable Logging

You can debug layers by turning on logging to debug to see them.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.logger.level = "debug"
end
```

This will show the **found** layers.

    $ terraspace build demo
    Layers for demo:
        app/stacks/demo/tfvars/base.tfvars
        app/stacks/demo/tfvars/dev.tfvars

## All Considered Layers

If you want to also see all the considered layers use `TS_SHOW_ALL_LAYERS=1`. Remember, `config.logger.level = "debug"` needs to also be configured.

    $ export TS_SHOW_ALL_LAYERS=1
    $ terraspace build demo
    Layers for demo:
        config/terraform/tfvars/base.tfvars
        config/terraform/tfvars/dev.tfvars
        config/terraform/tfvars/dev/base.tfvars
        config/terraform/tfvars/dev/dev.tfvars
        config/terraform/tfvars/us-west-2.tfvars
        config/terraform/tfvars/us-west-2/base.tfvars
        config/terraform/tfvars/us-west-2/dev.tfvars
        config/terraform/tfvars/us-west-2/dev/base.tfvars
        config/terraform/tfvars/us-west-2/dev/dev.tfvars
        config/terraform/tfvars/111111111111.tfvars
        config/terraform/tfvars/111111111111/base.tfvars
        config/terraform/tfvars/111111111111/dev.tfvars
        config/terraform/tfvars/111111111111/dev/base.tfvars
        config/terraform/tfvars/111111111111/dev/dev.tfvars
        config/terraform/tfvars/111111111111/us-west-2.tfvars
        config/terraform/tfvars/111111111111/us-west-2/base.tfvars
        config/terraform/tfvars/111111111111/us-west-2/dev.tfvars
        config/terraform/tfvars/111111111111/us-west-2/dev/base.tfvars
        config/terraform/tfvars/111111111111/us-west-2/dev/dev.tfvars
        config/terraform/tfvars/aws.tfvars
        config/terraform/tfvars/aws/base.tfvars
        config/terraform/tfvars/aws/dev.tfvars
        config/terraform/tfvars/aws/dev/base.tfvars
        config/terraform/tfvars/aws/dev/dev.tfvars
        config/terraform/tfvars/aws/us-west-2.tfvars
        config/terraform/tfvars/aws/us-west-2/base.tfvars
        config/terraform/tfvars/aws/us-west-2/dev.tfvars
        config/terraform/tfvars/aws/us-west-2/dev/base.tfvars
        config/terraform/tfvars/aws/us-west-2/dev/dev.tfvars
        config/terraform/tfvars/aws/111111111111.tfvars
        config/terraform/tfvars/aws/111111111111/base.tfvars
        config/terraform/tfvars/aws/111111111111/dev.tfvars
        config/terraform/tfvars/aws/111111111111/dev/base.tfvars
        config/terraform/tfvars/aws/111111111111/dev/dev.tfvars
        config/terraform/tfvars/aws/111111111111/us-west-2.tfvars
        config/terraform/tfvars/aws/111111111111/us-west-2/base.tfvars
        config/terraform/tfvars/aws/111111111111/us-west-2/dev.tfvars
        config/terraform/tfvars/aws/111111111111/us-west-2/dev/base.tfvars
        config/terraform/tfvars/aws/111111111111/us-west-2/dev/dev.tfvars
        app/stacks/demo/tfvars/base.tfvars
        app/stacks/demo/tfvars/dev.tfvars
        app/stacks/demo/tfvars/dev/base.tfvars
        app/stacks/demo/tfvars/dev/dev.tfvars
        app/stacks/demo/tfvars/us-west-2.tfvars
        app/stacks/demo/tfvars/us-west-2/base.tfvars
        app/stacks/demo/tfvars/us-west-2/dev.tfvars
        app/stacks/demo/tfvars/us-west-2/dev/base.tfvars
        app/stacks/demo/tfvars/us-west-2/dev/dev.tfvars
        app/stacks/demo/tfvars/111111111111.tfvars
        app/stacks/demo/tfvars/111111111111/base.tfvars
        app/stacks/demo/tfvars/111111111111/dev.tfvars
        app/stacks/demo/tfvars/111111111111/dev/base.tfvars
        app/stacks/demo/tfvars/111111111111/dev/dev.tfvars
        app/stacks/demo/tfvars/111111111111/us-west-2.tfvars
        app/stacks/demo/tfvars/111111111111/us-west-2/base.tfvars
        app/stacks/demo/tfvars/111111111111/us-west-2/dev.tfvars
        app/stacks/demo/tfvars/111111111111/us-west-2/dev/base.tfvars
        app/stacks/demo/tfvars/111111111111/us-west-2/dev/dev.tfvars
        app/stacks/demo/tfvars/aws.tfvars
        app/stacks/demo/tfvars/aws/base.tfvars
        app/stacks/demo/tfvars/aws/dev.tfvars
        app/stacks/demo/tfvars/aws/dev/base.tfvars
        app/stacks/demo/tfvars/aws/dev/dev.tfvars
        app/stacks/demo/tfvars/aws/us-west-2.tfvars
        app/stacks/demo/tfvars/aws/us-west-2/base.tfvars
        app/stacks/demo/tfvars/aws/us-west-2/dev.tfvars
        app/stacks/demo/tfvars/aws/us-west-2/dev/base.tfvars
        app/stacks/demo/tfvars/aws/us-west-2/dev/dev.tfvars
        app/stacks/demo/tfvars/aws/111111111111.tfvars
        app/stacks/demo/tfvars/aws/111111111111/base.tfvars
        app/stacks/demo/tfvars/aws/111111111111/dev.tfvars
        app/stacks/demo/tfvars/aws/111111111111/dev/base.tfvars
        app/stacks/demo/tfvars/aws/111111111111/dev/dev.tfvars
        app/stacks/demo/tfvars/aws/111111111111/us-west-2.tfvars
        app/stacks/demo/tfvars/aws/111111111111/us-west-2/base.tfvars
        app/stacks/demo/tfvars/aws/111111111111/us-west-2/dev.tfvars
        app/stacks/demo/tfvars/aws/111111111111/us-west-2/dev/base.tfvars
        app/stacks/demo/tfvars/aws/111111111111/us-west-2/dev/dev.tfvars

## Useful With

Debugging layers with these flags can be particularly useful when using:

* [Custom Layering]({% link _docs/tfvars/custom-layering.md %})
