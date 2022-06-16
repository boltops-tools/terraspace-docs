---
title: Secrets in State File
---

Terraspace allows you to use helper methods to pull in secret data like passwords from Secret Storage providers like [AWS Secrets Manager]({% link _docs/helpers/aws/secrets.md %}), [AWS SSM Parameter Store]({% link _docs/helpers/aws/ssm.md %}), [Google Secrets Manager]({% link _docs/helpers/azure/secrets.md %}), [Azure KeyVault]({% link _docs/helpers/google/secrets.md %}), etc. These providers are specifically designed to store sensitive information.

You use the Terraspace helpers in the tfvars to get the secret data and configure variables. You then use these variables to deploy the infrastructure. The secret data is ultimately persisted to the Terraform statefile.

This is a key point. No matter how the variables are provided, even if the secrets were sent as input variables via prompts, they are stored in the statefile.  Though Terraspace makes sure that remote backends, like the AWS S3 bucket, have encryption enabled, users who have access to backend storage will also have access to the secrets. Having the bucket encrypted at REST may or may not suffice for your requirements.

One approach to additionally harden the security posture is to run Terraspace via [CI/CD]({% link _docs/ci.md %}). In this setup, Terraform executes on a secure machine, and only that machine would have access to the statefile. Of course, the con is the increased overhead of managing that infrastructure. There's a Terraform open issue discussing this: [Storing sensitive values in state files](https://github.com/hashicorp/terraform/issues/516).
