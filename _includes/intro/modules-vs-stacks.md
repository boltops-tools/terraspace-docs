## Modules vs Stacks

Both modules and stacks are terraform modules. The difference is organizational and how they are can be used.

* Modules are reusable pieces of code. Generally, it contains non-business specific logic.
* Stacks can be used to group together modules. Generally, this is where more business-specific logic can go.

{% if include.provider == "none" %}
For example, the `app1` stack could be designed to use a `server` module. Another, `app2` stack could use a `server` and a `database` modules.
{% else %}
For example, the `app1` stack could be designed to use an `instance` module. Another, `app2` stack could use an `instance` and `rds` modules.
{% endif %}

There are no hard rules. Stacks can be reusable and you provide the tfvars config. It's up to you.
