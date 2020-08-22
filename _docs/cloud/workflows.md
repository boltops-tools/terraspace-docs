---
title: Terraform Cloud Workflows
---

Terraform Cloud supports [different workflows](https://www.terraform.io/docs/cloud/run/cli.html). Terraspace integrates and supports 2 main workflows:

1. [The CLI-driven Workflow]({% link _docs/cloud/workflows/cli.md %})
2. [The VCS-driven Workflow]({% link _docs/cloud/workflows/vcs.md %})

## Recommendation

Which workflow will work better for me? The CLI-driven or VCS-driven workflow?

Overall, the CLI-driven workflow feels like a smoother experience and is recommended. However, you should try them both out and see which one you prefer.

Here are some of the reasons why the CLI-driven workflow is recommended over the VCS-driven workflow.

1. Manual setup of VCS integration: The [VCS connection]({% link _docs/cloud/workflows/vcs/connect.md %}) must be set up manually. There seems to be no Terraform Cloud API to configure this in a more automated fashion to make the experience smoother. If you have lots of workspaces, it's an extra manual step for each workspace.
2. Lots of Queued Runs: If you commit a bunch of tiny commits, you'll see a bunch of Queued Plans and Runs. Within each workspace, runs get planned and applied sequentially. This is to because each apply can change the state of the next plan. So you'll have to wait until the all runs are finished or discard the Queued plans. It can get quickly annoying.
3. Extra setup steps: There are some extra setup steps for the VCS-driven workflow. You'll need to adjust your .gitignore and should probably add a pre-push git hook among them. You don't really have to do any of these extra steps with the [CLI-driven workflow]({% link _docs/cloud/workflows/cli.md %}).
4. Code must be committed to version control: With the VCS-driven workflow, the code must be in version control. Version control is the source of truth. This can seen as a benefit. But consider that you are not permitted to terraform apply outside of the VCS-driven workflow at all. Terraform also recommends a [workspace per environment per configuration](https://www.terraform.io/docs/cloud/guides/recommended-practices/part1.html). This means either many separate repos or one repo with separate folders for each workspace. You must build all the permutations of the infrastructure code. Terraspace recommends automating this with a [pre-push git hook]({% link _docs/cloud/workflows/vcs/adjust.md %}).
