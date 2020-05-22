# Seed: Tfvars Starter Files

The `terraspace seed` command creates starter tfvars files for you. It does this by evaluating your `variables.tf` file.

## Examples

    $ terraspace seed network
    Seeding tfvar files for network
          create  app/stacks/network/tfvars/dev.tfvars
    $

app/stacks/network/tfvars/dev.tfvars:

    # Required variables:
    project              = "string"
    region               = "string"
    cidr_block           = "string"
    secondary_cidr_block = "string"

    # Optional variables:
    name_prefix          = "string"

To create starter tfvars file for a different environment, use `TS_ENV`. Example:

    $ TS_ENV=prod terraspace seed network
    Seeding tfvar files for network
          create  app/stacks/network/tfvars/prod.tfvars
    $

## Where Option

By default, the `seed` command detects where the module came from IE: the `app/stacks` or `app/modules` folder. Based on this, it will generate starter files within the `app` or `seed` folder per [TFVars Docs](../tfvars.md).

You can override this with the `--where` option. Example:

    $ terraspace seed network --where seed
    Seeding tfvar files for network
          create  seed/tfvars/stacks/network/dev.tfvars
    $

## Parsing Errors

In order to generate the tfvars file, terraspace parses the `variables.tf` file. The parser may not always parse HCL successfully. In this case, you will receive an error message, and you will have to create the tfvars file manually.

Improvements to the parsing library are welcomed. Here is the library used [tongueroo/hcl_variables](https://github.com/tongueroo/hcl_variables).