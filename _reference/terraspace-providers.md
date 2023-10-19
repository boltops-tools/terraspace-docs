---
title: terraspace providers
reference: true
---

## Usage

    terraspace providers STACK

## Description

Show providers.

## Example

    $ terraspace providers demo
    => terraform providers

    Providers required by configuration:
    .
    ├── provider[registry.terraform.io/hashicorp/random]
    └── module.bucket
        └── provider[registry.terraform.io/hashicorp/aws]

    Providers required by state:

        provider[registry.terraform.io/hashicorp/aws]

        provider[registry.terraform.io/hashicorp/random]

    $


## Options

```
-i, [--instance=INSTANCE]  # Instance of stack
```

