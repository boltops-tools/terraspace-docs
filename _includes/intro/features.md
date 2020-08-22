* [Config Structure]({% link _docs/config.md %}): A common `config/terraform` structure that gets built with the deployed module. It can be dynamically controlled to keep your code DRY. You can override the settings if needed, like for using existing backends. See: [Existing Backends]({% link _docs/state/existing.md %}).
* [Generators]({% link _docs/generators.md %}): Built-in generators to quickly create starter modules. Focus on code instead of boilerplate structure.
* [Tfvars]({% link _docs/tfvars.md %}) & [Layering]({% link _docs/tfvars/layering.md %}): Use the same code with different tfvars to create multiple environments. Terraspace conventionally loads tfvars from the `tfvars` folder. Rich layering support allows you to build different environments like dev and prod with the same code.  Examples are in [Full Layering]({% link _docs/tfvars/full-layering.md %}).
* [Configurable CLI]({% link _docs/cli.md %}): Configurable [CLI Hooks]({% link _docs/cli/hooks.md %}) and [CLI Args]({% link _docs/cli/args.md %}) allow you to adjust the underlying terraform command.
* [Testing]({% link _docs/testing.md %}): A testing framework that allows you to create test harnesses, deploy real-resources, and have higher confidence that your code works.
* [Terraform Cloud and Terraform Enterprise Support]({% link _docs/cloud.md %}): TFC and TFE are both supported. Terraspace adds additional conveniences to make working with Terraform Cloud Workspaces easier.