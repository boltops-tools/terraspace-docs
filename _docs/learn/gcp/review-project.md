---
title: Review Project
search_title: Review Project Azure
category: learn-google
order: 4
---

{% include videos/learn/getting-started/google.md %}

Let's explore the generated app folder.

## App Modules

Let's check out the `app/modules/example` folder.

main.tf

```terraform
resource "google_storage_bucket" "this" {
  name                        = var.name
  uniform_bucket_level_access = var.uniform_bucket_level_access
  location                    = var.location
}
```

variables.tf

```terraform
variable "name" {
  description = "bucket name (required)"
  type        = string
}

variable "uniform_bucket_level_access" {
  description = "uniform_bucket_level_access"
  type        = bool
  default     = false
}

variable "location" {
  description = "location"
  type        = string
  default     = "US"
}
```

You can see that the starter example module creates an gcs bucket.

## Stack Modules

Next let's look at the generated `app/stacks/demo` that was created:

app/stacks/demo/main.tf

```terraform
resource "random_pet" "this" {
  length = 2
}

module "bucket" {
  source = "../../modules/example"

  name                        = "bucket-${random_pet.this.id}"
  uniform_bucket_level_access = var.uniform_bucket_level_access
  location                    = var.location
}
```

You can see that it's just another terraform module, that will use the `app/modules/example` module. It uses the `random_pet` resource to provide a random but friendly name for the gcs bucket.

{% include intro/modules-vs-stacks.md %}

Next, we'll deploy the infrastructure.
