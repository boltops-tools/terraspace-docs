---
title: Review Project
search_title: Review Project AWS
category: learn-aws
order: 4
---

{% include videos/learn/getting-started/aws.md %}

Let's explore the generated app folder.

## App Modules

Let's check out the `app/modules/example` folder.

main.tf

```terraform
resource "aws_s3_bucket" "this" {
  bucket = var.bucket # If omitted, Terraform will assign a random, unique name.
  tags   = var.tags
}
```

variables.tf

```terraform
variable "bucket" {
  description = "The name of the bucket. If omitted, Terraform will assign a random, unique name." # IE: terraform-2020052606510241590000000
  type        = string
  default     = null
}

variable "tags" {
  description = "(Optional) A mapping of tags to assign to the bucket."
  type        = map(string)
  default     = {}
}
```

You can see that the starter example module creates an s3 bucket.

## Stack Modules

Next let's look at the generated `app/stacks/demo` that was created:

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

You can see that it's just another terraform module, that will use the `app/modules/example` module. It uses the `random_pet` resource to provide a random but friendly name for the s3 bucket.

{% include intro/modules-vs-stacks.md %}

Next, we'll deploy the infrastructure.
