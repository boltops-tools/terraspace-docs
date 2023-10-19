---
title: terraspace all graph
reference: true
---

## Usage

    terraspace all graph

## Description

Draw a dependency graph.

## Example

    $ terraspace all graph
    Building graph...
    Graph saved to .terraspace-cache/graph/dependencies-20200919192103.png
    $

The graph will auto-open on macosx and cloud9.

![](https://img.boltops.com/boltops/tools/terraspace/graphs/example-a1.png)

## Text Form

You can also generate a graph in text, tree-like form

    $ terraspace all graph --format text
    a1
    ├── b2
    │   └── c1
    └── b1
        └── c1


## Options

```
    [--format=FORMAT]                      # format: text or diagram
                                           # Default: png
    [--full], [--no-full]                  # draw the full graph with highlighted nodes or draw the subgraph. text format defaults to false, graph format defaults to true
-y, [--yes], [--no-yes]                    # auto approve all batch commands
    [--exit-on-fail], [--no-exit-on-fail]  # whether or not to exit when one of the batch commands fails
```

