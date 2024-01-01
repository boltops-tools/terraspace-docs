---
title: Sources
category: terrafile
subcategory: sources
order: 3
---

Terrafile supports a variety of sources.

{% assign docs = site.docs | where: "categories","sources" | sort:"order" %}
{% for doc in docs -%}
* [{{ doc.title }}]({{ doc.url }})
{% endfor %}

