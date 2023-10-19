---
title: "Tfvars: Additional Lookups"
nav_text: Additional Lookups
category: layering
order: 8
---

You can create tfvars files in either the `app/stacks/MOD/tfvars` or `config/stacks/MOD/tfvars` folders. Terraspace considers both lookup paths.  It's similar to how `LOAD_PATH` works. The lookup paths are:

    config/stacks/MOD/tfvars
    app/stacks/MOD/tfvars

## Additional Seed Structure

Here's an example folder structure. The app and config folder structure mirror each other.

    ├── app
    │   └── stacks
    │       └── network
    │           └── tfvars
    │               └── dev.tfvars
    └── config
        └── stacks
            └── network
                └── tfvars
                    └── dev.tfvars

The tfvars files in the config folder take higher precedence than the app folder. This allows stacks from vendors to contain defaults but overriden by your project.

## One-Off Purposes

Terraspace offers this flexibility for one-off purposes.  For example:

* You may also want to try out an app/modules/MOD quickly without having to define a stack.
* You may need to temporarily override the tfvars files embedded within the `app/stacks/MOD/tfvars`.

It is strongly recommended to **not** define tfvars in `app/modules/*/tfvars`. This is because modules should be reusable.

Remember modules are like "functions" and tfvars are like "parameters" passed to them. Putting the tfvars files within the same module directory would be akin to hard coding parameters.

## Stacks vs Modules

Stacks are just modules.  The difference is how you use them.

* Stacks are meant to be used to group together modules. It makes sense to include business-specific logic here.
* Whereas modules are smaller pieces that are meant to be reused. It does not make sense to include business-specific logic in here.
