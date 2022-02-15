---
title: GCS buckets
nav_text: GCS
categories: sources
order: 5
---

## Example

Terrafile

```ruby
mod "demo3", source: "gcs::https://www.googleapis.com/storage/v1/terraform-example-modules/modules/example-module.zip//subfolder"
mod "demo4", source: "gcs::https://www.googleapis.com/storage/v1/terraform-example-modules/modules/example-module.tgz//subfolder"
```

Running:

    terraspace bundle

Will download the modules to:

    vendor/modules/demo3
    vendor/modules/demo4

## Install

In order to use gcs as a lono bundler source, please add the `google-cloud-storage` gem to your Terraspace project's Gemfile and run bundle.

    To add the gem to your Gemfile, you can run:

        bundle add google-cloud-storage

    Then download blueprints in defined your Terrafile with:

        terraspace bundle

{% include terrafile/archive-support.md %}
