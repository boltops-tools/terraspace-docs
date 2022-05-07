---
title: New CI
---

We'll use [terraspace new ci]({% link _reference/terraspace-new-ci.md %}) to generate a starter CI folder structure.

    terraspace new ci

Here's an example with output.

    $ terraspace new ci
          create  .bitbucket/bin/install
          create  .bitbucket/bin/terraspace
          create  bitbucket-pipelines.yml

A `bitbucket-pipelines.yml` and some supporting files were created.

## Bitbucket Pipelines

With Bitbucket, we can use the same file to create different pipelines.

1. **Branch pipeline**: Runs when you push a new commit to a branch. This is the default pipeline type.
2. **Pull request pipeline**: Runs when you creates a new Pull Request is created or pushed.
3. **Custom manual pipeline**: Runs manually via the web console.

All pipelines are defined with the same `bitbucket-pipelines.yml` file. Keep this in mind as we review the pipelines. Next, we'll review the pipelines.
