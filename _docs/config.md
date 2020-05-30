---
title: Config
---

The `config/templates` folder is for common configurations. All files in the folder that end with `.tf`, `.rb` and `.tfvars` get materialized and included with the deployed module. Common examples:

* [Backend Config]({% link _docs/config/backend.md %}): configure which backend to use by default. IE: S3
* [Provider Config]({% link _docs/config/provider.md %}): configure which provider to use by default. IE: AWS
* [Terraform Tfvars]({% link _docs/config/tfvars.md %}): Tfvars you want always set.
* [Locals]({% link _docs/config/locals.md %}): Locals you want always available.

It's all configurable and overridable within each module itself. The next docs cover how it works.
