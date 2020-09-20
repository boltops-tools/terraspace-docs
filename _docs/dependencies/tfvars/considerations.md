---
title: "Dependencies Tfvars Considerations"
nav_text: "Considerations"
categories: dependencies-tfvars
---

Below are some things you should consider when using dependencies and tfvars.  They may help you understand how Terraspace dependencies and tfvars work.

## Compile Time

Terraspace always evaluates all layered tfvars files at terraspace compile time. This means helpers like `terraform_output` and `depends_on` will always register the dependencies with Terraspace when they are called. Even if you comment out the tfvar line like so:

    # vpc_id = <%= terraform_output('vpc.vpc_id') %> # notice comment at the start of the line

The dependencies will still register with Terraspace. You must delete the line or comment out the ERB with `<%#` instead of `<%=` to instead to remove the dependency.  Example:

    # vpc_id = <%# terraform_output('vpc.vpc_id') %> # notice <%# vs <%=

## Formatters

By default, the output value is formatted to JSON. The reason json is use is discussed in [Complex Types]({% link _docs/dependencies/tfvars/complex.md %}). You can also use different [Formatters]({% link _docs/dependencies/tfvars/formatters.md %}).

## Internals

A little note about the `terraform_output` helper internals. The `terraform_output` actually returns an OutputProxy object not an actual JSON string. The proxy object allows Terraspace to process things whether the statefile is available or unavailable. As such, this will not work:

    <%= JSON.load(terraform_output("stack.list_output")).first %>

The proxy object can ultimately hold any type of data, not just a string. So the `JSON.load` does not work. Instead, you can use HCL and locals to access elements in the data structure. See: [Complex Types Accessing Attributes]({% link _docs/dependencies/tfvars/complex.md %}).
