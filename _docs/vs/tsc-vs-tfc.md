---
title: Terraspace Cloud vs Terraform Cloud
nav_text: TSC vs TFC
category: vs
order: 5
---

Both Terraform Cloud and Terraspace Cloud are optional paid managed services. Both both provide a Team-based permissions, History tracking, and GUI interface. What makes them different is that Terraspace Cloud is designed specifically for the Terraform Framework.

## Dashboard

Both services provide a user-friendly dashboard to see what stacks have been historically deployed. In Terraspace Cloud, the deployments are called stacks, and applies are called updates:

![](https://img.boltops.com/images/terraspace/cloud/stacks/stack-updates-v3.png)

In the Terraform Cloud, deployments are called workspaces, and applies are called runs.

![](https://img.boltops.com/images/terraspace/cloud/stacks/terraform-runs.png)

A difference is that with Terraspace, you don't have to create the stack ahead of time like you have to do Terraform Cloud workspaces. With Terraspace, you codify things like tfvars and reference secrets and deploy. Terraspace simply creates the stacks as needed. There's less manual work.

## Team Management

Both services provide a Team-based management and permissions system. Terraform Cloud permissions are [focused on workspaces](https://www.terraform.io/cloud-docs/users-teams-organizations/permissions). Generally, admins grant permissions to teams on a per-workspace basis.

Terraspace Cloud permissions work more naturally. You define permissions and specify which projects, envs, and stacks the team will have permissions to. Terraspace Cloud Team-based permissions are more dynamic and powerful in this way. Here's an example.

![](https://img.boltops.com/images/terraspace/cloud/stacks/terraform-runs.png)

Since Terrapace provides the ability to dynamically build terraform projects and deploy them, it makes sense for a permission system with more power. The `envs: dev` in the permission means that users in the dev team only have access to `TS_ENV=dev` stacks. You can finely control the permissions based on variables. Terraspace Cloud Permissions system was explicitly designed for Terraspace.

## Version Control Workflow

Terraspace also supports TFC, and you can use Terraspace directly with TFC. However, if you're using TFC with the version control integration, you have to make sure to commit the `.terraspace-cache` folder and its artifacts.  This is awkward but must be done since Terraform Cloud doesn't allow you to run arbitrary commands like `terraspace up`.

With TSC, Terraspace is naturally integrated with the way Terraspace Cloud works. You do not have to commit any artifacts into your version control, you commit pure and clean source code. Your CI/CD process calls `terraspace up` directly. Docs: [CI/CD]({% link _docs/ci.md %}).

## CI/CD Approach

Terraform Cloud provides remote runners to run your `terraform apply`, Terraspace Cloud does not. Instead, Terraspace Cloud allows you to bring your own runner or CI systems to the table. Terraspace helps you integrate with CI systems like GitHub Actions, GitLab Pipelines, etc. This the same approach Pulumi took to CI/CD.

Since you bring your own machine with Terraspace Cloud, you have **full** control over the system. Since you have more control over the CI workflow, you can add your own tool cost analysis, or compliance framework as you wish. It is also faster, especially when developing from your machine, as you do not have to wait for the overhead of a new VM machine to spin up for every small change. Terraspace Cloud simply records the plans and updates.

![](https://img.boltops.com/images/terraspace/cloud/stacks/github-ci.png)

## Backend State Control

You can keep state with your current backend. All you do is enable terraspace `config.cloud` settings, run `terraspace up`, and you're using Teraspace Cloud. There's no work to migrate things like moving the backend state from s3 to the tfc remote backend.

## Summary

Though Terraform Cloud and Terraspace Cloud seem similar, they are quite different. Terraspace Cloud directly with the Terraspace framework. It provides extra features like Team Management, Permissions, History, and a GUI visual interface to Terraspace in a natural way.