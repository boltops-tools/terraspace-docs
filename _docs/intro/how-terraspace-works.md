---
title: How Terraspace Works
---

Here's a high-level explanation of how Terraspace works. It's pretty straightforward.

## General

Terraspace works by building files in the `app` and `config` folders to a `.terraspace-cache` folder. Then it merely calls out to `terraform` within that folder.

In fact, you can use Terraspace to build the files first, cd into the `.terraspace-cache` folder, and run Terraform directly. Example:

    terraspace build demo
    cd .terraspace-cache/dev/stacks/demo
    terraform init
    terraform apply

Once you're in the `.terraspace-cache folder`, it's regular terraform at that point.

## HCL ERB Templating: A little extra power

Terraspace supports ERB templating. This minor enhancement adds incredible power.

This allows you to use Ruby, a full programming language. Terraspace tries to give you the best of both worlds. You're still in the Terraform declarative land but got a little extra power with ERB. Since HCL the native Terraform language, you should generally stick to it. However, terraspace allows you to reach to this additional power when needed.

If you really prefer not to use HCL, then Terraspace also has a Ruby DSL. The DSL builds `.json` files that Terraform understands just like `.tf` files. Note, the Ruby DSL is under development. HCL is pretty powerful, so would generally stick to it. Others will be more used to seeing HCL also.

## Backend State Storage

Terraspace automatically creates backend state storage resources like s3 buckets, dynamodb tables, gcs buckets. This added convenience is one less thing you don't have to worry about. You can focus on code instead.

{% include intro/testing.md %}
