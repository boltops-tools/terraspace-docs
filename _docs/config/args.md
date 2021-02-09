---
title: Custom Args
---

Terraspace supports customizing the args passed to the `terraform` commands:

## Args Types

You can customize CLI arguments in 3 different ways or "levels".

1. **Project-level**: Customizing args at the Terraspace project-level will adjust the args for all stacks. The args customizations are defined in the `config/args` folder. These customizationscan be overridden at the stack-level or module-level.
2. **Stack-level**: Customizing args the stack level will adjust only the args for the stack. For example, `app/stacks/demo`. The args customizations are defined in the `app/stacks/demo/config/args` folder.
3. **Module-level**: Customizing args the stack module level will adjust only the args for the module. For example, `app/modules/example`. The args customizations are defined in the `app/modules/example/config/args` folder. Also, these args customizations only applied when deploying the module directly without a stack. Deploying modules directly is generally not recommended, hence module-level args customizations are not recommended. Terraspace implements them only for completeness.

There are many ways to customize args, so you may be unsure which one is right to use.  When in doubt, use stack-level args customizations.  Start with customizing a specific stack and then go from there.

## Args Docs

{% assign docs = site.docs | where: "categories","args" | sort:"order" %}
{% for doc in docs -%}
* [{{ doc.title }}]({{ doc.url }})
{% endfor %}
