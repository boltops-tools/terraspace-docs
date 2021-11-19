---
title: terraspace fmt
reference: true
---

## Usage

    terraspace fmt

## Description

Run terraform fmt

## Example

Format all source files.

    $ terraspace fmt
    Formating terraform files
    app/modules/example
    main.tf
    outputs.tf
    variables.tf
    app/stacks/demo
    main.tf

Format specific module or stack.

    $ terraspace fmt stack1
    $ terraspace fmt module1 -t module

Format scoping to module or stack types. In case there's a module and stack with the same name.

    $ terraspace fmt example -t module
    $ terraspace fmt demo -t stack

Format all, so both modules and stacks:

    $ terraspace fmt -t all


## Options

```
t, [--type=TYPE]                 # Type: stack, module, or all
                                 # Default: all
    [--verbose], [--no-verbose]  
    [--noop], [--no-noop]        
```

