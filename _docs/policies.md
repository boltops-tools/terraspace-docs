---
title: Policies
category: top-level
subcategory: policies
order: 20
---

Misc Docs:

{% assign docs = site.docs | where: "categories","misc" | sort:"order" %}
{% for doc in docs -%}
* [{% if doc.nav_text %}{{ doc.nav_text }}{% else %}{{ doc.title }}{% endif %}]({{ doc.url }})
{% endfor %}
