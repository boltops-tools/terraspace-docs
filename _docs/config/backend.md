---
title: Backend Config
---

You can configure the backend for terraform to use with `config/terraform/backend.tf`. Below are examples.

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
    key            = "<%= expansion(':REGION/:ENV/:BUILD_DIR/terraform.tfstate') %>"
    region         = "<%= expansion(':REGION') %>"
    encrypt        = true
    dynamodb_table = "terraform_locks"
  }
}
```

Notice the variable notation. Terraspace expands it out, substituting the values. The starter `backend.tf` accounts for `REGION`, `ENV`, etc. Here's an expanded example:

```terraform
terraform {
  backend "s3" {
    bucket         = "terraform-state-111111111111-us-west-2-dev"
    key            = "us-west-2/dev/stacks/demo/terraform.tfstate"
    region         = "us-west-2"
    encrypt        = true
    dynamodb_table = "terraform_locks"
  }
}
```

You can fully control the state file path by adjusting this. The string substitution also makes it clear what the state path looks like.

## Azure Backend

```terraform
terraform {
  backend "azurerm" {
    resource_group_name  = "<%= expansion('terraform-resources-:LOCATION') %>"
    storage_account_name = "<%= expansion('ts:SUBSCRIPTION_HASH:LOCATION:ENV') %>"
    container_name       = "terraform-state"
    key                  = "<%= expansion(':LOCATION/:ENV/:BUILD_DIR/terraform.tfstate') %>"
  }
}
```

Notice the variable notation. Terraspace expands it out, substituting the values. The starter `backend.tf` accounts for `LOCATION`, `ENV`, etc. Here's an expanded example:

```ruby
terraform {
  backend "azurerm" {
    resource_group_name  = "terraform-resources-eastus"
    storage_account_name = "tswxyzeastusdev"
    container_name       = "terraform-state"
    key                  = "eastus/dev/stacks/demo/terraform.tfstate"
  }
}
```

Note, the `SUBSCRIPTION_HASH` is a short 4-char consistent hash of the longer subscription id. This is useful because azure storage account names are not allowed special characters and are limited to 24 chars.

## GCS Backend

```terraform
terraform {
  backend "gcs" {
    bucket = "<%= expansion('terraform-state-:PROJECT-:REGION-:ENV') %>"
    prefix = "<%= expansion(':REGION/:ENV/:BUILD_DIR') %>"
  }
}
```

Notice the variable notation. Terraspace expands it out, substituting the values. The starter `backend.tf` accounts for `PROJECT`, `ENV`, etc. Here's an expanded example:

```terraform
terraform {
  backend "gcs" {
    bucket = "terraform-state-google-project-id-us-central1-dev"
    prefix = "us-central1/dev/stacks/demo"
  }
}
```

## Remote Backend: TFC and TFE

```terraform
terraform {
  backend "remote" {
    organization = "ORG"
    workspaces {
      name = "<%= expansion(':MOD_NAME-:ENV-:REGION-:INSTANCE') %>"
    }
  }
}
```

Here's an expanded example:

```terraform
terraform {
  backend "remote" {
    organization = "boltops"
    workspaces {
      name = "demo-dev-us-west-2"
    }
  }
}
```

## Variables Available

For variables available see [Backend Config Variables]({% link _docs/config/backend/variables.md %})

## Strip Trailing Behavior

Terraspace expansion will remove the trailing dashes and slashes in case the instance option is at the end and is not set.  For example, let's say `INSTANCE` is not set.

    :REGION/:ENV/:MOD_NAME/:INSTANCE

Will result in:

    us-west-2/dev/demo # notice there's no trailing slash

## Why Is Env in Bucket Name?

By default, the bucket name has the ENV at the end. This is done so we can easily see which environment the bucket stores Terraform statefiles for. This quickly helps with debugging. If you prefer not to have the ENV at the end of the bucket name, remove it after generating the project with `terraspace new project`.