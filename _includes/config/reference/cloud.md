cloud.cost.enabled | Enable [Cost Estimates]({% link _docs/cloud/cost-estimation.md %}). See how much your infrastructure costs. | false
cloud.project | Terraspace Cloud Project name. This is optional. | main
cloud.org | Terraspace Cloud org name | This is required to use Terraspace Cloud. You can also set this with the `TS_ORG` env var. |
cloud.record | Whether or not to record only changes for reduced noise or record all `terraspace plan`, `terraspace up`, `terraspace down`.  Examples: changes or all | changes
cloud.stack | Terraspace Cloud stack name. This must be unique per stack you want to keep separate state for. | :APP-:ROLE-:MOD_NAME-:ENV-:EXTRA-:REGION
vcs.name | The VCS Plugin to use. Normally, this is auto-detected based on the vcs plugin configured in your `Gemfile.`. IE: `terraspace_vcs_github`. This allows you to override the auto-detection. |