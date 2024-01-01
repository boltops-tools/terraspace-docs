---
title: New CI
category: ci-azure
order: 2
---

{% include videos/learn/cloud/azure.md %}

We'll use [terraspace new ci]({% link _reference/terraspace-new-ci.md %}) to generate a starter CI folder structure.

    terraspace new ci

Here's an example with output

    $ terraspace new ci
          create  .azure/bin/install
          create  .azure/pipelines/dev-plan.yml
          create  .azure/pipelines/dev-up.yml
          create  .azure/pipelines/manual.yml

A `.azure` folder was created with a supporting a few starting pipelines in `.azure/pipelines` folder. A supporting `bin/install` file was also created.

## Azure Pipelines

There are 3 different pipelines.

1. **Main Push Pipeline**: Runs when you push a new commit to a `main` target branch.
2. **Branch Push Pipeline**: Runs when you push to any other branch aside from `main`.
3. **Manual Pipeline**: Runs manually via the Web Console.

Next, we'll review these files and their pipelines.
