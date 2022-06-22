---
title: Troubleshooting
nav_text: Troubleshooting
category: standalone-details
order: 3
---

Below are some troubleshooting notes:

## Extensions are Not Built

If you are seeing warnings like this:

    Ignoring nio4r-1.2.1 because its extensions are not built. Try: gem pristine nio4r --version 1.2.1
    Ignoring nokogiri-1.10.10 because its extensions are not built. Try: gem pristine nokogiri --version 1.10.10
    Ignoring websocket-driver-0.6.5 because its extensions are not built. Try: gem pristine websocket-driver --version 0.6.5

You probably have rvm or rbenv and the Terraspace standalone version installed together.  Ruby version managers adjust the PATH so that libraries and gems are picked up and this can interfere with the Terraspace standalone PATH.

Having both the rvm or rbenv and the standalone Terraspace package installed means different gems from each install can be used. This causes all sorts of troubles. Since you already have Ruby installed, install terraspace as a gem instead. See: [Terraspace Gem Install]({% link _docs/install/gem.md %}).
