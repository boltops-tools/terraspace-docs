---
title: terraspace runs prune
reference: true
---

## Usage

    terraspace runs prune STACK

## Description

Prune runs that are possible to cancel or discard.

This leaves the top run alone. The top run usually starts immediately planning once the other runs are pruned. Runs that are also in "Needs Confirmation" will be cancelled.

## Examples

    terraspace tfc runs prune demo --noop
    terraspace tfc runs prune demo # live run

## Example with Output

    $ terraspace tfc runs prune demo
    Will keep:

        run-9muMrjrd22vhsP4u pending test 2020-09-18T12:47:11

    Will prune:

        run-fYTDzmKfCQf558UN pending test 2020-09-18T12:46:34
        run-6bgSTattJGpaRn9X pending test 2020-09-18T12:46:28
        run-jDHEtZb3vuFnuXqJ planned test 2020-09-18T12:38:35

    Are you sure? (y/N) y
    Cancelled run-fYTDzmKfCQf558UN test
    Cancelled run-6bgSTattJGpaRn9X test
    Discarded run-jDHEtZb3vuFnuXqJ test
    $


## Options

```
   [--noop], [--no-noop]  # Shows what would be cancelled/discarded.
y, [--yes], [--no-yes]    # bypass are you sure prompt
```

