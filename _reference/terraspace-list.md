---
title: terraspace list
reference: true
---

## Usage

    terraspace list

## Description

List stacks and modules.

## Examples

List both modules and stacks.

    $ terraspace list
    app/modules/example
    app/stacks/demo
    $

List only stacks.

    $ terraspace list -t stack
    app/stacks/demo
    $

List only modules.

    $ terraspace list -t module
    app/modules/example
    $


## Options

```
t, [--type=TYPE]                # Type: stack, module, or all
                                # Default: all
   [--verbose], [--no-verbose]  
   [--noop], [--no-noop]        
```

