---
title: Built-In Helpers
nav_text: Built-In
order: 1
category: helpers
---

Here's a list of Terraspace built-in helpers.

Name | Description
--- | ---
depends_on | Explicitly configure a dependency. More info: [Dependencies Tfvars Docs]({% link _docs/dependencies/tfvars.md %})
expansion | Useful for `config/terraform/backend.tf` to configure things like backend, key, etc. More info: [Backend Docs]({% link _docs/config/backend.md %})
output | Use to wire stack outputs to inputs. Terraspace infers the dependency. More info: [Dependencies Tfvars Docs]({% link _docs/dependencies/tfvars.md %})

This list is not exhaustive. To help find all the helper methods, you can start at this [erb/helpers.rb](https://github.com/boltops-tools/terraspace/blob/master/lib/terraspace/compiler/erb/helpers.rb) source file. Also, the Terraspace [DSL](https://terraspace.cloud/docs/dsl/) has it's own set of methods. Here's the [dsl/syntax/mod.rb](https://github.com/boltops-tools/terraspace/blob/master/lib/terraspace/compiler/dsl/syntax/mod.rb) source.
