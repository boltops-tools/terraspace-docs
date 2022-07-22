---
title: New CI
---

{% include videos/learn/cloud/circleci.md %}

We'll use [terraspace new ci]({% link _reference/terraspace-new-ci.md %}) to generate a starter CI folder structure.

    terraspace new ci

Here's an example with output

    $ terraspace new ci
          create  .circleci/bin/install
          create  .circleci/config.yml

A `.circleci/config.yml` was created with a supporting `.circleci/bin` folder. The generated example creates a few starter workflows.

## CircleCI Workflows

There are 3 different workflows.

1. **Main Push Workflow**: Runs when you push a new commit to a `main` target branch.
2. **Branch Push Workflow**: Runs when you push to any other branch aside from `main`.
3. **Manual Workflow**: Runs manually via the Web Console or API.

Next, we'll review these files and their workflows.
