---
title: Terraspace vs Terragrunt
nav_text: Terragrunt
categories: vs
---

Terraspace and Terragrunt are different beasts. Terragrunt started off as a thin wrapper tool and grew into the tool it is today. Terraspace started off as a framework. This is one of the reasons their workflow, structure, and design are entirely different.

{% include vs/related-article.md %}

## What Both Provide

* **Organized Structure**: Recommendations for a project structure.
* **DRY**: A way to keep your code free of duplication.
* **Automated Backend Creation**: Why bother creating and setting up the backend bucket manually.
* **CLI hooks**: Ability to execute custom actions before or after the terraform commands.
* **Deploy all**: Define all infrastructure with multiple modules and deploy them all-at-once.

Given the relatively young phase of the DevOps space, tools like Terragrunt have done a fantastic job. It makes life easier and better. You don't have to build it yourself. It's smart to use these types of tools.

## Terraspace Improves Things

* **Organized Structure**: With Terragrunt, you must carefully plan your structure. This is still one of the most discussed, debated, and blogged about topics when getting started with Terraform. [Simply Google it](https://www.google.com/search?ei=KmdzX6jNH5eJ-gTO5prgBA&q=terraform+recommended+directory+structure&oq=terraform+structure+recommendations). Terraspace gives you a conventional project structure upfront. The defaults work right off-the-bat, and you can still configure things if you wish.
* **DRY**: Though Terragrunt keeps module code DRY, there's duplication with the `terragrunt.hcl` files. Terraspace approach to generating Terraform projects removes these duplicated configuration files. The infrastructure code ends up DRYer.
* **Automated Backend Creation**: Terraspace not only automatically create the backend buckets for you, but it also has more configurable knobs and switches. Additionally, all 3 major cloud provider backends are supported out of the box: aws, azure, google. Terragrunt only supports the automated creation of buckets for AWS.
* **CLI hooks**: The Terraspace [CLI hooks syntax]({% link _docs/config/hooks.md %}) is more concise and cleaner. Life's better when code is more readable.
* **Deploy all**: Being able to deploy all of your stacks together with a single command is a wonderfully powerful feature. Terraspace's ability to deploy all stacks is more friendly, flexible, and powerful.

## Terraspace Turbo Charges Terraform

Next, we'll talk about the differences between Terragrunt and Terraspace in more detail.

## DRYness

Though both Terragrunt and Terraspace dynamically generate Terraform projects, their approaches are different.  Terragrunt does an excellent job of keeping your module code DRY, but it leaves little to be desired for the `terragrunt.hcl` files.

You see, with Terragrunt, you create `terragrunt.hcl` in each of the folders that you want Terragrunt to use. Terragrunt then generates a Terraform project from that folder. So you end up with a bunch of folders that represent all your modules, environments, regions permutations. This is why you end up with duplicated `terragrunt.hcl` configurations. This is also why you must plan your Terragrunt project structure carefully upfront.

With Terraspace, Terraform projects are dynamically generated in a centralized manner. Terraspace processes things in a single clear direction. This reduces or outright eliminates the duplication. For example, the state file management is controlled at single place with [config/terraform/backend.tf]({% link _docs/config/backend.md %}).

This also leads to DRYer thinking about the commands themselves. Here's an explanation:

With terragrunt, you cd into the folder with the `terragrunt.hcl` and run the apply command:

    cd /path/to/module && terragrunt apply

With Terraspace, you stay at the root of the project and run the up command:

    terraspace up STACK

You don't have to jump around to different folders. The way you think about the commands in a centralized fashion.

Docs: [How Terraspace Works]({% link _docs/intro/how-terraspace-works.md %}), [Backend Config]({% link _docs/config/backend.md %}).

## Using Different Variables

Terrapace leverages tfvars files and allows you to compose multiple tfvars together in a DRY way. This is called Terraspace Layering.  Layering makes it easy to use the same code to deploy and create multiple environments and even go multi-regional. No extra configuration structure and duplication is needed. Here's an example:

    TS_ENV=dev  terraspace up vpc
    TS_ENV=prod terraspace up vpc

With Terragrunt, you must duplicate the `terragrunt.hcl` files . Terraspace Variables Layering handles things in a DRYer fashion.

Docs: [Tfvars]({% link _docs/tfvars.md %}) and [Layering]({% link _docs/tfvars/layering.md %})

## Deploy All Essentials

Both tools provide the ability to deploy all of your stacks with a single command. It's a wonderfully powerful feature. Just the minimal ability alone is not enough, though. How friendly it is to use also matters.

With Terragrunt, the `terragrunt apply-all` full output from the multiple `terraform apply` processes is printed out to your terminal in one big stream. It makes it difficult to see what's going on.

With Terraspace, the `terraspace all up` output is a reduced-noise summary. The full detailed logs from each `terraspace up` is also written to files for further inspection. It's designed for humans.

Defining dependencies between multiple modules is also quite different. With Terragrunt, you define the dependencies with a custom Terragrunt `dependency` and `dependencies` syntax.

With Terraspace, you instead define the dependencies in `tfvars` files. The separation from the HCL code makes it mentally clear that the dependency definitions are decoupled. This further encourages more module composition and reusability.

Docs: [Deploy All]({% link _docs/dependencies/deploy-multiple.md %}) and [terraspace logs]({% link _reference/terraspace-logs.md %}).

## Deploy All Advanced

With both tools, you can use a single command to deploy multiple stacks.

With Terragrunt, you cd into the top-level folder with all the subfolders you want to deploy and run:

    cd top-level-folder
    terragrunt apply-all

What you choose to deploy is determined by the folder structure. If you want to deploy all modules, you go to the "root" of your hierarchal project folder structure.

With Terraspace, you selectively choose what to deploy within an environment. To deploy everything:

    terraspace all up

To choose which infrastructure stacks to deploy. Simply provide the stack names.  Here's an example targetting the b2 and b3 stacks only.

    terraspace all up b2 b3

![](https://img.boltops.com/boltops/tools/terraspace/graphs/simple-a1-highlight-b2-b3.png)

The subgraph stacks, represented by green nodes, will be deployed. A summarized preview is provided.

    $ terraspace all up
    Will run:
        terraspace up vpc      # batch 1
        terraspace up db       # batch 2
        terraspace up instance # batch 2
    Are you sure? (y/N) y

Terraspace's deploy all ability is more friendly, flexible, and powerful.

Docs: [Deploy Multiple Stacks]({% link _docs/intro/deploy-all.md %}) and [Subgraphs]({% link _docs/dependencies/subgraphs.md %}).

## Terrafile: Centralized Management

Terragrunt allows you to use different modules by specifying the remote source directly in your HCL code. Here's an example:

```hcl
module "consul" {
  source = "hashicorp/consul/aws"
  version = "0.1.0"
}
```

Of course, you may still do this with Terraspace.  But Terraspace gives you another weapon in your arsenal, the Terrafile.  A Terraspace `Terrafile` provides the ability to manage modules **centrally**. This makes it easy to use and manage Terraform modules sourced from your own git repositories, other git repositories, or the [Terraform Registry](https://registry.terraform.io).

Docs: [Terrafile Docs]({% link _docs/terrafile.md %})

## Major Clouds Supported

Though, Terragrunt supports all cloud providers, it is focused on AWS. For example, it doesn't automatically create backend buckets for Azure. With Terraspace, the 3 major cloud providers are better supported: [aws]({% link _docs/learn/aws.md %}), [azure]({% link _docs/learn/azure.md %}), [google]({% link _docs/learn/gcp.md %}). There are also easy and gentle learning guides for each of them:

* [Getting Started with AWS]({% link _docs/learn/aws.md %})
* [Getting Started with Azure]({% link _docs/learn/azure.md %})
* [Getting Started with Google]({% link _docs/learn/gcp.md %})

## TFC and TFE Supported

Though it's possible to use Terragrunt with Terraform Cloud, it's not convenient.  Terraspace integrates with Terraform Cloud and Terraform Enterprise more closely. Both CLI and VCS driven workflows are supported:

* [CLI-driven workflow]({% link _docs/cloud/workflows/cli.md %})
* [VCS-driven workflow]({% link _docs/cloud/workflows/vcs.md %})

Terraspace can automatically set up the workspace GitHub connection and set terraform and environment cloud variables. It simply automates as much as it can.  This saves you hours manually creating the workspaces, which is also error-prone.

Docs: [TFC/TFE support]({% link _docs/cloud.md %}).

## Generators: Stop Writing Boilerplate

Your time is precious. Why are we copying and pasting boilerplate structure in this day and age?

Terraspace provides generators to help you get going right away. There are generators for [projects]({% link _reference/terraspace-new-project.md %}), [stacks]({% link _reference/terraspace-new-stack.md %}), [modules]({% link _reference/terraspace-new-module.md %}), [tests]({% link _reference/terraspace-new-test.md %}), [shims]({% link _reference/terraspace-new-shim.md %}), [git hooks]({% link _reference/terraspace-new-git_hook.md %}), even [plugins creation]({% link _reference/terraspace-new-plugin.md %}).

Terragrunt does not have generators.

Docs: [Generators]({% link _docs/generators.md %})

## Built-in Test Framework

For testing, Terragrunt uses separate library call [Terratest](https://terratest.gruntwork.io.md).  Terraspace integrates the [rspec-terraspace](https://github.com/boltops-tools/rspec-terraspace) library straight into Terraspace as part of it's [Test Framework]({% link _docs/testing.md %}). The test framework allows you to use a language for testing that is readable and clear: Ruby and Rspec. Terraspace actually dogfoods itself by using its own test framework. All 3 major cloud providers are tested before a new release: [aws]({% link _docs/learn/aws.md %}), [azure]({% link _docs/learn/azure.md %}), [google]({% link _docs/learn/gcp.md %}). We're talking with about testing with **real** resources.

Docs: [Built-in Test Framework]({% link _docs/testing.md %}):

## Native Terraform HCL

Terragrunt adds custom HCL syntax on top of Terraform. For example, instead of using native Terraform tfvars, Terragrunt introduces a custom `inputs` syntax.

With Terraspace, you use native Terraform HCL syntax. There is no additional custom HCL syntax to learn. Terraspace sticks to native HCL syntax, tfvars files, and works with whatever Terraform supports. Terraspace doesn't conflate a custom HCL syntax with the native Terraform HCL. You also have access to Ruby, which is lightly added on top of Terraform. Think about it as "Ruby Sprinkles."

## The Power of Ruby

Terragrunt is written in go-lang, a lower-level language. Terraspace is written in Ruby, a higher-level language. Ruby is one of the most beautiful, concise, and expressive languages in the world. Its versatility makes it adept for writing glue and frameworks.

Though language shouldn't matter, it does. Most modern-day DevOps shops use a variety of tools like Bash, Python, Ruby, and go to achieve their goals. For example, [vagrant](https://www.vagrantup.com.md) is written in Ruby and the [aws cli](https://aws.amazon.com/cli.md) is written in Python. Ruby is actually one of the reasons for Terraspace superpowers and gives it many advantages.

Interestingly, the fact that Ruby is used is generally transparent to the end-user. The starter [learning guides]({% link getting-started.md %}) all take you through a gentle path, where you are using Terraform HCL just like you usually would. That's the power of using the right tool for the right job. Most of the time, you don't even realize it. All you mainly see is that things are getting done.

## Configurability

With Terragrunt, you can configure things with your folder structure, CLI flags, and hooks. You can do all of those same things with Terraspace, but you can also configure core framework settings directly.

You can set an abundant number of framework settings and behaviors. There are more than 20 settings listed on the [config reference]({% link _docs/config/reference.md %}) docs.  And these are only the core framework settings we're talking about here. If we add settings for the [Terraspace provider plugins]({% link _docs/plugins.md %}), [CLI hooks]({% link _docs/config/hooks.md %}), and [Customizable Args]({% link _docs/config/args.md %}), which are also configurable, the list grows even longer. Terraspace provides reasonable defaults, but it's very configurable in case you need more control.

Docs: [Configurable Framework Behavior]({% link _docs/config/reference.md %}):

## Summary

We cover plenty of differences between Terraspace and Terragrunt here. Overall, the two are quite different tools. At the end of the day, Terraspace is a full-fledged framework. Whereas, Terragrunt is a thin wrapper. We're really comparing apples to oranges here.

At this point, if you're still wondering what's right for you. Think that theorizing will only get you so far. Building a small test proof-of-concept project with each tool is sometimes the fastest path to reaching a decision. Go out there and start building! A good place to start is the [Terrspace Getting Started Guides]({% link getting-started.md %}).

For another similar comparison, check out this blog post: [Terraspace vs Terragrunt vs Terraspace](https://blog.boltops.com/2020/09/28/terraform-vs-terragrunt-vs-terraspace)
