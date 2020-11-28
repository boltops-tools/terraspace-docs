---
title: "Standalone Permissions"
nav_text: Permissions
category: standalone-details
---

After installing Terraspace via the standalone installer, you should change the owner of the `/opt/terraspace` folder to your user.

For macosx:

    sudo chown -R `whoami`:staff /opt/terraspace

For other linux OSes, this is generally:

    sudo chown -R `whoami`:`whoami` /opt/terraspace

## Why?

The standalone installer uses sudo to create the `/opt/terraspace` directory, so it is owned by root.  This results in a sudo prompt when terraspace calls `bundle` and tries to install new gems. You will see this:

    => Installing dependencies with: bundle install
    Following files may not be writable, so sudo is needed:
      /opt/terraspace/embedded/bin
      /opt/terraspace/embedded/lib/ruby/gems/2.7.0
      /opt/terraspace/embedded/lib/ruby/gems/2.7.0/cache
      /opt/terraspace/embedded/lib/ruby/gems/2.7.0/extensions
      /opt/terraspace/embedded/lib/ruby/gems/2.7.0/gems
      /opt/terraspace/embedded/lib/ruby/gems/2.7.0/specifications

    Your user account isn't allowed to install to the system RubyGems.
      You can cancel this installation and run:

          bundle install --path vendor/bundle

      to install the gems into ./vendor/bundle/, or you can enter your password
      and install the bundled gems to RubyGems using sudo.

      Password:

To fix this issue, make sure `/opt/terraspace` is owned by your user, instead of repeatedly having to type your password for sudo.
