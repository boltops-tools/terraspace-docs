---
title: Terraspace Plugins
nav_text: Plugins
category: top-level
subcategory: plugins
order: 14
---

Terraspace is a framework that adds conveniences to your Terraform workflow. For example, Terraspace automatically creates the backend storage like the s3 bucket, azure storage account, and gcs bucket. Each of these implementations are cloud-specific. Terraspace Plugins add cloud-specific functionality.

## Cloud Plugins

The baseline plugins are:

* [terraspace_plugin_aws]({% link _docs/plugins/aws.md %})
* [terraspace_plugin_azurerm]({% link _docs/plugins/azurerm.md %})
* [terraspace_plugin_google]({% link _docs/plugins/google.md %})

## Custom Plugin

You can make a custom plugin by looking at one of the baseline plugins. You create interface classes and register them to Terrapace. You can install the plugin by adding to your Terraspace project's `Gemfile`:

    gem "terraspace_plugin_MY_PLUGIN"

And running

    bundle

Once installed, the custom plugin integrates with Terraspace directly for a smooth user experience.
