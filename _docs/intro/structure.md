---
title: Project Structure
---

Here's an example project structure.

    .
    ├── app
    │   ├── modules
    │   │   └── example
    │   │       └── test
    │   └── stacks
    │       └── demo
    │           └── tfvars
    ├── config
    │   ├── app.rb
    │   ├── cli
    │   │   ├── args.rb
    │   │   └── hooks.rb
    │   ├── env
    │   │   ├── dev.rb
    │   │   └── prod.rb
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
app/stack | Business specific modules. Use `terraspace new stack` to generate a stack. It's useful to want to start here and then abstract out generic logic.
app/stack/demo/tfvars | Within each stack folder, you can have a tfvars folder and define different variables. You can use [tfvars layering](% link _docs/tfvars/layering.md %) to use the same code to create different environments.
config/app.rb | Terraspace [project-level settings]({% link _docs/config/app.md %}). Configure things like the logger and [test framework]({% link _docs/testing.md %}).
config/env | Where you put environment-specific overrides of the `config/app.rb` settings.
config/cli | Where you can customize cli [args]({% link _docs/cli/args.md %}) and [hooks]{% link _docs/cli/hooks.md %}.
config/terraform | Files that are built to and you want to be common for each folder which the `terraform apply` command will run in. This is for common configurations.
seed/tfvars | Where you configure tfvars files for modules.  Note, you can also configure tfvars files with a subfolder directly in the module, but it is not encouraged since modules should be reusable library code.
spec | Where you put [Project-level tests]({% link _docs/testing/project.md %}).
Terrafile | The [Terrafile]({% link _docs/terrafile.md %}) is where you define additional terraform modules to be loaded by `terraform bundle`.


{% include intro/modules-vs-stacks.md %}