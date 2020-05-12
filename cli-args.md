# CLI Args

Terraspace calls out to the `terraform` command. You can configure common arguments for commands with `config/cli/args.rb`.

## Example

config/cli/args.rb

```ruby
command("init",
  arguments: ["-lock-timeout=20m"],
  env: {TF_VAR_key: "value"},
)

command("apply",
  arguments: ["-lock-timeout=21m"],
  env: {TF_VAR_key: "value"},
  var_files: ["a.tfvars", "b.tfvars"],
)
```

The arguments results in terraspace calling call the specified `terraform` commands with the additional arguments:

    terraform init -lock-timeout=20m
    terraform apply -lock-timeout=21m -var-file=a.tfvars -var-file=b.tfvars

The `a.tfvars` and `b.tfvars` files will only be added if the files exist.

Terraspace may add other args also. IE: The `-get` option is usually used with the `terraform init` command.

    terraform init -get -lock-timeout=20m

The env is also exported to the enviornment before the specified `terraform` command is ran.
