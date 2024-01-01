---
title: Google Terraspace Plugin
nav_text: Google
category: plugins
order: 3
---

The Google Terraspace Plugin adds support for the automatic creation of the backend storage gcs bucket. By default:

* GCS Buckets have [versioning](https://cloud.google.com/storage/docs/object-versioning) enabled.

The plugin settings are configurable with:

config/plugins/google.rb

```ruby
TerraspacePluginGoogle.configure do |config|
  config.auto_create = true # set to false to completely disable auto creation

  config.gcs.versioning = true
end
```

For more docs, refer to the plugin itself: [terraspace_plugin_google](https://github.com/boltops-tools/terraspace_plugin_google).

## Plugin Options

Name | Description | Default
---|---|---
auto_create | Whether or not to automatically create the GCS bucket. | true
gcs.versioning | Whether or not enable versioning on the GCS bucket. | true

The full list refer to plugin source code: [terraspace_plugin_google](https://github.com/boltops-tools/terraspace_plugin_google/blob/master/lib/terraspace_plugin_google/interfaces/config.rb).
