---
title: Naming Considerations
nav_text: Naming
category: tfc
order: 6
---

Here are some naming consideration thoughts. First, we'll cover Terraform recommendations to help understand why Terraspace names things a certain way.

{% include tfc/recommendations.md %}

## Workspace Name

Terraform suggests "One Workspace Per Environment Per Terraform Configuration". This also means if you want to deploy to another region, you should scope the TFC Workspace name to include the region. The Terraspace workspace naming scheme accounts for all of this.

```hcl
terraform {
  backend "remote" {
    organization = "ORG" # replace with your terraform cloud account org
    workspaces {
      name = "<%= expansion(':MOD_NAME-:ENV-:REGION-:INSTANCE') %>"
    }
  }
}
```

The workspace name also includes INSTANCE. INSTANCE is only set if the [--instance option]({% link _docs/layering/instance-option.md %}) is set.  Additionally, expansion will strip any trailing `-`. So:

    :MOD_NAME-:ENV-:REGION-:INSTANCE

When running:

    terraform up demo

Results in:

    demo-dev-us-west-2

And when running:

    terraform up demo --instance foo

Results in:

    demo-dev-us-west-2-foo

### Workspace: Modules vs Stacks

As astute reader might notice that with the naming scheme, there's no distinction between deploying a Terraspace `app/modules` or `app/stacks` resource.  This is done because it's probably more common to just deploy the stack.  If you want to deploy a module, it is recomended to move the module to the `app/stacks` folder and deploy it as a stack.

If you really want to include the module or stack in the workspace name, here's one way:

```hcl
terraform {
  backend "remote" {
    organization = "ORG" # replace with your terraform cloud account org
    workspaces {
      name = "<%= expansion(':MOD_NAME-:ENV-:REGION-:TYPE_INSTANCE') %>"
    }
  }
}
```

If demo is an stack, then running:

    terraform up demo

Results in:

    demo-dev-us-west-2-stack

If example is an stack, then running:

    terraform up example

Results in:

    example-dev-us-west-2-module

It is probably more common to deploy stacks. So the recommendation is to not include the TYPE in the build cache dir name.

## Build Cache Dir

The build cache is important when using the [VCS-Driven workflow]({% link _docs/tfc/workflows/cli.md %}).  Make sure the build cache name is unique when deploying to multiple regions. The default already does this. You can adjust it further if needed via [config/app.rb]({% link _docs/config/app.md %}). Example:

```ruby
Terraspace.configure do |config|
  config.build.cache_root = nil # defaults to /full/path/to/.terraspace-cache
  config.build.cache_dir = ":REGION/:APP/:ROLE/:ENV/:BUILD_DIR"
end
```

Note: `BUILD_DIR` already includes the [TS_EXTRA]({% link _docs/layering/extra.md %}) info.
