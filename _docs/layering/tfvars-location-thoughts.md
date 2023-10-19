---
title: "Tfvars Location Thoughts"
category: layering
order: 10
---

Since Terraspace 2.2.15, the recommended location for tfvars in the `config/stacks` folder. For example:

    config/stacks/demo/tfvars/dev.tfvars

## The Reasons

The reasoning behind this recommendation:

1. It makes it a lot easier to see what has been deployed by looking at the `config/stacks` directory. You can simply run a `tree config/stacks`.
2. Often people use `app/stacks` the the reusable code and don't even bother with `app/modules`. They configure their business-specific logic with tfvars files. By having tfvars in at the `config/stacks` folder as mirror image of the `app/stacks` folder, you can separate the business-logic and reuse stacks.
3. The idea is that stacks can optionally ship with default tfvars files in `app/stacks/demo/tfvars`. And users can completely override them without touching the stack code.

Look at how easy it is to see what's been deployed:

Additionally, found this it easier to see what stacks have been deployed by simply running `tree config/stacks`

    ❯ tree config/stacks
    config/stacks
    └── demo
        └── tfvars
            └── dev.tfvars


It should be noted that `app/stacks/demo/tfvars` still works and is layered. So this recommendation and change is completely compatiable with existing code.

## Layering

Layering is performed in this order:

    config/terraform/tfvars/dev.tfvars
    app/stacks/demo/tfvars/dev.tfvars
    config/stacks/demo/tfvars/dev.tfvars <= highest precedence

## Move Script

Here's a useful [move-tfvars.rb](https://gist.github.com/tongueroo/95a8e3c6d6d2e21c441cf7668e2b9117) script that you can use to quickly move your tfvars files from `app/stacks` to `config/stacks`. Although, the script will prompt you before moving the tfvars over, you should commit and backup your code before running the script.
