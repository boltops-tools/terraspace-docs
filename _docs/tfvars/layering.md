---
title: "Tfvars: Layering"
---

## Tfvars Structure

{% include tfvars/structure.md %}

The tfvar files are processed and "layered".  Example:

    TS_ENV=dev  terraspace up core -y # merges base and dev
    TS_ENV=prod terraspace up core -y # merges base and prod

The tfvars files should generally be within the `app/stacks` folder, as stacks can include business-specific logic.  There are other ways to specific tfvar files:

* Specify tfvar files in the top-level `seed` folder. Covered more in [Additional Lookups]({% link _docs/tfvars/lookups.md %}).
* Specify the terraspace `--var-files` option on-the-fly.
* Specify var files with [CLI Args]({% link _docs/cli/args.md %}).
* Create a `config/terraform.tfvars` file that will get materialized.
* Use the Terraform native `TF_VAR_name` env variables. Covered here: [Terraform Env Vars](https://www.terraform.io/docs/commands/environment-variables.html)

## Examples

Terraspace materializes `tfvars` and adds layering. Example:

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

The layering examples here only cover the tip of the iceburg. Terraspace Layering is rich in support to allow usage of the same infrastructure code to multiple environments, regions, accounts, providers, etc. More details in: [Full Layering]({% link _docs/tfvars/full-layering.md %}).
