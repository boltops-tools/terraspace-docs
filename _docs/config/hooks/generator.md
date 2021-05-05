---
title: Hook Generator
nav_text: Generator
categories: hooks
order: 5
---

To help you get started quickly, you can generate starter hook code. Here are some examples:

## Cheatsheet

    terraspace new hook --type project
    terraspace new hook demo --type stack
    # specify the kind
    terraspace new hook demo --type stack --kind terraform # default to terraform

## Project

    $ terraspace new hook --type project
          create  config/hooks
          create  config/hooks/terraform.rb

Produces:

config/hooks/terraform.rb

```ruby
before("apply",
  execute: "echo 'config/hooks/terraform.rb: test project before hook for terraform apply'",
)

after("apply",
  execute: "echo 'config/hooks/terraform.rb: test project after hook for terraform apply'"
)
```

## Stack

    $ terraspace new hook demo --type stack
          create  app/stacks/demo/config/hooks
          create  app/stacks/demo/config/hooks/terraform.rb

Produces:

app/stacks/demo/config/hooks/terraform.rb

```ruby
before("apply",
  execute: "echo 'app/stacks/demo/config/hooks/terraform.rb: test stack before hook for terraform apply'",
)

after("apply",
  execute: "echo 'app/stacks/demo/config/hooks/terraform.rb: test stack after hook for terraform apply'"
)
```

Here's an example specifying the `kind` option.

    $ terraspace new hook demo --type stack --kind terraspace
           exist  app/stacks/demo/config/hooks
          create  app/stacks/demo/config/hooks/terraspace.rb

Produces:

app/stacks/demo/config/hooks/terraspace.rb

```ruby
before("build",
  execute: "echo 'app/stacks/demo/config/hooks/terraspace.rb: test stack before hook for terraspace build'",
)

after("build",
  execute: "echo 'app/stacks/demo/config/hooks/terraspace.rb: test stack after hook for terraspace build'"
)
```

## Module

    $ terraspace new hook example --type module
          create  app/modules/example/config/hooks
          create  app/modules/example/config/hooks/terraform.rb


Produces:

app/modules/example/config/hooks/terraform.rb

```ruby
before("apply",
  execute: "echo 'app/modules/example/config/hooks/terraform.rb: test module before hook for terraform apply'",
)

after("apply",
  execute: "echo 'app/modules/example/config/hooks/terraform.rb: test module after hook for terraform apply'"
)
```