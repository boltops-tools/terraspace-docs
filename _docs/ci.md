---
title: "CI: Continuous Integration"
nav_text: CI/CD
category: top-level
subcategory: ci
order: 5
---

You can set up Terraspace with your own choice of CI.

{% assign docs = site.docs | where: "categories","ci" | sort:"order" %}
{% for doc in docs -%}
* [{% if doc.nav_text %}{{ doc.nav_text }}{% else %}{{ doc.title }}{% endif %}]({{ doc.url }})
{% endfor %}
