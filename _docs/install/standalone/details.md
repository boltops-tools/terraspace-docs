---
title: "Standalone Details"
nav_text: Details
category: standalone
order: 9
---

This page covers more details on how the standalone installation works.

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

## Uninstall Cleanup

Some packager managers will not clean up the installed files completely. To fully clean up and uninstall terraspace. First run the package manger uninstall command and then clean up with:

    rm -rf /opt/terraspace

If you have installed terraspace wrappers in `/usr/local/bin`, you can remove those wrappers with this command:

    grep -l /opt/terraspace /usr/local/bin/* | xargs rm -f

Note: The apt-get package manager cleans up everything and you don't have to run these extra steps.
