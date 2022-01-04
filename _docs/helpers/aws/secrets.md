---
title: AWS Secrets
nav_text: Secrets
categories: helpers-aws
---

{% include videos/learn/aws-secrets.md %}

The `aws_secret` helper fetches secret data from AWS Secrets Manager.

## Example

app/stacks/demo/tfvars/dev.tfvars

    user = "<%= aws_secret("demo-:ENV-user") %>"
    pass = "<%= aws_secret("demo-:ENV-pass") %>"

For example if you have these secret values:

    $ aws secretsmanager get-secret-value --secret-id demo-dev-user | jq '.SecretString'
    bob
    $ aws secretsmanager get-secret-value --secret-id demo-dev-pass | jq '.SecretString'
    test

.terraspace-cache/us-west-2/dev/stacks/demo/1-dev.auto.tfvars

    user = "bob"
    pass = "test"

## Automatic Expansion

Notice how `:ENV` is expanded in the example above. Support for this was automatically added in terraspace\_plugin_aws 0.3.6. To update:

    bundle update terraspace_plugin_aws

It's also recommended you update generally. So you use the latest version of terraspace also.

    bundle update

If you need to stay with the old version of terraspace\_plugin_aws, then use regular Ruby:

app/stacks/demo/tfvars/dev.tfvars

    user = "<%= aws_secret("demo-#{Terraspace.env}-user") %>"
    pass = "<%= aws_secret("demo-#{Terraspace.env}-pass") %>"

To selectively disable expansion you can provide the `expand: false` option.

app/stacks/demo/tfvars/dev.tfvars

    user = "<%= aws_secret("demo-:ENV-user, expand: false") %>"
    pass = "<%= aws_secret("demo-:ENV-pass, expand: false") %>"
