---
title: Terraspace Helpers
---

## Terraspace Object Helper Methods

The main helper object is `terraspace`. It has several helper methods. Here's a list for referencing.  To see method signatures you can refer to the relevant source code files:

* [terraspace/ts.rb](https://github.com/boltops-tools/rspec-terraspace/blob/master/lib/rspec/terraspace/ts.rb)
* [terraspace/concern.rb](https://github.com/boltops-tools/rspec-terraspace/blob/master/lib/rspec/terraspace/concern.rb)

Name | Description
---|---
build_test_harness | Builds a temporary terraspace project with the specified modules, stacks, config, and tfvars injected.
up | Runs `terraspace up` and provisions resources.
down | Runs `terraspace down` and destroys resources.
output | Get output value. Example: `output("example", "name")`.
outputs | Get all outputs.
state | Get all state info.
state_resource | Get specified state_resource values. Example: `state_resource("random_pet.this")`.
