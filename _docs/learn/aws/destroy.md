---
title: Destroy Infrastructure
search_title: Destroy Infrastructure AWS
---

{% include videos/learn/terraspace-getting-started-with-aws.md %}

Now that we've seen how to deploy infra, let's clean up and tear down the resources.

To destroy the resources, run:

    terraspace down demo

You'll be prompted to make sure you really want to delete these resources.

    $ terraspace down demo
    Building .terraspace-cache/us-west-2/dev/stacks/demo
    Current directory: .terraspace-cache/us-west-2/dev/stacks/demo
    => terraform init -get -input=false >> /tmp/terraspace/log/init/demo.log
    Built in .terraspace-cache/us-west-2/dev/stacks/demo
    => terraform destroy
    random_pet.bucket: Refreshing state... [id=liked-poodle]
    module.bucket.aws_s3_bucket.this: Refreshing state... [id=bucket-liked-poodle]

    An execution plan has been generated and is shown below.
    Resource actions are indicated with the following symbols:
      - destroy

    Terraform will perform the following actions:

      # random_pet.bucket will be destroyed
      - resource "random_pet" "this" {
          - id        = "liked-poodle" -> null
          - length    = 2 -> null
          - separator = "-" -> null
        }

      # module.bucket.aws_s3_bucket.this will be destroyed
      - resource "aws_s3_bucket" "this" {
          - acl                         = "public-read" -> null
          - arn                         = "arn:aws:s3:::bucket-liked-poodle" -> null
          - bucket                      = "bucket-liked-poodle" -> null
          - bucket_domain_name          = "bucket-liked-poodle.s3.amazonaws.com" -> null
          - bucket_regional_domain_name = "bucket-liked-poodle.s3.us-west-2.amazonaws.com" -> null
          - force_destroy               = false -> null
          - hosted_zone_id              = "Z3BJ6K6RIION7M" -> null
          - id                          = "bucket-liked-poodle" -> null
          - region                      = "us-west-2" -> null
          - request_payer               = "BucketOwner" -> null
          - tags                        = {} -> null

          - versioning {
              - enabled    = false -> null
              - mfa_delete = false -> null
            }
        }

    Plan: 0 to add, 0 to change, 2 to destroy.

    Do you really want to destroy all resources?
      Terraform will destroy all your managed infrastructure, as shown above.
      There is no undo. Only 'yes' will be accepted to confirm.

      Enter a value:

Once again, we prompted to `Enter a value:`. Type `yes` and press enter to destroy the infrastructure.

      Enter a value: yes

    module.bucket.aws_s3_bucket.this: Destroying... [id=bucket-liked-poodle]
    module.bucket.aws_s3_bucket.this: Destruction complete after 1s
    random_pet.bucket: Destroying... [id=liked-poodle]
    random_pet.bucket: Destruction complete after 0s

    Destroy complete! Resources: 2 destroyed.
    $

Congrats! You have successfully created, modified, and destroy infrastructure with terraspace.

Next, we'll look at some next steps.
