---
title: "Upgrading: Move Tfvars"
nav_text: "Moving Tfvars"
category: upgrading
---

In Terraspace v3, the recommended tfvars location was changed from `app/stacks` to `config/stacks`.  Example:

    app/stacks/demo/tfvars/dev.tfvars

to

    config/stacks/demo/tfvars/dev.tfvars

Here's a [move-tfvars.rb](https://gist.github.com/tongueroo/61154e60743a13c34ae115e936778dfb) script you can use to move the tfvars from `app/stacks` to `config/stacks`.

## Example

Here's an example with output:

    $ move-tfvars.rb
    Will move tfvars to new recommended location.
    Will move app/stacks/*/tfvars to config/stacks/*/.tfvars
    Any existing config/stacks/*/tfvars folders will be removed and replaced.
    It's recommended that you commit and save your code before running this script.

    Previewing move of tfvars files:

        app/stacks/demo/tfvars => config/stacks/demo/tfvars

    Are you sure you want to move all tfvars files? [y/N] y

    Moving tfvars files:

        app/stacks/demo/tfvars => config/stacks/demo/tfvars

## Reasoning

Here are some thoughts on the new recommended location. After deploying many stacks, it can get confusing to remember which stack has been deployed. I've found that looking at `config/stacks` provides a pretty good idea of what's been deployed. Note: [Terraspace Cloud](https://blog.boltops.com/2022/06/10/terraspace-cloud/) can also help by tracking the stacks deployed.

Another reason it's useful to have your custom tfvars in `config/stacks` because it allows the stacks to be reusable. You can download stacks via [Terrafile]({% link _docs/terrafile.md %}) into `vendor/stacks` and the separated `config/stacks` tfvars files can still be used.
