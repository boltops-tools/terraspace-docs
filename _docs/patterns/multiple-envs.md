---
title: Multiple Environments with Layering
nav_text: Multiple Environments
categories: patterns
---

You can use Terraspace to easily create multiple environments with the same infrastructure code.  This is thanks to [Terraspace Layering]({% link _docs/layering/layering.md %}). We'll walk through an example to help understand how it works.

## Creating Multiple Environments

To create multiple environments like dev and prod just change TS_ENV. Example:

    TS_ENV=dev  terraspace up demo
    TS_ENV=prod terraspace up demo

Different tfvar files will be used for different environments.

## Tfvars Structure

{% include tfvars/structure.md %}

The tfvar files are processed and "layered".  Example:

    TS_ENV=dev  terraspace up demo -y # merges base and dev
    TS_ENV=prod terraspace up demo -y # merges base and prod

You can use the same infrastructure code with different variables to create different versions of your environments easily.

Learn more about: [Tfvars & Layering]({% link _docs/layering/layering.md %}).
