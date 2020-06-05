---
title: Test Harness Concept
---

For testing, Terraspace introduces the concept of a "Test Harness".  A test harness is a generated Terraspace project. You specify code from your actual Terraspace project and from fixtures to be used in the Test Harness. This allows you to mock our parts of your project and test the modules.

{% include testing/test-process.md %}

## Example

In the test code you use the `terraspace.build_test_harness` helper method to build a test harness. Here's an example:

```ruby
terraspace.build_test_harness(
  name:    "demo-harness",
  modules: "app/modules",          # include all modules in this folder
  stacks:  "app/stacks",           # include all stacks in this folder
  tfvars:  {demo: "spec/fixtures/tfvars/demo.tfvars"},
  # create config if needed. The folder will be copied over
  # config:  "spec/fixtures/config",
  # Additional folders that get copied straight over from the project
  # folders: %w[external]
)
```

## build_test_harness keys

The `terraspace.build_test_harness` helper method can be configured with different keys. The Test Harness provides a variety of Key options so it can be generally used for different cases.

Key | Description
--- | ---
name | Name of the generated Test Harness. The test harness gets built into `/tmp/terraspace/test-harness` by default.
modules | List of modules to be included in the Test Harness under the `app/modules` folder. The List can be a simple Array of strings, in which the folder gets copied. Or the list can be a Hash which maps a path to the a `NAME` to the `app/modules/NAME`folder.
stacks | List of stacks to be included in the Test Harness under the `app/stacks` folder. The List can be a simple Array of strings, in which the folder gets copied. Or the list can be a Hash which maps a path to the `NAME` in the `app/stacks/NAME`folder of the Test Harness.
tfvars | A Hash that maps either files or folders over to be copied to the `app/stacks/STACK/tfvars` within the Test Harness.
config | A String with a path to the config folder fixture to be copied to the Test Harness.
folders | A generalized List of Strings of folders to copy over from the actual Terraspace project to the Test Harness. This is a generalized method that allows copying of any arbitrary folders from the Terraspace project to the Test Harness.

A good way understand how these Keys work and how to use them is to look at the examples in the next sections.
