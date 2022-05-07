---
title: Project Structure
---

Here's an example project structure.

    ├── app
    │   ├── modules
    │   │   └── example
    │   │       └── test
    │   └── stacks
    │       └── demo
    │           └── tfvars
    ├── config
    │   ├── app.rb
    │   ├── args
    │   │   └── terraform.rb
    │   ├── env
    │   │   ├── dev.rb
    │   │   └── prod.rb
    │   ├── hooks
    │   │   ├── terraform.rb
    │   │   └── terraspace.rb
    │   └── terraform
    │       ├── backend.tf
    │       └── provider.tf
    ├── seed
    │   └── tfvars
    │       └── modules
    │           └── example
    ├── spec
    └── Terrafile

Here's an description of the folders and files:

Name | Description
---|---
app/modules | Reusable modules or library code. Use `terraspace new module` to generate a module.
app/modules/example/test | Which each module, you can have an optional test folder where you would put tests specific to the module: [Module-level tests]({% link _docs/testing/module.md %})
app/stack | Business specific modules. Use `terraspace new stack` to generate a stack. It is often useful to start here and then abstract generic logic to the `app/modules` folder.
app/stack/demo/tfvars | Within each stack folder, you can have a tfvars folder and define different variables. You can use [tfvars layering]({% link _docs/layering/layering.md %}) to use the same code to create different environments.
config/app.rb | Terraspace [project-level settings]({% link _docs/config/app.md %}). Configure things like the logger and [test framework]({% link _docs/testing.md %}).
config/args | Terraspace supports customizing the args passed to the terraform commands. See [Config Args Docs]({% link _docs/config/args.md %}).
config/env | Where you put environment-specific overrides of the `config/app.rb` settings.
config/hooks | Terraspace supports a variety of hooks. They can be used to customize and finely control the Terraform lifecycle process. See [Config Hooks Docs]({% link _docs/config/hooks.md %}).
config/terraform | Common code that gets built with the deployed stack. It can be dynamically controlled to keep your code DRY.
seed/tfvars | Where you configure tfvars files for modules.  Note, you can also configure tfvars files with a subfolder directly in the module, but it is not encouraged since modules should be reusable library code.
spec | Where you put [Project-level tests]({% link _docs/testing/project.md %}).
Terrafile | The [Terrafile]({% link _docs/terrafile.md %}) is where you define additional terraform modules to be loaded by `terraform bundle`.


{% include intro/modules-vs-stacks.md %}
