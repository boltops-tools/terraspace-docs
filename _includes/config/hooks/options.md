## General Form

```ruby
before(COMMAND_NAME, OPTIONS)
````

The command name corresponds to the `{{ include.command }}` commands.

## Hook Options

Name | Description
---|---
label | A human-friendly label so you can see what hooks is being run.
execute | The script or command to run. IE: path/to/some/script.sh
exit_on_fail | Whether or not to continue process if the script returns an failed exit code.

## Ruby Hooks

Instead of using a script for the hook `execute` option, you can also use a Ruby object. This provides some more control over the current process. See: [Ruby Hooks]({% link _docs/config/hooks/ruby.md %})
