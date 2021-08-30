---
title: Terraform Args
nav_text: Terraform
categories: args
order: 8
---

{% include videos/learn/args.md %}

Terraspace calls out to the `terraform` command. You can configure common arguments for commands with `config/args/terraform.rb`.

## Example

config/args/terraform.rb

```ruby
command("init",
  args: ["-lock-timeout=20m"],
  env: {TF_VAR_key: "value"},
)

command("apply",
  args: ["-lock-timeout=21m"],
  env: {TF_VAR_key: "value"},
  var_files: ["a.tfvars", "b.tfvars"],
)
```

The arguments are added to the specified `terraform` commands when terraspace calls them:

    terraform init -lock-timeout=20m
    terraform apply -lock-timeout=21m -var-file=a.tfvars -var-file=b.tfvars

The `a.tfvars` and `b.tfvars` files will only be added if the files exist. The files should be the stack folder itself. IE: `app/stacks/demo/a.tfvars`

Terraspace may add other args also. IE: The `-get` option is usually used with the `terraform init` command.

    terraform init -get -lock-timeout=20m

## Mutiple Commands at Once

You can also specify multiple commands at once:

```ruby
command("init", "apply",
  args: ["-lock-timeout=20m"],
  env: {TF_VAR_var_from_environment: "value"},
)
```

## With Shorthand

You can use shorthand notation to target terraform commands that use certain arguments. The shorthand starts with `with_`.  Example:

```ruby
commands(:with_vars,
  env: {TF_VAR_var_from_environment: "value"},
  var_files: ["a.tfvars", "b.tfvars"],
)
```

Here are the available shorthands:

Shorthand | Description
--- | ---
with_input | Commands that take the `-input` argument.
with_locking | Commands that take the `-lock-timeout` argument.
with_parallelism | Commands that take the `-parallelism` argument.
with_vars | Commands that take the `-var` or `-var-file` args.
