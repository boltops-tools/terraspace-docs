---
title: terraspace all providers
reference: true
---

## Usage

    terraspace all providers

## Description

Show providers for all or multiple stacks.

## Example

    $ terraspace all providers
    Running:
       terraspace providers c1 # batch 1
       terraspace providers b1 # batch 2
       terraspace providers b2 # batch 2
       terraspace providers a1 # batch 3
    Batch Run 1:
    Running: terraspace providers c1 Logs: log/providers/c1.log
    terraspace providers c1:  └── provider[registry.terraform.io/hashicorp/random]
    Batch Run 2:
    Running: terraspace providers b1 Logs: log/providers/b1.log
    Running: terraspace providers b2 Logs: log/providers/b2.log
    terraspace providers b1:  └── provider[registry.terraform.io/hashicorp/random]
    terraspace providers b2:  └── provider[registry.terraform.io/hashicorp/random]
    Batch Run 3:
    Running: terraspace providers a1 Logs: log/providers/a1.log
    terraspace providers a1:  └── provider[registry.terraform.io/hashicorp/random]
    Time took: 9s
    $


## Options

```
-y, [--yes], [--no-yes]                    # auto approve all batch commands
    [--exit-on-fail], [--no-exit-on-fail]  # whether or not to exit when one of the batch commands fails
```

