---
title: Terraspace Hooks
nav_text: Terraspace
categories: hooks
order: 2
---

You can use hooks to run scripts at specific steps of the Terraspace lifecycle. These lifecycle points occur at a higher-level than the `terraform` commands.

## Lifecycle Hooks

Hook | Description
---|---
build | When Terraspace builds or compiles the Terraspace project to the `.terraspace-cache` folder.

## Example

config/hooks/terraspace.rb

```ruby
before("build",
  execute: "echo hi",
)

after("build",
  execute: "echo bye"
)
```

## exit on fail

By default, if the hook commands fail, then terraspace will exit with the original hook error code.  You can change this behavior with the `exit_on_fail` option.

```ruby
before("build",
  execute: "/command/will/fail/but/will/continue",
  exit_on_fail: false,
)
```

In this case, regardless of the hook command succeeding or failing, Terraspace will continue right along.

{% include config/hooks/options.md command="terraspace" %}

## On Boot Hook

There is also a special on_boot hook that is runs very early in the Terraspace boot process. It runs right after plugins are loaded.

It takes a block of code. One useful way to use it is switching `AWS_PROFILE`, `GOOGLE_APPLICATION_CREDENTIALS`, etc automatically based on the `TS_ENV`. Example:

config/env/dev.rb

```ruby
Terraspace.configure do |config|
  config.hooks.on_boot do
    ENV['AWS_PROFILE'] = 'dev'
  end
end
```
