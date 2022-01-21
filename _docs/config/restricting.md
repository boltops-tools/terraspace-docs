---
title: Restricting Deployment
---

Terraspace builds a Terraform project and then deploys that project. This is covered in [How Terraspace Works]({% link _docs/intro/how-terraspace-works.md %}). This power may be too much for some folks who would prefer more restrictions.  You can configure which regions and envs that stacks can be deployed to with terraspace settings. Below are links covering how to achieve this.

{% assign docs = site.docs | where: "categories","restricting" | sort:"order" %}
{% for doc in docs -%}
* [{{ doc.title }}]({{ doc.url }})
{% endfor %}
