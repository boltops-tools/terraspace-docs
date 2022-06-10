---
title: "Tfvars: Full Layering"
nav_text: Full Layering
category: layering
order: 3
---

Terraspace Layering in it's full form allows you to use the same infrastructure code and deploy to different environments, regions, accounts, etc.

## Basic Layering

Here's an example with some concrete values:

    $ terraspace build demo
    Building .terraspace-cache/us-west-2/dev/stacks/demo
        app/stacks/demo/tfvars/base.tfvars (found)
        app/stacks/demo/tfvars/dev.tfvars (found)
        app/stacks/demo/tfvars/us-west-2.tfvars
        app/stacks/demo/tfvars/us-west-2/base.tfvars
        app/stacks/demo/tfvars/us-west-2/dev.tfvars

This is an AWS example, if you're using another cloud provider plugin, the region/location will be specific to that plugin.

{% include layering/tip.md %}

{% include layering/provider-mode.md %}

## Env Folders

The simple layering structure is having the files at the top-level like so:

    app/stacks/server/tfvars
    ├── base.tfvars
    ├── dev.tfvars
    └── prod.tfvars

You can also structure your tfvars so that they are within env folders like so:

    app/stacks/server/tfvars
    ├── base.tfvars
    ├── dev
    │   └── base.tfvars
    └── prod
        └── base.tfvars

Generally, the simplier structure is should be used. Unless you're using [TS_EXTRA]({% link _docs/layering/extra.md %}), where it becomes useful for tidying up the multiple extra-base tfvars files.

## Project-level and Stack-level Layering

Layering is performed both at the project-level and stack-level.

1. **Project-level Layering**: These are project-wide tfvars set for **every** stack. These files live in `config/terraform/tfvars`
2. **Stack-level Layering**: This are targetted tfvars set the **specific** stack being deployed. These files can live in the specific stack folder, IE: `app/stacks/demo/tfvars`

Here's a short example to explain. First, the **project-level** tfvars:

config/terraform/tfvars/base.tfvars

```ruby
tags = ["common-tag"]
```

config/terraform/tfvars/dev.tfvars

```ruby
tags = ["tag-for-all-dev-envs"]
```

Second, the **stack-level** tfvars.

app/stacks/demo/tfvars/base.tfvars

```ruby
labels = ["demo-stack-common-tag"]
```

app/stacks/demo/tfvars/dev.tfvars

```ruby
labels = ["demo-stack-tag-for-all-dev-envs"]
```

Building or deploying the demo stack produces:

    $ terraspace build demo
    $ ls .terraspace-cache/us-west-2/dev/stacks/demo/*.tfvars
    .terraspace-cache/us-west-2/dev/stacks/demo/1-project-base.auto.tfvars
    .terraspace-cache/us-west-2/dev/stacks/demo/2-project-dev.auto.tfvars
    .terraspace-cache/us-west-2/dev/stacks/demo/3-base.auto.tfvars
    .terraspace-cache/us-west-2/dev/stacks/demo/4-dev.auto.tfvars
    $

Terraspace layering gives you the power to create shared tfvars at the project-level, and also create targetted tfvars for specific stacks.

Notice how only `base.tfvars` and `dev.tfvars` is copied over. Only these specific files are used to control layer ordering.

If you that is not enough for your needs, you can even customize layering itself: [Custom Layering]({% link _docs/layering/custom-layering.md %}).
