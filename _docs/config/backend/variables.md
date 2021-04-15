---
title: Backend Config Variables
---

Below is a list of variables available in with the expansion helper.

___

## Common Variables Available

<div class="table-wrapper" markdown=1>

Variable | Example | Description
--- | --- | ---
BUILD_DIR | stacks/demo | The build directory name.
ENV | dev | Terraspace env. Can be set like so `TS_ENV=dev`
MOD_NAME | demo | The module name or stack name, which is also a module.
TYPE | stack | The type name. IE: stack or module
TYPE_DIR | stacks | The type dir. IE: stacks or modules
TYPE_INSTANCE | stack-bob | The type with the [instance option]({% link _docs/tfvars/instance-option.md %}). IE: terraspace up demo --instance bob. The separator is a `-`
INSTANCE | bob | The [instance option]({% link _docs/tfvars/instance-option.md %}). IE: terraspace up demo --instance bob

</div>

___

## AWS Specific Variables

<div class="table-wrapper" markdown=1>

Variable | Example | Description
--- | --- | ---
ACCOUNT | 112233445566 | AWS Account Id. Can be set by the env var `AWS_ACCOUNT` or by the `~/.aws/config`.
REGION | us-west-2 | AWS Region. Can be set by the env var `AWS_REGION` or by the `~/.aws/config`.

</div>

AWS variable values are handled by [boltops-tools/aws_data](https://github.com/boltops-tools/aws_data) library.

___

## Azure Specific Variables

<div class="table-wrapper" markdown=1>

Variable | Example | Description
--- | --- | ---
LOCATION         | eastus | Azure Location. Can be set with `ARM_LOCATION`. Also can be set by `az configure --defaults location=westus`
SUSCRIPTION      | EXAMPLE88-c44e-4677-bf0eEXAMPLE | Azure subscription id. Can be set by `ARM_SUBSCRIPTION_ID`.
SUSCRIPTION_HASH | wxyz | Short consistent hash based on subscription id.

</div>

Azure variable values are handled by [https://github.com/boltops-tools/azure_info](https://github.com/https://github.com/boltops-tools/azure_info) library. You can also The values are generally set when you use `az login`.  You can see the values with `az account show`.

___

## Google Specific Variables

<div class="table-wrapper" markdown=1>

Variable | Example | Description
--- | --- | ---
PROJECT | project-12345 | Google project id. Can be set by the env var `GOOGLE_PROJECT` or by the `~/.config/gcloud`. This is usually handled by the `gcloud config` cli.
REGION | us-central1 | Google region. Can be set by the env var `GOOGLE_REGION` or by the `~/.config/gcloud`. This is usually handled by the `gcloud config` cli.

</div>

Google variable values are handled by [https://github.com/boltops-tools/gcp_data](https://github.com/https://github.com/boltops-tools/gcp_data) library. The values are generally set when you use `gcloud config set`.  You can see the values with `gcloud config list` and `gcloud config get`.
