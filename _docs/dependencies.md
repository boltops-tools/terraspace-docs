---
title: Dependency Graphs
category: top-level
subcategory: dependencies
order: 8
---

If you want to deploy multiple stacks, you can do so with a single command:

    terraspace all up

Here's a demo video:

{% include videos/learn.md
     url="terraspace-fundamentals/lessons/terraspace-all-background-info"
     img="https://learn-uploads.boltops.com/awqvc0tfgo7hs2x0qsstr8nvxi8s" %}

Terraspace calculates the dependency graph and ensures they are deployed in the correct order. Here's a dependency graph example:

![](https://img.boltops.com/boltops/tools/terraspace/dependencies/medium-example-1.png)

{% include dependencies/demo-repo.md %}

{% include dependencies/more-info.md %}
