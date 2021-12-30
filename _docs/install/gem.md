---
title: Gem Installation
---

To install terraspace via RubyGems.

    gem install terraspace

Ruby 3.0 and above is recommended.

The nice thing about this installation method is that is the standard way to install Ruby libraries and gems. It integrates with your existing Ruby installation. And you have the most control over the installation.

If you're looking for Ruby installation help: [Ruby Install]({% link _docs/install/ruby.md %}) docs.

## Updating

To update terraspace, update project's `Gemfile` and use bundler. Update:

Gemfile

```ruby
source "https://rubygems.org"
gem "terraspace", '~> 0.6.2' # <= UPDATE THIS LINE
```

Then run:

    bundle update

Bundler will update terraspace and other dependencies to the latest.

## Shim

With a gem install, consider generating a [shim]({% link _docs/install/shim.md %}) so you don't have to remember to type `bundle exec` when running `terraspace` within the Terraspace project folder.
