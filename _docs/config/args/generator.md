---
title: Arg Generator
nav_text: Generator
categories: args
order: 9
---

To help you get started quickly, you can generate starter arg code. Here are some examples:

## Cheatsheet

    terraspace new arg --type project
    terraspace new arg demo --type stack

## Project

    $ terraspace new arg --type project
          create  config/hooks
          create  config/hooks/terraform.rb

Produces:

config/hooks/terraform.rb

```ruby
command("apply",
  args: ["-lock-timeout=22m"],
)
```

## Stack

    $ terraspace new arg demo --type stack
          create  app/stacks/demo/config/hooks
          create  app/stacks/demo/config/hooks/terraform.rb

## Module

    $ terraspace new arg example --type module
          create  app/modules/example/config/hooks
          create  app/modules/example/config/hooks/terraform.rb
