---
title: What is Terraspace?
---

{% include reference.md %}

## Terraspace Features

* [Config Structure]({% link _docs/config.md %}): A common config structure that gets materializes with the deployed module. Configs can be dynamically controlled keep your code DRY. You can override the settings if needed, like for using existing backends. See: [Existing Backends]({% link _docs/state/existing.md %}).
* [Generators]({% link _docs/generators.md %}): Built-in generators to quickly create the starter module. Focus on code instead of boilerplate structure.
* [Tfvars]({% link _docs/tfvars.md %}): Use the same code with different tfvars to create multiple environments. Terraspace conventionally loads tfvars from the `tfvars` folder. Tfvars also support [Layering]({% link _docs/tfvars/layering.md %}).
* [Testing]({% link _docs/testing.md %}): A testing framework that allows you to create test harnesses, deploy real-resources, and have higher confidence that your code works.
* [Configurable CLI]({% link _docs/cli.md %}): Configurable [CLI Hooks]({% link _docs/cli/args.md %}) and [CLI Args]({% link _docs/cli/hooks.md %}) allow you to adjust the underlying terraform command.
