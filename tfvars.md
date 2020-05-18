# Tfvars

Terraspace supports looking up tfvar files in conventional locations. This encourages an organized structure.   Tfvar should generally be place within the `app/stacks/MOD/tfvars` folder. Example:

    app/stacks/core
    ├── main.tf
    ├── tfvars
    │   ├── base.tfvars
    │   ├── dev.tfvars
    │   └── prod.tfvars
    └── variables.tf

You don't have to specify the `-var-file` option, the tfvars files are automatically processed.

## Layering

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

## Additional Lookup Locations

It is generally encouraged to create tfvars files in the `app/modules/MOD/tfvars` folder. Terraspace considers additional lookup paths though.  The lookup paths are:

    seed/tfvars/stacks/MOD
    seed/tfvars/modules/MOD
    app/stacks/MOD/tfvars

Terraspace offers this flexibility for one-off purposes.  For example:

* You may also want to try out an app/modules/MOD quickly without having to define a stack.
* You may need to temporarily override the tfvars files embedded within the `app/stacks/MOD/tfvars`.

Note, `app/modules/*/tfvars` are **not** are not considered in the lookup paths at all. This is because modules should be reusable.

Remember modules and like "functions" and tfvars are like "parameters" passed to them. Putting the tfvars files within the same module directory would be akin to hard coding parameters.

## Structure

Here's an example folder structure. The tfvars files should mainly be in `app/stacks/MOD/tfvars` folders.  However, you can create one-off `seed/tfvars` folders that mirror the modules and stack structure.

    .
    ├── app
    │   ├── modules
    │   │   ├── instance
    │   │   └── vpc
    │   └── stacks
    │       └── core
    │           └── tfvars
    │               └── dev.tfvars
    └── seed
        └── tfvars
            └── modules
                └── instance
                    └── dev.tfvars

## Why tfvars in Stacks?

To understand why terraspace encourages creating your tfvars within the `app/stack/MOD/tfvars` folder, it is key to understand the difference between `app/modules` and `app/stacks`. The difference is how you use them.

* Stacks are meant to be used to group together modules. It makes sense to include business-specific logic here.
* Whereas modules are smaller pieces that are meant to be reused. It does not make sense to include business-specific logic in here.
