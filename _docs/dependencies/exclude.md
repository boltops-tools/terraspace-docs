---
title: "Including and Excluding Stacks"
nav_text: Excluding Stacks
categories: dependencies
---

The `terraspace all` command allows you to deploy multiple stacks simultaneously.  You can configure Terraspace to include or exclude specific stacks that `terraspace all` will deploy.

## Example 1: Simple Include

Let's say we have 3 stacks:

    $ terraspace list
    app/stacks/stack1
    app/stacks/stack2
    app/stacks/stack3

config/app.rb

```ruby
Terraspace.configure do |config|
  config.all.include_stacks = ["stack1"]
end
```

This means that `terraspace all` will only consider stack1. Example:

    $ terraspace all up
        terraspace up stack1 # batch 1

You can still deploy stack2 and stack3 directly with `terraspace up`

    terraspace up stack2
    terraspace up stack3

## Example 2: Simple Exclude

Let's say we have 3 stacks:

    $ terraspace list
    app/stacks/stack1
    app/stacks/stack2
    app/stacks/stack3

config/app.rb

```ruby
Terraspace.configure do |config|
  config.all.exclude_stacks = ["stack1"]
end
```

This means that `terraspace all` will not consider stack1. Example:

    $ terraspace all up
        terraspace up stack2 # batch 1
        terraspace up stack3 # batch 1

You can still deploy `stack1` directly with `terraspace up`

    terraspace up stack1

## Example 3: Exclude Stacks for Specific Environments with Multiple Files

An interesting example is if you want `terraspace all` to deploy specific stacks only for certain environments.

Let's say we have 3 stacks:

    $ terraspace list
    app/stacks/route53
    app/stacks/stack1
    app/stacks/stack2

Route53 resources are global and may not always make sense to deploy on a per env basis. Here are the `terraspace up` commands to explain how we only want these stacks to deploy with specific environments.

    TS_ENV=global terraspace up route53
    TS_ENV=dev    terraspace up stack1
    TS_ENV=prod   terraspace up stack1
    TS_ENV=dev    terraspace up stack2
    TS_ENV=prod   terraspace up stack2

To configure `terraspace all` so that it will only deploy based on the environment, we can do this:

config/app.rb

```ruby
Terraspace.configure do |config|
  config.all.exclude_stacks = ["route53"]
end
```

So we generally exclude the `route53` stack from all environments. Then we override the config include it in the `global` environment like so:

config/envs/global.rb

```ruby
Terraspace.configure do |config|
  config.all.exclude_stacks = nil # important to override and reset this
  config.all.include_stacks = ["route53"]
end
```

Running `terraspace all` results in something like this:

    $ TS_ENV=dev terraspace all up
    Will run:
        terraspace up stack1 # batch 1
        terraspace up stack2 # batch 1
    $ TS_ENV=prod terraspace all up
    Will run:
        terraspace up stack1 # batch 1
        terraspace up stack2 # batch 1

And for `TS_ENV=global`

    $ TS_ENV=global terraspace all up
    Will run:
        terraspace up route53 # batch 1

## Example 4: Exclude Stacks for Specific Environments with One File

Some folks may prefer or feel it's easier not to have the configuration in multiple files. To use one file instead.

config/app.rb

```ruby
Terraspace.configure do |config|
  if Terraspace.env == "global"
    config.all.include_stacks = ["route53"]
  else
    config.all.exclude_stacks = ["route53"]
  end
end
```

This is one of the benefits that comes with the way Terraspace handles configurations. At the end of the day, you have access to the power of a full programming language, Ruby, when you need it. Of course, with great power comes great responsibility.

Question: Should you use multiple vs one file?

It depends, if the configurations are small, then it's clearer to have it one file. If the configurations get complex, it may make sense to separate them into multiple files. It also depends a lot on personal preference. In the above examples, it's easier to understand things in one file.

## Example 5: Complete Customization with Object That Implements Call

For even more control over which stacks are included or excluded you can assign an object implements `call` and returns an `Array`. This is an advanced technique. Example:

```ruby
class Includer
  def call(stack)
    ["route53"] if Terraspace.env == "global"
  end
end
class Excluder
  def call(stack)
    ["route53"] unless Terraspace.env == "global"
  end
end

Terraspace.configure do |config|
  config.all.include_stacks = Includer
  config.all.exclude_stacks = Excluder
end
```

The Excluder class defines the `call` method and takes in the `stack` argument. It's value is the name of current stack being deployed. The `Includer` and `Excluder` classes should return an Array or nil.
