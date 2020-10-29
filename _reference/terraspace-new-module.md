---
title: terraspace new module
reference: true
---

## Usage

    terraspace new module NAME

## Description

Generates new module.

## Example

    $ terraspace new module example
    => Creating test for new module: example
          create  app/modules/example
          create  app/modules/example/main.tf
          create  app/modules/example/outputs.tf
          create  app/modules/example/variables.tf
    $


## Options

```
    [--examples], [--no-examples]  # Also generate examples
y, [--force]                       # Bypass overwrite are you sure prompt for existing files
    [--lang=LANG]                  # Language to use: HCL/ERB or Ruby DSL
                                   # Default: hcl
p, [--plugin=PLUGIN]               # Cloud Plugin. Supports: aws, google
                                   # Default: aws
    [--test], [--no-test]          # Whether or not to generate tests
    [--plugin-gem=PLUGIN_GEM]      # Use if provider gem name doesnt follow terraspace_plugin_XXX naming convention. Must specify both --plugin and --plugin-name option
```

