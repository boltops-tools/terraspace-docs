---
title: Standalone Package Installation
---

You can install Terraspace as a standalone package.  The nice thing about this approach is that it is easy. Below are quickstart instructions for different OSes.

Important: If you're using rvm or rbenv and already have Ruby installed, you should [install terrspace as a gem]({% link _docs/install/gem.md %}). Otherwise, different gem dependencies from the 2 installations can be used and cause all kinds of trouble.

## Mac OS X

    brew cask install boltops-tools/software/terraspace
    sudo chown -R `whoami`:staff /opt/terraspace

## Centos/RedHat/Fedora

    sudo su -
    curl -so /etc/yum.repos.d/boltops.repo https://yum.boltops.com/boltops.repo
    rpm --import https://yum.boltops.com/boltops-key.public
    yum install -y terraspace

## Ubuntu/Debian

    sudo su -
    echo "deb https://apt.boltops.com stable main" > /etc/apt/sources.list.d/boltops.list
    curl -s https://apt.boltops.com/boltops-key.public | apt-key add -
    apt-get update
    apt-get install -y terraspace

## Standalone Install Docs

The standalone installer packages are published daily. Here are also detailed installation instructions for each OS.

{% assign docs = site.docs | where: "categories","standalone" | sort:"order" %}
{% for doc in docs -%}
* [{{ doc.title }}]({{ doc.url }})
{% endfor %}
