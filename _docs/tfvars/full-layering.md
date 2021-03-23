---
title: "Tfvars: Full Layering"
---

Terraspace Layering in it's full form allows you to use the same infrastructure code and deploy to different environments, regions, accounts, providers, etc. This table shows the full layering order. For the sake of concisness, the layers are shown in levels, IE: base.tfvars, dev.tfvars, and instance.tfvars.

Folder/Pattern                 | Example
-------------------------------|---------------
tfvars root folder             | base.tfvars, dev.tfvars, and instance.tfvars
region                         | us-west-2/{base,dev,instance}.tfvars
namespace                      | 112233445566/{base,dev,instance}.tfvars
namespace/region               | 112233445566/us-west-2/{base,dev,instance}.tfvars
provider                       | aws/{base,dev,instance}.tfvars
provider/region                | aws/us-west-2/{base,dev,instance}.tfvars
provider/namespace             | aws/112233445566/{base,dev,instance}.tfvars
provider/namespace/region      | aws/112233445566/us-west-2/{base,dev,instance}.tfvars

All layers except for the first, tfvars root folder, are provider specific. For example, the `namespace` is provider dependent. IE: For AWS it's account, for Azure it's subscription, and for Google it's project. Also, for Azure `region` maps to location.

For an explanation of `instance.tfvars`, see: [Instance Option]({% link _docs/tfvars/instance-option.md %}).

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

Generally, the simplier structure is should be used. Unless you're using the [Instance Option]({% link _docs/tfvars/instance-option.md %}), where it becomes useful for tidying up the multiple instance based tfvars files.

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

If you that is not enough for your needs, you can even customize layering itself: [Custom Layering]({% link _docs/tfvars/custom-layering.md %}).
