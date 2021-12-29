---
title: Bundle Exec
---

## Already Activated Errors

If you are seeing an error that says a gem dependency is "already activated", for example:

    You have already activated faraday 1.7.0, but your Gemfile requires faraday 0.17.4. Prepending `bundle exec` to your command may solve this.

Prepending `bundle exec` should resolve the issue.

## The Short Answer: Use A Shim

It can be annoying to remember typing `bundle exec`, though. You can generate a shim to ensure that `bundle exec` is prepended:

    terraspace new shim

The shim looks something like this:

    #!/bin/bash
    if [ -f config/app.rb ]; then
      exec bundle exec terraspace "$@"
    else
      exec terraspace "$@"
    fi

It simply ensures that when you are within a Terraspace project, `bundle exec` is prepended.

By default, the shim is written to `/usr/local/bin/terraspace`. As long as `/usr/local/bin` is early enough in your system `$PATH`, you can then type `terraspace` instead of `bundle exec terraspace`.

You can change the path with the `--path` option. More info: [terraspace new shim]({% link _reference/terraspace-new-shim.md %}).

## The Long Answer: Why?

The key understanding why the "already activated" error happens is understanding how Ruby, bundler, and system load paths work. The `bundle exec` is essentially a wrapper script that adjusts the load path **before** calling the Ruby world. Using `bundle exec` affects the system load paths. It ensures that the exact versions specified in `Gemfile.lock` are used.

Example without:

    terraspace version

Example with:

    bundle exec terraspace version

When `bundle exec` is not prepended, the gem versions that get used are more dependent on how your environment has been configured. In this case, Ruby usually uses the latest gem dependency versions - it depends on your system load path. Terraspace takes an extra measure to help and calls `bundle exec` early [internally](https://github.com/boltops-tools/terraspace/blob/master/lib/terraspace/autoloader.rb#L2). But it doesn't work for all cases. In this case, you'll need to use `bundle exec`, uninstall other versions of gems from your system, or run `bundle update` to hopefully match gems in `Gemfile.lock` with the other gem versions installed on your system.
