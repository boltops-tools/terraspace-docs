---
title: Azure Helpers
nav_text: Azure
order: 2
category: helpers
---

List of Azure helpers:

{% assign docs = site.docs | where: "categories","helpers-azure" %}
{% for doc in docs -%}
  * [{{ doc.nav_text }}]({{ doc.url }})
{% endfor %}

## Notes

* By default, `TerraspacePluginAws.logger = Terraspace.logger`. This means, you can set `logger.level = "debug"` in `config/app.rb` to see more details.
* The Azure helpers are provided by [boltops-tools/terraspace_plugin_azure](https://github.com/boltops-tools/terraspace_plugin_azure).
