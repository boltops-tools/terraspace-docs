---
title: Terraspace Cloud vs Terraform Cloud
nav_text: TSC vs TFC
category: vs
order: 5
---

For those familar with Terraform Cloud, you may wonder what is different between Terraspace Cloud vs Terraform Cloud. IE: TSC vs TFC. Though Terraspace and Terraform Cloud both provide a GUI or website interface to visualize your terraform applies, the two have some pretty large differences.

## Dashboard

Both systems provide a user-friendly dashboard so you can see what stacks have been deployed with it's history.

## Remote Runners

Terraform Cloud provides remote runners to run your `terraform apply`, Terraspace Cloud does not. Instead Terraspace Cloud allows you to bring your own runner or CI systems to the table. There are some pros and cons with this.

Since you bring your own machine with Terraspace Cloud, you have full control over the system. It is also faster, especially when developing from your machine, as you do not have wait for a fresh machine to spin up every time you want to make a small change.

Since you have more control over the CI workflow, you can add your own tool cost analysis, or compliance framework as you wish.

The trade-off is you manage the machine yourself. However, there are plenty of CI providers out there already. You're probably already using one of them. Terraspace helps you integrate with these CI systems like GitHub Actions, GitLab Pipelines, etc. This the same approach Pulumi took to to CI/CD.

## Version Control Workflow

Terraspace also supports TFC and you can use Terraspace directly with TFC. However, if you're using TFC with the version control integration, you have to make sure to commit the `.terraspace-cache` folder and its artifacts.  This is because there's terraspace is a 2nd class citizen in TFC. TFC is not even aware of Terraspace.

With TSC, Terraspace is a first citizen and it's directly integrated with the way Terraspace Cloud works. You do not have to commit any artifacts into your version control, you commit pure and clean source code.

## Backend State Migration

You can keep state with your own current backend. All you do is sign up for an account and enable terraspace cloud configs and you're using Teraspace Cloud. There's no work to migrate state. IE: Moving the backend state from s3 to the tfc remote backend.
