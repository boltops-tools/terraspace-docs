---
title: Manual Pipeline
---

The Manual Pipeline is a generalized pipeline designed to be run manually so a human can review the changes.  We'll use it to apply the changes to production. Let's take a look at it.

.azure/pipelines/manual.yml

{% raw -%}
```yaml
trigger: none # only manual trigger

parameters:
- name: command
  displayName: Terraspace command to run
  type: string
  default: plan demo
  values:
  - plan demo
  - up demo
  - down demo
- name: TS_ENV
  displayName: Terraspace env
  type: string
  default: prod
  values:
  - dev
  - prod

pool:
  vmImage: ubuntu-latest

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
    export TS_ENV=${{ parameters.TS_ENV }}
    # Uncomment export INFRACOST_API_KEY if using cost estimates
    # export INFRACOST_API_KEY=$(INFRACOST_API_KEY)
    terraspace ${{ parameters.command }} -y
  displayName: run terraspace

```
{% endraw -%}

## Pipeline Parameters

This pipeline is generalized. It has `command` and `TS_ENV` pipeline parameters that allows you to run any command on any environment. It defaults to a `terraspace plan` on `TS_ENV=prod`.

## Create the Pipeline with the az cli

We'll create the pipeline with the az CLI.

    az pipelines create --name manual --yml-path .azure/pipelines/manual.yml --skip-first-run

We're skipping the first run so we can kick it off manually.

## Run Pipeline with the Dashboard

Select the **manual** pipeline and click **Run Pipeline**

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/manual/run-pipeline-button.png)

Fill out the form. As you can see this is a generalized pipeline with plenty of control with the parameters.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/manual/run-pipeline-form-v2.png)

We'll do a plan here:

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/manual/terraspace-logs-v2.png)

When we're ready to deploy the changes, we can run the pipeline again selecting the `command="up demo"`.

## Run Pipeline with CLI

Tip: If you're repeatedly testing, running the pipeline via the Azure CLI is useful. Here's the command:

    az pipelines run --name manual --parameters TS_ENV=prod command="plan demo"

Next, we'll review what we learned.
