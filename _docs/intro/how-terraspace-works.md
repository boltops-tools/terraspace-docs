---
title: How Terraspace Works
---

Here's a high-level explanation of how Terraspace works. It's pretty straightforward.

## General

Terraspace works by building files in the `app` and `config` folders to a `.terraspace-cache` folder. Then it merely calls out to `terraform` within that folder.

In fact, you can use Terraspace to build the files first, cd into the `.terraspace-cache` folder, and run Terraform directly. Example:

    terraspace build demo
    cd .terraspace-cache/us-west-2/dev/stacks/demo
    terraform init
    terraform apply

Once you're in the `.terraspace-cache` folder, it's regular terraform at that point.

## HCL ERB Templating: A little extra power

Terraspace supports ERB templating. This minor enhancement adds incredible power.

Terraspace tries to give you the best of both worlds. You get the Terraform HCL declarative power, at the same time, it gives you a little extra power with ERB. Terraspace allows you to reach for this additional power when needed.

If you prefer not to use HCL, then Terraspace also has a Ruby DSL. The DSL builds `.json` files that Terraform understands just like `.tf` files.

## Backend State Storage

Terraspace can create backend state storage resources like s3 buckets, dynamodb tables, azure storage accounts, and gcs buckets automatically. This added convenience is one less thing you don't have to worry about. You can focus on code instead.

{% include intro/testing.md %}
