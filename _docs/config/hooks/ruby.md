---
title: Ruby Hooks
nav_text: Ruby
categories: hooks
order: 3
---

{% include videos/learn/hooks.md %}

The hook `execute` option can also be provided Ruby code instead of a string.  Here's how it works:

1. When the execute option is a String: Terraspace will shell out and run it as a script.
2. When the execute option is a Ruby object: Terraspace will perform the `call` method on the object or class.

## Ruby Class

When the Ruby object is a class with an instance method `call`, Terraspace creates a new instance of the class and runs its `call` method.  Example:

config/hooks/terraspace.rb

```ruby
class EnvExporter
  def call
    ENV['SECRET_FOO'] = "bar"
  end
end

before("build",
  execute: EnvExporter,
)
```

Terraspace will do something like this:

```ruby
EnvExporter.new.call
```

The example sets the `SECRET_FOO` environment variable. It is then available from ERB in the project files.

## Ruby Object

When the Ruby object, Terraspace expects it to have a `call` method and will run it.  Example:

config/hooks/terraspace.rb

```ruby
before("compile",
  execute: lambda { ENV['SECRET_FOO'] = "hi2" }
)
```

Terraspace will do something like this:

```ruby
@hook[:execute].call
```

## Method Argument

The `call` method can optionally be defined with an argument. The argument can be named whatever you wish. It's named `runner` in the example. The `runner` argument is the instance of the class that handles running the hook.  It can be use to access metadata about the running terraspace command. An example may help:

app/stacks/demo/config/hooks/terraspace.rb

```ruby
class ShowContext
  def call(runner)
    mod = runner.mod

    puts "runner #{runner}"
    puts "runner.hook #{runner.hook}"

    puts "mod #{mod}"
    puts "mod.name #{mod.name}"
    puts "mod.build_dir #{mod.build_dir}"
    puts "mod.cache_dir #{mod.cache_dir}"
    puts "mod.root #{mod.root}"
    puts "mod.type #{mod.type}"
    puts "mod.type_dir #{mod.type_dir}"
    puts "mod.options #{mod.options}"

    puts("Terraspace.root #{Terraspace.root}")
    puts("Terraspace.env #{Terraspace.env}")

    # Example of creating an expander. Note: Interface may change
    expander = TerraspacePluginAws::Interfaces::Expander.new(mod)
    puts "expander.account #{expander.account}"
  end
end

before("build",
  execute: ShowContext,
)
```

The example puts out some example values accessible via the `runner` object.  It also includes an example of creating an expander object to get the current account. Note, the interface is for plugins and may change.

**Question**: How about other helper methods? Like `outputs` and `aws_ssm`?

Currrently, other helpers are not available within this runner context. This has to due with how helpers are currently designed to work specifically with tfvars dependency graph processing logic. Will consider PRs for improvements.
