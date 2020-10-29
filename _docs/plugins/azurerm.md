---
title: Azure Terraspace Plugin
---

The Azure Terraspace Plugin adds support for the automatic creation of the backend storage Azure storage account, storage container, and resource group. By default:

The plugin settings are configurable with:

config/plugins/azurerm.rb

```ruby
TerraspacePluginAzurerm.configure do |config|
  config.auto_create = true # set to false to completely disable auto creation

  config.storage_account.sku.name = "Standard_LRS"
  config.storage_account.sku.tier = "Standard"
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

The full list refer to plugin source code: [terraspace_plugin_azurerm](https://github.com/boltops-tools/terraspace_plugin_azurerm/blob/master/lib/terraspace_plugin_azurerm/interfaces/config.rb).

