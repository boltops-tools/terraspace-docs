---
title: AWS Secrets
nav_text: Secrets
categories: helpers-aws
---

{% include videos/learn/aws-secrets.md %}

The `aws_secret` helper fetches secret data from AWS Secrets Manager.

## Example

app/stacks/demo/tfvars/dev.tfvars

    user = "<%= aws_secret("demo-#{Terraspace.env}-user") %>"
    pass = "<%= aws_secret("demo-#{Terraspace.env}-pass") %>"

For example if you have these secret values:

    $ aws secretsmanager get-secret-value --secret-id demo-dev-user | jq '.SecretString'
    bob
    $ aws secretsmanager get-secret-value --secret-id demo-dev-pass | jq '.SecretString'
    test

.terraspace-cache/us-west-2/dev/stacks/demo/1-dev.auto.tfvars

    user = "bob"
    pass = "test"
