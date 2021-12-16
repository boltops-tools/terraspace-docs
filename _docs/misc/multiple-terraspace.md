---
title: Multiple Terraspace Versions
---

If you're interested in running multiple or different versions of terraspace on the same machine, this page can help.

## How to Use Multiple Versions: Short Answer

The short answer to running different versions of terraspace is always to use the terraspace version that's in `Gemfile.lock`. You do this with `bundle exec`. Examples:

    $ grep '"terraspace"' Gemfile
    gem "terraspace", '~> 0.5.12'
    $ bundle # to ensure version is installed and Gemfile.lock is up-to-date
    $ grep '^  terraspace ' Gemfile.lock
      terraspace (~> 0.5.12)
    $ bundle exec terraspace -v
    0.5.12
    $

Change terraspace version in Gemfile:

    $ grep '"terraspace"' Gemfile
    gem "terraspace", '~> 0.6.2'
    $ bundle
    $ grep '^  terraspace ' Gemfile.lock
      terraspace (~> 0.6.2)
    $ bundle exec terraspace -v
    0.6.2
    $

## Long Answer: Why bundle exec?

The key to running multiple versions is understanding how ruby, bundler, and system paths work. You see, when you run **any** cli command with `bundle exec` pretended, it affects the system load path.

Example without:

    terraspace version

Example with:

    bundle exec terraspace version

The `bundle exec` is a wrapper that adjusts the load path. By using `bundle exec`, it ensures that the exact versions specified in `Gemfile.lock` are used. This includes, not only terraspace, but all ruby gems.

When you don't use `bundle exec`, ruby uses the system load path. The versions that then get used are more dependent on your environment and how your system has been configured. In this case, Ruby has little choice but to make some assumptions, and usually, it uses the latest version.

So when using terraspace without `bundle exec`, the latest terraspace version is used. Terraspace takes an extra step to help. It calls `bundle exec` early [internally](https://github.com/boltops-tools/terraspace/blob/master/lib/terraspace/autoloader.rb#L2) also. This ensures that all other dependencies are locked to `Gemfile.lock`. Terraspace is only able to pin all other gems at that point, though. This approach does conveniently spare you from having to type `bundle exec` and works great for most cases.

It won't work when there's a later version of terraspace installed on the system, and your `Gemfile.lock` pins a different terraspace version. In this case, you'll need to use `bundle exec` or uninstall other versions of terraspace from your system.

## Version Checking within Project Code

When running multiple versions of terraspace,`bundle exec` will make sure the right terraspace version is loaded. However, `bundle exec` does nothing to ensure that your project code is written to the same version of terraspace. That's up to you.

Since you have access to a full programming language, you can tap into it to do conditional logic and perform versioning checking at the project-level.  This is where terraspace offers more power and control.

For example, the `config.hooks.on_boot` hook was changed in 0.6.2.

To account for versions < 0.6.2:

config/app.rb

```ruby
Terraspace.configure do
  major, minor, patch = Terraspace::VERSION.split('.').map(&:to_i)
  config.hooks.on_boot do
    ENV['AWS_PROFILE'] = 'dev-profile'
  end if major <= 0 and minor <= 6 && patch < 2
end
```

To account for versions >= 0.6.2:

config/boot.rb

```ruby
major, minor, patch = Terraspace::VERSION.split('.').map(&:to_i)
return unless major >= 0 and minor >= 6 && patch >= 2
ENV['AWS_PROFILE'] = 'dev-profile'
```

The code starts to get messy, but it's an option. Instead, the general recommendation is to use git to create a different branch, test the upgrade, and switch over to it as soon as it's feasible for your team. This keeps the code cleaner.

## Shim Wrapper

If have multiple versions of terraspace on the same system, you should always use the `bundle exec` command when you're inside the Terraspace project. This ensures that the terraspace version in the project's `Gemfile.lock` is used.  Typing `bundle exec` can get old quick, so you can use a [shim wrapper]({% link _docs/misc/shim.md %}) to save yourself previous finger-typing energy.
