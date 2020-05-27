---
title: Terraspace vs Terraform
nav_text: Terraform
categories: vs
---

In [How Terraspace Works]({% link _docs/intro/how-terraspace-works.md %}), a simple explanation is provided on how Terraspace works. Essentially:

1. A plain old terraform module is built in the `.terraspace-cache` folder.
2. We cd into the folder.
3. And run terraform apply

Simple. Right?

However, Terraspace is much more than a simple wrapper script. It's a full-fledged framework. It makes developing Terraform code easier and more fun. It has:

{% include intro/features.md %}

Though Terraform provides the essential building blocks to write infrastructure-as-code, it leaves much up you to figure out. Terraspace provides a framework on top of Terraform to help you build infrastructure-as-code much more quickly.

## Wood vs Framework

Let's say you are writing a web application in your programming language of choice: Java, Python, Ruby, etc.

Would you just start creating files and just start writing the web app code in that language?

Probably not. You would likely start by choosing a framework first. For example:

Language | Framework
---|---
Java | Spring
Python | Django
Ruby | Rails

Let's say we're building a house. Not using a framework is liken to running off to the forest and cutting down trees for wood. Then using that wood to build doors, windows, etc. Finally, we start constructing the house. But we proceed with no blueprints or architectural plans.  This is essentially how most do terraform development today.

Terraspace provides a framework to help you get a head start right off the bat. This is because the framework provides an organized structure, conventions, and convenient tooling.

## Life Without Terraspace Part 1

Let's walk through what terraspace does to help understand what life without terraspace is like.

Let's say we have these folders and files in the ~/infra folder:

    app/modules/vm
    app/stacks/vm
    config/terraform/backend.tf
    config/terraform/provider.tf

Here's a brief explanation of the files:

* app/modules/vm - the reusable library code or "functions"
* app/stacks/vm - business logic that makes use of the vm module lib code
* config/terraform/backend.tf - configures the statefile backend
* config/terraform/provider.tf - configures the cloud provider

Without terraspace, the first step would be copy the files over to a ~/project directory. Maybe something like this:

    cd ~
    mkdir -p project/modules
    mkdir -p project/stacks
    cd ~/infra # terraspace project folder
    cp -r app/modules/vm ~/project/modules/vm
    cp -r app/stacks/vm ~/project/stacks/vm
    cp config/terraform/backend.tf ~/project/stacks/vm/backend.tf
    cp config/terraform/provider.tf ~/project/stacks/vm/provider.tf

Now, you might think that we can cd into the `~/project/stacks/vm` folder and run `terraform apply`, right?

But we must edit the `~/project/stacks/vm/backend.tf` file first. Because there are advantages to using [different statefiles]({% link _docs/state/approaches.md %}) and avoiding a monolithic statefile. We don't want all of our eggs in one basket. So we edit the file.

    vim ~/project/stacks/vm/backend.tf # edit the state path

We probably want to use different tfvar files for dev and prod environments. We also may want to use some common base tfvars. So we create more files.

    vim ~/project/stacks/vm/base.tfvars
    vim ~/project/stacks/vm/dev.tfvars
    vim ~/project/stacks/vm/prod.tfvars

Now we can cd in and run `terraform apply` right? Well, not quite yet. We have to remember to specify the tfvar files to be used, something like this:

    cd ~/project/stacks/vm
    terraform apply -var-file base.tfvars -var-file dev.tfvars
    terraform apply -var-file base.tfvars -var-file prod.tfvars

So we're finally done for now and are happy with what we've come up with. We'll probably write some wrapper scripts, typically bash, to glue things together and make the commands shorter.

## Life Without Terraspace Part 2

Then a month later, your boss comes up and asks you, let's take the **same** terraform code and deploy it to different AWS accounts. We want to separate the dev and prod resources in different accounts for security reasons. Makes sense.

Now, what do you do?

Here's what most do:

    mkdir ~/accounts
    cp -r ~/project ~/accounts/project-1
    cp -r ~/project ~/accounts/project-2

There! We solved the problem!

But we really didn't. We've introduced another, larger problem: **duplication**.

Now, we must update configs and source code in multiple places.  So then, we start trying to restructure files into reusable library code in separate folders. Maybe something like this:

    accounts/shared/vm
    accounts/project-1/vm
    accounts/project-2/vm

We still need also to figure out the structure for tfvar files though. We start pondering; maybe we should generate the files?

Then you're asked to also support multiple regions. At this point, you're might even try this:

    accounts/shared/vm
    accounts/us-east-1/project-1/vm
    accounts/us-east-1/project-2/vm
    accounts/us-west-2/project-1/vm
    accounts/us-west-2/project-2/vm

It's like building the [Winchester House](https://en.wikipedia.org/wiki/Winchester_Mystery_House). Ultimately, we end up with a science project.

## Summary

Terraspace is not just a simple wrapper script that calls out to Terraform. It makes it a lot easier and quicker to work with Terraform. Though Terraform is a powerful tool and allows you to write infrastructure-as-code, it leaves a lot up to you to figure out. Terraspace is a framework that does just that. It provides an organized structure, conventions, and convenient tooling to help you get things done quickly.
