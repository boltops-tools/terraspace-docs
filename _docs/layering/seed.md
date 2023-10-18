---
title: "Tfvars: Seed"
nav_text: Seed
category: layering
order: 1
---

The `terraspace seed` command creates starter tfvars files for you. It does this by evaluating your `variables.tf` file.

## Examples

    $ terraspace seed network
    Seeding tfvar files for network
          create  config/stacks/network/tfvars/dev.tfvars
    $

app/stacks/network/tfvars/dev.tfvars:

    # Required variables:
    project              = "string"
    region               = "string"
    cidr_block           = "string"
    secondary_cidr_block = "string"

    # Optional variables:
    # name_prefix        = "string"

To create starter tfvars file for a different environment, use `TS_ENV`. Example:

    $ TS_ENV=prod terraspace seed network
    Seeding tfvar files for network
          create  config/stacks/network/tfvars/prod.tfvars
    $

## Providing Example Values

You can provide example starter values by providing them in the description. Anything after the `IE:` or `Example:` text is used as the starter value.  Here's an example:

```hcl
variable "cidr_block" {
  description = "VPC CIDR. IE: 10.0.0.0/16"
  type        = string
}
```

The `terraspace seed` command will produce:

    # Required variables:
    cidr_block = "10.0.0.0/16"

The code self-documents the starter variables!

## Parsing Errors

In order to generate the tfvars file, terraspace parses the `variables.tf` file. The parser may not always parse HCL successfully. In this case, you will receive an error message, and you will have to create the tfvars file manually.

Improvements to the parsing library are welcomed. Here is the library used [boltops-tools/hcl_parser](https://github.com/boltops-tools/hcl_parser).
