---
title: Deploy Infrastructure
---

Let's go ahead and deploy the infrastructure

    $ terraspace up demo

The `terraspace up` command will build the files and then essentially run `terraform apply`.

    $ terraspace up demo
    Building .terraspace-cache/us-central1/dev/stacks/demo
    Current directory: .terraspace-cache/us-central1/dev/stacks/demo
    => terraform init -get > /dev/null
    Built in .terraspace-cache/us-central1/dev/stacks/demo
    => terraform apply

    An execution plan has been generated and is shown below.
    Resource actions are indicated with the following symbols:
      + create

    Terraform will perform the following actions:

      # random_pet.bucket will be created
      + resource "random_pet" "this" {
          + id        = (known after apply)
          + length    = 2
          + separator = "-"
        }

      # module.bucket.google_storage_bucket.this will be created
      + resource "google_storage_bucket" "this" {
          + uniform_bucket_level_access = false
          + force_destroy               = false
          + id                          = (known after apply)
          + location                    = "US"
          + name                        = (known after apply)
          + project                     = (known after apply)
          + self_link                   = (known after apply)
          + storage_class               = "STANDARD"
          + url                         = (known after apply)
        }

    Plan: 2 to add, 0 to change, 0 to destroy.

    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value:

You get shown what will be provisioned and prompted with `Enter a value:`

Type `yes` and press enter and you'll see terraform apply finishing.

      Enter a value: yes

    random_pet.bucket: Creating...
    random_pet.bucket: Creation complete after 0s [id=optimum-gazelle]
    module.bucket.google_storage_bucket.this: Creating...
    module.bucket.google_storage_bucket.this: Creation complete after 1s [id=bucket-optimum-gazelle]

    Apply complete! Resources: 2 added, 0 changed, 0 destroyed.

    Outputs:

    bucket_url = gs://bucket-optimum-gazelle
    $

You can see the bucket got created.

Note, you can also use the `-y` option to bypass the prompt. IE: `terraspace up demo -y`.

Next, we'll make some changes to the infrastructure code.
