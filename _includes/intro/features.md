{:.terraspace-features}
* [Dry]({% link _docs/intro.md %}) You can keep your code DRY. Terraspace builds your Terraform project with common `app` and `config/terraform` structure that gets built each deploy. You can override the settings if needed, like for using existing backends. See: [Existing Backends]({% link _docs/state/existing.md %}).

* [Generators]({% link _docs/generators.md %}) Built-in generators to quickly create starter modules. Focus on code instead of boilerplate structure.

* [Multiple Environments]({% link _docs/intro/deploy-all.md %}) [Tfvars]({% link _docs/intro.md %}) & [Layering]({% link _docs/tfvars/full-layering.md %}) allow you to use the same code with different tfvars to create multiple environments. Terraspace conventionally loads tfvars from the `tfvars` folder. Rich layering support allows you to build different environments like dev and prod with the same code. Examples are in [Full Layering]({% link _docs/tfvars/full-layering.md %}).

* [Deploy Multiple Stacks]({% link _docs/intro/deploy-all.md %}) The ability to deploy multiple stacks with a single command. Terraspace calculates the [dependency graph]({% link _docs/dependencies/subgraphs.md %}) and deploys stacks in the right order. You can also target specific stacks and deploy [subgraphs]({% link _docs/dependencies/subgraphs.md %}).

* [Secrets Support]({% link _docs/helpers/aws/ssm.md %}) Terraspace has built-in secrets support for [AWS Secrets Manager]({% link _docs/helpers/aws/secrets.md %}), [AWS SSM Parameter Store]({% link _docs/helpers/aws/ssm.md %}), [Azure Key Vault]({% link _docs/helpers/azure/secrets.md %}), [Google Secrets Manager]({% link _docs/helpers/google/secrets.md %}). Easily set variables from Cloud secrets providers.

* [Terrafile]({% link _docs/terrafile.md %}) Terraspace makes it easy to use Terraform modules sourced from your own git repositories, other git repositories, or the Terraform Registry. The git repos can be private or public. This is an incredibly powerful feature of Terraspace because it opens up a world of modules for you to use. Use any module from anywhere.

* [Configurable CLI]({% link _docs/config/hooks.md %}) Configurable [CLI Hooks]({% link _docs/config/hooks.md %}) and [CLI Args]({% link _docs/config/args.md %}) allow you to adjust the underlying terraform command.

* [Testing]({% link _docs/testing.md %}) A testing framework that allows you to create test harnesses, deploy real-resources, and have higher confidence that your code works.

* [Terraform Cloud and Terraform Enterprise Support]({% link _docs/tfc.md %}) TFC and TFE are both supported. Terraspace adds additional conveniences to make working with Terraform Cloud Workspaces easier.
