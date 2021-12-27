## Modules vs Stacks

Both modules and stacks are terraform modules. The difference is organizational and how they are meant to be used.

* Modules are reusable pieces of code. Generally, it contains non-business specific logic.
* Stacks are meant to be used to group together modules. Generally, this is where business-specific logic goes.

{% if include.provider == "none" %}
For example, the `app1` stack could be designed to use a `server` module. Another, `app2` stack could use a `server` and a `database` modules.
{% else %}
For example, the `app1` stack could be designed to use an `instance` module. Another, `app2` stack could use an `instance` and `rds` modules.
{% endif %}