---
title: New Project
search_title: New Project AWS
---

{% include videos/learn/getting-started/aws.md %}

We'll use [terraspace new project]({% link _reference/terraspace-new-project.md %}) to generate a new terraspace project.

    terraspace new project infra --plugin aws --examples

For this tutorial, we're using the `--examples` option to generate a starter example.

    $ terraspace new project infra --plugin aws --examples
    => Creating new project called infra.
          create  infra
          create  infra/.gitignore
           exist  infra
          create  infra/config/terraform/backend.tf
          create  infra/config/terraform/provider.tf
    => Creating new module called example.
          create  infra/app/modules/example
          create  infra/app/modules/example/main.tf
          create  infra/app/modules/example/outputs.tf
          create  infra/app/modules/example/variables.tf
    => Creating new stack called demo.
          create  infra/app/stacks/demo
          create  infra/app/stacks/demo/main.tf
          create  infra/app/stacks/demo/outputs.tf
          create  infra/app/stacks/demo/variables.tf
    $ cd infra # and start checking out the files

In this case, the `--plugin aws` is optional, since the default provider is aws. We're using it in this tutorial just for clarity.

For more information about the folders see [Project Structure]({% link _docs/intro/structure.md %}).

## Config Files

Let's look at `config/terraform/backend.tf`

```terraform
terraform {
  backend "s3" {
    bucket         = "<%= expansion('terraform-state-:ACCOUNT-:REGION-:ENV') %>"
    key            = "<%= expansion(':TYPE_DIR/:APP/:ROLE/:MOD_NAME/:ENV/:EXTRA/:REGION/terraform.tfstate') %>"
    region         = "<%= expansion(':REGION') %>"
    encrypt        = true
    dynamodb_table = "terraform_locks"
  }
}
```

If you're already familiar with terraform, then you'll probably notice that there's ERB templating.  Terraspace allows you use templating in your tf files. When we deploy the terraspace project, it compiles the config file down to a standard terraform file. The templating is particularly useful in `backend.tf` as it gives dynamic control over bucket, key, and region.

For variables available see: [Backend Config Variables]({% link _docs/config/backend/variables.md %})

When we later deploy, the `backend.tf` gets compiled down to a standard terraform tf file. Terraspace will then automatically create the s3 bucket and dynamodb table for you.

Next, let's take a look at the `config/terraform/provider.tf` file.

```terraform
# provider "aws" {
#   region = "us-east-1"
# }
```

You can see it's actually commented out. This is because we have already configured `AWS_PROFILE` and `AWS_REGION`. It should be fine to leave the generated config files as-is for this tutorial. For real-world use, you may want to pin down the terraform version.

{% include learn/cloud.md %}

Next, we'll review generated app folder files.
