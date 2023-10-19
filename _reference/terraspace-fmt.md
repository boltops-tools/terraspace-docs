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

Check format of all source files, but don't fix. Examples:

    $ terraspace fmt demo -write=false -list
    $ terraspace fmt demo -check
    $ terraspace fmt -write=false -list

## Some Notes

The `terraspace fmt` will only format terraform source files that do not have any ERB templating logic in it. It will format the files directly in your source code. IE: app/stacks/demo


## Options

```
-t, [--type=TYPE]  # Type: stack, module, or all
                   # Default: all
```

