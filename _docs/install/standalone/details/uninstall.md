---
title: "Uninstall Cleanup"
nav_text: Uninstall
category: standalone-details
order: 4
---

Some packager managers will not clean up the installed files completely. To fully clean up and uninstall terraspace. First run the package manger uninstall command and then clean up with:

    rm -rf /opt/terraspace

If you have installed terraspace wrappers in `/usr/local/bin`, you can remove those wrappers with this command:

    grep -l /opt/terraspace /usr/local/bin/* | xargs rm -f

Note: The apt-get package manager cleans up everything and you don't have to run these extra steps.
