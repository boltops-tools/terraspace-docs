---
title: "Standalone Permissions"
nav_text: Permissions
category: standalone-details
order: 1
---

The Terraspace standalone installer will make sure that the owner and permissions of the `/opt/terraspace` folder is your user.

If the `/opt/terraspace` folder is not owned by your user for whatever reason, here are the commands to change it:

For macosx:

    sudo chown -R `whoami`:staff /opt/terraspace

For other Linux OSes, this is generally:

    sudo chown -R `whoami`:`whoami` /opt/terraspace

## Why?

When the `/opt/terraspace` folder is not owned by your user, you won't be able to write to it without sudo. This results in a sudo prompt when terraspace calls `bundle` and tries to install new gems. You will see this:

    => Installing dependencies with: bundle install
    Following files may not be writable, so sudo is needed:
      /opt/terraspace/embedded/bin
      /opt/terraspace/embedded/lib/ruby/gems/3.0.0
      /opt/terraspace/embedded/lib/ruby/gems/3.0.0/cache
      /opt/terraspace/embedded/lib/ruby/gems/3.0.0/extensions
      /opt/terraspace/embedded/lib/ruby/gems/3.0.0/gems
      /opt/terraspace/embedded/lib/ruby/gems/3.0.0/specifications

    Your user account isn't allowed to install to the system RubyGems.
      You can cancel this installation and run:

          bundle install --path vendor/bundle

      to install the gems into ./vendor/bundle/, or you can enter your password
      and install the bundled gems to RubyGems using sudo.

      Password:

To fix this issue, make sure `/opt/terraspace` is owned by your user, instead of repeatedly having to type your password for sudo.

Also, running `sudo` means you're using bare shell with pretty much none of your environment settings or variables configured. Though there are ways to [preserve](https://stackoverflow.com/questions/8633461/how-to-keep-environment-variables-when-using-sudo) environment variables with `--preserve-env`, it's often better to avoid sudo as you'll run into different environmental differences and quirks.
