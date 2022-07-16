---
title: Main Push Pipeline
---

We'll review the Main Push Pipeline. This is what happens when a push is made to the `main` branch. Here's the relevant YAML section.

.azure/pipelines/dev-up.yml

{% raw -%}
```yaml
trigger:
  - main # once merged into main `terraspace up` runs on dev env

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
    terraspace up demo
  displayName: terraspace up
```
{% endraw -%}

## Pipeline Scripts

The `trigger: ["main"]` tells Azure to run this pipeline whenever there's a commit pushed to `main`. The `pool` specifies the VM image to use. In this case: Ubuntu.

The `steps` section contains the meat of the logic. The [Azure Pipelines YAML Schema](https://docs.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/steps?view=azure-pipelines) docs are useful.

In the first step, we use a task to install Ruby. Some pre-built tasks are provided by Azure or even 3rd parties.

We then use two `script` steps to run bash scripts. The first script calls the supporting `install` script. The script looks something like this. We're sumarizing it for clarity.

.azure/bin/install

    #!/bin/bash

    # install terraform
    git clone https://github.com/tfutils/tfenv.git ~/.tfenv
    export PATH="$HOME/.tfenv/bin:$PATH"
    tfenv install latest
    tfenv use latest
    terraform --version

    # install terraspace
    bundle install
    terraspace --version

The script installs terraspace and dependencies like terraform.

The second script step exports some required env variables and then calls

    terraspace up demo -y

Essentially, `terraspace up` will automatically run for dev infrastructure for every push to `main`.

{% include ci/push.md name="Azure" %}

## Creating the Pipeline with the Azure Portal

To create the pipeline:

1. Click on the **New Pipeline** Button. Note, if you don't have any pipelines yet, there'll be another button that says something like "Create First Pipeline" instead.
2. For "Where is your code", select **Azure Repos Git**
3. Choose the Repo with your code. In the example shown below, it's called infra-ci, yours will be different.
4. For "Configure Your Pipeline", select **Existing Azure Pipelines YAML file**
5. Select an existing YAML file, choose the `/.azure/pipelines/dev-up.yml` file
6. Then click **Run**
7. It is useful to rename the pipeline right away to something better. Rename it to **dev-up**
8. Click on the pipeline to see the logs

Here's the **New Pipeline** button.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/push/pipeline-new-button.png)

Where's your code.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/push/pipeline-wheres-your-code.png)

Choose the Repo with your code.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/push/pipeline-select.png)

Select **Existing Azure Pipelines YAML file**.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/push/pipeline-existing-yaml.png)

Select existing YAML file `/.azure/pipelines/dev-up.yml`.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/push/pipeline-select-dev-up.png)

Click **Run**

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/push/pipeline-run.png)

Here's the rename button.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/push/pipeline-rename-button.png)

Here's the rename form.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/push/pipeline-rename-form.png)

Here are the logs.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/push/pipeline-logs.png)

The logs show that a `random_pet` resource was created. 🐶🎉

## Creating the Pipeline with the az cli

Tip: You can also create the pipeline with the `az` CLI

    az devops configure --defaults project=REPLACE_WITH_PROJECT
    az pipelines create --name dev-up --yml-path .azure/pipelines/dev-up.yml # starts pipeline immediately

Next, we'll look at the Branch Pipeline.
