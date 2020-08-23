---
title: Shim Wrapper
---

If you are seeing an annoying "warning: already initialized constant" like so:

    $ terraspace up demo
    /Users/me/.rbenv/versions/2.7.1/lib/ruby/2.7.0/json/version.rb:4: warning: already initialized constant JSON::VERSION
    /Users/me/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/gems/json-2.3.1/lib/json/version.rb:4: warning: previous definition of VERSION was here
    /Users/me/.rbenv/versions/2.7.1/lib/ruby/2.7.0/json/version.rb:5: warning: already initialized constant JSON::VERSION_ARRAY
    ...
    /Users/me/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/gems/json-2.3.1/lib/json/common.rb:136: warning: previous definition of UnparserError was here
    Building .terraspace-cache/us-west-2/dev/stacks/demo
    ...

This is due to bundler not loading until a little later.  Here are the options for removing the warning:

1. Prepend `bundle exec` in front of all terraspace commands
2. Run `bundle clean` with your terraspace project. Note this can break other gems on your system.
3. Use a shim wraper for terraspace

The current recommended approach #3, a wrapper shim. You only have to set up the shim once.

## Shim Wrapper

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

The wrapper shim will prepend `bundle exec` whenever in a Terraspace project folder with a Gemfile. It will not prepend `bundle exec` outside of a Terraspace project. For example, if you are using `terraspace new` generators.

## Generating the Shim Wrapper

You can also use terraspace to generate the shim wrapper.

    terraspace new shim

You'll see something like this:

    $ terraspace new shim
          create  /usr/local/bin/terraspace
           chmod  /usr/local/bin/terraspace

If you want to specify the path where you want the shim to be saved like so:

    terraspace new shim --path ~/bin/terraspace
