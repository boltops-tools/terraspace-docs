---
title: AWS Terraspace Plugin
---

The AWS Terraspace Plugin adds support for the automatic creation of the backend storage s3 bucket and dynamodb table. By default:

* S3 Buckets are secured with [encryption](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html), have an [enforce ssl bucket policy](https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-policy-for-config-rule/), have [versioning enabled](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html), and have a [lifecycle policy](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-lifecycle.html). [Bucket server access logging](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerLogs.html) and also be optionally enabled.
* DynamoDB tables have [encryption enabled](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/EncryptionAtRest.html) using the AWS Managed KMS Key for DynamoDB.

The plugin settings are configurable with:

config/plugins/aws.rb

```ruby
TerraspacePluginAws.configure do |config|
  config.auto_create = true # set to false to completely disable auto creation

  config.s3.encryption = true
  config.s3.enforce_ssl = true
  config.s3.versioning = true
  config.s3.lifecycle = true
  config.s3.access_logging = false # false is the default setting
  config.s3.secure_existing = false # run the security controls on existing buckets. by default, only run on newly created bucket the first time

  config.dynamodb.encryption = true
  config.dynamodb.kms_master_key_id = nil
  config.dynamodb.sse_type = "KMS"
end
```

For more docs, refer to the plugin itself: [terraspace_plugin_aws](https://github.com/boltops-tools/terraspace_plugin_aws).