---
title: Terraspace Patterns
nav_text: Patterns
category: top-level
subcategory: patterns
order: 15
---

We'll cover some Terraspace and infrastructure-as-code patterns.

{% assign docs = site.docs | where: "categories","patterns" %}
{% for doc in docs -%}
* [{{ doc.nav_text }}]({{ doc.url }})
{% endfor %}
