---
title: Env Specific Settings
nav_text: Env Settings
category: plugins
order: 4
---

If you need env specific plugin settings, there are 2 ways to achieve that.

1. Env-Specific Plugin Config
2. Conditional Logic

## Env-Specific Plugin Config

Here's an example of an env specific plugin config.

config/plugins/aws.rb

```ruby
TerraspacePluginAws.configure do |config|
  config.tags = {base: "hello"}
```

For `TS_ENV=dev` the following is also be used.

config/plugins/aws/dev.rb

```ruby
TerraspacePluginAws.configure do |config|
  config.tags = {dev: true}
```

For `TS_ENV=prod` the following is also be used.

config/plugins/aws/prod.rb

```ruby
TerraspacePluginAws.configure do |config|
  config.tags = {prod: true}
```

## Conditional Logic

Here's an example with conditional logic.

config/plugins/aws.rb

```ruby
TerraspacePluginAws.configure do |config|
  tags = {base: "hello"}
  case Terraspace.env
  when "dev"
    tags.merge!(dev: true)
  when "prod"
    tags.merge!(prod: true)
  end

  config.tags = tags
end
```
