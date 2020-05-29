---
title: Backend Config
---

You can configure the backend for terraform to use with `config/backend.rb` or `config/backend.tf`. Below are examples.

You may also be interested in:

* [Statefile Approaches and Thoughts]({% link _docs/state/approaches.md %})
* [Configuring Backends for Existing Systems]({% link _docs/state/existing.md %})

## Materialization

When you run `terraspace` commands, it will use the files in the config folder and materialized them with the deployed module.  For example, let's say you have an `app/stacks/wordpress` stack:

    .
    │── app
    │   │── modules
    │   │   └── instance
    │   └── stacks
    │       └── wordpress
    └── config
        └── backend.tf

Running:

    terraspace up wordpress

Builds a `.terrspace-cache/dev/stacks/wordpress/backend.tf` using the `config/backend.tf`.  If you want to just build the files without deploying, you can also use `terraspace build`. Below are examples of backends.

## S3 Backend

```terraform
terraform {
  backend "s3" {
    bucket         = "<%= backend_expand("s3", "terraform-state-:ACCOUNT-:REGION-:ENV") %>"
    key            = "<%= backend_expand("s3", ":REGION/:ENV/:BUILD_DIR/terraform.tfstate") %>" # variable notation expanded by terraspace IE: us-west-2/development/modules/vm/terraform.tfstate
    region         = "<%= backend_expand("s3", ":REGION" %>"
    encrypt        = true
    dynamodb_table = "terraform_locks"
  }
}
```

Notice, the variable notation. Terraspace expands it out, substituting actually values. The starter `backend.rb` accounts for `REGION`, `ENV`, etc. Here's an expanded example:

    :REGION/:ENV/:BUILD_DIR/terraform.tfstate

Results in:

    us-west-2/development/stacks/wordpress/terraform.tfstate

You can fully control the state file path by adjusting this. The string substitution also makes it clear what the state path looks like.

## GCS Backend

```terraform
terraform {
  backend "gcs" {
    bucket = "<%= backend_expand("gcs", "terraform-state-:PROJECT-:REGION-:ENV") %>"
    prefix = "<%= backend_expand("gcs", ":REGION/:ENV/:BUILD_DIR") %>" # variable notation expanded by terraspace IE: us-central1/development/modules/vm
  }
}
```

So

    :REGION/:ENV/:BUILD_DIR

Results in:

    us-central1/development/stacks/wordpress

## Variables Available

Common variables available:

Variable | Example | Description
--- | --- | ---
BUILD_DIR | stacks/wordpress | The build directory name.
ENV | development | Terraspace env. Can be set like so `TS_ENV=development`
MOD_NAME | wordpress | The module name or stack name, which is also a module.
TYPE_DIR | stacks | The type name. IE: stacks or modules

s3 specific variables:

Variable | Example | Description
--- | --- | ---
ACCOUNT | 112233445566 | AWS Account Id
REGION | us-west-2 | AWS Region


gcs specific variables:

Variable | Example | Description
--- | --- | ---
PROJECT | project-12345 | Google project id
REGION | us-central1 | Google region

## Ruby Examples

You can also optionally write your backend config in Ruby. Here are some examples:

### S3 Backend

config/backend.rb

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

config/backend.rb

```ruby
backend("gcs",
  bucket: "terraform-state-:PROJECT-:REGION-:ENV",
  prefix: ":REGION/:ENV/:BUILD_DIR" # variable notation gets expanded out by terraspace
)
```
