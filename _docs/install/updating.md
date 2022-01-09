---
title: Updating Terraspace
---

To update terraspace, you'll also need to update the pinned terraspace version in your Terraspace project's `Gemfile`. It looks something like this.

Gemfile

```ruby
gem "terraspace", '~> 1.0.0'
```

So to update terrapace to the next version can remove the version specificier `'~> 1.0.0'` entirely or update it to the version you wish.  Then run:

    bundle update terraspace

This generates a new `Gemfile.lock` that will pin a new terraspace version down.

## Updating Plugins

Updating plugins also work the same way.  The `Gemfile` probably looks something like this.

```ruby
gem "terraspace_plugin_aws"
```

In this case, there is already no version specifier, so you can just run:

    bundle update terraspace_plugin_aws

And the `Gemfile.lock` will be updated and pin the latest version available.

## Updating Everything

If you want to update all dependencies. You can do that by running:

    bundle update

This updates all gems defined in the `Gemfile` and still try to keep implied dependencies generally pinned.

Often, you want to update all gems, including implied dependencies, completely. Blow away the `Gemfile.lock` and run `bundle update`. Example:

    rm -f Gemfile.lock
    bundle update

This generates a brand new `Gemfile.lock`
