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
    => terraform init -get -input=false >> /tmp/terraspace/log/init/demo.log
    Built in .terraspace-cache/us-west-2/dev/stacks/demo
    => terraform destroy
    random_pet.bucket: Refreshing state... [id=liked-poodle]
    module.bucket.aws_s3_bucket.this: Refreshing state... [id=bucket-liked-poodle]

    An execution plan has been generated and is shown below.
    Resource actions are indicated with the following symbols:
      - destroy

    Terraform will perform the following actions:

      # random_pet.this will be destroyed
      - resource "random_pet" "this" {
          - id        = "liked-poodle" -> null
          - length    = 2 -> null
          - separator = "-" -> null
        }
      # module.bucket.aws_s3_bucket.this will be destroyed
      - resource "aws_s3_bucket" "this" {
          - acl                                  = "private" -> null
          - arn                                  = "arn:aws:s3:::bucket-liked-poodle" -> null
          - bucket                               = "bucket-liked-poodle" -> null
          - bucket_domain_name                   = "bucket-liked-poodle.s3.amazonaws.com" -> null
          - bucket_regional_domain_name          = "bucket-liked-poodle.s3.us-west-2.amazonaws.com" -> null
          - cors_rule                            = [] -> null
          - force_destroy                        = false -> null
          - grant                                = [
              - {
                  - id          = ""
                  - permissions = [
                      - "READ",
                    ]
                  - type        = "Group"
                  - uri         = "http://acs.amazonaws.com/groups/global/AllUsers"
                },
              - {
                  - id          = "0a1482b6182dbd965b93fc1e091b5d434dad57eb19b5f04ffb6b9e3450677c98"
                  - permissions = [
                      - "FULL_CONTROL",
                    ]
                  - type        = "CanonicalUser"
                  - uri         = ""
                },
            ] -> null
          - hosted_zone_id                       = "Z3BJ6K6RIION7M" -> null
          - id                                   = "bucket-liked-poodle" -> null
          - lifecycle_rule                       = [] -> null
          - logging                              = [] -> null
          - region                               = "us-west-2" -> null
          - replication_configuration            = [] -> null
          - request_payer                        = "BucketOwner" -> null
          - server_side_encryption_configuration = [] -> null
          - tags                                 = {} -> null
          - tags_all                             = {} -> null
          - versioning                           = [
              - {
                  - enabled    = false
                  - mfa_delete = false
                },
            ] -> null
          - website                              = [] -> null
        }
      # module.bucket.aws_s3_bucket_acl.this will be destroyed
      - resource "aws_s3_bucket_acl" "this" {
          - acl    = "public-read" -> null
          - bucket = "bucket-liked-poodle" -> null
          - id     = "bucket-liked-poodle,public-read" -> null

          - access_control_policy {
              - grant {
                  - permission = "READ" -> null

                  - grantee {
                      - type = "Group" -> null
                      - uri  = "http://acs.amazonaws.com/groups/global/AllUsers" -> null
                    }
                }
              - grant {
                  - permission = "FULL_CONTROL" -> null

                  - grantee {
                      - display_name = "tung" -> null
                      - id           = "0a1482b6182dbd965b93fc1e091b5d434dad57eb19b5f04ffb6b9e3450677c98" -> null
                      - type         = "CanonicalUser" -> null
                    }
                }

              - owner {
                  - display_name = "tung" -> null
                  - id           = "0a1482b6182dbd965b93fc1e091b5d434dad57eb19b5f04ffb6b9e3450677c98" -> null
                }
            }
        }
    Plan: 0 to add, 0 to change, 3 to destroy.

    Do you really want to destroy all resources?
      Terraform will destroy all your managed infrastructure, as shown above.
      There is no undo. Only 'yes' will be accepted to confirm.

      Enter a value:

Once again, we prompted to `Enter a value:`. Type `yes` and press enter to destroy the infrastructure.

      Enter a value: yes

    module.bucket.aws_s3_bucket_acl.this: Destroying... [id=bucket-coherent-swine,public-read]
    module.bucket.aws_s3_bucket_acl.this: Destruction complete after 0s
    module.bucket.aws_s3_bucket.this: Destroying... [id=bucket-coherent-swine]
    module.bucket.aws_s3_bucket.this: Destruction complete after 0s
    random_pet.this: Destroying... [id=coherent-swine]
    random_pet.this: Destruction complete after 0s

    Destroy complete! Resources: 3 destroyed.
    $

Congrats! You have successfully created, modified, and destroy infrastructure with terraspace.

Next, we'll look at some next steps.
