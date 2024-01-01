---
title: New CI
category: ci-github
order: 2
---

{% include videos/learn/cloud/github.md %}

We'll use [terraspace new ci]({% link _reference/terraspace-new-ci.md %}) to generate a starter CI folder structure.

    terraspace new ci

Here's an example with output

    $ terraspace new ci
          create  .github/bin/install
          create  .github/workflows/pull_request.yml
          create  .github/workflows/push.yml
          create  .github/workflows/workflow_dispatch.yml
           chmod  .github/bin/install

A `.github/workflows` folder was created with some starter files.

## GitHub Workflows

There are 3 different workflows.

1. **Push Workflow**: Runs when you push a new commit to a specified branch.
2. **Pull Request**: Runs when you creates a new pull request from a source branch with one or more commits.
3. **Workflow Dispatch**: Runs manually via the web console.

Next, we'll review these files and their workflows.
