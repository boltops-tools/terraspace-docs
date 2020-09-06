---
title: "Dependencies Tfvars Formatters"
nav_text: "Formatters"
categories: dependencies-tfvars
---

You might have noticed that the `terraform_output` helper calls are not surrounded by quotes:

    vpc_id = <%= terraform_output('vpc.vpc_id') %> # no quotes

Vs

    vpc_id = "<%= terraform_output('vpc.vpc_id') %>" # quotes

This is because the Terraspace formats the value with to `.to_json` call. The reason JSON is use is discussed in [Complex Types]({% link _docs/dependencies/tfvars/complex.md %}).

Terraspace supports also different formatters.

## Formatters

There are 2 formatters:

1. json
2. string

### json

The default formatter is json. So you usually won't have to specify it. Here's how you would though:

    vpc_id = <%= terraform_output('vpc.vpc_id', format: "json") %> # will not need quotes

### string

You can also use the string formatter.

    vpc_id = "<%= terraform_output('vpc.vpc_id', format: "string") %>" # will need quotes
