---
title: Terraspace vs Custom Solutions
nav_text: Custom Solutions
categories: vs
---

Though Terraform provides us the essentials to help build infrastructure-as-code, it leaves much up to us to figure out.  Usually, companies end up home-growing custom scripts on top of Terraform to build infrastructure code. Typically, these are a bunch of bash scripts that duck-tape things together. It ends up like a science project.

## How It Starts

It may start with engineers provisioning infrastructure manually. We all do it. We point and click around in the console to build infrastructure. This is often the best way to learn actually.

At a certain point, we realize that it would make sense to start automating the process. We start to write scripts, usually bash, to provision infrastructure.

The scripts may simply call the `aws`, `az`, or `gcloud` cli, or even use the sdk libraries. We must deal with sequencing, parallelization, idempotency, and retry logic. Eventually, the scripts grow complex. So we start searching for higher-level "orchestration" tools like Terraform.

We start learning terraform. It certainly helps and solves many problems, but it also introduces a lot of questions. Here are some of the things we need to answer:

* How should we structure the project folders, files, tfvars, etc?
* How can we reuse code to build different environments like dev and prod?
* How should we manage the state file?

Though Terraform provides the essentials to build infrastructure-as-code, it leaves many questions and tasks for us to solve.

So we then start writing higher-level custom scripts that wrap terraform. We perform some custom logic before and after the terraform apply. We start restructuring things. We might think that we're evolving our scripts just fine. Essentially, we're graduating the tooling from a hut to a house to a skyscraper like so:

![](https://img.boltops.com/images/terraspace/huts/huts-think.png)

But that's probably not what's happening. This might be your first infrastructure-as-code project. Usually, there are also tight deadlines. We're learning on the spot and sort of making things up as we go long. So we're probably doing more something like this:

![](https://img.boltops.com/images/terraspace/huts/huts-actual.png)

What started off as a simple provisioning bash script that did its job just fine, gets abused, and is now expected to handle the needs of a skyscraper.

Many companies have their own custom solutions. Every time you go to another company, you must relearn and figure out the home-grown solution's particularities. Even within companies, going from team to team, there may be different scripts that are their own unique beasts. It's a science project.

## Summary

Terraspace provides a framework to mitigate the chances of your Terraform scripts from growing into a science project. It makes it easier and quicker to work with Terraform. Though Terraform is a powerful tool and allows you to write infrastructure-as-code, it leaves a lot up to you to figure out. Terraspace is a framework for Terraform that does just that. It provides an organized structure, conventions, and convenient tooling to help you get things done.

You might also be interested in [Terraspace vs Terraform]({% link _docs/vs/terraform.md %}), where we talk about what life is like without Terraspace.
