---
title: Azure Terraspace Plugin
---

The Azure Terraspace Plugin adds support for the automatic creation of the backend storage Azure storage account, storage container, and resource group. By default:

The plugin settings are configurable with:

config/plugins/azure.rb

```ruby
TerraspacePluginAzure.configure do |config|
  config.auto_create = true # set to false to completely disable auto creation

  config.storage_account.sku.name = "Standard_LRS"
  config.storage_account.sku.tier = "Standard"
end
```

For more docs, refer to the plugin itself: [terraspace_plugin_azurerm](https://github.com/boltops-tools/terraspace_plugin_azurerm).