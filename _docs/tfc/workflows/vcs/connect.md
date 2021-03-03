---
title: "VCS Workflow: Connect to VCS"
---

Terraspace supports automating most of the VCS connection setup for your workspaces.

## Prerequisite: VCS Provider OAuth Token

As a prerequisite, set up a VCS Provider. Follow the Terraform Docs: [Configuring OAuth Access](https://www.terraform.io/docs/tfc/vcs/github.html). Once done, you'll see something like this:

![](https://img.boltops.com/boltops/tools/terraspace/vcs/github-oauth.png)

From here, you can grab the OAuth Token ID.

## Configure VCS Connection

To connect VCS to your workspace, configure the `config.cloud.workspace.attrs` settings:

config/app.rb:

```ruby
Terraspace.configure do |config|
  # ...
  vcs_repo = {
    "identifier": "org/repo",
    "oauth-token-id": 'token-id',
    "ingress-submodules": true,
    "branch": "master",
  }
  config.cloud.workspace.attrs['vcs-repo'] = vcs_repo
end
```

## Deploy

Then deploy:

    terraspace up demo

Terraspace automatically updates the TFC Workspace and with the repo connection as part of the `terraspace up` command.

## Sync

You can also configure the VCS connection without deploying. To do so, use:

    terraspace cloud sync demo

This syncs the Terraspace project settings to Terraform Cloud. A sync performs the following for each workspace:

1. Create or update workspace, including the VCS settings.
2. Set the working dir. This is automatically determined. Though you can adjust the [working_dir_prefix]({% link _docs/tfc/config.md %}).
3. Set env and terraform variables. The variables can be configured with code. See [Cloud Vars]({% link _docs/tfc/vars.md %}).

## Sync All & Preview

You can sync all the workspaces. This can be useful, if your TFC user does not have permission to manage workspaces. You can ask the TFC admin to run the sync command to create the workspaces in batch.   Example:

    $ terraspace cloud sync # all workspaces
    About to sync these project stacks with Terraform Cloud workspaces:

        Stack => Workspace
        demo => demo-dev-us-west-2
        demo2 => demo2-dev-us-west-2

    A sync does the following for each workspace:

      1. Create or update workspace, including the VCS settings.
      2. Set the working dir.
      3. Set env and terraform variables.

    Are you sure? (y/N)

If you would like to bypass the prompt, you can use the `-y` option.

    terraspace cloud sync -y

## Disconnect VCS

TFC maintains previous settings if the config is not set. If you need to disconnect the workspace from VCS, set `vcs-repo` to `nil`.  Example:

```ruby
Terraspace.configure do |config|
  # ...
  config.cloud.workspace.attrs['vcs-repo'] = nil
end
```

## Manual Setup

If you need to set up the VCS connection manually instead, see [Connect to VCS Manually]({% link _docs/tfc/workflows/vcs/manual.md %}).
