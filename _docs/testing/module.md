---
title: Module-Level Testing
---

Module-level testing refers to testing specific modules. Their tests live within the module's folder itself and are meant to be ran independently.

Here's an repo with module test demo based on these docs: [boltops-tools/terraspace-demo-module-test](https://github.com/boltops-tools/terraspace-demo-module-test)

## Structure

Let's say you have terraform module named example:

    app/modules/example
    ├── main.tf
    ├── outputs.tf
    └── variables.tf

We can use [terraspace new test]({% link _reference/terraspace-new-test.md %}) run from the **root** of the terraspace project to create a `app/modules/example/test/spec/main_spec.rb` test.

    terraspace new test example --type module

The structure will look something like this:

    app/modules/example/test
    └── spec
        ├── fixtures
        │   └── stack
        │       ├── main.tf
        │       └── outputs.tf
        └── main_spec.rb

## Test Code

Here's an example of the generate spec.

app/modules/example/test/spec/main_spec.rb:

```ruby
describe "main" do
  before(:all) do
    mod_path = File.expand_path("../..", __dir__) # the source of the module to test is 2 levels up
    # Build terraspace project to use as a test harness
    # Will be located at: /tmp/terraspace/test-harnesses/network
    terraspace.build_test_harness(
      name: "example-harness",
      modules: {example: mod_path},
      # See: https://terraspace.cloud/docs/testing/test-harness/
      # config: "spec/fixtures/config",
      # tfvars: {demo: "spec/fixtures/tfvars/test.tfvars"},
    )
    terraspace.up("example")
  end
  after(:all) do
    terraspace.down("example")
  end

  it "successful deploy" do
    # Replace with your own test
    expect(true).to be true
    # Example
    pp terraspace.outputs
    output_value = terraspace.output("example", "name")
    # terraform generates a bucket name in the form of "terraform-20210531202051034300000001"
    expect(output_value).to include("terraform-")
  end
end
```

### Run Tests

To run the test, you should be **within** in the module folder itself.

    cd app/modules/example
    bundle
    terraspace test

{% include testing/test-process.md %}
