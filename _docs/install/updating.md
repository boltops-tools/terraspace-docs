---
title: Updating Terraspace Install Guide
nav_text: Updating
category: install
order: 9
---

To update or upgrade terraspace, you'll also need to update the pinned terraspace version in your Terraspace project's `Gemfile`. It looks something like this.

Gemfile

```ruby
gem "terraspace", '~> 1.0.0'
```

So to update terraspace to the next version can remove the version specificier `'~> 1.0.0'` entirely or update it to the version you wish.  Then run:

    bundle update terraspace

This generates a new `Gemfile.lock` that will pin a new terraspace version down. To confirm that the desired version of terraspace is being used:

    bundle info terraspace

## Updating Plugins

Updating plugins also work the same way.  The `Gemfile` probably looks something like this.

```ruby
gem "terraspace_plugin_aws"
```

In this case, there is already no version specifier, so you can just run:

    bundle update terraspace_plugin_aws

And the `Gemfile.lock` will be updated and pin the latest version available. Confirm that the desired version of terraspace is being used:

    bundle info terraspace_plugin_aws

## Updating Everything

If you want to update all dependencies. You can do that by running:

    bundle update

This updates all gems defined in the `Gemfile` and still try to keep implied dependencies generally pinned.

Often, you want to update all gems, including implied dependencies, completely. Blow away the `Gemfile.lock` and run `bundle update`. Example:

    rm -f Gemfile.lock
    bundle update

This generates a brand new `Gemfile.lock`. To see what versions are used:

    bundle list

## Why Upgrade with bundle?

You should always use bundle to upgrade or update Terraspace because it'll ensure that all of your project gem dependencies are installed, not just Terraspace. This applies to the standalone install also. The standalone installer installs an embedded version of ruby, bundle, and Terraspace in `/opt/terraspace/embedded`. It'll work on the first install on a clean machine, but is will likely not work when upgrading because the embedded install has a different set of gem dependencies than your project's `Gemfile.lock`. For more details see this GitHub Issue [217](https://github.com/boltops-tools/terraspace/issues/217#issuecomment-1162627382).
