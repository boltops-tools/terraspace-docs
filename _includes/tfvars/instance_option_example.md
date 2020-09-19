## {{ include.heading }}

The terraspace CLI `options` are also available. Here's an interesting use of the options with the `--instance` option.

app/stacks/server/tfvars/base.tfvars:

    name = "<%= options[:instance] %>-server"

So:

    terraspace up server --instance bob

Results in:

    name = "bob-server"

So:

    terraspace up server --instance kevin

Results in:

    name = "kevin-server"
