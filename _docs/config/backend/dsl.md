---
title: Backend Config DSL
---
You can also optionally write your backend config in Ruby with `config/terraform/backend.rb`. With the DSL you do not have to use the `expansion` helper, Terraspace automatically runs it on each hash value. Below are some examples.

## S3 Backend

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
## Azure Backend

config/terraform/backend.rb

```ruby
backend("azurerm",
  resource_group_name:  ":ENV-:LOCATION"
  storage_account_name: "ts:SUBSCRIPTION_HASH:LOCATION:ENV"
  container_name:       "terraform-state"
  key:                  ":LOCATION/:ENV/:BUILD_DIR/terraform.tfstate"
)
```

## GCS Backend

Here's an example for a gcs backend with Ruby.

config/terraform/backend.rb

```ruby
backend("gcs",
  bucket: "terraform-state-:PROJECT-:REGION-:ENV",
  prefix: ":REGION/:ENV/:BUILD_DIR" # variable notation gets expanded out by terraspace
)
```
