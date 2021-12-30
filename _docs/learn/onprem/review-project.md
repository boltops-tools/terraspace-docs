---
title: Review Project
search_title: Review Project Non-Cloud
---

Let's explore the generated app folder.

## App Modules

Let's check out the `app/modules/example` folder.

main.tf

```terraform
resource "random_pet" "this" {
  length = var.length
}
```

variables.tf

```terraform
variable "length" {
  type        = number
  description = "number of words"
  default     = 2
}
```

You can see that the starter example module creates an random_pet resource.

## Stack Modules

Next let's look at the generated `app/stacks/demo` that was created:

app/stacks/demo/main.tf

```terraform
module "pet" {
  source     = "../../modules/example"
  length     = var.length
}
```

You can see that it's just another terraform module, that will use the `app/modules/example` module to create the random_pet.

{% include intro/modules-vs-stacks.md %}

Next, we'll deploy the infrastructure.
