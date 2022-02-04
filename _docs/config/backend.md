---
title: Backend Config
---

You can configure the backend for terraform to use with `config/terraform/backend.tf`.
Below are examples.

You may also be interested in:

* [Statefile Approaches and Thoughts]({% link _docs/state/approaches.md %})
* [Configuring Backends for Existing Systems]({% link _docs/state/existing.md %})

___

## Building

When you run `terraspace` commands, it will use the files in the `config/terraform` folder and builds them with the deployed module.  For example, let's say you have an `app/stacks/demo` stack:

    ├── app
    │   ├── modules
    │   │   └── instance
    │   └── stacks
    │       └── demo
    └── config
        └── terraform
            └── backend.tf

Running:

    terraspace up demo

Builds a `.terraspace-cache/dev/stacks/demo/backend.tf` using the `config/terraform/backend.tf`.  If you want to just build the files without deploying, you can also use `terraspace build`.

## Backend Examples

{% assign docs = site.docs | where: "categories","backend-examples" | sort:"order" %}
{% for doc in docs -%}
* [{{ doc.nav_text }}]({{ doc.url }})
{% endfor %}

___

## Variables Available

For variables available see [Backend Config Variables]({% link _docs/config/backend/variables.md %})

___

## Cleanup Behavior: Strip Trailing and Remove Double Slashes

Terraspace expansion will remove the trailing dashes and slashes in case the instance option is at the end and is not set.  For example, let's say `INSTANCE` is not set.

    :REGION/:ENV/:MOD_NAME/:INSTANCE

Will result in:

    us-west-2/dev/demo # notice there's no trailing slash

Also, consecutive double slashes like `//` are squeezed into a single slash `/`. This done for the case when a variable inbetween the slashes is not set.  However, if the `//` is part of `http://` or `https://`, then the `//` is kept.