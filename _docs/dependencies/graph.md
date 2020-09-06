---
title: Graph Command
nav_text: Graph Command
categories: dependencies
---

You can create a visual dependency graph diagram with:

    terraspace all graph

Let's say that generates this dependency graph:

![](https://img.boltops.com/boltops/tools/terraspace/graphs/complex-a1-full.png)

You can also generate subgraphs with the target nodes highlighted:

    terraspace all graph a2 b2

![](https://img.boltops.com/boltops/tools/terraspace/graphs/complex-a1-highlight-a2-b2.png)

If you would like only to show the subgraph, use the `--no-full` option:

    terraspace all graph a2 b2 --no-full

![](https://img.boltops.com/boltops/tools/terraspace/graphs/complex-a1-no-full-a2-b2.png)

{% include dependencies/demo-repo.md %}

## Text Format

You can also print out the dependencies in a tree text form with the `--format text` option.

    $ terraspace all graph --format text
    a1
    ├── b1
    │   └── c1
    └── b2
        ├── c1
        └── c2
            └── d1
                └── e1
    $