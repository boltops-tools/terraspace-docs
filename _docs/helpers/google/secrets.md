---
title: Google Secrets
nav_text: Secrets
categories: helpers-google
---

The `google_secret` helper fetches secret data from Google Secrets Manager.

## Example

app/stacks/demo/tfvars/dev.tfvars

    user = "<%= google_secret("demo-:ENV-user") %>"
    pass = "<%= google_secret("demo-:ENV-pass") %>"

For example if you have these secret values:

    $ gcloud secrets versions access latest --secret demo-dev-pass
    bob
    $ gcloud secrets versions access latest --secret demo-dev-user
    test

.terraspace-cache/us-west-2/dev/stacks/demo/1-dev.auto.tfvars

    user = "bob"
    pass = "test"

## Automatic Expansion

Notice how `:ENV` is expanded in the example above. Support for this was automatically added in terraspace\_plugin_google 0.3.3. To update:

    bundle update terraspace_plugin_azure

It's also recommended you update generally. So you use the latest version of terraspace also.

    bundle update

If you need to stay with the old version of terraspace\_plugin_google, then use regular Ruby:

app/stacks/demo/tfvars/dev.tfvars

    user = "<%= google_secret("demo-#{Terraspace.env}-user") %>"
    pass = "<%= google_secret("demo-#{Terraspace.env}-pass") %>"

To selectively disable expansion you can provide the `expand: false` option.

app/stacks/demo/tfvars/dev.tfvars

    user = "<%= google_secret("demo-#{Terraspace.env}-user", expand: false) %>"
    pass = "<%= google_secret("demo-#{Terraspace.env}-pass", expand: false) %>"
