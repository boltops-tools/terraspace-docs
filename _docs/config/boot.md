---
title: Boot Hooks
---

If you need to hook into the Terraspace boot process super-early on, Terraspace boot hooks are designed for that.

* They run very early in the Terraspace boot process even before plugins are loaded.
* They are useful for setting shared global values like env vars.
* Boot hooks are ruby files that get required. It's nice and simple. There's no interface to learn.

## Hooks

Terraspace will searches 2 files in the `config` folder. If the files exist, they will be ran in this order.

1. **config/boot.rb**: Always runs.
2. **config/boot/TS_ENV.rb**: Runs based on the env. IE: `TS_ENV=dev` => `config/boot/dev.rb`

Both files are required and ran if they both exists. Since the `TS_ENV` one runs second, it can be used to override previously set values.

## Example: Default TS_ENV

If you prefer a different default than `TS_ENV=dev`.

config/boot.rb

```ruby
ENV['TS_ENV'] ||= 'development'
```

This changes the default for everyone using the project, but still allows them to control the default by adding `export TS_ENV=development` to their `~/.bash_profile`.

## Example: Auto-Switch AWS_PROFILE

One useful example is switching `AWS_PROFILE` based on the `TS_ENV`. Example:

config/boot/dev.rb

```ruby
ENV['AWS_PROFILE'] = 'dev'
```

This example is for AWS, but you can can do similiar switch logic with `GOOGLE_APPLICATION_CREDENTIALS`, etc.

## Other Examples

Users have done interesting things with the boot hook. Here's are some community examples:

* [Assuming AWS Roles](https://community.boltops.com/t/customized-layering-support/632/14)
* [Access to Command ARGV](https://community.boltops.com/t/does-terraspace-boot-hook-have-access-to-know-what-command-is-being-run/642)

## Boot Ordering

This `config/boot.rb` hooks run the earliest. Here's an overview of the boot ordering:

1. [config/boot.rb]({% link _docs/config/boot.md %})
2. [dotenv files]({% link _docs/config/dotenv.md %})
3. [plugins]({% link _docs/plugins.md %}): IE: aws, azure, google
4. [app/inits]({% link _docs/config/inits.md %}): Initializers

Please refer to the source code for more details on boot ordering: [terraspace/booter.rb](https://github.com/boltops-tools/terraspace/blob/master/lib/terraspace/booter.rb)
