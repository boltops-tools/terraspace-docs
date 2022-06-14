---
title: New CI
---

We'll use [terraspace new ci]({% link _reference/terraspace-new-ci.md %}) to generate a starter CI folder structure.

    terraspace new ci

Here's an example with output.

    $ terraspace new ci
          create  .gitlab-ci.yml

A `.gitlab-ci.yml` was created.

## GitLab Pipelines

With GitLab, we can use the same file to create different pipelines.

1. **Push Workflow**: Runs when you push a new commit to a branch. This is the default pipeline type. GitLab calls it a "Branch pipeline".
2. **Merge Request**: Runs when you creates a new merge request from a source branch with one or more commits. This is like a GitHub Pull Request.
3. **Manual Web pipeline**: Runs manually via the web console.

All pipelines are defined with in the same `.gitlab-ci.yml` file. Keep this in mind as we review the pipelines. Next, we'll review `.gitlab-ci.yml`.
