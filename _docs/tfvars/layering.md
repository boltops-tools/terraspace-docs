---
title: "Tfvars: Layering"
---

## Tfvars Structure

{% include tfvars/structure.md %}

The the tfvar files are processed and "layered".  Example:

    TS_ENV=dev  terraspace up core -y # merges base and dev
    TS_ENV=prod terraspace up core -y # merges base and prod

The tfvars files should genreally be within the `app/stacks` folder, as stacks can include business-specific logic.  For overriding and one-off purposes, terraspace also supports tfvars files else where.

## Examples

Terraspace materializes `tfvars` and adds layering. Example:

    $ terraspace build core
    $ cd .terraspace-cache/dev/stacks/core/
    $ ls *.tfvars
    1-base.auto.tfvars  2-dev.auto.tfvars
    $

Layering combines the base layer with the TS_ENV specific layer. Another example:

    $ TS_ENV=prod terraspace build core
    $ cd .terraspace-cache/prod/stacks/core/
    $ ls *.tfvars
    1-base.auto.tfvars  2-prod.auto.tfvars
    $

