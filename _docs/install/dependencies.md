---
title: Installation Dependencies
---

## Terraform

Terraform is required. To install terraform see: [Install Terraform]({% link _docs/install/terraform.md %})

## Cloud Provider CLI

Install the corresponding cloud provider CLI tool that you are using. Example:

* AWS: [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
* Azure: [az cli](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
* GCP: [gcloud cli](https://cloud.google.com/sdk/install)

## Cloud Provider Credentials

If you need to set up the Cloud Provider credentials, here are the docs from the Getting Started Guides:

* [Configure AWS]({% link _docs/learn/aws/configure.md %})
* [Configure Azure]({% link _docs/learn/azure/configure.md %})
* [Configure GCP]({% link _docs/learn/gcp/configure.md %})

## Linux

Terraspace currently only works on MacOSX and Linux. Depending on demand, Windows support may be added in time. For now, using something like [Cloud9 IDE](https://aws.amazon.com/cloud9/) is probably your best option. All you need is a browser and you'll have a fully working linux-based development environment.

{% if include.provider %}
Next, we'll configure {{ include.provider }}.
{% endif %}
