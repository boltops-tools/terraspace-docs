---
title: Terraspace Cloud Permissions
nav_text: Permissions
category: cloud
order: 2
---

Terraspace Cloud provides flexible team-based permissions system. You can define rules to allow which projects, envs, stacks, etc users have permissions on.

{% assign docs = site.docs | where: "categories","permissions" | sort:"order" %}
{% for doc in docs -%}
1. [{{ doc.nav_text }}]({{ doc.url }})
{% endfor %}

Next, we'll go over how to add permissions.
