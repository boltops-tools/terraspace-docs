---
title: terraspace info
reference: true
---

## Usage

    terraspace info STACK

## Description

Get info about stack.

## Example

    $ terraspace info demo
    +-----------+---------------------------------------------+
    |   Name    |                    Value                    |
    +-----------+---------------------------------------------+
    | build_dir | stacks/demo                                 |
    | cache_dir | .terraspace-cache/us-west-2/dev/stacks/demo |
    | name      | demo                                        |
    | root      | app/stacks/demo                             |
    | type      | stack                                       |
    | type_dir  | stacks                                      |
    +-----------+---------------------------------------------+

You can also format the output in json:

    $ terraspace info demo --format json
    [
      {
        "Name": "build_dir",
        "Value": "stacks/demo"
      },
      {
        "Name": "cache_dir",
        "Value": ".terraspace-cache/us-west-2/dev/stacks/demo"
      },
      {
        "Name": "name",
        "Value": "demo"
      },
      {
        "Name": "root",
        "Value": "app/stacks/demo"
      },
      {
        "Name": "type",
        "Value": "stack"
      },
      {
        "Name": "type_dir",
        "Value": "stacks"
      }
    ]


## Options

```
-i, [--instance=INSTANCE]  # Instance of stack
    [--format=FORMAT]      # Output formats: csv, equal, json, markdown, space, tab, table
    [--path=PATH]          # Print path to built path
```

