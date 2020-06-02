---
title: Terraspace Plugins
---

Terraspace is a framework that adds conveniences to your Terraform workflow. For example, Terraspace automatically creates the backend storage like s3 and gcs buckets. These implementations are cloud-specific and handled by Terraform Plugins. So, Terraspace Plugins is a Terraspace component that add cloud-specific functionality.

## Custom Plugins

The baseline plugins that currently ship with Terraspace Core are:

* [terraspace_plugin_aws]({% link _docs/plugins/aws.md %})
* [terraspace_plugin_azurerm]({% link _docs/plugins/azurerm.md %})
* [terraspace_plugin_google]({% link _docs/plugins/google.md %})

You can make a custom plugin by looking at one of the baseline plugins. You create interfaces classes and register them to Terrapace. The interfaces may change.

Then you install the plugin with:

    gem install terraspace_plugin_MY_PLUGIN

Once installed, the custom plugin integrates with Terraspace directly for a smooth user experience.
