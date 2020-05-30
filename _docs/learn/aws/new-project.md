---
title: New Project
---

We'll use [terraspace new project]({% link _reference/terraspace-new-project.md %}) to generate a new terraspace project.

    $ terraspace new project infra --provider aws --examples

For this tutorial, we're using the `--examples` option to generate a starter example.

    $ terraspace new project infra --provider aws --examples
    => Creating new project called infra.
          create  infra
          create  infra/.gitignore
           exist  infra
          create  infra/config/templates/backend.tf
          create  infra/config/templates/provider.tf
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

In this case, the `--provider aws` is optional, since the default provider is aws. We're using it in this tutorial just for clarity.

## Config Files

Let's look at `infra/config/templates/backend.tf`

```terraform
terraform {
  backend "s3" {
    bucket         = "<%= backend_expand("s3", "terraform-state-:ACCOUNT-:REGION-:ENV") %>"
    key            = "<%= backend_expand("s3", ":REGION/:ENV/:BUILD_DIR/terraform.tfstate") %>" # variable notation expanded by terraspace IE: us-west-2/dev/modules/vm/terraform.tfstate
    region         = "<%= backend_expand("s3", ":REGION") %>"
    encrypt        = true
    dynamodb_table = "terraform_locks"
  }
}
```

If you're already familiar with terraform, then you'll probably notice that there's ERB templating.  Terraspace allows you use templating in your tf files. When we deploy the terraspace project, it compiles the config file down to a standard terraform file. The templating is particularly useful in `backend.tf` as it gives dynamic control over bucket, key, and region.

When we later deploy, the `backend.tf` gets compiled down to a standard terraform tf file. Terraspace will then automatically create the s3 bucket and dynamodb table for you.

Next, let's take a look at the `infra/config/templates/provider.tf` file.

```terraform
# provider "aws" {
#   region = "us-east-1"
# }
```

You can see it's actually commented out. This is because we have already configured `AWS_PROFILE` and `AWS_REGION`. We can generally leave the generated config files as-is.

Next, we'll review generated app folder files.
