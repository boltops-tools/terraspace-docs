---
title: "Terraspace Automation: Continous Integration"
---

You can run Terraspace in continuous integration setup or automated pipeline with tools like Jenkins, [Cody](https://cody.run/) (AWS CodeBuild), etc with some flags. Here's an example:

    export TF_IN_AUTOMATION=1
    terraspace plan demo --input false --out a.plan
    terraspace up demo --input false --plan a.plan -y --no-init

## Env Variable

First, we export the `TF_IN_AUTOMATION` variable, which makes some minor adjustments to its output to de-emphasize specific commands to run as covered by [Running Terraform in Automation](https://learn.hashicorp.com/terraform/development/running-terraform-in-automation).

## Plan Stage

In the plan stage we use the `--input false` to disable any terraform prompts that may occur. We also use the `--out a.plan` option to write the plan to a file. We will later use this plan file to ensure that a consistent plan is applied.

## Up Stage

In the final stage, we use `terraspace up` with the `--plan a.plan` option to specify the plan. We also use the `-y` to so we won't be prompted for approval. Finally, we use the `--no-init` so that Terraspace won't run `terraform init`.