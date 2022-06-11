---
title: "Tfvars: Debugging Layering"
nav_text: Debugging Layering
category: layering
order: 9
---

Terraspace's Layering abilities are so powerful that they can be difficult to debug when overly used.  It is recommend you chose only a few layers that make sense for your goals and stick to them. Essentially, limit the rope length. Here are also some debugging tips.

## Enable Logging

You can debug layers by turning a config to show the **found** layers.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.layering.show = true
end
```

This will show the **found** layers.

    $ terraspace build demo
        app/stacks/demo/tfvars/base.tfvars
        app/stacks/demo/tfvars/dev.tfvars

## All Considered Layers

If you want to also see all the considered layers use `TS_SHOW_ALL_LAYERS=1`.

    $ export TS_SHOW_ALL_LAYERS=1
    $ terraspace build demo
    Building .terraspace-cache/us-west-2/dev/stacks/demo
        config/terraform/tfvars/base.tfvars
        config/terraform/tfvars/dev.tfvars
        config/terraform/tfvars/us-west-2.tfvars
        config/terraform/tfvars/us-west-2/base.tfvars
        config/terraform/tfvars/us-west-2/dev.tfvars
        app/stacks/demo/tfvars/base.tfvars
        app/stacks/demo/tfvars/dev.tfvars
        app/stacks/demo/tfvars/us-west-2.tfvars
        app/stacks/demo/tfvars/us-west-2/base.tfvars
        app/stacks/demo/tfvars/us-west-2/dev.tfvars

{% include layering/provider-mode.md %}

## Useful With

Debugging layers with these flags can be particularly useful when using:

* [Custom Layering]({% link _docs/layering/custom-layering.md %})
