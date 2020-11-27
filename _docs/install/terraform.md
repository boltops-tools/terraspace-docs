---
title: Install Terraform
---

This pages shows you different ways to install Terraform.

## Install via tfenv

The recommended way to install terraform is with tfenv. This allows you to chose and switch versions of Terraform easily. Here are the commands:

    git clone https://github.com/tfutils/tfenv.git ~/.tfenv
    echo 'export PATH="$HOME/.tfenv/bin:$PATH"' >> ~/.bash_profile
    export PATH="$HOME/.tfenv/bin:$PATH"
    tfenv install latest
    tfenv use latest

## Install via Terraform Download

The [Terraform installation instructions](https://www.terraform.io/downloads.html) provides steps to download and install terraform for your system.
