---
title: Change Infrastructure
search_title: Change Infrastructure AWS
---

{% include videos/learn/terraspace-getting-started-with-aws.md %}

Now that we have `random_pet` created, let's modify it. Here's the `demo/main.tf` again.

app/stacks/demo/main.tf

```terraform
module "pet" {
  source     = "../../modules/example"
  length     = var.length
}
```

As you can see there's a `var.length` variable. One way to update the infrastructure is to change the variable in the `variables.tf` file directly.

app/stacks/demo/variables.tf

```terraform
variable "length" {
  type        = number
  description = "number of words"
  default     = 2
}
```

However, you can also use `tfvars` files. Terraspace will automatically use `app/stacks/demo/tfvars` files according the `TS_ENV` value. The default value is `TS_ENV=dev`. We'll use tfvars files so we can use the same code for different environments.

## Generate Starter Tfvars Files

Addtionally, Terraspace can generate starter tfvar files for us with the `terraspace seed` command.

    $ terraspace seed demo
    Reading: .terraspace-cache/us-west-2/dev/stacks/demo/variables.tf
          create  app/stacks/demo/tfvars/dev.tfvars
    $

The produced file looks something like this:

app/stacks/demo/tfvars/dev.tfvars

```terraform
# Optional variables:
# length = "2"
```

Terraspace parses the `demo/variables.tf` file to generate the `tfvars/dev.tfvars` file.  It detected that all the variables are optional.  We'll uncomment length and change it to `length = 3`.

app/stacks/demo/tfvars/dev.tfvars

```terraform
# length = "3" # <= was changed
```

Next, we'll update the infrastructure.