---
title: Change Infrastructure
---

Now that we have bucket created, let's modify it. Here's the `demo/main.tf` again.

app/stacks/demo/main.tf

```terraform
resource "random_pet" "this" {
  length = 2
}

module "bucket" {
  source = "../../modules/example"

  name                        = "bucket-${random_pet.this.id}"
  uniform_bucket_level_access = var.uniform_bucket_level_access
}
```

As, you can see there's a `var.uniform_bucket_level_access` variable. One way to update the infrastructure is to change the variable in the `variables.tf` file directly.

app/stacks/demo/variables.tf

```terraform
variable "uniform_bucket_level_access" {
  description = "uniform_bucket_level_access"
  type        = bool
  default     = false
}
```

However, you can also use `tfvars` files. Terraspace will automatically use `app/stacks/demo/tfvars` files according the `TS_ENV` value. The default value is `TS_ENV=dev`. We'll use tfvars files so we can use the same code for different environments.

## Generate Starter Tfvars Files

Addtionally, Terraspace can generate starter tfvar files for us with the `terraspace seed` command.

    $ terraspace seed demo
    Reading: .terraspace-cache/us-central1/dev/stacks/demo/variables.tf
          create  app/stacks/demo/tfvars/dev.tfvars
    $

The produced file looks something like this:

app/stacks/demo/tfvars/dev.tfvars

```terraform
# Optional variables:
# uniform_bucket_level_access = false
```

Terraspace parses the `demo/variables.tf` file to generate the `tfvars/dev.tfvars` file.  It detected that all the variables are optional.  We'll uncomment uniform_bucket_level_access and change it to `uniform_bucket_level_access = true`.

app/stacks/demo/tfvars/dev.tfvars

```terraform
# Optional variables:
uniform_bucket_level_access = true
```

Next, we'll update the infrastructure.