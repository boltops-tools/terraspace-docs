---
title: AWS Helpers
nav_text: AWS
order: 2
category: helpers
subcategory: helpers-aws
---

List of AWS helpers:

{% assign docs = site.docs | where: "categories","helpers-aws" %}
{% for doc in docs -%}
  * [{{ doc.nav_text }}]({{ doc.url }})
{% endfor %}

## Notes

* By default, `TerraspacePluginAws.logger = Terraspace.logger`. This means, you can set `logger.level = "debug"` in `config/app.rb` to see more details.
* The AWS helpers are provided by [boltops-tools/terraspace_plugin_aws](https://github.com/boltops-tools/terraspace_plugin_aws).
