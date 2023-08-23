---
title: terraspace new arg
reference: true
---

## Usage

    terraspace new arg NAME

## Description

Generates arg.

## Examples

Project-level arg:

    $ terraspace new arg --type project
          create  config/args
          create  config/args/terraform.rb

Stack-level arg:

    $ terraspace new arg demo --type stack
          create  app/stacks/demo/config/args
          create  app/stacks/demo/config/args/terraform.rb

Module-level arg:

    $ terraspace new arg example --type module
          create  app/modules/example/config/args
          create  app/modules/example/config/args/terraform.rb


## Options

```
y, [--force]      # Bypass overwrite are you sure prompt for existing files
   [--name=NAME]  # command name
                  # Default: apply
   [--type=TYPE]  # project, stack or module
                  # Default: project
```

