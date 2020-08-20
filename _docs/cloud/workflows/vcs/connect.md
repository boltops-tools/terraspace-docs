---
title: "VCS Workflow: Connect to VCS"
---

This instructions will focus on GitHub. For other VCS providers, refer to the link in the resources section at the bottom.

## Connect to GitHub

The Terraform Cloud API currently does not seem to offer an way to connect VCS programmatically. So these steps must be done manually per workspace.

1. Select on the **Workspace** you want to connect to VCS.
2. Click on the **Settings** tab.
3. Click the "**Connect to version control**" button.
4. Select **GitHub**.
5. Select the repo with the Terraspace project.
6. Save by clicking on **Update VCS Settings**
7. Change the "Automatic Run Triggering" to **Always trigger run**
8. Save the settings again by clicking on **Update VCS Settings**

Step #7 is important as modules from outside the path that is set can result in changes to the terraform plan.  For example, you can make a change to app/modules/example that app/stacks/demo uses.

## Resources

* Terraform docs for [Github](https://www.terraform.io/docs/cloud/vcs/github-app.html) which this doc is based on.
* Terraform docs for all other [VCS integrations](https://www.terraform.io/docs/cloud/vcs/index.html).
