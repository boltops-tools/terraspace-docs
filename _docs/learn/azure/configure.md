---
title: Configure Azure
category: learn-azure
order: 2
---

{% include videos/learn/getting-started/azure.md %}

Configure Azure so Terraspace can connect to it. The recommended way is to:

1. login with `az login`
2. set up environment variables like `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_SECRET`, `ARM_TENANT_ID`, `ARM_CLIENT_ID`

## Example

To configure your `az` CLI, follow the [Install the Azure CLI
](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) instructions.

When you run `az login` you'll be greeted with instructions to open up a webpage and enter the provided device token id.

    $ az login
    To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code EXAMPLE12 to authenticate.
    $

Note: You might have to specify the tenant id.

    az login --tenant $ARM_TENANT_ID

That's usually enough to set up the `az` CLI. Here are some commands to check access:

    az account list -o table
    az group list | jq '.[].name'
    az storage account list | jq '.[].name'

## Set up env variables

We set up `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_SECRET`, `ARM_TENANT_ID`, `ARM_CLIENT_ID` because terraspace uses it to handle things like automatically creating the Storage Account for the terraform state file.  To get these env variables setup, follow the [Azure Instructions](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#register-an-application-with-azure-ad-and-create-a-service-principal).  The [Terraspace CI Azure Docs]({% link _docs/ci/azure/variables.md %}) also have screenshots.

The [azure_check](https://github.com/boltops-tools/azure_check) script is useful to check that access is working. You should get something like this.

    $ git clone https://github.com/boltops-tools/azure_check
    $ cd azure_check
    $ bundle
    $ bundle exec ruby azure_check.rb
    Successfully connected to Azure with your ARM_CLIENT_ID and ARM_CLIENT_SECRET
    $

## Resources

* [Azure AD application Docs](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#register-an-application-with-azure-ad-and-create-a-service-principal)

Next, we'll create a new project.
