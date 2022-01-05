---
title: New Project
search_title: New Project Non-Cloud
---

{% include videos/learn/terraspace-getting-started-with-onprem.md %}

We'll use [terraspace new project]({% link _reference/terraspace-new-project.md %}) to generate a new terraspace project.

    $ terraspace new project infra --plugin none --examples

For this tutorial, we're using the `--examples` option to generate a starter example.

    $ terraspace new project infra --plugin none --examples
    => Creating new project called infra.
          create  infra
          create  infra/.gitignore
           exist  infra
          create  infra/config/terraform/backend.tf
          create  infra/config/terraform/provider.tf
    => Creating new module called example.
          create  infra/app/modules/example
          create  infra/app/modules/example/main.tf
          create  infra/app/modules/example/outputs.tf
          create  infra/app/modules/example/variables.tf
    => Creating new stack called demo.
          create  infra/app/stacks/demo
          create  infra/app/stacks/demo/main.tf
          create  infra/app/stacks/demo/outputs.tf
          create  infra/app/stacks/demo/variables.tf
    $ cd infra # and start checking out the files

The `--plugin none` option means no [cloud provider plugin]({% link _docs/plugins.md %}) is used at all. It's a lighter project.

For more information about the folders see [Project Structure]({% link _docs/intro/structure.md %}).

## Config Files

Let's look at `config/terraform/backend.tf`

```terraform
# This is where you put your backend declaration. Example:
#
# terraform {
#   backend "local" {
#     path = "terraform.tfstate"
#   }
# }
#
# More examples: https://terraspace.cloud/docs/config/backend/examples/
#
```

The backend is completely commented out. With a non-cloud generated project, Terraspace makes no assumptions about the backend you'll like to use.

The default Terraform behavior is to use a local backend with a state file path at `terraform.tfstate`. So it works the same commented or uncommented out.

You might want to check out how to configure different backends: [Backend Examples]({% link _docs/config/backend/examples/local.md %}). The [GitLab backend example]({% link _docs/config/backend/examples/gitlab.md %}) uses a http backend.

Next, let's take a look at `config/terraform/provider.tf`

```terraform
# This is where you put your provider declaration.
#
# If you end up adding a cloud provider, you should also configure a terraspace_plugin_* gem
# in the Terraspace project Gemfile and run bundle.
#
# See: https://terraspace.cloud/docs/plugins/
```

The `provider.tf` is also just commented out with some instructions. Again, no cloud provider assumptions are made.

Next, we'll review generated app folder files.
