## {{ include.heading }}

Here's an example with the `TS_EXTRA` env var in a tfvars file.

app/stacks/server/tfvars/base.tfvars:

    name = "<%= Terraspace.extra %>-server"

So:

    TS_EXTRA=bob terraspace up server

Results in:

    name = "bob-server"

So:

    TS_EXTRA=kevin terraspace up server

Results in:

    name = "kevin-server"
