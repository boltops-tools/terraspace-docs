---
title: "Dependencies Tfvars: Complex Types"
nav_text: "Complex Types"
categories: dependencies-tfvars
---

## Simple Types

Types like string, number, bool are simple and are straightforward to use.  For example:

    vpc_id = <%= terraform_output("vpc.vpc_id") %>

Can result in something like this:

    vpc_id = "vpc-123"

Next, we'll show how to use complex types.

## Complex Types

To understand how to use complex types, it helps to understand how the `terraform_output` helper works.  The `terraform_output` helper, eventually tells Terraspace to fetch outputs from the statefile. It then formats the data as a JSON string. See [Formatters]({% link _docs/dependencies/tfvars/formatters.md %}).

Ultimately, it's just JSON string written to the tfvars file by Terraspace. Since Terraform variables assignment syntax work with JSON, we can pass JSON straight from a terraform output to an input.

## Example 1: List of Strings (Array)

    subnet_ids = <%= terraform_output("vpc.subnet_ids") %>

Given that the output of the vpc stack subnet_ids' output is an `list(string)` type, this would be the result:

    subnet_ids = ["subnet-aaa", "subnet-bbb", "subnet-ccc"]

So it works.

## Example 2: Map (Hash)

    subnets = <%= terraform_output("vpc.subnets") %>

Given that the output of the vpc stack subnets' output is an `map(string)` type, this would be the result:

    subnets = {"subnet1":"subnet-aaa","subnet2":"subnet-bbb","subnet3":"subnet-ccc"}

Again, it works.

## Example 3: Accessing Attributes

To access the attributes of a complex type, you can first assign it to another terraform variable like [locals](https://www.terraform.io/docs/configuration/locals.html) first.

    locals {
      first_subnet = var.subnet_ids[0]
    }

Then you are able to use native Terraform HCL to grab the element, in this case, the first subnet. Then access the local variable like you normally would:

    local.first_subnet

