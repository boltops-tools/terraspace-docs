---
title: "Tfvars: Full Layering"
---

Terraspace Layer in it's full form allows you to use the same infrastructure code and deploy to different environments, regions, accounts, providers, etc. Here is full layering order:

Name/Pattern                   | Example
-------------------------------|---------------
base                           | base.tfvars
env                            | dev.tfvars
region/base                    | us-west-2/base.tfvars (provider specific)
region/env                     | us-west-2/dev.tfvars (provider specific)
provider/base                  | aws/base.tfvars (provider specific)
provider/env                   | aws/dev.tfvars (provider specific)
provider/region/base           | aws/us-west-2/base.tfvars (provider specific)
provider/region/env            | aws/us-west-2/dev.tfvars (provider specific)
provider/namespace/region/base | aws/112233445566/us-west-2/base.tfvars (provider specific)
provider/namespace/region/env  | aws/112233445566/us-west-2/dev.tfvars (provider specific)

The `namespace` is provider dependent. IE: For AWS it's account, for Azure it's subscription, and for Google it's project. Also, for Azure `region` maps to location.

You can take advantage of the layering order to deploy the same infrastructure code to different regions, simply switch your env to use a different region and run `terraspace up`.

## Multi-Region Layering Support

Terraspace supports multi-region layering support.

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

Each Cloud provider is a little different. For example, AWS is more region-centric, and Google Cloud is more global-centric. It's up to you how to leverage Terraspace. It can handle both region-centric and global-central cases just fine.
