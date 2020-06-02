---
title: Update Infrastructure
---

Let's update the infrastructure.

    $ terraspace up demo

Terraspace will show you a preview of the changes and prompt you to update the infrastructure.

    $ terraspace up demo
    Building .terraspace-cache/dev/stacks/demo
    Current directory: .terraspace-cache/dev/stacks/demo
    => terraform init -get > /tmp/terraspace/out/terraform-init.out
    Built in .terraspace-cache/dev/stacks/demo
    => terraform apply
    Acquiring state lock. This may take a few moments...
    random_pet.this: Refreshing state... [id=wildcat]
    azurerm_resource_group.this: Refreshing state... [id=/subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat]
    module.storage_account.azurerm_storage_account.this: Refreshing state... [id=/subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat/providers/Microsoft.Storage/storageAccounts/sawildcat]

    An execution plan has been generated and is shown below.
    Resource actions are indicated with the following symbols:
      ~ update in-place

    Terraform will perform the following actions:

      # module.storage_account.azurerm_storage_account.this will be updated in-place
      ~ resource "azurerm_storage_account" "this" {
            access_tier                    = "Hot"
            account_kind                   = "StorageV2"
            account_replication_type       = "GRS"
            account_tier                   = "Standard"
          ~ enable_https_traffic_only      = true -> false
            id                             = "/subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat/providers/Microsoft.Storage/storageAccounts/sawildcat"
            is_hns_enabled                 = false
            location                       = "eastus"
            name                           = "sawildcat"
            primary_access_key             = (sensitive value)
            primary_blob_connection_string = (sensitive value)
            primary_blob_endpoint          = "https://sawildcat.blob.core.windows.net/"
            primary_blob_host              = "sawildcat.blob.core.windows.net"
            primary_connection_string      = (sensitive value)
            primary_dfs_endpoint           = "https://sawildcat.dfs.core.windows.net/"
            primary_dfs_host               = "sawildcat.dfs.core.windows.net"
            primary_file_endpoint          = "https://sawildcat.file.core.windows.net/"
            primary_file_host              = "sawildcat.file.core.windows.net"
            primary_location               = "eastus"
            primary_queue_endpoint         = "https://sawildcat.queue.core.windows.net/"
            primary_queue_host             = "sawildcat.queue.core.windows.net"
            primary_table_endpoint         = "https://sawildcat.table.core.windows.net/"
            primary_table_host             = "sawildcat.table.core.windows.net"
            primary_web_endpoint           = "https://sawildcat.z13.web.core.windows.net/"
            primary_web_host               = "sawildcat.z13.web.core.windows.net"
            resource_group_name            = "demo-resources-wildcat"
            secondary_access_key           = (sensitive value)
            secondary_connection_string    = (sensitive value)
            secondary_location             = "westus"
            tags                           = {}

            network_rules {
                bypass                     = [
                    "AzureServices",
                ]
                default_action             = "Allow"
                ip_rules                   = []
                virtual_network_subnet_ids = []
            }

            queue_properties {

                hour_metrics {
                    enabled               = true
                    include_apis          = true
                    retention_policy_days = 7
                    version               = "1.0"
                }

                logging {
                    delete                = false
                    read                  = false
                    retention_policy_days = 0
                    version               = "1.0"
                    write                 = false
                }

                minute_metrics {
                    enabled               = false
                    include_apis          = false
                    retention_policy_days = 0
                    version               = "1.0"
                }
            }
        }

    Plan: 0 to add, 1 to change, 0 to destroy.

    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value:

Once again, we shown what will change and prompted to `Enter a value:`. Type `yes` and press enter.

      Enter a value: yes

    module.storage_account.azurerm_storage_account.this: Modifying... [id=/subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat/providers/Microsoft.Storage/storageAccounts/sawildcat]
    module.storage_account.azurerm_storage_account.this: Modifications complete after 3s [id=/subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat/providers/Microsoft.Storage/storageAccounts/sawildcat]

    Apply complete! Resources: 0 added, 1 changed, 0 destroyed.

    Outputs:

    storage_account_id = /subscriptions/61bd6788-c44e-4677-bf0e-6c380785c8a8/resourceGroups/demo-resources-wildcat/providers/Microsoft.Storage/storageAccounts/sawildcat
    $

The modification has been applied.

Next, we'll destroy the infrastructure.