---
title: terraspace new plugin
reference: true
---

## Usage

    terraspace new plugin SUBCOMMAND

## Description

plugin subcommands

## Example

    $ terraspace new plugin mycloud
    => Creating new plugin: mycloud
          create  terraspace_plugin_mycloud
          create  terraspace_plugin_mycloud/.gitignore
          create  terraspace_plugin_mycloud/.rspec
          create  terraspace_plugin_mycloud/CHANGELOG.md
          create  terraspace_plugin_mycloud/Gemfile
          create  terraspace_plugin_mycloud/LICENSE.txt
          create  terraspace_plugin_mycloud/README.md
          create  terraspace_plugin_mycloud/Rakefile
          create  terraspace_plugin_mycloud/bin/console
          create  terraspace_plugin_mycloud/bin/setup
          create  terraspace_plugin_mycloud/lib/templates/hcl/module/main.tf
          create  terraspace_plugin_mycloud/lib/templates/hcl/module/outputs.tf
          create  terraspace_plugin_mycloud/lib/templates/hcl/module/variables.tf
          create  terraspace_plugin_mycloud/lib/templates/hcl/project/config/terraform/backend.tf
          create  terraspace_plugin_mycloud/lib/templates/hcl/project/config/terraform/provider.tf
          create  terraspace_plugin_mycloud/lib/templates/hcl/stack/main.tf
          create  terraspace_plugin_mycloud/lib/templates/hcl/stack/outputs.tf
          create  terraspace_plugin_mycloud/lib/templates/hcl/stack/variables.tf
          create  terraspace_plugin_mycloud/lib/templates/ruby/module/main.rb
          create  terraspace_plugin_mycloud/lib/templates/ruby/module/outputs.rb
          create  terraspace_plugin_mycloud/lib/templates/ruby/module/variables.rb
          create  terraspace_plugin_mycloud/lib/templates/ruby/project/config/terraform/backend.rb
          create  terraspace_plugin_mycloud/lib/templates/ruby/project/config/terraform/provider.rb
          create  terraspace_plugin_mycloud/lib/templates/ruby/stack/main.rb
          create  terraspace_plugin_mycloud/lib/templates/ruby/stack/outputs.rb
          create  terraspace_plugin_mycloud/lib/templates/ruby/stack/variables.rb
          create  terraspace_plugin_mycloud/lib/templates/test/rspec/module/test/.rspec
          create  terraspace_plugin_mycloud/lib/templates/test/rspec/module/test/Gemfile
          create  terraspace_plugin_mycloud/lib/templates/test/rspec/module/test/spec/fixtures/stack/main.tf
          create  terraspace_plugin_mycloud/lib/templates/test/rspec/module/test/spec/fixtures/stack/outputs.tf
          create  terraspace_plugin_mycloud/lib/templates/test/rspec/module/test/spec/fixtures/stack/variables.tf
          create  terraspace_plugin_mycloud/lib/templates/test/rspec/module/test/spec/main_spec.rb
          create  terraspace_plugin_mycloud/lib/templates/test/rspec/module/test/spec/spec_helper.rb
          create  terraspace_plugin_mycloud/lib/terraspace_plugin_mycloud.rb
          create  terraspace_plugin_mycloud/lib/terraspace_plugin_mycloud/autoloader.rb
          create  terraspace_plugin_mycloud/lib/terraspace_plugin_mycloud/clients.rb
          create  terraspace_plugin_mycloud/lib/terraspace_plugin_mycloud/interfaces/backend.rb
          create  terraspace_plugin_mycloud/lib/terraspace_plugin_mycloud/interfaces/config.rb
          create  terraspace_plugin_mycloud/lib/terraspace_plugin_mycloud/interfaces/expander.rb
          create  terraspace_plugin_mycloud/lib/terraspace_plugin_mycloud/interfaces/layer.rb
          create  terraspace_plugin_mycloud/lib/terraspace_plugin_mycloud/version.rb
          create  terraspace_plugin_mycloud/spec/spec_helper.rb
          create  terraspace_plugin_mycloud/spec/terraspace_provider_mycloud_spec.rb
          create  terraspace_plugin_mycloud/terraspace_plugin_mycloud.gemspec
    $

## Subcommands

* [terraspace plugin ci]({% link _reference/terraspace-plugin-ci.md %}) - Generates CI Plugin.
* [terraspace plugin core]({% link _reference/terraspace-plugin-core.md %}) - Generates Core plugin.


