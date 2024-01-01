---
title: Standalone Package Installation
nav_text: Standalone
category: install
subcategory: standalone
order: 2
---

You can install Terraspace as a standalone package.  The nice thing about this approach is that it is easy. You don't have to have Ruby installed. You don’t have to worry about compatible Ruby versions, gems, or conflicting system packages.

Terraspace provides the pre-built binaries. Other tools such as [vagrant](https://www.vagrantup.com/), written in ruby, and the [aws cli](https://aws.amazon.com/cli/), written in python, also work the same way.

Important: If you're using rvm or rbenv and already have Ruby installed, you should [install terraspace as a gem]({% link _docs/install/gem.md %}). Otherwise, different gem dependencies from the two installations can be used and cause all kinds of trouble.

Below are quickstart instructions for different OSes.

## Mac OSX

    brew tap boltops-tools/software
    brew install terraspace

More info on [Mac OSX Install]({% link _docs/install/standalone/macosx.md %})

## CentOS/RedHat/Fedora

    sudo su
    curl -so /etc/yum.repos.d/boltops.repo https://yum.boltops.com/boltops.repo
    rpm --import https://yum.boltops.com/boltops-key.public
    yum install -y terraspace

More info on [CentOS Install]({% link _docs/install/standalone/centos.md %})

## Ubuntu/Debian

    sudo su
    echo "deb https://apt.boltops.com stable main" > /etc/apt/sources.list.d/boltops.list
    curl -s https://apt.boltops.com/boltops-key.public | apt-key add -
    apt-get update
    apt-get install -y terraspace

More info on [Ubuntu Install]({% link _docs/install/standalone/ubuntu.md %})

{% include install/wrappers.md %}

## How It Works

The standalone installer packages are built within a few minutes of the terraspace gem release. Here are also details on how the standalone installer works: [Standalone Details]({% link _docs/install/standalone/details.md %}).
