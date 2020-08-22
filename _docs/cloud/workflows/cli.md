---
title: CLI Workflow
---

The [CLI workflow](https://www.terraform.io/docs/cloud/run/cli.html) is nice this because it offers the best of both worlds. You get to use the familiar CLI. At the same time, the `terraform apply` runs remotely in a throwaway virtual machine. So you get a consistent environment.

## Summary

To use the CLI-driven workflow:

1. Configure backend.tf with the remote backend
2. Configure Terraform Cloud Variables
3. Use the CLI to deploy as normal

## 1. Configure backend.tf with the remote backend

To use Terraform Cloud, we configure the backend to "remote".

Instructions: [Terraform Cloud Backend]({% link _docs/cloud/backend.md %})

## 2. Configure Terraform Cloud Variables

{% include cloud/vars-intro.md %}

## 3. Use the CLI to deploy as normal

Then it's just running the same CLI as you would normally run

    terraspace up demo

Terraspace detects that TFC is configured, automatically creates the workspace, configures it, and runs terraform remotely.

Note, if your TFC user does not have permission to create the workspace, then contact your admin to precreate the workspace ahead of time.

{% include cloud/recommendations.md %}
