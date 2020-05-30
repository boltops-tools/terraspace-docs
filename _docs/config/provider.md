---
title: Provider Config
---

You can configure the backend for terraform to use with `config/templates/provider.rb` or `config/templates/provider.tf`. The files in the config folder get materialized to each module you deploy.

## Materialization

When you run `terraspace` commands, it will use the files in the config folder and materialized withdeployed module.  For example, let's say you have an `app/modules/instance` module:

    ├── app
    │   └── modules
    │       └── instance
    └── config
        └── templates
            └── provider.tf

Running:

    terraspace up instance

Builds a `.terrspace-cache/dev/modules/instance/provider.tf` using the `config/templates/provider.tf`.  If you want to just build the files without deploying, you can also use `terraspace build`. Below are examples of providers.

## Examples:

### AWS Provider

```terraform
provider "aws" {
  version = "~> 2.0"
  region  = "<%= ENV["AWS_REGION"] %>"
}
```

Notice, how you are able to use ERB templating in the HCL file.

### Google Provider

```terraform
provider "google" {
  project = "<%= ENV['GOOGLE_PROJECT'] %>"
  region  = "<%= ENV['GOOGLE_REGION'] %>"  # IE: us-central1
  zone    = "<%= ENV['GOOGLE_ZONE'] %>"    # IE: us-central1-c
}
```

## Ruby Examples

You can also write the provider with Ruby. Here are some examples:

### AWS Provider

```ruby
provider("aws",
  region: ENV["AWS_REGION"]
)
```

### Google Provider

```ruby
provider("google",
  project: ENV['GOOGLE_PROJECT'],
  region:  ENV['GOOGLE_REGION'], # IE: us-central1
  zone:    ENV['GOOGLE_REGION'], # IE: us-central1-c"
)
```

## Implicit Providers

Most Terraform examples out there explicitly define the provider.  If you have your environment configured properly, you don't really need to explicitly declare your provider. So you don't even need the `config/templates/provider.tf` file.

### AWS Implicit Provider

For AWS, if you have an `AWS_PROFILE` and `AWS_REGION` set. That is enough for terraform to infer that the provider is AWS.

More info on setting up your `~/.aws/config` to can be found on the [AWS CLI Setup Docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

### Google Implicit Provider

For GCP, if you have an `GOOGLE_APPLICATION_CREDENTIALS` and `GOOGLE_PROJECT` set. That is enough for terraform to infer that the provider is google.

Here's an example of configuring the env variables in your profile.

    export GOOGLE_APPLICATION_CREDENTIALS=~/.gcp/credentials.json
    export GOOGLE_PROJECT=$(cat ~/.gcp/credentials.json  | jq -r '.project_id')

Note, you'll have to download your own `~/.gcp/credentials.json` file.
