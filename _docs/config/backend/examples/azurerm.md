---
title: Backend Azurerm
nav_text: Azurerm
categories: backend-examples
order: 2
---

config/terraform/backend.tf:

{% highlight sh %}
terraform
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

We then know exactly what app and env the resources within the Azure Resource Groups belong to. IE: VMs, DBs, Firewalls, etc. This makes it easy to identify resources as well as clean up resources.

There are definitely some resources that are more env-focused, though. For example, AKS clusters. It often makes sense to have a dev cluster and deploy your applications onto that cluster. You get container density as a benefit.

The default `resource_group_name` and is env-focused and accounts for the use-case of shared resources like AKS clusters nicely.

    resource_group_name = "<%= expansion(':ENV-:LOCATION') %>"

It does not account for app-env focused resources, though. Since Terraspace does not know what app name, it does not include it. One approach is to more dynamically configure resource_group_name like so:

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

If the infrastructure components for the app is really unique, then it may also make sense to have an entirely different terraspace project.
