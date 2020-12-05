---
title: Deploy Infrastructure
search_title: Deploy Infrastructure Azure
---

Let's go ahead and deploy the infrastructure

    $ terraspace up demo

The `terraspace up` command will build the files and then essentially run `terraform apply`.

    $ terraspace up demo
    Building .terraspace-cache/useast/dev/stacks/demo
    Creating Resource Group terraform-resources-eastus...
    Creating Storage Account ts88bceastusdev...
    Creating Storage Container terraform-state...
    Current directory: .terraspace-cache/useast/dev/stacks/demo
    => terraform init -get > /tmp/terraspace/out/terraform-init.out
    Built in .terraspace-cache/useast/dev/stacks/demo
    => terraform apply
    Acquiring state lock. This may take a few moments...

    An execution plan has been generated and is shown below.
    Resource actions are indicated with the following symbols:
      + create

    Terraform will perform the following actions:

      # azurerm_resource_group.this will be created
      + resource "azurerm_resource_group" "this" {
          + id       = (known after apply)
          + location = "eastus"
          + name     = (known after apply)
        }

      # random_pet.this will be created
      + resource "random_pet" "this" {
          + id        = (known after apply)
          + length    = 1
          + separator = "-"
        }

      # module.storage_account.azurerm_storage_account.this will be created
      + resource "azurerm_storage_account" "this" {
          + access_tier                      = (known after apply)
          + account_kind                     = "StorageV2"
          + account_replication_type         = "GRS"
          + account_tier                     = "Standard"
          + enable_https_traffic_only        = true
          + id                               = (known after apply)
          + is_hns_enabled                   = false
          + location                         = "eastus"
          ...
          removed to reduce output
          ...
        }

    Plan: 3 to add, 0 to change, 0 to destroy.

    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value:
You get shown what will be provisioned and prompted with `Enter a value:`

Type `yes` and press enter and you'll see terraform apply finishing.

      Enter a value: yes

    random_pet.this: Creating...
    random_pet.this: Creation complete after 0s [id=wildcat]
    azurerm_resource_group.this: Creating...
    azurerm_resource_group.this: Creation complete after 1s [id=/subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat]
    module.storage_account.azurerm_storage_account.this: Creating...
    module.storage_account.azurerm_storage_account.this: Still creating... [10s elapsed]
    module.storage_account.azurerm_storage_account.this: Still creating... [20s elapsed]
    module.storage_account.azurerm_storage_account.this: Creation complete after 22s [id=/subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat/providers/Microsoft.Storage/storageAccounts/sawildcat]

    Apply complete! Resources: 3 added, 0 changed, 0 destroyed.

    Outputs:

    storage_account_id = /subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat/providers/Microsoft.Storage/storageAccounts/sawildcat

You can see the storage account got created.

Note, you can also use the `-y` option to bypass the prompt. IE: `terraspace up demo -y`.

Next, we'll make some changes to the infrastructure code.
