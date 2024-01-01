---
title: Remote Backend
nav_text: Backend
category: testing
order: 6
---

By default, the generated test harness does not configure a remote backend. You can easily configure the test harness to use a remote backend, though. This can make debugging the test harness easier because:

* This makes it easier to `cd` directly into the temporarily generated test harness folder and run `terraspace` directly for debugging.
* Since state is stored remotely, when the test harness files are purge between tests runs, the state is maintained.
* You can comment out the `after` hook in the rspec test and won't risk losing the state file when you run specs multiple times.

## How To

To configure a remote backend for a test harness create a fixture like so:

app/modules/example/test/spec/fixtures/config/terraform/backend.tf

```terraform
terraform {
  backend "s3" {
    bucket         = "<%= expansion('terraform-state-:ACCOUNT-:REGION-:ENV') %>"
    key            = "<%= expansion(':PROJECT/:TYPE_DIR/:APP/:ROLE/:MOD_NAME/:ENV/:EXTRA/:REGION/terraform.tfstate') %>"
    region         = "<%= expansion(':REGION') %>"
    encrypt        = true
    dynamodb_table = "terraform_locks"
  }
}
```

In the `build_test_harness` method, use it:

```ruby
terraspace.build_test_harness(
  name: "example-harness",
  modules: {example: mod_path},
  # See: https://terraspace.cloud/docs/testing/test-harness/
  config: "spec/fixtures/config", # <= The fixutre/config containers the terraform/backend.tf
  tfvars: {demo: "spec/fixtures/tfvars/test.tfvars"},
)
```

