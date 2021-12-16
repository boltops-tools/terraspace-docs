---
title: How to Lock Gem Versions
nav_text: Version Locking
category: gem
order: 1
---

One of the benefits of installing terraspace as a gem is more control over the installation process.

In the Ruby world locking dependencies are usually handled with [bundler](https://bundler.io/), `Gemfile` and `Gemfile.lock`.  The generated Terraspace project with [terraspace new project]({% link _reference/terraspace-new-project.md %}) provides a starter Gemfile. It looks something like this:

```ruby
source "https://rubygems.org"
gem "terraspace", '~> 0.6.20'
gem "rspec-terraspace"
gem "terraspace_plugin_aws"
```

In this example, terraspace itself is pinned by using a version specifier `~>`. This means that when `bundle` runs it will use at least version 0.6.20 and other patch versions above within the minor version are also ok.

* Bundler Docs: [Gemfile](https://bundler.io/gemfile.html)

You can add and specify additional gem version dependencies if you wish or need to lock down specific versions of gems further. For example, if you want to add `faraday`.

```ruby
source "https://rubygems.org"
gem "terraspace", '~> 0.6.20'
gem "rspec-terraspace"
gem "terraspace_plugin_aws"
# added for more control over the dependencies
gem "faraday", "~> 1.8.0"
```

And run bundle again to regenerate the `Gemfile.lock` file.

    bundle

## Thoughts

Considering adding additional version specifiers in the generated `Gemfile`, but there are some trade-offs.

**An analogy:**

Consider how Terraform itself handles version locking of providers and modules. You can always specify pinned versions of providers like aws, azurerm, or google in your `provider.tf`. Where you use the `module` keyword to source in a module, you can also specify specific versions to lock the module down. This has been practice has been repeated often enough that it often goes unquestioned without considering the trade-offs.

Locking versions can provide stability, especially since the speed at which terraform move is quick. At the same time, because terraform moves rapidly, locking versions means you won't get the latest updates and fixes. In practice, this can also break things and cause the very thing you were trying to prevent: instability.

Because pinned versions are too old, they're is not really being tested by the community. So you end up unlocking the versions and updating everything in one big go to fix things. It becomes a mouse-and-cat game of updating versions in hopes of fixing the breakage. To compress matters, this often happens at a non-ideal time. The updates would have of happened more incrementally had the versions been more "free".

So is it better to leave versions free?

Of course not. As often the answer, it depends. It's often pragmatic to consider dependencies each closely on a case-by-case basis. Currently, the generated Gemfile is a small list. Additional gem versions may be added as cases are considered.

The issue can also be helped in another way: by reducing the dependencies footprint. In future Terraspace versions, hoping to move provider plugins moved out of the core terraspace gem and add them as part of the `Gemfile` only. This should further reduce the chances of dependencies causing issues.

## Terrapace Shim Wrapper

On certain system setups, you may also want or need to add a [terraspace shim]({% link _docs/misc/shim.md %}) to ensure that `bundle exec` gets called early enough. It's really system-dependent. Details are covered here: [Shim Wrapper]({% link _docs/misc/shim.md %}).
