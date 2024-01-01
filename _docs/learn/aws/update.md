---
title: Update Infrastructure
search_title: Update Infrastructure AWS
category: learn-aws
order: 7
---

{% include videos/learn/getting-started/aws.md %}

Let's update the infrastructure.

    $ terraspace up demo

Terraspace will show you a preview of the changes and prompt you to update the infrastructure.

    $ terraspace up demo
    Building .terraspace-cache/us-west-2/dev/stacks/demo
    Current directory: .terraspace-cache/us-west-2/dev/stacks/demo
    => terraform apply -input=false
    random_pet.this: Refreshing state... [id=discrete-quetzal]
    module.bucket.aws_s3_bucket.this: Refreshing state... [id=bucket-discrete-quetzal]

    Terraform used the selected providers to generate the following execution
    plan. Resource actions are indicated with the following symbols:
      ~ update in-place

    Terraform will perform the following actions:

      # module.bucket.aws_s3_bucket.this will be updated in-place
      ~ resource "aws_s3_bucket" "this" {
            id                          = "bucket-discrete-quetzal"
          ~ tags                        = {
              + "Name" = "my-bucket"
            }
          ~ tags_all                    = {
              + "Name" = "my-bucket"
            }
            # (9 unchanged attributes hidden)

            # (3 unchanged blocks hidden)
        }

    Plan: 0 to add, 1 to change, 0 to destroy.

    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value:

Once again, we shown what will change and prompted to `Enter a value:`. Type `yes` and press enter.

      Enter a value: yes
    module.bucket.aws_s3_bucket.this: Modifying... [id=bucket-discrete-quetzal]
    module.bucket.aws_s3_bucket.this: Modifications complete after 0s [id=bucket-discrete-quetzal]

    Apply complete! Resources: 0 added, 1 changed, 0 destroyed.


    Outputs:

    bucket_name = "bucket-discrete-quetzal"
    $

The modification has been applied.

Next, we'll destroy the infrastructure.