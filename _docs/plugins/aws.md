---
title: AWS Terraspace Plugin
---

The AWS Terraspace Plugin adds support for the automatic creation of the backend storage s3 bucket and dynamodb table. By default:

* S3 Buckets are secured with [encryption](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html), have an [enforce ssl bucket policy](https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-policy-for-config-rule/), have [versioning enabled](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html), have a [lifecycle policy](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-lifecycle.html), and [block public access](https://aws.amazon.com/s3/features/block-public-access/). [Bucket server access logging](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerLogs.html) and also be optionally enabled.
* DynamoDB tables have [encryption enabled](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/EncryptionAtRest.html) using the AWS Managed KMS Key for DynamoDB.

The plugin settings are configurable with:

config/plugins/aws.rb

```ruby
TerraspacePluginAws.configure do |config|
  config.auto_create = true # set to false to completely disable auto creation
  config.tags = {key1: "value1". key2: "value2"} # set for both s3 bucket and dynamodb table
  config.tag_existing = true # if bucket or dynamodb already exists will tag them. Tags are appended.

  config.s3.access_logging = false # false is the default setting
  config.s3.block_public_access = true
  config.s3.encryption = true
  config.s3.enforce_ssl = true
  config.s3.lifecycle = true
  config.s3.versioning = true
  config.s3.secure_existing = false # run the security controls on existing buckets. by default, only run on newly created bucket the first time
  # config.s3.tags = {} # override config.tags setting

  config.dynamodb.encryption = true
  config.dynamodb.kms_master_key_id = nil
  config.dynamodb.sse_type = "KMS"
  # config.dynamodb.tags = {} # override config.tags setting
end
```

## Plugin Options

Name | Description | Default
---|---|---
auto_create | Whether or not to automatically create the S3 bucket and DynamoDB table. | true
tag_existing | Whether or not to tag already created or existing buckets. When turned off, tagging on runs when the s3 bucket or dynamo table is initially created. | true
tags | Tags for both the s3 bucket and dynamodb table. Respected if the `s3.tags` and `dynamodb.tags` are not set. |  {}
dynamodb.encryption | Whether or not enable encryption on the DynamoDB table. |  true
dynamodb.kms_master_key_id | Specify the KMS key to use. By default, the default DynamoDB key associated with the AWS account is used. |  nil
dynamodb.sse_type | Server-side encryption type. |  "KMS"
dynamodb.tags | Tags the dynamodb table. Overrides `tags`. |  {}
s3.access_logging | Whether or not to enable access logging on the S3 bucket.  |  false
s3.encryption | Whether or not to enable S3 bucket encryption. |  true
s3.enforce_ssl | Whether or not to add a S3 bucket policy that enforces SSL. |  true
s3.lifecycle | Whether or not to add a lifecycle policy that cleans up old versions to the S3 bucket. |  true
s3.secure_existing | Whether or not to run the security controls on existing buckets. By default, only run on newly created bucket the first time. | false
s3.tags | Tags the s3 bucket. Overrides `tags`. |  {}
s3.versioning | Whether or not to enable versioning on the S3 bucket. |  true

The full list refer to plugin source code: [terraspace_plugin_aws](https://github.com/boltops-tools/terraspace_plugin_aws/blob/master/lib/terraspace_plugin_aws/interfaces/config.rb).
