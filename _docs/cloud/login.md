---
title: Terraform Cloud Login
---

When using Terraform Cloud, Terraspace performs additional convenience logic to make it easier to use Terraform Cloud Workspaces. In order for Terraspace to call the Terraform API, it needs to be authenticated.

## How to Authenicate

Here are 2 ways to authenicate to the Terraform API.

1. Terraform Login
2. TERRAFORM_TOKEN

## Terraform Login

A simple way to authenticate to Terraform Cloud is to run:

    terraform login

This stores a your Terraform token to `~/.terraform.d/credentials.tfrc.json`.  Terraspace will use this token.

By default, the `terraform login` command logs into TFC.

### TFE

For TFE, specify your TFE setup's hostname. Example:

    terraform login my.hostname.com

Also configure `cloud.hostname`.

config/app.rb:

```ruby
Terraspace.configure do |config|
  # ...
  config.hostname = "my.hostname.com"
end
```

## Environment Variable

Another way to set authenticate is to set the [terraform token](https://www.terraform.io/docs/cloud/users-teams-organizations/users.html#api-tokens) as an environment variable: TERRAFORM_TOKEN.

    export TERRAFORM_TOKEN=your-token

The env variable takes the highest precedence.
