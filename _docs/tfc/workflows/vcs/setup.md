---
title: "VCS Workflow: Setup"
---

Terraspace can create the TFC workspace and set variables for you. Terraspace uses the backend.tf for the workspace name.

## Summary

1. Workspace Name
2. TFC Variables
3. Run Setup Command

## 1. Workspace Name

```hcl
terraform {
  backend "remote" {
    organization = "ORG" # replace with your terraform cloud account org
    workspaces {
      name = "<%= expansion(':MOD_NAME-:ENV-:REGION-:INSTANCE') %>"
    }
  }
}
```

Note: With the VCS-driven workflow backend.tf is ignored by TFC, since TFC manages it for you. Terraspace only uses backend.tf for the workspace name.

## 2. TFC Variables

You can configure Terraform Cloud Variables with either JSON or a DSL:

* [Terraform Cloud Vars JSON]({% link _docs/tfc/vars/json.md %})
* [Terraform Cloud Vars DSL]({% link _docs/tfc/vars/dsl.md %})

## 3. Run Setup Command

Run the setup command:

    terraspace cloud setup

Terraspace automatically creates the TFC workspace and variables.

Note, you can also always create the workspace and set up the TFC variables manually if preferred.
