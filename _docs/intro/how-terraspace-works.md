---
title: How Terraspace Works
---

Here's a high-level explanation of how Terraspace works. It's pretty straightforward.

## General

Terraspace works by building files in the `app` and `config/terraform` folders to a `.terraspace-cache` folder. Here's a diagram:

![](https://img.boltops.com/boltops/tools/terraspace/intro/terraspace-build.png)

Then it merely calls out to `terraform` within that folder. In fact, you can use Terraspace to build the files first, cd into the `.terraspace-cache` folder, and run Terraform directly. Example:

    terraspace build demo
    cd .terraspace-cache/us-west-2/dev/stacks/demo
    terraform init
    terraform apply

Once you're in the `.terraspace-cache` folder, it's regular terraform at that point.

Terraspace automates it with:

    terraspace up demo

## Terraform CLI Options

Terraspace performs powerful conveniences before changing into into the `.terraspace-cache` folder and then calling the required terraform commands. IE: `terraform init`, `terraform apply`, `terraform destroy`. Terraspace does not just blindly pass CLI options, though. It smartly passes the options to the underlying `terraform` commands only when needed. For example:

    terraspace up demo --upgrade --compact-warnings --no-color

This results in something like this:

    terraspace up demo --upgrade --compact-warnings --no-color
    => terraform init -upgrade -no-color -get -input=false >> /tmp/terraspace/log/init/demo.log
    => terraform apply -compact-warnings -no-color -input=false

Notice how the options are only passed through if the underlying `terraform` command support them:

* `-upgrade` was only passed to `terraform init`
* `-compact-warnings` was only passed to `terraform apply`
* `-no-color` was passed to both `terraform init` and `terraform apply`

Terraspace spares you from the menial work, so you don't have to worry about it.

Note that the example above uses a double dash `--` for the underlying terraform options, but a single dash `-` works just the same. For example, both of these are the same:

    terraspace up demo --upgrade --compact-warnings --no-color
    terraspace up demo -upgrade -compact-warnings -no-color

## HCL ERB Templating: A little extra power

Terraspace supports ERB templating. This minor enhancement adds incredible power.

Terraspace tries to give you the best of both worlds. You get the Terraform HCL declarative power, at the same time, it gives you a little extra power with ERB. Terraspace allows you to reach for this additional power when needed.

## Backend State Storage

Terraspace automatically creates backend state storage resources like s3 buckets, dynamodb tables, azure storage accounts, and gcs buckets. This added convenience is one less thing you don't have to worry about. You can focus on code instead.
