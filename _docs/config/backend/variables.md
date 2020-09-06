---
title: Backend Config Variables
---

Below is a list of variables available in with the expansion helper.

## Common Variables Available

Variable | Example | Description
--- | --- | ---
BUILD_DIR | stacks/demo | The build directory name.
ENV | dev | Terraspace env. Can be set like so `TS_ENV=dev`
MOD_NAME | demo | The module name or stack name, which is also a module.
TYPE | stack | The type name. IE: stack or module
TYPE_DIR | stacks | The type dir. IE: stacks or modules
TYPE_INSTANCE | stack-bob | The type with the [instance option]({% link _docs/tfvars/instance-option.md %}). IE: terraspace up demo --instance bob. The separator is a `-`
INSTANCE | bob | The [instance option]({% link _docs/tfvars/instance-option.md %}). IE: terraspace up demo --instance bob

## AWS Specific Variables

Variable | Example | Description
--- | --- | ---
ACCOUNT | 112233445566 | AWS Account Id
REGION | us-west-2 | AWS Region

## Azure Specific Variables

Variable | Example | Description
--- | --- | ---
LOCATION         | eastus | Azure Location
SUSCRIPTION      | EXAMPLE88-c44e-4677-bf0eEXAMPLE | Azure subscription id
SUSCRIPTION_HASH | wxyz | Short consistent hash based on subscription id

## Google Specific Variables

Variable | Example | Description
--- | --- | ---
PROJECT | project-12345 | Google project id
REGION | us-central1 | Google region

