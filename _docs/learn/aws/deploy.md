---
title: Deploy Infrastructure
search_title: Deploy Infrastructure AWS
---

{% include videos/learn/getting-started/aws.md %}

Let's go ahead and deploy the infrastructure

    $ terraspace up demo

The `terraspace up` command will build the files and then essentially run `terraform apply`.

    $ terraspace up demo
    Building .terraspace-cache/us-west-2/dev/stacks/demo
    Current directory: .terraspace-cache/us-west-2/dev/stacks/demo
    => terraform init -get -input=false >> /tmp/terraspace/log/init/demo.log
    Built in .terraspace-cache/us-west-2/dev/stacks/demo
    => terraform apply

    An execution plan has been generated and is shown below.
    Resource actions are indicated with the following symbols:
      + create

    Terraform will perform the following actions:
      # random_pet.this will be created
      + resource "random_pet" "this" {
          + id        = (known after apply)
          + length    = 2
          + separator = "-"
        }
      # module.bucket.aws_s3_bucket.this will be created
      + resource "aws_s3_bucket" "this" {
          + acceleration_status                  = (known after apply)
          + acl                                  = (known after apply)
          + arn                                  = (known after apply)
          + bucket                               = (known after apply)
          + bucket_domain_name                   = (known after apply)
          + bucket_regional_domain_name          = (known after apply)
          + cors_rule                            = (known after apply)
          + force_destroy                        = false
          + grant                                = (known after apply)
          + hosted_zone_id                       = (known after apply)
          + id                                   = (known after apply)
          + lifecycle_rule                       = (known after apply)
          + logging                              = (known after apply)
          + policy                               = (known after apply)
          + region                               = (known after apply)
          + replication_configuration            = (known after apply)
          + request_payer                        = (known after apply)
          + server_side_encryption_configuration = (known after apply)
          + tags_all                             = (known after apply)
          + versioning                           = (known after apply)
          + website                              = (known after apply)
          + website_domain                       = (known after apply)
          + website_endpoint                     = (known after apply)

          + object_lock_configuration {
              + object_lock_enabled = (known after apply)
              + rule                = (known after apply)
            }
        }
      # module.bucket.aws_s3_bucket_acl.this will be created
      + resource "aws_s3_bucket_acl" "this" {
          + acl    = "private"
          + bucket = (known after apply)
          + id     = (known after apply)

          + access_control_policy {
              + grant {
                  + permission = (known after apply)

                  + grantee {
                      + display_name  = (known after apply)
                      + email_address = (known after apply)
                      + id            = (known after apply)
                      + type          = (known after apply)
                      + uri           = (known after apply)
                    }
                }

              + owner {
                  + display_name = (known after apply)
                  + id           = (known after apply)
                }
            }
        }

    Plan: 3 to add, 0 to change, 0 to destroy.

    Do you want to perform these actions?
      Terraform will perform the actions described above.
      Only 'yes' will be accepted to approve.

      Enter a value:

You get shown what will be provisioned and prompted with `Enter a value:`

Type `yes` and press enter and you'll see terraform apply finishing.

      Enter a value: yes

    random_pet.this: Creating...
    random_pet.this: Creation complete after 0s [id=liked-poodle]
    module.bucket.aws_s3_bucket.this: Creating...
    module.bucket.aws_s3_bucket.this: Creation complete after 1s [id=bucket-liked-poodle]
    module.bucket.aws_s3_bucket_acl.this: Creating...
    module.bucket.aws_s3_bucket_acl.this: Creation complete after 0s [id=bucket-liked-poodle,private]

    Apply complete! Resources: 2 added, 0 changed, 0 destroyed.

    Outputs:

    bucket_name = bucket-liked-poodle
    $

You can see the bucket got created.

Note, you can also use the `-y` option to bypass the prompt. IE: `terraspace up demo -y`.

Next, we'll make some changes to the infrastructure code.
