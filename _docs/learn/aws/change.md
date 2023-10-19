---
title: Change Infrastructure
search_title: Change Infrastructure AWS
---

{% include videos/learn/getting-started/aws.md %}

Now that we have bucket created, let's modify it. Here's the `demo/main.tf` again.

app/stacks/demo/main.tf

```terraform
resource "random_pet" "this" {
  length = 2
}

module "bucket" {
  source     = "../../modules/example"
  bucket     = "bucket-${random_pet.this.id}"
  tags       = var.tags
}
```

As you can see there's a `var.tags` variable. One way to update the infrastructure is to change the variable in the `variables.tf` file directly.

app/stacks/demo/variables.tf

```terraform
variable "tags" {
  description = "(Optional) A mapping of tags to assign to the bucket."
  type        = map(string)
  default     = {}
}
```

However, you can also use `tfvars` files. Terraspace will automatically use `config/stacks/demo/tfvars` files according the `TS_ENV` value. The default value is `TS_ENV=dev`. We'll use tfvars files so we can use the same code for different environments.

## Generate Starter Tfvars Files

Addtionally, Terraspace can generate starter tfvar files for us with the `terraspace seed` command.

    $ terraspace seed demo
    Reading: .terraspace-cache/us-west-2/dev/stacks/demo/variables.tf
          create  config/stacks/demo/tfvars/dev.tfvars
    $

The produced file looks something like this:

config/stacks/demo/tfvars/dev.tfvars

```terraform
# Optional variables:
# tags = {...} # map(string)
```

Terraspace parses the `demo/variables.tf` file to generate the `tfvars/dev.tfvars` file.  It detected that all the variables are optional.  We'll uncomment acl and change it to `acl = "public-read"`.

config/stacks/demo/tfvars/dev.tfvars

```terraform
# Optional variables:
tags = {
  Name: "my-bucket", # <= CHANGED
}
```

Next, we'll update the infrastructure.