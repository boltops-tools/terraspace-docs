---
title: terraspace new project
reference: true
---

## Usage

    terraspace new project NAME

## Description

Generates new project


## Options

```
[--examples], [--no-examples]              # Also generate examples
[--force]                                  # Bypass overwrite are you sure prompt for existing files.
[--lang=LANG]                              # Language to use: HCL/ERB or Ruby DSL
                                           # Default: hcl
[--plugin=PLUGIN]                          # Cloud Plugin. Supports: aws, google
                                           # Default: aws
[--plugin-gem=PLUGIN_GEM]                  # Useful if provider gem name doesnt follow terraspace_plugin_XXX naming convention
[--bundle], [--no-bundle]                  # Runs bundle install on the project
                                           # Default: true
[--config], [--no-config]                  # Whether or not to generate config files.
                                           # Default: true
[--test-structure], [--no-test-structure]  # Create project bootstrap test structure.
```

