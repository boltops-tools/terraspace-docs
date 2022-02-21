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
    Vars Layers:
        config/blueprints/demo/vars/base.rb
        config/blueprints/demo/vars/dev.rb
    Params Layers:
        config/blueprints/demo/params/base.txt
        config/blueprints/demo/params/dev.txt

## All Considered Layers

If you want to also see all the considered layers use `TS_SHOW_ALL_LAYERS=1`

    $ export TS_SHOW_ALL_LAYERS=1
    $ terraspace build demo
    Vars Layers:
        app/blueprints/demo/config/vars.rb
        app/blueprints/demo/config/vars/base.rb
        app/blueprints/demo/config/vars/dev.rb
        app/blueprints/demo/config/vars/us-west-2.rb
        app/blueprints/demo/config/vars/us-west-2/base.rb
        app/blueprints/demo/config/vars/us-west-2/dev.rb
        app/blueprints/demo/config/vars/111111111111.rb
        app/blueprints/demo/config/vars/111111111111/base.rb
        app/blueprints/demo/config/vars/111111111111/dev.rb
        app/blueprints/demo/config/vars/111111111111/us-west-2.rb
        app/blueprints/demo/config/vars/111111111111/us-west-2/base.rb
        app/blueprints/demo/config/vars/111111111111/us-west-2/dev.rb
        config/blueprints/demo/vars.rb
        config/blueprints/demo/vars/base.rb
        config/blueprints/demo/vars/dev.rb
        config/blueprints/demo/vars/us-west-2.rb
        config/blueprints/demo/vars/us-west-2/base.rb
        config/blueprints/demo/vars/us-west-2/dev.rb
        config/blueprints/demo/vars/111111111111.rb
        config/blueprints/demo/vars/111111111111/base.rb
        config/blueprints/demo/vars/111111111111/dev.rb
        config/blueprints/demo/vars/111111111111/us-west-2.rb
        config/blueprints/demo/vars/111111111111/us-west-2/base.rb
        config/blueprints/demo/vars/111111111111/us-west-2/dev.rb
    Params Layers:
        app/blueprints/demo/config/params.txt
        app/blueprints/demo/config/params/base.txt
        app/blueprints/demo/config/params/dev.txt
        app/blueprints/demo/config/params/us-west-2.txt
        app/blueprints/demo/config/params/us-west-2/base.txt
        app/blueprints/demo/config/params/us-west-2/dev.txt
        app/blueprints/demo/config/params/111111111111.txt
        app/blueprints/demo/config/params/111111111111/base.txt
        app/blueprints/demo/config/params/111111111111/dev.txt
        app/blueprints/demo/config/params/111111111111/us-west-2.txt
        app/blueprints/demo/config/params/111111111111/us-west-2/base.txt
        app/blueprints/demo/config/params/111111111111/us-west-2/dev.txt
        config/blueprints/demo/params.txt
        config/blueprints/demo/params/base.txt
        config/blueprints/demo/params/dev.txt
        config/blueprints/demo/params/us-west-2.txt
        config/blueprints/demo/params/us-west-2/base.txt
        config/blueprints/demo/params/us-west-2/dev.txt
        config/blueprints/demo/params/111111111111.txt
        config/blueprints/demo/params/111111111111/base.txt
        config/blueprints/demo/params/111111111111/dev.txt
        config/blueprints/demo/params/111111111111/us-west-2.txt
        config/blueprints/demo/params/111111111111/us-west-2/base.txt
        config/blueprints/demo/params/111111111111/us-west-2/dev.txt

## Useful With

Debugging layers with these flags can be particularly useful when using:

* [Custom Layering]({% link _docs/tfvars/custom-layering.md %})
