---
title: Terraspace Plugins
---

Terraspace is a framework that adds conveniences to your Terraform workflow. For example, Terraspace automatically creates the backend storage like s3 and gcs buckets. These implementations are cloud-specific and handled by Terraform Plugins. So, Terraspace Plugins add cloud-specific functionality.

## Custom Plugins

The baseline Plugins that currently ship with Terraspace Core are:

* [terraspace_plugin_aws](https://github.com/boltops-tools/terraspace_plugin_aws)
* [terraspace_plugin_google](https://github.com/boltops-tools/terraspace_plugin_google)

You can make a custom plugin by looking at one of the baseline plugins.  There are a few interfaces classes that should be defined. You will also have to install the plugin with:

    gem install terraspace_plugin_MY_PLUGIN

Once installed, the custom plugin integrates with Terraspace directly for a smooth user experience.
