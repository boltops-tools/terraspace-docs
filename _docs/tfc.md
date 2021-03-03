---
title: Terraform Cloud Support
---

Terraspace supports Terraform Cloud and Terraform Enterprise. Terraform Enterprise is essentially the same software that runs Terraform Cloud.  One of the main differences:

* TFE runs on your private machines in your cloud provider account.
* TFC runs in a multi-tenancy shared cloud.

Generally, we'll use Terraform Cloud to cover both TFC and TFE. When needed, we'll explicitly note the TFC or TFE specific features.

With Terraform Cloud you get:

* Terraform runs on a remote virtual machine. Normally, Terraform runs on your local computer.
* The state file is managed by Terraform Cloud.
* You also get a web UI console with plans, applies, and history.

{% include tfc/recommendations.md %}

When using Terraform Cloud with Terraspace, Terraspace provides additional conveniences to make it easier to use Terraform Cloud Workspaces. For example, when you set up multiple Terraform Cloud Workspaces, you often repeatedly set up common workspace Terraform Variables and Environment Variables. Terraspace supports automating much of this process.

In the next sections, we'll cover some of the conveniences and how to set up Terraspace with Terraform Cloud.

* [Backend]({% link _docs/tfc/backend.md %}): Configure Terraspace to use Terraform Cloud.
* [Config]({% link _docs/tfc/config.md %}): Adjust how Terraspace updates the Terraform Cloud Variables.
* [Vars JSON]({% link _docs/tfc/vars/json.md %}): Set Terraform Cloud Workspace vars automatically with JSON file.
* [Vars DSL]({% link _docs/tfc/vars/dsl.md %}): Set Terraform Cloud Workspace vars automatically with DSL file.
