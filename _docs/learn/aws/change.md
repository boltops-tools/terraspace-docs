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
  source     = "../../modules/example"
  bucket     = "bucket-${random_pet.this.id}"
  acl        = var.acl
}
```

As, you can see there's a `var.acl` variable. One way to update the infrastructure is to change the variable in the `variables.tf` file directly.

app/stacks/demo/variables.tf

```terraform
variable "bucket" {
  description = "The name of the bucket. If omitted, Terraform will assign a random, unique name." # IE: terraform-2020052606510241590000000
  type        = string
  default     = null
}

variable "acl" {
  description = "The canned ACL to apply. Defaults to 'private'."
  type        = string
  default     = "private"
}
```

However, you can also use `tfvars` files. Terraspace will automatically use `app/stacks/demo/tfvars` files according the `TS_ENV` value. The default value is `TS_ENV=dev`. We'll use tfvars files so we can use the same code for different environments.

## Generate Starter Tfvars Files

Addtionally, Terraspace can generate starter tfvar files for us with the `terraspace seed` command.

    $ terraspace seed demo
    Reading: .terraspace-cache/dev/stacks/demo/variables.tf
          create  app/stacks/demo/tfvars/dev.tfvars
    $

The produced file looks something like this:

app/stacks/demo/tfvars/dev.tfvars

```terraform
# Optional variables:
# bucket = null
# acl  = "private" # <= change this line
```

Terraspace parses the `demo/variables.tf` file to generate the `tfvars/dev.tfvars` file.  It detected that all the variables are optional.  We'll uncomment acl and change it to `acl = "public-read"`.

app/stacks/demo/tfvars/dev.tfvars

```terraform
# Optional variables:
# bucket = null
acl = "public-read" # <= was changed
```

Next, we'll update the infrastructure.