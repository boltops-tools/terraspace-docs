---
title: terraspace new example
reference: true
---

## Usage

    terraspace new example [NAME]

## Description

Generates example.

## Example

    $ terraspace new example
    => Creating new module called example
          create  app/modules/example
          create  app/modules/example/main.tf
          create  app/modules/example/outputs.tf
          create  app/modules/example/variables.tf
    => Creating new stack called demo
          create  app/stacks/demo
          create  app/stacks/demo/main.tf
          create  app/stacks/demo/outputs.tf
          create  app/stacks/demo/variables.tf
    $


## Options

```
f, [--force]          # Force overwrite
   [--lang=LANG]      # Language to use: HCL/ERB or Ruby DSL
                      # Default: hcl
p, [--plugin=PLUGIN]  
```

