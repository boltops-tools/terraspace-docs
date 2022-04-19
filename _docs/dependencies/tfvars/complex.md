---
title: "Dependencies Tfvars: Complex Types"
nav_text: "Complex Types"
categories: dependencies-tfvars
---

{% include videos/learn.md
     url="terraspace-fundamentals/lessons/terraspace-tfvars-complex-types-transforming-data-structures"
     img="https://learn-uploads.boltops.com/m6b4ul9lg74v8w6mvt1ahqwn1xr3" %}

## Simple Types

Types like string, number, bool are simple and are straightforward to use.  For example:

    vpc_id = <%= output("vpc.vpc_id") %>

Can result in something like this:

    vpc_id = "vpc-123"

Next, we'll show how to use complex types.

## Complex Types

To understand how to use complex types, it helps to understand how the `output` helper works.  The `output` helper, eventually tells Terraspace to fetch outputs from the statefile. It then formats the data as a JSON string.

Ultimately, it's just JSON string written to the tfvars file by Terraspace. Since Terraform variables assignment syntax work with JSON, we can pass JSON straight from a terraform output to an input.

## Example 1: List of Strings (Array)

    subnet_ids = <%= output("vpc.subnet_ids") %>

Given that the output of the vpc stack subnet_ids' output is an `list(string)` type, this would be the result:

    subnet_ids = ["subnet-aaa", "subnet-bbb", "subnet-ccc"]

So it works.

## Example 2: Map (Hash)

    subnets = <%= output("vpc.subnets") %>

Given that the output of the vpc stack subnets' output is an `map(string)` type, this would be the result:

    subnets = {"subnet1":"subnet-aaa","subnet2":"subnet-bbb","subnet3":"subnet-ccc"}

Again, it works.

## Example 3: Accessing Attributes from Complex Types with HCL

To access the attributes of a complex type, you can first assign it to another [terraform local variable](https://www.terraform.io/docs/configuration/locals.html) first.

    locals {
      first_subnet = var.subnet_ids[0]
    }

Then you are able to use native Terraform HCL to grab the element, in this case, the first subnet. Then use the local variable like you normally would:

    local.first_subnet

## Example 4: Accessing Attributes from Complex Types with Ruby

You can also access the elements within a complex type with pure Ruby. Here's a complex output:

```sh
output "complex_output" {
  value = [{
    a = 1
    b = 2
  },{
    a = 3
    b = 4
  }]
}
```

The `.to_ruby` method returns the data as a native Ruby object.

* If the value is an Array, the object is an Array
* If the value is a Hash, the object is Hash
* And so forth

This allows you to do things like:

    length = <%= output("stack.complex_output").to_ruby.last["a"].to_json %>

Which results in:

    length = 3

So you can use the full power of Ruby to filter and manipulate data structures before passing it to the input variable.
