---
title: Config
---

The `config/terraform` folder is for common configurations. All files in the folder get built and included with the deployed module. Common examples:

* [Backend Config]({% link _docs/config/backend.md %}): configure which backend to use by default. IE: S3
* [Provider Config]({% link _docs/config/provider.md %}): configure which provider to use by default. IE: AWS
* [Terraform Tfvars]({% link _docs/config/tfvars.md %}): Tfvars you want always set.
* [Locals]({% link _docs/config/locals.md %}): Locals you want always available.

## Processing

Files that end with `.tf` and `.rb` get processed with different strategies as part of being built.

Extension | Strategy
--- | ---
.tf | Will be processed with ERB. This allows add a little extra power to the Terraform HCL language with templating logic.
.rb | Will be processed by the Terraspace Ruby DSL. This allows you to write Terraform code with Ruby.

## Overridable

The `config/terraform` is for common configurations. They're overridable within each module itself, though. For example:

* config/backend.tf - common configuration
* app/stacks/demo1 - does not have a backend.tf
* app/stacks/demo2/backend.tf - overrides backend.tf

When Terraspace builds the stacks, `demo1` uses `config/backend.tf` and `demo2` uses `app/stacks/demo2/backend.tf`. Files within the stack have higher precedence than the `config/terraform` files.

Note, since terraspace provides a little extra power with ERB templating, you can also have logic in the `config/terraform` files. It's up to you, Terraspace gives you options.

The next docs cover different ways to leverage config.
