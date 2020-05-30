---
title: Project-Level Testing
---

Project-level testing belongs with the terraspace project itself. Their tests live within the spec folder at the root of the terraspace project structure.

## Structure

Let's say you have terraspace project with a `app/stacks/demo` module you want to test:

    └── app
        ├── modules
        │   └── example
        └── stacks
            └── demo

We can use `terraspace new project_test` to create a `spec/stacks/demo/main_spec.rb` test.

    terraspace new project_test demo

The structure would look something lik e this:

    ├── app
    │   ├── modules
    │   │   └── example
    │   └── stacks
    │       └── demo
    └── spec
        ├── fixtures
        │   └── tfvars
        │       └── demo.tfvars
        └── stacks
            └── demo
                └── main_spec.rb


Notice the `spec/fixtures/tfvars/demo.tvars`. We'll be configuring the test harness to use those tfvars for testing.

## Test Code

Here's an example of the generated starter spec.

spec/stacks/demo/main_spec.rb:

```ruby
describe "main" do
  before(:all) do
    # Build terraspace project to use as a test harness
    # Will be located at: /tmp/terraspace/test-harnesses/demo-harness
    terraspace.build_test_harness(
      name:    "demo-harness",
      modules: "app/modules",          # include all modules in this folder
      stacks:  "app/stacks",           # include all stacks in this folder
      # override demo stack tfvars for testing
      # copied over to test harness' app/stacks/demo/tfvars/test.tfvars
      tfvars:  {demo: "spec/fixtures/tfvars/demo.tfvars"},
      # create config if needed. The folder will be copied over
      # config:  "spec/fixtures/config",
    )
    terraspace.up("demo") # provision real resources
  end
  after(:all) do
    terraspace.down("demo") # destroy real resources
  end

  it "successful deploy" do
    # Replace with your actual test
    expect(true).to be true
    # Example
    output_value = terraspace.output("demo", "bucket_name")
    puts "output_value #{output_value}"
    # expect(output_value).to include("some-value")
  end
end
```

The test harness is configured to use your project `app/modules` and `app/stacks` code. However, the `tfvars` will be overwritten with test tfvars. Additionally, if you can configure a `config` folder to be also created.

The test harness allows you to use different input values to test your actual code.  You can update the code with an actual test. Perhaps check that the terraform outputs return an expected value.

### Run Tests

To run:

    cd infra # you should be in the terraspace project folder
    bundle
    terraspace test

This will:

1. Generate a test harness, which is a terraspace project
2. Run `terraspace up` to create actual resources
3. Run your test logic
4. Run `terraspace down` to destroy the resources
