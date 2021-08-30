---
title: Project-Level Testing
---

{% include videos/learn.md
     url="terraspace-testing/lessons/terraspace-testing-how-to-custom-helpers"
     img="https://uploads-learn.sandbox.boltops.com/j89bbm5za10xw2zrmc35qj7lz5g2" %}

Project-level testing belongs with the terraspace project itself. Their tests live within the spec folder at the root of the terraspace project structure. Project tests test things are project-specific like helpers. Generally, these are like normal unit tests.

## Test Code

We can use [terraspace new test]({% link _reference/terraspace-new-test.md %}) to create a `spec/demo_spec.rb` test.

    terraspace new test demo --type project

Here's an example of the generated starter spec.

spec/demo_spec.rb:

```ruby
describe "demo" do
  it "the truth" do
    expect(true).to be true
  end
end
```

### Run Tests

To run:

    cd infra # you should be in the terraspace project folder
    bundle
    terraspace test
