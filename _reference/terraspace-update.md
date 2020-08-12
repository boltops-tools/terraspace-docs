---
title: terraspace update
reference: true
---

## Usage

    terraspace update MODULE

## Description

Update infrasturcture. IE: apply plan

## Examples

    terraspace update MODULE
    terraspace update instance
    terraspace up instance


## Options

```
    [--auto], [--no-auto]        # Auto mode is useful for CI automation. It enables appropriate flags.
    [--init], [--no-init]        # Instance of stack
                                 # Default: true
    [--input], [--no-input]      # Ask for input for variables if not directly set.
i, [--instance=INSTANCE]         # Instance of stack
y, [--yes], [--no-yes]           # -auto-approve the terraform apply
    [--plan=PLAN]                # Execution plan that can be used to only execute a pre-determined set of actions.
    [--var-files=one two three]  # list of var files
    [--verbose], [--no-verbose]  
    [--noop], [--no-noop]        
```

