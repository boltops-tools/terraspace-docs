---
title: terraspace new stack
reference: true
---

## Usage

    terraspace new stack NAME

## Description

Generates new stack


## Options

```
    [--examples], [--no-examples]  # Also generate examples
    [--force]                      # Bypass overwrite are you sure prompt for existing files
    [--lang=LANG]                  # Language to use: HCL/ERB or Ruby DSL
                                   # Default: hcl
p, [--plugin=PLUGIN]               # Cloud Plugin. Supports: aws, google
                                   # Default: aws
    [--test], [--no-test]          # Whether or not to generate tests
    [--plugin-gem=PLUGIN_GEM]      # Use if provider gem name doesnt follow terraspace_plugin_XXX naming convention. Must specify both --plugin and --plugin-name option
```

