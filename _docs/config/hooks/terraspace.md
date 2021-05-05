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

{% include config/hooks/generator.md %}

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

## Boot Hooks

If you need to hook into the Terraspace boot process super-early on, check out [Boot Hook]({% link _docs/config/boot.md %}).

{% include config/hooks/context.md %}
