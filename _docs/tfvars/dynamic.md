---
title: "Tfvars: Dynamic"
---

The tfvars files get processed by ERB templating, providing some degree of dynamic control.

## Example

One example is maybe you want to use TS_ENV in your variables dynamically with the ERB.

app/stacks/demo/tfvars/base.tfvars:

    name = "<%= Terraspace.env %>-instance"

Then:

    TS_ENV=dev terraspace build demo

Results in:

    name = "dev-instance"

And:

    TS_ENV=prod terraspace build demo

Results in:

    name = "prod-instance"

{% include tfvars/instance_option_example.md %}

## Recommendation

Using ERB in the tfvar files is a pretty clean way of adding a little bit of dynamism. A good thing about the approach is that it keeps your Terraform module code purely native. When possible, it is recommended to use the ERB power that terraspace provides responsibly.
