---
title: "Upgrade Cleanup"
nav_text: Upgrade
category: standalone-details
order: 4
---

Even if you have installed terraspace with the standalone installer, to upgrade terraspace you should use bundle. Example:

    cd terraspace-project
    vim Gemfile # edit the terraspace version if it's pinned
    bundle update terraspace

{% include install/upgrade-why.md %}
