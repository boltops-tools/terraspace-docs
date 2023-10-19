---
title: "Tfvars Location Thoughts"
category: layering
order: 10
---

Since Terraspace 2.2.15, the recommended location for tfvars in the `config/stacks` folder. For example:

    config/stacks/demo/tfvars/dev.tfvars

## The Reasons

The reasoning behind this recommendation:

1. It makes it a lot easier to see what has been deployed by looking at the `config/stacks` directory. You can simply run `tree config/stacks`.
2. Often people use `app/stacks` for the reusable code and don't even bother with `app/modules`. They configure their business-specific logic with tfvars files. By having tfvars in the `config/stacks` folder as mirror image of the `app/stacks` folder, you can separate the business-logic and reuse stacks.
3. The idea is that stacks can optionally ship with default tfvars files in `app/stacks/demo/tfvars`, and users can coverride them with `app/stacks/demo/tfvars` without touching the stack code.

It's easy to see what's been deployed by simply running `tree config/stacks`

    ❯ tree config/stacks
    config/stacks
    └── demo
        └── tfvars
            └── dev.tfvars


## Layering

Layering is performed in this order:

    config/terraform/tfvars/dev.tfvars
    app/stacks/demo/tfvars/dev.tfvars
    config/stacks/demo/tfvars/dev.tfvars <= highest precedence

Notice how `app/stacks/demo/tfvars` still works and is layered. So this recommendation completely compatiable with older stack code that has tfvars in the same folder.

## Move Script

If your tfvars files are in `app/stacks` and want to move them to `config/stacks`, here's a useful [move-tfvars.rb](https://gist.github.com/tongueroo/95a8e3c6d6d2e21c441cf7668e2b9117) script that you can use to quickly move your tfvars files from `app/stacks` to `config/stacks`. Although, the script will prompt you before moving the tfvars over, you should commit and backup your code before running the script.
Notice how `app/stacks/demo/tfvars` still works and is layered. So this recommendation completely compatiable with existing code.

**Usage**: To use the script download it and then run it from your terraspace project folder. Here's an example:

    ❯ ruby move-tfvars.rb
    Will move tfvars to new recommended location.
    Will move app/stacks/*/tfvars to config/stacks/*/.tfvars
    Any existing config/stacks/*/tfvars folders will be removed and replaced.
    It's recommended that you commit and save your code before running this script.

    Previewing move of tfvars files:

        app/stacks/demo/tfvars => config/stacks/demo/tfvars

    Are you sure you want to move all tfvars files? [y/N] y

    Moving tfvars files:

        app/stacks/demo/tfvars => config/stacks/demo/tfvars

    ❯

Double check:

    ❯ tree config/stacks
    config/stacks
    └── demo
        └── tfvars
            └── dev.tfvars
