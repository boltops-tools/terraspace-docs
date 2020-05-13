# Backend Config

You can configure the backend for terraform to use with `config/backend.rb` or `config/backend.tf`. Here's are some examples:

## S3 Backend

config/backend.rb

```ruby
backend("s3",
  bucket:         "my-bucket",
  key:            ":region/:env/:build_dir/terraform.tfstate", # variable notation gets expanded out by terraspace
  region:         ENV["AWS_REGION"],
  encrypt:        true,
  dynamodb_table: "terraform_locks"
)
```

Notice, the variable notation. Terraspace expands them out, substituting actually values. The starter `backend.rb` accounts for `region`, `env`, etc. Here's an expanded example:

    :region/:env/:build_dir/terraform.tfstate

Results in:

    us-west-2/development/stacks/wordpress/terraform.tfstate

You can fully control the state file path by adjusting this. The string substitution also makes it clear what the state path looks like. The expansion only happens for the key, region, and prefix properties. 

Here's an example in HCL also:

```terraform
terraform {
  backend "s3" {
    bucket         = "my-bucket"
    key            = "<%= backend_expand("s3", ":region/:env/:build_dir/terraform.tfstate") %>" # variable notation expanded by terraspace IE: us-west-2/development/modules/vm/terraform.tfstate
    region         = "<%= ENV["AWS_REGION"] %>"
    encrypt        = true
    dynamodb_table = "terraform_locks"
  }
}
```

## GCS Backend

Here's an example for a gcs backend:

config/backend.rb

```ruby
backend("gcs",
  bucket: "my-bucket",
  prefix: ":region/:env/:build_dir" # variable notation gets expanded out by terraspace
)
```

So

    :region/:env/:build_dir

Results in:

    us-central1/development/stacks/wordpress

Here's an example in HCL also:

```terraform
terraform {
  backend "gcs" {
    bucket = "my-bucket"
    prefix = "<%= backend_expand("gcs", ":region/:env/:build_dir") %>" # variable notation expanded by terraspace IE: us-central1/development/modules/vm
  }
}
```

## Variables Available

Common variables available:

Variable | Example | Description
--- | --- | ---
build_dir | stacks/wordress | The build directory name.
env | development | Terraspace env. Can be set like so `TS_ENV=development`
mod_name | wordpress | The module name or stack name, which is also a module.
type_dir | stacks | The type name. IE: stacks or modules

s3 specific variables:

Variable | Example | Description
--- | --- | ---
account | 112233445566 | AWS Account Id
region | us-west-2 | AWS Region


gcs specific variables:

Variable | Example | Description
--- | --- | ---
project | project-12345 | Google project id
region | us-central1 | Google region
