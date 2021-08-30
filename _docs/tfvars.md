---
title: Tfvars & Layering
---

{% include videos/learn.md
     url="terraspace-fundamentals/lessons/terraspace-tfvars-and-layering-reusing-code"
     img="https://uploads-learn.sandbox.boltops.com/iosqrl57a940h5mdkk05jdv52bze" %}

Terraspace supports looking up tfvar files in conventional locations. This encourages an organized structure.

## Tfvars Structure

{% include tfvars/structure.md %}

## Layering

The the tfvar files are processed and "layered".  Example:

    TS_ENV=dev  terraspace up demo -y # merges base and dev
    TS_ENV=prod terraspace up demo -y # merges base and prod

[Tfvars Layering Docs]({% link _docs/tfvars/layering.md %})

## Seed Command

The `terraspace seed` command creates starter tfvars files for you. Examples:

    $ terraspace seed network
          create  app/stacks/network/tfvars/dev.tfvars
    $ TS_ENV=prod terraspace seed network
          create  app/stacks/network/tfvars/prod.tfvars
    $

[Tfvars Seed Docs]({% link _docs/tfvars/seed.md %}).
