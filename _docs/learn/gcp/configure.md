---
title: Configure Google Cloud
---

Configure Google Cloud so Terraspace can connect to GCP. The recommended way is to:

1. setting up the `~/.gcp/credentials.json`
2. setting your `GOOGLE_APPLICATION_CREDENTIALS`, `GOOGLE_PROJECT`, `GOOGLE_REGION`, and `GOOGLE_ZONE` environment variables

## Example

~/.gcp/config

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
    export GOOGLE_PROJECT=$(cat ~/.gcp/credentials.json  | jq -r '.project_id')
    export GOOGLE_REGION=us-central1
    export GOOGLE_ZONE=us-central1-a # only used by terraform provider

Note, it makes use of the `jq` command to grab the `GOOGLE_PROJECT` from the `credentials.json` file. You can either install jq or just add the actual value of your google project id.

## Test GCP Setup

Here are some useful commands to test that the GCP CLI is working:

    gcloud config list
    gcloud compute zones list --filter=region:us-central1

## Resources

* [Google SDK Install Docs](https://cloud.google.com/sdk/install)

Next, we'll create a new project.
