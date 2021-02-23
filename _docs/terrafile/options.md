---
title: Terrafile Options
---

Terraspace bundler has several configurable options. The options can apply at the:

1. **Mod level**: These options apply at the mod-level, so they specifically affect each mod only.
2. **Terrafile level**: These options apply globally and affect the entire Terrafile.
3. **Config level**: These options generally apply globally and can affect the entire Terrafile or even CLI option behaviors like the `--terrafile` option.

The precedence of the options is also: 1, 2, and 3.

## 1. Mod level

These options apply at the mod-level, so they specifically affect each mod only.

Name | Description | Default
--- |  --- | ---
export_to | Overrides the export_to Terrafile level option. IE: `vendor/modules` With this one-off option, other modules in the folder will not be purged. | nil
stack | The stack option can be used to specify the source path within the module to copy as a starter example stack. IE: `vendor/modules/examples/simple-vpc` => `app/stacks/vpc`. The `stack` and `stacks` options are aliases. You can use either; they both do the same thing. The `stack` option further explained here [stack options]({% link _docs/terrafile/options/stack.md %}) | nil
subfolder | The subfolder where the module lives within the repo. By default, the module code is assumed to be at the root of the git repo. You can change it with this setting. | nil
version | Lock module to specific version. Can also use: `branch`, `ref`, `sha`, `tag`. See [Version Locking]({% link _docs/terrafile/version-locking.md %}) | nil

Example Terrafile:

```ruby
mod "s3", source: "terraform-aws-s3", subfolder: "path/to/module/s3"
mod "ec2", source: "terraform-aws-ec2", export_to: "app/modules"
mod "vpc", source: "terraform-aws-modules/vpc/aws", stack: "simple-vpc" # notice examples/ prefix is optional
```

## 2. Terrafile level

These options apply globally and affect the entire Terrafile.

Name | Description | Default
--- |  --- | ---
base_clone_url | Base clone url to use. | https://github.com/
export_to |  Where the modules get exported to saved to. Note, be careful about changing this location to `app/stacks` as the default `export_purge=true` will remove this folder. It's safer to use `export_to` at the mod-level.  | vendor/modules
export_purge | Whether or not to remove all existing exported modules folder first. If you disable this behavior, then you can manually clear modules out yourself before installing. IE: `rm -r vendor/modules`. | true
stack_options | The stack options is a global way to set some of the mod-level stack options, IE: purge, dest, etc. See the mod-level [stack option]({% link _docs/terrafile/options/stack.md %}) for more details. | {}

Example Terrafile:

```ruby
base_clone_url "git@github.com:"  # override the default https://github.com/
export_to "app/modules"         # override the default vendor/modules
export_purge false                # override the default true
stack_options(purge: true)
```

## 3. Config level

These options generally apply globally and can affect the entire Terrafile or even CLI option behaviors like the `--terrafile` option. With this approach, we are directly setting the Terraspace bundler options: `TB.config`. Terraspace passes the [config.bundle]({% link _docs/config/reference.md %}) options straight through to `TB.config` and merges the settings:

Name | Description | Default
--- | --- | ---
base_clone_url | Base git url to use for cloning | https://github.com/
export_to | Where to export the modules to. Can also be set with the env var TB_EXPORT_PATH | vendor/modules
export_purge | Whether or not to purge all the modules | true
logger | Logger instance. By default, terraspace bundler is set to use the same logger as Terraspace. | Terraspace.logger
terrafile | The Terrafile path. Can also be set with the env TB_TERRAFILE | Terrafile
