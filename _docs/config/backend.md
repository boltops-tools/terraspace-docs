---
title: Backend Config
---

You can configure the backend for terraform to use with `config/terraform/backend.rb` or `config/terraform/backend.tf`. Below are examples.

You may also be interested in:

* [Statefile Approaches and Thoughts]({% link _docs/state/approaches.md %})
* [Configuring Backends for Existing Systems]({% link _docs/state/existing.md %})

## Building

When you run `terraspace` commands, it will use the files in the `config/terraform` folder and builds them with the deployed module.  For example, let's say you have an `app/stacks/demo` stack:

    ├── app
    │   ├── modules
    │   │   └── instance
    │   └── stacks
    │       └── demo
    └── config
        └── terraform
            └── backend.tf

Running:

    terraspace up demo

Builds a `.terrspace-cache/dev/stacks/demo/backend.tf` using the `config/terraform/backend.tf`.  If you want to just build the files without deploying, you can also use `terraspace build`. Below are examples of backends.

## S3 Backend

```terraform
terraform {
  backend "s3" {
    bucket         = "<%= expansion('terraform-state-:ACCOUNT-:REGION-:ENV') %>"
    key            = "<%= expansion(':REGION/:ENV/:BUILD_DIR/terraform.tfstate') %>" # variable notation expanded by terraspace IE: us-west-2/dev/modules/vm/terraform.tfstate
    region         = "<%= expansion(':REGION') %>"
    encrypt        = true
    dynamodb_table = "terraform_locks"
  }
}
```

Notice the variable notation. Terraspace expands it out, substituting the values. The starter `backend.tf` accounts for `REGION`, `ENV`, etc. Here's an expanded example:

    :REGION/:ENV/:BUILD_DIR/terraform.tfstate

Results in:

    us-west-2/dev/stacks/demo/terraform.tfstate

You can fully control the state file path by adjusting this. The string substitution also makes it clear what the state path looks like.

## Azure Backend

```terraform
# SUBSCRIPTION_HASH is a short 4-char consistent hash of the longer subscription id.
# This is useful because azure storage accounts not allowed special characters and can only be 24 chars long.
terraform {
  backend "azurerm" {
    resource_group_name  = "<%= expansion('terraform-resources-:LOCATION') %>"
    storage_account_name = "<%= expansion('ts:SUBSCRIPTION_HASH:LOCATION:ENV') %>"
    container_name       = "terraform-state"
    key                  = "<%= expansion(':LOCATION/:ENV/:BUILD_DIR/terraform.tfstate') %>"
  }
}
```

So

    ts:SUBSCRIPTION_HASH:LOCATION:ENV

Results in:

    tswxyzeastusdev

## GCS Backend

```terraform
terraform {
  backend "gcs" {
    bucket = "<%= expansion('terraform-state-:PROJECT-:REGION-:ENV') %>"
    prefix = "<%= expansion(':REGION/:ENV/:BUILD_DIR') %>" # variable notation expanded by terraspace IE: us-central1/dev/modules/vm
  }
}
```

So

    :REGION/:ENV/:BUILD_DIR

Results in:

    us-central1/dev/stacks/demo

## Variables Available

Common variables available:

Variable | Example | Description
--- | --- | ---
BUILD_DIR | stacks/demo | The build directory name.
ENV | dev | Terraspace env. Can be set like so `TS_ENV=dev`
MOD_NAME | demo | The module name or stack name, which is also a module.
TYPE | stack | The type name. IE: stack or module
TYPE_DIR | stacks | The type dir. IE: stacks or modules
TYPE_INSTANCE | stack-bob | The type with the [instance option]({% link _docs/tfvars/instance-option.md %}). IE: terraspace up demo --instance bob. The separator is a `-`
INSTANCE | The [instance option]({% link _docs/tfvars/instance-option.md %}). IE: terraspace up demo --instance bob

AWS specific variables:

Variable | Example | Description
--- | --- | ---
ACCOUNT | 112233445566 | AWS Account Id
REGION | us-west-2 | AWS Region

Azure specific variables:

Variable | Example | Description
--- | --- | ---
LOCATION         | eastus | Azure Location
SUSCRIPTION      | EXAMPLE88-c44e-4677-bf0eEXAMPLE | Azure subscription id
SUSCRIPTION_HASH | wxyz | Short consistent hash based on subscription id

Google specific variables:

Variable | Example | Description
--- | --- | ---
PROJECT | project-12345 | Google project id
REGION | us-central1 | Google region

## Strip Trailing Behavior

Terraspace expansion will remove the trailing dashes and slashes in case the instance option is at the end and is not set.  For example, let's say `INSTANCE` is not set.

    :REGION/:ENV/:MOD_NAME/:INSTANCE

Will result in:

    us-west-2/dev/demo # notice there's no trailing slash

## DSL Examples

You can also optionally write your backend config in Ruby. Here are some examples:

### S3 Backend

config/terraform/backend.rb

```ruby
backend("s3",
  bucket:         "terraform-state-:ACCOUNT-:REGION-:ENV",
  key:            ":REGION/:ENV/:BUILD_DIR/terraform.tfstate", # variable notation gets expanded out by terraspace
  region:         ":REGION",
  encrypt:        true,
  dynamodb_table: "terraform_locks"
)
```

### GCS Backend

Here's an example for a gcs backend with Ruby.

config/terraform/backend.rb

```ruby
backend("gcs",
  bucket: "terraform-state-:PROJECT-:REGION-:ENV",
  prefix: ":REGION/:ENV/:BUILD_DIR" # variable notation gets expanded out by terraspace
)
```

### Why Is Env in Bucket Name?

By default, the bucket name has the ENV at the end. This is done so we can easily see which environment the bucket stores Terraform statefiles for. This quickly helps with debugging. If you prefer not to have the ENV at the end of the bucket name, remove it after generating the project with `terraspace new project`.