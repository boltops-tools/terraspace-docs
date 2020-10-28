---
title: Destroy Infrastructure
---

Now that we've seen how to deploy infra, let's clean up and tear down the resources.

To destroy the resources, run:

    terraspace down demo

You'll be prompted to make sure you really want to delete these resources.

    $ terraspace down demo
    Building .terraspace-cache/us-central1/dev/stacks/demo
    Current directory: .terraspace-cache/us-central1/dev/stacks/demo
    => terraform init -get -input=false >> /tmp/terraspace/log/init/demo.log
    Built in .terraspace-cache/us-central1/dev/stacks/demo
    => terraform destroy
    random_pet.bucket: Refreshing state... [id=optimum-gazelle]
    module.bucket.google_storage_bucket.this: Refreshing state... [id=bucket-optimum-gazelle]

    An execution plan has been generated and is shown below.
    Resource actions are indicated with the following symbols:
      - destroy

    Terraform will perform the following actions:

      # random_pet.bucket will be destroyed
      - resource "random_pet" "this" {
          - id        = "optimum-gazelle" -> null
          - length    = 2 -> null
          - separator = "-" -> null
        }

      # module.bucket.google_storage_bucket.this will be destroyed
      - resource "google_storage_bucket" "this" {
          - uniform_bucket_level_access = true -> null
          - default_event_based_hold    = false -> null
          - force_destroy               = false -> null
          - id                          = "bucket-optimum-gazelle" -> null
          - labels                      = {} -> null
          - location                    = "US" -> null
          - name                        = "bucket-optimum-gazelle" -> null
          - project                     = "tung-275700" -> null
          - requester_pays              = false -> null
          - self_link                   = "https://www.googleapis.com/storage/v1/b/bucket-optimum-gazelle" -> null
          - storage_class               = "STANDARD" -> null
          - url                         = "gs://bucket-optimum-gazelle" -> null
        }

    Plan: 0 to add, 0 to change, 2 to destroy.

    Do you really want to destroy all resources?
      Terraform will destroy all your managed infrastructure, as shown above.
      There is no undo. Only 'yes' will be accepted to confirm.

      Enter a value:

Once again, we prompted to `Enter a value:`. Type `yes` and press enter to destroy the infrastructure.

      Enter a value: yes

    module.bucket.google_storage_bucket.this: Destroying... [id=bucket-optimum-gazelle]
    module.bucket.google_storage_bucket.this: Destruction complete after 1s
    random_pet.bucket: Destroying... [id=optimum-gazelle]
    random_pet.bucket: Destruction complete after 0s

    Destroy complete! Resources: 2 destroyed.
    $

Congrats! You have successfully created, modified, and destroy infrastructure with terraspace.

Next, we'll look at some next steps.
