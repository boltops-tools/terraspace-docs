---
title: Azure Terraspace Plugin
---

The Azure Terraspace Plugin adds support for the automatic creation of the backend storage Azure storage account, storage container, and resource group. By default, as of v0.4.0:

* Azure Storage Accounts have [versioning](https://docs.microsoft.com/en-us/azure/storage/blobs/versioning-overview) enabled.
* Block Public Access: [disallow blob public access on Azure Storage account](https://azure.microsoft.com/en-us/updates/choose-to-allow-or-disallow-blob-public-access-on-azure-storage-accounts/)
* Enable Data Protection by enabling [soft delete](https://docs.microsoft.com/en-us/azure/storage/blobs/soft-delete-blob-overview) for blobs and containers and retain data for 365 days.

The plugin settings are configurable with:

config/plugins/azurerm.rb

```ruby
TerraspacePluginAzurerm.configure do |config|
  config.auto_create = true # set to false to completely disable auto creation

  config.storage_account.sku.name = "Standard_LRS"
  config.storage_account.sku.tier = "Standard"

  config.storage_account.update_existing = false
  config.storage_account.allow_blob_public_access = false

  # data protection management
  config.storage_account.configure_data_protection_for_existing = false
  config.storage_account.delete_retention_policy.days = 365
  config.storage_account.delete_retention_policy.enabled = true
  config.is_versioning_enabled = true

  config.tags = {env: Terraspace.env, terraspace: true}
end
```

## Plugin Options

Name | Description | Default
---|---|---
auto_create | Whether or not to automatically create the Azure Storage Account. | true
location | Azure location. By default, it is automatically detected. | nil
secrets.vault | Key Vault name. Used by the [azure_secret]({% link _docs/helpers/azure/secrets.md %}) helper. | nil
storage_account.sku.name | Storage account SKU name. | Standard_LRS
storage_account.sku.tier | Storage account SKU tier. | Standard
storage_account.update_existing | Whether or not to update the existing storage account settings. Applies to settings directly set via the Azure Storage Account Service. Azure Ruby SDK Docs: [StorageAccountUpdateParameters](https://rubydoc.info/gems/azure_mgmt_storage/Azure/Storage/Mgmt/V2021_01_01/Models/StorageAccountUpdateParameters). Surfaced settings to Terraspace Azure plugin: [terraspace_plugin_azurerm/interfaces/backend/storage_account.rb](https://github.com/boltops-tools/terraspace_plugin_azurerm/blob/master/lib/terraspace_plugin_azurerm/interfaces/backend/storage_account.rb#L58)  IE: `allow_blob_public_access` | false
storage_account.allow_blob_public_access | Whether or not to allow blob public access at the storage account level. Data is already private by default. This is an additional guardrail | false
storage_account.configure_data_protection_for_existing | Whether or not to configure the data protection settings for existing Storage Accounts. By default this is off to avoid the Azure API every time `terraspace up` is ran. For brand new Storage Accounts created by Terraspace, data protection settings will be configured. Applies to settings via the Azure BlobService. Azure SDK Docs: [BlobServiceProperties](https://rubydoc.info/gems/azure_mgmt_storage/Azure/Storage/Mgmt/V2021_01_01/Models/BlobServiceProperties) Surfaced settings to Terraspace Azure Plugin: [terraspace_plugin_azurerm/interfaces/backend/storage_account.rb](https://github.com/boltops-tools/terraspace_plugin_azurerm/blob/master/lib/terraspace_plugin_azurerm/interfaces/backend/storage_account.rb#L75) | false
storage_account.delete_retention_policy.days | Number of days to retain blobs and containers after deleted. | 365
storage_account.delete_retention_policy.days | Number of days to retain blobs and containers after deleted. | true
storage_account.blob_delete_retention_policy.days | Number of days to retain blobs after deleted. Overrides the `delete_retention_policy.days` setting. | 365
storage_account.blob_delete_retention_policy.enabled | Whether or not to enable the retention policy for blobs. Overrides the `delete_retention_policy.enabled` setting. | true
storage_account.container_delete_retention_policy.days | Number of days to retain containers after deleted. Overrides the `delete_retention_policy.days` setting. | 365
storage_account.container_delete_retention_policy.enabled | Whether or not to enable the retention policy for containers. Overrides the `delete_retention_policy.enabled` setting. | true
storage_account.is_versioning_enabled | Enables versioning for blobs. | true

The full list refer to plugin source code: [terraspace_plugin_azurerm](https://github.com/boltops-tools/terraspace_plugin_azurerm/blob/master/lib/terraspace_plugin_azurerm/interfaces/config.rb).

