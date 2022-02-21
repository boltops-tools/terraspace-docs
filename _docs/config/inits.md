---
title: Initializers
---

Config initializers allow you to hook early into the Terraspace boot process.  This provides a way of customizing Terraspace beyond the [config/app.rb]({% link _docs/config/reference.md %}) options. Generally, recommend using config options when possible and reaching for config initializers for advanced usage.

Here's a simple example:

config/inits/layering.rb

```ruby
Terraspace::Layering.module_eval do
  def pre_layers
    [
      "teams/#{ENV['TEAM']}",
    ]
  end
end
```

This example customizes Terraspace layering processing. More info: [Custom Layering]({% link _docs/tfvars/custom-layering.md %}).

Config initializers are a generalized system, so the way you use it really depends on what you're trying to do.
