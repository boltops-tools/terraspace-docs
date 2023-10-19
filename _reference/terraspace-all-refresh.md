---
title: terraspace all refresh
reference: true
---

## Usage

    terraspace all refresh

## Description

Refresh all or multiple stacks.

## Example

    $ terraspace all refresh
    Running:
       terraspace refresh c1 # batch 1
       terraspace refresh b1 # batch 2
       terraspace refresh b2 # batch 2
       terraspace refresh a1 # batch 3
    Batch Run 1:
    Running: terraspace refresh c1 Logs: log/refresh/c1.log
    Batch Run 2:
    Running: terraspace refresh b1 Logs: log/refresh/b1.log
    Running: terraspace refresh b2 Logs: log/refresh/b2.log
    Batch Run 3:
    Running: terraspace refresh a1 Logs: log/refresh/a1.log
    Time took: 11s
    $


## Options

```
-y, [--yes], [--no-yes]                    # auto approve all batch commands
    [--exit-on-fail], [--no-exit-on-fail]  # whether or not to exit when one of the batch commands fails
```

