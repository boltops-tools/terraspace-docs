---
title: "Tfvars: Layering"
---

## Tfvars Structure

{% include tfvars/structure.md %}

The tfvar files are processed and "layered".  Example:

    TS_ENV=dev  terraspace up core -y # merges base and dev
    TS_ENV=prod terraspace up core -y # merges base and prod

The tfvars files should generally be within the `app/stacks` folder, as stacks can include business-specific logic.

## Examples

Terraspace builds `tfvars` to add layering support. Example:

    $ terraspace build core
    $ cd .terraspace-cache/dev/stacks/core/
    $ ls *.tfvars
    1-base.auto.tfvars  2-dev.auto.tfvars
    $

Layering combines the base layer with the TS_ENV specific layer. Another example:

    $ TS_ENV=prod terraspace build core
    $ cd .terraspace-cache/prod/stacks/core/
    $ ls *.tfvars
    1-base.auto.tfvars  2-prod.auto.tfvars
    $

Terraform automatically loads all files in the directory with any variation of `*.auto.tfvars`. So these built tfvars files automatically load.

## Other Ways to Set Variables

There are other ways to specific tfvar files:

* Specify the terraspace `--var-files` option on-the-fly.
* Specify var files with [CLI Args]({% link _docs/cli/args.md %}).
* Create a `config/terraform/terraform.tfvars` file that will gets built.
* Specify tfvar files in the top-level `seed` folder. Covered more in [Additional Lookups]({% link _docs/tfvars/lookups.md %}).
* Use the Terraform native `TF_VAR_name` env variables. Covered here: [Terraform Env Vars](https://www.terraform.io/docs/commands/environment-variables.html)

The variables and layering examples here only cover the tip of the iceburg. Terraspace has rich layering support. It allows you to use the same infrastructure code and create multiple environments in different regions, accounts, providers, etc. More details in: [Full Layering]({% link _docs/tfvars/full-layering.md %}).
