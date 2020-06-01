---
title: Terraspace Concepts
---

## Up and Down Commands

The `terraspace up` and `terraspace down` commands are how you create infrastructure with Terraspace. The `terraspace up` is ultimately calls `terraform apply` and `terraspace down` calls `terraform destroy`.  Before calling the terraform commands, terraspace does additional processing. For example, terraspace will materialize common source code files from [config/terraform]({% link _docs/config.md %}) along with the deployed module.

{% include intro/modules-vs-stacks.md %}

## Conventions Over Configuration

Terraspace uses Conventions Over Configuration to remove boilerplate setup and mental overhead.  The `app/modules`, `app/stacks`, and `config/terraform` are where you organized your code by convention and it should just work.  You also put [Tfvars]({% link _docs/config/tfvars.md %}) files in conventional folders and Terraspace will automatically use them. The "batteries are included but replaceable" You can override things as necessary.

## Tfvars Layering

Terraspace introduces [Tfvars Layering]({% link _docs/tfvars/layering.md %}). You can use the same infrastructure code with different tfvar files to create multiple environments like dev, prod, uat, stage, etc.  Layering DRYs up the usage of multiple tfvar files. Additionally, Layering allows you to use same infrastructure code to deploy to multiple regions and or accounts.

{% include intro/testing.md %}
