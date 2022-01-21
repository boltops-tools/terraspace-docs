---
title: Restricting Envs
nav_text: Envs
categories: restricting
---

If you want to restrict environments that can be deployed, you can use:

config/app.rb

```ruby
Terraspace.configure do |config|
  config.allow.envs = ["dev", "prod"]
  # config.deny.envs = ["qa"]
end
```

{% include config/restricting/deny-wins.md %}

## Example 1: Simple Allow

Let's say we have a stack:

    $ terraspace list
    app/stacks/stack1

config/app.rb

```ruby
Terraspace.configure do |config|
  config.allow.envs = ["dev", "prod"]
end
```

Since only the dev and prod env is allowed, you would not be able to deploy to any other TS_ENV. Example:

    $ TS_ENV=qa terraspace up stack1
    Building .terraspace-cache/qa/stacks/stack1
    ERROR: The configs do not allow this.
    This env is not allowed to be used: TS_ENV=qa
    Allowed envs: dev, prod
    $

## Example 2: Simple Deny

Let's say we have a stack:

    $ terraspace list
    app/stacks/stack1

config/app.rb

```ruby
Terraspace.configure do |config|
  config.deny.envs = ["qa"]
end
```

You can deploy to any environment except `TS_ENV=qa`. Example:

    $ TS_ENV=qa terraspace up stack1
    Building .terraspace-cache/qa/stacks/stack1
    ERROR: The configs do not allow this.
    This env is not allowed to be used: TS_ENV=qa
    Deny envs: qa
    $

## Example 3: Complete Customization

For even more control over which environments are allowed, you can assign an object that implements `call` and returns an Array. This is an advanced technique. Example:

config/app.rb

```ruby
class AllowEnvs
  def call(stack)
    if stack == "route53"
      ["global"]
    else
      ["dev", "prod"]
    end
  end
end
class DenyEnvs
  def call(stack)
    # returns nil when nothing provided
  end
end

Terraspace.configure do |config|
  config.allow.envs = AllowEnvs
  config.deny.envs = DenyEnvs
end
```

The `AllowEnvs` class defines the `call` method and takes the `stack` argument. Its value is the name of the current stack being deployed. The `AllowEnvs` and `DenyEnvs` classes should return an Array or nil. Returning `nil` is the same as not setting the option.
