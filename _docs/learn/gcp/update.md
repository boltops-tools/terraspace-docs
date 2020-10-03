---
title: Update Infrastructure
---

Let's update the infrastructure.

    $ terraspace up demo

Terraspace will show you a preview of the changes and prompt you to update the infrastructure.

    $ terraspace up demo
    Building .terraspace-cache/us-central1/dev/stacks/demo
    Current directory: .terraspace-cache/us-central1/dev/stacks/demo
    => terraform init -get > /dev/null
    Built in .terraspace-cache/us-central1/dev/stacks/demo
    => terraform apply
    random_pet.bucket: Refreshing state... [id=optimum-gazelle]
    module.bucket.google_storage_bucket.this: Refreshing state... [id=bucket-optimum-gazelle]

    An execution plan has been generated and is shown below.
    Resource actions are indicated with the following symbols:
      ~ update in-place

    Terraform will perform the following actions:

      # module.bucket.google_storage_bucket.this will be updated in-place
      ~ resource "google_storage_bucket" "this" {
          ~ uniform_bucket_level_access = false -> true
            default_event_based_hold    = false
            force_destroy               = false
            id                          = "bucket-optimum-gazelle"
            labels                      = {}
            location                    = "US"
            name                        = "bucket-optimum-gazelle"
            project                     = "tung-275700"
            requester_pays              = false
            self_link                   = "https://www.googleapis.com/storage/v1/b/bucket-optimum-gazelle"
            storage_class               = "STANDARD"
            url                         = "gs://bucket-optimum-gazelle"
        }

    Plan: 0 to add, 1 to change, 0 to destroy.

    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value:

Once again, we shown what will change and prompted to `Enter a value:`. Type `yes` and press enter.

      Enter a value: yes

    module.bucket.google_storage_bucket.this: Modifying... [id=bucket-optimum-gazelle]
    module.bucket.google_storage_bucket.this: Modifications complete after 0s [id=bucket-optimum-gazelle]

    Apply complete! Resources: 0 added, 1 changed, 0 destroyed.

    Outputs:

    bucket_url = gs://bucket-optimum-gazelle
    $

The modification has been applied.

Next, we'll destroy the infrastructure.