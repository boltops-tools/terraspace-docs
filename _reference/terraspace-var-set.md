---
title: terraspace var set
reference: true
---

## Usage

    terraspace var set VAR

## Description

Set variable.

## Examples

Org and Project level variables:

    terraspace cloud var set NAME1 value1 --type org --kind environment
    terraspace cloud var set NAME2 value3 --type project --kind terraform

Env and stack level variables:

    terraspace cloud var set NAME3 value3 --type stack --stack demo --kind environment
    terraspace cloud var set NAME4 value4 --type env --stack dev --kind terraform


## Options

```
k, [--kind=KIND]             # kind: environment or terraform
                             # Default: terraform
    [--env=ENV]              # Env name. Overrides TS_ENV
    [--sensitive=SENSITIVE]  # Whether or not the variable sensitive
    [--stack=STACK]          # Stack name. Only use when level is stack
l, [--level=LEVEL]           # Variable level: deployment, stack, env, project, or org
                             # Default: deployment
```

