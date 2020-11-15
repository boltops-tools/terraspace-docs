---
title: Custom Hooks
---

Terraspace supports a variety of hooks. They can be used to customize and finely control the Terraform lifecycle process.

## Hook Types

There are 3 hook types that operate at different levels:

1. Project-level: These hooks operate at the Terraspace project level. These hooks run on all stacks. They are defined in the root of the Terraspace project in the `config/hooks` folder. Project-level hooks run before stack or module level hooks.
2. Stack-level: These hooks operate at the stack level. They are defined in the stack folder. For example: `app/stacks/demo/config/hooks`. These hooks only run for that specific stack.
3. Module-level: These hooks operate at the module level. They are defined in the module folder. For example: `app/modules/example/config/hooks`.  These hooks only run for that specific module. Important: These hooks are only run when modules are deployed directly without a stack.  Deploying modules directly is generally not recommended, hence module-level hooks are not recommended. Terraspace implements them only for completeness.

There are several types of hooks, so you may be unsure which to use. When in doubt, use the stack-level hooks. You probably want hooks to fire when deploying a specific stack only.

## Hook Kinds

There are 2 hook kinds:

1. terraform: Terraform hooks get called when terraform commands get called. You can hook into `terraform` commands like `init`, `apply`, `destroy`, etc.
2. terraspace: Terraspace hooks get called when terraspace commands get called. You can hook into terraspace commands like `terraspace build`.

## Hook Docs

{% assign docs = site.docs | where: "categories","hooks" | sort:"order" %}
{% for doc in docs -%}
* [{{ doc.title }}]({{ doc.url }})
{% endfor %}
