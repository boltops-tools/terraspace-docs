---
title: New CI
---

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

Next, we'll review these files and their workflows.
