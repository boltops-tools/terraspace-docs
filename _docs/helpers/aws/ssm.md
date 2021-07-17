---
title: AWS SSM
nav_text: SSM
categories: helpers-aws
---

The `aws_ssm` helper fetches secret data from AWS SSM Parameter Store.

## Example

app/stacks/demo/tfvars/dev.tfvars

    user = "<%= aws_ssm('/demo/#{Terraspace.env}/user') %>"
    pass = "<%= aws_ssm('/demo/#{Terraspace.env}/pass') %>"

For example if you have these secret values:

    $ aws ssm get-parameter --name /demo/dev/user --with-decryption | jq '.Parameter.Value'
    bob
    $ aws ssm get-parameter --name /demo/dev/pass --with-decryption | jq '.Parameter.Value'
    test

.terraspace-cache/us-west-2/dev/stacks/demo/1-dev.auto.tfvars

    user = "bob"
    pass = "test"
