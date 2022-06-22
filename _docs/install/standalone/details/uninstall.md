---
title: "Uninstall Cleanup"
nav_text: Uninstall
category: standalone-details
order: 5
---

Some packager managers will not clean up the installed files completely. The apt-get and yum package manager generally cleans up everything. Homebrew doesn't seem to clean up currently though.

To fully clean up and uninstall terraspace. First, run the package manger uninstall command and then clean up with:

    rm -rf /opt/terraspace

Also, the standalone installer do not remove the terraspace wrappers in `/usr/local/bin`. This is because updating packages on some OSes will also perform a cleanup step to remove the previous terraspace version. The removal process removes the wrapper scripts which are needed. You can remove the terraspace wrappers with this command though:

    grep -l /opt/terraspace /usr/local/bin/* | xargs rm -f
