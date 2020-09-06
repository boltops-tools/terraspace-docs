---
title: Terraform Cloud Workflows
---

Terraform Cloud supports [different workflows](https://www.terraform.io/docs/cloud/run/cli.html). Terraspace integrates and supports 2 main workflows:

1. [The CLI-driven Workflow]({% link _docs/cloud/workflows/cli.md %})
2. [The VCS-driven Workflow]({% link _docs/cloud/workflows/vcs.md %})

## Recommendation

Which workflow will work better for me? The CLI-driven or VCS-driven workflow?

Overall, the CLI-driven workflow feels like a smoother experience. However, you should try them both out and see which one you prefer.

Here are some of the reasons why we learn on the CLI-driven workflow over the VCS-driven workflow.

1. Lots of Queued Runs: If you commit a bunch of tiny commits, you'll see a bunch of Queued Plans and Runs. Within each workspace, runs get planned and applied sequentially. This is to because each apply can change the state of the next plan. So you'll have to wait until the all runs are finished or discard the Queued plans. It can get quickly annoying. The `terraspace cloud runs prune` command helps with this, but manually must be ran.
2. Terraform recommends a [workspace per environment per configuration](https://www.terraform.io/docs/cloud/guides/recommended-practices/part1.html). This means either many separate repos or one repo with separate folders for each workspace. You can either create separate Teraspace projects or build all the permutations of the infrastructure code. For the latter, Terraspace recommends automating this with a [pre-push git hook]({% link _docs/cloud/workflows/vcs/adjust.md %}).
3. [Extra setup steps]({% link _docs/cloud/workflows/vcs.md %}): There are some extra setup steps for the VCS-driven workflow.  Among them, you'll should adjust your .gitignore and add a pre-push git hook. There are less extra steps with the [CLI-driven workflow]({% link _docs/cloud/workflows/cli.md %}).
4. Code must be committed to version control: With the VCS-driven workflow, the code must be in version control. Version control is the source of truth. This can be seen as a benefit, but consider this, you are not permitted to run `terraform apply` outside of the VCS-driven workflow at all. If Terraform gets into a funny state that requires manual steps to fix. Each step must be committed.
5. Deploying multiple workspaces and their dependencies is not currently possible. Here's the note from TFC website: "Auto-apply warning: Runs initiated as the result of a run trigger connection will not auto-apply, regardless of your auto-apply setting selection. You will need to manually apply these runs." With the CLI-Driven workflow, we can deploy all stacks with the [terraspace all up]({% link _docs/dependencies/deploy-all.md %}) command.
