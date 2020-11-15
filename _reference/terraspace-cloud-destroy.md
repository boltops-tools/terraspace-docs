---
title: terraspace cloud destroy
reference: true
---

## Usage

    terraspace cloud destroy STACK

## Description

Destroy workspace by specifying the stack

## Example

    $ terraspace cloud destroy demo
    You are about to delete the workspace: demo-dev-us-west-2
    All variables, settings, run history, and state history will be removed.
    This cannot be undone.

    This will NOT remove any infrastructure managed by this workspace.
    If needed, destroy the infrastructure prior to deleting the workspace with:

        terraspace down demo

    This will delete the workspace: demo-dev-us-west-2.
    Are you sure? (y/N) y
    Destroying workspace demo-dev-us-west-2
    $


## Options

```
y, [--yes], [--no-yes]  # bypass are you sure prompt
```

