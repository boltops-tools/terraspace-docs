---
title: "Standalone Details"
nav_text: Details
category: standalone
order: 9
---

The standalone installer packages are published daily. This page covers more details on how the standalone installation works.

## Isolated: /opt/terraspace

The standalone Terraspace package installs terraspace in `/opt/terraspace`. This folder contains everything like system libraries, Ruby, and gems needed for Terraspace to work as a standalone package. Additionally, this also makes it easy to remove terraspace.

## Wrappers: /usr/local/bin

The installer creates wrapper scripts in `/usr/local/bin`. Here are some of them:

    /usr/local/bin/bundle
    /usr/local/bin/gem
    /usr/local/bin/rspec
    /usr/local/bin/terraspace

Most users have `/usr/local/bin` configured in there PATH. So these wrappers should work.

If you wish not to have these wrappers generated for you, set `export TS_WRAPPERS=0` before running the installer. Without the wrapper scripts, to complete the terraspace standalone installation, you must add `/opt/terraspace/embedded/bin` to your PATH. See: [embedded bin path]({% link _docs/install/standalone/details/path.md %}).

## Terraform

Terraform is not included with the standalone installer. This allows you to install and run the Terraform version you want to use. Here are [Terraform Install instructions]({% link _docs/install/terraform.md %}).
