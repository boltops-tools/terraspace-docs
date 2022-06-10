tfc.auto_sync | Enables auto-syncing of config/cloud settings to TFC/TFE. Useful to disable if you do not have permission to manage workspaces. | true
tfc.working_dir_prefix | Add additional prefix to add the relative root that is set on TFC | nil
tfc.hostname | Hostname used for TFE Terraform token used for authenticated API calls. See: [Terraform Login]({% link _docs/tfc/login.md %}) | nil
tfc.vars.overwrite | Whether or not to overwrite non-sensitive variables. | true
tfc.vars.overwrite_sensitive | Whether or not to overwrite sensitive variables. | true
tfc.vars.show_message | Normally, only "Creating" variable messages are shown. Can be set to: all, update, create, none  | create
tfc.workspace.attrs | Custom workspace attributes to set as part of the sync to TFC. Can be useful for `vcs-repo`. See [TFC API Workspace Docs](https://www.terraform.io/cloud-docs/api-docs/workspaces) | {}