---
title: "Tfvars: Full Layering"
---

Terraspace Layer in it's full form allows you to use the same infrastructure code and deploy to different environments, regions, accounts, providers, etc. This table shows the full layering order. For the sake of concisness, the layers are shown in levels, IE: base.tfvars, dev.tfvars, and instance.tfvars.

Folder/Pattern                 | Example
-------------------------------|---------------
tfvars root folder             | base.tfvars, dev.tfvars, and instance.tfvars
region                         | us-west-2/{base,dev,instance}.tfvars
namespace                      | 112233445566/{base,dev,instance}.tfvars
namespace/region               | 112233445566/us-west-2/{base,dev,instance}.tfvars
provider                       | aws/{base,dev,instance}.tfvars
provider/region                | aws/us-west-2/{base,dev,instance}.tfvars
provider/namespace             | aws/112233445566/{base,dev,instance}.tfvars
provider/namespace/region      | aws/112233445566/us-west-2/{base,dev,instance}.tfvars

All layers except for the first, tfvars root folder, are provider specific. For example, the `namespace` is provider dependent. IE: For AWS it's account, for Azure it's subscription, and for Google it's project. Also, for Azure `region` maps to location.

For an explanation of `instance.tfvars`, see: [Instance Option]({% link _docs/tfvars/instance-option.md %}).

## Env Folders

The simple layering structure is having the files at the top-level like so:

    app/stacks/server/tfvars
    ├── base.tfvars
    ├── dev.tfvars
    └── prod.tfvars

You can also add structure your tfvars so that they are within env folders like so:

    app/stacks/server/tfvars
    ├── base.tfvars
    ├── dev
    │   └── base.tfvars
    └── prod
        └── base.tfvars

Generally, the simplier structure is should be used. Unless you're using the [Instance Option]({% link _docs/tfvars/instance-option.md %}), where it becomes useful for tidying up the multiple instance based tfvars files.

## Multi-Region Layering Support

You can take advantage of the Terraspace layering to deploy the same infrastructure code to different regions, simply switch your env to use a different region and run `terraspace up`.

## AWS Example

Here's a structure that takes advantage of layering and multiple-regions for AWS:

    app/stacks/demo/tfvars
    ├── us-east-1
    │   ├── dev.tfvars
    │   └── prod.tfvars
    └── us-west-2
        ├── dev.tfvars
        └── prod.tfvars

For AWS, switching region can be done by changing `AWS_REGION`.

    AWS_REGION=us-east-1 terraspace up demo
    AWS_REGION=us-west-2 terraspace up demo

You can use the same code for different environments in the different regions also:

    AWS_REGION=us-east-1 TS_ENV=prod terraspace up demo
    AWS_REGION=us-west-2 TS_ENV=prod terraspace up demo

## Azure Example

Here's a structure that takes advantage of layering and multiple-locations for Azure:

    app/stacks/demo/tfvars
    ├── eastus
    │   ├── dev.tfvars
    │   └── prod.tfvars
    └── westus
        ├── dev.tfvars
        └── prod.tfvars

For Azure, switching locations can be done by using the `az configure` command:

    az configure --defaults location=eastus
    terraspace up demo
    az configure --defaults location=westus
    terraspace up demo

You can use the same code for different environments in the different regions also:

    az configure --defaults location=eastus
    TS_ENV=prod terraspace up demo
    az configure --defaults location=westus
    TS_ENV=prod terraspace up demo

Note, you check the current Azure location, you can use:

    az configure --list-defaults
    cat ~/.azure/config # also works, it's where az writes settings

## Google Cloud Example

Here's a structure that takes advantage of layering and multiple-regions for Google Cloud:

    app/stacks/demo/tfvars
    ├── us-central1
    │   ├── dev.tfvars
    │   └── prod.tfvars
    └── us-east4
        ├── dev.tfvars
        └── prod.tfvars

For Google Cloud, switch the region with the `gcloud` command.

    gcloud config set compute/region us-central1
    gcloud config get-value compute/region
    TS_ENV=dev  terraspace up demo
    TS_ENV=prod terraspace up demo

    gcloud config set compute/region us-east4
    gcloud config get-value compute/region
    TS_ENV=dev  terraspace up demo
    TS_ENV=prod terraspace up demo

## Cloud Provider Differences

Each Cloud provider is a little different. For example, AWS and Azure are more region-centric, and Google Cloud is more global-centric. It's up to you how to leverage Terraspace. It can handle both region-centric and global-central cases just fine.
