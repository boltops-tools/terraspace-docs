---
title: Review Project
---

Let's explore the generated app folder.

## App Modules

Let's check out the `app/modules/example` folder.

main.tf

```terraform
resource "google_storage_bucket" "this" {
  name               = var.name
  bucket_policy_only = var.bucket_policy_only
}
```

variables.tf

```terraform
variable "name" {
  description = "bucket name (required)"
  type        = string
}

variable "bucket_policy_only" {
  description = "bucket_policy_only"
  type        = bool
  default     = false
}
```

You can see that the starter example module creates an gcs bucket.

## Stack Modules

Next let's look at the generated `app/stacks/demo` that was created:

app/stacks/demo/main.tf

```terraform
resource "random_pet" "bucket" {
  length = 2
}

module "bucket" {
  source = "../../modules/example"

  name               = "bucket-${random_pet.bucket.id}"
  bucket_policy_only = var.bucket_policy_only
}
```

You can see that it's just another terraform module, that will use the `app/modules/example` module. It uses the `random_pet` resource to provide a random but friendly name for the gcs bucket.

{% include learn/modules-vs-stacks.md %}