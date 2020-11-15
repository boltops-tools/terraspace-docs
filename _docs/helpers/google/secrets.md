---
title: Google Secrets
nav_text: Secrets
categories: helpers-google
---

The `google_secret` helper fetches secret data from Google Secrets Manager.

## Example

app/stacks/demo/tfvars/dev.tfvars

    user = "<%= google_secret("demo-#{Terraspace.env}-user") %>"
    pass = "<%= google_secret("demo-#{Terraspace.env}-pass") %>"

For example if you have these secret values:

    $ gcloud secrets versions access latest --secret demo-dev-pass
    bob
    $ gcloud secrets versions access latest --secret demo-dev-user
    test

.terraspace-cache/us-west-2/dev/stacks/demo/01-dev.auto.tfvars

    user = "bob"
    pass = "test"
