---
title: Destroy Infrastructure
search_title: Destroy Infrastructure AWS
---

{% include videos/learn/getting-started/aws.md %}

Now that we've seen how to deploy infra, let's clean up and tear down the resources.

To destroy the resources, run:

    terraspace down demo

You'll be prompted to make sure you really want to delete these resources.

    $ terraspace down demo
    Building .terraspace-cache/us-west-2/dev/stacks/demo
    Current directory: .terraspace-cache/us-west-2/dev/stacks/demo
    => terraform destroy
    random_pet.this: Refreshing state... [id=discrete-quetzal]
    module.bucket.aws_s3_bucket.this: Refreshing state... [id=bucket-discrete-quetzal]

    Terraform used the selected providers to generate the following execution
    plan. Resource actions are indicated with the following symbols:
      - destroy

    Terraform will perform the following actions:

      # random_pet.this will be destroyed
      - resource "random_pet" "this" {
          - id        = "discrete-quetzal" -> null
          - length    = 2 -> null
          - separator = "-" -> null
        }

      # module.bucket.aws_s3_bucket.this will be destroyed
      - resource "aws_s3_bucket" "this" {
          - arn                         = "arn:aws:s3:::bucket-discrete-quetzal" -> null
          - bucket                      = "bucket-discrete-quetzal" -> null
          - bucket_domain_name          = "bucket-discrete-quetzal.s3.amazonaws.com" -> null
          - bucket_regional_domain_name = "bucket-discrete-quetzal.s3.us-west-2.amazonaws.com" -> null
          - force_destroy               = false -> null
          - hosted_zone_id              = "Z3BJ6K6RIION7M" -> null
          - id                          = "bucket-discrete-quetzal" -> null
          - object_lock_enabled         = false -> null
          - region                      = "us-west-2" -> null
          - request_payer               = "BucketOwner" -> null
          - tags                        = {
              - "Name" = "my-bucket"
            } -> null
          - tags_all                    = {
              - "Name" = "my-bucket"
            } -> null

          - grant {
              - id          = "0a1482b6182dbd965b93fc1e091b5d434dad57eb19b5f04ffb6b9e3450677c98" -> null
              - permissions = [
                  - "FULL_CONTROL",
                ] -> null
              - type        = "CanonicalUser" -> null
            }

          - server_side_encryption_configuration {
              - rule {
                  - bucket_key_enabled = false -> null

                  - apply_server_side_encryption_by_default {
                      - sse_algorithm = "AES256" -> null
                    }
                }
            }

          - versioning {
              - enabled    = false -> null
              - mfa_delete = false -> null
            }
        }

    Plan: 0 to add, 0 to change, 2 to destroy.

    Changes to Outputs:
      - bucket_name = "bucket-discrete-quetzal" -> null

    Do you really want to destroy all resources?
      Terraform will destroy all your managed infrastructure, as shown above.
      There is no undo. Only 'yes' will be accepted to confirm.

      Enter a value:

Once again, we prompted to `Enter a value:`. Type `yes` and press enter to destroy the infrastructure.

      Enter a value: yes
    module.bucket.aws_s3_bucket.this: Destroying... [id=bucket-discrete-quetzal]
    module.bucket.aws_s3_bucket.this: Destruction complete after 0s
    random_pet.this: Destroying... [id=discrete-quetzal]
    random_pet.this: Destruction complete after 0s

    Destroy complete! Resources: 2 destroyed.
    $

Congrats! You have successfully created, modified, and destroy infrastructure with terraspace.

Next, we'll look at some next steps.
