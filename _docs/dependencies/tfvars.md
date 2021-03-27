---
title: "Dependencies: Tfvars"
nav_text: "Tfvars"
categories: dependencies
---

As mentioned in [Deploy Multiple]({% link _docs/intro/deploy-all.md %}), Terraspace allows you to deploy multiple stacks with a single command. Terraspace automatically detects the dependencies when you wire the outputs of one stack to another stack's input variables.

Here is some additional info about the dependencies-related helper methods.

Name | Description
--- | ---
output | Wire stack outputs to inputs. Terraspace will infer the dependency.
depends_on | Explicitly configure the dependency.

## output helper

The general form for `output` is

```ruby
output("DEPENDANT_STACK.OUTPUT_KEY", options={})
```

Where `DEPENDANT_STACK` is another stack in your terraform project, and `OUTPUT_KEY` is an output defined in that stack. Here's an tfvars example:

app/stacks/instance/tfvars/base.tfvars

    vpc_id = <%= output('vpc.vpc_id') %>

### Mock Values

When running `terraspace all plan`, the dependent stacks may not have been applied yet. You can provide mock values so the plan can be successful.  Example:

app/stacks/instance/tfvars/base.tfvars

    vpc_id = <%= output('vpc.vpc_id', mock: 'vpc-111') %>

The mock values are only used if the dependent stacks have not yet been applied. Once the dependent stacks are applied, actual values are used instead.

## depends_on helper

There is also a `depends_on` helper method that can be used to declare dependencies without having to wire outputs to input variables.  Example:

app/stacks/instance/tfvars/base.tfvars

    <% depends_on('vpc') %>

Remember you do not need to declare `depends_on` if you are already using `output` to inputs to outputs. Terraspace will infer the dependencies automatically. It is fine to declare both, though you may forget to remove the `depends_on` declaration when you remove all the `output` declarations.

You can also specify multiple stacks with depends_on:

    <% depends_on('vpc', 'redis', 'mysql') %>
