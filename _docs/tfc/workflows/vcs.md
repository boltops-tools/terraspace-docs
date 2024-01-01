---
title: VCS Workflow
nav_text: VCS
category: tfc-workflows
subcategory: tfc-workflows-vcs
order: 2
---

The VCS workflow involves setting up your version control source provider, like GitHub, so Terraform will automatically run when code is pushed.

## Summary

To use the VCS-driven workflow:

1. Setup Terraform Cloud Workspace Name and Variables
2. Adjust Terraspace Project Settings
3. Connect your VCS to run Terraform on VCS triggers

## 1. Setup Terraform Cloud Workspace Name and Variables

Terraspace can create the TFC workspace and set variables for you.

Instructions: [Setup Workspace Name and Variables]({% link _docs/tfc/workflows/vcs/setup.md %})

## 2. Adjust Terraspace Project Settings

You'll need to adjust some Terraspace git related settings for a decent git workflow.

Instructions: [Adjust Terraspace Project Settings]({% link _docs/tfc/workflows/vcs/adjust.md %})

## 3. Connect your VCS to run Terraform on VCS triggers

Last, you will connect your TFC Workspace to your version control provider.

Instructions: [Connect to VCS]({% link _docs/tfc/workflows/vcs/connect.md %})

## VCS or CLI Workflow Only

Note, when the VCS workflow mode is used, you cannot use the CLI workflow. TFC only allows one or the other.  You will get this error if you try to use the CLI workflow when VCS is connected to your workspace.

> Error: Apply not allowed for workspaces with a VCS connection
>
> A workspace that is connected to a VCS requires the VCS-driven workflow to
    ensure that the VCS remains the single source of truth.

If you want to use the [CLI workflow]({% link _docs/tfc/workflows/cli.md %}), you must disconnect VCS from the workspace.

## Terraspace Extra

[TS_EXTRA]({% link _docs/layering/extra.md %}) is not currently supported with the VCS-Driven workflow.
