---
title: Update Infrastructure
search_title: Update Infrastructure AWS
---

Let's update the infrastructure.

    $ terraspace up demo

Terraspace will show you a preview of the changes and prompt you to update the infrastructure.

    $ terraspace up demo
    Building .terraspace-cache/us-west-2/dev/stacks/demo
    Current directory: .terraspace-cache/us-west-2/dev/stacks/demo
    => terraform init -get -input=false >> /tmp/terraspace/log/init/demo.log
    Built in .terraspace-cache/us-west-2/dev/stacks/demo
    => terraform apply
    random_pet.bucket: Refreshing state... [id=liked-poodle]
    module.bucket.aws_s3_bucket.this: Refreshing state... [id=bucket-liked-poodle]

    An execution plan has been generated and is shown below.
    Resource actions are indicated with the following symbols:
      ~ update in-place

    Terraform will perform the following actions:

      # module.bucket.aws_s3_bucket.this will be updated in-place
      ~ resource "aws_s3_bucket" "this" {
          ~ acl                         = "private" -> "public-read"
            arn                         = "arn:aws:s3:::bucket-liked-poodle"
            bucket                      = "bucket-liked-poodle"
            bucket_domain_name          = "bucket-liked-poodle.s3.amazonaws.com"
            bucket_regional_domain_name = "bucket-liked-poodle.s3.us-west-2.amazonaws.com"
            force_destroy               = false
            hosted_zone_id              = "Z3BJ6K6RIION7M"
            id                          = "bucket-liked-poodle"
            region                      = "us-west-2"
            request_payer               = "BucketOwner"
            tags                        = {}

            versioning {
                enabled    = false
                mfa_delete = false
            }
        }

    Plan: 0 to add, 1 to change, 0 to destroy.

    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value:

Once again, we shown what will change and prompted to `Enter a value:`. Type `yes` and press enter.

      Enter a value: yes

    module.bucket.aws_s3_bucket.this: Modifying... [id=bucket-liked-poodle]
    module.bucket.aws_s3_bucket.this: Modifications complete after 1s [id=bucket-liked-poodle]

    Apply complete! Resources: 0 added, 1 changed, 0 destroyed.

    Outputs:

    bucket_name = bucket-liked-poodle
    $

The modification has been applied.

Next, we'll destroy the infrastructure.