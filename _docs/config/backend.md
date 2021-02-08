---
title: Backend Config
---

You can configure the backend for terraform to use with `config/terraform/backend.tf`.
Below are examples.

You may also be interested in:

* [Statefile Approaches and Thoughts]({% link _docs/state/approaches.md %})
* [Configuring Backends for Existing Systems]({% link _docs/state/existing.md %})

___

## Building

When you run `terraspace` commands, it will use the files in the `config/terraform` folder and builds them with the deployed module.  For example, let's say you have an `app/stacks/demo` stack:

    ├── app
    │   ├── modules
    │   │   └── instance
    │   └── stacks
    │       └── demo
    └── config
        └── terraform
            └── backend.tf

Running:

    terraspace up demo

Builds a `.terraspace-cache/dev/stacks/demo/backend.tf` using the `config/terraform/backend.tf`.  If you want to just build the files without deploying, you can also use `terraspace build`. Below are examples of backends.

{% include tabs.html %}

___

## Variables Available

For variables available see [Backend Config Variables]({% link _docs/config/backend/variables.md %})

___

## Strip Trailing Behavior

Terraspace expansion will remove the trailing dashes and slashes in case the instance option is at the end and is not set.  For example, let's say `INSTANCE` is not set.

    :REGION/:ENV/:MOD_NAME/:INSTANCE

Will result in:

    us-west-2/dev/demo # notice there's no trailing slash

___

## Why Is Env in Bucket Name?

By default, the bucket name has the ENV at the end. This is done so we can easily see which environment the bucket stores Terraform statefiles for. This quickly helps with debugging. If you prefer not to have the ENV at the end of the bucket name, remove it after generating the project with `terraspace new project`.