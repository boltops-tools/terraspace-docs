---
title: terraspace new project
reference: true
---

## Usage

    terraspace new project NAME

## Description

Generates new project.

## Example

    $ terraspace new project infra --plugin aws --examples
    => Creating new project called infra.
          create  infra
          create  infra/.gitignore
          create  infra/Gemfile
          create  infra/README.md
          create  infra/Terrafile
          create  infra/config/app.rb
           exist  infra
          create  infra/config/terraform/backend.tf
          create  infra/config/terraform/provider.tf
    => Creating test for new module: example
          create  infra/app/modules/example
          create  infra/app/modules/example/main.tf
          create  infra/app/modules/example/outputs.tf
          create  infra/app/modules/example/variables.tf
    => Creating new stack called demo.
          create  infra/app/stacks/demo
          create  infra/app/stacks/demo/main.tf
          create  infra/app/stacks/demo/outputs.tf
          create  infra/app/stacks/demo/variables.tf
    => Creating test bootstrap structure
           exist  infra
          create  infra/.rspec
          create  infra/spec/spec_helper.rb
    => Installing dependencies with: bundle install
    Bundle complete! 3 Gemfile dependencies, 88 gems now installed.
    Use `bundle info [gemname]` to see where a bundled gem is installed.
    ================================================================
    Congrats! You have successfully created a terraspace project.
    Check out the created files. Adjust to the examples and then deploy with:

        cd infra
        terraspace up demo -y   # to deploy
        terraspace down demo -y # to destroy

    More info: https://terraspace.cloud/
    $


## Options

```
    [--examples], [--no-examples]              # Also generate examples
y, [--force]                                   # Bypass overwrite are you sure prompt for existing files.
    [--lang=LANG]                              # Language to use: HCL/ERB or Ruby DSL
                                               # Default: hcl
p, [--plugin=PLUGIN]                           # Cloud Plugin. Supports: aws, google
                                               # Default: aws
    [--test], [--no-test]                      # Whether or not to generate tests
    [--plugin-gem=PLUGIN_GEM]                  # Use if provider gem name doesnt follow terraspace_plugin_XXX naming convention. Must specify both --plugin and --plugin-name option
    [--bundle], [--no-bundle]                  # Runs bundle install on the project
                                               # Default: true
    [--config], [--no-config]                  # Whether or not to generate config files.
                                               # Default: true
    [--quiet], [--no-quiet]                    # Quiet output.
    [--test-structure], [--no-test-structure]  # Create project bootstrap test structure.
```

