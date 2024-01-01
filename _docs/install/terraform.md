---
title: Install Terraform
nav_text: Terraform
category: install
order: 6
---

This pages shows you different ways to install Terraform.

## Install via tfenv

The recommended way to install terraform is with tfenv. This allows you to choose and switch versions of Terraform easily. Here are the commands:

    git clone https://github.com/tfutils/tfenv.git ~/.tfenv
    echo 'export PATH="$HOME/.tfenv/bin:$PATH"' >> ~/.bash_profile
    export PATH="$HOME/.tfenv/bin:$PATH"
    tfenv install 1.5.5 # do not use later than 1.5.5
    tfenv use 1.5.5

## Install via Terraform Download

The [Terraform installation instructions](https://www.terraform.io/downloads.html) provide steps to download and install terraform for your system.

## Terraform BSL License Change

{% include terraform/license.md %}

## Checking Terraform Version

You can check if you have a permitted terraform version with:

    $ terraspace check
    terraspace version: 2.2.11
    terraform bin: ~/.tfenv/bin/terraform
    terraform version: 1.5.5
    You're all set!
