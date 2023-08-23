---
title: terraspace seed
reference: true
---

## Usage

    terraspace seed STACK

## Description

Build starer seed tfvars file.

## Example

    $ terraspace seed demo
    Seeding tfvar files for demo
    Reading: .terraspace-cache/us-west-2/dev/stacks/demo/variables.tf
          create  app/stacks/demo/tfvars/dev.tfvars
    $


## Options

```
y, [--yes], [--no-yes]          # bypass prompts and force overwrite files
   [--where=WHERE]              # where to create file. either under app or seed folder structure. values: seed or stack
   [--init], [--no-init]        # Whether or not to run init
                                # Default: true
i, [--instance=INSTANCE]        # Instance of stack
   [--verbose], [--no-verbose]  
   [--noop], [--no-noop]        
```

