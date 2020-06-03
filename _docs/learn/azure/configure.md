---
title: Configure Azure
---

Configure Azure so Terraspace can connect to it. The recommended way is to:

1. login with `az login`
2. setting your `AZURE_CLIENT_ID` and `AZURE_CLIENT_SECRET` environment variables

## Example

When you run `az login` you'll be greeted with instructions to open up a webpage and enter the provided device token id.

    $ az login
    To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code EXAMPLE12 to authenticate.
    $

That's usually enough to set up the `az` CLI. You can check with:

    az account list -o table

## Set up env variables

We set up `AZURE_CLIENT_ID` and `AZURE_CLIENT_SECRET` because terraspace uses it to handle things like automatically creating the Storage Account for the terraform state file.  To get these env variables setup, follow the [Azure Instructions](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

The [azure_check](https://github.com/boltops-tools/azure_check) script is useful to check that access is working. You should get something like this.

    $ ruby azure_check.rb
    Successfully connected to Azure with your AZURE_CLIENT_ID and AZURE_CLIENT_SECRET
    $

## Resources

* [Azure AD application Docs](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal)

Next, we'll create a new project.
