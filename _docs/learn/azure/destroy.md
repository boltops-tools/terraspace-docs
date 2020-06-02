---
title: Destroy Infrastructure
---

Now that we've seen how to deploy infra, let's clean up and tear down the resources.

To destroy the resources, run:

    terraspace down demo

You'll be prompted to make sure you really want to delete these resources.

    $ terraspace down demo
    Building .terraspace-cache/dev/stacks/demo
    Current directory: .terraspace-cache/dev/stacks/demo
    => terraform init -get > /tmp/terraspace/out/terraform-init.out
    Built in .terraspace-cache/dev/stacks/demo
    => terraform destroy
    Acquiring state lock. This may take a few moments...
    random_pet.this: Refreshing state... [id=wildcat]
    azurerm_resource_group.this: Refreshing state... [id=/subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat]
    module.storage_account.azurerm_storage_account.this: Refreshing state... [id=/subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat/providers/Microsoft.Storage/storageAccounts/sawildcat]

    An execution plan has been generated and is shown below.
    Resource actions are indicated with the following symbols:
      - destroy

    Terraform will perform the following actions:

      # azurerm_resource_group.this will be destroyed
      - resource "azurerm_resource_group" "this" {
          - id       = "/subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat" -> null
          - location = "eastus" -> null
          - name     = "demo-resources-wildcat" -> null
          - tags     = {} -> null
        }

      # random_pet.this will be destroyed
      - resource "random_pet" "this" {
          - id        = "wildcat" -> null
          - length    = 1 -> null
          - separator = "-" -> null
        }

      # module.storage_account.azurerm_storage_account.this will be destroyed
      - resource "azurerm_storage_account" "this" {
          - access_tier                    = "Hot" -> null
          - account_kind                   = "StorageV2" -> null
          - account_replication_type       = "GRS" -> null
          - account_tier                   = "Standard" -> null
          - enable_https_traffic_only      = false -> null
          - id                             = "/subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat/providers/Microsoft.Storage/storageAccounts/sawildcat" -> null
          - is_hns_enabled                 = false -> null
          - location                       = "eastus" -> null
          - name                           = "sawildcat" -> null
          - primary_access_key             = (sensitive value)
          - primary_blob_connection_string = (sensitive value)
          - primary_blob_endpoint          = "https://sawildcat.blob.core.windows.net/" -> null
          - primary_blob_host              = "sawildcat.blob.core.windows.net" -> null
          - primary_connection_string      = (sensitive value)
          - primary_dfs_endpoint           = "https://sawildcat.dfs.core.windows.net/" -> null
          - primary_dfs_host               = "sawildcat.dfs.core.windows.net" -> null
          - primary_file_endpoint          = "https://sawildcat.file.core.windows.net/" -> null
          - primary_file_host              = "sawildcat.file.core.windows.net" -> null
          - primary_location               = "eastus" -> null
          - primary_queue_endpoint         = "https://sawildcat.queue.core.windows.net/" -> null
          - primary_queue_host             = "sawildcat.queue.core.windows.net" -> null
          - primary_table_endpoint         = "https://sawildcat.table.core.windows.net/" -> null
          - primary_table_host             = "sawildcat.table.core.windows.net" -> null
          - primary_web_endpoint           = "https://sawildcat.z13.web.core.windows.net/" -> null
          - primary_web_host               = "sawildcat.z13.web.core.windows.net" -> null
          - resource_group_name            = "demo-resources-wildcat" -> null
          - secondary_access_key           = (sensitive value)
          - secondary_connection_string    = (sensitive value)
          - secondary_location             = "westus" -> null
          - tags                           = {} -> null

          - network_rules {
              - bypass                     = [
                  - "AzureServices",
                ] -> null
              - default_action             = "Allow" -> null
              - ip_rules                   = [] -> null
              - virtual_network_subnet_ids = [] -> null
            }

          - queue_properties {

              - hour_metrics {
                  - enabled               = true -> null
                  - include_apis          = true -> null
                  - retention_policy_days = 7 -> null
                  - version               = "1.0" -> null
                }

              - logging {
                  - delete                = false -> null
                  - read                  = false -> null
                  - retention_policy_days = 0 -> null
                  - version               = "1.0" -> null
                  - write                 = false -> null
                }

              - minute_metrics {
                  - enabled               = false -> null
                  - include_apis          = false -> null
                  - retention_policy_days = 0 -> null
                  - version               = "1.0" -> null
                }
            }
        }

    Plan: 0 to add, 0 to change, 3 to destroy.

    Do you really want to destroy all resources?
      Terraform will destroy all your managed infrastructure, as shown above.
      There is no undo. Only 'yes' will be accepted to confirm.

      Enter a value:

Once again, we prompted to `Enter a value:`. Type `yes` and press enter to destroy the infrastructure.

      Enter a value: yes

    module.storage_account.azurerm_storage_account.this: Destroying... [id=/subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat/providers/Microsoft.Storage/storageAccounts/sawildcat]
    module.storage_account.azurerm_storage_account.this: Destruction complete after 3s
    azurerm_resource_group.this: Destroying... [id=/subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat]
    azurerm_resource_group.this: Still destroying... [id=/subscriptions/61bd6788-c44e-4677-bf0e-.../resourceGroups/demo-resources-wildcat, 10s elapsed]
    azurerm_resource_group.this: Still destroying... [id=/subscriptions/61bd6788-c44e-4677-bf0e-.../resourceGroups/demo-resources-wildcat, 20s elapsed]
    azurerm_resource_group.this: Still destroying... [id=/subscriptions/61bd6788-c44e-4677-bf0e-.../resourceGroups/demo-resources-wildcat, 30s elapsed]
    azurerm_resource_group.this: Destruction complete after 32s
    random_pet.this: Destroying... [id=wildcat]
    random_pet.this: Destruction complete after 0s

    Destroy complete! Resources: 3 destroyed.
    $

Congrats! You have successfully created, modified, and destroy infrastructure with terraspace.

Next, we'll look at some next steps.
