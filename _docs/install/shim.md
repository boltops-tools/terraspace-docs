---
title: Shim Wrapper
---

Terraspace projects have a `Gemfile.lock`. This file ensures that gem dependencies for are pinned. To use it, you run `bundle exec terraspace`. It can be annoying to remember typing `bundle exec`, though. Using a shim spares you from having to remember this, saving you precious finger-typing energy.

## Using a Shim

A shim wrapper ensures that `bundle exec` is prepended in front of terraspace when you're within a project. You only have to set up the shim once. You can generate a shim with:

    $ terraspace new shim
          create  /usr/local/bin/terraspace
           chmod  /usr/local/bin/terraspace

The shim looks something like this:

    #!/bin/bash
    if [ -f config/app.rb ]; then
      exec bundle exec terraspace "$@"
    else
      exec terraspace "$@"
    fi

By default, the shim is written to `/usr/local/bin/terraspace`. As long as `/usr/local/bin` is early enough in your system `$PATH`, you can type `terraspace` instead of `bundle exec terraspace`.

You can change the path with the `--path` option. More info: [terraspace new shim]({% link _reference/terraspace-new-shim.md %}).

The shim wrapper generally work for most systems, it might require adjustments depending on your system.

## Standlone Installer Shim

The [standalone installers]({% link _docs/install/standalone.md %}) actually generate a shim similar to above for you already. It looks something like this:

{% include install/standalone-shim.md %}

## Rbenv Shim Slowness

If you are using rbenv, it can be [slow](https://github.com/rbenv/rbenv/issues/70) on some systems. You may want to consider replacing the shim that rbenv generates with a faster one. Here's an example:

~/.rbenv/shims/terraspace

    #!/usr/bin/env bash
    EXE=$(gem which terraspace | sed 's|lib/terraspace.rb|exe/terraspace|')
    if [ -f config/app.rb ]; then
      exec bundle exec $EXE "$@"
    else
      exec $EXE "$@"
    fi

## Multiple Terraspace Versions

A shim is recommended when you have multiple versions of Terraspace installed on the same system. See: [Multiple Terraspace Versions]({% link _docs/install/gem/multiple-versions.md %})

## Long Answer: Why bundle exec?

The key to understanding why `bundle exec` is needed sometimes is understadning Ruby, bundler, and system paths work. You see, when you run **any** cli command with `bundle exec` pretended, it affects the system load path.

Example without:

    terraspace version

Example with:

    bundle exec terraspace version

Using `bundle exec` adjusts the load path. The load paths are adjusted to ensure that the exact versions specified in `Gemfile.lock` are used. This includes, not only terraspace, but all Ruby gem dependencies.

When you don't use `bundle exec`, Ruby uses the first gems found in your system's load path. The versions are more dependent how on your environment is configured. In this case, Ruby has little choice but to make some assumptions and uses the first gems found based on your system load path.  Usually, the latest gem versions installed on the system are used.

Terraspace actually calls `bundle exec` super early on [internally](https://github.com/boltops-tools/terraspace/blob/master/lib/terraspace/autoloader.rb#L2). This helps mitigate dependencies graph resolution issues. But Terraspace is only able to pin at that point and won't work for all cases. Sometimes gems must be pinned even before Terraspace is loaded.

It won't work when there's a later version of terraspace installed on the system, and your `Gemfile.lock` pins a different terraspace version. In this case, you'll need to use `bundle exec` or uninstall other versions of terraspace from your system.

## Bundler already activated Warnings

If you are seeing an error that says a gem dependency is "already activated", for example:

    You have already activated faraday 1.7.0, but your Gemfile requires faraday 0.17.4. Prepending `bundle exec` to your command may solve this.

Prepending `bundle exec` should resolve the issue. Or you can generate a [shim]({% link _reference/terraspace-new-shim.md %}) as described above.
