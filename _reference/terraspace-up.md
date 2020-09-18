---
title: terraspace up
reference: true
---

## Usage

    terraspace up STACK

## Description

Deploy infrastructure. IE: terraform apply

## Examples

    terraspace update MODULE
    terraspace update instance
    terraspace up instance


## Options

```
    [--auto], [--no-auto]                # Auto mode is useful for CI automation. It enables appropriate flags.
    [--init], [--no-init]                # Instance of stack
                                         # Default: true
    [--input], [--no-input]              # Ask for input for variables if not directly set.
i, [--instance=INSTANCE]                 # Instance of stack
y, [--yes], [--no-yes]                   # -auto-approve the terraform apply
    [--reconfigure], [--no-reconfigure]  # Add terraform -reconfigure option
    [--plan=PLAN]                        # Execution plan that can be used to only execute a pre-determined set of actions.
    [--var-files=one two three]          # list of var files
    [--verbose], [--no-verbose]          
    [--noop], [--no-noop]                
```

