---
title: Review Project
search_title: Review Project Google
---

Let's explore the generated app folder.

## App Modules

Let's check out the `app/modules/example` folder.

main.tf

```terraform
resource "azurerm_storage_account" "this" {
  name                      = var.name
  resource_group_name       = var.resource_group_name
  location                  = var.location
  account_tier              = "Standard"
  account_replication_type  = "GRS"
  enable_https_traffic_only = var.enable_https_traffic_only
}
```

variables.tf

```terraform
variable "name" {
  description = "The name of the storage account"
  type        = string
}

variable "resource_group_name" {
  description = "The name of the resource group"
  type        = string
}

variable "location" {
  description = "The name of the storage location"
  type        = string
}

variable "enable_https_traffic_only" {
  description = "forces HTTPS if enabled"
  type        = string
  default     = true
}
```

You can see that the starter example module creates an Azure storage account.

## Stack Modules

Next let's look at the generated `app/stacks/demo` that was created:

app/stacks/demo/main.tf

```terraform
resource "random_pet" "this" {
  length = 1 # using 1, since default separator is '-', also account name can only be 24 characters, and lowercase letters
}

resource "azurerm_resource_group" "this" {
  name     = "demo-resources-${random_pet.this.id}"
  location = "eastus"
}

module "storage_account" {
  source                    = "../../modules/example"
  name                      =  "sa${random_pet.this.id}"
  resource_group_name       = azurerm_resource_group.this.name
  location                  = azurerm_resource_group.this.location
  enable_https_traffic_only = var.enable_https_traffic_only
}
```

You can see that it's just another terraform module, that will use the `app/modules/example` module. It uses the `random_pet` resource to provide a random but friendly name for the Azure Storage Account. It also creates a Azure Resource Group, which the Storage Account requires.

{% include intro/modules-vs-stacks.md %}

Next, we'll deploy the infrastructure.
