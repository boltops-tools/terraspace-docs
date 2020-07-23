---
title: Configure Google Cloud
---

Configure Google Cloud so Terraspace can connect to it. The recommended way is to:

1. set up the `~/.gcp/credentials.json`
2. set up `GOOGLE_APPLICATION_CREDENTIALS`, `GOOGLE_PROJECT`, `GOOGLE_REGION`, and `GOOGLE_ZONE` environment variables

## Example

To configure your `GOOGLE_APPLICATION_CREDENTIALS` you need to set up a service account. Follow the Google [Getting Started with Authentication](https://cloud.google.com/docs/authentication/getting-started).

You'll download a JSON credentials file that looks something like the following. This is just an example:

~/.gcp/credentials.json

```json
{
  "type": "service_account",
  "project_id": "project-123456",
  "private_key_id": "06410f6eb4d7701419afbaceb21d9a239EXAMPLE",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...==\n-----END PRIVATE KEY-----\n",
  "client_email": "name@project-123456.iam.gserviceaccount.com",
  "client_id": "109186985834EXAMPLE",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/name%40project-123456.iam.gserviceaccount.com"
}
```

In your `~/.bashrc` or `~/.profile`, use these lines to set environment variables:

    export GOOGLE_APPLICATION_CREDENTIALS=~/.gcp/credentials.json
    # The rest of the environment variables are used by the Google terraform provider. See: https://www.terraform.io/docs/providers/google/guides/provider_reference.html#project-1
    export GOOGLE_PROJECT=$(cat ~/.gcp/credentials.json  | jq -r '.project_id')
    export GOOGLE_REGION=us-central1
    export GOOGLE_ZONE=us-central1-a

Note, it makes use of the `jq` command to grab the `GOOGLE_PROJECT` from the `credentials.json` file. You can either install jq or just add the actual value of your google project id.

## Test Google API Access

To use that GOOGLE_APPLICATION_CREDENTIALS is valid and is working you can use the [boltops-tools/google_check](https://github.com/boltops-tools/google_check) test script to check. Here are the summarized commands:

    git clone https://github.com/boltops-tools/google_check
    cd google_check
    bundle
    bundle exec ruby google_check.rb

You should see something like this:

    $ bundle exec ruby google_check.rb
    Listing gcs buckets as a test
    my-gcs-bucket
    Successfully connected to Google API with your GOOGLE_APPLICATION_CREDENTIALS
    $

## Set up gcloud cli

Though not necessary for Terraspace and Terraform to work, it is useful to also install the gcloud cli. Here are the instructions to install the [Google SDK Install Docs](https://cloud.google.com/sdk/install). After you install it, you'll need to login:

    gcloud auth login

After you've authenticated, here are some useful commands to test that the GCP CLI is working:

    gcloud config list
    gcloud compute zones list --filter=region:us-central1

## Resources

Next, we'll create a new project.
