---
title: Google Terraspace Plugin
---

The Google Terraspace Plugin adds support for the automatic creation of the backend storage gcs bucket. By default:

* GCS Buckets have [versioning](https://cloud.google.com/storage/docs/object-versioning) enabled.

The plugin settings are configurable with:

config/plugins/google.rb

```ruby
TerraspacePluginGoogle.configure do |config|
  config.gcs.versioning = true
end
```

For more docs, refer to the plugin itself: [terraspace_plugin_google](https://github.com/boltops-tools/terraspace_plugin_google).