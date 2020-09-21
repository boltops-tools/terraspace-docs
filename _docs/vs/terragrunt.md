---
title: Terraspace vs Terragrunt
nav_text: Terragrunt
categories: vs
---

Terraspace and Terragrunt are quite different beasts. Terragrunt describes itself as a thin wrapper for Terraform. Terraspace is a framework. Their workflow, structure, and designs are completely different.

## Commands

With terragrunt, you cd into the folder with the terraform source code and run the apply command:

    cd /path/to/module && terragrunt apply

With terraspace, you stay at the root of the project and run the up command:

    terraspace up STACK

## Structural Differences

Terraspace defines a clear structure. You know where your reusable modules and business-specific code should go.  Examples:

    app/modules/example
    app/stacks/demo

Terragrunt leaves the structure more open. Though, Terragrunt does provide a [terragrunt-infrastructure-live-example](https://github.com/gruntwork-io/terragrunt-infrastructure-live-example) repo for guidance. You still and must carefully plan the directory structure ahead of time. Terragrunt's processing logic will rely on this structure. The example structure looks something like this:

    prod/us-east-1/prod/example
    prod/us-east-1/dev/example

With Terragrunt, different environments and regions are handled by walking up the directory tree, looking for `terragrunt.hcl` files, and processing the logic in the custom Terragrunt syntax.

With Terraspace, normal tfvars and [layering](https://terraspace.cloud/docs/tfvars/full-layering/) is used. You can use the same infrastructure code to deploy to different environments, regions, accounts, projects, etc.

## Native Terraform Constructs

Terragrunt uses the native Terraform HCL language for the main tf files, but it also adds a custom terragrunt HCL language in its `terragrunt.hcl`.  For example, to reuse modules, it's a custom terragrunt syntax. Example:

```terraform
terraform {
  source = "git::git@github.com/org/demo"
}
```

The Terraform `module` keyword accomplishes the same result, except natively.

```terraform
module demo {
  source = "github.com/org/demo"
}
```

Terraspace uses the native `module` keyword and Terraform language constructs generally.

## Tfvars Variables

Terragrunt has a custom `terragrunt.hcl` syntax for input variables to modules. For example:

```terraform
terraform {
  source = "git::git@github.com/foo/modules.git//path/to/module"
}

input {
  var1 = "val1"
  var2 = "val2"
}
```

Terraspace uses standard Terraform module syntax to set input variables. Something like this:

```terraform
module demo {
  source = "github.com/org/demo"
  var1   = var.var1
  var2   = var.var2
}
```

You then create `.tfvars` files that get process with [layering](https://terraspace.cloud/docs/tfvars/layering/):

    app/stacks/demo/tfvars/dev.tfvars
    app/stacks/demo/tfvars/prod.tfvars

The files are regular terraform tfvar files:

    var1 = "val1"
    var2 = "val2"

## DRYness

To achieve DRY, Terragrunt uses helpers like `path_relative_to_include` and `find_in_parent_folders` in the `terragrunt.hcl` files. It then walks up the directory tree to include other `terragrunt.hcl` files from parent folders. It will then use things like `generate` blocks to generate files like `backend.tf` back down in the original leaf folder of the directory tree.

Terraspace achieves DRY code by building files from your `app/modules`, `app/stacks` and `config/terraform` folder. It processes things in a clear single direction.

## Statefile Management

In Terragrunt, how you organize your folder structure generally decides the state file location. Example:

    prod/us-west-2/prod/instance

You then use `path_relative_to_include` and `find_in_parent_folders` methods in `terragrunt.hcl` files up the directory tree to define where the state path lives.

In Terraspace, the statefile is centrally defined in `config/terraform/backend.tf` and processed with variable substitution. For example, this expression in `config/terraform/backend.tf`:

    :REGION/:ENV/:BUILD_DIR/terraform.tfstate

Becomes:

    us-west-2/dev/stacks/demo/terraform.tfstate

## Deploying Multiple Stacks

Both Terraspace and Terragrunt offers a way to deploy multiple parts of infrastructure with a single command.

With Terragrunt, you cd into the top-level folder with all the subfolders you want to deploy and run:

    cd top-level-folder
    terragrunt apply-all

What you choose to deploy is determined by the folder structure. If you want to deploy all modules, you go to the "root" of your hierarchal project folder structure.

With Terraspace, to deploy multiple infrastructure stacks, you can run:

    terraspace all up

You can also selectively choose which infrastructure stacks to deploy. Simply provide the stack names.  Here's an example targetting the b2 and b3 stacks.

    terraspace all up b2 b3

![](https://img.boltops.com/boltops/tools/terraspace/graphs/simple-a1-highlight-b2-b3.png)

The subgraph stacks, represented by green nodes, will be deployed. For more info see the docs: [Deploy Multiple Stacks]({% link _docs/intro/deploy-all.md %}) and [Subgraphs]({% link _docs/dependencies/subgraphs.md %})

## Generators

Terragrunt doesn't have generators.

Terraspace has generators so you can build things quickly.

    terraspace new project infra -p aws --examples
    cd infra
    terraspace new stack demo
    terraspace new module bucket

## Testing

Terragrunt uses a testing framework called [terratest](https://terratest.gruntwork.io/).  This allows you test real resources.

Terraspace uses  [rspec-terraspace](https://github.com/boltops-tools/rspec-terraspace) as the default test framework plugin. Rspec is a mature testing framework with expressive matchers, test setup/destroy blocks etc. It also allows you to test real resources. Terraspace also introduces the concept of a [Test Harness](https://terraspace.cloud/docs/testing/test-harness/) to allow you to customize and control the test setup.

## Summary

There are plenty of more differences between Terraspace and Terragrunt. We cover a good amount of them here. Overall, these two are quite different.
