---
title: App Config
---

You can configure terraspace itself with `config/app.rb`. This file is directly within the `config` folder.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.logger.level = :info
  config.test_framework = "rspec"
end
```

## Custom Logger

To use a custom logger.

```ruby
Terraspace.configure do |config|
  logger = Logger.new($stdout)
  logger.level = :debug
  config.logger = logger
end
```

For a list of available config settings, refer to the [Config Reference]({% link _docs/config/reference.md %}) docs.

## Environment Specific Overrides

You can configure environment specific value overrides for `config/app.rb` with corresponding `config/envs/TS_ENV.rb` files. Examples:

config/envs/dev.rb

```ruby
Terraspace.configure do |config|
  config.logger.level = :debug
end
```

config/envs/prod.rb

```ruby
Terraspace.configure do |config|
  config.logger.level = :info
end
```
