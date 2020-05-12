# CLI Args

Terraspace calls out to the `terraform` command. You can configure common arguments for commands with `config/cli/args.rb`.

## Example

config/cli/args.rb

```ruby
command("init",
  arguments: ["-lock-timeout=20m"],
  env: {TF_VAR_var_from_environment: "value"},
)

command("apply",
  arguments: ["-lock-timeout=20m"],
  env: {TF_VAR_var_from_environment: "value"},
  var_files: ["a.tfvars", "b.tfvars"],
)
```
