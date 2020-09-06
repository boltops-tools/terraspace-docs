---
title: "Complex Graphs, Subgraphs, and Subtrees"
nav_text: Subgraphs
categories: dependencies
---

Let's say you have a more complex dependency graph. Here's an example:

![](https://img.boltops.com/boltops/tools/terraspace/graphs/complex-a1-full.png)

## Filtering Subgraphs

If would like to deploy just part the infrastructure, you can filter for subgraphs or subtrees.

    terraspace all up STACKS

This allows you to target specific components of your infrastructure.

## Examples

    $ terraspace all up a2
    Will run:
        terraspace up c1 # batch 1
        terraspace up c3 # batch 1
        terraspace up b3 # batch 2
        terraspace up a2 # batch 3
    Are you sure? (y/N)

Terraspace calculates the dependency graph, filters for the subtree, and then deploys the stack in the right order. The green nodes represent stacks that will be deployed.

![](https://img.boltops.com/boltops/tools/terraspace/graphs/complex-a1-highlight-a2.png)

You can also specify multiple stacks to target.

    $ terraspace all up a2 b2
    Will run:
        terraspace up c1 # batch 1
        terraspace up c3 # batch 1
        terraspace up e1 # batch 1
        terraspace up b3 # batch 2
        terraspace up d1 # batch 2
        terraspace up a2 # batch 3
        terraspace up c2 # batch 3
        terraspace up b2 # batch 4
    Are you sure? (y/N)

![](https://img.boltops.com/boltops/tools/terraspace/graphs/complex-a1-highlight-a2-b2.png)

The targeted stacks is a new subgraph represented by the green nodes.

{% include dependencies/demo-repo.md %}

## Regular Up Commands

If you need further control of the deployment, you can always drop down to the regular up commands. IE:

    terraspace up b2
    terraspace up b3

You get the best of both worlds. You can automatically deploy the entire infrastructure with a single command. If necessary, you can also drop down and deploy individual stacks.
