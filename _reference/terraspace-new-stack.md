---
title: terraspace new stack
reference: true
---

## Usage

    terraspace new stack NAME

## Description

Generates stack.

## Example

    $ terraspace new stack demo
    => Creating new stack called demo.
          create  app/stacks/demo
          create  app/stacks/demo/main.tf
          create  app/stacks/demo/outputs.tf
          create  app/stacks/demo/variables.tf
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

