---
title: "Tfvars: Layering"
---

## Tfvars Structure

{% include tfvars/structure.md %}

The tfvar files are processed and "layered".  Example:

    TS_ENV=dev  terraspace up core -y # merges base and dev
    TS_ENV=prod terraspace up core -y # merges base and prod

The tfvars files should generally be within the `app/stacks` folder, as stacks can include business-specific logic.  There are other ways to specific tfvar files:

You can also specify tfvar files in the top-level `seed` folder. Covered more in [Additional Lookups]({% link _docs/tfvars/lookups.md %}).
You can also specify the terraspace `--var-files` option on-the-fly.
You can also specify var files with [CLI Args]({% link _docs/cli/args.md %}).
You can also create a `config/terraform.tfvars` file that will get materialized.
You can also also use the Terraform native `TF_VAR_name` env variables. Covered here: [Terraform Env Vars](https://www.terraform.io/docs/commands/environment-variables.html)

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

## Multi-Region Layering Support

Terraspace supports multi-region layering support. This allows you to use the same infrastructure code and deploy to different regions. This is achieved by layering.  Here are is layering order:

Name          | Pattern                      | Example
--------------|------------------------------|---------------
base          | base                         | base.tfvars
env           | env                          | dev.tfvars
region base   | region/base                  | us-west-2/base.tfvars (provider specific)
region env    | region/env                   | us-west-2/dev.tfvars (provider specific)
provider base | provider/region/base         | aws/us-west-2/base.tfvars (provider specific)
provider env  | provider/region/env          | aws/us-west-2/dev.tfvars (provider specific)
account base  | account/provider/region/base | 112233445566/aws/us-west-2/base.tfvars (provider specific)
account env   | account/provider/region/env  | 112233445566/aws/us-west-2/dev.tfvars (provider specific)

The "account" depends on the provider. IE: For aws it's account. For google, account maps to the project.

To deploy the same infrastructure code to different regions, simply switch your env to use a different region and run `terraspace up`. Examples:

## AWS

For AWS, switching region can be done by changing `AWS_REGION`.

    AWS_REGION=us-east-1 terraspace up demo
    AWS_REGION=us-west-2 terraspace up demo

## Google Cloud

For Google Cloud, switch the region with the `gcloud` command.

    gcloud config set compute/region us-central1
    gcloud config get-value compute/region
    terraspace up demo

    gcloud config set compute/region us-east4
    gcloud config get-value compute/region
    terraspace up demo

## Cloud Provider Differences

Each Cloud provider is a little different. For example, AWS is more region-centric, and Google Cloud is more global-centric. It's up to you how to leverage Terraspace. It can handle both region-centric and global-central cases just fine.
