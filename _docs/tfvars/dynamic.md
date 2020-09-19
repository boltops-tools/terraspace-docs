---
title: "Tfvars: Dynamic"
---

The tfvars files get processed by ERB templating, providing some dynamic control.

## Example 1: terraform_output

A useful helper is `terraform_output`, it allows you to grab the output value from another stack and use it as an input variable for another stack.

app/stacks/demo/tfvars/base.tfvars:

    vpc_id = <%= terraform_output("vpc.vpc_id")" %>

Terraspace also uses this information to build the dependency graph and deploys the dependent stacks in the correct order with `terraspace all up`. Learn more: [Deploy Multiple Stacks]({% link _docs/intro/deploy-all.md %}).

## Example 2: General

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

{% include tfvars/instance_option_example.md heading="Example 3: Instance Option"  %}

## Recommendation

Using ERB in the tfvar files is a pretty clean way of adding a little bit of dynamism. A good thing about the approach is that it keeps your Terraform module code purely native. When possible, it is recommended to use the ERB power that terraspace provides responsibly though.
