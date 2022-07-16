---
title: Branch Push Pipeline
---

Let's take a look at Branch Push Pipeline.  This is what happens when a push is made to any other branch except for `main`. Here's the relevant YAML section.

.azure/pipelines/dev-plan.yml

{% raw -%}
```yaml
trigger:
  branches:
    exclude: [ "main" ] # plan on all branches except main

pool:
  vmImage: ubuntu-latest

# Note: common-variables group must already exist.
variables:
- group: common-variables

steps:
- task: UseRubyVersion@0
  inputs:
    versionSpec: '>= 3.1'

- script: |
    .azure/bin/install
  displayName: install terraspace

- script: |
    export ARM_CLIENT_ID=$(ARM_CLIENT_ID)
    export ARM_CLIENT_SECRET=$(ARM_CLIENT_SECRET)
    export ARM_SUBSCRIPTION_ID=$(ARM_SUBSCRIPTION_ID)
    export ARM_TENANT_ID=$(ARM_TENANT_ID)
    export TS_TOKEN=$(TS_TOKEN)
    # Uncomment export INFRACOST_API_KEY if using cost estimates
    # export INFRACOST_API_KEY=$(INFRACOST_API_KEY)
    terraspace plan demo
  displayName: terraspace plan
```
{% endraw -%}

After the install script, it calls the

    terraspace plan

Essentially, a `terraspace plan` automatically runs for dev infrastructure for every push to any branch other than `main`. This gives a preview of what changes will happen to the dev infrastructure before the branch is merged into `main`.

## Create Pipeline

We'll create a pipeline with the az CLI

    az pipelines create --name dev-plan --yml-path .azure/pipelines/dev-plan.yml --skip-first-run

We skip the first run because we want this pipeline to only run on `git push` on branches **other** than the `main` branch.

## Create Branch and PR

Let's push a code change to a `feature` branch.

    git checkout feature
    vim app/stacks/demo/main.tf
    git add .
    git commit -m "change code"
    git push -u origin feature

We'll see another build.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/branch/build-started.png)

## Logging Details

Click on Details to see the Pipeline Logging output.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/branch/ci-results-output.png)

You can also see the output on Terraspace Cloud:

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/branch/logging-output.png)

A `plan` was run and provides a preview of the changes. Any additional `git push` to the `feature` branch will provide updated previews.

If you merge the branch, the [Push Pipeline]({% link _docs/ci/azure/push.md %}) that we covered earlier will automatically apply the preview.

Let's switch back to the main branch for the next step.

    git checkout main

Next, we'll cover the Manual Pipeline.
