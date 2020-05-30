---
title: terraspace new module
reference: true
---

## Usage

    terraspace new module NAME

## Description

Generates new module


## Options

```
[--examples], [--no-examples]  # Also generate examples
[--force]                      # Bypass overwrite are you sure prompt for existing files
[--lang=LANG]                  # Language to use: HCL/ERB or Ruby DSL
                               # Default: hcl
[--provider=PROVIDER]          # Cloud Provider. Supports: aws, google
                               # Default: aws
[--provider-gem=PROVIDER_GEM]  # Useful if provider gem name doesnt follow terraspace_provider_XXX naming convention
```

