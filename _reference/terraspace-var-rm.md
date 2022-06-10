---
title: terraspace var rm
reference: true
---

## Usage

    terraspace var rm VAR

## Description

Remove variable.

## Examples

Org and Project level variables:

    terraspace cloud var rm NAME1 --type org --kind environment
    terraspace cloud var rm NAME2 --type project --kind environment

Env and stack level variables:

    terraspace cloud var rm NAME3 --type stack --stack demo --kind environment
    terraspace cloud var rm NAME4 --type env --env dev --kind terraform


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

