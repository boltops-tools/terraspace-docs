---
title: "Install: Mac OSX"
nav_text: MacOSX
category: standalone
order: 1
---

This page shows you how to install Terraspace on Mac OSX.

Here's a "Mac OSX Homebrew Install" Video:

<div class="video-box"><div class="video-container"><iframe src="https://www.youtube.com/embed/UzaMWTYEfTU" frameborder="0" allowfullscreen=""></iframe></div></div>

## Homebrew

You can install Terraspace via homebrew.

Install

    brew install --cask boltops-tools/software/terraspace
    sudo chown -R `whoami`:staff /opt/terraspace

It's important to change `/opt/terraspace` to be owned by your user: [Standalone Permissions]({% link _docs/install/standalone/details/permissions.md %})

Upgrade

    brew update
    brew install --cask boltops-tools/software/terraspace
    sudo chown -R `whoami`:staff /opt/terraspace

Uninstall

    brew cask uninstall boltops-tools/software/terraspace
    rm -rf /opt/terraspace
    grep -l /opt/terraspace /usr/local/bin/* | xargs rm -f # clean up terraspace wrappers

{% include install/wrappers.md %}

## DMG

You can also download the dmg and install with the Mac OSX GUI installer.

Download link: [Terraspace DMG](https://tap.boltops.com/packages/terraspace/terraspace-latest.dmg)

You can check [terraspace-latest.dmg.metadata.json](https://tap.boltops.com/packages/terraspace/terraspace-latest.dmg.metadata.json) to verify the package checksum. Here's the checksum command.

    shasum -a 256 terraspace-latest.dmg
