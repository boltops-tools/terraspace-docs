---
title: terraspace new test
reference: true
---

## Usage

    terraspace new test NAME

## Description

Generates test.

## Stack Examples

    $ terraspace new test example --type stack
    => Creating stack test: example
          create  app/stacks/example/test/.rspec
          create  app/stacks/example/test/Gemfile
          create  app/stacks/example/test/spec/fixtures/config/app.rb
          create  app/stacks/example/test/spec/fixtures/config/terraform/provider.tf
          create  app/stacks/example/test/spec/fixtures/tfvars/test.tfvars
          create  app/stacks/example/test/spec/main_spec.rb
          create  app/stacks/example/test/spec/spec_helper.rb
    $

## Module Examples

    $ terraspace new test example --type module
    => Creating module test: example
          create  app/modules/example/test/.rspec
          create  app/modules/example/test/Gemfile
          create  app/modules/example/test/spec/main_spec.rb
          create  app/modules/example/test/spec/spec_helper.rb
    $

## Project Examples

    $ terraspace new test my --type project
    => Creating test bootstrap structure
          create  .rspec
          create  spec/spec_helper.rb
    $


## Options

```
y, [--force]                 # Bypass overwrite are you sure prompt for existing files
    [--test-name=TEST_NAME]  # Test name. Defaults to the project, module or stack name
    [--type=TYPE]            # project, stack or module
                             # Default: stack
```

