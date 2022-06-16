---
title: Backend Config Variables
---

Below is a list of variables available in with the expansion helper.

___

## Common Variables Available

<div class="table-wrapper" markdown=1>

Variable | Example | Description
--- | --- | ---
APP | app1 | Optional. Terraspace app. Can be set like so `TS_APP=app1`. See: [App and Role Layering]({% link _docs/layering/app-layering.md %}).
BUILD_DIR | stacks/demo | The build directory name.
ENV | dev | Terraspace env. Can be set like so `TS_ENV=dev`
EXTRA | bob | The [extra concept]({% link _docs/layering/extra.md %}). IE: TS_EXTRA=bob terraspace up demo
MOD_NAME | demo | The module name or stack name, which is also a module.
PROJECT | main | The project name. This is set by `config.cloud.project`, it defaults to "main"
ROLE | deploy | Optional. Terraspace role. Can be set like so `TS_ROLE=deploy`. See: [App and Role Layering]({% link _docs/layering/app-layering.md %}).
TYPE | stack | The type name. IE: stack or module
TYPE_DIR | stacks | The type dir. IE: stacks or modules
TYPE_EXTRA | stack-bob | The type with [TS_EXTRA]({% link _docs/layering/extra.md %}). IE: TS_EXTRA=bob terraspace up demo. The separator is a `-`

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
APP_HASH | wxyz | Short consistent hash based on TS_APP value.
LOCATION         | eastus | Azure Location. Can be set with `ARM_LOCATION`. Also can be set by `az configure --defaults location=westus`
LOCATION_HASH | wxyz | Short consistent hash based on Azure location.
SUSCRIPTION      | EXAMPLE88-c44e-4677-bf0eEXAMPLE | Azure subscription id. Can be set by `ARM_SUBSCRIPTION_ID`.
SUSCRIPTION_HASH | wxyz | Short consistent hash based on subscription id.

</div>

Azure variable values are handled by [boltops-tools/azure_info](https://github.com/boltops-tools/azure_info) library. You can also The values are generally set when you use `az login`.  You can see the values with `az account show`.

___

## Google Specific Variables

<div class="table-wrapper" markdown=1>

Variable | Example | Description
--- | --- | ---
PROJECT | project-12345 | Google project id. Can be set by the env var `GOOGLE_PROJECT` or by the `~/.config/gcloud`. This is usually handled by the `gcloud config` cli.
REGION | us-central1 | Google region. Can be set by the env var `GOOGLE_REGION` or by the `~/.config/gcloud`. This is usually handled by the `gcloud config` cli.

</div>

Google variable values are handled by [boltops-tools/gcp_data](https://github.com/boltops-tools/gcp_data) library. The values are generally set when you use `gcloud config set`.  You can see the values with `gcloud config list` and `gcloud config get`.
