---
title: Config Reference
---

Here's a list of the available config settings.

Name | Description | Default
--- | --- | ---
all.concurrency | How many processes to run in parallel for each batch for the `terraspace all` commands. | 5
all.exit_on_fail.down | Whether or not to exit if one of the down commands fails. Note: Other commands like show, validate, etc are also configurable and default to false. For `all down` , `TS_EXIT_ON_FAIL=0` will also tell Terraspace to continue on failures. | true
all.exit_on_fail.up | Whether or not to exit if one of the up commands fails. | true
all.include_stacks | Stacks to include and consider for the dependency graph. | nil
all.ignore_stacks | Stacks to ignore and not to be considered as part of the dependency graph. | nil
allow.envs | Array of allowed envs to deploy to. IE: dev, prod, etc. By default, any env is allowed. | nil
allow.regions | Array of allowed regions to deploy to. IE: us-east-1, us-west-2, etc. By default, any region is allowed. | nil
auto_create_backend | Enable auto-creation of backend | true
build.cache_dir | The relative dir for the module or stack cache. This can be a string that will be used for substitution, IE: `.terraspace-cache/us-west-2/dev/stacks/demo` The option can also be Ruby object that responds to `call` or a class that has an instance method `call`. IE: `CustomCacheDir.call` or `CustomCacheDir#call`. The current stack/module is passed to the `call` method | :CACHE_ROOT/:REGION/:ENV/:BUILD_DIR
build.cache_root | The root of the cache build dir. IE: .terraspace-cache | /full/path/to/.terraspace-cache
build.clean_cache | Whether to clean the cache at the beginning of the build process. Can be useful to turn off if using TFC VCS-Driven workflow. | true
bundle | This should be a Hash. It configures `terraspace bundle` settings. Options are passed straight through, allowing you to configure anything with the bundle command. See [terrafile config level options]({% link _docs/terrafile/options.md %}) for the options. | {logger: Terraspace.logger}
hooks.on_boot | Hook to run on boot. This hook runs very early. You can use it configure things like ENV vars dynamically. This should be a Ruby block of code. | nil
init.mode | Can be: auto, never, always. auto means init will only be called when .terraform doesnt exist yet. You can also override this with a env var. IE: `TS_INIT_MODE=always` | auto
layering.names | Map layering names to friendly names. Currently only supports namespace. More docs: [Layering Friendly Names]({% link _docs/tfvars/friendly-names.md %}) | {}
layering.enable_names.cache_dir | Enable or disable friendly name mapping for `build.cache_dir` path. It can be useful to disable this if you've changed the default settings and want to keep original path and state file. More docs: [Build Cache Dir]({% link _docs/config/cache-dir.md %}) | true
log.root | The root folder where logs are written to. | log
logger | Logger instance to use. | Logger.new($stdout)
logger.formatter | Logger Formatter to use. See [Formatter](https://ruby-doc.org/stdlib-2.7.1/libdoc/logger/rdoc/Logger/Formatter.html) for interface. | [Terraspace::Logger::Formatter](https://github.com/boltops-tools/terraspace/blob/master/lib/terraspace/logger/formatter.rb)
logger.level | Logger level | info
summary.prune | Prune old state files with no resources to speed up summary call over time. Note: This removes old state files, so it deletes some state history. | false
terraform.plugin_cache.dir | Sets `TF_PLUGIN_CACHE_DIR`. | /tmp/terraspace/plugin_cache
terraform.plugin_cache.enabled | Whether or not to enable a common cache folder to download plugins. | true
terraform.plugin_cache.purge_on_error | Whether or not to automatically purge the plugin_cache and retry when there are Terraform plugin cache errors like [this](https://gist.github.com/tongueroo/f3b44297228d420442a683fbe80e8937). Recommend enabling. | true
test_framework | Test framework to use | rspec
{% include config/tfc.md %}

Here's also the [config/app.rb](https://github.com/boltops-tools/terraspace/blob/master/lib/terraspace/app.rb) source where these config options are defined.
