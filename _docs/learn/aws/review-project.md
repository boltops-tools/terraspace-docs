---
title: Review Project
---

Let's explore the generated app folder.

## App Modules

Let's check out the `app/modules/example` folder.

main.tf

```terraform
resource "aws_s3_bucket" "this" {
  bucket = var.bucket # If omitted, Terraform will assign a random, unique name.
  acl    = var.acl
}

```

variables.tf

```terraform
variable "bucket" {
  description = "(Optional, Forces new resource) The name of the bucket. If omitted, Terraform will assign a random, unique name." # IE: terraform-2020052606510241590000000
  type        = string
  default     = null
}

variable "acl" {
  description = "(Optional) The canned ACL to apply. Defaults to 'private'."
  type        = string
  default     = "private"
}
```

You can see that the starter example module creates an s3 bucket.

## Stack Modules

Next let's look at the generated `app/stacks/demo` that was created:

app/stacks/demo/main.tf

```terraform
resource "random_pet" "bucket" {
  length = 2
}

module "bucket" {
  source     = "../../modules/example"
  bucket     = "bucket-${random_pet.bucket.id}"
  acl        = var.acl
}
```

You can see that it's just another terraform module, that will use the `app/modules/example` module. It uses the `random_pet` resource to provide a random but friendly name for the s3 bucket.

## App Modules vs Stacks

In Terraspace, both `app/modules` and `app/stacks` folders contain Terraform modules. The difference is how they are meant to be used. Terraspace provides this structure as a guideline:

* Stacks are meant to be used to group together modules. Generally, this is where business-specific logic goes.
* Modules modules are smaller pieces of reusable code. Generally, it contains reusable and non-business-specific logic.

Next, we'll deploy the infrastructure.
