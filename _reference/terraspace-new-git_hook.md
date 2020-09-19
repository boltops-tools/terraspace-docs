---
title: terraspace new git_hook
reference: true
---

## Usage

    terraspace new git_hook

## Description

Generates new git hook.

## Example

    $ terraspace new git_hook
          create  .git/hooks/pre-push
           chmod  .git/hooks/pre-push
    $


## Options

```
    [--envs=one two three]  # envs to build
                            # Default: ["dev", "prod"]
t, [--type=TYPE]            # git hook type
                            # Default: pre-push
```

