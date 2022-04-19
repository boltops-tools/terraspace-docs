---
title: Restricting Stacks
nav_text: Stacks
categories: restricting
---

{% include videos/learn.md
     url="terraspace-fundamentals/lessons/terraspace-config-allow-and-deny-stacks-for-specific-environments"
     img="https://learn-uploads.boltops.com/pcsmvsrn6qn3y6ki91l5y3e95q26" %}

If you want to restrict which stacks can be deployed to, you can use:

config/app.rb

```ruby
Terraspace.configure do |config|
  config.allow.stacks = ["stack1"]
  # config.deny.stacks = ["stack2"]
end
```

{% include config/restricting/deny-wins.md %}

## Example 1: Simple Allow

Let's say you have stacks:

    $ terraspace list
    app/stacks/stack1
    app/stacks/stack2

config/app.rb

```ruby
Terraspace.configure do |config|
  config.allow.stacks = ["stack1"]
end
```

You will only be able to deploy `stack1`. If you try to deploy `stack2`, you'll get an error message:

    $ terraspace up stack2
    ERROR: The configs do not allow this.
    This stack is not allowed to be used for TS_ENV=dev
    Allow stacks: stack1
    $

## Example 2: Simple Deny

Let's say you have stacks:

    $ terraspace list
    app/stacks/stack1
    app/stacks/stack2

config/app.rb

```ruby
Terraspace.configure do |config|
  config.deny.stacks = ["stack1"]
end
```

You will only be able to deploy `stack2`. If you try to deploy `stack1` though, you'll get an error message:

    $ terraspace up stack1
    ERROR: The configs do not allow this.
    This stack is not allowed to be used for TS_ENV=dev
    Deny stacks: stack1
    $

## Example 3: Allow Specific Stacks for Specific Envs with Multiple Files

The examples above are not very useful. They are just to help explain how the option works. A more interesting and practical example is to allow `terraspace up` to only deploy specific stacks for specific environments.

Let's say we have 3 stacks:

    $ terraspace list
    app/stacks/route53
    app/stacks/stack1
    app/stacks/stack2

Route53 resources are global and may not always make sense to deploy for every env. Here are the `terraspace up` commands to show how we only want these stacks to deploy with specific environments.

    TS_ENV=global terraspace up route53
    TS_ENV=dev    terraspace up stack1
    TS_ENV=prod   terraspace up stack1
    TS_ENV=dev    terraspace up stack2
    TS_ENV=prod   terraspace up stack2

To configure `terraspace up` so that it will only be allowed deploy with the `global` env, we can do this:

config/app.rb

```ruby
Terraspace.configure do |config|
  config.deny.stacks = ["route53"]
end
```

So we generally deny the `route53` stack from all environments. Then we override the config allow it in the `global` environment like so:

config/envs/global.rb

```ruby
Terraspace.configure do |config|
  config.allow.stacks = ["route53"]
  config.deny.stacks = nil # important to reset for TS_ENV=global
end
```

Running `terraspace up` for the `route53` stack with envs other than `TS_ENV=global` results in something like this:

    $ TS_ENV=dev terraspace up route53
    Building .terraspace-cache/dev/stacks/route53
    ERROR: The configs do not allow this.
    This stack is not allowed to be used for TS_ENV=dev
    Deny stacks: route53
    $ TS_ENV=prod terraspace up route53
    Building .terraspace-cache/prod/stacks/route53
    ERROR: The configs do not allow this.
    This stack is not allowed to be used for TS_ENV=prod
    Deny stacks: route53
    $

You will only be allowed to deploy the `route53` stack with `TS_ENV=global`

    $ TS_ENV=global terraspace up route53
    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value:
    ...
    $

## Example 4: Allow Specific Stacks for Specific Envs with One File

Some folks may prefer or feel it's easier not to have the configuration in multiple files. To use one file instead:

config/app.rb

```ruby
Terraspace.configure do |config|
  if Terraspace.env == "global"
    config.allow.stacks = ["route53"]
  else
    config.deny.stacks = ["route53"]
  end
end
```

{% include config/restricting/one-vs-multiple.md %}

## Example 5: Complete Customization

For even more control over which stacks are allowed, you can assign an object that implements `call` and returns an Array. This is an advanced technique. Example:

config/app.rb

```ruby
class AllowStacks
  def call(stack)
    if Terraspace.env == "global"
      ["route53"]
    end
  end
end
class DenyStacks
  def call(stack)
    if Terraspace.env != "global"
      ["route53"]
    end
  end
end

Terraspace.configure do |config|
  config.allow.stacks = AllowStacks
  config.deny.stacks = DenyStacks
end
```

The `AllowStacks` class defines the `call` method and takes the `stack` argument. Its value is the name of the current stack being deployed. The `AllowStacks` and `DenyStacks` classes should return an Array or nil. Returning `nil` is the same as not setting the option.

{% include config/restricting/stack_inference.md allow_rules=false %}
