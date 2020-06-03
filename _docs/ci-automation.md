---
title: "Automation: Continuous Integration"
---

You can run Terraspace in continuous integration setup or automated pipeline with tools like Jenkins, [Cody](https://cody.run/) (AWS CodeBuild), etc with some flags. Here's an example:

    terraspace plan demo --auto --out a.plan
    terraspace up demo --auto --plan a.plan

## What does the --auto flag do?

The `--auto` flag tells Terraspace to run an automated and unattended manner.

* Terraspace set the `TF_IN_AUTOMATION=1` env variable, which makes some minor adjustments to Terraform output to de-emphasize specific commands to run as covered by [Running Terraform in Automation](https://learn.hashicorp.com/terraform/development/running-terraform-in-automation).
* In the plan stage, Terraspace sets `-input=false` to when calling `terraform plan` to disable any prompts that may occur.
* In the up stage, terraspace sets `-input=false`, `-auto-approve` and skip the `terraform init` call.

## Consistent plan file

We also use the `--out a.plan` option to write the plan to a file. By using the file in the `terraspace up` command later, it ensures a consistent plan is applied in an automated setting.