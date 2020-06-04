---
title: CLI Args
---

Terraspace calls out to the `terraform` command. You can configure common arguments for commands with `config/cli/args.rb`.

## Example

config/cli/args.rb

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

The `a.tfvars` and `b.tfvars` files will only be added if the files exist.

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

You can use the `with_*` shorthand helpers to target terraform commands that use certain arguments.

Helper | Description
--- | ---
with_input | Commands that make use of the `-input` argument.
with_locking | Commands that make use of locking, the `-lock-timeout` argument.
with_parallelism | Commands that make use parallelism, the `-parallelism` argument.
with_vars | Commands that make use of the `-var` or `-var-file` args.

### Example

```ruby
commands(:with_vars,
  env: {TF_VAR_var_from_environment: "value"},
  var_files: ["a.tfvars", "b.tfvars"],
)
```