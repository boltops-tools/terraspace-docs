---
title: Multi-Region Layering
category: layering
order: 6
---

## Multi-Region Layering Support

You can take advantage of the Terraspace layering to deploy the same infrastructure code to different regions, simply switch your env to use a different region and run `terraspace up`.

## AWS Example

Here's a structure that takes advantage of layering and multiple-regions for AWS:

    config/stacks/demo/tfvars
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

    config/stacks/demo/tfvars
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

Note, to check the current Azure location, you can use:

    az configure --list-defaults
    cat ~/.azure/config # also works, it's where az writes settings

## Google Cloud Example

Here's a structure that takes advantage of layering and multiple-regions for Google Cloud:

    config/stacks/demo/tfvars
    ├── us-central1
    │   ├── dev.tfvars
    │   └── prod.tfvars
    └── us-east4
        ├── dev.tfvars
        └── prod.tfvars

For Google Cloud, switch the region with the `gcloud` command.

    gcloud config set compute/region us-central1
    export GOOGLE_REGION=$(gcloud config get-value compute/region)
    TS_ENV=dev  terraspace up demo
    TS_ENV=prod terraspace up demo

    gcloud config set compute/region us-east4
    export GOOGLE_REGION=$(gcloud config get-value compute/region)
    TS_ENV=dev  terraspace up demo
    TS_ENV=prod terraspace up demo

## Cloud Provider Differences

Each Cloud provider is a little different. For example, AWS and Azure are more region-centric, and Google Cloud is more global-centric. It's up to you how to leverage Terraspace. It can handle both region-centric and global-central cases just fine.
