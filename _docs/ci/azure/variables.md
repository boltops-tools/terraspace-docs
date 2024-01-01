---
title: Azure Variables
nav_text: Variables
category: ci-azure
order: 3
---

{% include videos/learn/cloud/azure.md %}

The Azure pipelines we're creating use the same environment variables. To help reduce some of the duplication in the YAML pipeline definitions, we'll create and use an [Azure Pipelines Variable Group](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=yaml).

## Environment Variables

Here are the variables we'll be setting.


* **ARM_CLIENT_ID**: Azure client id. The client id along with the other `ARM_*` variables, give the Azure Pipelines CI machine permissions to create Azure infrastructure resources. You can create an "app client id" with these instructions [Register an application with Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#register-an-application-with-azure-ad-and-create-a-service-principal). The [Terraspace Azure Getting Started Guide: Configure]({% link _docs/learn/azure/configure.md %}) also cover setting up and getting this variable. It will be on the *App Registration / Overview* page.
* **ARM_CLIENT_SECRET**: Azure client secret. The client secret is on the *App Registration / Certificates & secrets* page, under the *Client secret* tab.
* **ARM_SUBSCRIPTION_ID**: Azure subscription id. This is under the *Subscriptions* portal page. Note, this is a different page than the *App Registrations* pages.
* **ARM_TENANT_ID**: Azure client id. Like the client id, the tenant is also available on the *App Registration / Overview* page.
{% include ci/common-vars.md %}

Here's the *App Registration / Overview* page.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/variables/azure-app-client-id.png)

Here's the *App Registration / Certificates & secrets* page.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/variables/azure-app-client-secret.png)

## Create Variable Group

To create a Variable Group:

1. Go **Pipelines** on the left hand side
2. Go to **Library**
3. Click **+ Variable Group** to create a new one called **common-variables**
4. Add these variables: `ARM_CLIENT_ID`, `ARM_CLIENT_SECRET`, `ARM_SUBSCRIPTION_ID`, `ARM_TENANT_ID`, `TS_TOKEN` and `INFRACOST_API_KEY` (if you're using cost estimates)

Here's the **+ Variable Group** button.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/variables/variables-create.png)

Here's the form.

![](https://img.boltops.com/images/terraspace/cloud/ci/azure/variables/variables-form.png)

Next, we'll create and review the Main Push Pipeline.
