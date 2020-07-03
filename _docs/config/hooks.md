---
title: Config Hooks
---

You can run hooks as part of the Terraspace processing:

Hook Name | Description
--- | ---
on_boot | Runs very early in the Terraspace boot process. Runs right after plugins are loaded.

## on_boot


The on_boot hook runs very early. It takes a block of code and can be used to run custom logic. One useful way to use it is switching AWS_PROFILE, GOOGLE_APPLICATION_CREDENTIALS, etc automatically based on the TS_ENV. Example:

config/env/dev.rb

```ruby
Terraspace.configure do |config|
  config.hooks.on_boot do
    ENV['AWS_PROFILE'] = 'dev'
  end
end
```
