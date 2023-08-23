---
title: terraspace new helper
reference: true
---

## Usage

    terraspace new helper NAME

## Description

Generates helper.

## Project Examples

Conventionally name the helper custom.

    $ terraspace new helper custom --type project
          create  config/helpers
          create  config/helpers/custom_helper.rb

## Stack Examples

Conventionally name the helper to be the same as the stack name.

    $ terraspace new helper demo --type stack
          create  app/stacks/demo/config/helpers
          create  app/stacks/demo/config/helpers/demo_helper.rb
    $

Explictly name helper method. IE: custom here.

    $ terraspace new helper demo --type stack --name custom
          create  app/stacks/demo/config/helpers
          create  app/stacks/demo/config/helpers/custom_helper.rb
    $

## Module Examples

Conventionally name the helper to be the same as the module name.

    $ terraspace new helper example --type module
          create  app/module/example/config/helpers
          create  app/module/example/config/helpers/example_helper.rb
    $

Explictly name helper method. IE: custom here.

    $ terraspace new helper example --type module --name custom
          create  app/module/example/config/helpers
          create  app/module/example/config/helpers/custom_helper.rb
    $


## Options

```
y, [--force]      # Bypass overwrite are you sure prompt for existing files
   [--name=NAME]  # Helper name used for the filename. Defaults to the project, module or stack name
   [--type=TYPE]  # project, stack or module
                  # Default: project
```

