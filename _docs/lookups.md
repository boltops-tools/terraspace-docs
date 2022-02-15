---
title: Lookups
---

The [Project Structure]({% link _docs/intro/structure.md %}) docs explains how modules and stacks are generally defined in the `app` folder. Modules and stacks can also be defined in the `vendor` folder also.

Terraspace commands like [terraspace build]({% link _reference/terraspace-build.md %}) and [terraspace up]({% link _reference/terraspace-up.md %}) search for modules in the `app/modules` and `vendor/modules` folders. It similar to how `LOAD_PATH` works. This allows 3rd party modules to be neatly organized.

## Example

Here's an example with some modules in the vendor folder.

    ├── app
    │   └── modules
    │       └── instance
    └── vendor
        └── modules
            ├── database
            └── network

In this case, there are database and network 3rd parties modules. There's also a normal project module called instance.

## Precedence

When there are 2 modules with the same name in both the `app/modules` and `vendor/modules` folder, the module in the `app/modules` folder takes higher precedence and wins.

Eventually, terraspace builds all the modules to the `.terraspace-cache` folder. Example:

    .terraspace-cache/us-west-2/dev/modules/database
    .terraspace-cache/us-west-2/dev/modules/instance
    .terraspace-cache/us-west-2/dev/modules/network

## terraspace bundle

The vendor additional lookup location can be particularly useful with modules declared in a [Terrafile]({% link _docs/terrafile/usage.md %}). You can add modules to your Terrafile definition and download them to the `vendor/modules` folder with:

    terraspace bundle

For more info, see the [Terrafile docs]({% link _docs/terrafile.md %}).
