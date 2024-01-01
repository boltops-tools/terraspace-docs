---
title: Terraspace Helpers
nav_text: Helpers
category: top-level
subcategory: helpers
order: 11
---

Terraspace helpers are methods that can be call during the Terraspace build stage. The `expansion` method you see in the [config/backend examples]({% link _docs/config/backend/examples/s3.md %}) is a built-in helper. Terraspace includes built-in and cloud-provider specific helpers. Additionally, Terraspace allow you to write and add your own custom helpers and easily extend the framework.

{% assign docs = site.docs | where: "categories","helpers" | sort:"order" %}
{% for doc in docs -%}
* [{% if doc.nav_text %}{{ doc.nav_text }}{% else %}{{ doc.title }}{% endif %}]({{ doc.url }})
{% endfor %}
