---
title: Configure Azure
---

Configure Azure so Terraspace can connect to it. The recommended way is to:

1. login with `az login`
2. setting your `ARM_CLIENT_ID` and `ARM_CLIENT_SECRET` environment variables

## Example

To configure your `az` CLI, follow the [Install the Azure CLI
](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) instructions.

When you run `az login` you'll be greeted with instructions to open up a webpage and enter the provided device token id.

    $ az login
    To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code EXAMPLE12 to authenticate.
    $

That's usually enough to set up the `az` CLI. You can check with:

    az account list -o table

## Set up env variables

We set up `ARM_CLIENT_ID` and `ARM_CLIENT_SECRET` because terraspace uses it to handle things like automatically creating the Storage Account for the terraform state file.  To get these env variables setup, follow the [Azure Instructions](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

The [azure_check](https://github.com/boltops-tools/azure_check) script is useful to check that access is working. You should get something like this.

    $ ruby azure_check.rb
    Successfully connected to Azure with your ARM_CLIENT_ID and ARM_CLIENT_SECRET
    $

It is important to name the variables with the prefix `ARM`, as the [Terraform Azurerm Provider](https://www.terraform.io/docs/providers/azurerm/guides/service_principal_client_secret.html) uses these env variables also.

## Resources

* [Azure AD application Docs](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal)

Next, we'll create a new project.
