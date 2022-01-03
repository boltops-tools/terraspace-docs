---
title: Terraspace Helpers
---

Terraspace helpers are methods that can be call during the Terraspace build stage. The `expansion` method you see in the [config/backend examples]({% link _docs/config/backend/examples/s3.md %}) is a built-in helper. Terraspace includes built-in and cloud-provider specific helpers. Additionally, Terraspace allow you to write and add your own custom helpers and easily extend the framework.

{% assign docs = site.docs | where: "categories","helpers" %}
{% for doc in docs -%}
* [{{ doc.nav_text }}]({{ doc.url }})
{% endfor %}
