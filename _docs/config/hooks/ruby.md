---
title: Ruby Hooks
nav_text: Ruby
categories: hooks
order: 9
---

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

## Process Context

The context in which the hook runs is worth highlighting. When the `execute` option is a String, Terraspace runs the script in a **new** child process. This the script is an independent process, and whatever is done to its environment is segregated.

When the `execute` option a Ruby object, then Terraspace runs the hook within the **same** process. It means the hook can affect the **same** environment. IE: Setting environment variables.
