---
title: Azure Auth Chain
---

The Terraspace Azurerm Plugin can authenticate to the Azure REST API via the following mechanisms.

![](/img/content/azure-auth-chain.png)

The Terraspace Azurerm Plugin makes use of the [armrest](https://github.com/boltops-tools/armrest) gem library to achieve this.

## Environment

Terraspace will authenticate to the Azure API with these environment variables:

    ARM_CLIENT_ID
    ARM_CLIENT_SECRET
    ARM_TENANT_ID

* If `ARM_CLIENT_ID` is set, it will assume that `ARM_CLIENT_SECRET` is also set.
* The `ARM_TENANT_ID` is also used if set. If `ARM_TENANT_ID` is not set, it'll try to get the value using `az` cli. IE: `az account show`

## MSI: Managed Identity

The armrest library discovers whether or not MSI is available with an initial network call to `169.254.169.254/metadata/instance`. So something like this:

    curl --connect-timeout 0.5 -H "Metadata: true" "http://169.254.169.254/metadata/instance?api-version=2021-11-01"

Some notes about this metadata endpoint check:

* The network call to metadata/instance endpoint uses a low connect timeout setting of 0.5 seconds. This is done to prevent the overall auth chain from stalling when the API endpoint is unavailable on some systems. Other API calls to Azure have a connect and read timeout setting of 30s. Note: These timeout values may change, so check the source code.
* It caches the result to memory in a class variable, so it only checks it once per terraspace invocation.
* You can also disable MSI entirely by setting the environment variable `ARMREST_DISABLE_MSI=1`.

## Azure CLI

Terraspace authenticate via the az cli, by essentially calling:

    az account get-access-token
