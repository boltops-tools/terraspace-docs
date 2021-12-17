---
title: Shim Wrapper
---

A shim wrapper can be useful for some cases.

## Bundler already activated Warnings

For example, if you've [multiple versions of terraspace installed]({% link _docs/install/gem/multiple-versions.md %}) it can sometimes lead to dependencies resolution issues, and you'll see errors like this:

    You have already activated google-apis-core 0.3.0, but your Gemfile requires google-apis-core 0.2.1. Prepending `bundle exec` to your command may solve this.

This is due to the ruby system and bundler `Gemfile.lock` dependencies not matching.  There are a couple of options:

1. **bundle update**: Update `Gemfile.lock` with bundle update.
2. **shim wrapper**: Run `bundle exec` in front of your commands with a shim wrapper.

Approach #1 updates the `Gemfile.lock` dependencies to match the system and removes the warning. You won't need a shim in this case. We'll cover #2 next.

## Shim Wrapper

The shim wrapper essentially ensures that `bundle exec` is prepended in front of terraspace when you're within a project. This saves you precious finger-typing energy. You only have to set up the shim once.

Here's a wrapper shim that will work with rbenv. We'll create it at `~/bin/terraspace`

~/bin/terraspace

    #!/bin/bash
    eval "$(rbenv init -)"
    if [ -f config/app.rb ]; then
      exec bundle exec terraspace "$@"
    else
      exec terraspace "$@"
    fi

Make the file executable:

    chmod a+x ~/bin/terraspace

Then add `~/bin` to your PATH in your `~/.bash_profile`

    export PATH="~/bin:$PATH"

The wrapper shim will prepend `bundle exec` whenever in a Terraspace project folder with a Gemfile. It will not prepend `bundle exec` outside of a Terraspace project. For example, if you are using `terraspace new project` generator.

## Generating the Shim Wrapper

You can also use terraspace to generate the shim wrapper.

    terraspace new shim

You'll see something like this:

    $ terraspace new shim
          create  /usr/local/bin/terraspace
           chmod  /usr/local/bin/terraspace

If you want to specify the path where you want the shim to be saved like so:

    terraspace new shim --path ~/bin/terraspace

Note, the shim wrapper contains starter code. Though it should generally work for most systems, it might require adjustments depending on your system.

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

## Why The Need For bundle exec?

See: [Multiple Terraspace Versions]({% link _docs/install/gem/multiple-versions.md %})
