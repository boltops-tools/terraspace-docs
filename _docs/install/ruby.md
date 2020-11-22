---
title: Install Ruby
---

On a new system, the recommended way to install Ruby is via [rbenv](https://github.com/rbenv/rbenv). Here are 2 ways to install rbenv:

1. Install rbenv with git
2. Install rbenv with homebrew

## 1. Install rbenv with git

You can also simply install rbenv by cloning down the rbenv repo to `~/.rbenv.

    git clone https://github.com/rbenv/rbenv.git ~/.rbenv

    cat << EOF >> ~/.bash_profile
    export PATH="$HOME/.rbenv/bin:$PATH"
    eval "$(rbenv init -)"
    EOF

    # install ruby-build as an rbenv plugin
    mkdir -p ~/.rbenv/plugins
    git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

And start a new terminal and confirm that you're using ruby provided by rbenv. You should see something like this:

    $ type ruby
    ruby is /Users/tung/.rbenv/shims/ruby

With the rbenv git approach, you'll be able to use the latest available rubies by updating the ruby-build plugin repo directly.

    cd ~/.rbenv/plugins/ruby-build && git pull

## 2. Install rbenv with homebrew

You can install rbenv with homebrew also:

    brew install rbenv

You should see something like this:

    $ type rbenv
    rbenv is /usr/local/bin/rbenv
    $ type ruby-build
    ruby-build is /usr/local/bin/ruby-build

Note, ruby-build is installed as a part of rbenv by brew.

Rbenv installs different versions of ruby in the `~/.rbenv` folder. To complete the setup process:
Add this to your `~/.bash_profile`

    export PATH="$HOME/.rbenv/bin:$PATH"
    eval "$(rbenv init)"

And start a new terminal. You should be able see something like this:

    $ type ruby
    ruby is /Users/tung/.rbenv/shims/ruby

Then you'll be able to install different ruby versions. Here's an example:

    rbenv install 2.7.2
    rbenv global 2.7.2
    echo 2.7.2 > ~/.ruby-version # on some systems this is needed

## Notes

* With rbenv, you sometimes have to run `rbenv rehash` to generate the shims.
* [rvm](https://rvm.io/) is also ruby version manager similar to rbenv and is another way to install and manage multiple versions of ruby.
* Generally, have not used `brew install ruby` because it doesn't always to seem to regenerate the right executables in `/usr/local/bin` when installing gems.
