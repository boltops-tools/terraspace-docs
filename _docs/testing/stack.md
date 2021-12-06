---
title: Stack-Level Testing
---

Stack-level testing refers to testing specific stacks. Their tests live within the stack's folder itself and are meant to be ran independently.

## Structure

Let's say you have terraform stack named demo:

    app/stacks/demo
    ├── main.tf
    ├── outputs.tf
    └── variables.tf

We can use [terraspace new test]({% link _reference/terraspace-new-test.md %}) run from the **root** of the terraspace project to create a `app/stacks/demo/test/spec/main_spec.rb` test.

    terraspace new test demo --type stack

The structure will look something like this:

    app/stacks/demo/test
    └── spec
        ├── fixtures
        │   └── stack
        │       ├── main.tf
        │       └── outputs.tf
        └── main_spec.rb

## Test Code

Here's an example of the generate spec.

app/stacks/demo/test/spec/main_spec.rb:

```ruby
describe "main" do
  before(:all) do
    stack_path = File.expand_path("../..", __dir__) # the source of the stack to test is 2 levels up
    ts_root = File.expand_path("../../..", stack_path) # original Terraspace.root
    # Build terraspace project to use as a test harness
    # Will be located at: /tmp/terraspace/test-harnesses/demo-harness
    terraspace.build_test_harness(
      name:    "demo-harness",
      modules: "#{ts_root}/app/modules", # include all modules in folder
      stacks:  {demo: stack_path},
      # override demo stack tfvars for testing
      tfvars:  {demo: "#{stack_path}/spec/fixtures/tfvars/demo.tfvars"},
      # create config if needed. The folder will be copied over
      # config:  "#{stack_path}/spec/fixtures/config",
    )
    terraspace.up("demo")
  end
  after(:all) do
    terraspace.down("demo")
  end

  it "successful deploy" do
    # Replace with your own test
    expect(true).to be true
    # Example
    # pp terraspace.outputs
    # output_value = terraspace.output("demo", "some-output")
    # expect(output_value).to include("some-value")
    # More useful helpers:
    # pp terraspace.state['resources']
    # pp terraspace.state_resource('random_pet.this')
    # pp terraspace.state_resource('module.bucket')
  end
end
```

### Run Tests

To run the test, you should be **within** in the module folder itself.

    cd app/stacks/demo
    bundle
    terraspace test

{% include testing/test-process.md %}
