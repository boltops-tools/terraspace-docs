# Terraform Statefile: Existing Systems

If you have existing terraform state files and want to use them with terraspace, you can do that. Here are a couple of approaches to keep your existing statefile:

1. Logic in the config/backend.rb
2. Provide backend in the stack module itself

## Logic in the config/backend.rb

Since terraspace materializes the `config/backend.rb` to the root module's folder being deployed, you can add logic in there to control the state file path. Example:

config/backend.rb

```ruby
# Examples of mod_name: core, wordpress, instance, vpc, where this directory structure exists
#
#    app/modules/instance
#    app/modules/vpc
#    app/stacks/core
#    app/stacks/wordpress
#
state_key = case mod_name
            when core
              "path1/to/existing/state/terraform.tfstate"
            when wordpress
              "path2/to/existing/state/terraform.tfstate"
            else
              ":region/:env/:build_dir/terraform.tfstate" # fallback to default terraspace variable notation
            end

backend("s3",
  bucket:         "my-bucket",
  key:            state_key
  region:         ":region",
  encrypt:        true,
  dynamodb_table: "terraform_locks"
)
```


## Provide backend in the stack module itself

If an existing `backend.rb` or `backend.tf` is in the module's folder, terraspace will not overwrite it.

So you can add a file like `app/stacks/wordpress/backend.tf` and add backend with a specific state key path in there, it'll be used. Example:

```terraform
terraform {
  backend "s3" {
    bucket         = "my-bucket"
    key            = "path/to/existing/state/terraform.tfstate"
    region         = "us-west-2"
    encrypt        = true
    dynamodb_table = "terraform_locks"
  }
}
```
