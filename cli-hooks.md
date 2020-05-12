# CLI Hooks

Terraspace calls out to the `terraform` command. You can execute commands before and after each command with CLI hooks.

## Example

config/cli/hooks.rb

```ruby
before("init"
  execute: "echo hi",
)

after("apply",
  execute: "echo bye"
)
```

You can customize terraspace to call your commands.

## exit on fail

By default, if the hook commands fail, then terraspace will exit with the original hook error code.  You can change this behavior with the `exit_on_fail` option.

```ruby
before("init"
  execute: "/command/will/fail/but/will/continue",
  exit_on_fail: false,
)
```

## Mutiple Commands at Once

You can also specify multiple commands at once:

```ruby
before("init", "apply",
  execute: "echo hi",
)
```
