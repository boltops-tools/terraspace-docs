---
title: "Install: Mac OSX"
nav_text: MacOSX
category: archive-standalone
order: 1
---

{% include deprecated/standalone-install.md %}

This page shows you how to install Terraspace on Mac OSX.

Here's a "Mac OSX Homebrew Install" Video:

{% include videos/learn.md
     url="terraspace-install/lessons/terraspace-standalone-macosx-installation"
     img="https://learn-uploads.boltops.com/8o4xs73qwjrm4eg04oc8n8ocsneq"
     premimum=false %}

## Homebrew

You can install Terraspace via homebrew.

Install

    brew tap boltops-tools/software
    brew install terraspace

{% include install/upgrade-command.md %}

Uninstall

    brew uninstall terraspace

Cleanup

    rm -rf /opt/terraspace
    grep -l /opt/terraspace /usr/local/bin/* | xargs rm -f

{% include install/wrappers.md %}

{% include install/upgrade-why.md %}

## DMG

You can also download the dmg and install with the Mac OSX GUI installer.

Download link: [Terraspace DMG](https://tap.boltops.com/packages/terraspace/terraspace-latest.dmg)

You can check [terraspace-latest.dmg.metadata.json](https://tap.boltops.com/packages/terraspace/terraspace-latest.dmg.metadata.json) to verify the package checksum. Here's the checksum command.

    shasum -a 256 terraspace-latest.dmg
