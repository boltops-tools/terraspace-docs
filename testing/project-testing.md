# Project-Level Testing

Project-level testing belongs with the terraspace project itself. Their tests live within the spec folder at the root of the terraspace project structure.

## Structure

Let's say you have terraspace structure with a `app/modules/demo` module you want to test:

    infra
    └── app
        └── modules
            └── demo

You can add a `spec/modules/demo/main_spec.rb` that will use the `spec/fixtures/stacks/example` fixture.

    infra
    ├── app
    │   └── modules
    │       └── demo
    └── spec
        ├── fixtures
        │   └── stacks
        │       └── example
        └── modules
            └── demo
                └── main_spec.rb

The reason we use an example fixture for the stack code is because it will allow us to use test input variables.  Remember `the app/stacks` folder will have business logic already. So we use the fixture to override and replace business-specific logic and values with test logic.

## Test Code

Here's an example of a spec.

spec/modules/demo/main_spec.rb:

```ruby
describe "main" do
  before(:all) do
    # Build terraspace project to use as a test harness
    # Will be located at: /tmp/terraspace/test-harnesses/my-infra
    terraspace.build_test_harness(
      name:    "my-infra",
      modules: "app/modules",          # include all modules in this folder
      stacks:  "spec/fixtures/stacks", # include all stacks in this folder
    )
    terraspace.up("example")
  end
  after(:all) do
    terraspace.down("example") # example is the module or stack name under testing
  end

  it "successful deploy" do
    # example is the module or stack name under testing
    network_id = terraspace.output("example", "network_id")
    expect(network_id).to include("networks") # IE: projects/tung-xxx/global/networks/ladybug
  end
end
```

### Run Tests

To run the spec:

    cd infra # you should be in the terraspace project folder
    bundle
    bundle exec rspec

