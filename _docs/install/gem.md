---
title: Gem Installation
---

To install terraspace via RubyGems.

    gem install terraspace

Ruby 2.7 and above is recommended.

The nice thing about this installation method is that is the standard way to install ruby libraries and gems. It  integrates with your existing Ruby installation.

If you're looking for Ruby installation help: [Ruby Install]({% link _docs/install/ruby.md %}) docs.

## Updating

To update terraspace it is recommend you update project's `Gemfile` and use bundler. Update:

Gemfile

```ruby
source "https://rubygems.org"
gem "terraspace", '~> 0.6.2' # <= UPDATE THIS LINE
```

Then run:

    bundle update

Bundler will update terraspace and other dependencies to the latest.
