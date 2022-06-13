---
title: Configuring Terraspace with Existing Statefiles and Systems
---

If you have existing terraform state files and want to use them with terraspace, you can do that. Here are a couple of approaches to keep your existing statefile:

1. Copy your existing statefile
2. Logic in `config/terraform/backend.rb`
3. Provide backend in the stack module itself

## Copy your existing statefile

The recommended way to use existing state is to copy it over to the backend bucket path that's configured with your Terraspace project.  For example, let's say you already have existing Terraform code and a state file locally:

    ~/bucket
    ├── main.tf
    ├── outputs.tf
    ├── terraform.tfstate
    └── variables.tf

For the sake of this example, let's say the main.tf creates a bucket. You can do the following to "import" your terraform code and state to a Terraspace project.

First, create a stack bucket folder. This is where you'll copy your existing terraform code to:

    cd ~/infra # terraspace project
    mkdir app/stacks/bucket

Now go back to your ~/bucket folder with your existing terraform code:

    cd ~/bucket # existing terraform code
    cp main.tf outputs.tf varibles.tf ~/infra/app/stacks/bucket/

The terraform code is now imported over. 👍  Next, we'll import the terraform state file.

### AWS

If using AWS, then you will copy the statefile to the S3 bucket. Here's an example:

    cd ~/bucket # existing terraform code
    aws s3 cp terraform.tfstate s3://terraform-state-111111111111-us-west-2-dev/us-west-2/dev/stacks/bucket/terraform.tfstate

The general form is:

    aws s3 cp terraform.tfstate s3://terraform-state-ACCOUNT-REGION-ENV/REGION/ENV/stacks/bucket/terraform.tfstate

Note, with AWS if you're overwriting an existing statefile you may have to also delete the item in the DynamoDB terraform_locks table. IE: terraform-state-111111111111-us-west-2-dev/us-west-2/dev/stacks/bucket/terraform.tfstate-md5

At this point, you'll have the state in sync with the code. You can verify with with `terraspace summary`

    terraspace summary

The output should be something like this:

    $ terraspace summary
    stacks/bucket/terraform.tfstate
        aws_s3_bucket this: terraform-20200802231545960700000001
    $

### Google

If using Google, then you will copy the statefile to the GCS bucket. Here's an example:

    cd ~/bucket # existing terraform code
    gsutil cp terraform.tfstate gs://terraform-state-project-123-us-central1-dev/us-central1/dev/stacks/bucket/default.tfstate

The general form is:

    gsutil cp terraform.tfstate gs://terraform-state-GOOGLE_PROJECT-REGION-ENV/REGION/ENV/stacks/bucket/default.tfstate

At this point, you'll have the state in sync with the code. You can verify with with `terraspace summary`

    terraspace summary

The output should be something like this:

    $ terraspace summary
    stacks/bucket/default.tfstate
        google_storage_bucket this: bucket-unified-grubworm
        random_pet this: unified-grubworm

## Logic in the config/terraform/backend.rb

Since terraspace builds the `config/terraform/backend.rb` to the root module's folder being deployed, you can add logic in there to control the state file path. Example:

config/terraform/backend.rb

```ruby
# Examples of mod_name: network, db, instance, vpc, where this directory structure exists
#
#    app/modules/instance
#    app/modules/vpc
#    app/stacks/network
#    app/stacks/db
#
state_key = case mod_name
            when "network"
              "path1/to/existing/terraform.tfstate"
            when "db"
              "path2/to/existing/terraform.tfstate"
            else
              ":TYPE_DIR/:APP/:ROLE/:MOD_NAME/:ENV/:EXTRA/:REGION/terraform.tfstate" # fallback to default terraspace variable notation
            end

backend("s3",
  bucket:         "my-bucket",
  key:            state_key,
  region:         ":REGION",
  encrypt:        true,
  dynamodb_table: "terraform_locks"
)
```


## Provide backend in the stack module itself

If an existing `backend.rb` or `backend.tf` is in the module's folder, terraspace will not overwrite it.

So you can add a file like `app/stacks/db/backend.tf` with a specific state key path, and it'll get used. Example:

```terraform
terraform {
  backend "s3" {
    bucket         = "my-bucket"
    key            = "path/to/existing/terraform.tfstate"
    region         = "us-west-2"
    encrypt        = true
    dynamodb_table = "terraform_locks"
  }
}
```
