---
title: Backend Azurerm
nav_text: Azurerm
categories: backend-examples
order: 2
---

Here's an example with the [azurerm backend](https://www.terraform.io/language/settings/backends/azurerm).

config/terraform/backend.tf:

{% highlight sh %}
terraform {
  backend "azurerm" {
    resource_group_name = "<%= expansion(':ENV-:LOCATION') %>"
    storage_account_name = "<%= expansion('ts:SUBSCRIPTION_HASH:LOCATION:ENV') %>"
    container_name = "terraform-state"
    key = "<%= expansion(':LOCATION/:ENV/:BUILD_DIR/terraform.tfstate') %>"
  }
}
{% endhighlight %}

Notice the variable notation. Terraspace expands it out, substituting the values. The starter `backend.tf`
         accounts for `LOCATION`, `ENV`, etc. Here's an expanded example:

{% highlight sh %}
terraform {
  backend "azurerm" {
    resource_group_name = "dev-eastus"
    storage_account_name = "tswxyzeastusdev"
    container_name = "terraform-state"
    key = "eastus/dev/stacks/demo/terraform.tfstate"
  }
}
{% endhighlight %}

Note, the `SUBSCRIPTION_HASH` is a short 4-char consistent hash of the longer subscription id. This is useful because azure storage account names are not allowed special characters and are limited to 24 chars.

## Resource Group Name Thoughts

The default `resource_group_name` name is env-focused. Azure Resource Groups often make more sense to be app-env scoped. For example:

app-env focused:

    * app1-dev
    * app1-prod
    * app2-dev
    * app2-prod

Azure Resource groups help know the exact resources that belong to an app-env. IE: VMs, DBs, Firewalls, etc. It becomes easy to identify and clean up resources.

There are some resources that are more env-focused. AKS clusters are a good example. It often makes sense to share a dev cluster and deploy your applications onto that cluster. Container density and less maintenance overhead are benefits.

The default `resource_group_name` is env-focused and nicely accounts for the use-case of shared resources like AKS clusters.

    resource_group_name = "<%= expansion(':ENV-:LOCATION') %>"

It does not account for app-env focused resources, though. Since Terraspace does not know what app name, you need to provide the context. One approach is to configure resource_group_name more dynamically:

config/terraform/backend.tf:

{% highlight sh %}
<%
def resource_group_name
  if ENV['APP']
    expansion("#{ENV['APP']}-:ENV-:LOCATION")
  else
    expansion(":ENV-:LOCATION")
  end
end
%>

terraform {
  backend "azurerm" {
  resource_group_name = "<%= resource_group_name %>"
  storage_account_name = "<%= expansion('ts:SUBSCRIPTION_HASH:LOCATION:ENV') %>"
  container_name = "terraform-state"
  key = "<%= expansion(':LOCATION/:ENV/:BUILD_DIR/terraform.tfstate') %>"
}
{% endhighlight %}

You can now provide `APP` and the resource group will account for it. Example:

    APP=app1 terraspace up demo

If the infrastructure components for the app are really unique, then it may also make sense to have an entirely different terraspace project.
