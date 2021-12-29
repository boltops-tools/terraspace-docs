---
title: Shim Wrapper
---

## Bundler already activated Warnings

If you are seeing an error that says a gem dependency is "already activated", for example:

    You have already activated faraday 1.7.0, but your Gemfile requires faraday 0.17.4. Prepending `bundle exec` to your command may solve this.

Prepending `bundle exec` should resolve the issue.

## The Short Answer: Use A Shim

It can be annoying to remember typing `bundle exec`, though. A shim wrapper essentially ensures that `bundle exec` is prepended in front of terraspace when you're within a project. This saves you precious finger-typing energy. You only have to set up the shim once. You can generate a shim with:

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

The shim wrapper should generally work for most systems, it might require adjustments depending on your system.

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

See: [Multiple Terraspace Versions]({% link _docs/install/gem/multiple-versions.md %})
