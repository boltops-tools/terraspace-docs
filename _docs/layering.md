---
title: Tfvars & Layering
---

{% include videos/learn.md
     url="terraspace-fundamentals/lessons/terraspace-tfvars-and-layering-reusing-code"
     img="https://learn-uploads.boltops.com/lumdbxxfk591zlxmck7ofavl0xxr" %}

Terraspace supports looking up tfvar files in conventional locations. This encourages an organized structure.

## Tfvars Structure

{% include tfvars/structure.md %}

## Layering

The the tfvar files are processed and "layered".  Example:

    TS_ENV=dev  terraspace up demo -y # merges base and dev
    TS_ENV=prod terraspace up demo -y # merges base and prod

[Tfvars Layering Docs]({% link _docs/layering/layering.md %})

## Seed Command

The `terraspace seed` command creates starter tfvars files for you. Examples:

    $ terraspace seed network
          create  app/stacks/network/tfvars/dev.tfvars
    $ TS_ENV=prod terraspace seed network
          create  app/stacks/network/tfvars/prod.tfvars
    $

[Tfvars Seed Docs]({% link _docs/layering/seed.md %}).
