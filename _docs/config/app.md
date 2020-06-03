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

You can the logger to a custom logger.

```ruby
Terraspace.configure do |config|
  logger = Logger.new($stdout)
  logger.level = :debug
  config.logger = logger
end
```
