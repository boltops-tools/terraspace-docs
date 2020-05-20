# Module-Level Testing

Module-level testing refers to testing specific modules. Their tests live within the module's folder itself and are meant to be ran independently.

## Structure

Let's say you have terraform module named demo:

    app/modules/demo
    ├── main.tf
    ├── outputs.tf
    └── variables.tf

Create a `test` folder within the module's folder to add tests. So the structure will look something like this:

    app/modules/demo
    ├── main.tf
    ├── outputs.tf
    ├── test
    │   └── spec
    │       ├── fixtures
    │       ├── main_spec.rb
    │       └── spec_helper.rb
    └── variables.tf

## Test Code

Here's an example of a spec.

test/spec/main_spec.rb:

```ruby
describe "main" do
  before(:all) do
    mod_path = File.expand_path("../..", __dir__) # the source of the module under testing is 2 levels up
    # Build terraspace project to use as a test harness
    # Will be located at: /tmp/terraspace/test-harnesses/network
    terraspace.build_test_harness(
      name: "network", # terraspace project name
      modules: {example: mod_path},
      stacks:  {stack: "#{mod_path}/test/spec/fixtures/stack"},
    )
    terraspace.up("stack") # the module or stack name under testing
  end
  after(:all) do
    terraspace.down("stack") # the module or stack name under testing
  end

  it "successful deploy" do
    network_id = terraspace.output("stack", "network_id")
    expect(network_id).to include("networks") # IE: projects/tung-xxx/global/networks/ladybug
  end
end
```

### Run Tests

To run the spec:

    cd demo/test # you should be in the test folder
    bundle
    bundle exec rspec

## Example

A more complete example is in [examples/demo-module](examples/demo-module).
